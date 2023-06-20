import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Eduardo')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})

export const useDepartmentStore = defineStore('department', () => {
  const level = ref(101)
  const departmentName = ref('软件开发部')
  return {
    level,
    departmentName
  }
})

const stores = {
  useCounterStore,
  useDepartmentStore
}

const INSTALLED_STORE = Symbol('INSTALLED_STORE')



 const installer = {
  install(app, options) {
    if (app[INSTALLED_STORE]) return 
    app[INSTALLED_STORE] = true
    const useGlobalStore  = {}
    Object.keys(stores).forEach(key => {
      stores[key]()
      useGlobalStore[key] = stores[key]
    })
    const a = app.provide('useGlobalStore',useGlobalStore)
  }
}

export default installer

