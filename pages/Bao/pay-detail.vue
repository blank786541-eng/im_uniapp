<script setup lang="ts">

import BaoHeader from "@/components/bao-header.vue";
import FormInput from "@/components/FormInput.vue";
import {customNavigateTo} from "@/utils/customNavigate";
import {getCurrentInstance, ref} from "vue";
import {onLoad} from '@dcloudio/uni-app'
import GscosmosDateSelect
  from "@/uni_modules/gscosmos-date-select/components/gscosmos-date-select/gscosmos-date-select.vue";
import {httpRequest} from "@/utils/request";
import UniPopup from "@/components/uni-components/uni-popup/components/uni-popup/uni-popup.vue";
import MentionMemberList from "@/pages/Chat/message/mention-member-list.vue";
import AssetsImage from "@/components/AssetsImage.vue";
import FormRadio from "@/pages/Login/components/form-radio.vue";
import i18n from "@/pages/Login/i18n/zh-cn";

const params = ref({
  gender: "M",
  price: 0
});
const ctx = getCurrentInstance()
const popupRef = ref(null)
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
  payProductId:8088
});
const selectIndex = ref(1)
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
  httpRequest({
    url: 'kyc/getByAccount',
    method: "GET",
    data: {
      account:uni.$UIKitStore.userStore.myUserInfo.accountId
    }
  }).then((res) => {
    query.value.name=res.name;
    query.value.idCard=res.idCard;
    isEdit.value=idCardRule.reg.test(res.idCard);
    console.log(isEdit.value,'isEdit====')
  });
})
const dateSelectVisiable = ref(false);

function toCertification() {
  console.log(stateMap.value);
  if (stateMap.value.kycStatus == 2) {
    customNavigateTo({
      url: `/pages/Bao/certification?id=${params.value.id}`,
    })
  }

}
const idCardRule = {
  reg: /^[a-zA-Z0-9]{18}$/,
  message: "请输入18位数字加字母组合",
  trigger: 'blur',
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
const isEdit = ref(false)
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

function pay() {

  ctx.refs.popupRef.open('bottom')
}

function submit() {
  let noneKey = null;

  query.value.account = uni.$UIKitStore.userStore.myUserInfo.accountId;
  query.value.productId = params.value.id;
  query.value.payProductId=selectIndex.value==0?8001:8088
  for (let queryKey in query.value) {
    if (!query.value[queryKey] || query.value[queryKey].toString().length == 0) {
      noneKey = queryKey;
      break;
    }
  }

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
      console.log(res,'res======')
      if(res==null){
        uni.showToast({
          title: res,
          icon: "none",
          duration: 1000,
          success: () => {
            uni.switchTab({
              url: '/pages/Bao/index',
            })
          }
        })
      }else{
        customNavigateTo({
          url: `/pages/Other/webview?url=${res}`
        })
      }
    })
  }

}

function changeSelect(index){
  selectIndex.value = index;
}
function  toOpen(){
  customNavigateTo({
    url: `/pages/Other/webview?url=${stateMap.value.customerServiceUrl}`
  })
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
                      :disabled="isEdit"
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
                     maxlength="18"
                     :disabled="isEdit"
                     :rule="idCardRule"
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
      <div class="watch-btn" @tap="toCertification">
        {{ stateMap.kycStatus == 2 ? '上传证件实名认证' : stateMap.kycStatus == 1 ? "已认证" : "认证中" }}
      </div>
      <div class="form-text">
        <div style="font-weight: 600;margin-bottom: 6px">说明</div>
        <div>
          产品购买后个人信息资料将自动提交至承保机构人工审核，请勿提交虚假信息，否则将审核失败，通常24小时内审核完毕，承保机构将为您提供12小时在线咨询客服，如需咨询有关保险问题及相关问题请点击下方在线客服咨询，客服在线时间上午9:00-晚上21:00。
        </div>
      </div>
      <div class="watch-btn" @click="pay">立即缴费投保</div>
      <div class="watch-btn" style="background-color: transparent;color:#DBB077;border: 2px solid #DBB077
" @tap="toOpen">国保通在线客服
      </div>
      <div class="form-text">
        <div style="font-weight: 600;margin-bottom: 6px">理赔流程</div>
        <div>
          如何办理理赔，为确保您的权益，在申请理赔之前请仔细阅读以上信息，如不幸发生保险事故，请尽早联系国保通在线客服完成理赔报案。
        </div>
      </div>
      <div style="height: 40px"></div>
    </div>
    <view>
      <gscosmos-date-select :modelValue="dateSelectVisiable" :date="query.birthDate" @confirm="getDate"
                            @close="close"></gscosmos-date-select>
    </view>
    <UniPopup
        ref="popupRef"
        background-color="#ffffff"
        type="bottom"
        borderRadius="10px 10px 10px 10px"
        mask-background-color="rgba(0,0,0,0.4)"

    >
      <div style="padding: 16px">
        <div class="flex-center" style="margin-bottom: 30px">
          <span class="price">{{ params.price }}</span>
          <span class="unit">元</span>
        </div>
        <div class="flex-center">
<!--          <div class="pay-item" :style="{-->
<!--            backgroundColor: selectIndex==0?'#FFF7EC':'#F3F3F3',-->
<!--            border:selectIndex==0?'1px solid #DBB077':'',-->
<!--          }" @click="changeSelect(0)">-->
<!--            <AssetsImage path="/static/weixin-pay.png" width="30px" height="30px"-->
<!--                         style="margin-right: 6px"></AssetsImage>-->
<!--            <span>微信支付</span>-->
<!--          </div>-->
          <div class="pay-item" :style="{
            backgroundColor: selectIndex==1?'#FFF7EC':'#F3F3F3',
              border:selectIndex==1?'1px solid #DBB077':'',
          }" @click="changeSelect(1)">
            <AssetsImage path="/static/ali-pay.png" width="30px" height="30px" style="margin-right: 6px"></AssetsImage>
            <span>支付宝支付</span>
          </div>
        </div>
        <div style="margin-top: 8px">
<!--          <FormRadio label="" :onchange="radioChange">-->
<!--            <div class="notice">-->
<!--             <span style="color: #000"> 我已认证阅读并确认 </span><span>《参保须知》</span> <span>《健康状态告知义务》</span> <span>《投保须知提示书》</span><span>《用户协议》</span><span>《授权声明》</span><span>《隐私政策》</span>-->
<!--            </div>-->
<!--          </FormRadio>-->
          <div class="notice">
            <span style="color: #000"> 我已认证阅读并确认 </span><span>《参保须知》</span> <span>《健康状态告知义务》</span> <span>《投保须知提示书》</span><span>《用户协议》</span><span>《授权声明》</span><span>《隐私政策》</span>
          </div>
        </div>
        <div class="watch-btn" @tap="submit">
            立即支付
        </div>
      </div>
    </UniPopup>
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

.pay-item {
  font-weight: 400;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 31px;
  border-radius: 7px;
}

.price {
  font-family: DIN Alternate;
  font-weight: 500;
  font-style: Medium;
  font-size: 34px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  color: #000;
}

.unit {
  font-family: DIN Alternate;
  font-weight: 500;
  font-style: Regular;
  font-size: 14px;
  leading-trim: NONE;
  line-height: 100%;
  letter-spacing: 0%;
  align-self: center;
  color: #000;
}
.notice{
  font-size: 12px;
  color:#2972F6;
}
</style>
