<template> 
    <nav class="w-full px-20 py-4 flex flex-row justify-between">
        <div class="flex flex-row my-5">
            <img :src="getUrl(imagePath)" alt="" />
        </div>
    
        <nav-toggle :navItems="['Vremena', 'Aplikacija', 'Opcije', 'Gradovi']"/>
    </nav>
</template>

<script>
import NavToggle from '../NavToggle.vue'


export default {
  components: { NavToggle },
    name: "NavElements",
    data() {
        return {
            imagePath: 'logo.svg'
        }
    },
    methods: {
        getUrl(image) {
            return new URL(`/src/assets/${image}`,import.meta.url).href
        }
    }
}
</script>
