<template>
    <form @submit.prevent="navigateToDashboard" class="p-10 my-2 bg-white dark:bg-[#303A3F] rounded-3xl shadow-2xl w-[350px]">
        <header-text header="Uloguj se" text="Unesi svoju email adresu i unesi svoju šifru kako bi mogao da počneš sa korišćenjem naše aplikacije"/>
        <div class="my-2">
            <input-label :model-value="data.email" @update:model-value="newValue => data.email = newValue" text="Email" />
        </div>
        <div class="my-2">
            <input-label :model-value="data.password" @update:model-value="newValue => data.password = newValue" text="Šifra" input="password"/>
        </div>
        <p @click="navigateToReset" class="cursor-pointer text-[#67B0FF] dark:text-[#72B5FF] text-[12px] leading-[11.38px] font-medium md:text-right  text-center py-2 border-b-[0.4px] dark:border-[#d1d1d1] dark:border-opacity-[26%]">Zaboravio si šifru?</p>

        <form-buttons text="Prijavi se" bg="bg-[#FF9375]"></form-buttons>
        <form-buttons @click="navigateToRegistrtion()" text="Registruj se"></form-buttons>
    </form>
</template>

<script setup>
import FormButtons from '@/components/buttons/FormButtons.vue';
import HeaderText from '@/components/HeaderText.vue';
import InputLabel from '@/components/input/InputLabel.vue';
import router from '../router';
import {useAuthStore} from "@/store/auth/index.js";
import {reactive} from "vue";

const data = reactive({
    email: '',
    password: ''
})

const authStore = useAuthStore()

const navigateToReset = () => {
    router.push('/reseting')
}

const navigateToRegistrtion = () => {
    router.push('/register')
}

const navigateToDashboard = () => {
  authStore.login(data)
}
</script>
