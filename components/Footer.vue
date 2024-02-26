<template>
  <footer class="footer">
    <div class="container">
      <div class="grid mb-4">
        <div class="col-6">
          <img class="logo" src="~assets/images/logo-b.svg" alt="">
        </div>
        <div class="col-2">
          <p class="font-medium mb-4">Карта сайта</p>
          <div class="footer-links">
            <router-link to="/">О нас</router-link>
            <router-link to="/">Контакты</router-link>
            <router-link to="/">Новости</router-link>
          </div>
        </div>
        <div class="col-2">
          <p class="font-medium mb-4">Категории</p>
          <div class="footer-links">
            <router-link to="/">Автотовары</router-link>
            <router-link to="/">Здоровье зубов</router-link>
            <router-link to="/">Товары для дома</router-link>
            <router-link to="/">Триммеры и бритвы</router-link>
          </div>
        </div>
        <div class="col-2">
          <p class="font-medium mb-4">Контакты</p>
          <div class="footer-links">
            <a href="tel:000">+7 989 580 24 32</a>
            <a href="mailto:sdfdsf">into@felfri.ru</a>
          <p>Пн–Пт: 9:00-20:00 МСК</p>
          </div>
        </div>
      </div>
      <div class="separator mb-4"></div>
      <div class="flex justify-content-between align-items-center">
        <p>© FELFRI 2023. Все права защищены</p>
        <p>Обработка персональных данных</p>
        <a href="#">Политика конфиденциальности</a>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
</script>