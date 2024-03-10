<template>
    <div class="w-full md:flex flex-col font-[300] text-center md:text-left text-white hidden border-b border-opacity-[25%] border-[#90FCFF] pb-2">
        <div class="w-full flex md:flex-row flex-col justify-between items-center mb-2">
            <h1 class="text-[14px] 4xl:text-[24px]">{{ title }}</h1>
            <p class="text-[10px] 4xl:text-[14px] opacity-[49%]">{{ timeanddate }}</p>
        </div>
        <p class="w-full text-[12px] 4xl:text-[20px] opacity-[66%]">{{ subtitle }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        subtitle: String,
        timeanddate: String
    }
}
</script>
