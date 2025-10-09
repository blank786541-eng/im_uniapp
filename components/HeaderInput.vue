<script setup lang="ts">
import {onBeforeMount, onMounted, ref} from "vue";
import AssetsImage from "@/components/AssetsImage.vue";
import {t} from "@/utils/i18n";
import Icon from "@/components/Icon.vue";
import {customNavigateTo} from "@/utils/customNavigate";
import {onHide} from '@dcloudio/uni-app'
import {getUniPlatform} from "@/utils";
import {httpRequest} from "@/utils/request";

const props = defineProps({
  label: {
    type: String,
    default: "label"
  }
});
const addDropdownVisible = ref(false)

const appStatusHeight = ref(0);
onBeforeMount(() => {
  // #ifdef APP-PLUS
  appStatusHeight.value = plus.navigator.getStatusbarHeight();
  // #endif
})
const states=ref({})
onMounted(()=>{
  httpRequest({
    method: "GET",
    url: "im/api/getUserByAccount?account=" + uni.$UIKitStore.userStore.myUserInfo.accountId,
  }).then(res => {
    states.value=res;
    uni.setStorageSync("addFriend",res.addFriend);
  })
})
/** 跳转至搜索页面 */
const goToSearchPage = () => {
  customNavigateTo({
    url: '/pages/Conversation/conversation-search/index',
  })
}

/** 点击Dropdown */
const onDropdownClick = (
    urlType: 'addFriend' | 'createGroup' | 'scan'
) => {


  const urlMap = {
    // 添加好友
    addFriend: '/pages/User/friend/add-friend',
    // 创建群聊
    createGroup: '/pages/Team/team-create/index',
    // 创建讨论组和创建群聊复用一个页面，仅在创建群接口时，群扩展字段添加im_ui_kit_group参数区分，讨论组本质也是群，只是少了群的一些能力，旨在于快速创建讨论
    scan: `/pages/Other/scan`,
  }
  addDropdownVisible.value = false
  customNavigateTo({
    url: urlMap[urlType],
  })
}

const showAddDropdown = () => {
  addDropdownVisible.value = !addDropdownVisible.value
}
const hideAddDropdown = () => {
  // addDropdownVisible.value = false

}
onHide((option: any) => {
  addDropdownVisible.value = false
})


</script>

<template>
  <div class="header" @touchstart="hideAddDropdown">
    <div :style="{height:appStatusHeight}"></div>
    <div class="row">
      <div class="label">{{ label }}</div>
      <div style="position: relative">
        <AssetsImage path="/static/add.png" width="22px" height="22px" @touchstart="showAddDropdown"></AssetsImage>
        <div v-if="addDropdownVisible" class="dropdown-container">
          <div class="add-menu-list">
            <div class="add-menu-item"
                 v-if="states.addFriend===0"
                 @tap="onDropdownClick('addFriend')">
              <div :style="{ marginRight: '5px' }">
                <Icon type="icon-tianjiahaoyou"/>
              </div>
              {{ t('addFriendText') }}
            </div>
            <div class="add-menu-item"
                 v-if="states.groupPermissions===0"
                 @tap="onDropdownClick('createGroup')">
              <div :style="{ marginRight: '5px' }">
                <Icon type="icon-chuangjianqunzu"/>
              </div>
              {{ t('createTeamText') }}
            </div>
            <div
                class="add-menu-item"
                @tap="onDropdownClick('scan')"
            >
              <Icon
                  type="icon-chuangjianqunzu"
                  :style="{ marginRight: '5px' }"
              />
              扫一扫
            </div>
          </div>
        </div>
      </div>

    </div>
    <div class="conversation-search" @touchstart="goToSearchPage">
      <div class="search-input-wrapper">
        <div class="search-icon-wrapper">
          <Icon
              iconClassName="search-icon"
              :size="16"
              color="#A6ADB6"
              type="icon-sousuo"
          ></Icon>

        </div>
        <div class="search-input">{{ t('searchText') }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  background: $uni-color-primary;
  box-sizing: border-box;
  padding: 21px;
}

.label {
  font-weight: 700;
  font-size: 20px;
  letter-spacing: 0;
  color: #FFFCFC;
}

.row {
  padding-top: 12px;
  padding-bottom: 16px;
  display: flex;
  align-content: center;
  justify-content: space-between;
}

.conversation-search {
  display: flex;
  align-items: center;
  height: 44px;
  box-sizing: border-box;
  overflow: hidden;
}

.search-input-wrapper {
  flex: 1;
  display: flex;
  align-items: center;
  overflow: hidden;
  height: 44px;
  box-sizing: border-box;
  background: #f3f5f7;
  border-radius: 32px;
  padding: 0 10px;

}

.search-input {
  margin-left: 5px;
  color: #999999;
  font-size: 14px;
}

.search-icon-wrapper {
  height: 22px;
  display: flex;
  align-items: center;
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
