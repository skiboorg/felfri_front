<script setup lang="ts">
const images =[
  {
    itemImageSrc: 'https://placehold.co/1800x700',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
  },
  {
    itemImageSrc: 'https://placehold.co/1800x701',
    thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
    alt: 'Description for Image 1',
    title: 'Title 1'
  },
]
const cats = ref([])
const categories = await useFetch('http://79.132.139.110:8000/api/shop/categories')
cats.value = categories.data.value

const { data } = await useAsyncData('products', async () => {
  return await Promise.all([
      $fetch('http://79.132.139.110:8000/api/shop/new'),
    $fetch('http://79.132.139.110:8000/api/shop/popular'),
  ])
})

</script>

<template>
<div class="container">


  <Galleria class="mb-8" :value="images" :autoPlay="true" :numVisible="5" :circular="true" containerClass="gallery"
            :showItemNavigators="true" :showThumbnails="false" :showItemNavigatorsOnHover="true" :showIndicators="true">
    <template #item="slotProps">
      <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" class="gallery-img" />
    </template>

  </Galleria>
  <p class="text-6xl mb-6">Я выбираю технику</p>


  <TabView class="mb-8">
    <TabPanel :header="cat.name" class="mt-4" v-for="cat in cats">
      <div class="grid row-gap-6 p-0 mt-4">
        <div class="col-12 md:col-4" v-for="subcat in cat.sub_categories">
          <router-link :to="`/catalog/${cat.slug}`">
          <div class="big-card">
            <p class="big-card-title">{{subcat.name}}</p>
            <p class="big-card-subtitle">{{subcat.products.length}} товаров</p>
            <img class="big-card-image" :src="subcat.image" alt="">
          </div>
          </router-link>
        </div>
      </div>
   
    </TabPanel>
   

  </TabView>
  <p class="text-6xl mb-6">Популярные товары</p>
  <div class="grid row-gap-6 p-0 mb-8">
    <div class="col-12 md:col-3" v-for="product in data[1]">
      <div class="card">
        <div class="card-image">
          <img :src="product.image_main" alt="">
        </div>
        <p class="text-xl mb-2">{{product.name}}</p>
        <p class="mb-3">{{product.price}} Р</p>
        <nuxt-link :to="`/catalog/${product.cat_slug}/${product.slug}`">
          <Button  outlined rounded size="small" class="customBtn roundedBtn1" label="Подробнее"/>
        </nuxt-link>

      </div>
    </div>
  </div>
  <p class="text-6xl mb-6">Новинки</p>
  <div class="grid row-gap-6 p-0 mb-8">
    <div class="col-12 md:col-3" v-for="product in data[0]">
      <div class="card">
        <div class="card-image">
          <img :src="product.image_main" alt="">
        </div>
        <p class="text-xl mb-2">{{product.name}}</p>
        <p class="mb-3">{{product.price}} Р</p>
        <nuxt-link :to="`/catalog/${product.cat_slug}/${product.slug}`">
          <Button  outlined rounded size="small" class="customBtn roundedBtn1" label="Подробнее"/>
        </nuxt-link>

      </div>
    </div>
  </div>
  <p class="text-6xl mb-4">Faq</p>
  <div class="faq mb-8">
    <Accordion :activeIndex="0" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
      <AccordionTab v-for="i in 10">
        <template #header>
                    <span class="flex align-items-center gap-2 w-full">

                        <span class="font-bold white-space-nowrap">Lorem ipsum dolor.</span>

                    </span>
        </template>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </AccordionTab>

    </Accordion>
  </div>



</div>
</template>

<style lang="sass">

</style>