<template>
    <div class="wediiz-body">
        <section class="font-opensans h-full sm:h-auto w-full sm:w-auto ">
            <!-- Add the cursor div here -->
            <div v-show="showCursor" class="cursor z-50" :class="{ 'cursor-animation': animateCursor }">
                <svg fill="#000000" height="30px" width="30px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-28.43 -28.43 259.94 259.94" xml:space="preserve" stroke="#000000" stroke-width="0.00203079" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.406158"></g><g id="SVGRepo_iconCarrier"> <path d="M192.231,104.082V102c0-12.407-10.094-22.5-22.5-22.5c-2.802,0-5.484,0.519-7.961,1.459 C159.665,70.722,150.583,63,139.731,63c-2.947,0-5.76,0.575-8.341,1.61C128.667,55.162,119.624,48,109.231,48 c-2.798,0-5.496,0.541-8,1.516V22.5c0-12.407-10.094-22.5-22.5-22.5s-22.5,10.093-22.5,22.5v66.259 c-3.938-5.029-8.673-9.412-14.169-11.671c-6.133-2.52-12.587-2.219-18.667,0.872c-11.182,5.686-15.792,19.389-10.277,30.548 l27.95,56.563c0.79,1.552,19.731,38.008,54.023,38.008h40c31.54,0,57.199-25.794,57.199-57.506l-0.031-41.491H192.231z M135.092,188.079h-40c-24.702,0-40.091-28.738-40.646-29.796l-27.88-56.42c-1.924-3.893-0.33-8.519,3.629-10.532 c2.182-1.11,4.081-1.223,6.158-0.372c8.281,3.395,16.41,19.756,19.586,29.265l2.41,7.259l12.883-4.559V22.5 c0-4.136,3.364-7.5,7.5-7.5s7.5,3.364,7.5,7.5V109h0.136h14.864h0.136V71c0-4.187,3.748-8,7.864-8c4.262,0,8,3.505,8,7.5v15v26h15 v-26c0-4.136,3.364-7.5,7.5-7.5s7.5,3.364,7.5,7.5V102v16.5h15V102c0-4.136,3.364-7.5,7.5-7.5s7.5,3.364,7.5,7.5v10.727h0.035 l0.025,32.852C177.291,169.014,158.36,188.079,135.092,188.079z"></path> </g></svg>
            </div>

            <div class="flex md:flex-row flex-col gap-2 bg-white dark:bg-[#173f5f] text-color relative h-full sm:h-auto w-full sm:w-auto">
                <div class="mt-10 hidden md:block">
                    <img src="../assets/left-flower-illustration.svg" alt="" />
                </div>
                <div class="flex flex-col items-center md:gap-6 gap-10">
                    <div class="mt-16">
                        <img src="../assets/top-illustration.svg" alt="" />
                    </div>
                    <div class="px-8 md:px-0">
                        <img v-if="isDarkMode" src="../assets/ee-logo-dark.svg" alt="" class="md:w-full w-48" />
                        <img v-else src="../assets/ee-logo.svg" alt="" class="md:w-full w-48" />
                    </div>
                    <div class="px-10 md:px-0 md:max-w-sm max-w-xs tracking-tighter text-center text-sm font-medium text-color">
                        <p>Porodica <span>Mujović</span> Vas najsrdačnije poziva na svečanu večeru u hotelu <span>"Dragulj"</span> sa početkom u 19:30h </p>
                    </div>
                    <div>
                        <p class="color font-medium">PETAK, AVGUST 25-i | 19:30</p>
                    </div>
                    <div v-if="showMessage" class="p-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400 md:w-full w-2/3" role="alert">
                      <span class="font-medium">Hvala!</span> Hvala Vam sto ste potvrdili vas dolazak.
                    </div>
                    <button @click="openModal" class="md:px-12 px-8 py-2 rounded-full text-white text-sm rsvp">RSVP POTVRDA DOLASKA</button>
                </div>
                <div class="mt-32 hidden md:block">
                    <img src="../assets/right-flower-illustration.svg" alt="" />
                </div>
                <div class="md:hidden mt-10">
                    <img width="120" src="../assets/solo-flower-illustration.svg" alt="" />
                </div>

              <!-- The bulb button -->
              <button class="absolute top-0 right-0 m-4" @click="toggleDarkMode()">
                <svg class="bulb-icon" width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#173f5f">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path class="bulb" d="M12 7C9.23858 7 7 9.23858 7 12C7 13.3613 7.54402 14.5955 8.42651 15.4972C8.77025 15.8484 9.05281 16.2663 9.14923 16.7482L9.67833 19.3924C9.86537 20.3272 10.6862 21 11.6395 21H12.3605C13.3138 21 14.1346 20.3272 14.3217 19.3924L14.8508 16.7482C14.9472 16.2663 15.2297 15.8484 15.5735 15.4972C16.456 14.5955 17 13.3613 17 12C17 9.23858 14.7614 7 12 7Z" stroke="#000000" stroke-width="2"></path>
                    <g class="rays">
                      <path d="M12 4V3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M18 6L19 5" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M20 12H21" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M4 12H3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M5 5L6 6" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                      <path d="M10 17H14" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                    </g>
                  </g>
                </svg>
              </button>
            </div>

        </section>
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue';
    import { useModal } from 'vue-final-modal'
    import Modal from '../components/app/Modal.vue'

    export default {
        setup() {
            const showCursor = ref(true);
            const animateCursor = ref(true);
            const isDarkMode = ref(false);
            const showMessage = ref(false);

            const toggleDarkMode = () => {
                isDarkMode.value = !isDarkMode.value;

                // Add or remove the dark class on the HTML element
                if (isDarkMode.value) {
                    document.documentElement.classList.add('dark')
                } else {
                    document.documentElement.classList.remove('dark')
                }
            };

          function showThankYouMessage() {
            showMessage.value = true;
            setTimeout(() => { // this will hide the message after 3 seconds
              showMessage.value = false;
            }, 4000);
          }

            onMounted(() => {
                setTimeout(() => {
                    animateCursor.value = false;
                    showCursor.value = false;
                }, 5000); // Animation time, adjust it to match your CSS animation duration
            });

          const { open, close } = useModal({
            component: Modal,
            attrs: {
              title: 'Potvrda dolaska',
              isDarkMode: isDarkMode.value,
              onConfirm() {
                showThankYouMessage()
                close()
              }
            }
          })

          function openModal() {
            console.log("echo")
            open()
          }

            return { showCursor, animateCursor, isDarkMode, toggleDarkMode, openModal, showThankYouMessage, showMessage };
        }
    }
