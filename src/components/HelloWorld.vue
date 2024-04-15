<script setup>
import { ref } from 'vue'
import {useRouter } from 'vue-router'
import ZInput from '@/components/ZInput.vue'
import { useCounterStore } from '@/store.js'

const router = useRouter()

defineProps({
  msg: String,
})

const value = ref('')
const count = ref(0)


const counterStore = useCounterStore()
</script>

<template>

  <div class="card">
    <h1 class=" mb-10 clip">BaseApp HelloWorld Page</h1>
    <button @click="router.push('/subapp/zoom/helloworld')">go subapp zoom home</button>
    <!-- <button @click="router.push('/subapp/park/helloworld')">go subapp park home</button> -->
    <p>
      <button class="my-4 text-yellow text-10 clip" type="button" @click="count++">count is {{ count }}</button>
    </p>
    <ZInput v-model="value"></ZInput>

    <button class="block my-4 mx-auto text-10 clip" @click="counterStore.increment">
      store doubleCount {{ counterStore.doubleCount }}
    </button>
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
