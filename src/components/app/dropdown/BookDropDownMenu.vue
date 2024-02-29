<template>
    <div class="card flex justify-content-center">
        <Dropdown
            v-model="selectedBook"
            :options="books"
            optionLabel="name"
            placeholder="Select a Book"
            class="w-full md:w-14rem text-[8px] h-[20px] flex items-center !p-0 text-[#787878]"
            @update:model-value="bookSelected"
        />
    </div>
</template>

<script setup>
import Dropdown from 'primevue/dropdown';
import {ref, watch} from "vue";

const emit = defineEmits(['bookSelected'])

const props = defineProps({
  books: {
    type: Array,
    default: [
      { name: 'Sira Bozijeg poslanika a.s.', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
    ],
    required: false
  }
})

const selectedBook = ref();
const broj = ref(50)

watch(selectedBook, (newBook) => {
  emit('bookSelected', newBook)
})

const bookSelected = (newSelectedBook) => {
  // console.log(newSelectedBook)
}
</script>

<style scoped>

</style>
