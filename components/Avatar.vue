<template>
  <div
      class="avatar"
      :style="{width:props.width,height:props.height}"
      @click="handleAvatarClick"
      @longpress="longpress"
      @touchend="touchend"
  >
    <!-- 使用遮罩层避免android长按头像会出现保存图片的弹窗 -->
    <!--    <div class="img-mask"></div>-->
    <image
        :lazy-load="true"
        class="avatar-img"
        v-if="avatarUrl"
        :src="avatarUrl"
        mode="aspectFill"
    />
    <div class="avatar-name-wrapper" :style="{ backgroundColor: color }" v-else>
      <div class="avatar-name-text" :style="{ fontSize: 13 + 'px' }">
        {{ appellation }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {customNavigateTo, customRedirectTo} from '../utils/customNavigate'
import {autorun} from 'mobx'
import {ref, computed, onUnmounted, withDefaults, onMounted} from 'vue'
import {V2NIMUser} from 'nim-web-sdk-ng/dist/v2/NIM_UNIAPP_SDK/V2NIMUserService'
import {V2NIMConst} from "@/utils/nim";

const props = withDefaults(
    defineProps<{
      account: string
      width?: string,
      height?: string,
      teamId?: string
      avatar?: string
      size?: string
      gotoUserCard?: boolean
      fontSize?: string
      isRedirect?: boolean
      isManager?: boolean
    }>(),
    {
      teamId: '',
      width: "53px",
      height: "53px",
      avatar: '',
      size: '',
      gotoUserCard: false,
      fontSize: '',
      isRedirect: false,
      isManager: false,
    }
)

const $emit = defineEmits(['onLongpress'])
let isFriend = false;
const avatarSize = props.size || 42
const user = ref<V2NIMUser>()
let isLongPress = false // uniapp 长按事件也会触发点击事件，此时需要处理

const appellation = ref<string>('')
onMounted(() => {
  checkRole();
})
const appellationWatch = autorun(() => {
  appellation.value = uni.$UIKitStore.uiStore
      .getAppellation({
        account: props.account,
        ignoreAlias: false,
      })
      ?.slice(0, 2)
})

const userInfoWatch = autorun(() => {
  uni.$UIKitStore?.userStore?.getUserActive(props.account).then((data) => {
    user.value = data
    isFriend = uni.$UIKitStore.uiStore.friends
        .filter(
            (item) =>
                !uni.$UIKitStore.relationStore.blacklist.includes(item.accountId)
        )
        .some((item) => item.accountId === props.account)


  })

})

const avatarUrl = computed(() => {
  user.value = uni.$UIKitStore?.userStore?.users?.get(props.account)
  return props.avatar || user.value?.avatar
})

const key = `__yx_avatar_color_${props.account}__`
let color = uni.getStorageSync(key)
if (!color) {
  const colorMap: { [key: number]: string } = {
    0: '#60CFA7',
    1: '#53C3F3',
    2: '#537FF4',
    3: '#854FE2',
    4: '#BE65D9',
    5: '#E9749D',
    6: '#F9B751',
  }
  const _color = colorMap[Math.floor(Math.random() * 7)]
  uni.setStorageSync(key, _color)
  color = _color
}

let manager = false;

function checkRole() {
  if (props.teamId) {
    const teamMember = uni.$UIKitStore.teamMemberStore.getTeamMember(props.teamId, [
      uni.$UIKitStore.userStore.myUserInfo.accountId,
    ])[0]

    if (teamMember) {
      manager = teamMember.memberRole == V2NIMConst.V2NIMTeamMemberRole.V2NIM_TEAM_MEMBER_ROLE_MANAGER ||
          teamMember.memberRole == V2NIMConst.V2NIMTeamMemberRole.V2NIM_TEAM_MEMBER_ROLE_OWNER;


    }
  }

}

const handleAvatarClick = () => {
  console.log(`isFriend:${isFriend}manager:${manager} `)

  if (props.gotoUserCard && !isLongPress) {
    if (props.isRedirect) {
      if (props.teamId && manager || isFriend ){
        if (props.account === uni.$UIKitStore?.userStore?.myUserInfo.accountId) {
          customRedirectTo({
            url: `/pages/User/my/my-detail`,
          })
        } else {
          customRedirectTo({
            url: `/pages/User/friend/index?account=${props.account}&conversationId=${props.teamId}`,
          })
        }
      }

    } else {
      if (props.teamId && manager || isFriend ){
        if (props.account === uni.$UIKitStore?.userStore?.myUserInfo.accountId) {
          customNavigateTo({
            url: `/pages/User/my/my-detail`,
          })
        } else {
          customNavigateTo({
            url: `/pages/User/friend/index?account=${props.account}&conversationId=${props.teamId}`,
          })
        }
      }

    }
  }
}

const longpress = () => {
  isLongPress = true
  $emit('onLongpress')
}

const touchend = () => {
  const timeOut = setTimeout(() => {
    isLongPress = false
    clearTimeout(timeOut)
  }, 200)
}

onUnmounted(() => {
  userInfoWatch()
  appellationWatch()
})
</script>

<style scoped lang="scss">
.avatar {

  box-sizing: border-box;
  flex-shrink: 0;
}

.img-mask {
  position: absolute;
  z-index: 10;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  opacity: 0;
}

.avatar-img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
  flex-shrink: 0;
}

.avatar-name-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}

.avatar-name-text {
  color: #fff;
  size: 14px;
}
</style>
