<script setup lang="ts">
import {ref} from 'vue'
import DefaultHeader from "@/components/defaultHeader.vue";
import AssetsImage from "@/components/AssetsImage.vue";
import { onLoad} from '@dcloudio/uni-app'
import {updateImInfo} from "@/utils/request";
const name = ref('');

function clearInput() {
  name.value = "";
  console.log(name.value)
}

function update(e) {
  name.value = e.detail.value;
}

function  save(){
  if(name.value == ""){
    return;
  }
  updateImInfo({nickname:name.value})

}

onLoad((options) => {
  name.value=options.name
});
</script>

<template>
  <div>
    <default-header title="设置昵称" :show-action="true" :tap-action="save">

    </default-header>
    <div class="input-container">
      <input class="input" placeholder="请输入昵称" :value="name" placeholder-class="set_placeholder" @input="update"/>
      <AssetsImage path="/static/cancel.png" width="15px" height="15px" @tap="clearInput" v-if="name.length>0"></AssetsImage>
    </div>
  </div>
</template>

<style scoped lang="scss">
page {
  background-color: #eff1f2;
}

.save {
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0;
  color: #0066C5;
}

.input-container {
  margin: 12px 10px 0;
  background-color: #fff;
  height: 43px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 12px;

}

.input {
  flex: 1;

}

.set_placeholder {
  color: #BFBFBF;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.3px;
}
</style>
