<script setup lang="ts">
const config = useRuntimeConfig()
import { useNews } from '@/composables/useNews'
const { tags } = useNews()
const selected_tag = ref('')
const current_page = ref(1)

const updateSelectedTag = (tag) => {
  selected_tag.value = tag
  current_page.value = 1
}

const url = computed(() => config.public.APIURL + `/api/news/all?tag=${selected_tag.value}&page=${current_page.value}`);
const { data:news, pending:is_loading, refresh } = await useFetch(url)



</script>

<template>
  <div class="container">
    <div class="breadbrumbs mb-6">
      <router-link to="/">Главная</router-link>
      <p>Статьи</p>
    </div>
    <h1 class="text-6xl mb-4 font-medium">Статьи</h1>
    <div class="flex gap-2 flex-wrap mb-6">
      <Button   rounded size="small" :class="{selected:selected_tag===''}" class="customBtn roundedBtn2"
                label="#все" @click='updateSelectedTag("")'/>
      <Button   rounded size="small" :class="{selected:selected_tag===tag.slug}" class="customBtn roundedBtn2" v-for="tag in tags" :key="tag.id"
               :label="`#${tag.name}`" @click='updateSelectedTag(tag.slug)'/>
    </div>
    <div class="grid">
      <div class="col-12 md:col-6 lg:col-4 mb-6" v-for="news_item in news.results">
        <NewsCard :news_item="news_item"/>
      </div>
    </div>
<!--    <div class="">-->
<!--      <Paginator-->

<!--          :rows="40"-->
<!--          :totalRecords="120">-->
<!--      </Paginator>-->
<!--    </div>-->
  </div>
</template>

<style scoped lang="sass">

</style>