<script setup lang="ts">
import {onMounted, ref} from "vue";

const props = defineProps({
  label: String,
  onchange: {
    type:Function,
    default:()=>{}
  },
})
const tap=ref(false);

function select(){
   tap.value=!tap.value;
   props.onchange(tap.value)
}
onMounted(()=>{
  tap.value=uni.getStorageSync("autoLogin") || false;
})
</script>

<template>
  <div class="flex-box flex-y-center" @click="select" style="flex-shrink: 0">
    <div class="radio">
      <div class="selection" :class="tap?'selection-a':'selection-in'">
      </div>
    </div>
    <span class="label">{{ label }}</span>
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.radio {
  width: 14px;
  height: 14px;
  border-radius: 4px;
  padding: 2px;
  border: 1px solid $uni-color-primary;
  margin-right: 6px;
  flex-shrink: 0
}

.selection {

  width: 100%;
  height: 100%;
  border-radius: 4px;
  box-sizing: border-box;
}

.selection-a {
  background-color: $uni-color-primary;
}
.selection-in {
  background-color:transparent;
}

.label{
  font-weight: 400;
  font-size: 12px;
  vertical-align: middle;

}
</style>
