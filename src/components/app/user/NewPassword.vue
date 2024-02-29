<template>
    <section class="w-full h-screen px-40 bg-radial-gradient dark:bg-dark-radial-gradient flex items-center justify-center lg:flex-row flex-col gap-10">
        <div class="flex flex-col">
            <intro-login gap="gap-20"></intro-login>
        </div>
        <form @submit.prevent="changePassword" class="p-10 my-2 bg-white dark:bg-[#303A3F] rounded-3xl shadow-2xl max-w-sm">
            <header-text header="Nova šifra" text="Unesi svoju email adresu i link će biti poslat za dodavanje nove šifre."/>
            <div class="my-2">
                <input-label :model-value="data.password" @update:model-value="newValue => data.password = newValue" for1="password" input="password" text="Šifra" />
            </div>
            <input-label :model-value="data.password2" @update:model-value="newValue => data.password2 = newValue" for1="password" input="password" text="Potvrdi šifru" />
            <p @click="navigateToRegistration" class="cursor-pointer text-[#67B0FF] dark:text-[#72B5FF] text-[12px] leading-[11.38px] font-medium md:text-right text-center py-2 border-b-[0.4px] border-[#d1d1d1] border-opacity-[26%]">Nemaš nalog?</p>
            <form-buttons @click="navigateToLogin" text="Promeni šifru"/>
        </form>

    </section>
</template>

<script>
import FormButtons from '../../buttons/FormButtons.vue';
import HeaderText from '../../HeaderText.vue';
import InputLabel from '../../input/InputLabel.vue';
import IntroLogin from '../../IntroLogin.vue';
import { useDark } from '@vueuse/core';
import router from '../../../router';

export default {
    components: {
        IntroLogin,
        HeaderText,
        InputLabel,
        FormButtons,
    },
    data() {
        return {
            isDarkMode: useDark(),
            data: {
                password: '',
                password2: ''
            }
        };
    },
    methods: {
        navigateToRegistration() {
            router.push('/register')
        },
        changePassword() {
            this.resetPassword(this.data)
        },
        navigateToLogin() {
            router.push('/login')
        }

    }
}
</script>

