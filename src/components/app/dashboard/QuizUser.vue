<template>
    <div class="rounded-[10px] bg-white h-[251px] border-[0.3px] border-[#CFCFCF]">
        <div class="flex justify-between items-center"> 
            <h3 class="text-[12px] text-[#657B7B] leading-[14.52px] my-3 ml-5">Učesnici kvizova</h3>
            <div class="flex gap-2"> 
                <div class="rounded-md border-[0.38px] px-3 my-2 flex items-center gap-2 "> 
                    <p class="text-[8px] text-[#787878] leading-[7.59px]">Šerijatsko pravo</p>
                    <i class="pr pr-arrow-bottom-87we text-[#888888]"></i>
                </div>
                <button class="mr-6"> 
                    <i class="pr pr-more"></i>
                </button>
            </div>
        </div>
        <table class="w-full score-table">
            <tr class="bg-[#ECF9F7] text-[12px] font-[300] text-[#797979]">
                <td>NO</td>
                <td>IME I PREZIME</td>
                <td>TAČNIH</td>
                <td>NETAČNIH</td>
                <td>VREME</td>
            </tr>
            <tr class="py-4 text-[12px] font-[300] text-[#797979]">
                <td>1</td>
                <td>Eldin Mujović</td>
                <td>26</td>
                <td>0</td>
                <td> <span class="px-2 rounded-lg text-white bg-[#519F95]">00:12 min</span></td>
            </tr>
            <tr class="text-[12px] font-[300] text-[#797979]">
                <td>2</td>
                <td>Emana Mujović</td>
                <td>26</td>
                <td>2</td>
                <td><span class="px-2 rounded-lg text-white bg-[#F2C29E]">00:12 min</span></td>
            </tr>
            <tr class="text-[12px] font-[300] text-[#797979]">
                <td>3</td>
                <td>Muamer Sarapa</td>
                <td>26</td>
                <td>6</td>
                <td><span class="px-2 rounded-lg text-white bg-[#F2C29E]">00:12 min</span></td>
            </tr>
            <tr class="text-[12px] font-[300] text-[#797979]">
                <td>4</td>
                <td>Fahir Zilkić</td>
                <td>26</td>
                <td>12</td>
                <td> <span class="px-2 rounded-lg text-white bg-[#519F95]">00:05 min</span></td>
            </tr>
            <tr class="text-[12px] font-[300] text-[#797979]">
                <td>5</td>
                <td>Sulejman Veličanjstvenak</td>
                <td>26</td>
                <td>24</td>
                <td><span class="px-2 rounded-lg text-white bg-[#F2C29E]">00:08 min</span></td>
            </tr>
        </table>

    </div>
    
</template>

<script>
export default {
    
    methods: {
        
    }
}
</script>

<style scoped>
.score-table tr td {
    padding-left: 20px;
    padding-top: 7px;
    padding-bottom: 7px
}
</style>