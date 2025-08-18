<template>
  <header>
    <div class="header">
      <div class="header__container">
        <router-link class="header__title" to="home">SHOP.CO</router-link>
        <div class="header__buttons">
          <a href="#">Shop</a>
          <a href="#">On Sale</a>
          <a href="#">New Arrivals</a>
          <a href="#">Brands</a>
        </div>
        <div class="header__search">
          <form-field :placeholder="search" />
        </div>
        <div class="header__profile">
          <app-icon name="cart" class="w-5 h-5" />
          <app-icon name="profile" class="w-5 h-5" />
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { AppIcon } from '@/shared'
import { FormField } from '@/shared'
import { ref } from 'vue'

const search = ref('Search for product...')
</script>

<style scoped lang="scss">
.header {
  @apply max-h-24 w-full flex justify-center items-center font-semibold;
  &__container {
    @apply flex gap-16 mt-4 py-5 items-center bg-white rounded-t-3xl px-10;
  }
  &__title {
    @apply text-xl;
  }
  &__buttons {
    @apply flex gap-6;
  }
  &__search {
    @apply flex gap-4 items-center;
  }
  &__profile {
    @apply flex gap-4 items-center;
  }
}
</style>
