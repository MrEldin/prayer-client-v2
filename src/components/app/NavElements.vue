<template> 
    <nav class="px-20 py-4 flex flex-row justify-between">
        <div class="flex flex-row my-5">
            <img :src="getUrl(imagePath)" alt="" />
        </div>
        
        <div class="flex-row justify-between hidden lg:block"> 
            <div class="flex flex-row items-center gap-8 text-white justify-center"> 
                <a href="#tenses" class="hover:text-[#ECD79F] duration-300 text-mds" v-for="navItem in navItems" :key="navItem">{{ navItem }}</a>
                <login-button text="Uloguj se" />
            </div>
        </div>
        <nav-menu />
    </nav>
</template>

<script>
import LoginButton from '../buttons/LoginButton.vue'
import NavMenu from '../hamburger/NavMenu.vue'


export default {
  components: { LoginButton, NavMenu },
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
