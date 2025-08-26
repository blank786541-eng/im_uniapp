<template>
  <div>
    <default-header :title="t('FriendPageText')" ></default-header>
    <div class="wrapper">

      <div class="flex-box " style="margin-top: 20px">
        <UserCard
            :account="userInfo && userInfo.accountId"
            :nick="userInfo && userInfo.name"
            :is-me="true"
        ></UserCard>
      </div>
      <div class="default-wrapper " style="margin-top: 12px;">
        <div class="row " @tap="goToPage('/pages/User/my-detail/change-name?name='+userInfo.name)">
          <span class="label">昵称</span>
          <div class="container-box"></div>
          <span class="value">{{ userInfo.name }}</span>
          <AssetsImage path="/static/right.png" width="6px" height="12px"></AssetsImage>
        </div>
        <div class="row">
          <span class="label">性别</span>
          <div class="container-box"></div>
          <div class="value">{{
              userInfo && userInfo.gender === 0
                  ? t('unknow')
                  : userInfo && userInfo.gender === 1
                      ? t('男')
                      : t('女')
            }}
          </div>
          <AssetsImage path="/static/right.png" width="6px" height="12px"></AssetsImage>
        </div>
        <div class="row " @tap="copyAccount">
          <span class="label">账号</span>
          <div class="container-box"></div>
          <span class="value">{{ userInfo.accountId }}</span>
          <AssetsImage path="/static/copy.png" width="16px" height="16px"></AssetsImage>
        </div>
              <div class="row">
                <span class="label">手机号</span>
                <div class="container-box"></div>
                <div class="value">{{
                    userInfo.mobile
                  }}
                </div>
                <AssetsImage path="/static/right.png" width="6px" height="12px"></AssetsImage>
              </div>
        <div class="row" @tap="goToPage('/pages/User/my-detail/change-sign?name='+(userInfo.sign ?? ''))">
          <span class="label">个性签名</span>
          <div class="container-box"></div>
          <div class="value">{{ userInfo.sign }}</div>
          <AssetsImage path="/static/right.png" width="6px" height="12px"></AssetsImage>
        </div>
              <div class="row">
                <span class="label">二维码</span>
                <div class="container-box"></div>
                <AssetsImage path="/static/erweima.png" width="15px" height="15px" style="margin-right: 6px"></AssetsImage>
                <AssetsImage path="/static/right.png" width="6px" height="12px"></AssetsImage>
              </div>
              <div class="row">
                <span class="label">支付密码</span>
                <div class="container-box"></div>
                <div class="value">修改</div>
                <AssetsImage path="/static/right.png" width="6px" height="12px"></AssetsImage>
              </div>
      </div>


      <!--    <UserCard-->
      <!--      :account="userInfo && userInfo.accountId"-->
      <!--      :nick="userInfo && userInfo.name"-->
      <!--    ></UserCard>-->
      <!--    <template v-if="relation === 'stranger'">-->
      <!--      <div class="userInfo-item-wrapper">-->
      <!--        <div class="userInfo-item">-->
      <!--          <div class="item-left">{{ t('addBlacklist') }}</div>-->
      <!--          <switch-->
      <!--            :checked="isInBlacklist"-->
      <!--            @change="(checked:boolean) => handleSwitchChange(checked)"-->
      <!--          />-->
      <!--        </div>-->
      <!--      </div>-->

      <!--      <div class="button" :style="{ marginTop: '10px' }" @click="addFriend">-->
      <!--        {{ t('addFriendText') }}-->
      <!--      </div>-->
      <!--    </template>-->
      <!--    <template v-else>-->
      <!--      <div class="userInfo-item-wrapper">-->
      <!--        <div class="userInfo-item" @tap="handleAliasClick">-->
      <!--          <div class="item-left">{{ t('remarkText') }}</div>-->
      <!--          <div class="item-right">-->
      <!--            <Icon iconClassName="more-icon" color="#999" type="icon-jiantou" />-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="userInfo-item">-->
      <!--          <div class="item-left">{{ t('genderText') }}</div>-->
      <!--          <div class="item-right">-->
      <!--            {{-->
      <!--              userInfo && userInfo.gender === 0-->
      <!--                ? t('unknow')-->
      <!--                : userInfo && userInfo.gender === 1-->
      <!--                ? t('man')-->
      <!--                : t('woman')-->
      <!--            }}-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="box-shadow"></div>-->
      <!--        <div class="userInfo-item">-->
      <!--          <div class="item-left">{{ t('birthText') }}</div>-->
      <!--          <div class="item-right">-->
      <!--            {{ (userInfo && userInfo.birthday) || t('unknow') }}-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="box-shadow"></div>-->
      <!--        <div class="userInfo-item">-->
      <!--          <div class="item-left">{{ t('mobile') }}</div>-->
      <!--          <div class="item-right">-->
      <!--            {{ (userInfo && userInfo.mobile) || t('unknow') }}-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="box-shadow"></div>-->
      <!--        <div class="userInfo-item">-->
      <!--          <div class="item-left">{{ t('email') }}</div>-->
      <!--          <div class="item-right">-->
      <!--            {{ (userInfo && userInfo.email) || t('unknow') }}-->
      <!--          </div>-->
      <!--        </div>-->
      <!--        <div class="userInfo-item">-->
      <!--          <div class="item-left">{{ t('sign') }}</div>-->
      <!--          <div class="item-right">-->
      <!--            {{ (userInfo && userInfo.sign) || t('unknow') }}-->
      <!--          </div>-->
      <!--        </div>-->
      <!--      </div>-->

      <!--    </template>-->
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onLoad} from '@dcloudio/uni-app'
import UserCard from '../../../components/UserCard.vue'
import {onMounted, onUnmounted, ref, watch} from 'vue'
import {t} from '../../../utils/i18n'
import NavBar from '../../../components/NavBar.vue'
import {autorun} from 'mobx'
import {
  customRedirectTo,
  customNavigateTo,
} from '../../../utils/customNavigate'
import type {Relation} from '@xkit-yx/im-store-v2'
import {V2NIMUser} from 'nim-web-sdk-ng/dist/v2/NIM_UNIAPP_SDK/V2NIMUserService'
import {V2NIMConst} from '../../../utils/nim'
import Icon from '../../../components/Icon.vue'
import AssetsImage from "@/components/AssetsImage.vue";
import DefaultHeader from "@/components/defaultHeader.vue";
import { onShow, onUnload} from '@dcloudio/uni-app'
/**是否是云端会话 */
const enableV2CloudConversation =
    uni.$UIKitStore?.sdkOptions?.enableV2CloudConversation

