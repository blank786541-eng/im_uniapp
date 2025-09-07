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
  },
  circle: {
    type: Boolean,
    default:false
  }
})

function handleContextMenu(e){
  e.preventDefault();
  e.stopPropagation();
}
</script>

<template>
  <image :src="props.path"
         :draggable="false"
         @contextmenu.prevent="handleContextMenu"
         :style="{width:props.width,height:props.height,borderRadius:circle?'500px':0}" class="icon no-select no-touch-callout"></image>
</template>

<style scoped lang="scss">
  .icon{
    flex-shrink: 0;
  }


  .no-select {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  /* 针对iOS设备 */
  .no-touch-callout {
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
</style>
