<template>
<div class="flex items-center justify-center flex-col py-20 bg-[#E8FFFC]"> 
  <div class="pt-32 flex md:flex-row flex-col gap-40" :class="{'md:flex-row-reverse': left == false}"> 
    <div> 
      <img :src="getUrl(image)" alt="" />
    </div>
    <div class="flex flex-col last:items-end"> 
      <h1 class="text-4xl text-teal-950 font-bold mb-6">{{ header }}</h1>
      <p class="max-w-sm text-md text-zinc-400 leading-tight mb-6">{{ para1 }}</p>
      <p class="max-w-sm text-md text-zinc-400 leading-tight mb-6">{{ para2 }}</p>
      <p class="max-w-sm text-md text-zinc-400 leading-tight mb-6">{{ para3 }}</p>
      
      <app-store-button image="apple-icon.svg" />
    </div>
  </div>
</div> 
</template>
  
<script> 
import AppStoreButton from '../buttons/AppStoreButton.vue'

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