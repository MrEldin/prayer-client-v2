<template>
  <div class="flex overflow-y-hidden">
    <ExtendedSideBar />
    <div class="flex-grow flex flex-col">
      <TopBar />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import TopBar from '@/components/app/dashboard/TopBar.vue';
import ExtendedSideBar from "@/components/app/library/ExtendedSideBar.vue";

</script>
