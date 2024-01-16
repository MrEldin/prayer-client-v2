<script setup>

</script>

<template>
  <div
      class="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 w-[225px] overflow-hidden bg-[#33706a]"
  >
    <div
        class="flex justify-center items-start self-stretch flex-grow-0 flex-shrink-0 h-[52px] overflow-hidden gap-2.5 p-2.5"
    >
      <div
          class="flex flex-col justify-center items-center self-stretch flex-grow gap-2.5 px-[11px] py-1.5 rounded-[5px] bg-[#1a534e]"
      >
        <div class="flex justify-between items-center self-stretch flex-grow relative">
          <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-white">Search</p>
          <i class="pr pr-search-normal text-white" />
        </div>
      </div>
    </div>
    <div
        class="flex flex-col justify-start items-center self-stretch flex-grow overflow-hidden gap-2.5 p-2.5"
    >
      <div
          class="flex flex-col justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[22px] gap-2.5 rounded-[5px]"
      >
        <div
            class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative"
        >
          <p class="flex-grow-0 flex-shrink-0 text-xs font-light text-left text-white">Stranice</p>
          <div
              class="flex flex-col justify-between items-center self-stretch flex-grow-0 flex-shrink-0 relative"
          >
            <i class="pr pr-more text-white" />
          </div>
        </div>
      </div>
      <div
          class="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0 h-8 relative overflow-hidden p-2.5 rounded-[5px] bg-[#f0f3bd]"
      >
        <p class="flex-grow-0 flex-shrink-0 text-[10px] font-medium text-left text-[#6a7b7a]">
          Dodaj stranu
        </p>
        <i class="pr pr-add text-black" />
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
