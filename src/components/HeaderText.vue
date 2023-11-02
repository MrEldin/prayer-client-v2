<template> 
    <div class="border-b-[0.4px] border-[#d1d1d1] border-opacity-[26%]"> 
        <h2 class="md:text-2xl text-lg text-[#3E546C] dark:text-white pb-2 md:text-left text-center">{{ header }}</h2>
        <p class="text-[11px] font-[100] md:text-left text-center text-[#8794A3] opacity-[69%] dark:text-[#D8D8D8] dark:opacity-[69%] pb-3">{{ text }} </p> 
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

<style scoped>
h2, p {
        font-family: 'Roboto';
    }
</style>