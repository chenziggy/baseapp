<template>
  <header @click="renderRoutes" class="h-20 bg-blue">
    <!-- routes: {{ routes }} -->
    
  </header>
  <div class="flex h-full">
    <side class="w-40 bg-amber h-full">111</side>
    <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
      <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>  </main>
  </div>
</template>

<script setup lang="ts">
import {useRouter,  } from 'vue-router'
import {onMounted, ref} from 'vue'
const router = useRouter()

onMounted(() => {
  console.log("🚀 ~ router:", router.getRoutes())
})

const routes =  ref()

function renderRoutes() {
  routes.value = router.getRoutes()
  console.log(routes.value)
}
</script>