<template> 
    <div class="bg-gradient-to-l to-teal-600 from-teal-950">
        <div class="container background large">

            <nav-elements :navItems="['Vremena', 'Aplikacija', 'Opcije', 'Gradovi']"/>
            <hero
                title="Vaš Din, Vaš Mir" 
                subtitle="Borite se za ahiret, jer on je večan. Ako se budemo borili za dunjaluk, dunjaluk ćemo i dobiti, ali moguće je da ćemo ahiret izgubiti."
            />
        </div>
        <div class=""> 
            <div class="wave">
            </div>
        </div>
  </div>
</template>

<script>
import Hero from './Hero.vue'
import NavElements from './NavElements.vue'


export default {
  components: { NavElements, Hero },
  name: "MainHero"
    
}
</script>

<style scoped>
    .background {
    background-image: url('../src/assets/prayer-home-big.svg');
    background-repeat: no-repeat;
    background-size: cover; 
}

.large {
  padding-bottom: 60%;
}

.btn-small{
  font-size: 9px;
}

.wave {
    display: block;
    position: relative;
    height: 40px;
    width: 100%;
    transform: scale(1, 1);
}

.wave:before {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100%;
    width: 100%;
    height: 300px;
    background: #0d9488;
    left: -25%;
    top: -240px;
    clip-path: ellipse(100% 15% at -15% 100%);
}

.wave:after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 100%;
    width: 100%;
    height: 300px;
    background-color: #E8FFFC;
;
    right: -25%;
    top: 20px
}
</style>


