<template>
    <div class="flex flex-col max-w-sm gap-4 items-center justify-center px-6 py-10 bg-teal-950 rounded-2xl hover:scale-105 ease-out duration-500">
        <div>
          <img :src="getUrl(image)" alt="" />
        </div>
        <h2 class="text-amber-200 text-xl mt-4">{{ title }}</h2>
        <p class="max-w-7xl text-center text-sm text-slate-200">{{ text }}</p>
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

</style>
