<template> 

    <artificial-intelligence
        image="ai-image.svg"
        header="Veštačka inteligencija"
        para1="Naša islamska aplikacija je vaš najbolji izvor informacija o halal hrani. Kao što je zabilježeno u Sahihu Buhariju:"
        para2="Od Ibn Abbasa se prenosi da je Poslanik, s.a.w.s, rekao: 'Allah je dobar i prihvaća samo ono što je dobro. Allah je naredio vjernicima isto što je naredio i poslanicima: 'Jedite ono što je halal i dobro, i postupajte ispravno. Zaista, Ja dobro znam šta radite.''"
        para3="Naša aplikacija ima funkciju koja vam pomoću veštačke inteligencije omogućava da lako i brzo provjerite da li je proizvod halal za konzumaciju, uz jednostavno skeniranje labele proizvoda."
        :left="true"
    />


    <artificial-intelligence
        image="big-screen-image.svg"
        header="Radimo na velikim ekranima" 
        para1="U današnjem svijetu, brzina i praktičnost su ključni faktori u našim životima. Kada je u pitanju učenje i prakticiranje islamskih vrednosti, važno je imati alate koji su lako dostupni i jednostavni za korišćenje."
        para2="Naša aplikacija je upravo takav alat - optimizirana za sve vrste ekrana, od pametnih telefona do tableta i računara, tako da uvijek možete pristupiti svim vašim omiljenim funckijama i sadržajima."
        para3="Bez obzira na veličinu ekrana na kojem koristite aplikaciju, sve funkcije su jednako dostupne i lako dostupne."
        :left="false"

    />
</template>

<script>
import ArtificialIntelligence from './ArtificialIntelligence.vue'
export default {
  components: { ArtificialIntelligence },
    
}
</script>