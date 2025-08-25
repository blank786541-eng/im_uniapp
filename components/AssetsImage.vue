<script setup lang="ts">
const props = defineProps({
  path: {
    type: String,
    default: ''
  },
  width: {
    type: String,
    default: 24
  },
  height: {
    type: String,
    default: 24
  }
})
</script>

<template>
  <image :src="props.path" :style="{width:props.width,height:props.height}" class="icon"></image>
</template>

<style scoped lang="scss">
  .icon{
    flex-shrink: 0;
  }
</style>
