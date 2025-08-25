<script setup lang="ts">

import FormInput from "@/pages/Login/components/form-input.vue";

const props = defineProps({
  label: {
    type: String,
    default: '',
  }, labelKey: {
    type: String,
    default: '',
  },
  icon: {
    type: String,
    default: '',
  },

  className: {
    type: String,
    default: '',
  },
  errorText: {
    type: String,
    default: null,
  },
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
  allowClear: {
    type: Boolean,
    default: false,
  },
  rule: {
    type: Object,
    default: null,
  },

})
const emit = defineEmits(['updateModelValue'])
function update(v){
    emit('updateModelValue', v,props.labelKey)
}
</script>

<template>
  <div style="margin-top: 18px">
    <div class="flex-box">
      <div class="login-account  flex-center">
        <image :src="icon"></image>
      </div>
      <span>{{ label }}</span>
    </div>
    <FormInput :placeholder="placeholder" :value="value"
               :allow-clear="allowClear" :rule="rule"
               :error-text="errorText"
               :type="type"
               :label-key="labelKey"
               @update-model-value="update"
               :class-name="className"></FormInput>
  </div>
</template>

<style scoped lang="scss">
.login-account {
  width: 22px;
  height: 22px;
  background-color: $uni-color-primary;
  border-radius: 6px;
  margin-right: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  vertical-align: middle;

  image {
    width: 12px;
    height: 13px;
  }
}
</style>
