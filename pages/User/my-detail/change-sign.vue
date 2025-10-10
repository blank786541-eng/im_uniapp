<script setup lang="ts">
import {ref} from 'vue'
import DefaultHeader from "@/components/defaultHeader.vue";
import AssetsImage from "@/components/AssetsImage.vue";
import Icon from "@/components/Icon.vue";
import { onLoad} from '@dcloudio/uni-app'
import {updateImInfo} from "@/utils/request";
const name = ref('');



onLoad((options) => {
  name.value=options.name || ""
});
function clearInput() {
  name.value = "";
  console.log(name.value)
}

function update(e) {
  name.value = e.detail.value;
}

function save() {

  if(name.value == ""){
    return;
  }
  updateImInfo({signature:name.value})

}
</script>

<template>
  <div>
    <default-header title="个性签名" :show-action="true" :tap-action="save">
    </default-header>
    <div class="input-container">
      <textarea class="input" placeholder="请输入个性签名"
                :auto-height="true"
                :value="name" placeholder-class="set_placeholder" @input="update"/>
      <div class="flex-box" style="justify-content: flex-end;width: 100%;">
        <AssetsImage path="/static/cancel.png" width="15px" height="15px" @tap="clearInput"

                     v-if="name.length>0"></AssetsImage>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
page {
  background-color: #eff1f2;
}


.input-container {
  margin: 12px 10px 0;
  background-color: #fff;
  height: 98px;
  border-radius: 8px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 12px;

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
