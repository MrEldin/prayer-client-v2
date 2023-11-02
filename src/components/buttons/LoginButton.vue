<template> 
    <button class="rounded-3xl bg-[#0B3539] dark:bg-[#303A3F] w-full border-[1px] border-[#ECD79F] dark:border-[#FF9375] py-2 px-8 mt-2 md:text-sm text-[10px] text-[#ECD79F] hover:scale-105 duration-300">{{ text }}</button>
</template>

<script>
export default {
    props: {
        text: String,
    }
}
</script>