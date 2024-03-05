<template>
  <div>
    <input v-model="recherche" placeholder="Rechercher un pays" />
    <button @click="filtrerPays">Filtrer</button>

    <CardPays v-for="pays in paysFiltres"
      :key="pays.cca3"
      :nom="pays.name.common"
      :capital="pays.capital"
      :drapeau="pays.flags.png">
    </CardPays>
  </div>
</template>

<script setup>
import CardPays from '@/components/CardPays.vue'
import { ref, onMounted } from 'vue'
import axios from 'axios'

let data = ref('');
let paysFiltres = ref([]);
let recherche = ref('');

onMounted(async () => {
  const response = await axios.get('https://restcountries.com/v3.1/all')
  data.value = response.data;
  paysFiltres.value = data.value;
});

const filtrerPays = () => {
  paysFiltres.value = data.value.filter((pays) =>
    pays.name.common.toLowerCase().includes(recherche.value.toLowerCase())
  );
};
</script>

<style scoped>
*{
  font-family: 'Outfit';
}
</style>
