<template> 
    <main-hero />
    <info-block />
    <features-info />
</template>

<script>
import MainHero from '../app/MainHero.vue';
import InfoBlock from '../app/InfoBlock.vue';
import FeaturesInfo from '../app/FeaturesInfo.vue';

export default {
    components: {
        MainHero,
        InfoBlock,
        FeaturesInfo
    }
}
</script>