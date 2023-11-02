<template> 
    <section class="w-full h-screen px-40 bg-radial-gradient dark:bg-dark-radial-gradient flex items-center justify-center lg:flex-row flex-col gap-10">
        <div> 
            <intro-login gap="gap-2"></intro-login>
        </div>
        <form class="p-10 my-2 bg-white dark:bg-[#303A3F] rounded-3xl shadow-2xl max-w-xs"> 
            <header-text header="Resetuj šifru" text="Unesi svoju email adresu i link će biti poslat za dodavanje nove šifre."/>
            <div class="my-2"> 
                <input-label text="Email" />
            </div>
            <p class="text-[#67B0FF] dark:text-[#72B5FF] text-[12px] leading-[11.38px] font-medium md:text-right text-center py-2 border-b-[0.4px] border-[#d1d1d1] border-opacity-[26%]">Setio si se?</p>
            <form-buttons text="Restartuj šifru"/>
        </form>
        
    </section>
</template>

<script>
import FormButtons from '../../buttons/FormButtons.vue';
import HeaderText from '../../HeaderText.vue';
import InputLabel from '../../input/InputLabel.vue';
import IntroLogin from '../../IntroLogin.vue';
import { useDark } from '@vueuse/core';

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
        };
    },
}
</script>
