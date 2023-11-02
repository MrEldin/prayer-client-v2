<template>
    <div class="hidden md:block">
        <div class="w-20"> 
            <img src="@/assets/logo.svg" alt="" />
        </div>
        <div class="text-center lg:text-left flex flex-col" :class="gap">
            <div class="md:text-left text-center"> 
                <h3 class="mt-10 max-w-sm font-[100px] md:text-2xl text-xl leading-[23.44px] text-slate-200">Prayer je svetlo koje pomaže vernicima da nemaju izgovor.</h3>
                <p class="mt-8 max-w-xs text-white text-[13px] font-[400px] leading-[15.23px] font-style: italic">Nismo očekivali ovoliko veliki napredak prayer-a, ali vi ste delom učinili da svetlo opstane. Hvala vam.</p>
            </div>
            <div> 
                <p class="mt-16 max-w-xs text-white text-[13px] leading-[15.23px] font-style: italic">Ustrajni budite u svom namazu.</p>
            </div>
        </div>
    </div>
</template>

<script> 
export default {
    props: {
        gap: {
            default: "gap-32"
        },
            
    }
}
</script>

<style>
    h3, p {
        font-family: 'Roboto';
    }

</style>

