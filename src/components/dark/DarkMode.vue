<template>
    <div class="py-10">
      <button id="theme-toggle" class="text-gray-300 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-600 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" @click="toggleTheme">
        <svg id="theme-toggle-dark-icon" class="w-5 h-5" :class="{ 'hidden': theme === 'light' }" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <!-- Add your dark mode icon path here -->
        </svg>
        <svg id="theme-toggle-light-icon" class="w-5 h-5" :class="{ 'hidden': theme === 'dark' }" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <!-- Add your light mode icon path here -->
        </svg>
      </button>
    </div>
  </template>

<script>
export default {
  data() {
    return {
      theme: 'light', // Set the initial theme to light
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    },
  },
};
</script>

  
