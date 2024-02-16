<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import Notes from './components/Notes.vue'
import { computed, ref } from 'vue';
      const symfony = 8
      const integration = 14.17
      const sae302d = 16

      const title = 'Bienvenue sur mon premier site en Vue.js !'
      const paragraphe = 'Ce site est mon tout premier site réalisé avec le framework front Vue.js, dans le cadre de la 2ème année du BUT MMI.'

      const tableau = ["Libbrecht", "Annebicque", "Gommery", "Bresson", "Le Saulnier"]
      const liste = computed(() => {
        return tableau.join(', ')
      })

      const awesome = ref(false)

      const seance2exo1 = [15.4, 9.6, 7.2, 8.1, 10.6]
      const seance2exo2 = [15.4, 9.6, 12.8, 10.6, 7.2, 16.3, 18.9, 4.7, 11.2, 9.8]
</script>

<template>
  <main>

    <h1>SEANCE 1</h1>

    <h2>{{ title }}</h2>
    <p>{{ paragraphe }}</p>

      <ul>
        <li>Note en Symfony : {{ symfony }}</li>
        <li>Note en Développement Front : {{ integration }}</li>
        <li>Note pour la SAE 302 : {{ sae302d }}</li>
      </ul>

    <Notes/>

    <h3>Voici quelques enseignants de la formation MMI :</h3>
    <ul class="profs">
      <li v-for="enseignant in tableau" :key="enseignant">
        M. {{ enseignant }}
      </li>
    </ul>


    <!-- SEANCE 2 - BOUCLES ET TESTS -->

    <h1>SEANCE 2</h1>

    <div class="button">
      <h3 v-if="awesome">Vue est magnifique !</h3>
      <h3 v-else>Oh non 😢</h3>
      <button @click="awesome = !awesome">Basculer</button>
    </div>

    <h3>Voici des notes colorisés selon certaines conditions :</h3>
    <h4>Séance 2 - 1</h4>
    <ul class="seance2-1">
      <li v-for="note in seance2exo1" :key="note">
        <span v-if="note >= 10" class="green">{{note}} : La note est au-dessus de 10.</span>
        <span v-else-if="note >= 8" class="orange">{{note}} : La note est entre 8 et 10.</span>
        <span v-else class="red">{{note}} : La note est en-dessous de 8.</span>
      </li>
    </ul>

    <!-- <h4>Séance 2 - 2</h4>
    <ul class="seance2-2">
      <li v-for="note2 in seance2exo2" :key="note2">
        <span v-if="note2 >= 10" class="green">{{note2}}</span>
        <span v-else-if="note2 >= 8" class="orange">{{note2}}</span>
        <span v-else class="red">{{note2}}</span>
      </li>
    </ul> -->

    <!-- SEANCE 3 -->

    <h1>SEANCE 3</h1>



  </main>
</template>



<style scoped>

  h1{
    margin: 20px 0 10px 0;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
  }

  p{
    margin: 8px 0 8px 5px;
  }

  ul{
    margin: 6px 0;
  }

  .button{
    margin: 0 auto;
    text-align: center;
    margin-bottom: 20px;
  }

  .profs li{
      display: inline-flex;
      margin: 0 5px;
    }

  .green{
    color: green;
  }
  .orange{
    color: orange;
  }
  .red{
    color: red;
  }

@media (min-width: 1024px) {
    header {
      display: flex;
      place-items: center;
      padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
      margin: 0 2rem 0 0;
    }

    header .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }
</style>
