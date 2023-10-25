<template>
    <div class="hidden md:block">
        <div class="w-20"> 
            <img src="@/assets/logo.svg" alt="" />
        </div>
        <div class="text-center lg:text-left flex flex-col" :class="gap">
            <div class="md:text-left text-center"> 
                <h3 class="mt-10 max-w-sm font-thin md:text-2xl text-xl leading-7 text-slate-200">Prayer je svetlo koje pomaže vernicima da nemaju izgovor.</h3>
                <p class="mt-8 max-w-xs text-white text-sm font-thin tracking-wider leading-4 font-style: italic">Nismo očekivali ovoliko veliki napredak prayera, ali vi ste delom učinili da svetlo opstane. Hvala vam.</p>
            </div>
            <div> 
                <p class="mt-16 max-w-xs text-white text-xs tracking-wider leading-4 font-style: italic">Ustrajni budite u svom namazu.</p>
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
p {
    font-family: 'Roboto';
}
</style>

