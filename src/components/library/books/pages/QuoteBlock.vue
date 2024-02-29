<template>
  <div class="border-[0.4px] border-[#d1d1d1] border-opacity-[26%] border-dashed p-2 rounded-lg">
    <div class="flex flex-col justify-center items-end self-stretch flex-grow-0 flex-shrink-0 relative">
      <div class="flex flex-col justify-center items-end self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden">
        <div
            class="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden px-[50px] py-[30px] rounded-[10px] bg-[#33706a]"
        >
          <div class="flex flex-col justify-center items-start flex-grow relative pl-[30px]">
            <section class="w-full text-xl">
              <ContentEditable
                  v-model="data.title.text"
                  :attributes="data.title.attributes"
                  placeholder="Bitne informacije"
                  @update:modelValue="updateBlock"
              />
            </section>
            <section class="w-full">
              <ContentEditable
                  v-model="data.text.text"
                  :attributes="data.text.attributes"
                  placeholder="Unesite text ovog priloga.."
                  @update:modelValue="updateBlock"
              />
            </section>
          </div>
        </div>
        <img src="/src/assets/green_bubbles.svg" alt="question icon" class="absolute top-3 left-[-70px] w-[150px] h-[150px]" />
      </div>
      <img src="/src/assets/question-icon.svg" alt="question icon" class="absolute top-[-20px] left-5 w-[50px] h-[50px]" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ContentEditable from "@/components/library/ContentEditable.vue";

const emit = defineEmits(['editBlock']);

const props = defineProps({
  data: Object,
  id: [String, Number],
});

const title = ref('');
const text = ref('');

const updateBlock = () => {
  emit('editBlock', {id: props.id, data: props.data});
};
</script>

<style>
textarea:focus {
  outline: none;
  border: none;
  ring: 0;
}
</style>
