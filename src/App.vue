<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>
