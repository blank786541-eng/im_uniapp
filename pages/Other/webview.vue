<script setup lang="ts">
import {onLoad} from '@dcloudio/uni-app'
import {ref} from "vue";
import DefaultHeader from "@/components/defaultHeader.vue";
const url=ref('')
onLoad((options)=>{
  url.value=options.url;
})

const webviewStyles= {
  progress: {
    color: '#FF3333',
    flex:1
  }
}
</script>

<template>
  <div class="flex-box flex-direction-column" style="width: 100%;height: 100%">
    <default-header title=""></default-header>
    <web-view :webview-styles="webviewStyles"
              style="flex:1"
              :src="url" :fullscreen="false"></web-view>
  </div>
</template>

<style  lang="scss">
page{
  height: 100%;
  width: 100%;
}

</style>
