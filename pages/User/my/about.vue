<template>
  <div class="wrapper">
    <default-header title="关于我们" />
    <div class="content">
      {{stateMap.aboutUs}}
    </div>
  </div>
</template>

<script lang="ts" setup>

import NavBar from "@/pages/Chat/message/nav-bar.vue";
import {onMounted, ref} from "vue";
import {httpRequest} from "@/utils/request";
import DefaultHeader from "@/components/defaultHeader.vue";
const stateMap=ref({});
onMounted(()=>{
  httpRequest({
    method: "GET",
    url: "im/api/getUserByAccount?account=" + uni.$UIKitStore.userStore.myUserInfo.accountId,
  }).then(res => {
    stateMap.value = res;
  })
})
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';

page {
  padding-top: var(--status-bar-height);
  height: 100vh;
  background-color: rgb(245, 246, 247);
}

.wrapper {
  background-color: rgb(245, 246, 247);
  background-color: #fff;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
}

.content {
  font-size: 13px;
  text-indent: 13px;
  padding:16px;
}

</style>
