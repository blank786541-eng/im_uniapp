<script setup lang="ts">


import AssetsImage from "@/components/AssetsImage.vue";
import {isWxApp, stopAllAudio} from "@/utils";
import {V2NIMMessage} from "nim-web-sdk-ng/dist/esm/nim/src/V2NIMMessageService";
import {t} from "@/utils/i18n";
import {handleNoPermission} from "@/utils/permission";
import {V2NIMConst} from "@/utils/nim";
import {V2NIMMessageForUI} from "@xkit-yx/im-store-v2/dist/types/types";
import {events} from "@/utils/constants";
const props = withDefaults(
    defineProps<{
      mute:boolean,
      show:boolean,
      conversationId:string
    }>(),
    {
      mute:false,
      show:false
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
    img: '/static/red.png',
    text: '红包',
    key: 'red'
  }, {
    img: '/static/file.png',
    text: '文件',
    key: 'file'
  },
]


function selectAction(item:any,event:any){
  console.log(item,event);
  if(item.key=='photo'){
    handleSendImageMsg();
  }else if(item.key=='video'){
    handleSendVideoMsg('camera', event)
  }else if(item.key=='file'){
    handleSendFileMsg();
  }else{
    uni.showToast({
      title:'开发中',
      icon:'warning'
    })
  }
}
const handleSendImageMsg = () => {
  if (props.mute) return
  stopAllAudio()
  uni.chooseImage({
    count: 1,
    sizeType: ['compressed'],
    success: (res) => {
      const imgMsg = uni.$UIKitNIM.V2NIMMessageCreator.createImageMessage(
          res.tempFilePaths[0]
      )

      uni.$UIKitStore.msgStore
          .sendMessageActive({
            msg: imgMsg as unknown as V2NIMMessage,
            conversationId:props.conversationId,
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
    sourceType: [type],
    compressed: true,
    maxDuration: 60,
    success: (res) => {
      const videoMsg = uni.$UIKitNIM.V2NIMMessageCreator.createVideoMessage(
          res.tempFilePath
      )

      uni.$UIKitStore.msgStore
          .sendMessageActive({
            msg: videoMsg as unknown as V2NIMMessage,
            conversationId:props.conversationId,
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
    type: 'all',
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
          conversationId:props.conversationId,
          sendBefore: () => {
            uni.$emit(events.ON_SCROLL_BOTTOM)
          },
        })
      }
    },
    fail: () => {
      uni.showToast({
        title: t('sendFileFailedText'),
        icon: 'none',
      })
    },
  })
}
</script>

<template>
  <div class="message-action-box" :style="{height:show?'160px':'0px'}">
    <div v-for="(item, index) in list" :key="index" class="action-name" @tap="selectAction(item,$event)">
       <AssetsImage :path="item.img" width="46px" height="46px"></AssetsImage>
        <div style="margin-top: 11px">{{ item.text}}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.message-action-box {
  display: flex;
  padding-top: 20px;
  transition: all 200ms;
}
.action-name {
  flex:1;
  text-align: center;
  font-weight: 400;
  font-size: 12px;
  letter-spacing: 0;
  text-align: center;

}
</style>
