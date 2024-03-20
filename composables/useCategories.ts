
import { useHttp } from '@/composables/useHttp'

export const useCategories =  () => {

  const {data:categories, error, fetchData:fetchCategories} =  useHttp('/api/shop/categories')

  return {
    categories,
    fetchCategories
  }
}
