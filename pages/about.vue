<script setup lang="ts">
import { useDark } from '@vueuse/core'


const isDark = useDark()
</script>

<template>
  <div class="container">
    <div class="breadbrumbs mb-4 md:mb-6">
      <router-link to="/">Главная</router-link>
      <p>О нас</p>
    </div>
    <div class="grid mb-4 md:mb-6">
      <div class="col-12 md:col-5 md:pr-6">
        <img class="img" v-if="isDark" src="~assets/images/logo-w.svg" alt="">
        <img class="img" v-else src="~assets/images/logo-b.svg" alt="">
      </div>
      <div class="col-12 md:col-7">
        <p class=" text-7xl line-height-1">
          Качество, доступное каждому
        </p>
      </div>
    </div>
    <h1 class="text-4xl md:text-6xl mb-4 ">О бренде Felfri</h1>
    <div class="grid pb-3 md:pb-6">
      <div class="col-12 md:col-6">
        <img class="img block" src="~assets/images/a1.jpg" alt="">
      </div>
      <div class="col-12 md:col-6 flex flex-column justify-content-between">
        <img class="img block mb-3 mb:mb-0" src="~assets/images/a2.jpg" alt="">
        <img class="img block" src="~assets/images/a3.jpg" alt="">
      </div>
    </div>
    <div class="grid row-gap-3 mb-4 md:mb-6">
      <div class="col-12 md:col-9">
        <p class="text-lg line-height-2">Если вы ищете достойную технику, то мы созданы для вас! FELFRI — это бренд техники для красоты, здоровья
          и домашнего уюта. Удобство использования является одним из основных принципов. Усилия специалистов
          компании сосредоточены на том, чтобы делать наш ассортимент лучше с каждым днем.
        </p>
      </div>
      <div class="col-12 md:col-9">
        <p class="text-lg line-height-2">Для нас важно поддержание высокого стандарта качества для вашего комфорта.
          В 2021 году мы вышли на рынок всего лишь с 1 товаром. Сегодня продукция бренда
          представлена более, чем в 20 категориях. Мы динамично развиваемся — ежегодный оборот компании уверенно растет.
          С первого года работы мы охватили почти всю географию России, вы сможете найти нас везде.
        </p>
      </div>
    </div>
    <p class="text-4xl md:text-6xl mb-4 ">Миссия Felfri</p>
    <div class="grid align-items-center mb-4 md:mb-6">
      <div class="col-12 md:col-6">
        <img class="img block mb-3" src="~assets/images/a4.jpg" alt="">
      </div>
      <div class="col-12 md:col-6 pl-0 md:pl-8">
        <p class="text-lg line-height-2 mb-3">Совершенное качество в каждом доме. Мы стремимся сделать качество, доступное каждому человеку. Минимум усилий и максимум комфорта для решения ежедневных задач.

        </p>
        <p class="text-lg line-height-2 mb-3">Наша продукция предназначена для повышения качества жизни людей. Мы освобождаем ваше личное время и ресурсы за счет использования наших приборов.

        </p>
        <p class="text-lg line-height-3">Наша компания уверена в надежности наших товаров. Вся продукция сертифицирована и проходит тестирование.
        </p>
      </div>
    </div>

    <p class="text-4xl md:text-6xl mb-4 ">Мы на маркетплейсах:</p>
    <div class="grid">
      <div class="col-12 md:col-6 cursor-pointer">
        <a href="https://www.ozon.ru/seller/felfri-802356/products/?miniapp=seller_802356" target="_blank">
        <img class="img" src="~assets/images/oz.png" alt="">
        </a>
      </div>
      <div class="col-12 md:col-6 cursor-pointer">
        <a href="https://www.wildberries.ru/brands/310412467-felfri" target="_blank">
        <img class="img" src="~assets/images/wb.png" alt="">
        </a>
      </div>
    </div>
<!--    <div class="mt-8 grey-block mb-4 md:mb-8">-->
<!--      <p class="text-4xl md:text-6xl mb-4 md:mb-6 ">О Felfri в цифрах</p>-->
<!--      <div class="grid">-->
<!--        <div class="col-12 md:col-3" v-for="i in 4">-->
<!--          <div class="grey-block-item">-->
<!--            <p class="grey-block-number">712</p>-->
<!--            <p>Lorem ipsum dolor sit amet consectetur. Eu pharetra ullamcorper sed congue...</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->

<!--    </div>-->
<!--    <div class="md:pt-8">-->
<!--      <p class="text-4xl md:text-6xl mb-4 md:mb-6 ">Тестирование</p>-->
<!--      <div class="grid">-->
<!--        <div class="col-12 md:col-6 flex flex-column justify-content-between">-->
<!--          <img class="img block mb-3" src="~assets/images/a4.jpg" alt="">-->
<!--          <div class="grid">-->
<!--            <div class="col-12 md:col-6"> <img class="img block" src="~assets/images/a5.jpg" alt=""></div>-->
<!--            <div class="col-12 md:col-6"> <img class="img block" src="~assets/images/a6.jpg" alt=""></div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="col-12 md:col-6 ">-->
<!--          <div class="grey-block-item mb-5">-->
<!--            <p class="grey-block-number">01</p>-->
<!--            <p class=" mb-2">Заголовок</p>-->
<!--            <p>Lorem ipsum dolor sit amet consectetur. Eu pharetra ullamcorper sed congue...</p>-->
<!--          </div>-->
<!--          <div class="grey-block-item mb-4">-->
<!--            <p class="grey-block-number">01</p>-->
<!--            <p class=" mb-2">Заголовок</p>-->
<!--            <p>Lorem ipsum dolor sit amet consectetur. Eu pharetra ullamcorper sed congue...</p>-->
<!--          </div>-->
<!--          <div class="grey-block-item">-->
<!--            <p class="grey-block-number">01</p>-->
<!--            <p class=" mb-2">Заголовок</p>-->
<!--            <p>Lorem ipsum dolor sit amet consectetur. Eu pharetra ullamcorper sed congue...</p>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>

<style scoped lang="sass">

</style>