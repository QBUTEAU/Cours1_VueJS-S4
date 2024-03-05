<script setup>
defineProps({
  nom: {
    type: String,
    required: true,
  },
  capital: {
    type: String,
    required: true,
  },
  drapeau: {
    type: String,
    required: true,
  },
});
</script>
<template>
    <RouterLink class="liens" :to="`/fiche-pays/${nom}`">
        <div class="fiche">
            <img :src="drapeau" :alt="nom">
            <h2>{{ nom }}</h2>
            <p>Capitale : {{ capital[0] }}</p>
        </div>
    </RouterLink>
</template>

<style scoped>
  img {
    width: 150px;
    border: 1px solid black;
    margin-bottom: 10px;
  }
  .liens{
    color: black;
    text-decoration: none;
  }
  .fiche{
    height: max-content;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border: 1px solid black;
    padding: 20px;
    margin: 30px;
  }
  h2, p{
    margin: 0;
  }
  .separate{
    margin: 20px 0;
  }
</style>