<script setup lang="ts">
import mumuRecorder from "@/uni_modules/mumu-recorder/components/mumu-recorder/mumu-recorder.vue";
import AssetsImage from "@/components/AssetsImage.vue";
import {ref} from "vue";

const $emit=defineEmits(["handlerSuccess",'handlerError']);


const seconds=ref("00")
function handlerSuccess(res) {
  // recordStata.value = false;
  // recorder.value = res

  if(res.duration<10){
    seconds.value="0"+res.duration;
  }else{
    seconds.value=res.duration;
  }

  $emit('handlerSuccess',res)

}
function handlerError(code) {
  $emit('handlerError',res)
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
const x=ref()
const opcaticy=ref()

uni.$on('slide',(value,p)=>{
  console.log(value,"slide",p);
  x.value=value-20;
  opcaticy.value=p-0.2;
})
</script>

<template>
  <div>

    <div class="voice">

      <AssetsImage path="/static/record-voice.png" width="24px" height="24px" class="animated"></AssetsImage>
      <span>0:{{ seconds }}</span>
      <div class="slide" :style="{transform:`translateX(${x}px)`,opacity:opcaticy}">
         左滑取消
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.voice {
  display: flex;
  align-items: center;
  width: 100%;
}

.slide{
  margin-left: auto;
  margin-right: 40px;
  font-size: 12px;
  color: #999;
}
  .animated {
    animation-duration: 1s;
    animation: fadeIn 1s infinite linear;
    margin-right: 6px;
  }

  @keyframes fadeIn {
     from {
       opacity: 1;
     }
    to{
      opacity: 0;
    }
  }
</style>
