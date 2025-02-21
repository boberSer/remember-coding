import { asyncComputed, useMemoize } from '@vueuse/core'

export const useApi = (request) => {
  const execute = useMemoize(async (id = '') => {
    return request(id)
  })

  const clearOne = execute.delete

  const clear = execute.clear

  const refresh = execute.load

  const getRef = (id = '') => {
    return asyncComputed(() => execute(id))
  }

  return { getRef, clear, clearOne, refresh }
}
