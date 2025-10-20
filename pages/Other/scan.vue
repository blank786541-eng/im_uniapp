<script lang="ts" setup>
import {getUniPlatform} from "@/utils";
import {onMounted, ref} from "vue";

import {onReady} from '@dcloudio/uni-app'
import Cshaptx4869Scancode
  from "@/uni_modules/cshaptx4869-scancode/components/cshaptx4869-scancode/cshaptx4869-scancode.vue";
import {getParamsValues} from "@/pages/Other/help/call";
import {V2NIMTeam} from "nim-web-sdk-ng/dist/esm/nim/src/V2NIMTeamService";
import geH5Scancode from "@/components/ge-h5-scancode/ge-h5-scancode.vue"
import {V2NIMConst} from "@/utils/nim";

onReady(() => {
  scanCode();
})
const h5ScanCodeRef = ref();

function scanCode() {
  // #ifdef H5
  // h5ScanCodeRef.value.open();
  // #endif
  // #ifndef H5
  // uni.scanCode({
  //   success: async (res) => {
  //     console.warn(res, 'scan result');
  //     if (res.result.indexOf("teamId") > -1) {
  //       const {teamId} = getParamsValues(res.result);
  //
  //
  //       const list: V2NIMTeam[] = await uni.$UIKitStore.teamStore.getJoinedTeamListActive()
  //
  //       let hasIn: boolean = list.some((item) => item.teamId == teamId);
  //       if (hasIn) {
  //         uni.showToast({
  //           icon: "none",
  //           title: "已在群组中",
  //         });
  //       } else {
  //         const team = await uni.$UIKitStore.teamStore.applyTeamActive(teamId)
  //         uni.showToast({
  //           icon: "none",
  //           title: team.name,
  //         });
  //       }
  //
  //     }
  //
  //
  //   },
  //   fail: (err) => {
  //     console.log("err", err);
  //   },
  // });
  // #endif
  h5ScanCodeRef.value.start({
    success: async (decodedText, decodedResult) => {
      console.warn(decodedText, decodedResult,'h5ScanCodeRef=====');
      const obj = getParamsValues(decodedText);
      if (decodedText.indexOf("teamId") > -1) {

        console.warn(obj, 'teamId=====');

        const list: V2NIMTeam[] = await uni.$UIKitStore.teamStore.getJoinedTeamListActive()

        let hasIn: boolean = list.some((item) => item.teamId == obj.teamId);
        if (hasIn) {
          uni.showToast({
            icon: "none",
            title: "已在群组中",
            duration: 1000,
            success: () => {
              uni.navigateBack();
            }
          });
        } else {
          const team = await uni.$UIKitStore.teamStore.applyTeamActive(obj.teamId)
          uni.showToast({
            icon: "none",
            title: "已申请加入群聊",
            duration: 1000,
            success: () => {
              uni.navigateBack();
            }
          });
        }

      }
      else if(decodedText.indexOf('addFriend') > -1) {
        let index=uni.$UIKitStore.uiStore.friends.findIndex(item=>obj.addFriend==item.accountId);
        if(index>-1){
          uni.showToast({
            icon: "none",
            title: "已是好友",
            duration: 1000,
            success: () => {
              uni.navigateBack();
            }
          });
        }else{
          await uni.$UIKitStore.friendStore.addFriendActive(obj.addFriend, {
            addMode: V2NIMConst.V2NIMFriendAddMode.V2NIM_FRIEND_MODE_TYPE_APPLY,
            postscript: '',
          })

          // 发送申请成功后解除黑名单
          await uni.$UIKitStore.relationStore.removeUserFromBlockListActive(obj.addFriend)
          uni.showToast({
            icon: "none",
            title: "已发送好友申请",
            duration: 1000,
            success: () => {
              uni.navigateBack();
            }
          });
        }
      }
    },
    fail: (err) => {
      console.log('err', err)
      uni.showToast({
        icon: "none",
        title: "扫描失败",
        success: () => {
          uni.navigateBack();
        }
      })
    },
  })
}

async function handleSuccess(res) {
  uni.showToast({
    icon: "none",
    title: res,
    duration: 1000,
  });
  if (res.result.indexOf("teamId") > -1) {
    const obj = getParamsValues(res.result);
    console.warn(obj, 'teamId=====');

    const list: V2NIMTeam[] = await uni.$UIKitStore.teamStore.getJoinedTeamListActive()

    let hasIn: boolean = list.some((item) => item.teamId == obj.teamId);
    if (hasIn) {
      uni.showToast({
        icon: "none",
        title: "已在群组中",
        duration: 1000,
        success: () => {
          uni.navigateBack();
        }
      });
    } else {
      const team = await uni.$UIKitStore.teamStore.applyTeamActive(obj.teamId)
      uni.showToast({
        icon: "none",
        title: "已申请加入群聊",
        duration: 1000,
        success: () => {
          uni.navigateBack();
        }
      });
    }

  }
}

function handleFail(err) {
  uni.showModal({
    title: err.errName,
    content: err.errMsg,
  });
}
</script>

<template>
  <div>
    <!--    <cshaptx4869-scancode-->
    <!--        ref="h5ScanCodeRef"-->
    <!--        @success="handleSuccess"-->
    <!--        @fail="handleFail"-->
    <!--    ></cshaptx4869-scancode>-->
    <geH5Scancode ref="h5ScanCodeRef"></geH5Scancode>
  </div>
</template>

<style scoped lang="scss">

</style>