</script>

<style scoped>
    .cursor {
        position: absolute;
        top: 0; /* position it at the top of the screen */
        right: 0; /* position it at the right of the screen */
        width: 30px;
        height: 30px;
        transform: rotate(-45deg); /* to properly rotate the cursor */
    }

    .cursor-animation {
        animation: moveCursor 5s cubic-bezier(.02,.01,.47,1);
    }

    @keyframes moveCursor {
        0% { top: -10%; right: 10%; transform: rotate(-45deg); } /* starts off the top-right of the screen */
        45% { top: 62%; right: 50%; transform: rotate(0deg); } /* moves near to the center and simulates a click */
        50% { top: 62%; right: 50%; transform: scale(0.9); } /* simulates the button press */
        55% { top: 62%; right: 50%; transform: scale(1); } /* simulates the button release */
        100% { top: 100%; right: -10%; transform: rotate(45deg); } /* moves off the bottom-left of the screen */
    }

    .bulb-icon {
        stroke: #000000;
        transition: stroke 0.3s ease;
    }

    .bulb-icon:hover .bulb {
        stroke: #FDB813;
    }

    .rays {
        opacity: 0;
        transition: opacity 0.3s ease;
    }

    .bulb-icon:hover .rays {
        opacity: 1;
    }

    .car {
        position: relative;
        animation: drive 12s linear infinite;
    }

    @keyframes drive {
        0% { left: 0; }
        20% { left: 20%; } /* Car reaches the house */
        40% { left: 40%; } /* Car reaches the mosque */
        60% { left: 60%; } /* Car reaches the building */
        100% { left: 100%; } /* Car reaches the end of the screen */
    }

    .icons-container {
        display: flex;
        justify-content: space-between; /* Adjusts the spacing between your icons */
        align-items: center; /* Centers your icons vertically */
        flex-wrap: wrap; /* Allows icons to wrap to next line if container width is too small */
    }

    .icons-container > svg {
        margin: 0 10px;
    }

    .icon {
        width: 50px; /* Adjust as needed */
        height: 50px; /* Adjust as needed */
        margin: 0 10px;
    }

    .fade-enter-active, .fade-leave-active {
      transition: opacity .5s;
    }

    .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
      opacity: 0;
    }

</style>
