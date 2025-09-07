<template>
  <div>
    <LoginForm />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import LoginForm from './login-form.vue'
import Welcome from './components/welcome.vue'
import { onLoad, onUnload } from '@dcloudio/uni-app'

const step = ref(0) // 0: 欢迎页 1: 登录页
onLoad(() => {
  uni.$on('login', () => {
    step.value = 1
  })
})

onUnload(() => {
  uni.$off('login')
})
</script>

<style>
@import '../styles/common.scss';

page {
  height: 100%;
  overflow: hidden;
}
</style>
