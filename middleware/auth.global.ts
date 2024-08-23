


export default defineNuxtRouteMiddleware((to, from) => {
    const auth_token = useCookie('auth_token')
    console.log(to)

    if (to.name === 'profile' && !auth_token.value) {
        console.log('need redirect')
        return navigateTo("/auth");
    }
});