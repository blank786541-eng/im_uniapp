<script setup lang="ts">

import UQRCode from 'uqrcodejs';
import html2canvas from 'html2canvas'
import {onMounted, ref} from "vue";

import {onLoad,onReady} from '@dcloudio/uni-app'
import DefaultHeader from "@/components/defaultHeader.vue";
const size=ref({
  windowWidth: 390,
  windowHeight: 844,
});
let params={};
onLoad((options)=>{
  params=options;
})
onReady(()=>{
  try{
    const result= uni.getSystemInfoSync();
    size.value.windowHeight=result.windowHeight;
    size.value.windowWidth=result.windowWidth-168
    make(params.conversationId)
  }catch (e){
    console.log(e)
  }
})
// 生成二维码
async  function make(id) {

  var qr = new UQRCode();
  // 设置二维码内容
  qr.data = "teamId=" + id;
  // 设置二维码大小，必须与canvas设置的宽高一致
  qr.size =size.value.windowWidth;
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
</script>

<template>
  <div class="container" id="container">
    <default-header title="我的二维码" background-color="#DBB077"
                    title-color="#fff"
                    back-icon="back-c"></default-header>


      <div class="content" id="content">

        <div style="padding:20px;background-color: #fff;border-radius: 9px">
          <canvas id="qrcode" canvas-id="qrcode"
                  :style="{width: size.windowWidth+'px',height:size.windowWidth+'px'}"
          ></canvas>
        </div>
        <div class="scan">
          扫一扫二维码，加入群聊
        </div>
<!--        <div class="btn flex-center" @tap="Save" :style="{opacity:showBtn?1:0}">-->
<!--          保存到手机-->
<!--        </div>-->

      </div>
<!--      <canvas class="hidden-canvas" canvas-id="hiddenCanvas" id="hiddenCanvas"></canvas>-->
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
