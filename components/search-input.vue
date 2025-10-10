<script lang="ts" setup>
import {t} from "@/utils/i18n";
import AssetsImage from "@/components/AssetsImage.vue";
const emit=defineEmits(["change","search"])

defineProps({
  placeholder:String,

})

const onInputValueChange = (event: any) => {
  //删除搜索内容,页面回到最原始状态，搜索结果都清空

  emit('change', event.detail.value);
}
const handleSearch=(e)=>{
  console.log(e.detail.value)
  emit('search', e.detail.value);
}
</script>

<template>
  <div class="search-input-wrapper">
    <AssetsImage path="/static/search.png" width="20px" height="20px"></AssetsImage>
    <input
        class="search-input"
        type="text"
        @input="onInputValueChange"
        @confirm="handleSearch"
        placeholder-class="placeholder"
        confirm-type="search"
        :placeholder="placeholder"
    />
  </div>
</template>

<style scoped lang="scss">
.search-input-wrapper {
  display: flex;
  align-items: center;
  background-color: #f2f4f5;
  box-sizing: border-box;
  padding: 0 12px;
  border-radius: 8px;
  box-sizing: border-box;
}
.search-input {
  display: inline-block;
  background-color: #f2f4f5;
  width: 85%;
  padding: 4px;
  height: 40px;
  margin-left: 8px;
}

.placeholder {
  color: #a6adb6;
}
</style>
