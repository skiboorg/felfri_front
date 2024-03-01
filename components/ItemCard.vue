<script setup lang="ts">
defineProps(['product','category'])
</script>

<template>
  <div class="small-card">
    <p v-if="category" class="small-card-top">{{category.name}}</p>
    <img class="main_img" :src="product.image_main" alt="">
    <img class="alt_img" :src="product.image_alt" alt="">
    <p class="small-card-title">{{product.name}}</p>
    <p class="small-card-price">{{product.price}} ₽</p>
    <router-link v-if="category" :to="`/catalog/${category.slug}/${product.slug}`">
      <Button  outlined rounded size="small" class="customBtn roundedBtn2 w-full" label="Подробнее о товаре"/>
    </router-link>
    <nuxt-link v-else :to="`/catalog/${product.cat_slug}/${product.slug}`">
      <Button  outlined rounded size="small" class="customBtn roundedBtn1" label="Подробнее"/>
    </nuxt-link>

  </div>
</template>

