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
const entryFile = 'entry.js'
  import(`http://localhost:8090/assets/${entryFile}`).then((module) => {
    bootstrap(module.r())
  })



function createLinkElement (css) {
  const linkElement = document.createElement('link')
  linkElement.rel="stylesheet"
  linkElement.href = css
  const a = document.head.appendChild(linkElement)
}

function bootstrap(config) {
  createLinkElement('http://localhost:8090/assets/entry.css')
  const { routes } = config
  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  const app = createApp(App)
  app.use(router).mount('#app')
}

function registerGlobal(root, deps = {}) {
  Object.keys(deps).forEach((key) => {
    root[key] = deps[key]
  })
}
