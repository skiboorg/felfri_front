<template>
  <Header/>
  <main>
    <slot />

  </main>


</template>
<script setup lang="ts">
useSeoMeta({
  title:'Felfri - техника для дома',
  description:'Felfri - техника для дома. Лучшее качество по доступной цене. Каталог техники для дома, ухода за волосами, для мужчин и ухода за ротовой полостью'
})
</script>