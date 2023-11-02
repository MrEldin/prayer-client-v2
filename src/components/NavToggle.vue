<template>
    <div>
      <div class="lg:flex flex-row items-center gap-8 text-white justify-center hidden">

        <dark-mode />
        <!-- Desktop menu -->
        <a href="#tenses" class="hover:text-[#ECD79F] duration-300 text-md" v-for="navItem in navItems" :key="navItem">{{ navItem }}</a>
        <login-button text="Uloguj se" />
      </div>

      <!-- Hamburger menu for tablet and mobile -->
      <div class="lg:hidden flex flex-col items-center gap-6 text-white justify-center">
        <!-- Add a button to toggle the menu on small screens -->
        <button @click="toggleMenu" class="hover:text-[#ECD79F] duration-300 text-md my-5 hamburger-button" :class="{ 'open': isMenuOpen }">
            <div class="bar bar1"></div>
            <div class="bar bar2"></div>
            <div class="bar bar3"></div>
        </button>

        <!-- Render the menu items if the menu is open -->
        <div v-if="isMenuOpen" class="mt-10 flex flex-col items-center gap-4 absolute top-10 right-20 z-10">
          <a href="#tenses" class="hover:text-[#ECD79F] duration-300 text-md" v-for="navItem in navItems" :key="navItem">{{ navItem }}</a>
          <login-button text="Uloguj se" />
        </div>
      </div>
    </div>
  </template>

<script>
import LoginButton from '@/components/buttons/LoginButton.vue'
import DarkMode from "@/components/dark/DarkMode.vue";

export default {
  components: {
    DarkMode,
    LoginButton
  },
  props: {
    navItems: {
      type: Array,
      default: [],
      required: false
    }
  },
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

  },
  computed: {
  }
}
</script>

<style scoped>
.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  background-color: #fff;
  margin: 6px 0;
  transition: 0.4s;

}

.bar1:hover, .bar2:hover, .bar3:hover {
    background-color: #ECD79F;
}

.bar {
    width: 35px;
    height: 5px;
    background-color: #fff;
    margin: 6px 0;
    transition: 0.4s;
  }

  .hamburger-button .bar2 {
    width: 35px;
    opacity: 1;
    transform: translateX(0);
  }

  .hamburger-button.open .bar1 {
    transform: translateY(11px) rotate(45deg);
  }

  .hamburger-button.open .bar2 {
    opacity: 0;
  }

  .hamburger-button.open .bar3 {
    transform: translateY(-11px) rotate(-45deg);
  }
</style>
