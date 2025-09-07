<script lang="ts" setup>
import {getUniPlatform} from "@/utils";
import {onMounted, ref} from "vue";

import {  onReady } from '@dcloudio/uni-app'
import Cshaptx4869Scancode
  from "@/uni_modules/cshaptx4869-scancode/components/cshaptx4869-scancode/cshaptx4869-scancode.vue";

onReady(()=>{
  scanCode();
})
const h5ScanCodeRef = ref();
function scanCode() {
  // #ifdef H5
  h5ScanCodeRef.value.open();
  // #endif
  // #ifndef H5
  uni.scanCode({
    success: (res) => {
      uni.showToast({
        icon: "none",
        title: res.result,
      });
    },
    fail: (err) => {
      console.log("err", err);
    },
  });
  // #endif
}
function handleSuccess(res) {
  uni.showToast({
    icon: "none",
    title: res.result,
  });
}
function handleFail(err) {
  uni.showModal({
    title: err.errName,
    content: err.errMsg,
  });
}
</script>

<template>
  <div>
    <cshaptx4869-scancode
        ref="h5ScanCodeRef"
        @success="handleSuccess"
        @fail="handleFail"
    ></cshaptx4869-scancode>
  </div>
</template>

<style scoped lang="scss">

</style>
