<template>
    <div class="flex-grow h-[294px] bg-white rounded-[10px] mb-6 border-[0.3px] border-[#CFCFCF]">
        <div class="px-10 pt-10">
            <h3 class="text-[#3E546C] text-[12px] leading-[11.38px]">Broj objavljenih knjiga</h3>
            <p class="text-[#3E546C] text-[16px] font-semibold">30</p>
        </div>

        <statistic-app-vue />

    </div>
</template>

<script>
import StatisticAppVue from '@/components/app/graphbar/StatisticApp.vue'


export default {
    components: {
        StatisticAppVue
    }
}
</script>
