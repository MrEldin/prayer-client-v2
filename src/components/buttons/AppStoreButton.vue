<template> 
    <button class="px-12 py-2 bg-[#0B3539] border rounded-full border-amber-200 flex flex-row gap-5 justify-center items-center hover:scale-105 duration-300" :class="b">
        <div>
          <img :src="getUrl(image)" alt="" class="w-5" :class="image1"/>
        </div>
        <div class="flex flex-col items-start text-[#ECD79F]">
            <p class="text-center text-xs">{{ text }}</p>
            <p class="text-sm font-bold">{{ text2 }}</p>
        </div>
    </button>
</template>

<script>
export default {
    name: 'AppStoreButton',
    props: {
        image: {
            type: String,
         },
         image1: {
            type: Boolean,
            default: true
         },
         text: {
            type: String,
            default: "Preuzmi na"
         },
         text2: {
            type: String,
            default: "App Store"
         },
         b: {
            type: String,
            default: "border"
         }
    },
    methods: {
        getUrl(image) {
            return new URL(`/src/assets/${image}`,import.meta.url).href
        }
    }
}
</script>

<style scoped>
 .border {
    border-width: 3px
 }
</style>