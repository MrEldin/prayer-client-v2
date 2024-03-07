<template>
    <div class="max-w-md md:flex flex-col leading-[14.06px] font-[300] text-center md:text-left text-white hidden border-b border-opacity-[25%] border-[#90FCFF] pb-2">
        <div class="flex md:flex-row flex-col justify-between items-center mb-2">
            <h1 class="text-[14px]">{{ title }}</h1>
            <p class="text-[10px] opacity-[49%]">{{ timeanddate }}</p>
        </div>
        <p class="text-[12px] opacity-[66%]">{{ subtitle }}</p>
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