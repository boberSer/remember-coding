import { defineStore } from 'pinia'
import { useApi } from '@/shared'
import { productApi } from '@/entities'

export const useStore = defineStore('product-store', () => {
  const { getRef, refresh } = useApi(productApi.getProducts)

  const products = getRef()

  return { products, refresh }
})
