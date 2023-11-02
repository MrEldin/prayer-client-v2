<template>
<div class="flex items-center justify-center flex-col py-4 bg-[#E8FFFC] dark:bg-[#22292C] px-20"> 
  <div class="pt-20 flex lg:flex-row flex-col lg:gap-32 gap-10" :class="{'lg:flex-row-reverse': left == false}"> 
    <div class="flex flex-col items-center justify-center"> 
      <img :src="getUrl(image)" alt="" />
    </div>
    <div class="flex flex-col gap-8">
      <div class="flex flex-col font-normal gap-6 text-center lg:text-left"> 
        <h1 class="xl:text-[64px] lg:text-[44px] md:text-[32px] text-[32px] max-w-[544px] lg:leading-[77.12px] text-[#15353B] dark:text-[#FF9375]">{{ header }}</h1>
        <p class="xl:text-[20px] lg:text-[18px] text-[16px] max-w-[544px] text-[#15353B] dark:text-[#A4A4A4] opacity-60 lg:leading-[23.44px] font-[400]">{{ para1 }}</p>
        <p class="xl:text-[20px] lg:text-[18px] text-[16px] max-w-[544px] text-[#15353B] dark:text-[#A4A4A4] opacity-60 lg:leading-[23.44px] font-[400]">{{ para2 }}</p>
        <p class="xl:text-[20px] lg:text-[18px] text-[16px] max-w-[544px] text-[#15353B] dark:text-[#A4A4A4] opacity-60 lg:leading-[23.44px] font-[400]">{{ para3 }}</p>
      </div>
      <div class="flex justify-center" :class="{'lg:justify-start': left == false, 'lg:justify-end': left == true }"> 
        <app-store-button image="apple-icon.svg" />
      </div>
    </div>
  </div>
</div> 
</template>
  
<script> 
import AppStoreButton from '@/components/buttons/AppStoreButton.vue';

export default {
  components: { AppStoreButton },
    name: 'ArtificialIntelligence',
    props: {
        image: String,
        header: String,
        para1: String,
        para2: String,
        para3: String,
        left: Boolean
    },
    methods: {
        getUrl(image) {
            return new URL(`/src/assets/${image}`,import.meta.url).href
        }
    }
}
</script>

<style scoped>
h1 {
  font-family: "Ramadanish";
}
</style>