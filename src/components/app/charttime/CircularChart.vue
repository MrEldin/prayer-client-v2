<template>
  <section class="flex flex-col justify-center items-center">  
    <h3 class="text-white text-[14px]">{{ title }}</h3>
    <div class="relative card flex justify-content-center">
        <section class="absolute w-full h-full flex items-center justify-center pt-2">
            <h3 class="text-white text-[12px]">{{ subtitle }}</h3>
        </section>
        <div class="md:max-w-sm"> 
            <Chart type="doughnut" :data="chartData" :options="chartOptions" :style="{ width: chartWidth, height: chartHeight }" />
        </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import Chart from 'primevue/chart';


const props = defineProps({
        title: String,
        subtitle: String,
        data: Array
    })

const state = reactive({
  chartWidth: '100%', // Default width
  chartHeight: '300px',// Default height
  darkBackgroundColor: '#FF9375'
});


onMounted(() => {
    chartData.value = setChartData();
    chartOptions.value = setChartOptions();
});

const chartData = ref();
const chartOptions = ref(null);
const chartWidth = '80px'; // Set your desired width
const chartHeight = '80px'; // Set your desired height

const setChartData = () => {
    const documentStyle = getComputedStyle(document.body);

    return {
        datasets: [
            {
                data: props.data,
                backgroundColor:['#F0F3BD', '#263238'],
                darkBackgroundColor:[state.darkMode ? '#FF9375': '#F0F3BD', '#263238'],
                hoverBackgroundColor: ['#263238', '#F0F3BD']
            }
        ]
    };
};

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
        // Set chart width and height
        layout: {
            padding: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10
            }
        },
        // Set chart border
        elements: {
            arc: {
                borderWidth: 0,
                borderColor: documentStyle.getPropertyValue('--primary-color') // Set your desired border color
            }
        },
        cutout: '80%'
    };
};

// Update chart dimensions on window resize
window.addEventListener('resize', () => {
  updateChartDimensions();
});

const updateDarkmodeColor = () => {
    state.backgroundColor = '#FF9375'
}

const updateChartDimensions = () => {
  // Set default width and height
  state.chartWidth = '100%';
  state.chartHeight = '300px';

  // Adjust width and height based on screen size
  if (window.innerWidth >= 768) {
    state.chartWidth = '80%';
    state.chartHeight = '100px';
  }
};

updateChartDimensions();
updateDarkmodeColor()

</script>
