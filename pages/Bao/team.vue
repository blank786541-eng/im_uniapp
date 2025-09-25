<script setup lang="ts">

import BaoHeader from "@/components/bao-header.vue";
import AssetsImage from "@/components/AssetsImage.vue";
import {onMounted, ref} from "vue";
import {httpRequest} from "@/utils/request";

const items = [
  {
    number: 58,
    level: "初级",
    mana: '保险销售员',
    price: "1080"
  }, {
    number: 128,
    level: "中级",
    mana: '保险销售员',
    price: "1080"
  }, {
    number: 388,
    level: "高级",
    mana: '保险销售员',
    price: "1080"
  }, {
    number: 799,
    level: "金牌",
    mana: '保险销售员',
    price: "1080"
  },
]
const resData = ref({})
const userInfo = uni.$UIKitStore.userStore.myUserInfo;
onMounted(() => {

  httpRequest({
    url: `im/api/getUserTeamAndPosition?account=${userInfo.accountId}`,
    method: "get",
  }).then((res) => {
    console.log(res)
    resData.value = res;
    if (!resData.value.insurancePosition) {
      resData.value.insurancePosition = [];
    }
    if (!resData.value.subordinateInformation) {
      resData.value.subordinateInformation = [];
    }
  })
})
</script>

<template>
  <div class="bao-container">
    <bao-header label="团队"></bao-header>
    <div class="content">
      <div class="team-header flex-box">
        <div class="header-item">
          <div>
            <span class="number">{{ resData.subordinateNumber }}</span>
            <span class="number" style="font-size: 14px">人</span>
          </div>
          <div style="margin-top: 12px;">
            我的下级人数
          </div>
        </div>
        <div class="vLine"></div>
        <div class="header-item">
          <div>
            <span class="number">{{ resData.insureNumber }}</span>
            <span class="number" style="font-size: 14px">人</span>
          </div>
          <div style="margin-top: 12px;">
            已投保人数
          </div>
        </div>
      </div>
      <div class="team-header">
        <div class="flex-box flex-space-between" style="width: 100%;">
          <span class="title">我的职位</span>
          <span class="text">{{ resData.position }}</span>
        </div>
        <div class="notice">我的工资：每月{{ resData.salary }}元</div>
        <div class="flex-box" style="margin-top: 10px">
          <div v-for="(item, index) in resData.insurancePosition" :key="index"
               style="flex:1;align-items: center;display: flex">
            <div class="header-item">
              <div>
                <span class="number" style="font-size: 22px">{{ item.numberPeople }}</span>
                <span class="number" style="font-size: 14px">人</span>
              </div>
              <div style="margin-top: 4px;" class="level">
                {{ item.rank }}
              </div>
              <div style="margin-top: 2px;font-size: 12px;font-weight: normal" class="level">
                {{ item.position }}
              </div>
              <div class="price">
                {{ item.salary }}元
              </div>

            </div>
            <div class="vLine" v-if="index<items.length-1"></div>
          </div>

        </div>
      </div>
      <div class="team-header">
        <div class="flex-box flex-space-between" style="width: 100%;">
          <span class="title">我的下级</span>
          <span class="text">{{ resData.subordinateInformation.length }}人</span>
        </div>
        <div class="list-header">
          <div style="flex:1;text-align: center">姓名</div>
          <div style="flex:1;text-align: center">电话号码</div>
          <div style="flex:1;text-align: center">实名/激活</div>
        </div>

        <div class="list-item" v-for="item in resData.subordinateInformation">
          <div style="flex:1;text-align: center;color: #000">{{ item.name }}</div>
          <div style="flex:1;text-align: center;color: #000">{{ item.phone }}</div>
          <div style="flex:1;text-align: center;color: #63B22A" v-if="item.isActivate">已激活</div>
          <div style="flex:1;text-align: center;color: red" v-else>{{ item.kycStatus==2?"未实名":item.kycStatus==1?"已认证":"认证中" }}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.bao-container {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("/static/baobg.png");
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.content {
  flex: 1;
  position: relative;
  z-index: 10;
  background: url("/static/round.png") no-repeat right top;
  background-size: 100px 273px;
  padding: 0 16px;
}

.team-header {
  margin-top: 12px;
  backdrop-filter: blur(13.100000381469727px);

  box-shadow: 0px 2px 8.2px 0px #D2B29A3D;

  border-radius: 12px;
  background: #FFFFFFCC;
  padding: 15px 12px;
  position: relative;
  z-index: 100;

}

.header-item {
  flex: 1;

  font-weight: 400;
  font-style: Regular;
  font-size: 12px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  color: #ACACAC;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.vLine {
  height: 40px;
  border-right: 0.5px solid #E8CFAE
}

.number {
  font-family: DIN;
  font-weight: 500;
  font-style: Medium;
  font-size: 28px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  color: #333333;

}

.title {
  font-family: PingFang SC;
  font-weight: 600;
  font-style: Semibold;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 22px;
  letter-spacing: 0%;
  text-align: center;
  color: #3E280B;
}

.text {
  font-family: PingFang SC;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #E17242;

}

.notice {
  font-family: PingFang SC;
  font-weight: 400;
  font-style: Regular;
  font-size: 10px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #938D8B;
  text-align: right;
}

.level {
  font-family: PingFang SC;
  font-weight: 600;
  font-style: Semibold;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #AB7E67;

}

.price {
  margin-top: 6px;
  border-radius: 27px;
  color: #FFF8F8;
  background-color: #C6A06F;
  padding: 4px 10px;
}

.list-header {
  font-family: PingFang SC;
  font-weight: 500;
  font-style: Medium;
  font-size: 12px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #ACACAC;
  display: flex;
  margin-top: 12px;
}

.list-item {
  font-family: PingFang SC;
  font-weight: 500;
  font-style: Medium;
  font-size: 12px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  text-align: center;
  color: #ACACAC;
  display: flex;
  margin-top: 12px;
  padding: 12px 0;
  border-bottom: 0.5px solid #E7E7E7;
}
</style>
