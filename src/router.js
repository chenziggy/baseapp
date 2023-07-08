import { createRouter, createWebHistory } from 'vue-router'
import { createLinkElement } from '@/utils/utils'
import App from "@/App.vue"
import SubApp from '@/components/SubApp.vue'

const routes = [
  {
    path: "/",
    redirect: '/helloworld',
    component: App,
  },
  {
    path: "/helloworld",
    component: () => import('@/components/HelloWorld.vue')
  },
  {
    path: "/subapp",
    name: "subApp",
    component: SubApp,
    children: []
  }
];

const subAppMap = {
  zoom: {
    js: '/subapp/zoom/assets/entry.js',
    css: '/subapp/zoom/assets/entry.css',
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

export default router