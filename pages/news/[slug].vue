<script setup lang="ts">
const config = useRuntimeConfig()
const route = useRoute()
const { data:news_item, pending:is_loading, refresh } = await useFetch(config.public.APIURL + `/api/news/all/${route.params.slug}`)
</script>

<template>
  <div class="container">
    <div class="breadbrumbs mb-6">
      <router-link to="/">Главная</router-link>
      <router-link to="/news">Статьи</router-link>
      <p>Статья</p>
    </div>
    <h1 class="text-6xl mb-4 font-medium">{{news_item.name}}</h1>
    <div class="mb-6">
      <p class="font-medium"> <span class="grey-color">
          Время чтения {{news_item.time_to_read}} | {{new Date(news_item.created).toLocaleDateString()}} |</span>
        <span class="tag">#{{news_item.tag.name}}</span></p>
    </div>
    <div class="mb-6" v-html="news_item.html_content"></div>

    <div class="" v-for="block in news_item.content_blocks">

      <div class="mb-6" v-if="block.type.slug === 'odna-kartinka'">
        <img class="img" :src="block.image_big" alt="">
      </div>
      <div class="grid mb-6" v-else-if="block.type.slug === '2-teksta'">
        <div class="col-12 md:col-6" v-html="block.html_content1"></div>
        <div class="col-12 md:col-6" v-html="block.html_content2"></div>
      </div>
      <div class="grid mb-6 align-items-center" v-else-if="block.type.slug === 'kartinka-tekst'">
        <div class="col-12 md:col-6" ><img class="img" :src="block.image" alt=""></div>
        <div class="col-12 md:col-6" v-html="block.html_content1"></div>
      </div>
      <div class="grid mb-6 align-items-center" v-else-if="block.type.slug === 'tekst-kartinka'">
        <div class="col-12 md:col-6" v-html="block.html_content1"></div>
        <div class="col-12 md:col-6" ><img class="img" :src="block.image" alt=""></div>

      </div>
    </div>
  </div>


</template>

<style scoped lang="sass">

</style>