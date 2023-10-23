<template> 
  <div class="px-20 pt-32 flex md:flex-row flex-col gap-36 bg-[#E8FFFC]" :class="{'md:flex-row-reverse': left == false}"> 
    <div> 
      <img :src="getUrl(image)" alt=""/>
    </div>
    <div> 
      <h1 class="text-4xl text-teal-950 font-bold mb-6">{{ header }}</h1>
      <p class="max-w-sm text-md text-zinc-400 leading-tight mb-6">{{ para1 }}</p>
      <p class="max-w-sm text-md text-zinc-400 leading-tight mb-6">{{ para2 }}</p>
      <p class="max-w-sm text-md text-zinc-400 leading-tight mb-6">{{ para3 }}</p>
      
      <app-store-button image="apple-icon.svg" />
    </div>
  </div>
</template>
  
<script> 
import AppStoreButton from './AppStoreButton.vue'

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