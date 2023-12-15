<template>
    <div class="w-full flex flex-row">
        <div class="h-full bg-[#1A534E] px-6 pt-6">
            <img src="@/assets/logo.svg" alt="" class="w-16"/>
        </div>
        <div class="flex flex-col w-full"> 
            <div class="text-end">
                <h3 class="text-[12px] leading-[14.06px] text-[#1A534E]">Eldin Mujovic</h3>
                <p class="text-[10px] leading-[11.72px] text-[#A3A3A3]">Pisac</p>
            </div>
            <div class="bg-[#F2F8F7]">
                <h3 class="text-[#163D3D] text-[24px] leading-[29.05px] font-normal">Dobrodosao nazad, Eldin</h3>
                <p class="#9B9B9B text-[12px] leading-[14.52px]">Ovde zivi sveobuhvatna statistika za sve tvoje aktivnosti.</p>
            </div>
            <div class="flex flex-row gap-4"> 
                <dashboard-card 
                    header="Ukupno lajkova" 
                    number="3590" 
                    text="U zadnjih nedelju dana dobili ste +237 lajkova na svim vasim knjigama. Ovo je vrlo dobar progres."
                    number2="+ 12.89 %"/>
                <dashboard-card 
                    header="Ukupno dislajkova" 
                    number="13" 
                    text="U zadnjih tri meseca napravili ste 38 strana u 5 razlicitih knjiga.Vas progres je znatan." 
                    number2="+ 30.39 %"/>
                <dashboard-card 
                    header="Ukupno knjiga" 
                    number="4" 
                    text="U zadnjih tri meseca napravili ste 38 strana u 5 razlicitih knjiga.Vas progres je znatan."
                    number2="+ 12.89 %"/>
                <dashboard-card 
                    header="Ukupno citanja" 
                    number="26899" 
                    text="U zadnjih tri meseca napravili ste 38 strana u 5 razlicitih knjiga.Vas progres je znatan."
                    number2="+ 12.89 %"/>
                <dashboard-card 
                    header="Ukupno objavljenih knjiga" 
                    number="6" 
                    text="U zadnjih tri meseca napravili ste 38 strana u 5 razlicitih knjiga.Vas progres je znatan."
                    number2="+ 12.89 %"/>
            </div>
        </div>
    </div>
</template>

<script>
import DashboardCard from '../DashboardCard.vue';
export default {
    components: {
        DashboardCard
    }
}
</script>