<script setup lang="ts">
import {useHttp} from "~/composables/useHttp";

const {$api} = useNuxtApp()
const auth_token = useCookie('auth_token')

definePageMeta({
  layout: 'auth'
})

const errors = ref('')
const visibleForm = ref('login')
const loading = ref(false)
const is_registered = ref(false)
const codeSend = ref(false)
const otp = ref(null)
const loginData = reactive({
  phone:null,
  password:null
})
const registerData = reactive({
  fio:null,
  phone:null,
  email:null,
  password:null,
  password1:null,
})

const can_login = computed(()=>{
  return !!loginData.phone && !!loginData.password
})
const can_register = computed(()=>{
  return !!registerData.phone && !!registerData.password && !!registerData.password1 && !!registerData.fio && registerData.password === registerData.password1
})

const login = async ()=>{
  errors.value = ''
  loading.value = true
  try{
    const {auth_token:token} = await $api('/auth/token/login/',
        {
          method:'post',
          body:loginData
        })

    auth_token.value = token
    navigateTo('/profile')
    loading.value = false
  }catch (e) {
    errors.value = 'Невозможно войти с предоставленными учетными данными.'
    loading.value = false
  }
}
const sendCode = async ()=>{
  codeSend.value = true
  const result = await $api(`/api/user/send_code?phone=${registerData.phone}`)
  console.log(result)
}
const register = async ()=>{
  errors.value = ''
  loading.value = true
  try{
    let result = {success:false, errors:null}

    const response = await $api('/auth/users/', {
      method: 'post',
      body: registerData
    })
    is_registered.value = true
    loading.value = false
  }catch (e){
    console.log(e.data)
    for (let k of Object.entries(e.data)){
      errors.value += `${k[1][0]}`
    }
    loading.value = false
  }
}

</script>


<template>

<div style="height:80vh" class="flex w-full align-items-center justify-content-center">

<div class="auth-form" v-if="visibleForm==='login'">
  <p class="text-4xl font-medium mb-4 text-center">Авторизация</p>


  <InputMask v-model="loginData.phone" class="w-full mb-3" mask="+7 (999) 999-99-99" placeholder="+7 (999) 999-99-99" />
  <InputText v-model="loginData.password" placeholder="Пароль*" class="w-full mb-3" />
  <p class="font-bold text-sm text-black-alpha-30 text-center cursor-pointer mb-3">Забыли пароль?</p>
  <p v-if="errors" class="text-red-500 mb-3 font-bold text-center">{{errors}}</p>
  <Button label="Войти" :disabled="!can_login" :loading="loading" @click="login"  class="w-full btnBlue mb-3"/>
  <p class="font-bold text-sm text-black-alpha-30 text-center  ">Нет аккаунта?
    <span class="text-primary cursor-pointer" @click="visibleForm='register'">Зарегистрироваться</span></p>
</div>
  <div class="auth-form" v-if="visibleForm==='register'">

  <p class="text-4xl font-medium mb-4 text-center">Регистрация аккаунта</p>
    <template v-if="codeSend">
      <p class="text-2xl text-center mb-3">Введите код подтверждения</p>
      <InputNumber  class="w-full mb-3" input-class="text-center" v-model="otp" inputId="withoutgrouping" :useGrouping="false" />
      <p v-if="errors" class="text-red-500 mb-3 font-bold text-center">{{errors}}</p>
      <p v-if="is_registered" class="text-green-500 mb-3 font-bold text-center">Успешная регистрация</p>
      <Button v-if="!is_registered" label="Регистрация" :loading="loading" :disabled="!can_register"  @click="register"  class="w-full btnBlue mb-3"/>
    </template>
    <template v-else>

      <InputText v-model="registerData.fio" placeholder="ФИО*" class="w-full mb-3" />

      <InputMask v-model="registerData.phone" class="w-full mb-3" mask="+7 (999) 999-99-99" placeholder="+7 (999) 999-99-99" />
      <InputText v-model="registerData.email" placeholder="Email" class="w-full mb-3" />
      <InputText v-model="registerData.password" placeholder="Пароль*" class="w-full mb-3" type="password" />
      <InputText v-model="registerData.password1" placeholder="Повторите пароль*" class="w-full mb-3" type="password"/>

<!--      <Button  label="Получить код" :loading="loading" :disabled="!can_register"  @click="sendCode"  class="w-full btnBlue mb-3"/>-->
      <p v-if="errors" class="text-red-500 mb-3 font-bold text-center">{{errors}}</p>
      <p v-if="is_registered" class="text-green-500 mb-3 font-bold text-center">Успешная регистрация</p>
      <Button v-if="!is_registered" label="Регистрация" :loading="loading" :disabled="!can_register"  @click="register"  class="w-full btnBlue mb-3"/>
      <p class="font-bold text-sm text-black-alpha-30 text-center  ">Уже есть аккаунт?
        <span class="text-primary cursor-pointer" @click="visibleForm='login'">Войти</span></p>
    </template>


</div>
</div>
</template>

<style scoped lang="sass">

</style>