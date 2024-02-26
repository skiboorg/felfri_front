<script setup lang="ts">
const cat = ref([])
const route = useRoute()
const category = await useFetch(`http://127.0.0.1:8000/api/shop/categories/${route.params.category_slug}`)
cat.value = category.data.value
console.log(route.params.category_slug)
</script>

<template>
<div class="container">
  <div class="breadbrumbs mb-8">
    <router-link to="/">Главная</router-link>
    <p>{{cat.name}}</p>
  </div>
  <p class="text-6xl mb-4">{{cat.name}}</p>
  <TabView class="mb-8">
    <TabPanel :header="subcat.name" class="mt-4" v-for="subcat in cat.sub_categories">

      <div class="grid row-gap-6 p-0 mt-4">
        <div class="col-12 md:col-3" v-for="product in subcat.products">
          <div class="small-card">
            <p class="small-card-top">Пылесосы для автомобилей</p>
            <img class="main_img" :src="product.image_main" alt="">
            <img class="alt_img" :src="product.image_alt" alt="">
            <p class="small-card-title">{{product.name}}</p>
            <p class="small-card-price">{{product.price}} ₽</p>
            <router-link :to="`/catalog/${cat.slug}/${product.slug}`">
              <Button  outlined rounded size="small" class="customBtn roundedBtn2 w-full" label="Подробнее о товаре"/>
            </router-link>

          </div>
        </div>
      </div>

    </TabPanel>


  </TabView>
</div>

</template>

<style scoped lang="sass">

</style>