<template> 
    <button class="md:px-12 px-8 py-2 bg-[#0B3539] rounded-full border-[#ECD79F] border-[3px] flex flex-row gap-5 justify-center items-center hover:scale-105 duration-300">
        <div>
          <img :src="getUrl(image)" alt="" class="w-5"/>
        </div>
        <div class="flex flex-col items-start text-[#ECD79F]">
            <p class="text-center text-[10px]">{{ text }}</p>
            <p class="md:text-sm text-xs font-bold">{{ text2 }}</p>
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
         text: {
            type: String,
            default: "Preuzmi na"
         },
         text2: {
            type: String,
            default: "App Store"
         },
        
    },
    methods: {
        getUrl(image) {
            return new URL(`/src/assets/${image}`,import.meta.url).href
        }
    }
}
</script>
