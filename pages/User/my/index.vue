<template>
  <div>
    <default-header title="设置" :show-back="false"></default-header>
    <div class="avatar-container" >

      <UserCard
          @tap="toUserDetail"
          title="账号"

          :account="myUserInfo && myUserInfo.accountId"
          :nick="myUserInfo && myUserInfo.name"
      ></UserCard>
    </div>

    <div class="setting-container">
      <div class="setting-row">
        <span>加我好友时需要验证</span>
        <switch
            :checked="enableAutoAddFriends"
            color="#DBB077"
            @change="onChangeEnableV2CloudConversation"
        />
      </div>
      <!--      <div class="setting-row">-->
      <!--        <span>允许别人搜到我</span>-->
      <!--        <switch-->
      <!--            :checked="enableV2CloudConversation"-->
      <!--            color="#DBB077"-->
      <!--            @change="onChangeEnableV2CloudConversation"-->
      <!--        />-->
      <!--      </div>-->
      <div class="setting-row">
        <span>注销账号</span>
        <AssetsImage path="/static/right-g.png" width="16px" height="16px"></AssetsImage>
      </div>
      <div class="setting-row">
        <span>关于我们</span>
        <AssetsImage path="/static/right-g.png" width="16px" height="16px"></AssetsImage>
      </div>
    </div>
    <div>
      <button class="login-btn" @tap="logUserOut">退出登录</button>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { autorun } from 'mobx'

import { V2NIMUser } from 'nim-web-sdk-ng/dist/v2/NIM_UNIAPP_SDK/V2NIMUserService'

const myUserInfo = ref<V2NIMUser>()

const uninstallMyUserInfoWatch = autorun(() => {
  myUserInfo.value = uni.$UIKitStore.userStore.myUserInfo
  console.log(myUserInfo.value);
  console.log("myUserInfo.value");
})


//
// onLoad(() => {
//   myUserInfo.value = uni.$UIKitStore.userStore.myUserInfo
// })
//
// onShow(() => {
//   setTabUnread()
//   setContactTabUnread()
// })
//
// const gotoSetting = () => {
//   customNavigateTo({
//     url: '/pages/User/my/setting',
//   })
// }
// const gotoAbout = () => {
//   customNavigateTo({
//     url: '/pages/User/my/about',
//   })
// }
// const gotoCollection = () => {
//   customNavigateTo({
//     url: '/pages/User/my/collection-list',
//   })
// }
//
// const gotoMyDetail = () => {
//   customNavigateTo({
//     url: `/pages/User/my-detail/index?account=${myUserInfo.value?.accountId}`,
//   })
// }
//
// onUnmounted(() => {
//   uninstallMyUserInfoWatch()
// })
import {onMounted, ref} from "vue";
import AssetsImage from "@/components/AssetsImage.vue";
import {t} from "@/utils/i18n";
import {logout} from "@/utils/imUtils";
import DefaultHeader from "@/components/defaultHeader.vue";
import UserCard from "@/components/UserCard.vue";
import {customNavigateTo} from "@/utils/customNavigate";

const enableAutoAddFriends = ref(false)
onMounted(() => {
  uninstallMyUserInfoWatch();
  enableAutoAddFriends.value = uni.getStorageSync(  myUserInfo.value?.accountId+'autoAddFriends') === 'on'
})
const onChangeEnableV2CloudConversation = (e: any) => {
  const checked = e.detail.value
  enableAutoAddFriends.value = checked
  uni.setStorageSync('autoAddFriends',checked?'on':"off");
}

const logUserOut = () => {
  uni.showModal({
    title: t('logoutText'),
    content: t('logoutConfirmText'),
    showCancel: true,
    success: function (res) {
      if (res.confirm) {
        console.log('用户点击确定')
        logout()
      } else if (res.cancel) {
        console.log('用户点击取消')
      }
    },
  })
}

function toUserDetail(){
  customNavigateTo({
    url: `/pages/User/my/my-detail`,
  })
}
</script>

<style lang="scss">
@import '../../styles/common.scss';

page {
  padding-top: var(--status-bar-height);
  height: 100vh;
  overflow: hidden;
  background-color: #F8F8F8;
}

.setting-container {
  margin: 20px 18px 0;
  padding: 17px;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: #fff;
}
.avatar-container {
  margin: 10px 18px 0;
  box-sizing: border-box;
  border-radius: 8px;
  background-color: #fff;
}

.setting-row {
  height: 50px;
  border-bottom: 1px solid #F2F2F2;
  color: #1D1D35;
  font-size: 14px;
  letter-spacing: -0.3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
