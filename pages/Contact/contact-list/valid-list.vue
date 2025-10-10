<template>
  <div class="valid-list-container">
    <NavBar :title="t('validMsgText')"/>
    <div class="valid-list-content">
      <Empty v-if="validMsg.length === 0 && teamMsg.length==0" :text="t('validEmptyText')"/>
      <template v-else>
        <div class="valid-item" v-for="msg in validMsg" :key="msg.timestamp">
          <!-- 好友申请 已同意 -->
          <template
              v-if="
              msg.status ===
              V2NIMConst.V2NIMFriendAddApplicationStatus
                .V2NIM_FRIEND_ADD_APPLICATION_STATUS_AGREED
            "
          >
            <div class="valid-item-left">
              <Avatar :account="msg.applicantAccountId"/>
              <div class="valid-name-container">
                <div class="valid-name">
                  <Appellation :account="msg.applicantAccountId"/>
                </div>
                <div class="valid-action">{{ t('applyFriendText') }}</div>
              </div>
            </div>
            <div class="valid-state">
              <Icon type="icon-yidu"/>
              <span class="valid-state-text">{{ t('acceptResultText') }}</span>
            </div>
          </template>
          <!--好友申请 已拒绝 -->
          <template
              v-else-if="
              msg.status ===
              V2NIMConst.V2NIMFriendAddApplicationStatus
                .V2NIM_FRIEND_ADD_APPLICATION_STATUS_REJECTED
            "
          >
            <template v-if="isMeApplicant(msg)">
              <div class="valid-item-left">
                <Avatar :account="msg.recipientAccountId"/>
                <div class="valid-name-container">
                  <div class="valid-name">
                    <Appellation :account="msg.recipientAccountId"/>
                  </div>
                  <div class="valid-action">{{ t('beRejectResultText') }}</div>
                </div>
              </div>
            </template>
            <template v-else>
              <div class="valid-item-left">
                <Avatar :account="msg.applicantAccountId"/>
                <div class="valid-name-container">
                  <div class="valid-name">
                    <Appellation :account="msg.applicantAccountId"/>
                  </div>
                  <div class="valid-action">{{ t('applyFriendText') }}</div>
                </div>
              </div>
              <div class="valid-state">
                <Icon type="icon-shandiao"/>
                <span class="valid-state-text">{{
                    t('rejectResultText')
                  }}</span>
              </div>
            </template>
          </template>
          <!-- 好友申请 未处理 -->
          <template
              v-else-if="
              msg.status ===
              V2NIMConst.V2NIMFriendAddApplicationStatus
                .V2NIM_FRIEND_ADD_APPLICATION_STATUS_INIT
            "
          >
            <template v-if="!isMeApplicant(msg)">
              <div class="valid-item-left">
                <Avatar :account="msg.applicantAccountId"/>

                <div class="valid-name-container">
                  <div class="valid-name">
                    <Appellation :account="msg.applicantAccountId"/>
                  </div>
                  <div class="valid-action">{{ t('applyFriendText') }}</div>
                </div>
              </div>
              <div class="valid-buttons">
                <div
                    class="valid-button button-reject"
                    @tap="handleRejectApplyFriendClick(msg)"
                    :loading="applyFriendLoading"
                >
                  {{ t('rejectText') }}
                </div>
                <div
                    class="valid-button button-accept"
                    @tap="handleAcceptApplyFriendClick(msg)"
                    :loading="applyFriendLoading"
                >
                  {{ t('acceptText') }}
                </div>
              </div>
            </template>
          </template>
        </div>
        <div class="valid-item" v-for="msg in teamMsg" :key="msg.timestamp">
          <Avatar :account="msg.teamId"/>

          <div class="valid-name-container">
            <div class="valid-name">
              <Appellation :team-id="msg.teamId" :account="msg.teamId" />
              <span style="color:red">(群聊)</span>
            </div>
            <div class="valid-action">{{ msg.postscript }}</div>
          </div>
          <div class="valid-buttons" v-if="msg.actionStatus==0">
            <div
                class="valid-button button-reject"
                @tap="handleRejectApplyTeam(msg)"
                :loading="applyFriendLoading"
            >
              {{ t('rejectText') }}
            </div>
            <div
                class="valid-button button-accept"
                @tap="handleAcceptApplyTeam(msg)"
                :loading="applyFriendLoading"
            >
              {{ t('acceptText') }}
            </div>
          </div>
          <div class="valid-buttons" v-else>
            <div
                class="valid-button button-reject"

            >
              {{ msg.actionStatus == 1 ? '已同意' : msg.actionStatus == 2 ? '已拒绝' : '已过期' }}

            </div>

          </div>
        </div>
      </template>


    </div>
  </div>
