// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css:[

    'primeicons/primeicons.css',
    'primevue/resources/primevue.css',
    'primeflex/primeflex.css',
    'primevue/resources/themes/viva-light/theme.css',
    '~/assets/sass/style.sass',
  ],
  devtools: { enabled: true },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts'
  ],
  googleFonts: {
    display: 'swap',
    download: true,
    families: {
      Inter: {
        wght: [400, 500, 600, 700]
      },
    }
  },
  build: {
    transpile: ['primevue']
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  runtimeConfig: {
    public:{
      //APIURL: 'http://127.0.0.1:8000',
      APIURL: 'http://79.132.139.110:8000',
    }
  },
})
