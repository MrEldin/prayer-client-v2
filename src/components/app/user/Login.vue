<template>
    <section class="w-full h-screen px-40 background flex lg:flex-row flex-col items-center justify-center gap-10">
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

export default {
    components: {
        LoginForm,
        IntroLogin
    }
}
</script>

<style scoped>
.background {
    background: radial-gradient(circle, rgba(40,160,136,1) 0%, rgba(29,72,73,1) 100%); ;
}
</style>