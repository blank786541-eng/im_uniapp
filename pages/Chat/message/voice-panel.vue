<template>
  <div class="voice-panel-wrapper" >
    <div v-if="!recorderOver">
      <div class="audio-remind-text">{{ t('audioRemindText') }}</div>
      <div class="voice-panel">
        <div class="voice-panel-circel" @touchstart="handleContextMenu" @longpress="onStartRecord"
          @touchend="onStopRecord" @contextmenu="handleContextMenu">
          <!--          @touchstart="handleContextMenu"-->
          <div class="img-mask"></div>
          <Icon :width="24" :height="30" type="audio-btn"></Icon>
        </div>
        <div :style="{ display: recordState == 'stop' ? 'none' : 'block' }" class="big-circle"></div>
        <div :style="{ display: recordState == 'stop' ? 'none' : 'block' }" class="small-circle"></div>
      </div>
      <div class="audio-btn-text">{{ t('audioBtnText') }}</div>
    </div>
    <div v-else>

        <div class="flex-center" style="margin-top: 30px;">
           <div class="audio-box">
             <MessageAudio
              :msg="msg"
              :broadcastNewAudioSrc="broadcastNewAudioSrc"
          />
        </div>

      </div>
       <div class="btn-group ">
            <div class="send" style="background-color:#b3b7bc" @tap="close">重录</div>
           <div class="send" style="background-color:#337eff;margin-left: 19px;" @tap="handlerSuccess">发送</div>
        </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
/**语音消息面板组件 */

import { getRecorderManager } from '../../../uni_modules/jz-h5RecorderManager/js/index.js'
import mumuRecorder from "@/uni_modules/mumu-recorder/components/mumu-recorder/mumu-recorder.vue";
import {onMounted, onUnmounted, reactive, ref} from 'vue'
import Icon from '../../../components/Icon.vue'
import { t } from '../../../utils/i18n'
import { isWxApp, stopAllAudio } from '../../../utils'
import { handleContextMenu } from "@/utils/utils";
import { V2NIMMessageForUI } from '@xkit-yx/im-store-v2/dist/types/types.js';
import MessageAudio from './message-audio.vue';
const $emit = defineEmits(['handleSendAudioMsg'])
/**录音状态 */
const recordState = ref('stop')
const recorderOver = ref(false);
onUnmounted(() => {
  uni.$off('closeRecord')
})


const recorderManager = getRecorderManager({

});

const msg=reactive({
  attachment:{
    duration:1,
    url:""
  },
  isSelf:false
});
uni.$on('closeRecord', () => {
  onStopRecord();
})


onMounted(() => {
  recorderManager.onStop((res:any) => {

    if (res.duration < 1) {
      return;
    }
      console.log(res,'rfes======');
    msg.attachment.duration=res.duration;
    msg.attachment.url=res.tempFilePath;

      recorderOver.value = true;
  })
})
function close(){

  recorderOver.value=false;
}
//#ifdef H5
function handlerError(code) {
  switch (code) {
    case '101':
      uni.showModal({
        content: '当前浏览器版本较低，请更换浏览器使用，推荐在微信中打开。'
      })
      break;
    case '201':
      uni.showModal({
        content: '麦克风权限被拒绝，请刷新页面后授权麦克风权限。'
      })
      break
    default:
      uni.showModal({
        content: '未知错误，请刷新页面重试'
      })
      break
  }
}

function handlerSuccess() {

  $emit('handleSendAudioMsg', msg.attachment.url,  msg.attachment.duration)
}
const onStartRecord = (e: Event) => {
  recorderOver.value = false;

  // recorder.value.start()
  recordState.value = 'recording'
  console.log("onStartRecord",)
  recorderManager.start({
    duration: 60000, // 录音时长60秒
    sampleRate: 44100, // 采样率
    numberOfChannels: 1, // 声道数
    encodeBitRate: 192000, // 编码码率
    format: 'mp3' // 录音格式
  })
  handleContextMenu(e);

}
const onStopRecord = (res) => {
  recordState.value = 'stop'

  recorderManager.stop()
}
//#endif


