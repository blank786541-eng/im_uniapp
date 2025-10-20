<template>
  <default-header :title="t('addFriendText')"></default-header>
  <div style="padding: 0 15px">
    <!--    <NavBar :title="t('addFriendText')" />-->


    <search-input :placeholder="t('enterAccount')" @search="handleSearch" @change="onInputValueChange"></search-input>
    <Empty
        :text="t('noExistUser')"
        v-if="searchResState == 'searchEmpty'"
    ></Empty>
    <div class="user-wrapper" v-else-if="searchResState === 'searchResult'">
      <Avatar
          class="user-avatar"
          :account="(userInfo && userInfo.accountId) || ''"
      />
      <div class="user-info">
        <div class="user-nick">
          {{ (userInfo && userInfo.name) || (userInfo && userInfo.accountId) }}
        </div>
        <div class="user-id">{{ userInfo && userInfo.accountId }}</div>
      </div>
      <!-- 如果是好友之间去聊天，如果不是好友，添加好友 -->
      <button
          v-if="relation !== 'stranger'"
          class="go-chat-button"
          type="primary"
          @click="gotoChat"
      >
        {{ t('chatButtonText') }}
      </button>
      <button v-else class="go-chat-button" @click="applyFriend">
        {{ t('addText') }}
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, onUnmounted, ref} from 'vue'
import Avatar from '../../../components/Avatar.vue'
import NavBar from '../../../components/NavBar.vue'
import Icon from '../../../components/Icon.vue'
import Empty from '../../../components/Empty.vue'
import {t} from '../../../utils/i18n'
import {customRedirectTo} from '../../../utils/customNavigate'
import {V2NIMConst} from '../../../utils/nim'
import {V2NIMUser} from 'nim-web-sdk-ng/dist/v2/NIM_UNIAPP_SDK/V2NIMUserService'
import {autorun} from 'mobx'
import type {Relation} from '@xkit-yx/im-store-v2'
import DefaultHeader from "@/components/defaultHeader.vue";
import AssetsImage from "@/components/AssetsImage.vue";
import SearchInput from "@/components/search-input.vue";
import {httpRequest} from "@/utils/request";

// 搜索结果状态
const searchResState = ref<'beginSearch' | 'searchEmpty' | 'searchResult'>(
    'beginSearch'
)

// 用户信息
const userInfo = ref<V2NIMUser>()

// 关系
const relation = ref<Relation>('stranger')

let states = {};
onMounted(() => {
  httpRequest({
    method: "GET",
    url: "im/api/getUserByAccount?account=" + uni.$UIKitStore.userStore.myUserInfo.accountId,
  }).then(res => {
    states = res;

  })
})
// 监听关系变化
const relationWatch = autorun(() => {
  // 这行打印用于触发 autorun 执行，不能删除
  console.log('friends: ', uni.$UIKitStore.uiStore.friends)
  if (userInfo.value?.accountId) {
    relation.value = uni.$UIKitStore.uiStore.getRelation(
        userInfo.value?.accountId
    ).relation
  }
})

// 搜索好友
const handleSearch = async (value: string) => {


  if (states.addFriend ===1) return;
  try {
    const user: V2NIMUser = await uni.$UIKitStore.userStore.getUserActive(
        value
    )

    if (!user) {
      searchResState.value = 'searchEmpty'
    } else {
      userInfo.value = user

      relation.value = uni.$UIKitStore.uiStore.getRelation(
          user.accountId
      ).relation
      searchResState.value = 'searchResult'
    }
  } catch (error) {
    searchResState.value = 'searchEmpty'
    uni.showToast({
      title: t('searchFailText'),
      icon: 'error',
    })
  }
}

// 发送添加好友申请
const applyFriend = async () => {
  const account = userInfo.value?.accountId
  if (account) {
    try {
      await uni.$UIKitStore.friendStore.addFriendActive(account, {
        addMode: V2NIMConst.V2NIMFriendAddMode.V2NIM_FRIEND_MODE_TYPE_APPLY,
        postscript: '',
      })

      // 发送申请成功后解除黑名单
      await uni.$UIKitStore.relationStore.removeUserFromBlockListActive(account)
      uni.showToast({
        title: t('applyFriendSuccessText'),
        icon: 'none',
      })
    } catch (error) {
      uni.showToast({
        title: t('applyFriendFailText'),
        icon: 'error',
      })
    }
  }
}

// 去聊天
const gotoChat = async () => {
  const to = userInfo.value?.accountId
  if (to) {
    try {
      const conversationId =
          uni.$UIKitNIM.V2NIMConversationIdUtil.p2pConversationId(to)
      await uni.$UIKitStore.uiStore.selectConversation(conversationId)
      customRedirectTo({
        url: '/pages/Chat/index',
      })
    } catch (error) {
      uni.showToast({
        title: t('gotoChatFailText'),
        icon: 'error',
      })
    }
  }
}

const onInputValueChange = (value: string) => {
  //删除搜索内容,页面回到最原始状态，搜索结果都清空
  if (value === '') {
    searchResState.value = 'beginSearch'
  }
}

onUnmounted(() => {
  relationWatch()
})
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';

.search-input-wrapper {
  display: flex;
  align-items: center;
  background-color: #f2f4f5;
  box-sizing: border-box;
  padding: 0 12px;
  border-radius: 8px;
  box-sizing: border-box;


  .search-input {
    display: inline-block;
    background-color: #f2f4f5;
    width: 85%;
    padding: 4px;
    height: 40px;
    margin-left: 8px;
  }

  .placeholder {
    color: #a6adb6;
  }
}

.user-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 10px;
  box-sizing: border-box;

  .user-avatar {

    height: 40px;
    border-radius: 50%;
    display: inline-block;
  }

  .user-info {
    flex: 1;
    margin-left: 15px;
    overflow: hidden;

    .user-nick {
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }

    .user-id {
      width: 100%;
      font-size: 14px;
      color: #b5b6b8;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  .go-chat-button {
    font-size: 14px;
    margin: 5px;
    padding: 0 16px;
    box-sizing: border-box;
    flex-shrink: 0;
    background-color: $uni-color-primary !important;
    color: #fff;
  }
}
</style>
