<template>
  <header @click="renderRoutes" class="h-20 bg-blue">
    <!-- routes: {{ routes }} -->

  </header>
  <div class=" overflow-hidden flex h-full">
    <aside class="w-40 bg-amber h-full shrink-0">menu</aside>
    <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200 " class="w-full h-full">
      <!-- <div class="h-8 bg-white"></div> -->
      <router-view v-slot="{ Component}">
        <Transition name="fade" mode="out-in">
            <KeepAlive>
                <component :is="Component"  />
              </KeepAlive>
        </Transition>
      </router-view>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter, } from 'vue-router'
const router = useRouter()

const routes = ref()

function renderRoutes() {
  routes.value = JSON.stringify(router.getRoutes())
  console.log(routes.value)
}
</script>

<style>
.fade-enter-active
,.fade-leave-active
{
  transition: opacity .2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}</style>