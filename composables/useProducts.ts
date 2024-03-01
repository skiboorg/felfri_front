
import { useHttpRequest } from '@/composables/useHttpRequest'
import {useHttp} from "~/composables/useHttp";

export const useProducts = () => {

    const {data:popular_products,  fetchData:fetchPopularProducts} = useHttp('/api/shop/popular')
    const {data:new_products,  fetchData:fetchNewProducts} = useHttp('/api/shop/new')


    fetchPopularProducts()
    fetchNewProducts()

    return {
        popular_products,
        new_products,
        fetchPopularProducts
    }
}
