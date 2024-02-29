<template>
  <div
      class="h-screen flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[300px] overflow-hidden bg-[#33706a] z-[1001]"
  >
    <div
        class="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 h-[52px] overflow-hidden gap-2.5 p-2.5"
    >
      <div
          class="flex flex-col justify-center items-center self-stretch flex-grow gap-2.5 px-[11px] py-1.5 rounded-[5px] bg-[#1a534e]"
      >
        <div class="flex justify-between items-center self-stretch flex-grow relative">
          <input
              type="text"
              placeholder="Search"
              class="bg-transparent w-full text-xs font-light text-left text-white placeholder-white focus:outline-none focus:ring-0 focus:border-transparent" />
          <i class="pr pr-search-normal text-white"></i>
        </div>
      </div>
    </div>
    <div
        class="flex flex-col justify-start items-center self-stretch flex-grow overflow-hidden gap-4 p-2.5"
    >
      <div
          class="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[22px] gap-2.5 rounded-[5px]"
      >
        <div
            class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative"
        >
          <p class="text-[16px] text-left text-white">Stranice</p>
          <div
              class="flex flex-col justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative"
          >
            <i class="pr pr-more text-white"></i>
          </div>
        </div>
      </div>
      <button
          @click="createModal"
          class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-10 relative overflow-hidden p-2.5 rounded-[5px] bg-[#f0f3bd] group hover:bg-[#9AAB42] transition-all"
      >
        <p class="flex-grow-0 flex-shrink-0 text-[12px] font-medium text-left text-[#6a7b7a] group-hover:text-white">
          Dodaj stranu
        </p>
        <i class="pr pr-add text-black !text-[22px] group-hover:!text-white"></i>
      </button>
      <section class="w-full flex flex-col gap-2 overflow-y-auto">
        <SmallPageCard v-for="(page, index) in pagesStore.pages" :key="page.id" :page="page" :index="++index" :media="page.media"/>
      </section>
    </div>
  </div>
</template>

<script setup>
import CreatePage from "@/components/app/dashboard/modals/CreatePage.vue";
import {useModal} from "vue-final-modal";
import { usePagesStore } from '@/store/pages';
import {onMounted} from "vue";
import SmallPageCard from "@/components/app/library/cards/SmallPageCard.vue";

const pagesStore = usePagesStore()

onMounted(() => {
  pagesStore.fetchPages()
});

const createModal = (value) => {
  const { open, close } = useModal({
    component: CreatePage,
    attrs: {
      data: {
      },
      onConfirm(data) {
        pagesStore.fetchPages()
        close()
      }
    }
  })
  open()
}
</script>

<style scoped>

</style>
