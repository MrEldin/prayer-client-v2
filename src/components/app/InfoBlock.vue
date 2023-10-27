<template>

    <div class="px-20 flex items-center justify-center flex-col py-20 bg-[#E8FFFC]">
         
        <h1 class="text-4xl lg:text-center font-bold mb-6">Malo o prayeru</h1>
        <p class="max-w-5xl lg:text-center text-md text-[#15353B] opacity-70 leading-tight mb-6">Prayer vam omogućava da lakše ispunite svoje vjerske obaveze, tako što vam daje tačne podatke o namaskim vremenima, smjernice za klanjanje i izvor duhovne inspiracije u vidu Kur'anskog teksta, hadisa i molitvi. S obzirom na to da smo svi deo ummeta, naša aplikacija također omogućava da ostanete povezani sa vašom zajednicom.</p>
        

        <div class="mt-10 relative flex items-center justify-center md:flex-row flex-col gap-20">
        <info-card 
            image="pray-time-icon.svg"
            title="Namaz"
            text="Kao što je rekao Allahov poslanik Muhamed s.a.w.s, kada je jedan čovjek došao i upitao ga: 'Koja su djela najdraža Allahu?' Poslanik, s.a.w.s odgovorio je: 'Obavljati propisane namaze na vrijeme'. Dozvolite da vam Prayer pomogne u tome." 
        />
        
            
        <info-card
            image="book-saved.svg" 
            title="Zbirke hadisa" 
            text="Prayer vam pruža pristup značajnoj zbirki hadisa, koja sadrži reči i postupke Poslanika, s.a.w.s. Kao što je zabilježio Muslim, Poslanik je rekao: 'Ostavljam vam ono što, ako se držite toga, nećete zalutati, Kitab Allaha (Kur'an) i Sunet svojih Poslanika'."
        
        />

        <info-card
            image="message-question.svg" 
            title="Kviz" 
            text="Prayer vam omogućava da svoje znanje o islamu provjerite putem kviza, koji se sastoji od pitanja vezanih za Kur'an, hadise, islamsku istoriju i praksu. Kao što je zabilježio Ibn Majah, Poslanik je rekao: 'Najbolji od vas su oni koji uče Kur'an i koji ga podučavaju drugima'. (Ibn Majah)."
        
        />
        
        </div>
   </div>
</template>

<script>
import InfoCard from './InfoCard.vue'

export default {
  components: { InfoCard },
    name: "InfoBlock",
    
}
</script>

<style scoped>
h1 {
  font-family: "Ramadanish";
}
</style>