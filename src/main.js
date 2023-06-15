import { createApp } from 'vue'
import * as Vue from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import * as VueRouter  from 'vue-router'
import routes from '@/routes'
import {createLinkElement} from '@/utils/utils'
import 'virtual:uno.css'
import '@unocss/reset/tailwind.css'
import './style.css'

registerGlobal(window, {
  // 在这里注册暴露给子工程的全局变量
  Vue,
  VueRouter
})


const subAppMap = {
  zoom: {
    js: 'http://localhost:5175/assets/entry.js',
    css: 'http://localhost:5175/assets/entry.css',
  }
}

const subAppRoutes = {}

async function loadAsyncSubApp(appId) {
  const {DEV, registerApp} = await import(subAppMap[appId].js)
  const {routes} = registerApp()
  if (routes) {
    router.addRoute('subApp', routes[0])
    subAppRoutes[appId] = routes[0]
  }
  if (!DEV) {
    createLinkElement(subAppMap[appId].css)
  }
}

async function getModule(to, from, next) {
  // pathname /subapp/xx/index   /subapp/
  const { path } = to
  if (path.includes('subapp')) {
    const id = path.split('/')[2]
    const subAppModule = subAppMap[id]
    if (subAppModule) {
      if (subAppRoutes[id]) {
        next()
      } else {
        await loadAsyncSubApp(id)
        next(to.fullPath)
      }
    } else {
      router.back()
    }
  } else {
    next()
      // baseApp 
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes
})

  
router.beforeEach(getModule)
const app = createApp(App)
app.use(router).mount('#app')



function registerGlobal(root, deps = {}) {
  Object.keys(deps).forEach((key) => {
    root[key] = deps[key]
  })
}
