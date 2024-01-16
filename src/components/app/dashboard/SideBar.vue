<template>
    <div class="bg-[#1A534E] w-[58px] min-w-[58px] px-2 pt-6 flex flex-col h-screen">
            <div class="h-[30px]">
                <img src="@/assets/logo.svg" alt="" class="w-10"/>
            </div>
            <div class="flex-grow flex flex-col items-center justify-center gap-5 ">
                <button @click="navigateToScan">
                    <i  class="pr pr-scan text-[#AEDBD7] w-[22px] scale-105 ease-out duration-500"></i>
                </button>
                <router-link to="/library">
                    <i  class="pr pr-scan text-[#AEDBD7] w-[22px] scale-105 ease-out duration-500"></i>
                </router-link>
                <button @click="navigateToCalendar" >
                    <i class="pr pr-calendar text-white w-[22px]"></i>
                </button>
            </div>
        </div>
</template>


<script>
import router from '@/router';

export default {
    methods: {
        navigateToScan() {
            router.push('/dashboard');
        },
        navigateToCalendar() {
            router.push('/library');
        },
    },
}
</script>
