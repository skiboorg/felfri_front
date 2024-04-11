<template>
  <footer class="footer">
    <div class="container">
      <div class="grid mb-4 gap-3 md:gap-0 " >
        <div class="col-12 md:col-6 text-center md:text-left">

          <img class="logo "  src="~assets/images/logo-b.svg" alt="">
        </div>
        <div class="col-2 hidden lg:block">
          <p class="font-medium mb-4">Карта сайта</p>
          <div class="footer-links">
            <router-link to="/about">О нас</router-link>
            <router-link to="/contact">Контакты</router-link>
            <router-link to="/news">Новости</router-link>
          </div>
        </div>
        <div class="col-2 hidden lg:block">
          <p class="font-medium mb-4">Категории</p>
          <div class="footer-links">

            <router-link class="menu-link" v-for="cat in categories?.filter(x=>x.show_at_equipment)" :key="cat.id" :to="`/catalog/${cat.slug}/${cat.sub_categories[0]?.slug}`" >{{cat.name}}</router-link>

          </div>
        </div>
        <div class="col-12 md:col-6 lg:col-2 text-center md:text-left">
          <p class="font-medium mb-4">Контакты</p>
          <div class="footer-links">
            <a href="tel:+7 (916) 572-30-93">+7 (916) 572-30-93</a>
            <a href="mailto:sdfdsf">into@felfri.ru</a>
          <p>Пн–Пт: 9:00-20:00 МСК</p>
          </div>
        </div>
      </div>
      <div class="separator mb-4"></div>
      <div class="flex justify-content-center align-items-center">
        <p>© FELFRI 2024. Все права защищены</p>
<!--        <p>Обработка персональных данных</p>-->
<!--        <a href="#">Политика конфиденциальности</a>-->
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { useCategories } from '@/composables/useCategories'


const { categories, fetchCategories } = useCategories()
await fetchCategories()
</script>