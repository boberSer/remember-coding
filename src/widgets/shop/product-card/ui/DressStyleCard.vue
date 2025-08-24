<template>
  <div class="product-card" @click="goToCategory">
    <div class="product-card__container">
      <div class="product-card__title">{{ title }}</div>
      <div class="product-card__description">{{ description }}</div>
    </div>
  </div>
</template>

<script setup>
import { router } from '@/app/router/index.js'
import { Routes } from '@/shared'

const props = defineProps({
  title: {
    type: String,
    default: '',
  },
  description: {
    type: String,
    default: '',
  },
  styleKey: {
    type: String,
    required: true,
  },
})

const goToCategory = () => {
  router.push({
    name: Routes.category.name,
    params: { style: props.styleKey.toLowerCase() },
  })
}
</script>

<style lang="scss">
.product-card {
  @apply bg-gray-100 rounded-2xl shadow-md border-2 border-gray-200 cursor-pointer hover:shadow-xl duration-300;
  &__container {
    @apply max-w-96 min-h-40 p-4 grid gap-4 items-center;
    grid-template-columns: 1fr auto;
  }
  &__title {
    @apply text-xl font-bold pt-6;
    align-self: start;
  }
  &__description {
    @apply text-base font-thin pb-6;
    align-self: end;
  }
}
</style>
