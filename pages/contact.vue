<script setup lang="ts">
const config = useRuntimeConfig()
const subjects = [
  {name:'тема1',val:'тема1'}   ,
  {name:'тема2',val:'тема2'}   ,
  {name:'тема3',val:'тема3'}   ,
  {name:'тема4',val:'тема4'}   ,
]

const loading = ref(false)
const isSent = ref(false)
const errorMsg = ref('')
const formData=ref({
  name:null,
  email:null,
  phone:null,
  subject:null,
  text:null,
  file:null,
})


const fileSelected = (e) => {
  formData.value.file = e.files[0]
}
const formSubmit = async () => {
  loading.value = !loading.value
  errorMsg.value = ''
  let fd = new FormData()
  for (let [k,v] of Object.entries(formData.value)){
    v ? fd.append(k,v) : null
  }
  const {data, pending, error, refresh} = await useFetch(config.public.APIURL + `/api/data/form`,{
    method: 'POST',
    body: fd
  })
  if (error?.value?.data){
    for (let [k,v] of Object.entries(error?.value?.data)){
      console.log(k,v)
      errorMsg.value += `${v[0]}<br>`
    }
  }else {
    isSent.value = true
  }
  for (let [k,v] of Object.entries(formData.value)){
    formData.value[k] = null
  }
  loading.value = !loading.value

}
</script>

<template>
  <div class="container mb-4 md:mb-8">
    <div class="breadbrumbs mb-4 md:mb-6">
      <router-link to="/">Главная</router-link>
      <p>Связаться с нами</p>
    </div>

    <h1 class="text-4xl md:text-6xl mb-4 ">Связаться с нами</h1>
    <p class="mb-4 md:mb-6 max-w-half line-height-3">
      В FELFRI мы высоко ценим каждого клиента и стремимся оказывать максимально качественный сервис. Если у вас возникли вопросы, проблемы или пожелания, связанные с нашей продукцией, мы всегда рады помочь!<br><br>
      Воспользуйтесь формой обратной связи ниже, и наша квалифицированная служба поддержки оперативно рассмотрит ваше обращение. Мы также доступны по следующим контактам:
    </p>

    <div  class="grid">
      <div v-if="!isSent" class="col-12 md:col-8">
        <InputText size="" placeholder="Ваше имя*" class="w-full mb-3" v-model="formData.name"/>
        <InputText placeholder="E-mail*" class="w-full mb-3" v-model="formData.email"/>
        <InputText placeholder="Контактный номер*" class="w-full mb-3" v-model="formData.phone"/>
        <Dropdown :options="subjects" option-label="name" option-value="val" v-model="formData.subject" placeholder="Выберите тему сообщения" class="w-full mb-3" />
        <Textarea placeholder="Введите ваше сообщение" class="w-full mb-4 md:mb-6" v-model="formData.text"/>
        <div class="grid">
          <div v-if="errorMsg" class="col-12">
            <span class="text-red-500" v-html="errorMsg"></span>

          </div>
          <div class="col-12 md:col-4"><FileUpload  mode="basic" chooseLabel="Прикрепите файл" class=" btnBlue w-full" accept="image/*" @select="fileSelected"/></div>
          <div class="col-12 md:col-8"><Button label="Отправить"

                                               :loading="loading" @click="formSubmit" class="w-full btnBlue"/></div>
<!--          :disabled="!formData.name ||!formData.email ||!formData.phone"-->
        </div>



      </div>
      <div v-else class="col-12 md:col-8 text-6xl mb-4  text-green-500">Сообщение отправлено</div>
      <div class="col-12 md:col-4">
        <div class="grey-block p-5 h-full">
          <p class="text-3xl mb-4 ">Тех поддержка</p>
          <p class="grey-color mb-3">Ежедневно<br>с 8:30 до 20:30</p>
          <div class="separator mb-3"></div>
          <p class="grey-color mb-3"><a class="text-primary" href="tel:">+7 989 580 24 32</a> </p>
          <div class="separator mb-4 md:mb-6"></div>
          <p class="text-3xl mb-4 ">Единая линия для обращений</p>
          <p class="grey-color mb-3">Ежедневно<br>с 8:30 до 20:30</p>
          <div class="separator mb-3"></div>
          <p class="grey-color mb-3"><a class="text-primary" href="tel:">+7 989 580 24 32</a></p>
          <div class="separator "></div>
        </div>
      </div>
    </div>
    <p class="mb-4 md:mb-6 max-w-half line-height-3">
      Не стесняйтесь связываться с нами при любых обстоятельствах. Будь то гарантийный случай, сложности с заказом, пожелания по ассортименту или другие вопросы - мы обязательно найдем оптимальное решение и поможем разрешить любую проблему.<br><br>
      Ваша лояльность к бренду FELFRI - наш главный приоритет. Мы ценим ваш выбор и сделаем все возможное, чтобы вы остались довольны сотрудничеством с нами на все 100%!
    </p>
  </div>

</template>

<style scoped lang="sass">

</style>