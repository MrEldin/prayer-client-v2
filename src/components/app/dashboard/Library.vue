<template>
    <div class="bg-[#F2F8F7] px-6 w-full h-full flex flex-col flex-grow">
        <div class="h-[52px] border-y-[0.24px] flex justify-between items-center">
            <p class="text-[#B5B4B4] text-[15px]">{{ pagesStore.selectedPage.title }}</p>
            <div class="flex gap-2">
                <i class="pr pr-undo"></i>
                <i class="pr pr-redo"></i>
            </div>
        </div>
        <div class="h-[calc(100%-115px)] border-t-[0.24px] overflow-y-auto">
          <section class="w-full flex items-start justify-center py-10">
            <section class="w-[820px] bg-white page-shadow overflow-y-visible p-10">
              <h1 class="text-3xl pb-3">{{ pagesStore.selectedPage.title }}</h1>
              <Draggable v-model="pageContentsStore.pageContents" class="flex flex-col gap-1" @end="handleDragEnd" item-key="id">
                <template #item="{element, index}">
                  <component
                      :is="pageComponentsMap[element.type]"
                      :key="index"
                      :data="element.content"
                      :id="element.id"
                      @edit-block="editElement(element)"
                  />
                </template>
              </Draggable>
              <DropdownButton :items="items" @update:selected="handleSelection" />
            </section>
          </section>
        </div>
   </div>
</template>

<script setup>
import Draggable from 'vuedraggable';
import {onMounted, ref, watch} from "vue";
import DropdownButton from "@/components/input/DropdownButton.vue";
import TextBlock from "@/components/library/books/pages/TextBlock.vue";
import QuoteBlock from "@/components/library/books/pages/QuoteBlock.vue";
import ImageBlock from "@/components/library/books/pages/ImageBlock.vue";
import { useRoute } from 'vue-router';
import { useDebounceFn } from '@vueuse/core';
import {usePagesStore} from "@/store/pages/index.js";
import {useHandleSelection} from "@/components/app/dashboard/useHandleSelection.js";
import {usePageContentsStore} from "@/store/page-contents/index.js";

const blocks = ref([]);

const route = useRoute();
const pagesStore = usePagesStore();
const pageContentsStore = usePageContentsStore();
const { handleSelection } = useHandleSelection(pageContentsStore);

const pageComponentsMap = {
  text: TextBlock,
  quote: QuoteBlock,
  image: ImageBlock,
};

// Example of debouncing a method that fetches data based on a route parameter.
// This is useful if you expect rapid changes to the route params and want to limit
// the frequency of certain operations (like API calls).
const fetchData = useDebounceFn(async () => {
  console.log('Fetching data...');
  await pagesStore.fetchPage(route.params.pageId).then(async () => {
    await pageContentsStore.fetchPageContents(route.params.pageId)
  });
  console.log('Data fetched');
}, 200);

const editElement = useDebounceFn(async (element) => {
  await pageContentsStore.updatePageContent(element.id, element);
}, 200);

onMounted(() => {
  fetchData();
});

watch(() => route.params.pageId, () => {
  fetchData();
});

// Example items for DropdownButton
const items = ref([
  { icon: 'pr pr-text-block', text: 'Text', type: 'text', component: TextBlock },
  { icon: 'pr pr-quote-up-square', text: 'Quote', type: 'quote', component: QuoteBlock },
  { icon: 'pr pr-gallery', text: 'Image', type: 'image', component: ImageBlock },
]);
</script>

<style scoped>
.page-shadow {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  filter: drop-shadow(0 4px 3px rgba(0,0,0,0.1));
}

</style>
