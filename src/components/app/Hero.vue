<template>
  <div class="w-full h-full flex lg:justify-end justify-center">
    <div class="lg:w-1/2 w-full h-full flex md:flex-row items-start justify-center md:overflow-visible">
      <div class="relative w-full h-[400px] mt-[100px] flex md:flex-row items-center justify-center md:overflow-visible mx-10 md:mx-0">
        <div class="overflow-visible flex flex-col gap-8 max-w-6xl items-center">
          <h1 class="dark:text-[#ECD7] 2xl:text-[64px] xl:text-[44px] lg:text-4xl text-[32px] text-center text-[#ECD79F]">{{ title }}</h1>
          <p class="2xl:max-w-lg max-w-sm font-medium xl:text-[18px] lg:text-[16px] md:text-[14px] text-[16px] text-white text-center opacity-50 2xl:leading-[28.13px]">{{ subtitle }}</p>
          <app-store-button image="apple-icon.svg" class="z-10" />
        </div>

        <div class="absolute bottom-0 left-0">
          <img src="@/assets/star-icons.svg" alt="" class="lg:w-32 md:w-32 w-24"/>
        </div>
        <div class="absolute top-0 right-0">
          <img src="@/assets/star-icons-2.svg" alt="" class="lg:w-36 md:w-32 w-24"/>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import AppStoreButton from '@/components/buttons/AppStoreButton.vue';


export default {
  components: { AppStoreButton },
    name: "Hero",
    props: {
        title: String,
        subtitle: String
    }
}
</script>

<style scoped>
h1 {
  font-family: "Ramadanish";
}
</style>
