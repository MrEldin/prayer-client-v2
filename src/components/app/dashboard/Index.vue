<template>
    <div class="h-full flex">
        <div class="bg-[#1A534E] max-h-full w-[58px] min-w-[58px] px-2 pt-6 flex flex-col gap-[350px]">
            <div> 
                <img src="@/assets/logo.svg" alt="" class="w-10"/>
            </div>
            <div class="flex flex-col gap-5 items-center "> 
                <div> 
                    <i class="pr pr-scan text-[#AEDBD7] w-[22px] scale-105 ease-out duration-500 cursor-pointer"></i>
                </div>
                <div> 
                    <i class="pr pr-calendar text-white w-[22px]"></i>
                </div>
                <div> 
                    <i class="pr pr-category text-[#AEDBD7] w-[22px]"></i>
                </div>
            </div>
        </div>
        <div class="flex flex-grow flex-col"> 
            <div class="text-end my-4">
                <h3 class="text-[12px] leading-[14.06px] text-[#1A534E]">Eldin Mujovic</h3>
                <p class="text-[10px] leading-[11.72px] text-[#A3A3A3]">Pisac</p>
            </div>
            <div class="bg-[#F2F8F7] px-6">
                <h3 class="text-[#163D3D] text-[24px] leading-[29.05px] font-normal mt-6">Dobrodosao nazad, Eldin</h3>
                <p class="#9B9B9B opacity-30 text-[12px] leading-[14.52px] pb-6">Ovde zivi sveobuhvatna statistika za sve tvoje aktivnosti.</p>
            </div>
            <div class="bg-[#F2F8F7] flex px-6 gap-4"> 
                <index-card 
                    header="Ukupno lajkova" 
                    number="3590" 
                    text="U zadnjih nedelju dana dobili ste +237 lajkova na svim vasim knjigama. Ovo je vrlo dobar progres."
                    number2="+ 12.89 %"
                    day="14 danas"/>
                <index-card 
                    header="Ukupno dislajkova" 
                    number="13" 
                    text="U zadnjih tri meseca napravili ste 38 strana u 5 razlicitih knjiga.Vas progres je znatan." 
                    number2="+ 30.39 %"
                    day="30 danas"/>
                <index-card 
                    header="Ukupno knjiga" 
                    number="4" 
                    text="U zadnjih tri meseca napravili ste 38 strana u 5 razlicitih knjiga.Vas progres je znatan."
                    number2="+ 12.89 %"
                    day="30 danas"/>
                <index-card 
                    header="Ukupno citanja" 
                    number="26899" 
                    text="U zadnjih tri meseca napravili ste 38 strana u 5 razlicitih knjiga.Vas progres je znatan."
                    number2="+ 12.89 %"
                    day="30 danas"/>
                <index-card 
                    header="Ukupno objavljenih knjiga" 
                    number="6" 
                    text="U zadnjih tri meseca napravili ste 38 strana u 5 razlicitih knjiga.Vas progres je znatan."
                    number2="+ 12.89 %"
                    day="30 danas"/>
            </div>
            <div class="bg-[#F2F8F7] flex gap-6 px-6 py-6"> 
                <div> 
                    <quiz-user />
                </div>
                <div>
                    <graph />
                </div>
            </div>
            <div class="bg-[#F2F8F7]"> 
                <statistic />
            </div>
        </div>
    </div>
</template>

<script>
import IndexCard from './IndexCard.vue';
import QuizUser from './QuizUser.vue';
import Graph from './Graph.vue';
import Statistic from './Statistic.vue';

export default {
    components: {
        IndexCard,
        QuizUser,
        Graph,
        Statistic
    }
}
</script>