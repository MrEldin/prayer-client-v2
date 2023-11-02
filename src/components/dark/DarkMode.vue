<template>
  <div class="switch-container">
    <button :style="{ width: buttonSize + 'px', height: (buttonSize / 2) + 'px' }" @click="toggleDarkMode()" class="toggle-switch">
      <span :style="{ width: (buttonSize / 2) + 'px', height: (buttonSize / 2) + 'px' }" class="toggle-circle" :class="{ 'move-right': isDarkMode }">
        <div v-if="!isDarkMode" class="icon light-icon">
          <svg class="sun-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="5"></circle>
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </div>
        <div v-if="isDarkMode" class="icon dark-icon">
          <svg class="moon-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </div>
      </span>
    </button>
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core';
const isDarkMode = useDark();
const toggleDarkMode = useToggle(isDarkMode);

defineProps({
  buttonSize: {
    type: Number,
    default: 60
  }
})
</script>

<style scoped>
.switch-container {
  display: flex;
  align-items: center;
}

.toggle-switch {
  border-radius: 25px;
  background-color: #ecd79f;
  position: relative;
  display: inline-block;
  border: none;
  outline: none;
  cursor: pointer;
  margin-left: 10px;
}

.toggle-circle {
  border-radius: 50%;
  background-color: #edb61e;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s, background-color 0.3s;
}

.move-right {
  transform: translateX(100%);
  background-color: #1E90FF;
}

.icon {
  width: 20px;  /* Adjust icon size if needed */
  height: 20px;
}

.label {
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
}

.dark .toggle-switch {
  background-color: #2D3748;
}

.dark .label {
  color: #E2E8F0;
}
</style>