//#ifdef APP-PLUS
/**录音实例 */
const recorderManager = uni.getRecorderManager()

let startRecordStamp = 0


/**开始录音 */
const onStartRecord = () => {
  console.log('开始录音')
  try {
    stopAllAudio()
    recorderManager.start({
      format: 'mp3',
      duration: 60000,
      sampleRate: 44100,
      numberOfChannels: 1,
      encodeBitRate: 192000,
      frameSize: 50,
    })
  } catch (error) {
    console.log('录音失败', error)
  }
}

/**结束录音 */
const onStopRecord = () => {
  console.log('结束录音')
  recordState.value = 'stop'
  recorderManager.stop()
}

/** 开始录音 */
recorderManager.onStart((res) => {
  console.log('recorder start' + JSON.stringify(res))
  console.log('recorder start')
  recordState.value = 'recording'
  startRecordStamp = new Date().getTime()
})

/** 结束录音 */
recorderManager.onStop((res) => {
  console.log('recorder stop' + JSON.stringify(res))
  recordState.value = 'stop'
  const duration = new Date().getTime() - startRecordStamp
  if (duration < 1000) {
    uni.showToast({
      title: '录音时间太短',
      icon: 'none',
    })
    return
  }
  $emit('handleSendAudioMsg', res.tempFilePath, duration)
})

/** 录音出错 */
recorderManager.onError((res) => {
  console.log('recorder error', res)
  recordState.value = 'stop'
  if (!isWxApp) {
    uni.showToast({
      title: t('audioErrorText'),
      icon: 'none',
    })
  } else {
    if (res.errMsg == 'operateRecorder:fail auth deny') {
      uni.showToast({
        title: t('audioErrorText'),
        icon: 'none',
      })
    }
  }
})
//#endif
</script>

<style scoped lang="scss">
page {
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

.voice-panel-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

}

.voice-panel {
  flex: 1;
  width: 100%;
  overflow: hidden;
  margin-bottom: 30px;
}

.audio-remind-text {
  margin-top: 30px;
  height: 30px;
  text-align: center;
  font-size: 14px;
  color: #666;
  line-height: 30px;
}

.voice-panel-circel {
  z-index: 100;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(163deg, #4883ea 11%, #2561c9 121%);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;

}

.big-circle {
  z-index: 1;
  position: absolute;
  width: 230px;
  height: 230px;
  left: 20%;
  top: 10%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  background: #cce6f8 38.14%;
  animation: circleSmall 1.5s ease-out;
  animation-iteration-count: infinite;

}

.small-circle {
  z-index: 2;
  position: absolute;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: #a0d2f0;
  top: 28%;
  left: 33%;
  transform: translate(-50%, -50%);
  animation: circleSmall 1.5s ease-out;
  animation-iteration-count: infinite;
}

@keyframes circleSmall {
  0% {
    transform: scale(1);
    opacity: 0;
  }

  25% {
    transform: scale(1);
    opacity: 0.4;
  }

  50% {
    transform: scale(1.2);
    opacity: 0.6;
  }

  75% {
    transform: scale(1.3);
    opacity: 0.4;
  }

  100% {
    transform: scale(1.4);
    opacity: 0;
  }
}

.img-mask {
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
}

.audio-btn-text {
  position: absolute;
  bottom: 20%;
  left: 50%;
  transform: translateX(-50%);
  color: #666;
  font-size: 14px;
}
.audio-box{
  background-color: #FDF2E3;
  width: 100px;
  padding:8px 0;
  border-radius: 12px;
  display: flex;
  justify-content: center;
}
.send{
  padding:6px 12px;
  color:#fff;
  border-radius: 6px;
  font-size: 14px;

}
.btn-group{
  display: flex;
  justify-content:center;
  margin-top: 30px;
}
</style>
