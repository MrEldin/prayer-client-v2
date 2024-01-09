<template>
    <div class="rounded-[10px] bg-white w-[609px] h-[251px] border-[0.3px] border-[#CFCFCF]">
        <div class="flex justify-between items-center"> 
            <h3 class="text-[12px] text-[#657B7B] leading-[14.52px] my-3 ml-5">Ucesnici kvizova</h3>
            <div class="rounded-md border-[0.38px] px-3 py-2 mr-7"> 
                <p class="text-[8px] text-[#787878] leading-[7.59px]">Serijatsko pravo</p>
            </div>
        </div>
        <div class="flex flex-col gap-4">
            <ol class="bg-[#ECF9F7] flex flex-row gap-5">
                <li class="text-[12px] text-[#7F7F7F] mx-5 my-2" v-for="name in names" :key="name.message">{{ name.message }}</li>
            </ol>
            <ol class="flex flex-row gap-10">
                <li class="text-[12px] text-[#7F7F7F] mx-5" v-for="number in numbers" :key="number.message">{{ number.message }}</li>
            </ol>
            <ol class="flex flex-row gap-10">
                <li class="text-[12px] text-[#7F7F7F] mx-5" v-for="number2 in numbers2" :key="number2.message">{{ number2.message }}</li>
            </ol>
            <ol class="flex flex-row gap-10">
                <li class="text-[12px] text-[#7F7F7F] mx-5" v-for="number3 in numbers3" :key="number3.message">{{ number3.message }}</li>
            </ol>
            <ol class="flex flex-row gap-10">
                <li class="text-[12px] text-[#7F7F7F] mx-5" v-for="number4 in numbers4" :key="number4.message">{{ number4.message }}</li>
            </ol>
            <ol class="flex flex-row gap-10">
                <li class="text-[12px] text-[#7F7F7F] mx-5" v-for="number5 in numbers5" :key="number5.message">{{ number5.message }}</li>
            </ol>
        </div>

    </div>
    
</template>

<script>
export default {
    data() {
        return {
            names: [ 
                    { message: 'NO' },
                    { message: 'IME I PREZIME' },
                    { message: 'TACNIH'} ,
                    { message: 'NETACNIH'} ,
                    { message: 'VREME'} ,
                     

            ],
            numbers: [ 
                    { message: '1' },
                    { message: 'Eldin Mujovic   ' },
                    { message: '26'} ,
                    { message: '0'} ,
                    { message: '00:12 min'} ,
                     

            ],
            numbers2: [ 
                    { message: '2' },
                    { message: 'Emana Mujovic' },
                    { message: '1'} ,
                    { message: '6'} ,
                    { message: '00:10 min'} ,

            ],
            numbers3: [ 
                    { message: '3' },
                    { message: 'Samir Tandir  ' },
                    { message: '1'} ,
                    { message: '6'} ,
                    { message: '00:10 min'} ,

            ],
            numbers4: [ 
                    { message: '4' },
                    { message: 'Muamer Sarapa' },
                    { message: '1'} ,
                    { message: '6'} ,
                    { message: '00:10 min'} ,

            ],
            numbers5: [ 
                    { message: '5' },
                    { message: 'Fahir Zilkic' },
                    { message: '1'} ,
                    { message: '6'} ,
                    { message: '00:10 min'} ,

            ]
        }
    },
    methods: {
        
    }
}
</script>