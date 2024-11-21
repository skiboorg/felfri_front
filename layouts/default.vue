<template>
  <Header/>
   <main>
    <slot />
     <Footer/>
  </main>


</template>
<script setup lang="ts">
useSeoMeta({
  title:'Felfri - техника для дома',
  description:'Felfri - техника для дома. Лучшее качество по доступной цене. Каталог техники для дома, ухода за волосами, для мужчин и ухода за ротовой полостью'
})

useHead({
  // meta: [
  //   {
  //     name: 'yandex-verification',
  //     content: '4cd699da1cb50903'
  //   },
  // ],
  script: [
    {
      src: "https://vk.com/js/api/videoplayer.js",
      type: "text/javascript",
      //async: true,
    }
  ],
});
</script>