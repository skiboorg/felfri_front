export const  useHttp = (url, options = {})=>{
    const data = ref(null)
    const error = ref(null)
    const loading = ref(false)
    const {signal, abort} = new AbortController()
    const baseUrl = useRuntimeConfig().public.APIURL

    loading.value = true

    const headers = {
        'Accept': 'application/json',
        //'Content-Type': 'application/json',

    }

    if (options.headers){
        options.headers = {...headers, ...options.headers}
    }else {
        options.headers = {...headers}
    }

    console.log(options)
    const fetchData = async () =>{
        try{
            const res = await fetch(`${baseUrl}${url}`,{signal,...options})
            if (!res.ok){
                error.value = 'error fetch'
            }
            data.value = await res.json()
        }
        catch (e) {
            error.value = e.message;
        }
        loading.value = false
    }

    return{
        data,error,loading,abort,fetchData
    }
}