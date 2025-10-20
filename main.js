import { createSSRApp } from 'vue'
import App from './App.vue'

// import vConsole from 'vconsole';
// new vConsole({})
export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
  }
}
