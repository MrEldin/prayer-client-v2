<template>
    <div class="flex flex-col h-[420px] max-w-sm gap-4 items-center justify-center px-6 py-10 bg-[#143037] dark:bg-[#303A3F] rounded-2xl hover:scale-105 ease-out duration-500">
        <div>
          <img :src="getUrl(image)" alt="" />
        </div>
        <h2 class="text-[#ECD79F] dark:text-[#FF9375] text-[24px] mt-4">{{ title }}</h2>
        <p class="max-w-7xl text-center text-sm text-white opacity-[76%]">{{ text }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        image: String,
        text: String
    },
    methods: {
        getUrl(image) {
            return new URL(`/src/assets/${image}`,import.meta.url).href
        }
    }
}
</script>

<style> 
 h2, p {
    font-family: 'Roboto';
 }
</style>
