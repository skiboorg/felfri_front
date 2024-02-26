<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'


const isDark = useDark()
const toggleDark = useToggle(isDark)
const cats = ref([])

const categories = await useFetch('http://127.0.0.1:8000/api/shop/categories')
cats.value = categories.data.value
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
        <Button size="sm" text @click="toggleDark()" :icon="isDark ? 'pi pi-sun' : 'pi pi-moon'"/>
      </div>
    </div>
    <div class="container flex align-items-center justify-content-between py-4">
      <router-link to="/">
        <img class="logo" v-if="isDark" src="~assets/images/logo-w.svg" alt="">
        <img class="logo" v-else src="~assets/images/logo-b.svg" alt="">
      </router-link>

      <div class="flex align-items-center gap-4">
        <router-link  :to="`/catalog/${cat.slug}`" v-for="cat in cats">{{cat.name}}</router-link>

      </div>
      <div class="flex align-items-center gap-4">
        <Button text icon="pi pi-search" rounded size="small" class="customBtn"/>
        <router-link class="header-top-link" to="/support">
          <Button  outlined rounded size="small" class="customBtn roundedBtn"  label="Поддержка"/>
        </router-link>

        <Button  outlined rounded size="small" class="customBtn roundedBtn" label="Мы на WB"/>
        <Button  outlined rounded size="small" class="customBtn roundedBtn" label="Мы на Ozon"/>
      </div>
    </div>
  </header>





</template>

<style scoped lang="sass">

</style>