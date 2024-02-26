<script setup lang="ts">
const product = ref([])
const route = useRoute()
const images = ref([])
const resp = await useFetch(`http://79.132.139.110:8000/api/shop/product/${route.params.product_slug}`)
product.value = resp.data.value

images.value.push({
  image:product.value.image_main
})
images.value.push({
  image:product.value.image_alt
})

product.value.images.forEach((img)=>{
  console.log(img)
  images.value.push({
    image:img.image
  })
})



</script>

<template>

  <div class="container">
    <div class="breadbrumbs mb-8">
      <router-link to="/">Главная</router-link>
      <router-link to="/catalog">Каталог</router-link>
      <p>Товар</p>
    </div>



        <div class="grid mb-8">
          <div class="col-6">
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



      <div class="col-12 md:col-6">
        <p class="text-6xl mb-4">{{product.name}}</p>
        <p class="text-3xl mb-4">{{product.price}} ₽</p>
        <p class="text-gray-400 mb-8">{{product.description}}</p>
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
      <div class="col-12 md:col-2">
        <Button outlined label="Скачать инструкцию" icon="pi pi-download" class="customBtn"/>
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

    <div class="grid align-items-center mb-6">
      <div class="col-12 md:col-6">
        <img class="img" src="~assets/images/test.png" alt="">
      </div>
      <div class="col-12 md:col-6 px-0 md:px-8">
        <p class="text-6xl">Lorem ipsum dolor.</p>
        <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis dicta dolor labore molestiae officia quia quis, quo quos recusandae reprehenderit sapiente totam veritatis! Distinctio facilis itaque voluptates. Adipisci, optio?</p>
      </div>
    </div>
    <div class="grid align-items-center mb-6">
      <div class="col-12 md:col-6 px-0 md:px-8">
        <p class="text-6xl">Lorem ipsum dolor.</p>
        <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis dicta dolor labore molestiae officia quia quis, quo quos recusandae reprehenderit sapiente totam veritatis! Distinctio facilis itaque voluptates. Adipisci, optio?</p>
      </div>
      <div class="col-12 md:col-6">
        <img class="img" src="~assets/images/test.png" alt="">
      </div>
    </div>
    <div class="grid align-items-center mb-8">
      <div class="col-12 md:col-6">
        <img class="img" src="~assets/images/test.png" alt="">
      </div>
      <div class="col-12 md:col-6 px-0 md:px-8">
        <p class="text-6xl">Lorem ipsum dolor.</p>
        <p class="text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda corporis dicta dolor labore molestiae officia quia quis, quo quos recusandae reprehenderit sapiente totam veritatis! Distinctio facilis itaque voluptates. Adipisci, optio?</p>
      </div>
    </div>


  </div>
</template>

<style scoped lang="sass">

</style>