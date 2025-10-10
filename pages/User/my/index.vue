<template>
  <div class="user-container">
    <default-header :show-back="false" background-color="transparent"></default-header>
    <div class="flex-box flex-space-between ">
      <div class="flex-box flex-y-center" @tap="toUserDetail">
        <Avatar :account="myUserInfo.accountId"></Avatar>
        <div class="user-name" style="flex-shrink:0">
          <div>
            {{ myUserInfo.name || myUserInfo.accountId }}
          </div>
          <div style="font-weight: 400;font-size: 12px;margin-top: 4px;">
            用户号:{{ myUserInfo.accountId }}
          </div>
        </div>
      </div>
      <div  class="flex-center" @tap="toUserQr" style="justify-content: flex-end">
<!--        <div>-->
<!--          <AssetsImage path="/static/er-icon.png" width="22px" height="25px"></AssetsImage>-->
<!--        </div>-->
        <div class="user-name" style="font-weight: 400;font-size: 12px;margin-top: 4px;">我的邀请码:{{
            inviteCode
          }}
        </div>
      </div>
    </div>
        <div class="user-content-box">
          <div class="sub-title">
            我的钱包
          </div>
          <div class="sub-text">
            {{stateMap.balance}}
          </div>
        </div>
    <div class="user-content-box">
      <div class="sub-title">
        我的医疗保险总额
      </div>
      <div class="sub-text">
        {{ stateMap.alreadyReceived}}
      </div>

      <div class="flex-box flex-space-between" style="margin-top: 12px;">
        <div>
          <div class="sub-title">
            领取医疗保险金
          </div>
          <div class="sub-text">
            {{ stateMap.amountClaimed }}
          </div>
        </div>
        <div :class="getState?'watch-btn':'watch-btn-disabled'" @click="getInsMoney">
          领取
        </div>
      </div>
      <div class="notice">
        详情：保险激活后需每日签到领取保险金，如意外事故发生以当前保险总额计算赔付金，详情请咨询国保通在线客服。
      </div>
    </div>
    <div class="setting-box">
      <div class="row" style="padding-top: 0;" @click="toSettingPage('/pages/Bao/certification')">
        <AssetsImage :path="`/static/me.png`" width="20px" height="20px"></AssetsImage>
        <span style="margin-left: 11px;">实名认证</span>
        <div style="flex:1"></div>

        <span style="font-size: 13px;color: #999">{{ states[stateMap.kycStatus]}}</span>
        <AssetsImage :path="'/static/right-b.png'" width="16px" height="16px"></AssetsImage>
      </div>
      <div @tap="toSettingPage(item.url)" class="row" v-for="(item,index) in settings"
           :style="{borderBottom:index==3?'none':'',paddingBottom:index==3?'0':'12px'}">
        <AssetsImage :path="`/static/Frame-${index}.png`" width="20px" height="20px"></AssetsImage>
        <span style="margin-left: 11px;">{{ item.name }}</span>
        <div style="flex:1"></div>
        <AssetsImage :path="'/static/right-b.png'" width="16px" height="16px"></AssetsImage>
      </div>
    </div>
    <div class="kefu" @click="toOpen">
      国保通在线客服
    </div>
    <div class="team-btn flex-center" @tap="toSettingPage('/pages/Bao/team')">
      我的保险团队
    </div>
    <div class="team-btn flex-center" @tap="logUserOut" style="background-color: #DBB077;margin-top: 12px;color: #fff">
      安全登出
    </div>
    <!--    <div class="avatar-container" >-->

    <!--      <UserCard-->
    <!--          @tap="toUserDetail"-->
    <!--          title="账号"-->

    <!--          :account="myUserInfo && myUserInfo.accountId"-->
    <!--          :nick="myUserInfo && myUserInfo.name"-->
    <!--      ></UserCard>-->
    <!--    </div>-->

    <!--    <div class="setting-container">-->
    <!--      <div class="setting-row">-->
    <!--        <span>加我好友时需要验证</span>-->
    <!--        <switch-->
    <!--            :checked="enableAutoAddFriends"-->
    <!--            color="#DBB077"-->
    <!--            @change="onChangeEnableV2CloudConversation"-->
    <!--        />-->
    <!--      </div>-->
    <!--      &lt;!&ndash;      <div class="setting-row">&ndash;&gt;-->
    <!--      &lt;!&ndash;        <span>允许别人搜到我</span>&ndash;&gt;-->
    <!--      &lt;!&ndash;        <switch&ndash;&gt;-->
    <!--      &lt;!&ndash;            :checked="enableV2CloudConversation"&ndash;&gt;-->
    <!--      &lt;!&ndash;            color="#DBB077"&ndash;&gt;-->
    <!--      &lt;!&ndash;            @change="onChangeEnableV2CloudConversation"&ndash;&gt;-->
    <!--      &lt;!&ndash;        />&ndash;&gt;-->
    <!--      &lt;!&ndash;      </div>&ndash;&gt;-->
    <!--      <div class="setting-row">-->
    <!--        <span>注销账号</span>-->
    <!--        <AssetsImage path="/static/right-g.png" width="16px" height="16px"></AssetsImage>-->
    <!--      </div>-->
    <!--      <div class="setting-row">-->
    <!--        <span>关于我们</span>-->
    <!--        <AssetsImage path="/static/right-g.png" width="16px" height="16px"></AssetsImage>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    <div>-->
    <!--      <button class="login-btn" @tap="logUserOut">退出登录</button>-->
    <!--    </div>-->
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import AssetsImage from "@/components/AssetsImage.vue";
import {t} from "@/utils/i18n";
import {logout} from "@/utils/imUtils";
import DefaultHeader from "@/components/defaultHeader.vue";
import {customNavigateTo} from "@/utils/customNavigate";
import Avatar from "@/components/Avatar.vue";
import {autorun} from 'mobx'
import {onShow} from '@dcloudio/uni-app'
import {V2NIMUser} from 'nim-web-sdk-ng/dist/v2/NIM_UNIAPP_SDK/V2NIMUserService'
import {httpRequest} from "@/utils/request";
const states=["认证中",'已认证','立即认证']
const myUserInfo = ref<V2NIMUser>()
const settings = [
  {
    name: '我的保单',
    url: "/pages/Bao/my-order"
  },


  {
    name: '关于国保通',
    url: `/pages/User/my/about`
  }, {
    name: '设置',
    url: `/pages/User/my/my-detail`
  },
  {
    name: '修改密码',
    url: "/pages/Login/changePassword"
  },
]
const uninstallMyUserInfoWatch = autorun(() => {
  myUserInfo.value = uni.$UIKitStore.userStore.myUserInfo
  console.log(myUserInfo.value,'myUserInfo')
})
const inviteCode = ref('');
const stateMap = ref({});
const getState = ref(false);
const serviceUrl='';
function getData() {
  const userInfo = uni.$UIKitStore.userStore.myUserInfo
  if(!userInfo.accountId) return;
  httpRequest({
    method: "get",
    data: {
      account: userInfo.accountId,
    },
    url: `MedicalInsuranceAccount/getReceiveStatus?account=${userInfo.accountId}`,
  }).then(res => {
    getState.value = res;
  })
  httpRequest({
    method: "GET",
    url: "im/api/getUserByAccount?account=" + uni.$UIKitStore.userStore.myUserInfo.accountId,
  }).then(res => {
    stateMap.value = res;
  })
  httpRequest({
    url: 'im/api/getUserCodeAndUrl',
    method: "GET",
    data: {
      account: userInfo.accountId,
    }
  }).then(res => {
    inviteCode.value = res.code;
  })
}

