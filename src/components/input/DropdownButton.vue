<template>
  <div ref="dropdownRef" class="relative">
    <button @click="toggleDropdown" class="w-[120px] mt-4 px-4 py-2 rounded-lg bg-white text-[#939393] text-[15px] flex items-center gap-2 border-[0.4px] border-[#d1d1d1] border-opacity-[26%]">
      <i :class="selectedItem ? selectedItem.icon : 'pr pr-add'" class="text-[#939393] !text-[16px]"></i>
      <span class="font-[500]">{{ selectedItem ? selectedItem.text : 'Content' }}</span>
    </button>
    <div v-if="isOpen" class="absolute mt-1 bg-white border rounded shadow-lg">
      <ul>
        <li v-for="item in items" :key="item.text" @click="selectItem(item)" class="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2">
          <i :class="item.icon" class="text-[#939393] !text-[16px]"></i>
          <span>{{ item.text }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  items: Array,
});

const emit = defineEmits(['update:selected']);

const dropdownRef = ref(null);
const isOpen = ref(false);
const selectedItem = ref(null);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectItem = (item) => {
  selectedItem.value = item;
  emit('update:selected', item);
  isOpen.value = false;
};

const handleClickOutside = (event) => {
  if (!dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* Add any additional styling here */
</style>
