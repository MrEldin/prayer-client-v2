<template>
  <section class="w-full px-20 py-4 flex items-end justify-end">
    <div class="w-1/2 4xl:w-full overflow-visible flex gap-10 4xl:gap-20 flex-col max-w-6xl items-center 4xl:mt-[100px]">
      <h1 class="dark:text-[#FFB8A2] 4xl:text-[80px] 2xl:text-[64px] xl:text-[44px] lg:text-4xl text-[32px] text-center text-[#ECD79F]">{{ title }}</h1>
      <section class="w-full flex items-center justify-center">
        <CircularChart title="Zora" :subtitle="prayTimeStore.prayTimes.sunrise" :data="countdownData.sunrise"/>
        <CircularChart title="Izlazak Sunca" :subtitle="prayTimeStore.prayTimes.fajr" :data="countdownData.fajr" />
        <CircularChart title="Podne" :subtitle="prayTimeStore.prayTimes.dhuhr" :data="countdownData.dhuhr" />
        <CircularChart title="Ikindija" :subtitle="prayTimeStore.prayTimes.asr" :data="countdownData.asr" />
        <CircularChart title="Aksam" :subtitle="prayTimeStore.prayTimes.maghrib" :data="countdownData.maghrib" />
        <CircularChart title="Jacija" :subtitle="prayTimeStore.prayTimes.isha" :data="countdownData.isha" />
      </section>
      <section class="flex flex-col gap-3">
        <hero-notes
                    title="Molim te za bogobojaznost"
                    timeanddate="28.02.2024 22:00"
                    subtitle="Prenosi se da je poslanik,s.a.v.s, molio Allaha dz.s., sledecim rijecima: 'Molim te za bogobojaznost i strah od Tebe i javno i tajno'.">
        </hero-notes>
        <hero-notes
                    title="Pogledajte u one..."
                    timeanddate="23.02.2024 13:00"
                    subtitle="Od Ebu Hurejhe r.a se prenosi da je Poslanik s.a.w.s rekao: 'Poglajte u one koji su nizi od vas, a ne one koji su visi od vas, to je najbolji nacin da izbegnete omalovazavanje Allahove blagodati prema vama'.">
        </hero-notes>
        <hero-notes
                    title="Boj se Allaha"
                    timeanddate="20.02.2024 16:00"
                    subtitle="Od Ebu Zerra, r.a. se prenosi da je Poslanik,s.a.w.s, rekao: “Boj se Allaha gdje god bio, loše djelo poprati dobrim ono će ga obrisati i lijepo se prema ljudima ophodi”. (Tirmizi).">
        </hero-notes>
      </section>
      <app-store-button image="apple-icon.svg" class="z-10" />
    </div>
  </section>
</template>

<script setup>
import {ref, onMounted, watch} from 'vue';
import moment from 'moment';
import { useIntervalFn } from '@vueuse/core';
import AppStoreButton from '@/components/buttons/AppStoreButton.vue';
import { useDark } from '@vueuse/core';
import HeroNotes from './HeroNotes.vue';
import CircularChart from '@/components/app/charttime/CircularChart.vue';
import { usePrayTimeStore } from '@/store/pray-times/index.js';

const prayTimeStore = usePrayTimeStore();
const isDarkMode = useDark();
const currentTime = ref(moment());

const props = defineProps({
  title: String,
});

// Initialize an empty object to store the countdown data for each prayer
const countdownData = ref({
  sunrise: [0, 100],
  fajr: [0, 100],
  dhuhr: [0, 100],
  asr: [0, 100],
  maghrib: [0, 100],
  isha: [0, 100],
});

function updateCountdownData() {
  const now = moment();
  const prayers = ['fajr', 'sunrise', 'dhuhr', 'asr', 'maghrib', 'isha'];
  let firstUpcomingPrayerFound = false;

  // Assuming `prayTimeStore.prayTimesTomorrow?.fajr` correctly fetches the Fajr time for the next day
  const tomorrowFajr = prayTimeStore.prayTimesTomorrow?.fajr;

  const newCountdownData = {};
  prayers.forEach((prayer) => {
    let prayerTime = prayTimeStore.prayTimes[prayer];
    let timeLeft;

    if (!firstUpcomingPrayerFound) {
      // Apply the special Isha to next day Fajr calculation only for Isha
      if (prayer === 'isha' && tomorrowFajr) {
        timeLeft = calculateTimeLeftPercentageForIshaToNextFajr(prayerTime, tomorrowFajr);
      } else {
        timeLeft = calculateTimeLeftPercentage(prayerTime);
      }

      newCountdownData[prayer] = timeLeft;

      // Check if this prayer is the first upcoming prayer
      if (timeLeft[0] < 100) {
        firstUpcomingPrayerFound = true;
      }
    } else {
      // For prayers after the first upcoming prayer, set their data to [0, 100]
      newCountdownData[prayer] = [0, 100];
    }
  });

  countdownData.value = { ...newCountdownData };
}


// New function to handle Isha to next day's Fajr calculation
function calculateTimeLeftPercentageForIshaToNextFajr(ishaTime, nextDayFajrTime) {
  const now = moment();
  const ishaMoment = moment(ishaTime, 'HH:mm');
  const nextFajrMoment = moment(nextDayFajrTime, 'HH:mm').add(1, 'days'); // Add one day for tomorrow

  if (!ishaMoment.isValid() || !nextFajrMoment.isValid()) {
    return [0, 100]; // Invalid times
  }

  if (now.isAfter(ishaMoment)) {
    const totalMinutes = nextFajrMoment.diff(now, 'minutes');
    const percentageLeft = totalMinutes > 0 ? (totalMinutes / ((24 * 60) - ishaMoment.diff(now, 'minutes'))) * 100 : 0;
    return [100 - percentageLeft, percentageLeft];
  }

  return calculateTimeLeftPercentage(ishaTime); // Default back to standard calculation if current time is before Isha
}



// Calculates the percentage of time left until the prayer
function calculateTimeLeftPercentage(prayerTime) {
  const nextPrayerTime = moment(prayerTime, 'HH:mm');
  const now = moment();

  if (!nextPrayerTime.isValid()) {
    return [0, 100]; // If prayer time is invalid, return [0, 100]
  }

  if (now.isAfter(nextPrayerTime)) {
    return [100, 0]; // If the prayer time has passed, mark it as 100% passed
  }

  const totalMinutes = nextPrayerTime.diff(now, 'minutes');
  const percentageLeft = totalMinutes > 0 ? (totalMinutes / 1440) * 100 : 0; // Assuming 1440 minutes in a day for simplification

  return [100 - percentageLeft, percentageLeft];
}

onMounted(async () => {
  prayTimeStore.getPrayTimes(moment().format('M'), moment().format('D')).then((response) => {
    prayTimeStore.getTomorrowPrayTimes(moment().format('M'), moment().add(1, 'd').format('D')).then((response) => {
      updateCountdownData();
    });
  })
});

watch(() => prayTimeStore.prayTimes, () => {
  updateCountdownData();
}, { deep: true });


// Use useIntervalFn from @vueuse/core to update countdown every minute
useIntervalFn(() => {
  updateCountdownData();
}, 60000, { immediate: true });

</script>


<style scoped>
h1 {
  font-family: "Ramadanish";
}
</style>
