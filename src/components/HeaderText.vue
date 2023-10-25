<template> 
    <div class="border-b-2"> 
                <h2 class="md:text-2xl text-lg text-sky-950 pb-2 md:text-left text-center">{{ header }}</h2>
                <p class="text-xs md:text-left text-center text-gray-400 leading-none pb-2">{{ text }} </p> 
            </div>
</template>

<script> 
export default {
    props: {
        header: String,
        text: String
    }
}
</script>