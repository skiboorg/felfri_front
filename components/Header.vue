<script setup lang="ts" >

import { useDark, useToggle } from '@vueuse/core'
import { useCategories } from '@/composables/useCategories'
const route = useRoute()

const { categories, fetchCategories } = useCategories()

let isDark
const toggleDark = useToggle(useDark())
await fetchCategories()
const visibleSidebar = ref(false)

onBeforeMount(()=>{
  isDark = useDark()

})

watch(() => route.fullPath, () => {
  console.log('route change')
  visibleSidebar.value = false
});

//const logo = computed(()=>isDark.value ? '/logo-w.svg':'logo-b.svg')
</script>

<template>
  <header class="mb-4">
    <div class="header-top hidden lg:block" >
      <div class="container flex align-items-center justify-content-between">
        <div class="flex align-items-center gap-4">
          <router-link class="header-top-link" to="/about">О нас</router-link>
          <router-link class="header-top-link" to="/contact">Контакты</router-link>
          <router-link class="header-top-link" to="/news">Статьи</router-link>
        </div>
        <Button  text @click="toggleDark()" class="theme-toggle" :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'" :label="isDark ? 'Светлая тема' : 'Темная тема'"/>
      </div>
    </div>
    <div class="container flex align-items-center justify-content-between py-4">
      <router-link to="/">
        <img class="logo white"  src="~assets/images/logo-w.svg" alt="">
        <img class="logo black"  src="~assets/images/logo-b.svg" alt="">

<!--        <img class="logo"  src="~assets/images/logo.png" alt="">-->

      </router-link>

      <div class="align-items-center gap-4 hidden lg:flex">
        <div class="menu-wrapper" v-for="cat in categories?.filter(x=>x.show_at_equipment)" :key="cat.id">
          <router-link class="menu-link"  :to="`/catalog/${cat.slug}/${cat.sub_categories[0]?.slug}`" >{{cat.name}}</router-link>

          <div class="sub-menu">
            <div class="separator mb-5"></div>
            <div class="container">

              <div class="grid menu-grid">

                <div class="col-3 " v-for="subcat in cat.sub_categories" :key="subcat.id">
                  <router-link class="sub-menu--item" :to="`/catalog/${cat.slug}/${subcat.slug}`">
                  <img class="menu-img" :src="subcat.image" alt="">
                  <p>{{subcat.name}}</p>
                  </router-link>
                </div>
              </div>


            </div>

          </div>
        </div>



      </div>
      <div class="align-items-center gap-2 hidden lg:flex">
<!--        <Button text icon="pi pi-search" rounded size="small" class="customBtn"/>-->
        <router-link class="header-top-link" to="/support">
          <Button  outlined rounded size="small" class="customBtn roundedBtn"  label="Поддержка"/>
        </router-link>
        <a href="https://www.wildberries.ru/brands/310412467-felfri" target="_blank"> <Button  outlined rounded size="small" class="customBtn roundedBtn" label="Мы на WB"/></a>
        <a href="https://www.ozon.ru/seller/felfri-802356/products/?miniapp=seller_802356" target="_blank"><Button  outlined rounded size="small" class="customBtn roundedBtn" label="Мы на Ozon"/></a>


      </div>
      <div class="lg:hidden cursor-pointer" @click="visibleSidebar=true"><i class="pi pi-bars text-2xl"></i></div>
    </div>
  </header>
  <Sidebar v-model:visible="visibleSidebar" position="right" header=" ">
    <div class="flex flex-column gap-5">

      <router-link class="menu-link" v-for="cat in categories?.filter(x=>x.show_at_equipment)" :key="cat.id"
                   :to="`/catalog/${cat.slug}/${cat.sub_categories[0]?.slug}`" >{{cat.name}}</router-link>
      <div class="separator"></div>
      <router-link class="" to="/about">О нас</router-link>
      <router-link class="" to="/contact">Контакты</router-link>
      <router-link class="" to="/news">Новости</router-link>
      <router-link class="" to="/support">Поддержка</router-link>
      <a href="https://www.wildberries.ru/brands/310412467-felfri" target="_blank">Мы на WB</a>
      <a href="https://www.ozon.ru/seller/felfri-802356/products/?miniapp=seller_802356" target="_blank">Мы на Ozon</a>


      <Button  text @click="toggleDark()" class="theme-toggle" :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'" :label="isDark ? 'Светлая тема' : 'Темная тема'"/>
    </div>


 </Sidebar>





</template>

<style scoped lang="sass">

</style>