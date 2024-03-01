
import { useHttpRequest } from '@/composables/useHttpRequest'

export const useProducts = () => {
    const popular_products = ref([])
    const new_products = ref([])

    const fetchProducts = async (url) => {
        try {
            const { data, error } =
                await useHttpRequest(url)
            if (!error.value) {
                //categories.value = data.value || []
                return { data, error, status: true }
            }
            return { data: ref([]), error, status: true }
        } catch (error) {
            console.log(error)
            return { status: false, error, data: ref([]) }
        }
    }

    const fetchPopularProducts = async ()=>{
       const response =  await fetchProducts('/api/shop/popular')
        popular_products.value = response.data.value || []
    }

    const fetchNewProducts = async ()=>{
        const response =  await fetchProducts('/api/shop/new')
        new_products.value = response.data.value || []
    }

    fetchPopularProducts()
    fetchNewProducts()

    return {
        popular_products,
        new_products,
        fetchPopularProducts
    }
}
