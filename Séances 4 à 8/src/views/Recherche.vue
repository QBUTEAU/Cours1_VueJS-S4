<template>
    <div>
      <input v-model="recherche" placeholder="Rechercher un pays" />
      <button @click="rechercher">Rechercher</button>
  
      <div v-for="pays in paysResultats" :key="pays.cca2">
        <router-link :to="'/fiche-pays/' + pays.cca2">
          {{ pays.translations.fra.common }}
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import axios from 'axios';
  
  const recherche = ref('');
  const paysResultats = ref([]);
  
  const rechercher = async () => {
    const response = await axios.get(
      `https://restcountries.com/v3.1/name/${recherche.value}`
    );
    paysResultats.value = response.data;
  };
  </script>

<style scoped>
*{
  font-style: "Outfit";
}
</style>