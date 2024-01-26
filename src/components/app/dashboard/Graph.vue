<template>
    <div class="h-[251px] bg-white rounded-[10px] border-[0.3px] border-[#CFCFCF]">
        <div class="flex flex-row justify-between mb-4">
            <div class="px-10 pt-8">
                <h3 class="text-[#657B7B] text-[12px] leading-[11.38px]">Kolicina lajkova na dnevnom nivou po jednoj knjizi</h3>
                <p class="text-[#1A4747] text-[24px] font-semibold">245</p>
            </div>
            <button class="mt-10 mr-8 px-3 rounded-md border-[0.38px] flex justify-between items-center h-[30px]">
                <book-drop-down-menu />
            </button>
        </div>
        <graph-app />
    </div>
</template>

<script>
import GraphApp from '@/components/app/graphline/GraphApp.vue'
import BookDropDownMenu from '../dropdown/BookDropDownMenu.vue';

export default {
  components: { GraphApp, BookDropDownMenu },

}
</script>
