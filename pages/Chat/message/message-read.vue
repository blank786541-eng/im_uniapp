<template>
<!--  <div-->
<!--      v-if="-->
<!--      props.msg.sendingState ==-->
<!--      V2NIMConst.V2NIMMessageSendingState.V2NIM_MESSAGE_SENDING_STATE_SUCCEEDED-->
<!--    "-->
<!--      class="msg-read-wrapper"-->
<!--  >-->
<!--    <div-->
<!--        v-if="-->
<!--        conversationType ===-->
<!--          V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_P2P &&-->
<!--        p2pMsgReceiptVisible-->
<!--      "-->
<!--    >-->
<!--      <div class="icon-read-wrapper">-->
<!--&lt;!&ndash;        <Icon type="icon-read" :size="10"></Icon>&ndash;&gt;-->
<!--        <span class="font-14 default-text" style="font-size: 10px;text-align: right;color:#999">{{p2pMsgRotateDeg?'已读':'未读'}}</span>-->
<!--      </div>-->

<!--    </div>-->
<!--    <div-->
<!--        v-if="-->
<!--        conversationType ===-->
<!--          V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_TEAM &&-->
<!--        teamManagerVisible-->
<!--      "-->
<!--    >-->
<!--      <div class="icon-read-wrapper" @tap="jumpToTeamMsgReadInfo">-->
<!--        <span class="font-14 default-text" style="font-size: 12px;text-align: right;color:#999;" >{{ readCount>0?'已读':'未读' }}</span>-->
<!--      </div>-->

<!--    </div>-->
<!--  </div>-->
  <div></div>
</template>

<script lang="ts" setup>
/** 消息已读未读组件 */

import {computed, ref, onMounted, onUnmounted} from 'vue'
import {V2NIMMessageForUI} from '@xkit-yx/im-store-v2/dist/types/types'
import Icon from '../../../components/Icon.vue'
import {V2NIMConst} from '../../../utils/nim'

import {customNavigateTo} from '../../../utils/customNavigate'
import {t} from '../../../utils/i18n'
import {autorun} from 'mobx'

const props = withDefaults(
    defineProps<{
      msg: V2NIMMessageForUI
    }>(),
    {}
)

/** 是否需要显示群组消息已读未读，默认 false */
const teamManagerVisible = uni.$UIKitStore.localOptions.teamMsgReceiptVisible

/** 是否需要显示 p2p 消息、p2p会话列表消息已读未读，默认 false */
const p2pMsgReceiptVisible = uni.$UIKitStore.localOptions.p2pMsgReceiptVisible

/** 会话类型 */
const conversationType =
    uni.$UIKitNIM.V2NIMConversationIdUtil.parseConversationType(
        props.msg.conversationId
    ) as unknown as V2NIMConst.V2NIMConversationType

/** 单聊消息已读未读，用于UI变更 */
const p2pMsgRotateDeg = ref(0)

/**是否是云端会话 */
const enableV2CloudConversation =
    uni.$UIKitStore?.sdkOptions?.enableV2CloudConversation

/** 设置单聊消息已读未读 */
const setP2pMsgRotateDeg = () => {
  /**如果是单聊 */
  if (
      conversationType ===
      V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_P2P
  ) {
    const conversation = enableV2CloudConversation
        ? uni.$UIKitStore.conversationStore?.conversations.get(
            props.msg.conversationId
        )
        : uni.$UIKitStore.localConversationStore?.conversations.get(
            props.msg.conversationId
        )
    console.log( props?.msg?.createTime <= (conversation?.msgReceiptTime || 0));
    console.log("conversation?.msgReceiptTime");
    p2pMsgRotateDeg.value =
        props?.msg?.createTime <= (conversation?.msgReceiptTime || 0) ? 360 : 0
  }
}

/** 监听单聊消息已读未读 */
const p2pMsgReadWatch = autorun(() => {
  setP2pMsgRotateDeg()
  getReads();
})


const readCount = ref(0);

function getReads() {
  if (conversationType ===
      V2NIMConst.V2NIMConversationType.V2NIM_CONVERSATION_TYPE_P2P) {

    return;
  }

  uni.$UIKitStore.msgStore
      .getTeamMessageReceiptDetailsActive(props.msg)
      .then((res) => {

        readCount.value = res.readAccountList.length;
      })
}

/** 跳转到已读未读详情 */
const jumpToTeamMsgReadInfo = () => {
  if (
      uni.$UIKitStore.connectStore.connectStatus !==
      V2NIMConst.V2NIMConnectStatus.V2NIM_CONNECT_STATUS_CONNECTED
  ) {
    uni.showToast({
      title: t('offlineText'),
      icon: 'none',
    })
    return
  }
  // 跳转到消息已读未读详情页
  if (props?.msg?.messageClientId && props?.msg?.conversationId) {
    customNavigateTo({
      url: `/pages/Chat/message-read-info?messageClientId=${props.msg.messageClientId}&conversationId=${props.msg.conversationId}`,
    })
  }
}


onMounted(() => {
  setP2pMsgRotateDeg()
})

onUnmounted(() => {
  p2pMsgReadWatch()
})
</script>

<style scoped lang="scss">
.msg-read-wrapper {
  align-self: flex-end;
  text-align: right;
}

.icon-read-wrapper {
}

.sector {
  display: inline-block;
  position: relative;
  overflow: hidden;
  border: 2px solid #4c84ff;
  width: 14px;
  height: 14px;
  background-color: #eeeeee;
  border-radius: 50%;

  .cover-1,
  .cover-2 {
    position: absolute;
    top: 0;
    width: 50%;
    height: 100%;
    background-color: #eeeeee;
  }

  .cover-1 {
    background-color: #4c84ff;
    transform-origin: right;
  }

  .cover-3 {
    right: 0;
    background-color: #4c84ff;
  }
}
</style>
