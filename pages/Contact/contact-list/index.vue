<template>
  <div class="contact-list-container">
    <!--    <div-->
    <!--      class="dropdown-mark"-->
    <!--      v-if="addDropdownVisible"-->
    <!--      @touchstart="hideAddDropdown"-->
    <!--    />-->
    <!--    <div class="navigation-bar">-->
    <!--      <div class="logo-box">-->
    <!--        <div>{{ t('contactText') }}</div>-->
    <!--      </div>-->
    <!--      <div :class="buttonClass">-->
    <!--        &lt;!&ndash; #ifdef MP &ndash;&gt;-->
    <!--        <image-->
    <!--          src="https://yx-web-nosdn.netease.im/common/9ae07d276ba2833b678a4077960e2d1e/Group 1899.png"-->
    <!--          class="button-icon"-->
    <!--          @tap="showAddDropdown"-->
    <!--        />-->
    <!--        &lt;!&ndash; #endif &ndash;&gt;-->
    <!--        &lt;!&ndash; #ifndef MP &ndash;&gt;-->
    <!--        <div @tap="showAddDropdown">-->
    <!--          <Icon type="icon-More" />-->
    <!--        </div>-->
    <!--        &lt;!&ndash; #endif &ndash;&gt;-->
    <!--        <div v-if="addDropdownVisible" class="dropdown-container">-->
    <!--          <div class="add-menu-list">-->
    <!--            <div class="add-menu-item" @tap="onDropdownClick('addFriend')">-->
    <!--              <div :style="{ marginRight: '5px' }">-->
    <!--                <Icon type="icon-tianjiahaoyou" />-->
    <!--              </div>-->
    <!--              {{ t('addFriendText') }}-->
    <!--            </div>-->
    <!--            <div class="add-menu-item" @tap="onDropdownClick('createGroup')">-->
    <!--              <div :style="{ marginRight: '5px' }">-->
    <!--                <Icon type="icon-chuangjianqunzu" />-->
    <!--              </div>-->
    <!--              {{ t('createTeamText') }}-->
    <!--            </div>-->
    <!--            <div-->
    <!--              class="add-menu-item"-->
    <!--              @tap="onDropdownClick('createDiscussion')"-->
    <!--            >-->
    <!--              <Icon-->
    <!--                type="icon-chuangjianqunzu"-->
    <!--                :style="{ marginRight: '5px' }"-->
    <!--              />-->
    <!--              {{ t('createDiscussionText') }}-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <HeaderInput label="通讯录"></HeaderInput>
    <div class="contact-list">
      <div class="contact-item-content">
        <div class="contact-item" @click="handleValidMsgClick">

          <div class="flex-box flex-y-center">
            <AssetsImage path="/static/new.png" width="46px" height="46px" style="margin-right: 21px"></AssetsImage>
            <Badge
                :num="unreadSysMsgCount"
                :style="{ position: 'absolute', top: '5px', left: '45px' }"
            />
            <span class="default-text font-15"> 新朋友</span>
          </div>
        </div>
        <div class="contact-item" @click="handleGroupContactClick(1)">
          <div class="flex-box flex-y-center">
            <AssetsImage path="/static/group.png" width="46px" height="46px" style="margin-right: 21px"></AssetsImage>

            <span class="default-text font-15"> 我的群聊</span>
          </div>

        </div>
        <div class="contact-item" @click="handleGroupContactClick(2)">
          <div class="flex-box flex-y-center">
            <AssetsImage path="/static/super.png" width="46px" height="46px" style="margin-right: 21px"></AssetsImage>

            <span class="default-text font-15"> 我的超级群聊</span>
          </div>
        </div>
        <div class="contact-item" @click=" handleBlacklistClick">
          <div class="flex-box flex-y-center">
            <AssetsImage path="/static/black.png" width="46px" height="46px" style="margin-right: 21px"></AssetsImage>

            <span class="default-text font-15"> 黑名单</span>
          </div>
        </div>
      </div>
      <FriendList/>
    </div>
  </div>
</template>

<script lang="ts" setup>
/** 通讯录主界面 */

import Icon from '../../../components/Icon.vue'
import Badge from '../../../components/Badge.vue'
import FriendList from './friend-list/index.vue'
import {onUnmounted, ref} from 'vue'
import {onHide, onShow} from '@dcloudio/uni-app'
import {customNavigateTo} from '../../../utils/customNavigate'
import {autorun} from 'mobx'
import {t} from '../../../utils/i18n'
import {trackInit} from '../../../utils/reporter'
import HeaderInput from "@/components/HeaderInput.vue";
import AssetsImage from "@/components/AssetsImage.vue";
import {V2NIMFriendAddApplicationForUI} from "@xkit-yx/im-store-v2/dist/types/types";

const validMsg = ref<V2NIMFriendAddApplicationForUI[]>([])
/** Dropdown 展示 flag */
const addDropdownVisible = ref(false)

/** 未读消息数量 */
const unreadSysMsgCount = ref(0)

import { V2NIMUser } from 'nim-web-sdk-ng/dist/v2/NIM_UNIAPP_SDK/V2NIMUserService'

const myUserInfo = ref<V2NIMUser>()

const uninstallMyUserInfoWatch = autorun(() => {
  myUserInfo.value = uni.$UIKitStore.userStore.myUserInfo
})
/** 未读监听 */
let unreadWatch = () => {
}

