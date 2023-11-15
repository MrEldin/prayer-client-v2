<template> 
    <section class="w-full h-screen px-40 bg-radial-gradient dark:bg-dark-radial-gradient flex items-center justify-center lg:flex-row flex-col gap-10">
        <div> 
            <intro-login gap="gap-56"></intro-login>
        </div>
        <form @submit.prevent="createAccount" class="p-10 my-2 bg-white dark:bg-[#303A3F] rounded-3xl shadow-2xl max-w-sm"> 
            <header-text header="Registruj se" text="Unesi svoje ime i prezime, email adresu i unesi svoju šifru kako bi mogao da počneš sa korišćenjem naše aplikacije."/>
            <div class="mt-2"> 
                <input-label input="text" :model-value="data.firstName" @update:model-value="newValue => data.firstName = newValue" text="Ime" />
            </div>
            <div class="mt-2"> 
                <input-label input="text"  :model-value="lastName" @update:model-value="newValue => data.lastName = newValue" text="Prezime" />
            </div>
            <div class="mt-2"> 
                <input-label input="text"  :model-value="data.email" @update:model-value="newValue => data.email = newValue" text="Email" />
            </div>
            <div class="mt-2"> 
                <input-label input="password"  :model-value="data.password" @update:model-value="newValue => data.password = newValue" for1="password" text="Šifra" />
            </div>
            <p @click="navigateToLogin" class="cursor-pointer text-[#67B0FF] dark:text-[#72B5FF] text-[12px] leading-[11.38px] font-medium md:text-right text-center py-2 border-b-[0.4px] border-[#d1d1d1] border-opacity-[26%]">Imaš nalog?</p>
            <form-buttons text="Napravi nalog"/>
        </form>
        
    </section>
</template>

<script>
import FormButtons from '@/components/buttons/FormButtons.vue';
import HeaderText from '@/components/HeaderText.vue';
import InputLabel from '@/components/input/InputLabel.vue';
import IntroLogin from '@/components/IntroLogin.vue';
import { useDark } from '@vueuse/core';
import router from '@/router';
import { mapActions } from 'vuex';


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
                firstName: '',
                lastName: '',
                email: '',
                password: ''
        }  
        };
    },
    methods: {
        ...mapActions('auth', ['register']),
        createAccount() {
            this.register(this.data)
        },
        navigateToLogin() {
            router.push('/login')
        }
    
    },
}
</script>
