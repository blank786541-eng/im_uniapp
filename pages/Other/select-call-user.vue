<template>
  <div>
    <NavBar title="邀请语音聊天"/>
    <PersonSelect
        :personList="friendList"
        @checkboxChange="checkboxChange"
        :showBtn="true"
        @onBtnClick="addTeamMember"
    >
    </PersonSelect>
  </div>
</template>

<script lang="ts" setup>

import {ref} from 'vue'
import {onLoad, onUnload} from '@dcloudio/uni-app'
import {debounce} from '@xkit-yx/utils'
import PersonSelect from "@/components/PersonSelect.vue";
import NavBar from "@/components/NavBar.vue";
import {V2NIMConst} from "nim-web-sdk-ng/dist/esm/nim";
import {customNavigateTo} from "@/utils/customNavigate";
// 好友列表
const friendList = ref<PersonSelectItem[]>([])
// 群ID
let teamId = ''
let conversationId = ''

let newTeamMember: string[] = []

const checkboxChange = (selectList: string[]) => {
  newTeamMember = selectList
}
// 添加群成员
const addTeamMember = debounce(() => {
  if (newTeamMember.length == 0) {
    uni.showToast({
      title: "请选择成员",
      icon: "none",
    })
    return;
  }
  if(!newTeamMember.includes(uni.$UIKitStore.userStore.myUserInfo.accountId)){
    newTeamMember.push(uni.$UIKitStore.userStore.myUserInfo.accountId);
  }
  console.log(newTeamMember, 'selectList====')

  uni.setStorageSync('inviteUsers', newTeamMember)
  customNavigateTo({
    url: `/pages/Other/team-video-call?type=2&teamId=${teamId}&conversationId=${conversationId}`,
  })
}, 400)

onLoad((props) => {

  teamId = props ? props.teamId : ''
  conversationId = props ? props.conversationId : ''
  const res = uni.$UIKitStore.teamMemberStore.getTeamMember(teamId)
  const stateMap = uni.$UIKitStore?.subscriptionStore.stateMap
  friendList.value = res.map((item) => {
    let login = false;
    console.log(stateMap.get(item.accountId), `res===== ${item.accountId}`, uni.$UIKitStore.localOptions.loginStateVisible);
    if (
        stateMap.get(item.accountId) &&
        uni.$UIKitStore.localOptions.loginStateVisible
    ) {

      login =
          stateMap.get(item.accountId)?.statusType ===
          V2NIMConst.V2NIMUserStatusType.V2NIM_USER_STATUS_TYPE_LOGIN

    } else {
      login = false
    }


    return {
      accountId: item.accountId,

      teamId: teamId,
      disabled: !login,
      checked: false
    }
  }).filter((item) => !item.disabled)

})

onUnload(() => {
  uni.$off(events.FRIEND_SELECT)
})
</script>

<style lang="scss" scoped>
@import '../styles/common.scss';

.group-input-wrapper {
  display: flex;
  align-items: center;

  .group-input {
    margin: 10px;
    background-color: #f2f4f5;
    padding: 4px;
    border-radius: 5px;
    flex: 1;
  }

  .button {
    width: 65px;
    height: 30px;
    font-size: 12px;
    text-align: center;
    line-height: 30px;
    margin-right: 5px;
    padding: 0;
    color: #5c9bed;
  }
}

.placeholder {
  color: #a6adb6;
}

.right-button {
  color: #5c9bed;
}
</style>