</template>

<script lang="ts" setup>
/** 验证消息页面 */

import {autorun} from 'mobx'
import {onBeforeMount, onMounted, onUnmounted, ref} from 'vue'
import Empty from '../../../components/Empty.vue'
import Avatar from '../../../components/Avatar.vue'
import NavBar from '../../../components/NavBar.vue'
import Icon from '../../../components/Icon.vue'
import {t} from '../../../utils/i18n'
import {V2NIMFriendAddApplicationForUI, V2NIMTeamJoinActionInfoForUI} from '@xkit-yx/im-store-v2/dist/types/types'
import {V2NIMConst} from '../../../utils/nim'
import Appellation from '../../../components/Appellation.vue'
import {V2NIMMessage} from 'nim-web-sdk-ng/dist/esm/nim/src/V2NIMMessageService'
import {logout} from "@/utils/imUtils";
import {V2NIMTeamJoinActionType} from "nim-web-sdk-ng/dist/esm/nim/src/V2NIMTeamService";
import {setContactTabUnread, setTabUnread} from "@/utils/msg";

/** 验证消息 */
const validMsg = ref<V2NIMFriendAddApplicationForUI[]>([])
const teamMsg = ref<V2NIMTeamJoinActionInfoForUI[]>([])

/** 申请好友 loading */
const applyFriendLoading = ref(false)

/** 是否是我发起的申请 */
const isMeApplicant = (data: V2NIMFriendAddApplicationForUI) => {
  return (
      data.applicantAccountId === uni.$UIKitStore.userStore.myUserInfo.accountId
  )
}

/** 拒绝好友申请 */
const handleRejectApplyFriendClick = async (
    msg: V2NIMFriendAddApplicationForUI
) => {
  applyFriendLoading.value = true
  readMsg(msg.applicantAccountId)
  try {
    await uni.$UIKitStore.friendStore.rejectAddApplicationActive(msg)
    uni.showToast({
      title: t('rejectedText'),
      icon: 'none',
    })
  } catch (error) {
    uni.showToast({
      title: t('rejectFailedText'),
      icon: 'error',
    })
  } finally {
    uni.$UIKitStore.sysMsgStore.setAllApplyMsgRead();
    applyFriendLoading.value = false
  }
}

/** 接受好友申请 */
const handleAcceptApplyFriendClick = async (
    msg: V2NIMFriendAddApplicationForUI
) => {
  applyFriendLoading.value = true
  readMsg(msg.applicantAccountId)
  try {
    try {
      await uni.$UIKitStore.friendStore.acceptAddApplicationActive(msg)
      uni.showToast({
        title: t('acceptedText'),
        icon: 'none',
      })
    } catch (error) {
      uni.showToast({
        title: t('acceptFailedText'),
        icon: 'error',
      })
    }

    const textMsg = uni.$UIKitNIM.V2NIMMessageCreator.createTextMessage(
        t('passFriendAskText')
    ) as unknown as V2NIMMessage

    await uni.$UIKitStore.msgStore.sendMessageActive({
      msg: textMsg,
      conversationId: uni.$UIKitNIM.V2NIMConversationIdUtil.p2pConversationId(
          msg.operatorAccountId
      ),
    })
  } catch (error) {
    console.log('error', error)
  } finally {
    applyFriendLoading.value = false

  }
}
function  readMsg(accountId){
  uni.$UIKitStore.sysMsgStore.setAllApplyMsgRead();
  uni.$UIKitStore.sysMsgStore.updateFriendApplyMsg([
    {
      operatorAccountId:  uni.$UIKitStore.userStore.myUserInfo.accountId,
      applicantAccountId: accountId,
      recipientAccountId:   uni.$UIKitStore.userStore.myUserInfo.accountId,
      timestamp: Date.now(),
      status: 1 /* V2NIMConst.V2NIMFriendAddApplicationStatus
                            .V2NIM_FRIEND_ADD_APPLICATION_STATUS_AGREED */,
      isRead: true,
      read: true,
    },
  ])
}
async function handleAcceptApplyTeam(msg: V2NIMTeamJoinActionInfoForUI) {
  msg.read = true;
  msg.actionStatus = 1
  setTabUnread()
  setContactTabUnread()
  await uni.$UIKitStore.teamStore.acceptTeamInviteActive(msg);
  await uni.$UIKitStore.teamStore.updateTeamActive(msg)
  uni.showToast({
    title: '已加入群聊'
  })

}

