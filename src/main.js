import { createApp } from 'vue'
import * as Vue from 'vue'
import App from './App.vue'
import * as VueRouter  from 'vue-router'
import router from '@/router'
import { registerGlobal } from '@/utils/utils'
import { createPinia } from 'pinia'
import * as Pinia from 'pinia'
import '@unocss/reset/tailwind.css'
import './style.css'
import ZComponents from '@/components'
import Stores from '@/store'
import { msg } from 'virtual:my-module'
console.log(msg)

registerGlobal(window, {
  // 在这里注册暴露给子工程的全局变量
  Vue,
  VueRouter,
  Pinia
})

const  pinia = createPinia()
const app = createApp(App)
app.use(router).use(ZComponents).use(pinia).use(Stores).mount('#app')