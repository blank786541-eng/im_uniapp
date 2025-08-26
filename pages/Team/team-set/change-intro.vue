<script lang="ts" setup>

import DefaultHeader from "@/components/defaultHeader.vue";
import FormInput from "@/components/FormInput.vue";
import {onLoad} from '@dcloudio/uni-app'
import {ref} from 'vue'
import {updateImInfo} from "@/utils/request";

const type = ref(1)
const content = ref("")
const id = ref(-1);
let hasPermission = ref<boolean>(false)
onLoad((options) => {
  type.value = options.type;
  content.value = options.content;
  const myAccount = uni.$UIKitStore.userStore.myUserInfo.accountId
  const teamId = options?.id
  id.value = options?.id;
  const myTeamMember = uni.$UIKitStore.teamMemberStore.getTeamMember(teamId, [
    myAccount,
  ])[0]
  const team = uni.$UIKitStore.teamStore.teams.get(teamId)
  const updateInfoMode = team?.updateInfoMode
  // updateInfoMode 为 0 表示只有管理员和群主可以修改群信息；updateInfoMode 为 1 表示任何人都可以修改群信息
  if (
      (updateInfoMode === 0 && myTeamMember.memberRole !== 0) ||
      updateInfoMode === 1
  ) {
    hasPermission.value = true
  }
})

async function handleSave() {
  let query = {}
  if (type.value == 1) {
    query.intro = content.value
  }
  if (type.value == 2) {
    query.announcement = content.value
  }
  try {
    await uni.$UIKitStore.teamStore
        .updateTeamActive({
          teamId:id.value,
          info: query,
        });
    uni.showToast({
      title:"修改成功",
      duration:800,
      success:()=>{
        uni.navigateBack();
      }
    })
  } catch (e) {
    uni.showToast({
      title: e.message,
      icon: "error"
    })
  }
}
</script>

<template>
  <div class="team-set-container">
    <!--    <NavBar :title="t('updateNameText')" />-->
    <default-header :title="type==1?'修改群介绍':'修改群公告'" :tap-action="handleSave" :show-action="hasPermission">


    </default-header>
    <div class="team-name-input-container">
      <textarea :disabled="!hasPermission" v-model="content" style="padding:10px"
                class="default-text font-14"></textarea>
      <div class="input-length" v-if="hasPermission">{{ 100 - content.length }}</div>
    </div>


  </div>
</template>

<style scoped lang="scss">
@import '../../styles/common.scss';

page {
  padding-top: var(--status-bar-height);
  height: 100vh;
  overflow: hidden;
}

.team-set-container {
  height: 100vh;
  box-sizing: border-box;
  background-color: #eff1f4;
}

.team-name-input-container {
  background: #ffffff;
  border-radius: 8px;
  padding: 0 16px 5px;
  position: relative;
  margin: 10px 20px;

  .input-length {
    position: absolute;
    right: 25px;
    bottom: 5px;
    font-size: 12px;
    color: #999999;
  }

  .input {
    padding: 10px 10px 5px 0px;
    height: 30px;
  }

  ::v-deep.form-input-item {
    border: none;
  }
}
</style>
