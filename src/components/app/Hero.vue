<template> 
    <div class="w-full flex flex-row">
          <div class="w-1/2 h-screen"> </div>
          <div class="relative w-1/2"> 
            <div class="absolute md:top-72 md:right-20 top-1/4 right-6">
              <div> 
                <h1 class="md:text-4xl text-2xl text-amber-200 font-bold mb-6">{{ title }}</h1>
                <p class="max-w-sm md:text-md text-sm text-zinc-200 leading-tight mb-6">{{ subtitle }}</p>
              </div>
              <app-store-button image="apple-icon.svg" />
      
            </div>
            <div class="absolute md:top-72 top-1/2 md:left-20 right-56 mr-4"> 
              <img src="@/assets/star-icons.svg" alt="" class="md:w-40 w-20"/>
            </div>
            <div class="absolute md:top-40 md:right-20 right-56 mr-4"> 
              <img src="@/assets/star-icons-2.svg" alt="" class="md:w-40 w-20"/>
            </div>
          </div>
        </div>
</template>

<script>
import AppStoreButton from './AppStoreButton.vue'


export default {
  components: { AppStoreButton },
    name: "Hero",
    props: {
        title: String,
        subtitle: String
    }
}
</script>