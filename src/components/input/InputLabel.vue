<template>
    <label class="text-sm" :class="for1">{{text}}</label>
    <input class="bg-[#E7EEED] rounded-md w-full p-1 mt-2" :type="input"/> 
</template>


<script> 
export default {
    props: {
        text: String,
        for1: {
            type: String,
            default: "email"
        },
        input: {
            type: String,
            default: "email"
        }
    }
}
</script>