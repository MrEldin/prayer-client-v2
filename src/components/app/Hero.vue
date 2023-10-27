<template>
    <div class="w-full flex md:flex-row items-center justify-center md:overflow-visible">
      <div class="w-1/2 h-screen lg:block hidden"> </div>
      <div class="relative w-1/2 h-full md:overflow-visible">
        <div class="relative lg:absolute xl:my-0 mb-20 mt-8 lg:mt-20 overflow-visible">
          <div class="flex flex-col gap-8 max-w-6xl items-center">
            <h1 class="xl:text-6xl lg:text-2xl text-3xl text-center text-[#ECD79F]">{{ title }}</h1>
            <p class="max-w-md lg:text-md text-sm text-white text-center md:text-left opacity-50 leading-tight md:mr-8">{{ subtitle }}</p>
            <app-store-button image="apple-icon.svg" />
          </div>
        </div>

        <div class="absolute xl:top-1/2 lg:top-60 md:top-1/2 top-16 lg:left-2 lg:right-56 md:mr-4 -left-20">
          <img src="@/assets/star-icons.svg" alt="" class="md:w-32 w-24"/>
        </div>
        <div class="absolute xl:top-1/2 lg:top-40 lg:right-2 md:right-52 -top-2 -right-16 mr-4">
          <img src="@/assets/star-icons-2.svg" alt="" class="lg:w-36 md:w-32 w-24"/>
        </div>
      </div>
    </div>
</template>

<script>
import AppStoreButton from '../buttons/AppStoreButton.vue'


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
