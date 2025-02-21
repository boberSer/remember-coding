<template>
  <button @click="refresh">ОБНОВИТЬ ДАННЫЕ</button>
  <pre>
  {{ products }}
  </pre>
</template>

<script setup>
import { productStore } from '@/entities'
import { storeToRefs } from 'pinia'

const { products } = storeToRefs(productStore.useStore())
const { refresh } = productStore.useStore()
</script>

<style scoped lang="scss"></style>