function getInsMoney() {
  if (!getState.value) {
    return;
  }
  httpRequest({
    method: "get",
    data: {
      account: myUserInfo.value.accountId,
    },
    url: `MedicalInsuranceAccount/getInsuranceBenefit?account=${myUserInfo.value.accountId}`,
  }).then(res => {
    uni.showToast({
      title: "领取成功",
      icon: "none",
    })
    getData();
  })
}

const enableAutoAddFriends = ref(false)
onMounted(() => {

  enableAutoAddFriends.value = uni.getStorageSync(myUserInfo.value?.accountId + 'autoAddFriends') === 'on'


})
onShow((options) => {
  getData();
  myUserInfo.value = uni.$UIKitStore.userStore.myUserInfo
})

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

function toUserDetail() {
  customNavigateTo({
    url: `/pages/User/my/my-detail`,
  })
}

function toUserQr() {
  customNavigateTo({
    url: `/pages/User/my-detail/my-qrcode`,
  })
}

function toSettingPage(url) {
  customNavigateTo({
    url: url
  })
}

function  toOpen(){
  customNavigateTo({
    url: `/pages/Other/webview?url=${stateMap.value.customerServiceUrl}`
  })
}
</script>

<style scoped lang="scss">
.user-container {
  height: 100%;
  width: 100%;
  padding: 20px 14px 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("/static/baobg.png");
  box-sizing: border-box;
  overflow-y: scroll;
}

.user-name {
  font-family: PingFang SC;
  font-weight: 600;
  font-style: Semibold;
  font-size: 15px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: -0.3px;
  color: #242424;
  margin-left: 14px;
}

.user-content-box {


  border-radius: 7px;
  padding-top: 10px;
  padding-right: 12px;
  padding-bottom: 10px;
  padding-left: 12px;
  border-width: 1px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.476) 40.5%, rgba(255, 255, 255, 0.85) 93%);
  margin-top: 12px;
}

.sub-title {
  font-weight: 400;
  font-style: Regular;
  font-size: 12px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  color: #333;

}

.sub-text {
  font-family: DIN;
  font-weight: 700;
  font-style: Medium;
  font-size: 22px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  vertical-align: bottom;
  color: #333333;

  margin-top: 4px;


}

.watch-btn {
  width: 80px;
  height: 32px;
  border-radius: 8px;
  background-color: #D39443;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #fff;

}
.watch-btn-disabled {
  width: 80px;
  height: 32px;
  border-radius: 8px;
  background-color: #C7BDB1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #fff;

}
.notice {
  font-weight: 400;
  font-style: Regular;
  font-size: 12px;
  leading-trim: NONE;
  line-height: 20px;
  letter-spacing: 0px;
  color: #C2B1A3;
  margin-top: 10px;

}

.setting-box {

  border-radius: 8px;
  padding-top: 16px;
  padding-right: 13px;
  padding-bottom: 16px;
  padding-left: 13px;
  background: #FFFFFFD9;
  margin-top: 12px;
}

.row {
  display: flex;
  align-items: center;
  font-family: PingFang SC;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: -0.3px;
  color: #1D1D35;
  padding: 12px 0;
  border-bottom: 0.5px solid #F2F2F2
}

.kefu {
  text-align: center;
  color: #559AF4;
  font-family: PingFang SC;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: center;
  margin: 12px 0;

}

.team-btn {

  border-radius: 8px;
  padding: 15px 0;
  border: 1.5px solid #DBB077;
  font-family: PingFang SC;
  font-weight: 400;
  font-style: Regular;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  color: #DBB077;
}
</style>
