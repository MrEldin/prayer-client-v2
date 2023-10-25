<template> 
    <section class="w-full h-screen px-40 background flex items-center justify-center lg:flex-row flex-col gap-10">
        <div> 
            <intro-login gap="gap-2"></intro-login>
        </div>
        <form class="p-10 my-2 bg-white rounded-3xl shadow-2xl max-w-xs"> 
            <header-text header="Resetuj šifru" text="Unesi svoju email adresu i link će biti poslat za dodavanje nove šifre."/>
            <div class="my-2"> 
                <input-label text="Email" />
            </div>
            <p class="text-blue-500 text-xs md:text-right text-center py-2 border-b-2">Setio si se?</p>
            <form-buttons text="Restartuj šifru"/>
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