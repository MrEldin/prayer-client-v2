<template>
    <div class="flex items-center justify-center bg w-full overflow-visible relative">
        <div class="background"></div>
        <div class="container overflow-visible">
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
.container {
  position: relative;
  z-index: 1; /* This ensures that your content appears on top of the background */
}

.background {
  position: absolute;
  top: 0; /* Move up by 300px */
  right: -300px; /* Move to the right by 300px */
  bottom: 0;
  left: 0;
  z-index: 0; /* This ensures the background is beneath your content */

  background-image: url('../src/assets/prayer-home-big.svg');
  background-repeat: no-repeat;
  background-position: calc(50% + 300px); /* Adjust background position as you wanted */
  background-size: auto; /* You might need to adjust this too */
}

.bg {
    background: radial-gradient(circle, rgba(40,160,136,1) 0%, rgba(29,72,73,1) 100%);
}

</style>


