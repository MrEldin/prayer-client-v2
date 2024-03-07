<template>
  <div class="w-full h-full flex lg:justify-end justify-center">
    <div class="lg:w-1/2 w-full h-full flex md:flex-row items-start justify-center md:overflow-visible">
      <div class="relative w-full h-[400px] mt-[100px] flex md:flex-row items-center justify-center md:overflow-visible mx-10 md:mx-0">
        <div class="overflow-visible flex flex-col gap-8 max-w-6xl items-center">
          <h1 class="lg:mt-[250px] dark:text-[#FFB8A2] 2xl:text-[64px] xl:text-[44px] lg:text-4xl text-[32px] text-center text-[#ECD79F]">{{ title }}</h1>
          <section class="w-full flex items-center justify-center">
            <CircularChart title="Zora" subtitle="05:00" :data="[40, 60]"/>
            <CircularChart title="Sabah" subtitle="06:00" :data="[40, 60]"/>
            <CircularChart title="Podne" subtitle="11:52" :data="[20, 80]"/>
            <CircularChart title="Ikindija" subtitle="14:50" :data="[80, 20]"/>
            <CircularChart title="Aksam" subtitle="18:50" :data="[20, 80]"/>
            <CircularChart title="Jacija" subtitle="19:50" :data="[20, 80]"/>
          </section>
          <section> 
            <hero-notes class="mt-6"
                  title="Molim te za bogobojaznost" 
                  timeanddate="28.02.2024 22:00"
                  subtitle="Prenosi se da je poslanik,s.a.v.s, molio Allaha dz.s., sledecim rijecima: 'Molim te za bogobojaznost i strah od Tebe i javno i tajno'.">
            </hero-notes>
            <hero-notes class="mt-6"
                title="Pogledajte u one..." 
                timeanddate="23.02.2024 13:00"
                subtitle="Od Ebu Hurejhe r.a se prenosi da je Poslanik s.a.w.s rekao: 'Poglajte u one koji su nizi od vas, a ne one koji su visi od vas, to je najbolji nacin da izbegnete omalovazavanje Allahove blagodati prema vama'.">
            </hero-notes>
            <hero-notes class="mt-6"
              title="Boj se Allaha" 
              timeanddate="20.02.2024 16:00"
              subtitle="Od Ebu Zerra, r.a. se prenosi da je Poslanik,s.a.w.s, rekao: “Boj se Allaha gdje god bio, loše djelo poprati dobrim ono će ga obrisati i lijepo se prema ljudima ophodi”. (Tirmizi).">
            </hero-notes>
          </section>
          <app-store-button image="apple-icon.svg" class="z-10" />
        </div>

        <div class="absolute bottom-[-20] left-0">
          <img v-if="isDarkMode" src="@/assets/star-icons-dark.svg" alt="" class="md:w-32 w-24"/>
          <img v-else src="@/assets/star-icons.svg" alt="" class="md:w-32 w-24"/>
          
        </div>
        <div class="absolute top-0 right-0">

          <img v-if="isDarkMode" src="@/assets/star-icons-2-dark.svg" alt="" class="lg:w-36 md:w-32 w-24"/>
          <img v-else src="@/assets/star-icons-2.svg" alt="" class="lg:w-36 md:w-32 w-24"/>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script setup>
import AppStoreButton from '@/components/buttons/AppStoreButton.vue';
import { useDark } from '@vueuse/core';
import HeroNotes from './HeroNotes.vue';
import CircularChart from '@/components/app/charttime/CircularChart.vue';

const props = defineProps({
        title: String,
    })

const isDarkMode = useDark()
</script>

<style scoped>
h1 {
  font-family: "Ramadanish";
}
</style>
