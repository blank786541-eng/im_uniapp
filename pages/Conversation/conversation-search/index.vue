<template>
  <div>
<!--    <NavBar :title="t('searchTitleText')" />-->
    <default-header :title="t('searchTitleText')"></default-header>
    <div style="padding:0 16px">
      <search-input @change="onInput" @search="search" placeholder="输入账号或者名称"></search-input>
    </div>
    <div v-if="searchResult.length > 0" class="search-result-wrapper">
      <div class="search-result-list">
        <div v-for="item in searchResult" :key="item.renderKey">
          <div class="result-title" v-if="item.title == 'friends'">
            {{ t('friendText') }}
          </div>
          <div class="result-title" v-else-if="item.title == 'groups'">
            {{ t('teamText') }}
          </div>

          <div v-else>
            <SearchResultItem :item="item" />
          </div>
        </div>
      </div>
    </div>
    <div v-if="searchResult.length == 0 && searchText">
      <Empty :text="t('searchResultNullText')" />
    </div>
  </div>
</template>

<script lang="ts" setup>
/** 会话列表搜索页 */

import { autorun } from 'mobx'
import { ref, onUnmounted, computed, onMounted } from 'vue'
import { t } from '../../../utils/i18n'
import NavBar from '../../../components/NavBar.vue'
import Icon from '../../../components/Icon.vue'
import SearchResultItem from './search-result-item.vue'
import Empty from '../../../components/Empty.vue'
import { isDiscussionFunc } from '../../../utils'
import { V2NIMTeam } from 'nim-web-sdk-ng/dist/esm/nim/src/V2NIMTeamService'
import DefaultHeader from "@/components/defaultHeader.vue";
import SearchInput from "@/components/search-input.vue";

const inputFocus = ref(false)

/** 搜索框输入内容 */
const searchText = ref('')

/** 搜索列表 */
const searchList = ref<{ id: string; list: any }[]>([])

/** 搜索列表 */
const searchListWatch = autorun(() => {

})


function search(value){
  const friends =
      uni.$UIKitStore.uiStore.friends
          .filter(
              (item) =>
                  !uni.$UIKitStore.relationStore.blacklist.includes(item.accountId)
          )
          .map((item) => {
            const user = uni.$UIKitStore.userStore.users.get(item.accountId) || {
              accountId: '',
              name: '',
              createTime: Date.now(),
            }

            return {
              ...item,
              ...user,
            }
          }) || []
  const teamList =
      uni.$UIKitStore.uiStore.teamList.filter((team:V2NIMTeam) => {
        return team.teamId.indexOf(value)>-1 || team.name.indexOf(value)>-1 || team.ownerAccountId.indexOf(value)>-1

      }) || []



  searchList.value = [
    {
      id: 'friends',
      list: friends,
    },
    {
      id: 'groups',
      list: teamList,
    },

  ].filter((item) => !!item.list.length)

  console.log(searchList.value)
  searchResult.value=getResult(value)
}

const searchResult=ref(<{ title?: string; renderKey: string }>[])
function getResult(value){
  const res: { title?: string; renderKey: string }[] = []
  const finalSections = searchList.value
      .map((item) => {
        if (item.id === 'friends') {
          return {
            ...item,
            list: item.list?.filter((item: any) => {
              return (
                  item.alias?.includes(value) ||
                  item.name?.includes(value) ||
                  item.accountId?.includes(value)
              )
            }),
          }
        }

        if (item.id === 'groups') {
          return {
            ...item,
            list: item.list?.filter((item: V2NIMTeam) => {
              return (item.name || item.teamId).includes(value)
            }),
          }
        }

        if (item.id === 'discussions') {
          return {
            ...item,
            list: item.list?.filter((item: V2NIMTeam) => {
              return (item.name || item.teamId).includes(value)
            }),
          }
        }

        return { ...item }
      })
      .filter((item) => !!item.list?.length)





  finalSections.forEach((item) => {

    if (item.id === 'friends') {
      res.push({
        title: 'friends',
        renderKey: 'friends',
      })
      item.list.forEach((item: any) => {
        res.push({
          ...item,
          renderKey: item.accountId,
        })
      })
    } else if (item.id === 'groups') {
      res.push({
        title: 'groups',
        renderKey: 'groups',
      })
      item.list.forEach((item: V2NIMTeam) => {
        res.push({
          ...item,
          renderKey: item.teamId,
        })
      })
    }
  })
  return res;
}

