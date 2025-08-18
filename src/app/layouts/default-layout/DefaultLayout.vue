<template>
  <div class="default-layout">
    <app-header />
    <main class="main-content">
      <div class="wrapper">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>
import { AppHeader } from '@/shared'
</script>

<style scoped lang="scss">
.default-layout {
  @apply flex flex-col min-h-screen bg-gray-200;
}

.main-content {
  @apply flex-1 justify-center flex;
}

.wrapper {
  @apply max-w-[64.8125rem];
}
</style>
