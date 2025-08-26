<script setup lang="ts">
import {V2NIMConst} from "@/utils/nim";
import AssetsImage from "@/components/AssetsImage.vue";
import {onBeforeMount, ref} from "vue";

const props = withDefaults(
    defineProps<{
      title: string,
      showBack: boolean,
      showAction:boolean,
      tapAction:Function,
    }>(),
    {
      title: '',
      showBack: true,
      showAction:false,
      tapAction:()=>{},
    }
)

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
  <div class="default-header">
    <div :style="{height:appStatusHeight}"></div>
    <AssetsImage path="/static/back-b.png" width="21px" height="21px" @tap="backToConversation" class="back"
                 v-if="showBack"></AssetsImage>
    {{ props.title }}
    <div class="action" v-if="showAction">
      <div class="save" @tap="tapAction">保存设置</div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.default-header {
  background-color: #fff;
  position: relative;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;

  font-weight: 500;

  font-size: 16px;

  letter-spacing: 0;

}

.back {
  position: absolute;
  left: 16px;
  color: #000000;
}

.action {

  position: absolute;
  top: 0;
  right: 16px;
  display: flex;
  height: 100%;
  align-items: center;
}

.save {
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0;
  color: #0066C5;
}
</style>
