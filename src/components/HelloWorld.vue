<script setup>
import { ref } from 'vue'
import {useRouter } from 'vue-router'

const router = useRouter()

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <h1 class="text-red mb-10">BaseApp HelloWorld Page</h1>

  <div class="card">
    <button @click="router.push('/subapp/zoom/helloworld')">go subapp zoom home</button>


    <p>
      <button class="my-4 text-yellow text-10" type="button" @click="count++">count is {{ count }}</button>
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
