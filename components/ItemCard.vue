<script setup lang="ts">
defineProps(['product','category'])
</script>

<template>
  <div class="small-card" @click="navigateTo(`/catalog/${product.cat_slug}/${product.subcat_slug}/${product.slug}`)">
    <p class="small-card-top">{{product.subcat_name}}</p>



    <img class="main_img " :src="product.image_main" alt="">
    <img class="alt_img" :src="product.image_alt" alt="">
    <p class="small-card-title">{{product.name}}</p>
    <p class="small-card-price">{{product.price}} ₽</p>
    <div class="badges">
      <div v-if="product.is_new" class="badge is-new">Новинка</div>
      <div v-if="product.is_popular" class="badge is-pop">Популярный</div>
      <div v-if="!product.is_in_stock" class="badge is-not-in-stock">Нет в наличии</div>
      <div v-if="product.is_arrive" class="badge is-arrive">В пути</div>
    </div>


<!--    <router-link v-if="category" :to="`/catalog/${category.slug}/${product.slug}`">-->
<!--      <Button  outlined rounded size="small" class="customBtn roundedBtn2 w-full" label="Подробнее о товаре"/>-->
<!--    </router-link>-->


      <nuxt-link  :to="`/catalog/${product.cat_slug}/${product.subcat_slug}/${product.slug}`">
        <Button  outlined rounded size="small" class="customBtn roundedBtn1 roundedBtn2" label="Подробнее"/>
      </nuxt-link>



  </div>
</template>

