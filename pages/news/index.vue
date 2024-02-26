<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="breadbrumbs mb-6">
      <router-link to="/">Главная</router-link>
      <p>Статьи</p>
    </div>
    <h1 class="text-6xl mb-4 font-medium">Статьи</h1>
    <div class="flex gap-2 flex-wrap mb-6">
      <Button  outlined rounded size="small" class="customBtn roundedBtn2" v-for="i in 20" label="#новости"/>
    </div>
    <div class="grid">
      <div class="col-12 md:col-4 mb-6" v-for="i in 10">
        <img class="img" src="https://placehold.co/600x400" alt="">
        <p class="font-medium text-xl mb-2">Заголовок</p>
        <p class="mb-2">Lorem ipsum dolor sit amet consectetur. Eu pharetra ullamcorper sed congue...</p>
        <p class="font-medium"> <span class="grey-color">Время чтения 5 мин | 19.02.24 |</span>  <span class="tag">#бытоваятехника</span></p>
      </div>
    </div>
    <div class="">
      <Paginator

          :rows="40"
          :totalRecords="120">
      </Paginator>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>