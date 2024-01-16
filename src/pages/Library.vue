<template>
  <div class="flex">
    <ExtendedSideBar />
    <div class="flex-grow flex flex-col">
      <TopBar />
      <Library />
    </div>
  </div>
</template>

<script setup>
import Library from '@/components/app/dashboard/Library.vue';
import TopBar from '@/components/app/dashboard/TopBar.vue';
import ExtendedSideBar from "@/components/app/library/ExtendedSideBar.vue";

</script>
