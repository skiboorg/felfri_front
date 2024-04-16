<script setup lang="ts">
const {data, fetchData} = useHttp(`/api/shop/instructions`)
await fetchData()
</script>

<template>
  <div class="container">

    <div class="breadbrumbs mb-4 md:mb-6">
      <router-link to="/">Главная</router-link>
      <p>Каталог инструкций</p>
    </div>

    <h1 class="text-4xl md:text-6xl mb-4 md:mb-8 ">Каталог инструкций</h1>
    <div class="mb-4 md:mb-6" v-for="item in data.filter(x=>x.products.length>0)" :key="item.id">
      <p class="text-3xl mb-4 md:mb-6 ">{{item.name}}</p>
      <div class="grid">
        <div class="col-12 md:col-6 lg:col-3" v-for="product in item.products" :key="product.id">
          <div class="grey-block-item w-hover" >
            <img class="grey-block-image" :src="product.image_main" alt="">
            <p class="small-card-title">{{product.name}}</p>
            <a target="_blank" :href="product.file" class="grey-block-link">Скачать инструкцию</a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="sass">

</style>