// /** 搜索结果 */
// const searchResult = computed(() => {
//   const res: { title?: string; renderKey: string }[] = []
//   if (searchText.value) {
//     const finalSections = searchList.value
//       .map((item) => {
//         if (item.id === 'friends') {
//           return {
//             ...item,
//             list: item.list?.filter((item: any) => {
//               return (
//                 item.alias?.includes(searchText.value) ||
//                 item.name?.includes(searchText.value) ||
//                 item.accountId?.includes(searchText.value)
//               )
//             }),
//           }
//         }
//
//         if (item.id === 'groups') {
//           return {
//             ...item,
//             list: item.list?.filter((item: V2NIMTeam) => {
//               return (item.name || item.teamId).includes(searchText.value)
//             }),
//           }
//         }
//
//         if (item.id === 'discussions') {
//           return {
//             ...item,
//             list: item.list?.filter((item: V2NIMTeam) => {
//               return (item.name || item.teamId).includes(searchText.value)
//             }),
//           }
//         }
//
//         return { ...item }
//       })
//       .filter((item) => !!item.list?.length)
//
//
//
//
//
//     finalSections.forEach((item) => {
//       console.log(item);
//       console.log("item====");
//       if (item.id === 'friends') {
//         res.push({
//           title: 'friends',
//           renderKey: 'friends',
//         })
//         item.list.forEach((item: any) => {
//           res.push({
//             ...item,
//             renderKey: item.accountId,
//           })
//         })
//       } else if (item.id === 'groups') {
//         res.push({
//           title: 'groups',
//           renderKey: 'groups',
//         })
//         item.list.forEach((item: V2NIMTeam) => {
//           res.push({
//             ...item,
//             renderKey: item.teamId,
//           })
//         })
//       } else if (item.id === 'discussions') {
//         res.push({
//           title: 'discussions',
//           renderKey: 'discussions',
//         })
//         item.list.forEach((item: V2NIMTeam) => {
//           res.push({
//             ...item,
//             renderKey: item.teamId,
//           })
//         })
//       }
//     })
//   }
//   return res
// })

const onInputBlur = () => {
  inputFocus.value = false
}

const onInputFocus = () => {
  inputFocus.value = true
}

const onInput = (value:string) => {

  searchText.value = value
  if(value.length==0) searchResult.value=[];
}

const clearInput = () => {
  inputFocus.value = true
  searchText.value = ''
}

onMounted(() => {
  inputFocus.value = true
})

onUnmounted(() => {
  // 移除监听
  searchListWatch()
})
</script>

<style lang="scss" scoped>
$primary-color: #337eff;
$error-color: #f56c6c;

.search-wrapper {
  padding: 8px 10px;
}

.input-wrapper {
  height: 40px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background: #f3f5f7;
  border-radius: 5px;
  padding: 8px 10px;
}

.search-icon-wrapper {
  margin-right: 5px;
  display: flex;
  align-items: center;
}
.form-input-item {
  border-bottom: 1px solid #dcdfe5;
  padding: 10px 10px 5px 0px;
  display: flex;
  height: 44px;
  align-items: center;

  &.focus {
    border-color: $primary-color;
  }

  &.error {
    border-color: $error-color;
  }
}

.result-title {
  height: 30px;
  color: #c0c0c1;
  font-size: 14px;
  border-bottom: 1px solid #c0c0c1;
  margin-top: 16px;
}

.input {
  flex: 1;
  height: 30px;
  border: none;
  outline: none;
}
.clear-icon {
  width: 40px;
  text-align: right;
}

.search-result-wrapper {
  padding: 0 10px;
}
</style>
