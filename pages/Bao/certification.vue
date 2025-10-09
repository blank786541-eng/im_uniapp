<script setup lang="ts">

import DefaultHeader from "@/components/defaultHeader.vue";
import {onMounted, ref} from "vue";
import Icon from "@/components/Icon.vue";
import AssetsImage from "@/components/AssetsImage.vue";
import {apiUrl, httpRequest} from "@/utils/request";
import LabelInput from "@/pages/Login/components/label-input.vue";
import FormInput from "@/pages/Login/components/form-input.vue";


const imgs = ref([
  {
    holder: '/static/black1.png',
    value: "",
    loading: false,
  }, {
    holder: '/static/black2.png',
    value: "",
    loading: false,
  }, {
    holder: '/static/black3.png',
    value: "",
    loading: false,
  },
])
const loading = ref(false);
const accountId = uni.$UIKitStore.userStore.myUserInfo.accountId;
const state = ref(2);
const error = ref(null);
const name = ref('');
const idCard = ref('');
const idCardRule = {
  reg: /^[a-zA-Z0-9]{18}$/,
  message: "请输入18位数字加字母组合",
  trigger: 'blur',
}

function uploadImage(index: number) {
  if (state.value != 2) return;
  imgs.value[index].loading = true;
  uni.chooseImage({
    count: 1,
    sizeType: ['compressed'],
    success: (res) => {
      const formData = new FormData()
      formData.append('file', res.tempFiles[0])
      formData.append('accountId', accountId)

      uni.uploadFile({
        url: `${apiUrl}im/group/upload`,
        formData: {
          accountId: accountId,
        },
        file: res.tempFiles[0],
        fileType: "image",
        name: "file",
        // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        headers: {'Content-Type': 'multipart/form-data'},
        success: (res) => {
          console.log(JSON.parse(res.data));
          imgs.value[index].value = JSON.parse(res.data).data;
        },
        fail: (err) => {
          imgs.value[index].loading = false;
        },
        complete: (res) => {
          imgs.value[index].loading = false;
        }
      })
    }
  })
}

function upload() {
  if (state.value != 2) return;

  if (!name.value) {
    uni.showToast({
      title: '请输入姓名',
      icon: "none",
    })
    return;
  }

  if (!idCard.value || !idCardRule.reg.test(idCard.value)) {
    uni.showToast({
      title: '请输入身份证',
      icon: "none",
    })
    return;
  }
  let msg = "";
  for (let i = 0; i < imgs.value.length; i++) {
    if (!imgs.value[i].value) {

      if (i == 0) {
        msg = "请上传身份证正面"
      } else if (i == 1) {
        msg = "请上传身份证背面"
      } else if (i == 1) {
        msg = "请上传手持身份证"
      }
      uni.showToast({
        title: msg,
        icon: "none",
      })
      break;
    }
  }
  if(msg) return;
  let query = {
    account: accountId - 0,
    headPortraitImg: imgs.value[0].value,
    nationalEmblemImg: imgs.value[1].value,
    handImg: imgs.value[2].value,
    name: name.value,
    idCard: idCard.value,

  }

  httpRequest({
    url: `kyc/kycApply`,
    method: "post",
    data: query,
  }).then(res => {
    uni.showToast({
      title: res,
      icon: "none",
      duration: 1000,
      success: () => {
        uni.navigateBack();
      }
    })
  })
}

// stateMap.kycStatus == 2 ? '上传证件实名认证' : stateMap.kycStatus == 1 ? "已认证" : "认证中"

const states = ["认证中", '已认证', '立即上传']
onMounted(() => {
  httpRequest({
    url: `im/api/getUserKyc?account=${accountId}`,
    method: "get",

  }).then(res => {
    // account
    //     :
    //     "13907495924"
    // createdAt
    //     :
    //     "2025-09-21T16:10:49.000+08:00"
    // handImg
    //     :
    //     "https://img.imgbt.net/bc8c9a9d-eb0b-4e49-a476-581a30774e86_红包.png"
    // headPortraitImg
    //     :
    //     "https://img.imgbt.net/2e952f5f-3380-42a9-82c9-a8ddc0e968d0_红包.png"
    // id
    //     :
    //     2
    // message
    //     :
    //     null
    // nationalEmblemImg
    //     :
    //     "https://img.imgbt.net/5e48a2dd-9308-4d7c-809d-8bbb6e2393f2_红包.png"
    // state
    //     :
    //     1
    // updatedAt
    //     :
    //     "
    imgs.value[0].value = res.headPortraitImg;
    imgs.value[1].value = res.nationalEmblemImg;
    imgs.value[2].value = res.handImg;
    state.value = res.state;
    error.value = res.message;
    console.log(res);
  })
  httpRequest({
    url: 'kyc/getByAccount',
    method: "GET",
    data: {
      account: uni.$UIKitStore.userStore.myUserInfo.accountId
    }
  }).then((res) => {
    name.value = res.name;
    idCard.value = res.idCard;
  });
})


function getIdCardValue(v) {
  idCard.value = v;
}

function getNameValue(v) {
  name.value = v;
}
</script>

<template>
  <div class="flex-box flex-direction-column" style="height: 100%;padding-bottom: 90px">
    <default-header title="实名认证"></default-header>
    <div class="container-box" style="padding: 0 16px">
      <div>
        <FormInput
           :value="name"

            @updateModelValue="getNameValue"
            placeholder="请输入姓名"
        >
          <template v-slot:addonBefore>
            <div style="margin-right: 24px">姓名</div>
          </template>
        </FormInput>
        <FormInput
            :value="idCard"
            @updateModelValue="getIdCardValue"
            placeholder="请输入姓名"
            :maxLength="18"
            :rule="idCardRule"
        >
          <template v-slot:addonBefore>
            <div style="margin-right: 24px">身份证</div>
          </template>
        </FormInput>
      </div>
      <div v-for="(item,index) in imgs" style="margin-top: 12px;" @click="uploadImage(index)">
        <div v-if="item.value"
             style="width: 368px;height: 165px;border:1px solid #efefef;border-radius: 12px;position: relative;z-index: 10">
          <img :src="item.value" style="width: 100%;height: 100%;border-radius: 12px;">
        </div>
        <div class="flex-center" v-else
             style="width: 368px;height: 165px;border:1px solid #efefef;border-radius: 8px;position: relative;z-index: 10">
          <AssetsImage path="/static/loading.png" width="24px" height="24px" class="addAnimation"
                       v-if="item.loading"></AssetsImage>
          <img :src="item.holder" style="width: 100%;">
        </div>


      </div>
      <img src="/static/black4.png" style="width: 100%;margin: 24px 0;">
    </div>
    <div class="footer">
      <div class="error" v-if="error">
        <span>审核消息：{{ error }}</span>
      </div>
      <div class="watch-btn" @click="upload" :style="{opacity:state==2?1:0.8}">
        {{ states[state] }}
      </div>

    </div>

  </div>
</template>

<style scoped lang="scss">
page {
  height: 100%;
}

.error {
  color: red;
  font-size: 13px;
  padding: 10px 10px;
}


.footer {
  position: fixed;
  bottom: 24px;
  left: 16px;
  right: 16px;
  background-color: #fff;
}

.watch-btn {
  border-radius: 8px;
  background: #DBB077;

  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0px;
  color: #fff;
  padding: 14px 0;
}

.message-scroll-list {
  box-sizing: border-box;
  padding-bottom: 1px;
}

.addAnimation {
  position: absolute;
  animation: turn 1s infinite;
}

@keyframes turn {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
