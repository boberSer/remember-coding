import { api } from '@/shared'

export const getApi = (lat, lng) =>
  api.get(`https://api.opentopodata.org/v1/test-dataset?locations=${lat},${lng}`)
