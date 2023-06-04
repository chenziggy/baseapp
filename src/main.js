import { createApp } from 'vue'
import * as Vue from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import * as VueRouter from 'vue-router'
registerGlobal(window, {
  // 在这里注册暴露给子工程的全局变量
  Vue,
  VueRouter
})

import('http://localhost:8090/assets/index-adbca556.js').then((module) => {
  bootstrap(registerApp())
})

// const registerApp = await import(
//   'http://localhost:8090/assets/index-ecf7a3ae.js'
// )
// console.log('🚀 ~ file: main.js:12 ~ registerApp:', registerApp)

function bootstrap(config) {
  const { routes, name } = config
  console.log('🚀 ~ file: main.js:18 ~ bootstrap ~ router, name:', routes, name)
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  console.log('🚀 ~ file: main.js:29 ~ bootstrap ~ router:', router)
  const app = createApp(App)
  app.use(router).mount('#app')
  setTimeout(() => {
    router.push('/home')
  }, 1000)
}

function registerGlobal(root, deps = {}) {
  Object.keys(deps).forEach((key) => {
    root[key] = deps[key]
  })
}
