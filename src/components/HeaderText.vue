<template> 
    <div class="border-b-2"> 
                <h2 class="md:text-2xl text-lg text-[#3E546C] pb-2 md:text-left text-center">{{ header }}</h2>
                <p class="text-[9px] md:text-left text-center text-[#8794A3] opacity-[69%] leading-[10.55px] pb-2">{{ text }} </p> 
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