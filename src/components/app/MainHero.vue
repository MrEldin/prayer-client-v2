<template>
    <div class="flex items-center justify-center bg w-full overflow-visible relative lg:pb-[600px] pb-0">
        <div class="background hidden lg:block"></div>
        <div class="container overflow-visible h-screen">
            <nav-elements />
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
  background-position: calc(20% + 90px) calc(60% - 70px) ; /* Adjust background position as you wanted */
  
}

@media (max-width: 2220px ) {
    .background {
        background-image: url('../src/assets/prayer-home-big.svg');
        background-position: calc(5% - 130px) calc(5% - 540px) ; /* Adjust background position as you wanted */
        
    }
}

@media (max-width: 1920px ) {
    .background {
        background-image: url('../src/assets/prayer-home-big.svg');
        background-position: calc(5% - 250px) calc(5% - 500px) ; /* Adjust background position as you wanted */
        
    }
}

@media (max-width: 1720px ) {
    .background {
        background-image: url('../src/assets/prayer-home-big.svg');
        background-position: calc(15% - 250px) calc(5% - 550px) ; /* Adjust background position as you wanted */
        
    }
}

@media (max-width: 1520px ) {
    .background {
        background-image: url('../src/assets/prayer-home-big.svg');
        background-position: calc(15% - 200px) calc(5% - 520px) ; /* Adjust background position as you wanted */
        
    }
}

@media (max-width: 1440px ) {
    .background {
        background-image: url('../src/assets/prayer-home-big.svg');
        background-position: calc(10% - 280px) calc(5% - 550px) ; /* Adjust background position as you wanted */
    
        
    }
}
@media (max-width: 1280px ) {
    .background {
        background-image: url('../src/assets/prayer-home-big.svg');
        background-position: calc(10% - 260px) calc(5% - 550px) ; /* Adjust background position as you wanted */
    
        
    }
}

@media (max-width: 1180px ) {
    .background {
        background-image: url('../src/assets/prayer-home-big.svg');
        background-position: calc(10% - 350px) calc(5% - 500px) ; /* Adjust background position as you wanted */
    
        
    }
}




.bg {
    background: radial-gradient(circle, rgba(40,160,136,1) 0%, rgba(29,72,73,1) 100%);
}

</style>


