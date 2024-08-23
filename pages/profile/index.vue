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
      <p class="m-0">
   {{user.fio}}<br>
   {{user.email}}<br>
   {{user.phone}}<br>
    </p>
    </TabPanel>
    <TabPanel header="Заказы ">
      <div class="" v-for="order in user.orders" >
        <p class="font-bold text-lg mb-3">Заказ от {{new Date(order.created_at).toLocaleDateString()}}</p>

        <div class="flex gap-2 align-items-center mb-1" v-for="item in order.items">
<!--        {{item}}-->
          <img style="width:100px;height: 100px;object-fit: contain" :src="item.product.image_main"/>
          <p>{{item.product.name}} {{item.amount}}шт</p>

        </div>
        <hr>
      </div>



    </TabPanel>
    <TabPanel header="Промо">

    </TabPanel>
  </TabView>
</div>
</template>

<style scoped lang="sass">

</style>