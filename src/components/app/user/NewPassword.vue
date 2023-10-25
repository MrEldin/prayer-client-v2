<template> 
    <section class="w-full h-screen px-40 background flex items-center justify-center lg:flex-row flex-col gap-10">
        <div class="flex flex-col"> 
            <intro-login gap="gap-20"></intro-login>
        </div>
        <form class="p-10 my-2 bg-white rounded-3xl shadow-2xl max-w-sm"> 
            <header-text header="Nova sifra" text="Unesi svoju email adresu i link će biti poslat za dodavanje nove šifre."/>
            <div class="my-2"> 
                <input-label for1="password" input="password" text="Sifra" />
            </div>
            <input-label for1="password" input="password" text="Potvrdi šifru" />
            <p class="text-blue-500 text-xs md:text-right text-center py-2 border-b-2">Nemaš nalog?</p>
            <form-buttons text="Promeni šifru"/>
        </form>
        
    </section>
</template>

<script>
import FormButtons from '../../buttons/FormButtons.vue';
import HeaderText from '../../HeaderText.vue';
import InputLabel from '../../input/InputLabel.vue';
import IntroLogin from '../../IntroLogin.vue';

export default {
    components: {
        IntroLogin,
        HeaderText,
        InputLabel,
        FormButtons,
        
    }
}
</script>

<style scoped>
.background {
    background: radial-gradient(circle, rgba(40,160,136,1) 0%, rgba(29,72,73,1) 100%); ;
}
</style>