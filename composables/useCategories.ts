
import { useHttpRequest } from '@/composables/useHttpRequest'

export const useCategories = () => {
  const categories = ref([])

  const fetchCategories = async () => {
    try {
      const { data, error } =
        await useHttpRequest(`/api/shop/categories`)

      if (!error.value) {
        categories.value = data.value || []
        return { data, error, status: true }
      }

      return { data: ref([]), error, status: true }
    } catch (error) {
      console.log(error)
      return { status: false, error, data: ref([]) }
    }
  }

  fetchCategories()

  return {
    categories,
    fetchCategories
  }
}
