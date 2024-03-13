<script setup lang="ts">
const route = useRoute()
const {data:product, fetchData} = useHttp(`/api/shop/product/${route.params.product_slug}`)
await fetchData()


const images = ref([])

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
</script>

<template>

  <div class="container">
    <div class="breadbrumbs mb-8">
      <router-link to="/">Главная</router-link>
      <router-link :to="`/catalog/${product.cat_slug}/${product.subcat_slug}`">{{product.cat_name}}</router-link>

      <p>{{product.name}}</p>
    </div>
        <div class="grid mb-8">
          <div class="col-12 md:col-6">
            <Galleria :value="images" :numVisible="5" thumbnailsPosition="right" >
              <template #item="slotProps">
                <img :src="slotProps.item.image" :alt="slotProps.item.alt" class="gallery_img" />
              </template>
              <template #thumbnail="slotProps">
                <div class="grid grid-nogutter justify-content-center">
                  <img :src="slotProps.item.image" class="gallery_thumb" />
                </div>
              </template>
            </Galleria>
          </div>
      <div class="col-12 md:col-6 md:pl-8 ">
        <p class="text-6xl mb-4">{{product.name}}</p>
        <p class="text-3xl mb-4">{{product.price}} ₽</p>
        <div class="mb-8" v-html="product.description"></div>
        <div class="flex gap-4">
          <a :href="product.ozon_link">
            <Button class="btnBlue " label="Купить на Ozon"/>
          </a>
          <a :href="product.wb_link">
          <Button class="btnLink "  text label="Купить на WB"/>
          </a>
        </div>

      </div>
        </div>

    <p class="text-6xl mb-4">Характеристики</p>
    <div class="grid mb-8">
      <div class="col-12 md:col-10">
        <div class="grid">
          <div class="col-12 md:col-3" v-for="feature in product.features">
            <p class="font-semibold mb-2 ">{{feature.label}}</p>
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
<!--    <iframe class="iframe mb-8" src="https://www.youtube.com/embed/Iud-CGC42ns?si=DmEOTcVBrNSeZ7Uz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>-->
    <p class="text-6xl mb-4">Комплектация</p>

        <div class="grid mb-8">
          <div class="col-12 sm:col-6 md:col-3" v-for="complect in product.complects">
           <div class="flex align-items-center gap-2">
             <img :src="complect.image" alt="">
             <div class="">
               <p class="text-lg font-medium mb-2">{{complect.label}}</p>
               <p class="small-card-top mb-0">{{complect.value}}</p>
             </div>
           </div>
          </div>
        </div>

    <template v-for="block in product.text_blocks">
      <div v-if="block.is_image_right" class="grid align-items-center mb-6">
        <div class="col-12 md:col-6 px-0 md:px-8 md:flex-order-1" v-html="block.html_content"></div>
        <div class="col-12 md:col-6 md:flex-order-2">
          1
          <img class="img" :src="block.image" alt="">
        </div>
      </div>
      <div v-else class="grid align-items-center mb-6">
        <div class="col-12 md:col-6">
          <img class="img" :src="block.image" alt="">
        </div>
        <div class="col-12 md:col-6 px-0 md:px-8" v-html="block.html_content"></div>
      </div>
    </template>





  </div>
</template>

<style scoped lang="sass">

</style>