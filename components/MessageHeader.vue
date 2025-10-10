<script setup lang="ts">
import {onBeforeMount, onMounted, onUnmounted, ref} from "vue";
import AssetsImage from "@/components/AssetsImage.vue";
import {customNavigateTo, customSwitchTab} from "@/utils/customNavigate";
import {V2NIMConst} from "@/utils/nim";
import { autorun } from 'mobx'
import {httpRequest} from "@/utils/request";
const props = withDefaults(
    defineProps<{
      conversationType: V2NIMConst.V2NIMConversationType
      title: string
      to: string,
      hideMenu:boolean
    }>(),
    {
      hideMenu: true,
    }
)
const appStatusHeight = ref(0);
onBeforeMount(() => {

  // #ifdef APP-PLUS
  appStatusHeight.value = plus.navigator.getStatusbarHeight();
  // #endif



})

onUnmounted(()=>{
   statusWatch();
})

const status=ref(false);

/** 监听会话方在线离线状态 */
const statusWatch = autorun(() => {
  if (
      props.conversationType ===
      V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_P2P
  ) {
    const stateMap = uni.$UIKitStore?.subscriptionStore.stateMap

    if (
        stateMap.get(props.to) &&
        uni.$UIKitStore.localOptions.loginStateVisible
    ) {
      status.value =
          stateMap.get(props.to)?.statusType ===
          V2NIMConst.V2NIMUserStatusType.V2NIM_USER_STATUS_TYPE_LOGIN
    } else {
      status.value = false
    }
  }
})

const backToConversation = () => {
  customSwitchTab({
    url: '/pages/Conversation/index',
  })
}

function toMore() {
  uni.hideKeyboard()
  console.log("asdfasdfasdf");
  if (
      props.conversationType ===
      V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_P2P
  ) {
    customNavigateTo({
      url: `/pages/Chat/message/p2p-set?id=${props.to}`,
    })
  } else if (
      props.conversationType ===
      V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_TEAM
  ) {
    customNavigateTo({
      url: `/pages/Team/team-set/index?id=${props.to}`,
    })
  }
}
</script>

<template>
  <div class="message-header">
    <div :style="{height:appStatusHeight+'px'}" class="status-bar"></div>
    <div class="row">
      <AssetsImage path="/static/back.png" width="21px" height="21px" @tap="backToConversation"></AssetsImage>
      <span>{{ props.title }}</span><span v-if=" props.conversationType ===
      V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_P2P">{{status?'(在线)':'(离线)'}}</span>
      <AssetsImage path="/static/more.png" width="19px" height="5px" @tap="toMore" v-if="hideMenu"></AssetsImage>
    </div>
  </div>
</template>

<style scoped lang="scss">
.message-header,.status-bar {
  background-color: $uni-color-primary;
}

.row {
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 22px;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0;
  color: #F5FCF9;
}
</style>
