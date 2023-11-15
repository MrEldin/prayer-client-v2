<template>
    <label class="text-[12px] font-medium leading-[11.38px] text-[#3E546C] opacity-[72%] dark:text-[#F8FBFF] dark:opacity-[72%]" :class="for1">{{text}}</label>
    <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="bg-[#E7EEED] rounded-[5px] w-full p-1 mt-2" :type="input"/> 
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
        },
        modelValue: {
            type: String,
            default: ""
        }
    }
}
</script>