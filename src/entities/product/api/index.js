import { api } from '@/shared'

export const getProducts = () => api.get('products').then(({ data }) => data?.data)
