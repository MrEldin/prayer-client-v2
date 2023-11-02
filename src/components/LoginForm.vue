<template>
    <form class="p-10 my-2 bg-white dark:bg-[#303A3F] rounded-3xl shadow-2xl max-w-sm">
        
            <header-text header="Uloguj se" text="Unesi svoju email adresu i unesi svoju šifru kako bi mogao da počneš sa korišćenjem naše aplikacije"/>
            <div class="my-2"> 
                <input-label text="Email" />
            </div>
            <div class="my-2">
                <input-label text="Password" input="password"/>
            </div>
            <p class="text-[#67B0FF] dark:text-[#72B5FF] text-[12px] leading-[11.38px] font-medium md:text-right  text-center py-2 border-b-[0.4px] dark:border-[#d1d1d1] dark:border-opacity-[26%]">Zaboravio si šifru?</p>
        
         
            <form-buttons text="Prijavi se" bg="bg-[#FF9375]"></form-buttons>
            <form-buttons text="Registruj se"></form-buttons>
        
    </form>
</template>

<script>
import FormButtons from '@/components/buttons/FormButtons.vue';
import HeaderText from './HeaderText.vue';
import InputLabel from './input/InputLabel.vue';

export default {
    components: {
        FormButtons,
        InputLabel,
        HeaderText,
    
    }
    
}
</script>