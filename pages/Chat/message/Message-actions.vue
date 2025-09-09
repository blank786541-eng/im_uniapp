<script setup lang="ts">


import AssetsImage from "@/components/AssetsImage.vue";
import {isWxApp, stopAllAudio} from "@/utils";
import {V2NIMMessage} from "nim-web-sdk-ng/dist/esm/nim/src/V2NIMMessageService";
import {t} from "@/utils/i18n";
import {handleNoPermission} from "@/utils/permission";
import {events} from "@/utils/constants";
import {customNavigateTo} from "@/utils/customNavigate";
import {V2NIMConst} from "nim-web-sdk-ng/dist/esm/nim";

const props = withDefaults(
    defineProps<{
      mute: boolean,
      show: boolean,
      conversationId: string,
      otherAccountId:string,
      conversationType: V2NIMConst.V2NIMConversationType
    }>(),
    {
      mute: false,
      show: false
    }
)
const list = [
  {
    img: '/static/photo.png',
    text: '照片',
    key: 'photo'
  }, {
    img: '/static/video.png',
    text: '视频',
    key: 'video'
  }, {
    img: '/static/video.png',
    text: '音频聊天',
    key: 'voice-call'
  },  {
    img: '/static/red.png',
    text: '红包',
    key: 'red'
  }, {
    img: '/static/file.png',
    text: '文件',
    key: 'file'
  },
]


async function selectAction(item: any, event: any) {
  console.log(item, event);
  if (item.key == 'photo') {
    handleSendImageMsg();
  } else if (item.key == 'video') {

    handleSendVideoMsg('', event)
  } else if (item.key == 'file') {
    handleSendFileMsg();
  } else if (item.key == "red") {
    uni.showToast({
      title: '开发中',
      icon: 'warning'
    })
  } else {
    uni.setStorageSync('currentConversation',props.conversationId)
    if(props.conversationType== V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_P2P){
      customNavigateTo({
        url: `/pages/Other/video-call?uid=${props.otherAccountId}&type=1` ,
      })
    }else{
      // uni.setStorageSync('inviteUsers',["778899","123456"])
      // const userInfo=uni.$UIKitStore.userStore.myUserInfo;
      uni.setStorageSync('callTeamId',props.otherAccountId)
      customNavigateTo({
        url: `/pages/Other/select-call-user?teamId=${props.otherAccountId}` ,
      })

    }





  }
}

const handleSendImageMsg = () => {
  if (props.mute) return
  stopAllAudio()

  uni.chooseImage({
    count: 1,
    mediaType: ['image'],
    sourceType: ['album'],
    sizeType: ['compressed'],
    success: (res) => {
      const imgMsg = uni.$UIKitNIM.V2NIMMessageCreator.createImageMessage(
          res.tempFilePaths[0]
      )

      uni.$UIKitStore.msgStore
          .sendMessageActive({
            msg: imgMsg as unknown as V2NIMMessage,
            conversationId: props.conversationId,
            progress: () => true,
            sendBefore: () => {
              uni.$emit(events.ON_SCROLL_BOTTOM)
            },
          })
          .then(() => {
            uni.$emit(events.ON_SCROLL_BOTTOM)
          })
          .catch(() => {
            uni.$emit(events.ON_SCROLL_BOTTOM)
            uni.showToast({
              icon: 'error',
              title: t('sendImageFailedText'),
            })
          })
    },
    /** uniapp 提供的chooseImage api 在鸿蒙上表现为不支持选择gif，在其他端支持 */
    fail: (error) => {
      console.log('chooseImage', error)
    },
    /** 没有开启权限时，提示开启权限 */
    complete: handleNoPermission,
  })
}

const handleSendVideoMsg = (type: string, event: any) => {
  if (props.mute) return
  stopAllAudio()
  // 这里做一层拦截的原因是，微信小程序在input聚焦的时候点击+号按钮，会触发此函数执行，阻止冒泡也无法解决该问题，疑为uniapp编译问题
  if (isWxApp && event?.type == 'blur') {
    return
  }


  uni.chooseVideo({
    sourceType: ['album'],
    compressed: true,
    maxDuration: 60,
    success: (res) => {
      const videoMsg = uni.$UIKitNIM.V2NIMMessageCreator.createVideoMessage(
          res.tempFilePath
      )

      uni.$UIKitStore.msgStore
          .sendMessageActive({
            msg: videoMsg as unknown as V2NIMMessage,
            conversationId: props.conversationId,
            progress: () => true,
            sendBefore: () => {
              uni.$emit(events.ON_SCROLL_BOTTOM)
            },
          })
          .then(() => {
            uni.$emit(events.ON_SCROLL_BOTTOM)
          })
          .catch(() => {
            uni.$emit(events.ON_SCROLL_BOTTOM)
            uni.showToast({
              icon: 'error',
              title: t('sendVideoFailedText'),
            })
          })
    },
    /** 没有开启权限时，提示开启权限 */
    complete: handleNoPermission,
  })
}
/** 发送文件消息 */
const handleSendFileMsg = () => {


  uni.chooseFile({
    count: 1,
    type: 'file',
    sourceType: [],
    success: (res) => {
      const filePath = res?.tempFilePaths?.[0]
      // @ts-ignore
      const fileName = res?.tempFiles?.[0]?.name
      if (filePath && fileName) {
        const fileMsg = uni.$UIKitNIM.V2NIMMessageCreator.createFileMessage(
            filePath,
            fileName
        )
        uni.$UIKitStore.msgStore.sendMessageActive({
          msg: fileMsg as unknown as V2NIMMessage,
          conversationId: props.conversationId,
          sendBefore: () => {
            uni.$emit(events.ON_SCROLL_BOTTOM)
          },
        })
      }
    },
    fail: () => {

    },
  })
}


function openWindow(type: string) {
  // 在iOS H5环境中使用input元素
  const input = document.createElement('input');
  input.type = "file";
  input.accept = '*';
  console.log(type);
  input.multiple = true;

  // input.webkitdirectory=true;
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 处理选择的视频文件
      const fileReader = new FileReader();
      fileReader.onload = (e) => {
        const tempFilePath = e.target.result;
        // 调用成功回调
        typeof success === 'function' && success({
          tempFilePath: tempFilePath,
          file: file
        });
      };
      fileReader.readAsDataURL(file);
    }
  };

  input.click();
}

// 当选择文件完成时触发
function onFileSelected(fileInfo) {
  console.log('选择的文件：', fileInfo)
}

// 当文件发生变化时触发
function onFilesChanged(fileList) {
  console.log('文件列表：', fileList)
}

function disabledMenu(e) {
  e.stopPropagation();
  e.preventDefault();
}
</script>

<template>
  <div class="message-action-box" :style="{height:show?'250px':'0px',paddingTop:show?'20px':'0'}">
    <div v-for="(item, index) in list" :key="index"
         @contextmenu="disabledMenu"
         class="action-name">
      <div @tap="selectAction(item,$event)">
        <AssetsImage :path="item.img" width="46px" height="46px"></AssetsImage>
        <div style="margin-top: 11px">{{ item.text }}</div>
      </div>
      <!--      <div v-else>-->
      <!--        <file-selector></file-selector>-->
      <!--      </div>-->
    </div>


  </div>
</template>

<style scoped lang="scss">
.message-action-box {
  display: flex;
  transition: all 200ms;
  box-sizing: border-box;
  flex-wrap: wrap;
}

.action-name {
  width: 25%;
  margin-bottom: 15px;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0;
  text-align: center;

}
</style>
