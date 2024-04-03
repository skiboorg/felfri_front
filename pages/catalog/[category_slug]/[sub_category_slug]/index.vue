<script setup lang="ts">

const route = useRoute()
const op = ref()

const {data:category, fetchData:fetchCategory} = useHttp(`/api/shop/categories/${route.params.category_slug}`)
await fetchCategory()
const toggle = (event) => {
  op.value.toggle(event)
}
let seoText
let tabIndex
let subcatName

try {
  const sub_category_slug = route.params.sub_category_slug
  seoText = category.value.sub_categories.find(x=>x.slug===sub_category_slug).html_content
  tabIndex = category.value.sub_categories.findIndex(x=>x.slug===sub_category_slug) || 0
  subcatName = category.value.sub_categories.find(x=>x.slug===sub_category_slug).name
}catch (e) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}


const tabClick = (e) => {
  console.log(category.value.sub_categories[e.index])
  navigateTo(`/catalog/${route.params.category_slug}/${category.value.sub_categories[e.index].slug}`)
}

useSeoMeta({
  title:`Felfri - техника для дома | ${category.value.name} / ${subcatName}`,
  //description:'Felfri - техника для дома. Лучшее качество по доступной цене. Каталог техники для дома, ухода за волосами, для мужчин и ухода за ротовой полостью'
})
</script>

<template>
<div class="container">
  <div class="breadbrumbs mb-4 md:mb-8">
    <router-link to="/">Главная</router-link>
    <p>{{category.name}} / {{subcatName}}</p>
  </div>
  <div class="flex align-items-center justify-content-between mb-4">
    <p class="text-4xl md:text-6xl ">{{category.name}}</p>
    <div class="flex align-items-center gap-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z" fill="#9E9E9E"/>
      </svg>
      <p class="grey-color">
        Сортировать по:
      </p>
      <div class="card flex justify-content-center">
        <p class="cursor-pointer" @click="toggle" >актуальности</p>

        <OverlayPanel ref="op">
          <p class="mb-2 cursor-pointer">Цене</p>
          <p class="cursor-pointer">Дате добавления</p>
        </OverlayPanel>
      </div>
    </div>
  </div>

  <TabView class="mb-4 md:mb-8" @tab-click="tabClick" :active-index="tabIndex">
    <TabPanel :header="subcat.name" v-for="subcat in category.sub_categories" :key="subcat.id" >
      <div class="grid row-gap-1 p-0 mt-4">
        <div class="col-12 md:col-6 lg:col-3" v-for="product in subcat.products" :key="product.id">
          <ItemCard :product="product" :category="category"/>
        </div>
      </div>
    </TabPanel>
  </TabView>
  <div class="mb-4 md:mb-8" v-html="seoText"></div>
</div>

</template>

<style scoped lang="sass">

</style>