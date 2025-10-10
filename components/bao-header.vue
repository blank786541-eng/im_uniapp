<script setup lang="ts">
import {onBeforeMount, ref} from "vue";
import AssetsImage from "@/components/AssetsImage.vue";
import {t} from "@/utils/i18n";
import Icon from "@/components/Icon.vue";
import {customNavigateTo} from "@/utils/customNavigate";
import {onHide} from '@dcloudio/uni-app'
import {getUniPlatform} from "@/utils";

const props = defineProps({
  label: {
    type: String,
    default: "label"
  },
  showBack: {
    type: Boolean,
    default: true
  },  labelWeight: {
    type: Number,
    default: 600
  },
});
const addDropdownVisible = ref(false)

const appStatusHeight = ref(0);
onBeforeMount(() => {
  // #ifdef APP-PLUS
  appStatusHeight.value = plus.navigator.getStatusbarHeight();
  // #endif
})


function backToConversation() {
  uni.navigateBack();
}


</script>

<template>
  <div class="header">
    <div :style="{height:appStatusHeight}"></div>
    <div class="header-row">
      <AssetsImage :path="`/static/back.png`" width="21px" height="21px" @tap="backToConversation" class="back"
                   v-if="showBack"></AssetsImage>
      <div class="label" :style="{fontWeight:labelWeight}">{{ label }}</div>
      <div></div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.header {
  background: $uni-color-primary;
  box-sizing: border-box;
  padding: 21px 0;
}

.label {
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0;
  color: #FFFCFC;
  text-align: center;
  width: 100%;
}

.header-row {
  padding-top: 12px;
  padding-bottom: 16px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  position: relative;
  width: 100%;
}

.back{
  position: absolute;
  left: 16px;
}

</style>
