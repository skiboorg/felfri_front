<script setup lang="ts">

</script>

<template>
  <div class="container mb-8">
    <div class="breadbrumbs mb-6">
      <router-link to="/">Главная</router-link>
      <p>Связаться с нами</p>
    </div>

    <h1 class="text-6xl mb-4 font-medium">Связаться с нами</h1>
    <p class="mb-6 max-w-half line-height-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab autem beatae cum delectus distinctio doloribus dolorum eius error esse est exercitationem libero minus molestiae nihil odio officia quaerat quasi qui quia quo quos, sint sit veritatis vitae voluptatibus? Corporis dolorem eius error hic id labore nobis provident quos voluptas voluptate.</p>

    <div class="grid">
      <div class="col-12 md:col-8">
        <InputText size="" placeholder="Ваше имя" class="w-full mb-3"/>
        <InputText placeholder="E-mail" class="w-full mb-3"/>
        <InputText placeholder="Контактный номер" class="w-full mb-3"/>
        <Dropdown placeholder="Выберите тему сообщения" class="w-full mb-3" />
        <Textarea placeholder="Введите ваше сообщение" class="w-full mb-6"/>
        <Button label="Отправить" class="w-full btnBlue"/>

      </div>
      <div class="col-12 md:col-4">
        <div class="grey-block p-5 h-full">
          <p class="text-3xl mb-4 font-medium">Тех поддержка</p>
          <p class="grey-color mb-3">Ежедневно<br>с 8:30 до 20:30</p>
          <div class="separator mb-3"></div>
          <p class="grey-color mb-3">+7 989 580 24 32</p>
          <div class="separator mb-6"></div>
          <p class="text-3xl mb-4 font-medium">Единая линия для обращений</p>
          <p class="grey-color mb-3">Ежедневно<br>с 8:30 до 20:30</p>
          <div class="separator mb-3"></div>
          <p class="grey-color mb-3">+7 989 580 24 32</p>
          <div class="separator "></div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="sass">

</style>