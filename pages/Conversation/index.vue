<template>
  <ConversationList/>
</template>

<script lang="ts" setup>
/** 会话列表页面 */

import ConversationList from './conversation-list/index.vue'
import {onShow, onHide} from '@dcloudio/uni-app'
import {V2NIMConst} from "@/utils/nim";
import {getExtentionData} from "@/pages/Other/help/call";
import {customNavigateTo} from "@/utils/customNavigate";
import {V2NIMMessageStatus} from "nim-web-sdk-ng/dist/v2/NIM_UNIAPP_SDK/V2NIMMessageService";
import {onMounted} from "vue";

let timeout: any
const userInfo = uni.$UIKitStore.userStore.myUserInfo;

onShow(() => {
  // 重置选中会话
  uni.$UIKitStore?.uiStore.selectConversation('')
  // 是否是云端会话
  const enableV2CloudConversation =
      uni.$UIKitStore?.sdkOptions?.enableV2CloudConversation
  timeout = setTimeout(() => {
    // 获取未读消息数
    const unread = enableV2CloudConversation
        ? uni.$UIKitNIM?.V2NIMConversationService?.getTotalUnreadCount()
        : uni.$UIKitNIM?.V2NIMLocalConversationService?.getTotalUnreadCount()
    if (unread === 0) {
      uni.hideTabBarRedDot({
        //隐藏数字
        index: 0, //tabbar下标
      })
    } else {
      uni.showTabBarRedDot({
        index: 0, //tabbar下标
      })
    }
  }, 800)


})

onHide(() => {
  clearTimeout(timeout)
})
</script>

<style lang="scss">
@import '../styles/common.scss';

page {
  height: 100vh;
  overflow: hidden;
}
</style>
