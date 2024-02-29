<template>
  <div class="bg-[#1A534E] w-[60px] min-w-[60px] px-2 pt-6 flex flex-col h-screen z-[1001]">
    <div class="h-[30px]">
      <img src="@/assets/logo.svg" alt="" class="w-10"/>
    </div>
    <div class="flex-grow flex flex-col items-center justify-center gap-5 ">
      <router-link to="/library">
        <i class="pr pr-scan text-[#AEDBD7] w-[22px] scale-105 ease-out duration-500"></i>
      </router-link>
      <button @click="navigateToCalendar">
        <i class="pr pr-calendar text-white w-[22px]"></i>
      </button>
      <router-link to="/dashboard">
        <i class="pr pr-category text-[#AEDBD7] w-[22px] scale-105 ease-out duration-500"></i>
      </router-link>
      <button @click="logout">
        <i class="pr pr-logout-84 text-white hover:text-[#AEDBD7] w-[22px]"></i>
      </button>
    </div>
  </div>
</template>


<script setup>
import router from '@/router';
import {useAuthStore} from "@/store/auth/index.js";

const logout = () => {
  useAuthStore().logout();
}

const navigateToScan = () => {
  router.push('/dashboard');
}

const navigateToCalendar = () => {
  router.push('/library');
}
</script>
