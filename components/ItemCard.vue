<script setup lang="ts">
defineProps(['product','category'])
</script>

<template>
  <div class="small-card">
    <p class="small-card-top">{{product.subcat_name}}</p>



    <img class="main_img " :src="product.image_main" alt="">
    <img class="alt_img" :src="product.image_alt" alt="">
    <p class="small-card-title">{{product.name}}</p>
    <p class="small-card-price">{{product.price}} ₽</p>
<!--    <router-link v-if="category" :to="`/catalog/${category.slug}/${product.slug}`">-->
<!--      <Button  outlined rounded size="small" class="customBtn roundedBtn2 w-full" label="Подробнее о товаре"/>-->
<!--    </router-link>-->
    <nuxt-link  :to="`/catalog/${product.cat_slug}/${product.subcat_slug}/${product.slug}`">
      <Button  outlined rounded size="small" class="customBtn roundedBtn1 roundedBtn2" label="Подробнее"/>
    </nuxt-link>

  </div>
</template>

