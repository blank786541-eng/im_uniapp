<script lang="ts" setup>

import DefaultHeader from "@/components/defaultHeader.vue";
import {ref} from "vue";
import {V2NIMUser} from "nim-web-sdk-ng/dist/v2/NIM_UNIAPP_SDK/V2NIMUserService";
import UQRCode from 'uqrcodejs';
import html2canvas from 'html2canvas'
const userInfo = ref<V2NIMUser>({
  accountId:"",
  name:""
})
import {onReady, onLoad} from '@dcloudio/uni-app'
import Avatar from "@/components/Avatar.vue";
import {getPlatform} from "@/utils";
import {httpRequest} from "@/utils/request";

const showBtn = ref(true);
const size=ref({
  windowWidth: 390,
  windowHeight: 844,
});
const option=ref({
  team:0,
  conversationId:""
})
onLoad((options) => {
  userInfo.value = uni.$UIKitStore.userStore.myUserInfo
  option.value=options;

})
onReady(() => {

  const result= uni.getSystemInfoSync();
  size.value.windowHeight=result.windowHeight;
  size.value.windowWidth=result.windowWidth-168
  make()
})

// 生成二维码
async  function make() {

  const data=await  httpRequest({
      url:'im/api/getUserCodeAndUrl',
    method:"GET",
    data:{
      account:userInfo.value.accountId,
    }
    })
  console.log(data.code,'url====')
  var qr = new UQRCode();
  // 设置二维码内容
  let url= option.value.team==1?"teamId=" +  option.value.conversationId:"addFriend="+userInfo.value.accountId;
  qr.data =url;
  // 设置二维码大小，必须与canvas设置的宽高一致
  qr.size = size.value.windowWidth;
  // 调用制作二维码方法
  qr.make();
  // 获取canvas上下文
  var canvasContext = uni.createCanvasContext('qrcode', this); // 如果是组件，this必须传入
  // 设置uQRCode实例的canvas上下文
  qr.canvasContext = canvasContext;
  // 调用绘制方法将二维码图案绘制到canvas上
  qr.drawCanvas();
  console.log('draw canvas')
}


// 截图并保存
function Save() {
  const platform=uni.getSystemInfoSync().uniPlatform
  console.log(platform)
  showBtn.value=false;
  setTimeout(() => {
    if (platform!= 'app') {
      captureH5();
    } else {
      captureApp();

    }
  },500)

}
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    // 1. 创建文件读取器实例
    const reader = new FileReader();

    // 2. 注册加载完成回调
    reader.onloadend = () => {
      // 4. 获取结果：data:image/png;base64,iVBORw0KGgo...
      resolve(reader.result);
    };

    // 3. 开始异步读取操作
    reader.readAsDataURL(blob);

    // 错误处理
    reader.onerror = (err) => reject(err);
  });
}
// H5端截图
function captureH5() {
  const element = document.getElementById('container');

  // 使用html2canvas库
  html2canvas(element, {
    backgroundColor: '#f5f7fa',
    scale: 2 // 提高清晰度
  }).then( canvas => {
    // 转换为图片

    canvas.toBlob(async blob => {
      // 创建下载链接
    const system=uni.getSystemInfoSync();
    console.log(system)
      if (jsBridge.inApp) {
        jsBridge.requestPermissions([  "WritePhotos","ReadPhotos" ], async function(res) {

          if (res.granted) {
            const base64 = await blobToBase64(blob);
            jsBridge.saveImageToAlbum(base64,(succ)=>{
              uni.showToast({
                title:succ ? "保存成功" : "保存失败：转码失败或没有相册使用权限",
                icon:"none"
              });
            })
          } else {
            uni.showToast({
              title: "保存失败：没有相册使用权限",
              icon:"none"
            });
          }
        });
      } else {
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = 'uniapp-screenshot.png';
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

      }






    });
  }).catch(err => {
    console.error('截图失败', err);

    uni.showToast({
      title:'保存失败',
      icon:"none"
    });
  }).finally(()=>{
    showBtn.value=true;
  });
}
function captureApp() {


  uni.createSelectorQuery()
      .select('#container')
      .boundingClientRect()
      .exec(rect => {
          const width = rect[0].width;
          const height = rect[0].height;

          const ctx = uni.createCanvasContext('hiddenCanvas', this);
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, width, height);

          // 绘制内容到canvas
          // 这里需要将HTML内容转换为canvas绘制命令

          ctx.draw(false, () => {
              uni.canvasToTempFilePath({
                  canvasId: 'hiddenCanvas',
                  success: res => {
                      uni.saveImageToPhotosAlbum({
                          filePath: res.tempFilePath,
                          success: () => {
                              uni.showToast({ title: '保存成功' });
                          },
                          fail: err => {
                              console.error('保存失败', err);
                              uni.showToast({ title: '保存失败', icon: 'none' });
                          }
                      });
                  },
                complete:()=>{
                  showBtn.value=true;
                },
                  fail: err => {
                      console.error('生成图片失败', err);
                      uni.showToast({ title: '生成图片失败', icon: 'none' });
                  }
              }, this);
          });
      });

}
</script>

