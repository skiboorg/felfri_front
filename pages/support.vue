<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div class="breadbrumbs mb-6">
      <router-link to="/">Главная</router-link>
      <p>Поддержка</p>
    </div>

    <h1 class="text-6xl mb-4 font-medium">Поддержка</h1>
    <div class="grid mb-8">
      <div class="col-12 md:col-3">
        <div class="grey-block-item w-hover">
          <router-link to="/instructions">
          <div class="grey-block-icon">

            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 13.333H8"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M28 8H4"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M28 18.667H4"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24 24H8"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
          <p class="font-medium mb-2">Инструкции</p>
          <p>Lorem ipsum dolor sit amet consectetur. Eu pharetra ullamcorper sed congue...</p>
          </router-link>
        </div>
      </div>
      <div class="col-12 md:col-3">
        <div class="grey-block-item w-hover">
          <div class="grey-block-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.3327 28L15.9993 21.3333L6.66602 28V6.66667C6.66602 5.95942 6.94697 5.28115 7.44706 4.78105C7.94716 4.28095 8.62544 4 9.33268 4H22.666C23.3733 4 24.0515 4.28095 24.5516 4.78105C25.0517 5.28115 25.3327 5.95942 25.3327 6.66667V28Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </div>
          <p class="font-medium mb-2">Гарантии</p>
          <p>Lorem ipsum dolor sit amet consectetur. Eu pharetra ullamcorper sed congue...</p>
        </div>
      </div>
      <div class="col-12 md:col-3">
        <div class="grey-block-item w-hover">
          <div class="grey-block-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.666 5.33301V13.333H22.666"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.33398 26.667V18.667H9.33398"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M4.68065 11.9998C5.35687 10.0888 6.50616 8.38031 8.02127 7.03367C9.53638 5.68702 11.3679 4.74613 13.345 4.29879C15.3221 3.85144 17.3803 3.91223 19.3276 4.47547C21.2748 5.03872 23.0477 6.08606 24.4807 7.51978L30.6673 13.3331M1.33398 18.6664L7.52065 24.4798C8.95365 25.9135 10.7265 26.9608 12.6737 27.5241C14.621 28.0873 16.6792 28.1481 18.6563 27.7008C20.6334 27.2534 22.4649 26.3125 23.98 24.9659C25.4951 23.6192 26.6444 21.9107 27.3207 19.9998"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
          <p class="font-medium mb-2">Обмен и возврат</p>
          <p>Lorem ipsum dolor sit amet consectetur. Eu pharetra ullamcorper sed congue...</p>
        </div>
      </div>
      <div class="col-12 md:col-3">
        <div class="grey-block-item w-hover">
          <div class="grey-block-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M25.334 1.33301L30.6673 6.66634L25.334 11.9997"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M20 6.66699H30.6667"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M29.3339 22.5605V26.5605C29.3354 26.9318 29.2593 27.2993 29.1106 27.6396C28.9618 27.9798 28.7436 28.2852 28.47 28.5363C28.1964 28.7873 27.8733 28.9784 27.5216 29.0974C27.1698 29.2164 26.7971 29.2605 26.4272 29.2271C22.3243 28.7813 18.3832 27.3793 14.9206 25.1338C11.699 23.0867 8.96768 20.3554 6.92056 17.1338C4.6672 13.6554 3.26489 9.69511 2.82723 5.57379C2.79391 5.20508 2.83773 4.83347 2.9559 4.48262C3.07406 4.13177 3.26399 3.80937 3.51358 3.53595C3.76318 3.26253 4.06697 3.04407 4.40562 2.89448C4.74426 2.7449 5.11035 2.66747 5.48056 2.66712H9.48056C10.1276 2.66075 10.755 2.88989 11.2456 3.31183C11.7362 3.73377 12.0567 4.31972 12.1472 4.96045C12.3161 6.24054 12.6292 7.49742 13.0806 8.70712C13.26 9.18435 13.2988 9.70301 13.1924 10.2016C13.0861 10.7002 12.839 11.1579 12.4806 11.5205L10.7872 13.2138C12.6853 16.5518 15.4492 19.3157 18.7872 21.2138L20.4806 19.5205C20.8431 19.162 21.3008 18.9149 21.7994 18.8086C22.298 18.7022 22.8167 18.7411 23.2939 18.9205C24.5036 19.3719 25.7605 19.685 27.0406 19.8538C27.6883 19.9452 28.2798 20.2714 28.7026 20.7704C29.1254 21.2695 29.3501 21.9066 29.3339 22.5605Z"  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>

          </div>
          <p class="font-medium mb-2">Связаться с нами</p>
          <p>Lorem ipsum dolor sit amet consectetur. Eu pharetra ullamcorper sed congue...</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">

</style>