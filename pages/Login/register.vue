<script setup lang="ts">

import i18n from "@/pages/Login/i18n/zh-cn";
import LabelInput from "@/pages/Login/components/label-input.vue";
import {reactive, ref} from "vue";
import {httpRequest} from '@/utils/request'
import DefaultHeader from "@/components/defaultHeader.vue";
import AssetsImage from "@/components/AssetsImage.vue";

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

const query = reactive({
  account: "",
  password: "",
  confirmPassword: "",
  invitationCode: ""
})
const privateChecked = ref(false);

async function submitLoginForm() {

  console.log(query, privateChecked)
  if (!privateChecked.value) return;

  if (!query.account) {
    uni.showToast({
      icon: 'error',

      title: "账号不能为空"
    })
    return;
  }
  if (!query.password) {
    uni.showToast({
      icon: 'error',

      title: "密码不能为空"
    })
    return;
  }
  if (!query.confirmPassword) {
    uni.showToast({
      icon: 'error',

      title: "确认不能为空"
    })
    return;
  }

  if (query.password != query.confirmPassword) {
    uni.showToast({
      icon: 'error',

      title: "两次密码不一致"
    })
    return;
  }

  const res = await httpRequest({
    url: "im/api/register",
    data: query,
    method: "POST",
  })

  if (res) {
    uni.showToast({
      title: "注册成功",
      duration: 1000,
      success: () => {
        uni.navigateBack();
      }
    })

  }
}

function getValue(value, key) {
  query[key] = value;

  privateChecked.value = (query.account.length > 6 && query.password.length > 6 && query.confirmPassword.length > 6);
}
</script>

<template>
  <div class="container">
    <!--    <div class="navigation-bar"></div>-->
    <default-header title="注册"></default-header>
    <div class="container-box">
      <div class="flex-center">
        <image src="/static/logo.png" class="logo"></image>
      </div>
      <div class="form-login">
        <label-input icon="/static/account.png"
                     label="账号" placeholder="请输入账号"
                     label-key="account"
                     @update-model-value="getValue"
                     :value="query.account"
                     :rule="mobileInputRule"></label-input>
        <div style="margin-top: 18px">
          <label-input icon="/static/password.png"
                       type="password"
                       label-key="password"
                       @update-model-value="getValue"
                       :rule="smsCodeInputRule"
                       :value="query.password"
                       label="密码" placeholder="请输入密码"></label-input>
        </div>
        <div style="margin-top: 18px">
          <label-input icon="/static/password.png"
                       type="password"
                       label-key="confirmPassword"
                       @update-model-value="getValue"
                       :value="query.confirmPassword"
                       :rule="smsCodeInputRule"
                       label="确认密码" placeholder="确认密码"></label-input>
          <div style="margin-top: 18px">
            <label-input icon="/static/account.png"
                         label-key="invitationCode"
                         @update-model-value="getValue"
                         :value="query.invitationCode"
                         label="邀请码" placeholder="请输入邀请人账号"></label-input>
          </div>
        </div>
      </div>

    </div>
    <button
        :class="privateChecked ? 'login-btn-disabled' : 'login-btn'"
        @tap="submitLoginForm"

    >
      注册
    </button>
    <div style="height:50px"></div>

  </div>
</template>

<style scoped lang="scss">
page {
  height: 100%;
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
  z-index: 2;
}


.container-box {
  padding: 0 32px;
  flex:1;
}

.navigation-bar {
  height: 80px;
}

.container {
  background-image: url("/static/bg.png");
  background-size: 100% 100%;
  position: relative;
  background-repeat: repeat;
  display: flex;
  flex-direction: column;

}


</style>
