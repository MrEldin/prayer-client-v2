<template>
  <section class="flex flex-col justify-center items-center">
    <h3 class="text-white text-[14px] 4xl:text-[24px]">{{ title }}</h3>
    <div class="relative card flex justify-content-center">
        <section class="absolute w-full h-full flex items-center justify-center pt-2">
            <h3 class="text-white text-[12px] 4xl:text-[22px]">{{ subtitle }}</h3>
        </section>
        <div class="md:max-w-sm">
          <Chart type="doughnut" :data="chartData" :options="chartOptions" class="w-[95px] h-[95px] 4xl:w-[140px] 4xl:h-[140px]" />
        </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watchEffect, reactive } from 'vue';
import Chart from 'primevue/chart';
import {useDark} from "@vueuse/core";

const props = defineProps({
  title: String,
  subtitle: String,
  data: Array
});

const darkMode = useDark()

const state = reactive({
  chartWidth: '100%', // Default width
  chartHeight: '300px', // Default height
  darkBackgroundColor: '#FF9375',
  chartData: null,
  chartOptions: null,
});

const chartData = ref({
  datasets: []
});

const chartOptions = ref({
  // Initial chart options setup
});

// Function to set chart data based on current props.data
const setChartData = () => {
  return {
    datasets: [
      {
        data: props.data,
        backgroundColor: [darkMode.value ? '#FF9375' : '#F0F3BD', '#263238'],
        hoverBackgroundColor: ['#263238', darkMode.value ? '#FF9375' : '#F0F3BD']
      }
    ]
  };
};

// Function to set chart options
const setChartOptions = () => {
  const documentStyle = getComputedStyle(document.documentElement);
  const textColor = documentStyle.getPropertyValue('--text-color');

  return {
    plugins: {
      legend: {
        labels: {
          cutout: '20%',
          color: textColor
        }
      }
    },
    layout: {
      padding: {
        left: 10,
        right: 10,
        top: 10,
        bottom: 10
      }
    },
    elements: {
      arc: {
        borderWidth: 0,
        borderColor: documentStyle.getPropertyValue('--primary-color') // Set your desired border color
      }
    },
    cutout: '80%'
  };
};

// Watch for prop changes, specifically the `data` prop, and update chart data accordingly
watchEffect(() => {
  chartData.value = setChartData();
  chartOptions.value = setChartOptions();
});

</script>

<style scoped>
/* You can also control the containing div for more precise adjustments */
.chart-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%; /* Adjust this as needed */
  max-width: 400px; /* Example max width */
}
</style>
