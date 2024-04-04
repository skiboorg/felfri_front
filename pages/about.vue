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
    <div class="grid md:pb-8">
      <div class="col-12 md:col-6">
        <img class="img block" src="~assets/images/a1.jpg" alt="">
      </div>
      <div class="col-12 md:col-6 flex flex-column justify-content-between">
        <img class="img block" src="~assets/images/a2.jpg" alt="">
        <img class="img block" src="~assets/images/a3.jpg" alt="">
      </div>
    </div>
    <div class="mt-8 grey-block mb-4 md:mb-8">
      <p class="text-4xl md:text-6xl mb-4 md:mb-6 ">О Felfri в цифрах</p>
      <div class="grid">
        <div class="col-12 md:col-3" v-for="i in 4">
          <div class="grey-block-item">
            <p class="grey-block-number">712</p>
            <p>Lorem ipsum dolor sit amet consectetur. Eu pharetra ullamcorper sed congue...</p>
          </div>
        </div>
      </div>

    </div>
    <div class="md:pt-8">
      <p class="text-4xl md:text-6xl mb-4 md:mb-6 ">Тестирование</p>
      <div class="grid">
        <div class="col-12 md:col-6 flex flex-column justify-content-between">
          <img class="img block mb-3" src="~assets/images/a4.jpg" alt="">
          <div class="grid">
            <div class="col-12 md:col-6"> <img class="img block" src="~assets/images/a5.jpg" alt=""></div>
            <div class="col-12 md:col-6"> <img class="img block" src="~assets/images/a6.jpg" alt=""></div>
          </div>
        </div>
        <div class="col-12 md:col-6 ">
          <div class="grey-block-item mb-5">
            <p class="grey-block-number">01</p>
            <p class=" mb-2">Заголовок</p>
            <p>Lorem ipsum dolor sit amet consectetur. Eu pharetra ullamcorper sed congue...</p>
          </div>
          <div class="grey-block-item mb-4">
            <p class="grey-block-number">01</p>
            <p class=" mb-2">Заголовок</p>
            <p>Lorem ipsum dolor sit amet consectetur. Eu pharetra ullamcorper sed congue...</p>
          </div>
          <div class="grey-block-item">
            <p class="grey-block-number">01</p>
            <p class=" mb-2">Заголовок</p>
            <p>Lorem ipsum dolor sit amet consectetur. Eu pharetra ullamcorper sed congue...</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>