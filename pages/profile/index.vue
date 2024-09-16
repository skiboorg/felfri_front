<script setup lang="ts">
definePageMeta({
  layout: 'auth'
})
const {$api} = useNuxtApp()
const authCookie = useCookie('auth_token')
const loading = ref(false)
const user = ref({})

onBeforeMount(async ()=>{
  loading.value = true
  try {
    user.value = await $api('/api/user/me')
  }catch (e) {
    authCookie.value = null
    navigateTo('/')
  }
  loading.value = false
})
</script>

<template>
<div class="container">
  <div class="breadbrumbs mb-4 md:mb-6">
    <router-link to="/">Главная</router-link>
    <p>Профиль</p>
  </div>

  <p class="text-4xl md:text-6xl">Мой профиль</p>
  <TabView>
    <TabPanel header="Личные данные">
      <p class="text-xs mb-2">ФИО</p>
      <InputText class=" mb-2" v-model="user.fio" readonly/>
      <p class="text-xs mb-2">E-Mail</p>
      <InputText class=" mb-2" v-model="user.email" readonly/>
      <p class="text-xs mb-2">Телефон</p>
      <InputText class=" mb-2" v-model="user.phone" readonly/>

    </TabPanel>
    <TabPanel header="Заказы ">
      <div class="" v-for="order in user.orders" >

        <div class="grid align-items-center border-1 mb-3 p-2 md:p-4 border-round-2xl border-gray-200" v-for="item in order.items">
          <div class="col-12 md:col-6 flex align-items-center gap-2 flex-wrap">
            <img style="width:100px;height: 100px;object-fit: contain" :src="item.product.image_main"/>
            <div class="">
              <p>{{item.product.name}} {{item.amount}}шт</p>
              <p class="font-bold">{{item.product.price}} ₽</p>
            </div>

          </div>
          <div class="col-12 md:col-6">
            <p>Заказ от {{new Date(order.created_at).toLocaleDateString()}}</p>
            <p class="font-bold">Артикул {{item.product.article_num}}</p>
          </div>
        </div>

      </div>
  <p class="text-lg font-medium">Для того, чтобы ваш заказ появился у вас в личном кабинете - напишите нам в
    <a class="text-primary" href="tg://resolve?domain=uqas_support" target="_blank">Telegram!</a>

    Там вы укажете номер вашего заказа, а наша поддержка добавить товары и статус вашего заказа сюда.</p>



    </TabPanel>
    <TabPanel header="Промо">
      <p class="text-lg font-medium mb-3">Для получения промокода напишите нам в наш Телеграм бот!</p>
      <a href="tg://resolve?domain=uqas_support" target="_blank" class="inline-block bg-gray-50 p-2 border-round-lg w-full md:w-3">
        <div class="flex bg-white border-round-lg p-2 align-items-center gap-2">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_32_8)">
              <path d="M14.5312 0.46875C6.50584 0.46875 0 6.97459 0 15C0 23.0254 6.50584 29.5312 14.5312 29.5312C22.5567 29.5312 29.0625 23.0254 29.0625 15C29.0625 6.97459 22.5567 0.46875 14.5312 0.46875ZM21.2667 10.3512C21.048 12.6489 20.1018 18.2249 19.6202 20.7984C19.4166 21.8873 19.0154 22.2525 18.6272 22.2882C17.7834 22.3659 17.1425 21.7305 16.3252 21.1948C15.0463 20.3564 14.3238 19.8345 13.0823 19.0164C11.6476 18.071 12.5777 17.5516 13.3953 16.702C13.6093 16.4797 17.3273 13.0979 17.3993 12.7911C17.4083 12.7527 17.4169 12.6094 17.3317 12.5342C17.2465 12.459 17.1213 12.4845 17.0308 12.5049C16.9026 12.534 14.8594 13.8845 10.9014 16.5562C10.3215 16.9544 9.79627 17.1484 9.32561 17.1383C8.80676 17.1271 7.80873 16.8449 7.06676 16.6037C6.15674 16.3079 5.43346 16.1515 5.49645 15.6492C5.52926 15.3874 5.88961 15.1199 6.5775 14.8464C10.8137 13.0008 13.6384 11.784 15.0518 11.196C19.0873 9.5175 19.9258 9.22594 20.4724 9.21621C20.5926 9.21422 20.8614 9.24398 21.0354 9.38525C21.1513 9.48589 21.2251 9.62632 21.2423 9.77877C21.2718 9.96806 21.28 10.1601 21.2667 10.3512Z" fill="#2397D8"/>
            </g>
          </svg>
          <p class="text-xs grey-color">Написать нам в Telegram</p>
        </div>
      </a>
    </TabPanel>
  </TabView>
</div>
</template>

<style scoped lang="sass">

</style>