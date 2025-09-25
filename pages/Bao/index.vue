<script setup lang="ts">

import DefaultHeader from "@/components/defaultHeader.vue";
import AssetsImage from "@/components/AssetsImage.vue";
import {customNavigateTo} from "@/utils/customNavigate";
import {onMounted, ref} from "vue";
import {httpRequest} from "@/utils/request";
import {onShow} from '@dcloudio/uni-app'

const resData = ref([]);
onShow((options) => {

  const id=uni.$UIKitStore.userStore.myUserInfo.accountId;

  httpRequest({
    url: `im/api/getProduct?account=${id}`,
    method: "get",
    headers: {}
  }).then(res => {
    console.log(res);
    resData.value = res;
  })
})

function toDetail(id: number, status) {
  if (status == 'SOLDOUT') return;
  customNavigateTo({
    url: `/pages/Bao/detail?id=${id}`,
  })
}


</script>

<template>
  <div class="bao-container">
    <default-header title="国宝通" background-color="transparent" :show-back="false"></default-header>
    <div class="bao-content" v-for="(item,index) in resData">
      <div class="flex-box flex-center">
        <div style="flex:1">
          <div class="flex-box flex-center" style="justify-content: flex-start">
            <span class="bao-title">{{ item.productName }}</span>
            <AssetsImage path="/static/tuijian.png" width="25px" height="25px"></AssetsImage>
          </div>
          <div class="bao1">{{ item.description }}</div>
          <div>
            <AssetsImage path="/static/jiankang.png" width="125px" height="18px"></AssetsImage>
          </div>
        </div>
        <div class="watch-btn-disabled" v-if="item.isBuy">
          已投保
        </div>
        <div v-else :class="item.status!='SOLDOUT'?'watch-btn':'watch-btn-disabled'"
             @tap="toDetail(item.id,item.status)">
          点击查看
        </div>
      </div>
      <div>
        <div class="text-item" v-for="text in item.productFeature">
          {{ text.detail }}
        </div>

      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.bao-container {
  height: 100%;
  width: 100%;
  padding: 20px 14px 0;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("/static/baobg.png");
  box-sizing: border-box;
  overflow-y: scroll;
}

.bao-content {
  background-color: #fff;
  border-radius: 12px;
  padding: 12px;
  box-sizing: border-box;
  margin-bottom: 12px;
}

.bao-title {
  font-weight: 600;
  font-style: Semibold;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  color: #FF5D18;
  margin-right: 7px;
}

.bao-text {
  font-family: PingFang SC;
  font-weight: 400;
  font-size: 11px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;

  color: #FF5D18;
}

.watch-btn {
  width: 80px;
  height: 32px;
  border-radius: 8px;
  background-color: #D39443;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #fff;

}

.watch-btn-disabled {
  width: 80px;
  height: 32px;
  border-radius: 8px;
  background: #C7BDB1;

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #fff;

}

.bao1 {
  font-family: PingFang SC;
  font-weight: 400;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 21px;
  letter-spacing: 0px;
  color: #1B1B1B;
  margin: 7px 0;

}

.text-item {
  background-color: #F9F9F9;
  padding: 12px;
  border-radius: 8px;
  font-weight: 400;
  font-size: 12px;
  leading-trim: NONE;
  line-height: 17px;
  letter-spacing: 0px;
  color: #818181;
  margin-top: 6px;
}
</style>
