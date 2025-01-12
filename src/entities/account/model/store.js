import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('account-store', () => {
  const token = ref()

  const login = () => (token.value = 'f;kfd;s;lk')

  return { token, login }
})
