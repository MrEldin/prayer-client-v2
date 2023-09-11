<template>
  <VueFinalModal
      class="flex justify-center items-center"
      content-class="flex max-w-xl w-full sm:w-1/2 h-full sm:h-auto bg-white dark:bg-gray-900 dark:border-gray-700 rounded-lg space-y-2"
  >
    <div class="w-2/5 bg-[#f2d7c0] dark:bg-[#465b78] rounded-tl-lg rounded-bl-lg space-y-2 px-6 py-4 hidden sm:block">
      <div class="mb-6 p-4">
        <img v-if="isDarkMode" src="../../assets/ee-logo-dark.svg" alt="" class="" />
        <img v-else src="../../assets/ee-logo.svg" alt="" class="" />
      </div>
      <p class="text-gray-500 dark:text-gray-400 text-xs">
        Da biste potvrdili dolazak na svadbeno veselje, molimo vas da popunite formu.
      </p>
      <p class="text-gray-500 dark:text-gray-400 text-xs">
        Unesite svoje ime i prezime,
        i ako planirate da prisustvujete svatovima, označite checkbox.
      </p>
      <p class="text-gray-500 dark:text-gray-400 text-xs">
        Kliknite na dugme za potvrdu na dnu forme da
        pošaljete informacije. Ovo će nam omogućiti da vas dodamo na listu gostiju i
        adekvatno se pripremimo za vaš dolazak.
      </p>
    </div>
    <div class="w-full sm:w-3/5 h-full flex flex-col mx-4 px-8 py-20 space-y-2 ">
      <h1 class="text-xl mb-6 dark:text-white">
        {{ title }}
      </h1>
      <form @submit.prevent="confirm()">
        <div class="mb-6">
          <label for="inviter" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ime:</label>
          <input v-model="formData.first_name" type="text" id="inviter" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Unesite vaše ime" required>
        </div>
        <div class="mb-6">
          <label for="inviter" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Prezime:</label>
          <input v-model="formData.last_name" type="text" id="inviter" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Unesite vaše prezime" required>
        </div>
        <div class="flex mb-6">
          <div class="flex items-center h-5">
            <input v-model="formData.attendWedding" id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
          </div>
          <div class="ml-2 text-sm ">
            <label for="helper-checkbox" class="font-medium text-gray-900 dark:text-gray-300">Dolazim u svatove</label>
            <p id="helper-checkbox-text" class="text-xs font-normal text-gray-500 dark:text-gray-300">Označi samo ako želis da budeš u svatovima.</p>
          </div>
        </div>
        <div>
          <button type="submit" class="text-white bg-[#de9c62] hover:bg-[#C4834AFF] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Potvrđujem dolazak</button>
        </div>
      </form>
    </div>
  </VueFinalModal>
</template>

<script>
import { VueFinalModal } from 'vue-final-modal'
import { reactive } from "vue";
import axios from 'axios';

export default {
  components: {
    VueFinalModal,
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    isDarkMode: {
      type: Boolean,
      default: false,
    }
  },
  setup(props, { emit }) {
    const formData = reactive({
      title: props.title,
      isDarkMode: props.isDarkMode,
      first_name: '',
      last_name: '',
      attendWedding: false,
    });

    function generateRandomString(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;

      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      return result;
    }

    function confirm() {
      axios.post('https://api.wediiz.com/api/users', {
        first_name: formData.first_name,
        last_name: formData.last_name,
        attend_wedding_convoy: formData.attendWedding,
        email: generateRandomString(10) + '@mail.com',
        password: generateRandomString(10),
      })
      .then(response => {
        // handle response here
        emit('update:modelValue', false);
        emit('confirm', response);
      })
      .catch(error => {
        console.log(error);
        // handle error here
      });
    }

    return {
      confirm,
      formData
    }
  },
}
</script>

<style scoped>
</style>
