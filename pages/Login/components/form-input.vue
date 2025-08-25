<template>
  <div>
    <div :class="inputClass">
      <slot name="addonBefore"/>
      <input
          class="input"
          :type="type"
          :value="value"
          @input="handleInput"
          :focus="inputFocus"
          @focus="inputFocus = true"
          @blur="handleBlur"
          :placeholder="placeholder"
          placeholder-class="set_placeholder"
      />
      <icon
          v-show="value && allowClear"
          type="clear"
          size="16"
          @click="clearInput()"
      />
      <slot name="addonAfter"/>
    </div>
    <div v-if="inputError && rule" class="error-tips">{{ rule.message }}</div>
  </div>
</template>

<script lang="ts" setup>
import {ref, computed, watch, onMounted} from 'vue'

const emit = defineEmits(['updateModelValue'])

const props = defineProps({
  className: {
    type: String,
    default: '',
  }, labelKey: {
    type: String,
    default: '',
  },
  type: {
    type: String,
    default: 'text',
  },
  errorText: {
    type: String,
    default: "",
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

const inputFocus = ref(false)
const inputError = ref(false)
const ext = ref("")



onMounted(()=>{
  emit('updateModelValue', props.value)
})

const inputClass = computed(() => {
  return [
    props.className,
    'form-input-item',
    {focus: inputFocus.value, error: inputError.value},
  ]
})

const handleInput = (event: any) => {
  let value = event.detail.value
  if (props.type === 'tel') {
    value = value.replace(/\D/g, '')
  }
  emit('updateModelValue', value,props.labelKey)
  // inputKey.value++;
}

const handleBlur = () => {
  inputFocus.value = false
  if (props.rule && props.rule.trigger === 'blur') {
    inputError.value = !props.rule.reg.test(props.value || '')

  }
  return inputFocus.value;
}

const clearInput = () => {
  emit('updateModelValue', null)
  inputFocus.value = true
}


</script>

<style lang="scss" scoped>
$primary-color: #337eff;
$error-color: #f56c6c;

.form-input-item {
  border-bottom: 1rpx solid rgba(152, 172, 185, 0.2);
  display: flex;
  height: 44px;
  align-items: center;
  margin-top: 8px;

  &.focus {
    border-color: $uni-color-primary;
  }

  &.error {
    border-color: $error-color;
  }
}

.set_placeholder {
  font-weight: 400;
  font-size: 14px !important;
  vertical-align: middle;
  color: #D2D2D2;
}

.input {
  flex: 1;
  border: none;
  outline: none;
}

.error-tips {
  color: $error-color;
  font-size: 12px;
  margin-top: 5px;
}
</style>
