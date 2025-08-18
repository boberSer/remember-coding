<template>
  <div>
    <form-input :placeholder="placeholder" />
  </div>
</template>

<script setup>
import { FormInput } from '@/shared'

defineProps({
  placeholder: {
    required: true,
    type: String,
  },
})
</script>

<style scoped lang="scss"></style>
