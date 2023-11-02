<template>
    <section class="w-full h-screen px-40 bg-radial-gradient dark:bg-dark-radial-gradient flex lg:flex-row flex-col items-center justify-center gap-10">
        <div class="max-h-90">
            <intro-login></intro-login>
        </div>
        <div class="max-h-90 max-w-sm"> 
            <login-form></login-form>
        </div>
    </section>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import IntroLogin from '@/components/IntroLogin.vue';
import { useDark } from '@vueuse/core';

export default {
    components: {
        LoginForm,
        IntroLogin
    },
    data() {
        return {
            isDarkMode: useDark(),  
        };
    },
}
</script>

<style scoped>
</style>