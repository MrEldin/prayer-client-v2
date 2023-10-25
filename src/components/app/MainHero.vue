<template> 
    <div class="flex items-center justify-center bg w-full">
        <div class="container overflow-visible background large">

            <nav-elements :navItems="['Vremena', 'Aplikacija', 'Opcije', 'Gradovi']"/>
            <hero
                title="Vaš Din, Vaš Mir" 
                subtitle="Borite se za ahiret, jer on je večan. Ako se budemo borili za dunjaluk, dunjaluk ćemo i dobiti, ali moguće je da ćemo ahiret izgubiti."
            />
        </div>
    </div>
</template>

<script>
import Hero from './Hero.vue'
import NavElements from './NavElements.vue'


export default {
  components: { NavElements, Hero},
  name: "MainHero"
    
}
</script>

<style scoped>
    .background {
    background-image: url('../src/assets/prayer-home-big.svg');
    background-repeat: no-repeat;
    background-size: cover; 
}

.bg {
    background: radial-gradient(circle, rgba(40,160,136,1) 0%, rgba(29,72,73,1) 100%);
}

.large {
  padding-bottom: 50%;
}

.btn-small{
  font-size: 9px;
}

</style>


