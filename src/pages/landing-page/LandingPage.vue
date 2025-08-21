<template>
  <main class="main">
    <div class="main__content">
      <div class="main__container">
        <div class="main__description">
          <span class="max-w-[25rem] text-5xl font-bold">FIND CLOTHES THAT MATCHES YOUR STYLE</span>
          <span class="max-w-[32rem] text-xs text-gray-500 font-thin">
            Browse through our diverse range of meticulously crafted garments, designed to bring out
            your individuality and cater to your sense of style.
          </span>
        </div>
        <button class="main__button">Shop now</button>
        <div class="main__stats">
          <div class="main__stats-item">
            200+
            <span class="font-thin text-base">International Brands</span>
          </div>
          <div class="main__stats-item">
            2000+
            <span class="font-thin text-base">High-Quality Products</span>
          </div>
          <div class="main__stats-item">
            30000+
            <span class="font-thin text-base">Happy Customers</span>
          </div>
        </div>
      </div>
      <div class="main__image">
        <img
          src="@/assets/img/two-people.jpg"
          alt="tilt-smile"
          class="h-96 rounded-3xl shadow-2xl"
        />
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style scoped lang="scss">
.main {
  @apply flex justify-center bg-white w-full rounded-3xl;

  &__content {
    @apply flex w-[64.8125rem] px-6 py-14;
  }

  &__container {
    @apply flex flex-col flex-1 pl-10 gap-8;
  }

  &__description {
    @apply flex flex-col gap-8;
  }

  &__button {
    @apply bg-black text-white max-w-fit py-3 px-14 rounded-3xl;
  }

  &__stats {
    @apply flex gap-4 font-bold pt-5;

    &-item {
      @apply flex flex-col text-4xl;
    }
  }

  &__image {
    @apply flex-shrink-0;
  }
}
</style>
