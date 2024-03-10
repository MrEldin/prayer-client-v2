<template>
    <div class="flex items-center justify-center bg-radial-gradient dark:bg-dark-radial-gradient w-full overflow-hidden relative lg:pb-[320px] 4xl:pb-[100px] pb-0">
        <BigBackgroundDark class="absolute w-[2300px] left-[-240px] top-[-370px] 4xl:w-[4800px] 4xl:left-0 4xl:top-[-850px]" v-if="isDarkMode" ></BigBackgroundDark>
        <BigBackground class="absolute w-[2300px] left-[-240px] top-[-370px] 4xl:w-[4800px] 4xl:left-0 4xl:top-[-850px]" v-else ></BigBackground>
        <div class="container overflow-visible h-screen">
            <nav-elements />
            <hero title="Namaska vremena"/>
        </div>
    </div>
</template>

<script>
import Hero from '@/components/app/Hero.vue'
import NavElements from '@/components/app/NavElements.vue'
import { useDark } from '@vueuse/core';
import BigBackgroundDark from "@/components/app/BigBackgroundDark.vue";
import BigBackground from "@/components/app/BigBackground.vue";



export default {
  components: {BigBackground, BigBackgroundDark, NavElements, Hero},
  name: "MainHero",
  data() {
    return {
      isDarkMode: useDark(),
    };
  },
}
</script>

<style scoped>
.container {
  position: relative;
  z-index: 1; /* This ensures that your content appears on top of the background */
}

.background {
  position: absolute;
  top: 0; /* Move up by 300px */
  right: -300px; /* Move to the right by 300px */
  bottom: 0;
  left: 0;
  z-index: 0; /* This ensures the background is beneath your content */

  background-image: url('@/assets/prayer-home-big.svg');
  background-repeat: no-repeat;
  background-position: calc(20% + 90px) calc(60% - 70px) ; /* Adjust background position as you wanted */
}

.background-dark {
  position: absolute;
  top: 0; /* Move up by 300px */
  right: -300px; /* Move to the right by 300px */
  bottom: 0;
  left: 0;
  z-index: 0; /* This ensures the background is beneath your content */

  background-image: url('@/assets/prayer-home-big-dark.svg');
  background-repeat: no-repeat;
  background-position: calc(20% + 90px) calc(60% - 70px) ; /* Adjust background position as you wanted */
}

@media (max-width: 2220px ) {
  .background {
      background-image: url('@/assets/prayer-home-big.svg');
      background-position: calc(5% - 130px) calc(5% - 540px) ; /* Adjust background position as you wanted */
  }

  .background-dark {
    background-image: url('@/assets/prayer-home-big-dark.svg');
    background-position: calc(5% - 130px) calc(5% - 540px) ; /* Adjust background position as you wanted */
  }
}

@media (max-width: 1920px ) {
  .background {
      background-image: url('@/assets/prayer-home-big.svg');
      background-position: calc(5% - 250px) calc(5% - 500px) ; /* Adjust background position as you wanted */
  }

  .background-dark {
    background-image: url('@/assets/prayer-home-big-dark.svg');
    background-position: calc(5% - 250px) calc(5% - 500px) ; /* Adjust background position as you wanted */
  }
}

@media (max-width: 1720px ) {
  .background {
      background-image: url('@/assets/prayer-home-big.svg');
      background-position: calc(15% - 250px) calc(5% - 550px) ; /* Adjust background position as you wanted */
  }

  .background-dark {
    background-image: url('@/assets/prayer-home-big-dark.svg');
    background-position: calc(15% - 250px) calc(5% - 550px) ; /* Adjust background position as you wanted */
  }
}

@media (max-width: 1520px ) {
  .background {
      background-image: url('@/assets/prayer-home-big.svg');
      background-position: calc(15% - 200px) calc(5% - 520px) ; /* Adjust background position as you wanted */
  }

  .background-dark {
    background-image: url('@/assets/prayer-home-big-dark.svg');
    background-position: calc(15% - 200px) calc(5% - 520px) ; /* Adjust background position as you wanted */
  }
}

@media (max-width: 1440px ) {
  .background {
      background-image: url('@/assets/prayer-home-big.svg');
      background-position: calc(10% - 280px) calc(5% - 550px) ; /* Adjust background position as you wanted */
  }

  .background-dark {
    background-image: url('@/assets/prayer-home-big-dark.svg');
    background-position: calc(10% - 280px) calc(5% - 550px) ; /* Adjust background position as you wanted */
  }
}
@media (max-width: 1280px ) {
  .background {
      background-image: url('@/assets/prayer-home-big.svg');
      background-position: calc(10% - 250px) calc(15% - 250px) ; /* Adjust background position as you wanted */
      background-size: 150%;
  }

  .background-dark {
    background-image: url('@/assets/prayer-home-big-dark.svg');
    background-position: calc(10% - 250px) calc(15% - 250px) ; /* Adjust background position as you wanted */
    background-size: 150%;
  }
}

@media (max-width: 1180px ) {
  .background {
      background-image: url('@/assets/prayer-home-big.svg');
      background-position: calc(10% - 350px) calc(5% - 500px) ; /* Adjust background position as you wanted */
  }

  .background-dark {
    background-image: url('@/assets/prayer-home-big-dark.svg');
    background-position: calc(10% - 350px) calc(5% - 500px) ; /* Adjust background position as you wanted */
  }
}
</style>


