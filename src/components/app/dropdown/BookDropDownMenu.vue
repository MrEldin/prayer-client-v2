<template>
    <div class="card flex justify-content-center">
        <Dropdown v-model="selectedBook" :options="books" optionLabel="name" placeholder="Select a Book" class="w-full md:w-14rem text-[8px] text-[#787878]" />
    </div>
</template>

<script setup>

import Dropdown from 'primevue/dropdown';
import { ref } from "vue";

const selectedBook = ref();
const books = ref([
    { name: 'Sira Bozijeg poslanika a.s.', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>

<style scoped>

</style>
