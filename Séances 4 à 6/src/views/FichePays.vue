<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from 'axios'

const route = useRoute()
const id = ref(route.params.id)
const country = ref(null)

axios.get(`https://restcountries.com/v3.1/name/${id.value}`)
  .then((response) => {
    country.value = response.data[0];
  })
  .catch((error) => {
    console.error("Error fetching country data:", error);
  });
</script>

<template>
  <div class="pays">
    <h1>Pays : {{ country.translations.fra.common }}</h1>
    <img :src="country.flags.png" alt="Drapeau du pays" /> 
    <p>Capitale : {{ country.capital[0] }}</p>
    <p>Population : {{ country.population }} personnes</p>
    <p>Superficie : {{ country.area }} km²</p>
    <p></p>
  </div>
</template>

<style scoped>
    .pays{
        margin: 10px;
        padding: 10px;
        border: 1px solid black;
    }
    img{
        width: 200px;
        border: 1px solid black;
    }
</style>