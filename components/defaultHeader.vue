<script setup lang="ts">
import {V2NIMConst} from "@/utils/nim";
import AssetsImage from "@/components/AssetsImage.vue";
import {onBeforeMount, ref} from "vue";

const props = withDefaults(
    defineProps<{
      title: string,
      showBack: boolean,
    }>(),
    {
      title: '',
      showBack: true
    }
)

const appStatusHeight = ref(0);
onBeforeMount(() => {
  // #ifdef APP-PLUS
  appStatusHeight.value = plus.navigator.getStatusbarHeight();
  // #endif
})

function backToConversation() {
  console.log('backToConversation');
  uni.navigateBack();
}
</script>

<template>
  <div class="default-header">
    <div :style="{height:appStatusHeight}" class="header"></div>
    <AssetsImage path="/static/back-b.png" width="21px" height="21px" @tap="backToConversation" class="back"
                 v-if="showBack"></AssetsImage>
    {{ props.title }}
    <div class="action">
      <slot></slot>
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

</style>
