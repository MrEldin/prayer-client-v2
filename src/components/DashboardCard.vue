<template>
    <div class="dashboard-card-bg text-white rounded-md gap-4 p-4">
        <div class="flex flex-row gap-2 items-center"> 
            <div class="p-2 bg-[#519F95] rounded-sm"> 
                <img src="./assets/thumbs-up-outline.svg" alt="" class="w-2 z-10"/>
            </div>
            <h3 class="text-[12px] leading-[14.52px]">{{ header }}</h3>
        </div>
        <div class="flex flex-row gap-3"> 
            <h2 class="text-[24px] leading-[29.05px] font-semibold">{{ number }}</h2>
            <div class="bg-[#519F95] rounded-md px-3 mt-2 h-2"> 
                <p class="text-[6px] leading-[7.26px] font-[300]">{{ number2 }}</p>
            </div>
        </div>
        <p class="text-[8px] leading-[9.68px]">{{ text }}</p>
        <div class="flex flex-row"> 
            <div></div>
            <div>
                <p>{{ day }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        header: String,
        number: String,
        text: String,
        number2: String,
        day: String
    }
}
</script>

<style scoped>

.dashboard-card-bg {
    background: linear-gradient(90deg, rgba(29,72,73,1) 0%, rgba(40,160,136,1) 100%);
}
</style>


