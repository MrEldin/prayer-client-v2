<template>
    <div class="bg-[#F2F8F7] px-6 h-full">
        <div class="">
            <h3 class="text-[#163D3D] text-[24px] leading-[29.05px] font-normal pt-6">Dobrodosao nazad, Eldin</h3>
            <p class="#9B9B9B opacity-30 text-[12px] leading-[14.52px] pb-6">Ovde zivi sveobuhvatna statistika za sve tvoje aktivnosti.</p>
        </div>
        <div class="bg-[#F2F8F7] flex gap-4">
            <index-card
            header="Ukupno lajkova"
            number="3590"
            text="U zadnjih nedelju dana dobili ste +237 lajkova na svim vašim knjigama. Ovo je vrlo dobar progres."
            number2="+ 12.89 %"
            day="14 danas"/>
            <index-card
            header="Ukupno dislajkova"
            number="13"
            text="U zadnjih tri meseca napravili ste 38 strana u 5 različitih knjiga.Vaš progres je znatan."
            number2="+ 30.39 %"
            day="30 danas"/>
            <index-card
            header="Ukupno knjiga"
            number="4"
            text="U zadnjih tri meseca napravili ste 38 strana u 5 različitih knjiga.Vaš progres je znatan."
            number2="+ 12.89 %"
            day="30 danas"/>
            <index-card
            header="Ukupno citanja"
            number="26899"
            text="U zadnjih tri meseca napravili ste 38 strana u 5 različitih knjiga.Vaš progres je znatan."
            number2="+ 12.89 %"
            day="30 danas"/>
            <index-card
            header="Ukupno objavljenih knjiga"
            number="6"
            text="U zadnjih tri meseca napravili ste 38 strana u 5 različitih knjiga.Vaš progres je znatan."
            number2="+ 12.89 %"
            day="30 danas"/>
        </div>
        <div class="bg-[#F2F8F7] flex flex-grow flex-row gap-6 py-6">
            <div class="flex-1">
                <quiz-user />
            </div>
            <div class="flex-1">
                <graph />
            </div>
        </div>
        <div class="bg-[#F2F8F7]">
            <statistic />
        </div>
    </div>
</template>

<script>
import Graph from './Graph.vue';
import IndexCard from './IndexCard.vue';
import QuizUser from './QuizUser.vue';
import Statistic from './Statistic.vue';

export default {
    components: {
        Statistic,
        Graph,
        QuizUser,
        IndexCard,
    }
}
</script>

