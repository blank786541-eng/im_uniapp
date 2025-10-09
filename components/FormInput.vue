<template>
  <div>
    <div :class="inputClass">
      <slot name="addonBefore"/>
      <input
          class="input default-text font-14"
          :type="type"
          :value="inputValue"
          @input="handleInput"
          :focus="inputFocus"
          @focus="handleFocus"
          @blur="handleBlur"
          :placeholder="placeholder"
          :maxlength="maxlength"
          :disabled="props.disabled"
          placeholder-class="set_placeholder"
      />
      <div class="clear-icon" @tap="clearInput()" v-if="allowClear">
        <icon v-show="modelValue && allowClear" type="clear" size="16"/>
      </div>
      <slot name="addonAfter"/>
    </div>

    <div v-if="inputError && rule" class="error-tips">{{ rule.message }}</div>
  </div>
</template>

<script lang="ts" setup>
import {ref, computed, watch} from 'vue'

const $emit = defineEmits([
  'update:modelValue',
  'input',
  'focus',
  'blur',
  'clear',
])
const props = withDefaults(
    defineProps<{
      className?: string
      type?: string
      modelValue?: string
      placeholder?: string
      allowClear?: boolean
      rule?: any
      maxlength?: number
      disabled: boolean
    }>(),
    {
      className: '',
      type: 'text',
      modelValue: '',
      placeholder: '',
      allowClear: false,
      disabled: false,
      rule: null,
      maxlength: 140,
    }
)

const inputFocus = ref(false)
const inputError = ref(false)
// const inputKey = ref(0);
// const disable = ref(false);
// watch(()=>props.disabled,(n,o)=>{disable.value=n})
const inputClass = computed(() => {
  return [
    props.className,
    'form-input-item',
    {focus: inputFocus.value, error: inputError.value},
  ]
})

const inputValue = computed(() => {
  return props.modelValue || ''
})

const handleBlur = (event: any) => {
  inputFocus.value = false
  if (props.rule && props.rule.trigger === 'blur') {
    inputError.value = !props.rule.reg.test(props.modelValue || '')
  }
  $emit('blur', event)
}

const handleFocus = (event: any) => {
  inputFocus.value = true
  $emit('blur', event)
}

const handleInput = (event: any) => {
  if (!(props.maxlength && event.detail.value.length > props.maxlength)) {
    $emit('update:modelValue', event.detail.value)
    $emit('input', event.detail.value)
  }
  // 强制刷新input
  // inputKey.value++;
  if(event.detail.value.length ==0){
      inputError.value = false;
  }
}

const clearInput = () => {
  $emit('update:modelValue', null)
  $emit('input', null)
  $emit('clear', '')

  inputFocus.value = true
}


</script>

<style lang="scss" scoped>
$primary-color: #337eff;
$error-color: #f56c6c;

.form-input-item {
  padding: 10px 10px 5px 0px;
  display: flex;
  height: 44px;
  align-items: center;

  &.focus {
    border-color: $primary-color;
  }

  &.error {
    border-color: $error-color;
  }
}

.input {
  flex: 1;
  border: none;
  outline: none;
}

.clear-icon {
  width: 40px;
  text-align: right;
}

.error-tips {
  color: $error-color;
  font-size: 12px;
  margin-top: 5px;
}
input:disabled,.uni-input-input:disabled  {
  color: #999 !important;
}
</style>
