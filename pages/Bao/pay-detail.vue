<script setup lang="ts">

import BaoHeader from "@/components/bao-header.vue";
import FormInput from "@/components/FormInput.vue";
import {customNavigateTo} from "@/utils/customNavigate";
import {ref} from "vue";
import {onLoad} from '@dcloudio/uni-app'
import GscosmosDateSelect
  from "@/uni_modules/gscosmos-date-select/components/gscosmos-date-select/gscosmos-date-select.vue";
import {httpRequest} from "@/utils/request";

const params = ref({
  gender: "M"
});

const stateMap = ref({

  alreadyReceived:
      0,
  amountClaimed:
      0,
  kycStatus:
      2,
})
const query = ref({
  birthDate: "",
  account: "",
  productId: "",
  name: "",
  gender: "M",
  occupation: "",
  idCard: "",
  phone: "",
});
const date = ref(new Date());
onLoad((options) => {
  params.value = options
  params.value.gender = "M"
  httpRequest({
    method: "GET",
    url: "im/api/getUserByAccount?account=" + uni.$UIKitStore.userStore.myUserInfo.accountId,
  }).then(res => {
    stateMap.value = res;
  })
})
const dateSelectVisiable = ref(false);

function toCertification() {
  console.log(stateMap.value);
  if(stateMap.value.kycStatus==2){
    customNavigateTo({
      url: `/pages/Bao/certification?id=${params.value.id}`,
    })
  }

}

const items = [
  {
    value: "M",
    name: "男"
  },
  {
    value: "F",
    name: "女"
  },
  // {
  //   value: "OTHER",
  //   name: "保密"
  // }
]

function onChange(v) {
  console.log(v)
  params.value.gender = v.detail.value;
  query.value.gender = v.detail.value;
}

function selectDate() {
  dateSelectVisiable.value = true
}

function close() {
  dateSelectVisiable.value = false
}

function getDate(v) {
  query.value.birthDate = v;
  date.value = v;
  close();
}

function submit() {
  let noneKey = null;
  query.value.account = uni.$UIKitStore.userStore.myUserInfo.accountId;
  query.value.productId = params.value.id;
  console.log(query.value);
  for (let queryKey in query.value) {
    if (!query.value[queryKey] || query.value[queryKey].toString().length == 0) {
      noneKey = queryKey;
      break;
    }
  }
  console.log(noneKey);
  if (noneKey) {
    let msg = ''
    switch (noneKey) {
      case 'idCard':
        msg = "身份证不能为空"
        break;
      case 'phone':
        msg = "手机号不能为空"
        break;
      case 'birthDate':
        msg = "请选择生日"
        break;
      case 'name':
        msg = "请输入名称"
        break;
      case 'occupation':
        msg = "请输入职业"
        break;
    }
    uni.showToast({
      title: msg,
      icon: "none"
    })
  } else {

    httpRequest({
      url: 'userPolicy/purchaseApplication',
      data: query.value,
      method: 'post',
    }).then(res => {
      console.log(res)
      uni.showToast({
        title:res,
        icon:"none",
        duration:1000,
        success:()=>{
          uni.switchTab({
            url:'/pages/Bao/index',
          })
        }
      })
    })
  }

}
</script>

<template>
  <div class="bao-container">
    <bao-header label="国保通特权医疗保险I" label-weight="400"></bao-header>
    <div class="content">
      <div class="form-box">
        <div class="row flex-box flex-space-between flex-y-center">
          <span>姓名</span>
          <FormInput class="input" placeholder="请输入姓名"
                     v-model="query.name"
                     :allow-clear="false"></FormInput>
        </div>
        <div class="row flex-box flex-space-between flex-y-center">
          <span>性别</span>
          <radio-group @change="onChange" class="flex-box">
            <label class="flex-box" v-for="(item, index) in items" :key="item.value" style="margin-right: 10px">
              <view>
                <radio :value="item.value" :checked="item.value === params.gender"/>
              </view>
              <view>{{ item.name }}</view>
            </label>
          </radio-group>
        </div>
        <div class="row flex-box flex-space-between flex-y-center" @click="selectDate">
          <span>出生日期</span>
          <span>{{ query.birthDate || '请选择' }}</span>
        </div>
        <div class="row flex-box flex-space-between flex-y-center">
          <span>工作</span>
          <FormInput class="input"
                     v-model="query.occupation"
                     placeholder="请输入工作" :allow-clear="false"></FormInput>
        </div>
        <div class="row flex-box flex-space-between flex-y-center">
          <span>身份证</span>
          <FormInput class="input"
                     v-model="query.idCard"
                     placeholder="请输入身份证" :allow-clear="false"></FormInput>
        </div>
        <div class="row flex-box flex-space-between flex-y-center" style="border:none">
          <span>手机号</span>
          <FormInput class="input"
                     v-model="query.phone"
                     placeholder="请输入手机号" :allow-clear="false"></FormInput>
        </div>
      </div>
<!--      0 认证中  1 已认证   2 未实名-->
      <div class="watch-btn" @tap="toCertification">{{stateMap.kycStatus==2?'上传证件实名认证':stateMap.kycStatus==1?"已认证":"认证中"}}</div>
      <div class="form-text">
        <div style="font-weight: 600;margin-bottom: 6px">说明</div>
        <div>
          产品购买后个人信息资料将自动提交至承保机构人工审核，请勿提交虚假信息，否则将审核失败，通常24小时内审核完毕，承保机构将为您提供12小时在线咨询客服，如需咨询有关保险问题及相关问题请点击下方在线客服咨询，客服在线时间上午9:00-晚上21:00。
        </div>
      </div>
      <div class="watch-btn" @click="submit">立即缴费投保</div>
      <div class="watch-btn" style="background-color: transparent;color:#DBB077;border: 2px solid #DBB077
">国保通在线客服
      </div>
      <div class="form-text">
        <div style="font-weight: 600;margin-bottom: 6px">理赔流程</div>
        <div>
          如何办理理赔，为确保您的权益，在申请理赔之前请仔细阅读以上信息，如不幸发生保险事故，请尽早联系国宝通在线客服完成理赔报案。
        </div>
      </div>
      <div style="height: 40px"></div>
    </div>
    <view>
      <gscosmos-date-select :modelValue="dateSelectVisiable" :date="query.birthDate" @confirm="getDate"
                            @close="close"></gscosmos-date-select>
    </view>
  </div>
</template>

<style scoped lang="scss">
.bao-container {
  height: 100%;
  width: 100%;
  background-repeat: repeat;
  background-size: 100% 100%;
  background-image: url("/static/baobg.png");
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.content {
  padding: 10px 12px;
}

.form-box {

  border-radius: 8px;
  padding-top: 6px;
  padding-right: 12px;
  padding-bottom: 6px;
  padding-left: 12px;
  background-color: #fff;
}

.input {
  text-align: right;
  padding: 0 !important;
}

.row {
  border-bottom: 1px solid #EEEEEE;
  height: 44px;
}

.row span {
  font-family: PingFang SC;
  font-weight: 400;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  color: #333;
}

.watch-btn {
  border-radius: 8px;
  background: #DBB077;

  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #fff;
  padding: 14px 0;
  margin-top: 18px;
  margin-bottom: 25px;
}

.form-text {
  font-family: PingFang SC;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 22px;
  letter-spacing: 0px;

  color: #000;
}
</style>
