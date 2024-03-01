
import { useHttpRequest } from '@/composables/useHttpRequest'

export const useNews = () => {
    const news = ref([])
    const tags = ref([])

    const fetchNews = async (tag,page) => {
        try {
            const { data, error } =
                await useHttpRequest(`/api/news/all?tag=${tag}&page=${page}`)

            if (!error.value) {
                news.value = data.value.results || []
                return { data, error, status: true }
            }

            return { data: ref([]), error, status: true }
        } catch (error) {
            console.log(error)
            return { status: false, error, data: ref([]) }
        }
    }

    const fetchTags = async ()=>{
        const { data, error } =
            await useHttpRequest(`/api/news/tags`)
        tags.value = data.value || []
    }

    //fetchNews('',1)
    fetchTags()

    return {
        news,
        tags,
        fetchNews,
        fetchTags
    }
}
