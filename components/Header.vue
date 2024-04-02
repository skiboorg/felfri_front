<script setup lang="ts" >
const config = useRuntimeConfig()
import { useDark, useToggle } from '@vueuse/core'
import { useCategories } from '@/composables/useCategories'


const { categories, fetchCategories } = useCategories()
const isDark = useDark()
const toggleDark = useToggle(isDark)
await fetchCategories()
const visible = ref(false)
</script>

<template>
  <header class="mb-4">
    <div class="header-top">
      <div class="container flex align-items-center justify-content-between">
        <div class="flex align-items-center gap-4">
          <router-link class="header-top-link" to="/about">О нас</router-link>
          <router-link class="header-top-link" to="/contact">Контакты</router-link>
          <router-link class="header-top-link" to="/news">Новости</router-link>
        </div>
        <Button  text @click="toggleDark()" class="theme-toggle" :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'" :label="isDark ? 'Светлая тема' : 'Темная тема'"/>
      </div>
    </div>
    <div class="container flex align-items-center justify-content-between py-4">
      <router-link to="/">


        <img class="logo" v-if="isDark" src="~assets/images/logo-w.svg" alt="">
        <img class="logo" v-else src="~assets/images/logo-b.svg" alt="">
      </router-link>

      <div class="align-items-center gap-4 hidden lg:flex">
        <div class="menu-wrapper" v-for="cat in categories?.filter(x=>x.show_at_equipment)" :key="cat.id">
          <router-link class="menu-link"  :to="`/catalog/${cat.slug}/${cat.sub_categories[0]?.slug}`" >{{cat.name}}</router-link>

          <div class="sub-menu">
            <div class="separator mb-5"></div>
            <div class="container">

              <div class="grid menu-grid">

                <div class="col-2 " v-for="subcat in cat.sub_categories" :key="subcat.id">
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

        <Button  outlined rounded size="small" class="customBtn roundedBtn" label="Мы на WB"/>
        <Button  outlined rounded size="small" class="customBtn roundedBtn" label="Мы на Ozon"/>
      </div>
      <div class="lg:hidden cursor-pointer" @click="visible=true"><i class="pi pi-bars text-2xl"></i></div>
    </div>
  </header>
  <Sidebar v-model:visible="visible" position="right" header=" ">
    <div class="footer-links mb-4">

      <router-link class="menu-link" v-for="cat in categories?.filter(x=>x.show_at_equipment)" :key="cat.id" :to="`/catalog/${cat.slug}`" >{{cat.name}}</router-link>

    </div>
    <div class="flex flex-column gap-3">
      <router-link class="w-full block" to="/support">
        <Button  outlined rounded size="small" class="customBtn roundedBtn w-full"  label="Поддержка"/>
      </router-link>

      <Button  outlined rounded size="small" class="customBtn roundedBtn" label="Мы на WB"/>
      <Button  outlined rounded size="small" class="customBtn roundedBtn" label="Мы на Ozon"/>
    </div>

 </Sidebar>





</template>

<style scoped lang="sass">

</style>