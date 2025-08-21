<template>
  <div class="shop-page">
    <div class="shop-page__container">
      <span class="shop-page__title">BROWSE BY DRESS STYLE</span>
      <div class="shop-page__card-section">
        <template v-for="({ title, description }, n) in settings" :key="n">
          <product-card-item :title="title" :description="description" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ProductCardItem } from '@/widgets'
import { computed } from 'vue'
const settings = computed(() => [
  {
    title: 'CASUAL',
    description: 'Just buy it',
    // func: () => routerProject('project-settings'),
  },
  {
    title: 'FORMAL',
    description: 'Just buy it',
    // func: openAddMembers,
  },

  {
    title: 'SPORT',
    description: 'Just buy it',
    // func: () => routerProject('project-page'),
  },
  {
    title: 'PARTY',
    description: 'Just buy it',
    // func: confirmDeletion,
  },
  {
    title: 'BUSINESS',
    description: 'Just buy it',
    // func: () => routerProject('project-page'),
  },
  {
    title: 'BEATCH',
    description: 'Just buy it',
    // func: () => routerProject('project-page'),
  },
  {
    title: 'WINTER',
    description: 'Just buy it',
    // func: () => routerProject('project-page'),
  },
  {
    title: 'STREETWEAR',
    description: 'Just buy it',
    // func: () => routerProject('project-page'),
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
