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
  <h1 class=" mb-10 clip">BaseApp HelloWorld Page</h1>

  <div class="card">
    <button @click="router.push('/subapp/zoom/helloworld')">go subapp zoom home</button>


    <p>
      <button class="my-4 text-yellow text-10" type="button" @click="count++">count is {{ count }}</button>
    </p>
  </div>
</template>

<style scoped>
.clip {
  --vp-home-hero-name-background: -webkit-linear-gradient( 120deg, #00a98e 30%, #009ff7 );

  background: var(--vp-home-hero-name-background);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>
