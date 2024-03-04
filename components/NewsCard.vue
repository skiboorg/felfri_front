<template>
  <router-link :to="`/news/${news_item.slug}`">
    <img class="news-img mb-4" :src="news_item.image" alt="">
    <p class="font-medium text-xl mb-3">{{news_item.name}}</p>
    <p class="mb-3">{{news_item.description}}</p>
    <p class="font-medium"> <span class="grey-color">
          Время чтения {{news_item.time_to_read}} | {{new Date(news_item.created).toLocaleDateString()}} |</span>
      <span class="tag">#{{news_item.tag.name}}</span></p>
  </router-link>
</template>

<script setup>
defineProps(['news_item'])
</script>