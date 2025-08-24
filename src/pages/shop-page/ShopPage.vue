<template>
  <div class="shop-page">
    <div class="shop-page__container">
      <span class="shop-page__title">BROWSE BY DRESS STYLE</span>
      <div class="shop-page__card-section">
        <template v-for="({ title, description, styleKey }, n) in settings" :key="n">
          <dress-style-card :title="title" :description="description" :style-key="styleKey" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { DressStyleCard } from '@/widgets'
import { computed } from 'vue'
const settings = computed(() => [
  {
    title: 'CASUAL',
    description: 'Just buy it',
    styleKey: 'casual',
  },
  {
    title: 'FORMAL',
    description: 'Just buy it',
    styleKey: 'formal',
  },
  {
    title: 'SPORT',
    description: 'Just buy it',
    styleKey: 'sport',
  },
  {
    title: 'PARTY',
    description: 'Just buy it',
    styleKey: 'party',
  },
  {
    title: 'BUSINESS',
    description: 'Just buy it',
    styleKey: 'business',
  },
  {
    title: 'BEACH',
    description: 'Just buy it',
    styleKey: 'beach',
  },
  {
    title: 'WINTER',
    description: 'Just buy it',
    styleKey: 'winter',
  },
  {
    title: 'STREETWEAR',
    description: 'Just buy it',
    styleKey: 'streetwear',
  },
])
</script>

<style lang="scss">
.shop-page {
  @apply min-w-[64.8125rem];
  &__title {
    @apply font-bold text-4xl;
  }
  &__container {
    @apply bg-white w-full min-h-64 px-4 py-8 flex flex-col justify-center items-center gap-4 max-w-full rounded-3xl;
  }
  &__card-section {
    @apply flex gap-4 flex-wrap px-8 justify-center;
  }
}
</style>