async function handleRejectApplyTeam(msg: V2NIMTeamJoinActionInfoForUI) {
  setTabUnread()
  setContactTabUnread()
  uni.showModal({
    title: "提示",
    content: '拒绝加入群聊吗',
    showCancel: true,
    success: async function (res) {
      if (res.confirm) {
        msg.read = true;
        msg.actionStatus = 2
        await uni.$UIKitStore.teamStore.rejectTeamInviteActive(msg)
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    },
  })

}

/** 监听验证消息 */
const validMsgWatch = autorun(() => {

  validMsg.value = uni.$UIKitStore?.sysMsgStore.friendApplyMsgs
  teamMsg.value = uni.$UIKitStore?.sysMsgStore.teamJoinActionMsgs

  console.log(validMsg.value);
  console.log("validMsg.value");
  console.log(teamMsg.value);

  uni.$UIKitStore?.sysMsgStore.friendApplyMsgs?.map((item) => {
    uni.$UIKitStore?.userStore.getUserActive(item.applicantAccountId)
  })
  uni.$UIKitStore?.sysMsgStore.teamJoinActionMsgs?.map((item) => {
    uni.$UIKitStore?.teamStore.getTeamActive(item.teamId)
  })

})


onUnmounted(() => {
  validMsgWatch()
})
onMounted(() => {
  uni.$UIKitStore.sysMsgStore.setAllApplyMsgRead();
})
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';

page {
  padding-top: var(--status-bar-height);
  height: 100vh;
  overflow: hidden;
}

.valid-list-container {
  height: 100vh;
  box-sizing: border-box;
}

.valid-list-content {
  height: calc(100% - 60px - var(--status-bar-height));
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
}

.valid-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding: 0 20px;
  margin-top: 20px;
}

.valid-name-container {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  flex: 1;
  padding-right: 20px;
}

.valid-name {
  font-size: 16px;
  color: #333333;
  max-width: 40vw;
  overflow: hidden; //超出的文本隐藏
  text-overflow: ellipsis; //溢出用省略号显示
  white-space: nowrap; //溢出不换行
}

.valid-action {
  color: #888;
  font-size: 14px;
  max-width: 40vw;
  overflow: hidden; //超出的文本隐藏
  text-overflow: ellipsis; //溢出用省略号显示
  white-space: nowrap; //溢出不换行
}

.valid-item-left {
  display: flex;
  align-items: center;
}

.valid-buttons {
  display: flex;
  align-items: center;
}

.valid-button {
  margin: 0;
  width: 60px;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  text-align: center;
  border-radius: 3px;
  background-color: #fff;
}

.button-reject {
  color: #333;
  border: 1px solid #d9d9d9;
  margin-right: 10px;
}

.button-accept {
  color: #337eef;
  border: 1px solid #337eef;
}

.valid-state {
  display: flex;
  align-items: center;
}

.valid-state-text {
  margin-left: 10px;
  color: #b3b7bc;
}
</style>
