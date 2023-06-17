import { createApp } from 'vue'
import * as Vue from 'vue'
import App from './App.vue'
import * as VueRouter  from 'vue-router'
import router from '@/router'
import { registerGlobal } from '@/utils/utils'
import '@unocss/reset/tailwind.css'
import './style.css'
import ZComponents from '@/components'
import { msg } from 'virtual:my-module'
console.log(msg)

registerGlobal(window, {
  // 在这里注册暴露给子工程的全局变量
  Vue,
  VueRouter
})


const app = createApp(App)
app.use(router).use(ZComponents).mount('#app')
