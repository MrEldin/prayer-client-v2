<script setup>
import {computed} from "vue";
import {useRoute} from "vue-router";

const props = defineProps({
  page: {
    type: Object,
    default: () => ({
      title: 'Title',
      description: 'Description',
    })
  },
  index: {
    type: Number,
    default: 0
  },
  media: {
    type: Array,
    default: () => []
  }
})

const route = useRoute();

const backgroundImageStyle = computed(() => {
  if (props.media.length > 0 && props.media[0].url) {
    return {
      backgroundImage: `url(${props.media[0].url})`,
      backgroundSize: 'cover', // Mimics `object-cover`
      backgroundPosition: 'center', // Centers the background image
      backgroundRepeat: 'no-repeat', // Prevents the image from repeating
    };
  }
  return {}; // Return an empty object if there is no image
});
</script>

<template>
  <router-link
      :to="`/library/1/pages/${page.id}`"
      class="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 h-[95px] rounded-[5px] border-[0.4px] border-white/20 object-fill overflow-hidden"
  >
    <div
        class="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-[60px] gap-2.5"
        :style="backgroundImageStyle"
    >
      <div class="flex justify-center items-center self-stretch flex-grow relative gap-2.5 p-[11px]">
        <i class="pr pr-play text-white !text-[24px]"></i>
      </div>
    </div>
    <div
        class="flex flex-col justify-center items-center self-stretch flex-grow overflow-hidden gap-0.5 px-[15px] rounded-tr-[5px] rounded-br-[5px] bg-[#153b38] hover:bg-[#568681] transition-all cursor-pointer"
        :class="{ 'bg-[#568681]': route.path.includes(page.id) }"
    >
      <div
          class="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 gap-[5px] pb-[5px] border-t-0 border-r-0 border-b-[0.2px] border-l-0 border-white/10"
      >
        <div
            class="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-0.5"
        >
          <p class="self-stretch flex-grow-0 flex-shrink-0 w-full text-[12px] text-left text-white">
            {{page.title}}
          </p>
          <p
              class="self-stretch flex-grow-0 flex-shrink-0 w-full text-[9px] text-left text-white/[0.63]"
          >
            Spominjanje Allaha, dž.š., (zikr) nije samo suhoparno izgovaranje određenih riječi,...
          </p>
        </div>
      </div>
      <div class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0">
        <div class="flex justify-start items-center gap-1">
          <i class="pr pr-clock text-white/70 !text-[10px]"></i>
          <p class="text-[8px] text-left text-white/80">Vreme čitanja: 2m</p>
        </div>
        <div class="flex justify-start items-center gap-1">
          <i class="pr pr-note-2 text-white/70 !text-[10px]"></i>
          <p class="h-full text-[8px] text-left text-white/80">{{index}}</p>
        </div>
      </div>
    </div>
  </router-link>
</template>

<style scoped>

</style>
