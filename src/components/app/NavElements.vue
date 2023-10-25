<template> 
    <nav class="px-20 py-4 flex flex-row justify-between">
        <div class="flex flex-row my-5">
        <img :src="getUrl(imagePath)" alt="" />
        </div>

        <div class="flex flex-row items-center gap-8 text-white justify-center"> 
            <a href="#tenses" class="hover:text-[#ECD79F] duration-300 text-mds" v-for="navItem in navItems" :key="navItem">{{ navItem }}</a>
            <app-store-button text="Uloguj se" text2="" class="b" :image1="false" />
        </div>
    </nav>
</template>

<script>
import AppStoreButton from '../buttons/AppStoreButton.vue'


export default {
  components: { AppStoreButton },
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

<style scoped>
    .b {
        border-width: 1px;
        border-radius: 30px;
    }
</style>