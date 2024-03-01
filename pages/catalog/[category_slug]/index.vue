<script setup lang="ts">

const route = useRoute()
const {data:category, fetchData:fetchCategory} = useHttp(`/api/shop/categories/${route.params.category_slug}`)
await fetchCategory()

</script>

<template>
<div class="container">
  <div class="breadbrumbs mb-8">
    <router-link to="/">Главная</router-link>
    <p>{{category.name}}</p>
  </div>
  <p class="text-6xl mb-4">{{category.name}}</p>
  <TabView class="mb-8">
    <TabPanel :header="subcat.name" v-for="subcat in category.sub_categories" :key="subcat.id">

      <div class="grid row-gap-6 p-0 mt-4">
        <div class="col-12 md:col-3" v-for="product in subcat.products" :key="product.id">
          <ItemCard :product="product" :category="category"/>
        </div>
      </div>

    </TabPanel>


  </TabView>
</div>

</template>

<style scoped lang="sass">

</style>