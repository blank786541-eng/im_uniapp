<script setup lang="ts">

import BaoHeader from "@/components/bao-header.vue";
import AssetsImage from "@/components/AssetsImage.vue";
import {onMounted} from "vue";
import {httpRequest} from "@/utils/request";

import {ref} from "vue";

const items = ref([

])

onMounted(() => {
  const userInfo = uni.$UIKitStore.userStore.myUserInfo;
  httpRequest({
    url: `userPolicy/getPolicyById?account=${userInfo.accountId}`,
    method: "get",
  }).then(res => {
    items.value = res || [];
  })
})

const states = {
  PENDING: {
    name: "待生效"
  }, EXPIRED: {
    name: "已过期"
  }, CANCELLED: {
    name: "已取消"
  }, ACTIVE: {
    name: "生效中"
  },
}
</script>

<template>
  <div class="bao-container">
    <bao-header label="我的保单"></bao-header>
    <div class="flex-center content" v-if="items.length == 0">
      暂无数据
    </div>
    <div class="content" v-else>

<!--      <scroll-view scroll-y="true" class="scroll-list"  :scroll-top="9999">-->

<!--      -->
<!--      </scroll-view>-->
      <div class="bao-item" v-for="(item,index) in items">
        <div class="flex-box flex-y-center">
          <AssetsImage path="/static/guo.png" width="22px" height="20px"></AssetsImage>
          <div class="title">{{ item.productName }}</div>
          <div style="flex:1"></div>
          <div :class="item.policyStatus=='ACTIVE'?'status':'status-diabled'">
                        {{states[item.policyStatus].name}}
          </div>
        </div>
        <div style="margin-top: 12px;" >
          <span class="sub-title">被保障人:</span>
          <span class="sub-text">{{ item.name }}</span>

        </div>
        <div>
          <span class="sub-title" >性别:</span>
          <span class="sub-text">{{ item.gender=="M"?'男':'女' }}</span>
        </div>  <div>
        <span class="sub-title" >手机号:</span>
        <span class="sub-text">{{ item.phone}}</span>
      </div>
        <div >
          <span class="sub-title">保额:</span>
          <span class="sub-text">{{ item.coverageAmount /10000}}万</span>
        </div>
        <div>
          <span class="sub-title">有效期:</span>
          <span class="sub-text" v-if="item.isLifelong==1">{{item.startDate}}至{{ item.endDate }}</span>
          <span class="sub-text" v-else>终生</span>
        </div>
        <div>
          <span class="sub-title">医疗保险金:</span>
          <span class="sub-text" v-if="item.isLifelong==1">{{item.numberDays}}天</span>
          <span class="sub-text" v-else>终生</span>
        </div>
        <div>
          <span class="sub-title">保单号:</span>
          <span class="sub-text">{{ item.policyNumber }}</span>
        </div>
        <div class="item-footer" v-if="item.status==1">
          <div class="footer-btn">
            电子保单
          </div>
          <div class="footer-btn" style="margin-left: 6px;">
            申请理赔
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
page{
  overflow: hidden;
}


.scroll-list {
  height: 100%;
  box-sizing: border-box;
  padding-bottom: 1px;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
}
.bao-container {
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("/static/baobg.png");
  box-sizing: border-box;
  //display: flex;
  //flex-direction: column;
  overflow: hidden;
}

.content {
  overflow-y: scroll;
  position: relative;
  height: 100%;
  z-index: 10;
  background: url("/static/round.png") no-repeat right top;
  background-size: 100px 273px;
  padding: 0 16px;

}

.bao-item {
  margin-top: 12px;
  border-radius: 12px;
  padding: 12px;
  background: #FFFFFF;
  position: relative;
  z-index: 100;
}

.title {
  font-family: PingFang SC;
  font-weight: 500;
  font-style: Medium;
  font-size: 16px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  color: #513106;
  margin-left: 6px;

}

.status {

  border-radius: 4px;
  padding: 4px 10px;

  border-width: 1px;
  border: 1px solid #77DB83;
  font-weight: 400;
  font-style: Regular;
  font-size: 12px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  color: #77DB83

}

.status-diabled {

  border-radius: 4px;
  padding: 4px 10px;

  border-width: 1px;
  border: 1px solid #CCCCCC;
  font-weight: 400;
  font-style: Regular;
  font-size: 12px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  color: #CCCCCC

}

.sub-title {
  font-weight: 400;
  font-style: Regular;
  font-size: 12px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  color: #9F8D86;
  display: inline-block;
  width: 70px;
}

.sub-text {
  font-weight: 400;
  font-style: Regular;
  font-size: 12px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  color: #000000;

}

.item-footer {
  margin-top: 12px;
  display: flex;
  justify-content: flex-end;
}

.footer-btn {

  border-radius: 6px;
  padding: 4px 10px;

  border-width: 1px;
  border: 1px solid #F6ECE0;

  font-size: 12px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0px;
  color: #DBB077;

}
</style>
