<script setup lang="ts">
const activeIndex = ref(0);
const { categories, fetchCategories } = useCategories()
const { popular_products, new_products } = useProducts()
const {data:images, fetchData:fetchBanners} = useHttp(`/api/data/banners`)
await fetchBanners()
const {data:faqs, fetchData:fetchFaq} = useHttp(`/api/data/faq`)
await fetchFaq()
const {data:news, fetchData:fetchNews} = useHttp(`/api/news/index`)
await fetchNews()

await fetchCategories()
const changeSlide = (act) => {

  if (act === 'inc'){
    activeIndex.value + 1 > images.value.length - 1 ? activeIndex.value = 0 : activeIndex.value +=1
  }
  if (act === 'dec'){
    activeIndex.value - 1 < 0 ? activeIndex.value = images.value.length - 1 : activeIndex.value -=1
  }
}

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 4,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);
</script>

<template>
  <div class="container">

    <Galleria v-model:activeIndex="activeIndex" class="mb-6 md:mb-8" :value="images" :autoPlay="true"  :circular="true" containerClass="gallery"
              :showItemNavigators="false" :showThumbnails="false" :showItemNavigatorsOnHover="false" :showIndicators="true">
      <template #item="slotProps">

        <div class="banner" :class="slotProps.item.url ? 'cursor-pointer' : ''" @click="slotProps.item.url ? $router.push(slotProps.item.url): null">

          <div class="arrows">
          <span class="arrow prev rotate-180" @click="changeSlide('dec')">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="63" height="63" rx="31.5" stroke="white"/>
<path d="M26 31.25C25.5858 31.25 25.25 31.5858 25.25 32C25.25 32.4142 25.5858 32.75 26 32.75L26 31.25ZM38.5303 32.5303C38.8232 32.2374 38.8232 31.7626 38.5303 31.4697L33.7574 26.6967C33.4645 26.4038 32.9896 26.4038 32.6967 26.6967C32.4038 26.9896 32.4038 27.4645 32.6967 27.7574L36.9393 32L32.6967 36.2426C32.4038 36.5355 32.4038 37.0104 32.6967 37.3033C32.9896 37.5962 33.4645 37.5962 33.7574 37.3033L38.5303 32.5303ZM26 32.75L38 32.75L38 31.25L26 31.25L26 32.75Z" fill="white"/>
</svg>

          </span>
            <span class="arrow next" @click="changeSlide('inc')">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="0.5" y="0.5" width="63" height="63" rx="31.5" stroke="white"/>
<path d="M26 31.25C25.5858 31.25 25.25 31.5858 25.25 32C25.25 32.4142 25.5858 32.75 26 32.75L26 31.25ZM38.5303 32.5303C38.8232 32.2374 38.8232 31.7626 38.5303 31.4697L33.7574 26.6967C33.4645 26.4038 32.9896 26.4038 32.6967 26.6967C32.4038 26.9896 32.4038 27.4645 32.6967 27.7574L36.9393 32L32.6967 36.2426C32.4038 36.5355 32.4038 37.0104 32.6967 37.3033C32.9896 37.5962 33.4645 37.5962 33.7574 37.3033L38.5303 32.5303ZM26 32.75L38 32.75L38 31.25L26 31.25L26 32.75Z" fill="white"/>
</svg>
          </span>
          </div>
          <img :src="slotProps.item.image_big" :alt="slotProps.item.alt" class="gallery-img-big" />
          <img :src="slotProps.item.image_small" :alt="slotProps.item.alt" class="gallery-img-small" />
          <p v-if="slotProps.item.text_big" class="banner-text-big">{{slotProps.item.text_big}}</p>
          <p v-if="slotProps.item.text_small" class="banner-text-small">{{slotProps.item.text_small}}</p>
        </div>
      </template>

    </Galleria>
    <p class="text-4xl md:text-6xl mb-4 md:mb-6">Я выбираю технику</p>
    <TabView class="mb-6 md:mb-8">
      <TabPanel :header="cat.name_alt"  v-for="cat in categories" :key="cat.id">
        <div class="grid row-gap-2 p-0 mt-4">
          <div class="col-12 md:col-6 lg:col-4" v-for="subcat in cat.sub_categories">
            <router-link :to="`/catalog/${cat.slug}/${subcat.slug}`">
              <div class="big-card">
                <p class="big-card-title">{{subcat.name}}</p>
                <p class="big-card-subtitle">{{subcat.short_description}}</p>
                <div class="big-card-image-wrapper">
                  <img class="big-card-image" :src="subcat.image" alt="">
                </div>

              </div>
            </router-link>
          </div>
        </div>
      </TabPanel>

    </TabView>
    <p class="text-4xl md:text-6xl mb-4 md:mb-6">Популярные товары</p>
<!--   -->
    <Carousel class="mb-6 md:mb-8" :value="popular_products" :numVisible="4" :numScroll="1"  :autoplay-interval="2000" :showNavigators="false" :responsive-options="responsiveOptions" circular >
      <template #item="slotProps">
        <ItemCard class="m-2  p-3" :product="slotProps.data"/>
      </template>
    </Carousel>
    <p class="text-4xl md:text-6xl mb-4 md:mb-6">Новинки</p>

    <Carousel class="mb-6 md:mb-8" :value="new_products" :numVisible="4" :numScroll="1"  :autoplay-interval="3000" :showNavigators="false" :responsive-options="responsiveOptions" circular >
      <template #item="slotProps">
        <ItemCard class="m-2  p-3" :product="slotProps.data"/>
      </template>
    </Carousel>

    <!--  <img class="img mb-4 md:mb-6" src="~assets/images/Video.png" alt="">-->
    <p class="text-4xl md:text-6xl mb-4 md:mb-6">Статьи и новости</p>
    <div class="grid row-gap-2 p-0 mb-4 ">
      <div class="col-12 md:col-6 lg:col-4 " v-for="news_item in news">
        <NewsCard :news_item="news_item"/>
      </div>

    </div>
    <div class="flex justify-content-center mb-6 md:mb-8">
      <nuxt-link  to='/news' class="block">
        <Button  outlined rounded size="small" class="customBtn roundedBtn1 roundedBtn2" label="Больше статей и новостей"/>
      </nuxt-link>
    </div>
    <p class="text-4xl md:text-6xl mb-4">Faq</p>
    <div class="mb-6 md:mb-8">
      <Accordion :activeIndex="0" expandIcon="pi pi-plus" collapseIcon="pi pi-minus">
        <AccordionTab v-for="faq in faqs" :key="faq.id">
          <template #header>
                    <span >
                        <p>{{faq.question}}</p>
                    </span>
          </template>
          <p class="mb-3 faq-q grey-color">{{faq.answer}}</p>
          <div class="separator"></div>
        </AccordionTab>
      </Accordion>
    </div>
  </div>
</template>

<style lang="sass">

</style>