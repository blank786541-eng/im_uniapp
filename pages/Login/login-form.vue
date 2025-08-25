<template>
  <div>
    <div class="navigation-bar"></div>
    <div class="container-box">
      <div class="flex-center">
        <image src="/pages/Login/static/logo.png" class="logo"></image>
      </div>
      <div class="form-login">
        <label-input icon="/pages/Login/static/account.png"
                     :value="loginForm.account"
                     label="账号" placeholder="请输入账号"
                     :rule="mobileInputRule"
                     labelKey="account"
                     :error-text="accEtx"
                     @update-model-value="getValue"
        ></label-input>
        <div style="margin-top: 18px">
          <label-input icon="/pages/Login/static/password.png"
                       :value="loginForm.token"
                       label="密码" placeholder="请输入密码"
                       :error-text="pwdEtx"
                       type="password"
                       labelKey="token"
                       @update-model-value="getValue"
                       :rule="smsCodeInputRule"></label-input>
        </div>
      </div>

<!--      <div class="flex-box flex-space-between" style="margin-top: 9px;">-->
<!--        <FormRadio label="记住密码" :onchange="radioChange"></FormRadio>-->
<!--        <div>-->
<!--          <span class="forget">忘记密码?</span>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <button
        :class="privateChecked ? 'login-btn-disabled' : 'login-btn'"
        @tap="submitLoginForm"
    >
      {{ i18n.loginBtnTitle }}
    </button>
    <div class="primary-text" @click="customRedirectTo({url:'/pages/Login/register'})">
      没有账号？立即注册
    </div>
  </div>
</template>

<script lang="ts" setup>
// @ts-ignore
import {computed, reactive, ref} from 'vue'
import i18n from './i18n/zh-cn'

import LabelInput from "@/pages/Login/components/label-input.vue";
import FormRadio from "@/pages/Login/components/form-radio.vue";
import {customRedirectTo} from "@/utils/customNavigate";
import {initNim} from "@/utils/imUtils";
import {validValue} from "@/utils/utils";
import {httpRequest} from "@/utils/request";

const mobileInputRule = {
  reg: /^[a-zA-Z0-9]{6,}$/,
  message: i18n.accountError,
  trigger: 'blur',
}
const smsCodeInputRule = {
  reg: /^.{6,}$/,
  message: i18n.pwdError,
  trigger: 'blur',
}


const privateChecked = ref(true)
const accEtx = ref("");
const pwdEtx = ref("");
// const imOptions = {
//   appkey: config.appKey, // 请填写你的appkey
//   account: "1888999", // 请填写你的account
//   token: "123456", // 请填写你的token
// };
const loginForm = reactive({
  account: '',
  token: '',
  appkey: "7767647313060a0e18b3197510aed6ad",
})




// 登录
async function submitLoginForm() {
  if (privateChecked.value) return;

  await httpRequest({
    url:"im/api/blacklist",
    method:"GET",
    data:{
      account:loginForm.account,
    }
  })
  initNim(loginForm)
}


function radioChange(v: boolean) {
  uni.setStorageSync("autoLogin", v);
}
function getValue(v,key){
  loginForm[key] = v;

   privateChecked.value = !(loginForm.token.length>=6 && loginForm.account.length>=6);
  console.log( privateChecked.value);
}
</script>

<style lang="scss" scoped>
$primary-color: $uni-color-primary;

.navigation-bar {
  height: 80px;
}


.login-btn {
  height: 50px;
  width: 90%;
  background: $uni-color-primary;
  border-radius: 8px;
  color: #fff;
  margin-top: 78px;
}

.login-btn-disabled {
  background: $uni-color-primary;
  height: 50px;
  width: 90%;
  border-radius: 8px;
  color: #fff;
  margin-top: 78px;
}

.logo {
  width: 128px;
  height: 128px;
}

.form-login {
  margin-top: 47px;

}

.container-box {
  padding: 0 32px;
}

.login-account {
  width: 22px;
  height: 22px;
  background-color: $uni-color-primary;
  border-radius: 6px;
  margin-right: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  vertical-align: middle;

  image {
    width: 12px;
    height: 13px;
  }
}

.forget {
  font-family: PingFang SC;
  font-weight: 400;
  font-size: 12px;
  line-height: 20px;
  vertical-align: middle;
  color: #0067FF
}

.error-tips {
  color: #f56c6c;
  font-size: 12px;
  margin-top: 5px;
}
</style>
