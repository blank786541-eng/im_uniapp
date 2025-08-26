<template>
  <div class="wrapper">
    <!--    <NavBar :title="t('nickInTeam')">-->
    <!--      <template v-slot:left>-->
    <!--        <div class="nav-bar-text" @tap="back">{{ t('cancelText') }}</div>-->
    <!--      </template>-->
    <!--    </NavBar>-->
    <default-header :title="t('nickInTeam')" :show-action="true" :tap-action="onOk"></default-header>
    <div class="flex-box flex-y-center box">
      <!--      <input-->
      <!--        class="input"-->
      <!--        :confirm-type="t('okText')"-->
      <!--        @focus="onInputFocus"-->
      <!--        :maxlength="15"-->
      <!--        @input="onInputChange"-->
      <!--        :value="inputValue"-->
      <!--        :placeholder="t('nickInTeam')"-->
      <!--      />-->
      <FormInput
          class="input"
          :allow-clear="true"
          :maxlength="15"
          :value="inputValue"

          :placeholder="t('nickInTeam')"
          @input="inputValue"
          :confirm-type="t('okText')"
          @focus="onInputFocus"

      />

    </div>

  </div>
</template>

<script lang="ts" setup>
import {onLoad} from '@dcloudio/uni-app'
import {autorun} from 'mobx'
import {onUnmounted, ref} from 'vue'
import Icon from '../../../components/Icon.vue'
import NavBar from '../../../components/NavBar.vue'
import {t} from '../../../utils/i18n'
import {V2NIMTeamMember} from 'nim-web-sdk-ng/dist/esm/nim/src/V2NIMTeamService'
import DefaultHeader from "@/components/defaultHeader.vue";
import FormInput from "@/components/FormInput.vue";

const inputValue = ref('')
const showClearIcon = ref(false)
const myMemberInfo = ref<V2NIMTeamMember>()
let teamId = ''
let teamMembersWatch = () => {
}

onLoad((option) => {
  teamId = option ? option.id : ''
  teamMembersWatch = autorun(() => {
    myMemberInfo.value = uni.$UIKitStore.teamMemberStore.getTeamMember(teamId, [
      uni.$UIKitStore.userStore.myUserInfo.accountId,
    ])[0]

    inputValue.value = myMemberInfo.value?.teamNick || ''
  })
})

const onInputChange = (e: any) => {
  inputValue.value = e.detail.value
}

const onInputFocus = () => {
  showClearIcon.value = true
}

const clearInputValue = () => {
  inputValue.value = ''
}

const onOk = () => {
  uni.$UIKitStore.teamMemberStore
      .updateMyMemberInfoActive({
        teamId,
        memberInfo: {
          teamNick: inputValue.value.trim(),
        },
      })
      .then(() => {
        back()
      })
      .catch((err: any) => {
        uni.showToast({
          title: t('saveFailedText'),
          icon: 'error',
        })
      })
}

const back = () => {
  uni.navigateBack({
    delta: 1,
  })
}

onUnmounted(() => {
  teamMembersWatch()
})
</script>

<style lang="scss" scoped>
@import '../../styles/common.scss';

page {
  padding-top: var(--status-bar-height);
  height: 100vh;
  background-color: rgb(245, 246, 247);
}

.wrapper {
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: rgb(245, 246, 247);

  .nav-bar-text {
    color: rgb(20, 146, 209);
  }

  .box {

    background-color: #fff;
    padding:0 15px;
    margin:16px 20px;
    border-radius: 12px;
    box-sizing: border-box;
    .input {
      padding: 0 12px;
      flex: 1;
      box-sizing: border-box;
    }

    .clear-icon {
      margin-right: 5px;
      z-index: 999;
    }
  }
}
</style>
