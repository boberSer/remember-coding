<template>
  <div class="form-input">
    <app-icon name="search" class="w-5 h-5 text-black" />
    <input class="input" :placeholder="placeholder" />
  </div>
</template>

<script setup>
import { AppIcon } from '@/shared'

defineProps({
  placeholder: {
    required: true,
    type: String,
  },
})
</script>

<style scoped lang="scss">
.form-input {
  @apply flex gap-4 bg-gray-200 rounded-2xl pr-20 pl-3 py-2 items-center;
}
.input {
  @apply bg-gray-200 border-none outline-none;
}
</style>
