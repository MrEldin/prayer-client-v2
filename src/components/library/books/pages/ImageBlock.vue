<template>
  <div ref="dropZoneRef" @click="triggerFileInput" class="w-full h-60 dropzone cursor-pointer border-2 border-dashed border-gray-300 rounded-md p-5 flex justify-center items-center relative" :class="{'bg-blue-100 border-blue-300': isOverDropZone}">
    <input type="file" ref="fileInputRef" @change="handleFileChange" accept="image/*" class="hidden" />
    <img v-if="page.image" :src="page.image" alt="Uploaded Image" class="object-cover rounded-md absolute inset-0 w-full h-full" />
    <div v-if="page.image" class="rounded-md absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white">
      Click or drop an image here to upload
    </div>
    <div v-else class="rounded-md text-center text-sm text-gray-500">
      Click or drop an image here to upload
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const dropZoneRef = ref(null);

function uploadImage(event) {
  const file = event.target.files[0];
  imageUrl.value = URL.createObjectURL(file);
}
</script>

<style>
/* Additional custom styles if needed */
</style>