<template>
  <div class="container" id="container">
    <default-header :title="option.team==1?'群二维码':'我的二维码'" background-color="#DBB077"
                    title-color="#fff"
                    back-icon="back-c"></default-header>
    <div  >

      <div class="content" id="content">
        <div class="user">
<!--          <Avatar :account="userInfo.accountId"></Avatar>-->
          <image :src="option.team!=1?userInfo.avatar:option.avatar"
                 style="width: 53px;height: 53px;position: relative;z-index: 10000;"></image>
          <div style="align-self: flex-end;margin-left: 14px">
            <div class="name" >{{ option.team!=1?userInfo.name:option.name }}</div>
            <div class="account" v-if="option.team!=1">用户号:&nbsp{{ userInfo.accountId }}</div>
            <div class="account" v-else>群号:&nbsp{{ option.conversationId }}</div>
          </div>
        </div>
        <div style="padding:20px;background-color: #fff;border-radius: 9px">
          <canvas id="qrcode" canvas-id="qrcode"
                  :style="{width: size.windowWidth+'px',height:size.windowWidth+'px'}"
          ></canvas>
        </div>
        <div class="scan">
          {{option.team!=1?'  扫一扫二维码，加我为好友':'扫一扫加入群聊'}}
        </div>
        <div class="btn flex-center" @tap="Save" :style="{opacity:showBtn?1:0}">
          保存到手机
        </div>

      </div>
      <canvas class="hidden-canvas" canvas-id="hiddenCanvas" id="hiddenCanvas"></canvas>
    </div>
  </div>

</template>

<style scoped lang="scss">


page {
  width: 100%;
  height: 100%;
}

.container {
  width: 100%;
  height: 100%;
  background-color: $uni-color-primary;
}

.content {
  margin-top: 42px;
  padding: 0 64px;
}

.user {
  display: flex;
  color: #fff;
  margin-bottom: 16px;

}
#qrcode{
  aspect-ratio: 1/1;
}
.name {
  font-weight: 600;
  font-size: 15px;
  letter-spacing: -0.3px;
}

.account {
  font-weight: 400;
  font-size: 12px;
  letter-spacing: -0.3px;
  margin-top: 10px;
}
.scan{
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  margin-top: 12px;
  text-align: center;
  color: #fff;
}
.btn{
  border-radius: 7px;
  background-color: #fff;
  color:#000;
  font-weight: 600;
  font-size: 14px;
  letter-spacing: 0px;
  height: 46px;
  margin-top: 35px;
}
.hidden-canvas {
  position: absolute;
  left: -9999px;
  top: -9999px;
}
</style>
