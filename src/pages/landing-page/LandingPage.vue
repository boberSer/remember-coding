<template>
  <main class="main">
    <div class="main__container">
      <div class="main__description">
        <span class="max-w-[25rem] text-5xl font-bold">FIND CLOTHES THAT MATCHES YOUR STYLE</span>
        <span class="max-w-[32rem] text-xs text-gray-500">
          Browse through our diverse range of meticulously crafted garments, designed to bring out
          your individuality and cater to your sense of style.
        </span>
      </div>
      <button class="main__button">Shop now</button>
      <div class="main__stats">
        <div>
          200+
          <span>International Brands</span>
        </div>
        <div>
          2000+
          <span>High-Quality Products</span>
        </div>
        <div>
          30000+
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
    <div class="image">
      <img src="@/assets/img/two-people.jpg" alt="tilt-smile" class="h-96" />
    </div>
  </main>
</template>

<script setup></script>

<style scoped lang="scss">
.main {
  @apply flex gap-4 bg-white w-[64.8125rem];
  &__container {
    @apply flex flex-col p-6;
  }
  &__description {
    @apply flex flex-col;
  }
  &__button {
    @apply bg-black text-white max-w-fit py-4 px-6 rounded-2xl;
  }
  &__stats {
    @apply flex;
  }
}
</style>
