<template>
  <div class="container">
    <div class="container-box">
      <div class="flex-center">
        <image src="/static/logo.png" class="logo"></image>
      </div>
      <div class="form-login">
        <label-input icon="/static/account.png"
                     :value="loginForm.account"
                     label="账号" placeholder="请输入手机号"
                     :rule="mobileInputRule"
                     labelKey="account"
                     :error-text="accEtx"
                     @update-model-value="getValue"
        ></label-input>
        <div style="margin-top: 18px">
          <label-input icon="/static/password.png"
                       :value="loginForm.token"
                       label="密码" placeholder="请输入密码"
                       :error-text="pwdEtx"
                       type="password"
                       labelKey="token"
                       @update-model-value="getValue"
                       :rule="smsCodeInputRule"></label-input>
        </div>
        <div class="flex-box flex-space-between" style="margin-top: 9px;">
          <FormRadio label="记住密码" :onchange="radioChange"></FormRadio>
          <div>
            <span class="forget">忘记密码?</span>
          </div>
        </div>
      </div>



    </div>
    <button
        :class="privateChecked ? 'login-btn-disabled' : 'login-btn'"
        @tap="submitLoginForm"
    >
      {{ i18n.loginBtnTitle }}
    </button>
    <div class="register-text" @tap="customNavigateTo({url:'/pages/Login/register'})">
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
import {customNavigateTo, customRedirectTo} from "@/utils/customNavigate";
import {initNim} from "@/utils/imUtils";
import {validValue} from "@/utils/utils";
import {httpRequest} from "@/utils/request";
import AssetsImage from "@/components/AssetsImage.vue";
import config from "@/utils/config";
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
  appkey: config.appKey,
})




// 登录
async function submitLoginForm() {
  if (privateChecked.value) return;


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
  margin-top: 57px;
}

.login-btn-disabled {
  background: $uni-color-primary;
  height: 50px;
  width: 90%;
  border-radius: 8px;
  color: #fff;
  margin-top: 57px;
}

.logo {
  width: 128px;
  height: 128px;
}

.form-login {
  margin-top: 21px;
  border-radius: 8px;
  background-color: #fff;
  padding: 14px;
  box-shadow: 0px 4px 10px -2px #D3B996;
  position: relative;
  z-index: 100;
}

.container-box {
  padding: 0 16px;
  margin-top: 24px;
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
page{
  height:100%;
  width: 100%;
}
.container{
  background-image: url("/static/bg.png");
  background-repeat: no-repeat;
  background-size: cover;
  height:100%;
  position: relative;
}
.bottom{
  position: absolute;
  bottom: 0;
  right:-10px;
}

.register-text{
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  letter-spacing: 0;
  vertical-align: middle;
  color: #0067FF;
  margin-top: 16px;
  text-align: center;
  position: relative;
  z-index: 1000;
}
</style>
