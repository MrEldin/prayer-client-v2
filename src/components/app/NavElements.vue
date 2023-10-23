<template> 
    <nav class="px-20 py-4 flex flex-row justify-between">
          <div class="flex flex-row my-5">
            <img :src="getUrl(imagePath)" alt="" />
          </div>

          <div class="md:flex flex-row items-center gap-8 text-white justify-center text-sm" > 
            <a href="#tenses" class="hover:text-teal-400 duration-300" v-for="navItem in navItems" :key="navItem">{{ navItem }}</a>
          </div>
    </nav>
</template>

<script>


export default {
    name: "NavElements",
    data() {
        return {
            imagePath: 'logo.svg'
        }
    },
    props: {
        navItems: {
            type: Array,
            default: [],
            required: false
        }
    },
    methods: {
        getUrl(image) {
            return new URL(`/src/assets/${image}`,import.meta.url).href
        }
    }
}
</script>