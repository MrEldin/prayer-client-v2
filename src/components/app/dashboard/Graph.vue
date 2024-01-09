<template>
    <div class="w-[609px] h-[251px] bg-white rounded-[10px] border-[0.3px] border-[#CFCFCF]">
        <div class="flex flex-row justify-between"> 
            <div class="px-10 pt-8"> 
                <h3 class="text-[#657B7B] text-[12px] leading-[11.38px]">Kolicina lajkova na dnevnom nivou po jednoj knjizi</h3>
                <p class="text-[#1A4747] text-[24px] font-semibold">245</p>
            </div>
            <div class="h-[16px] rounded-md border-[0.38px] mt-10 px-3 py-1 mr-7"> 
                <p class="text-[8px] text-[#787878] leading-[7.59px]">Sira Allahovog poslanika s.a.w.s.</p>
            </div>
        </div>
        <graph-app />
    </div>
</template>

<script>
import GraphApp from '../graphline/GraphApp.vue'



export default {
  components: { GraphApp },
  
}
</script>