// 用户信息
const userInfo = ref<V2NIMUser>()
// 关系
const relation = ref<Relation>('stranger')
// 是否在黑名单
const isInBlacklist = ref(false)

let account = ''


const uninstallMyUserInfoWatch = autorun(() => {
  userInfo.value = uni.$UIKitStore.userStore.myUserInfo
})

onShow(()=>{
  userInfo.value = uni.$UIKitStore.userStore.myUserInfo
})

onMounted(()=>{
  uninstallMyUserInfoWatch();
})
onUnmounted(() => {
  uninstallMyUserInfoWatch()

})

const copyAccount = () => {
  uni.setClipboardData({
    data: userInfo.value?.accountId,
    showToast: false,
    success: () => {
      uni.showToast({
        title: t('copySuccessText'),
        icon: 'none',
      })
    },
    fail: () => {
      uni.showToast({
        title: t('copyFailText'),
        icon: 'none',
      })
    },
  })
}

function goToPage(url){
   customNavigateTo({url})
}
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';

page {
  padding-top: var(--status-bar-height);
  height: 100vh;
  overflow: hidden;
}

.wrapper {
  background-color: rgb(245, 246, 247);
  height: 100vh;
  box-sizing: border-box;
  width: 100%;
  padding: 12px 18px;
  box-sizing: border-box;

  .userInfo-item-wrapper {
    background-color: #fff;
    margin: 10px 0;
    border-radius: 8px;
    color: #1D1D35;
    font-weight: 400;
    font-size: 14px;

    letter-spacing: -0.3px;
    .userInfo-item {
      display: flex;

      align-items: center;
      justify-content: space-between;




      .item-right {
        font-size: 15px;
        width: 200px;
        text-align: right;
        color: #a6adb6;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .button {
    // margin-top: 150px;
    display: block;
    width: 100%;
    background-color: #fff;
    color: rgb(25, 146, 239);
    text-align: center;
    height: 50px;
    font-size: 16px;
    line-height: 50px;
    border-radius: 8px;
  }

  .button-red {
    color: #e6605c;
    border-radius: 8px;
    margin-top: 16px;
  }

  .box-shadow {
    height: 1px;
    background: none;
    padding: 0 25px;
    box-shadow: 0 0.5px 0 rgb(247, 244, 244);
  }
}

.avatar {
  padding: 9px 17px;
}

.row {
  display: flex;
  align-items: center;
  color: #1D1D35;
  font-weight: 400;
  font-size: 14px;

  letter-spacing: -0.3px;
  padding: 17px 0;
  border-bottom: 1px solid #F2F2F2;

  .value {
    color: #BFBFBF;
    margin-right: 6px;
  }
}
</style>
