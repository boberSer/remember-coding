<template>
  <div class="style-category-page">
    <div class="style-category-page__container">
      <div class="style-category-page__aside">
        <h1 class="style-category-page__title">{{ categoryTitle }}</h1>
        <filter-aside />
      </div>
      <div class="style-category-page__content">Content</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { FilterAside } from '@/widgets'

const props = defineProps({
  style: {
    type: String,
    required: true,
  },
})

const categoryTitle = computed(() => {
  const titles = {
    casual: 'Casual Style',
    formal: 'Formal Attire',
    party: 'Party Outfits',
    gym: 'Gym Wear',
    sport: 'Sport Style',
    business: 'Business Style',
    beach: 'Beach Wear',
    winter: 'Winter Collection',
    streetwear: 'Streetwear',
  }
  return titles[props.style].toUpperCase() || 'Category'
})
</script>

<style lang="scss">
.style-category-page {
  @apply min-w-[64.8125rem];
  &__container {
    @apply bg-white grid grid-cols-[auto_1fr] px-4 py-8 rounded-3xl;
  }
  &__aside {
    @apply border max-w-[17rem] flex flex-col gap-16;
  }
  &__title {
    @apply text-2xl font-bold;
  }
  &__content {
    @apply border;
  }
}
</style>
