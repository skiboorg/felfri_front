<script setup lang="ts">
const route = useRoute()
const {data:product,error, fetchData} = useHttp(`/api/shop/product/${route.params.product_slug}`)

await fetchData()
if (error.value) {
  throw createError({statusCode: 404, statusMessage: 'Страница не найдена', fatal: true})
}

if (route.params.sub_category_slug !== product.value.subcat_slug) {
  throw createError({statusCode: 404, statusMessage: 'Страница не найдена', fatal: true})
}
const images = ref([])
const selectedImgIndex = ref(0)

onBeforeMount(()=>{
  images.value.push({
    image:product.value?.image_main
  })
  images.value.push({
    image:product.value?.image_alt
  })
  product.value?.images.forEach((img)=>{
    images.value.push({
      image:img.image
    })
  })
})

useSeoMeta({
  title:`Felfri - техника для дома | ${product.value.name}`,
  //description:'Felfri - техника для дома. Лучшее качество по доступной цене. Каталог техники для дома, ухода за волосами, для мужчин и ухода за ротовой полостью'
})


</script>

<template>

  <div class="container">
    <div class="breadbrumbs mb-4 md:mb-8">
      <router-link to="/">Главная</router-link>
      <router-link :to="`/catalog/${product.cat_slug}/${product.subcat_slug}`">{{product.cat_name}} / {{product.subcat_name}}</router-link>
      <p>{{product.name}}</p>
    </div>
        <div class="grid mb-4 md:mb-8">
          <div class="col-12 md:col-6">
            <client-only>
              <div class="gallery-wrapper">
                <div class="gallery-main" :style="{'background-image': `url(${images[selectedImgIndex]?.image})`}">
                  <!--                <img :src="images[selectedImgIndex].image" alt="">-->
                </div>
                <div class="gallery-scroller-wrapper">
                  <div class="gallery-scroller">
                    <div class="gallery-scroller-image cursor-pointer"

                         @click="selectedImgIndex=index"
                         :class="{'image-selected':selectedImgIndex===index}" v-for="(img,index) in images">
                      <img :src="img.image"  alt="">
                    </div>
                  </div>
                </div>
              </div>
            </client-only>


<!--            <Galleria :value="images" :numVisible="3" thumbnailsPosition="right" >-->
<!--              <template #item="slotProps">-->
<!--                <img :src="slotProps.item.image" :alt="slotProps.item.alt" class="gallery_img" />-->
<!--              </template>-->
<!--              <template #thumbnail="slotProps">-->
<!--                <div class="grid grid-nogutter justify-content-center">-->
<!--                  <img :src="slotProps.item.image" class="gallery_thumb" />-->
<!--                </div>-->
<!--              </template>-->
<!--            </Galleria>-->
          </div>
      <div class="col-12 md:col-6 pl-2 md:pl-4 lg:pl-8 ">
        <h1 class="text-3xl md:text-5xl mb-4 ">{{product.name}}</h1>
<!--        <p class="text-xs text-gray-300 mb-2">Рекомендованная цена</p>-->

<!--        <p v-if="parseInt(product.show_price) > 0" class="text-3xl mb-4">{{product.show_price}} ₽</p>-->
<!--        <p v-else class="text-3xl mb-4">Ожидается поступление</p>-->
        <div class="mb-4 md:mb-8" v-html="product.description"></div>
<!--        <template v-if="!product.is_in_stock">-->
<!--          <Button class="btnLink" label="Нет в наличии"/>-->
<!--        </template>-->
<!--        <template v-else-if="product.is_arrive">-->
<!--          <Button class="btnBlue "   label="В пути"/>-->
<!--        </template>-->
        <div class="flex gap-3 flex-wrap">
          <a  :id="route.params.product_slug + '_ozon'"
              class="p-button p-component p-button-text btnLink btnBlue w-full md:w-auto block"
              href="https://www.ozon.ru/seller/felfri-802356/products/?miniapp=seller_802356">
          Мы на Ozon
          </a>
          <a  :id="route.params.product_slug + '_wb'"
              class="p-button p-component p-button-text btnLink px-8 w-full md:w-auto block"
              href="https://www.wildberries.ru/brands/310412467-felfri">
            Мы на WB
          </a>
        </div>


      </div>
        </div>

    <p class="text-2xl md:text-4xl mb-4">Характеристики</p>
    <div class="grid mb-4 md:mb-8 align-items-start">
      <div class="col-12 md:col-10">
        <div class="grid">
          <div class="col-12 md:col-3" v-for="feature in product.features">
            <p class="mb-2 font-medium">{{feature.label}}</p>
            <p class="small-card-top mb-0">{{feature.value}}</p>
          </div>
        </div>
      </div>
      <div v-if="product.file" class="col-12 md:col-2">
        <a :href="product.file" target="_blank">
          <Button outlined label="Скачать инструкцию" icon="pi pi-download" class="customBtn downloadBtn"/>
        </a>

      </div>
    </div>
<!--    <iframe class="iframe mb-4 md:mb-8" src="https://www.youtube.com/embed/Iud-CGC42ns?si=DmEOTcVBrNSeZ7Uz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>-->
    <p class="text-2xl md:text-4xl mb-4">Комплектация</p>

        <div class="grid mb-4 md:mb-8">
          <div class="col-12 sm:col-6 md:col-3" v-for="complect in product.complects">
           <div class="flex align-items-center gap-2">
             <img :src="complect.image" alt="">
             <div class="">
               <p class="mb-2 font-medium">{{complect.label}}</p>
               <p class="small-card-top mb-0">{{complect.value}}</p>
             </div>
           </div>
          </div>
        </div>

        <template v-if="product.youtube_embed_code">
<!--          <iframe class="video" :src="`https://www.youtube.com/embed/${product.youtube_embed_code}`" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>-->
          <iframe class="video" :src="`https://vk.com/video_ext.php?${product.youtube_embed_code}&hd=2&js_api=1`"  allow="autoplay; encrypted-media; fullscreen; picture-in-picture;" frameborder="0" allowfullscreen ></iframe>
        </template>


    <template v-for="block in product.text_blocks">
      <div v-if="block.is_image_right" class="grid align-items-center mb-4 md:mb-6">
        <div class="col-12 md:col-6  md:px-8 flex-order-1 md:flex-order-1" v-html="block.html_content"></div>
        <div class="col-12 md:col-6 flex-order-0 md:flex-order-2">
          <img class="img rounded" :src="block.image" alt="">
        </div>
      </div>
      <div v-else class="grid align-items-center mb-4 md:mb-6">
        <div class="col-12 md:col-6">
          <img class="img rounded"  :src="block.image" alt="">
        </div>
        <div class="col-12 md:col-6  md:px-8" v-html="block.html_content"></div>
      </div>
    </template>





  </div>
</template>

<style scoped lang="sass">

</style>