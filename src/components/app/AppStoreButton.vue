<template> 
    <button class="ml-44 mt-10 px-12 py-2 bg-teal-950 rounded-full border-2 border-amber-200 flex flex-row gap-5 justify-center items-center hover:scale-105 duration-300">
        <div>
          <img :src="getUrl(image)" alt="" class="w-5"/>
        </div>
          <div class="flex flex-col items-start gap-0 text-amber-200">
              <p class="btn-small">Preuzmi na</p>
              <p class="text-sm font-bold">App Store</p>
          </div>
      </button>
</template>

<script>
export default {
    name: 'AppStoreButton',
    props: {
        image: String
    },
    methods: {
        getUrl(image) {
            return new URL(`/src/assets/${image}`,import.meta.url).href
        }
    }
}
</script>