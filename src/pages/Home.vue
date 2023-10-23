<template>
 <main-hero />
 <info-block />
 <features-info />
</template>

<script>
import InfoBlock from '../components/app/InfoBlock.vue';
import FeaturesInfo from '../components/app/FeaturesInfo.vue';
import MainHero from '../components/app/MainHero.vue';

export default {
    components: {
      InfoBlock,
      FeaturesInfo,
      MainHero,
    },
    props: {

    }
}
</script>

<style scoped>

</style>
