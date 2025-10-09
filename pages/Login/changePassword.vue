<script setup lang="ts">

import FormInput from "@/pages/Login/components/form-input.vue";
import LabelInput from "@/pages/Login/components/label-input.vue";
import DefaultHeader from "@/components/defaultHeader.vue";
import i18n from "@/pages/Login/i18n/zh-cn";
import {httpRequest} from "@/utils/request";
import {ref} from "vue";
import {STORAGE_KEY} from "@/utils/constants";

const mobileInputRule = {
  reg: /^[a-zA-Z0-9]{6,}$/,
  message: i18n.accountError,
  trigger: 'blur',
}

let query = ref({
  oldPassword: "",
  accountId: "",
  password: "",
  password1: "",
})

function update() {
  if (query.value.password === "" || query.value.password1 === "") {
    uni.showToast({
      icon: 'none',
      title: "请输入密码"
    })
    return;
  }
  if (!query.value.oldPassword && query.value.oldPassword != "") {
    uni.showToast({
      icon: 'none',
      title: "请输入旧密码"
    })
    return;
  }

  if (query.value.password != query.value.password1) {
    uni.showToast({
      icon: 'none',
      title: "两次密码不一致"
    })
    return;
  }
  query.value.accountId = uni.$UIKitStore.userStore.myUserInfo.accountId;
  httpRequest({
    url: `im/user/updateUserAccount`,
    method: "POST",
    data: query.value,
  }).then(response => {
    const data = uni.getStorageSync(STORAGE_KEY);
    uni.setStorage({
      key: STORAGE_KEY,
      data: Object.assign({}, data, {token: query.value.password}),
    });

    uni.showToast({
      icon: 'none',
      title: "更新成功",
      duration: 1000,
      success: () => {
        uni.navigateBack();
      }
    })
  })
}

function getValue(e, key) {
  query.value[key] = e;
  console.log(query, 'key====')
}
</script>

<template>
  <div>
    <!--        <FormInput placeholder="请输入旧密码"></FormInput>-->
    <!--        <FormInput></FormInput>-->
    <!--        <FormInput></FormInput>-->
    <default-header title="修改密码"></default-header>
    <div class="content">
      <label-input label="旧密码"
                   icon="/static/password.png"
                   :value="query.oldPassword"
                   placeholder="请输入旧密码"

                   type="password"
                   labelKey="oldPassword"
                   @update-model-value="getValue"
                   :rule="mobileInputRule"
      ></label-input>
      <label-input label="新密码"
                   icon="/static/password.png"
                   :value="query.password"
                   placeholder="请输入新密码"

                   type="password"
                   labelKey="password"
                   @update-model-value="getValue"
                   :rule="mobileInputRule"
      ></label-input>
      <label-input label="确认新密码"
                   icon="/static/password.png"
                   :value="query.password1"
                   placeholder="确认新密码"

                   type="password"
                   labelKey="password1"
                   @update-model-value="getValue"
                   :rule="mobileInputRule"
      ></label-input>
    </div>
    <div class="flex-center" @click="update">
      <div class="flex-center login-btn">
        修改
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.content {
  padding: 20px;
}
</style>
