<template>
    <button class="rounded-3xl w-full py-2 mt-2 md:text-sm text-xs text-[#E9E2DB]" :class="bg">{{ text }}</button>
</template>

<script>
import router from '../../router';
export default {
    props: {
        text: String,
        bg: {
            type: String,
            default: "bg-[#21665F] dark:bg-[#3383a5]"
        },
        
    },

}
</script>