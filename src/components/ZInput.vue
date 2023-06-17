<template>
    <input class="input focus:outline-[0px] hover:border-[#646cff] focus-visible:border-[#fff] border-transparent border-1 rounded-lg px-[1.2em] py-[0.6em]" @input="emit('update:modelValue', $event.target.value)" :value="modelValue">
</template>

<script setup>
defineOptions({
  name: 'ZInput'
})
const props = defineProps({
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])
</script>
