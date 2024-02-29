<script setup>
import { ref } from 'vue';
import { VueFinalModal } from "vue-final-modal";
import InputText from 'primevue/inputtext';
import { useDropZone } from '@vueuse/core';
import 'primevue/resources/themes/saga-blue/theme.css';
import 'primevue/resources/primevue.min.css';
import {usePagesStore} from "@/store/pages/index.js";

const pageStore = usePagesStore();

const emit = defineEmits(['confirm', 'created']);

const confirm = () => {
  emit('confirm', {});
}

const dropZoneRef = ref(null);
const fileInputRef = ref(null);

const page = ref({
  title: '',
  bookId: null,
  image: null, // For storing the image preview URL
});

// DropZone setup
const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop: (files) => {
    if (files && files[0]) {
      const file = files[0];
      if (/^image\//.test(file.type)) {
        page.value.image = URL.createObjectURL(file); // Generate and store the image preview URL
      }
    }
  },
  dataTypes: ['image/*'] // Accepting only image files
});

// Function to trigger file input for uploads
const triggerFileInput = () => {
  fileInputRef.value.click();
};

// Handle file input change for manual uploads
const handleFileChange = (event) => {
  const files = event.target.files;
  if (files.length > 0 && /^image\//.test(files[0].type)) {
    page.value.image = URL.createObjectURL(files[0]);
  }
};

const save = () => {
  if (!page.value.title || !fileInputRef.value.files[0]) {
    alert("Please provide a title and select an image.");
    return;
  }

  const formData = new FormData();
  formData.append("title", page.value.title);
  formData.append("image", fileInputRef.value.files[0]);

  pageStore.addPage(formData)
      .then(() => {
        emit('created');
        // Reset form or handle success (e.g., showing a success message or redirecting)
      })
      .catch(error => {
        console.error("Error creating page:", error);
        // Handle error (e.g., showing an error message)
      });
};
</script>

<template>
  <VueFinalModal content-transition="vfm-slide-left" :click-to-close="false" class="flex justify-start items-center" content-class="flex flex-col bg-white ml-[370px] 2xl:ml-[370px] rounded-2xl w-[600px] h-[calc(100%-20px)]">
    <header class="w-full min-h-[50px] border-b border-gray-200 bg-[#fff8f2] rounded-t-2xl flex justify-between items-center px-4">
      <h1 class="text-[#3E546C] font-normal">Create Page</h1>
      <button @click="confirm" class="rounded-lg">
        <span class="pr pr-add text-[#3E546C] hover:text-[#000000]"></span>
      </button>
    </header>
    <section class="flex-grow flex flex-col p-10 gap-5">
      <div class="flex flex-col gap-2">
        <label for="title" class="text-sm font-medium text-gray-700">Naslov strane</label>
        <InputText id="title" v-model="page.title" type="text" placeholder="Unesite naslov strane" class="mt-1" />
      </div>
      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium text-gray-700">Slika</label>
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
      </div>
    </section>
    <footer class="w-full min-h-[50px] border-t border-gray-200 bg-[#fff8f2] rounded-b-2xl flex justify-end items-center px-4">
      <button :disabled="!page.title" @click="save" class="bg-[#3e546c] hover:bg-[#0D2B4B] px-3 py-1 rounded-md text-white text-xs">Sacuvaj</button>
    </footer>
  </VueFinalModal>
</template>