/** 点击Dropdown */
const onDropdownClick = (
    urlType: 'addFriend' | 'createGroup' | 'createDiscussion'
) => {
  const urlMap = {
    // 添加好友
    addFriend: '/pages/User/friend/add-friend',
    // 创建群聊
    createGroup: '/pages/Team/team-create/index',
    // 创建讨论组和创建群聊复用一个页面，仅在创建群接口时，群扩展字段添加im_ui_kit_group参数区分，讨论组本质也是群，只是少了群的一些能力，旨在于快速创建讨论
    createDiscussion: `/pages/Team/team-create/index?createDiscussion=${true}`,
  }
  addDropdownVisible.value = false
  customNavigateTo({
    url: urlMap[urlType],
  })
}

/** 跳转验证消息列表页面 */
const handleValidMsgClick = () => {
  uni.$UIKitStore?.sysMsgStore.setAllApplyMsgRead()

  customNavigateTo({
    url: `/pages/Contact/contact-list/valid-list`,
  })
}

/** 跳转至黑名单列表页面 */
const handleBlacklistClick = () => {
  customNavigateTo({
    url: `/pages/Contact/contact-list/black-list`,
  })
}
/** 跳转至群列表页面 */
const handleGroupContactClick = (type:int) => {
  customNavigateTo({
    url: `/pages/Contact/contact-list/group-list?type=${type}`,
  })
}

/** 显示添加好友或创建群聊的下拉框 */
const showAddDropdown = () => {
  addDropdownVisible.value = true
}

/** 隐藏添加好友或创建群聊的下拉框 */
const hideAddDropdown = () => {
  addDropdownVisible.value = false
}

let buttonClass = 'button-box'
// #ifdef MP
buttonClass = 'button-box-mp'
// #endif

trackInit('ContactUIKit')


onShow(() => {
  unreadWatch = autorun(() => {
    unreadSysMsgCount.value =
        uni.$UIKitStore?.sysMsgStore.getTotalUnreadMsgsCount()
  })
})


/** 接受好友申请 */
const handleAcceptApplyFriendClick = async (
    msg: V2NIMFriendAddApplicationForUI
) => {
  try {
    await uni.$UIKitStore.friendStore.acceptAddApplicationActive(msg)

    const textMsg = uni.$UIKitNIM.V2NIMMessageCreator.createTextMessage(
        t('passFriendAskText')
    ) as unknown as V2NIMMessage

    await uni.$UIKitStore.msgStore.sendMessageActive({
      msg: textMsg,
      conversationId: uni.$UIKitNIM.V2NIMConversationIdUtil.p2pConversationId(
          msg.operatorAccountId
      ),
    })
    uni.$UIKitStore.sysMsgStore.setAllApplyMsgRead();
  } catch (error) {
    console.log('error', error)
  }
}
/** 监听验证消息 */
const validMsgWatch = autorun(() => {
  const open = uni.getStorageSync(myUserInfo.value?.accountId+'autoAddFriends') === 'on'
  validMsg.value = uni.$UIKitStore?.sysMsgStore.friendApplyMsgs
  if (open) {
    validMsg.value.forEach((msg) => {
      handleAcceptApplyFriendClick(msg);
    })
    return;
  }
  ;

  uni.$UIKitStore?.sysMsgStore.friendApplyMsgs?.map((item) => {
    uni.$UIKitStore?.userStore.getUserActive(item.applicantAccountId)
  })
})

onUnmounted(() => {
  unreadWatch()
})
onHide(() => {
  addDropdownVisible.value = false
  unreadWatch()
})
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';

page {
  height: 100vh;
  overflow: hidden;
}

.contact-list-container {
  height: 100vh;
  box-sizing: border-box;
  background-color: #F2F2F2;
}

.navigation-bar {
  height: 60px;
  border-bottom: 1rpx solid #e9eff5;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: var(--status-bar-height);

  .logo-box {
    display: flex;
    align-items: center;
    font-size: 20px;
    font-weight: 500;
  }
}

.contact-list {
  height: calc(100% - 60px - var(--status-bar-height));
  box-sizing: border-box;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  .contact-item-content {
    padding-bottom: 5px;
    background-color: #ffffff;
    margin-top: 10px;
  }

  .contact-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    background: #fff;
    position: relative;
    height: 72px;

    &:not(:last-child) {
      border-bottom: 1px solid #f5f8fc;
    }

    .contact-item-icon {
      height: 42px;
      width: 42px;
      border-radius: 50%;
      text-align: center;
      line-height: 39px;
      font-size: 20px;
      color: #fff;
    }

    .contact-valid-icon {
      background-color: #60cfa7;
    }

    .contact-blacklist-icon {
      background-color: #53c3f4;
    }

    .contact-group-icon {
      background-color: #be65d9;
    }

    .contact-item-title {
      margin-left: 12px;
      font-size: 16px;
      color: #333333;
      flex: 1;
    }

    .more-icon {
      margin: 0 16px;
      color: #999999;
    }
  }
}

.dropdown-mark {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
}

.dropdown-container {
  position: absolute;
  // #ifdef MP
  top: -105px;
  // #endif
  // #ifndef MP
  top: 100%;
  // #endif
  right: 30px;
  min-width: 122px;
  min-height: 40px;
  background-color: #fff;
  border: 1px solid #e6e6e6;
  box-shadow: 0px 4px 7px rgba(133, 136, 140, 0.25);
  border-radius: 8px;
  z-index: 99;
}

.add-menu-list {
  padding: 15px 10px;

  .add-menu-item {
    white-space: nowrap;
    font-size: 16px;
    padding-left: 5px;
    margin-bottom: 10px;
    height: 30px;
    line-height: 30px;
    display: flex;
    align-items: center;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
