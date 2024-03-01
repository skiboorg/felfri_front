<script setup lang="ts">
// const images =[
//   {
//     itemImageSrc: 'https://placehold.co/1800x700',
//     thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
//     alt: 'Description for Image 1',
//     title: 'Title 1'
//   },
//   {
//     itemImageSrc: 'https://placehold.co/1800x701',
//     thumbnailImageSrc: 'https://primefaces.org/cdn/primevue/images/galleria/galleria1s.jpg',
//     alt: 'Description for Image 1',
//     title: 'Title 1'
//   },
// ]

const { categories } = useCategories()
const { popular_products, new_products } = useProducts()
const {data:images, fetchData:fetchBanners} = useHttp(`/api/data/banners`)
await fetchBanners()
const {data:faqs, fetchData:fetchFaq} = useHttp(`/api/data/faq`)
await fetchFaq()
const {data:news, fetchData:fetchNews} = useHttp(`/api/news/all`)
await fetchNews()
</script>

<template>
<div class="container">

  <Galleria class="mb-8" :value="images" :autoPlay="true" :numVisible="5" :circular="true" containerClass="gallery"
            :showItemNavigators="true" :showThumbnails="false" :showItemNavigatorsOnHover="true" :showIndicators="true">
    <template #item="slotProps">
      <div class="banner">
        <img :src="slotProps.item.image_big" :alt="slotProps.item.alt" class="gallery-img-big" />
        <img :src="slotProps.item.image_small" :alt="slotProps.item.alt" class="gallery-img-small" />
        <p class="banner-text-big">{{slotProps.item.text_big}}</p>
        <p class="banner-text-small">{{slotProps.item.text_small}}</p>
      </div>

    </template>

  </Galleria>
  <p class="text-6xl mb-6">Я выбираю технику</p>


  <TabView class="mb-8">
    <TabPanel :header="cat.name_alt"  v-for="cat in categories" :key="cat.id">
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
    <div class="col-12 md:col-3" v-for="product in popular_products" :key="product.id">
      <ItemCard :product="product"/>
    </div>
  </div>
  <p class="text-6xl mb-6">Новинки</p>
  <div class="grid row-gap-6 p-0 mb-8">
    <div class="col-12 md:col-3" v-for="product in new_products" :key="product.id">
      <ItemCard :product="product"/>
    </div>
  </div>
  <img class="img mb-6" src="~assets/images/Video.png" alt="">
  <p class="text-6xl mb-6">Новости</p>
  <div class="col-12 md:col-4 mb-6" v-for="news_item in news.results">
    <router-link :to="`/news/${news_item.slug}`">
      <img class="img" :src="news_item.image" alt="">
      <p class="font-medium text-xl mb-2">{{news_item.name}}</p>
      <p class="mb-2">{{news_item.description}}</p>
      <p class="font-medium"> <span class="grey-color">
          Время чтения {{news_item.time_to_read}} | {{new Date(news_item.created).toLocaleDateString()}} |</span>
        <span class="tag">#{{news_item.tag.name}}</span></p>
    </router-link>
  </div>
  <p class="text-6xl mb-4">Faq</p>
  <div class="mb-8">
    <Accordion :activeIndex="0" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
      <AccordionTab v-for="faq in faqs" :key="faq.id">
        <template #header>
                    <span class="flex align-items-center gap-2 w-full">
                        <span class="font-bold white-space-nowrap">{{faq.question}}</span>
                    </span>
        </template>
        <p class="m-0">{{faq.answer}}</p>
      </AccordionTab>
    </Accordion>
  </div>
</div>
</template>

<style lang="sass">

</style>