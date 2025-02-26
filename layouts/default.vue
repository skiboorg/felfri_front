<template>
  <Header/>
   <main>
    <slot />
     <Footer/>
  </main>
  <Dialog v-model:visible="showModal" modal :closable="false" :close-on-escape="false"  :style="{ width: '25rem' }">
    <span class="p-text-secondary block mb-3">Мы используем файлы cookie для корректной работы сайта.
      Продолжая посещения сайта вы соглашаетесь на использование файлов cookie</span>

    <div class="flex justify-content-end gap-2">
      <Button type="button" label="Согласен" severity="primary" @click="confirm"></Button>

    </div>
  </Dialog>

</template>
<script setup lang="ts">
useSeoMeta({
  title:'Felfri - техника для дома',
  description:'Felfri - техника для дома. Лучшее качество по доступной цене. Каталог техники для дома, ухода за волосами, для мужчин и ухода за ротовой полостью'
})
const showModal = ref(false)
const agree = useCookie('agree')
const confirm = ()=>{
  showModal.value = false
  agree.value = 'agree'
}

onBeforeMount(()=>{
  console.log(agree.value)
  if (!agree.value){
    showModal.value = true
  }
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