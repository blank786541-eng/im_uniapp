<template>
  <div class="user-wrapper" @tap="changeAvatar">
    <span class="text">{{title}}</span>
    <div class="container-box"></div>
    <div class="flex-box flex-y-center">
      <Avatar v-if="props.account" size="70" :account="props.account" style="margin-right: 6px"></Avatar>
      <AssetsImage path="/static/right.png" width="6px" height="12px"></AssetsImage>
    </div>

<!--    <div class="account-wrapper">-->
<!--      <div v-if="alias">-->
<!--        <div class="main">{{ alias }}</div>-->
<!--        <div class="deputy">{{ t('name') }}:{{ nick || account }}</div>-->
<!--      </div>-->
<!--      <div v-else class="main">{{ nick || account }}</div>-->
<!--      <div class="deputy">-->
<!--        {{ t('accountText') }}:{{ props.account }}-->
<!--        <div @tap.stop="copyAccount">-->
<!--          <Icon-->
<!--            class="copy-icon"-->
<!--            type="icon-fuzhi1"-->
<!--            color="#A6ADB6"-->
<!--            :size="20"-->
<!--          ></Icon>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<script lang="ts" setup>
import Avatar from './Avatar.vue'
import Icon from './Icon.vue'
import { onUnmounted, ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import { autorun } from 'mobx'
import { t } from '../utils/i18n'
import AssetsImage from "@/components/AssetsImage.vue";
import {V2NIMMessage} from "nim-web-sdk-ng/dist/esm/nim/src/V2NIMMessageService";
import {events} from "@/utils/constants";
import {handleNoPermission} from "@/utils/permission";
import {request} from "node:http";
import {httpRequest} from "@/utils/request";
const props = withDefaults(
  defineProps<{
    account?: string
    nick?: string,
    title:string,
    isMe: boolean,
  }>(),
  {
    title: "头像",
    account: '',
    nick: '',
    isMe: false,
  }
)
const alias = ref<string>()
let uninstallFriendsWatch = () => {}

onLoad((props) => {
  let account = props ? props.account : ''
  uninstallFriendsWatch = autorun(() => {
    const friend = { ...uni.$UIKitStore.friendStore.friends.get(account) }
    alias.value = friend ? friend.alias : ''
  })
})

onUnmounted(() => {
  uninstallFriendsWatch()
})
function changeAvatar(){
  if(!props.isMe) return;
  uni.chooseImage({
    count: 1,
    sizeType: ['compressed'],
    success: (res) => {

      httpRequest({
        url:'im/api/upload',
        data:res.tempFiles[0],
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
      })
      // uni.$UIKitNIM.V2NIMUserService.updateSelfUserProfile({avatar:res.tempFilePaths[0]}).then((res) => {
      //   uni.navigateBack();
      // })

      console.log(res);
    },
    /** uniapp 提供的chooseImage api 在鸿蒙上表现为不支持选择gif，在其他端支持 */
    fail: (error) => {
      console.log('chooseImage', error)
    },
    /** 没有开启权限时，提示开启权限 */
    complete: handleNoPermission,
  })
}

</script>

<style lang="scss" scoped>
@import '../pages/styles/common.scss';

.user-wrapper {
  background-color: #fff;
  display: flex;
  align-items: center;
  padding: 9px 17px;
  width: 100%;
  border-radius: 8px;
  justify-content: space-between;
  box-sizing: border-box;

  .account-wrapper {
    flex: 1;
    overflow: hidden;
    padding-right: 40px;

    .main {
      font-size: 20px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-weight: 500;
    }

    .deputy {
      font-size: 14px;
      display: flex;
      align-items: center;
    }

    .copy-icon {
      margin-left: 2px;
    }
  }
}

.text{
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: -0.3px;

}
</style>
