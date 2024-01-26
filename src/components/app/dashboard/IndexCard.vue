<template>
    <div class="dashboard-card-bg text-white rounded-md gap-6 p-4 flex-1">
        <div class="flex flex-row justify-between"> 
            <div class="flex gap-2 items-center"> 
                <div class="bg-[#519F95] rounded-md px-2"> 
                    <i class="pr pr-like-2 text-white"></i>
                </div>
                <h3 class="text-[12px] leading-[14.52px]">{{ header }}</h3>
            </div>
            <div class=""> 
                <i class="pr pr-more text-white w-[12px]"></i>
            </div>
        </div>
        <div class="flex flex-row gap-3 mt-3"> 
            <h2 class="text-[24px] leading-[29.05px] font-semibold">{{ number }}</h2>
            <div class="bg-[#519F95] mt-2 h-3 rounded-md"> 
                <p class="text-[6px] leading-[7.26px] font-[300] mt-[3px] mx-4">{{ number2 }}</p>
            </div>
        </div>
        <p class="text-[8px] leading-[9.68px] mt-3">{{ text }}</p>

        <div class="flex flex-row gap-3 items-center mt-6"> 

            <div class="rounded-xl bg-[#1A4747] h-2 w-full "> 
                <div class="rounded-xl bg-white h-2 w-8"></div>
            </div>
            <div>
                <p class="text-[8px] leading-[9.68px] w-max">{{ day }}</p>
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


