<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <RouterLink class="routes" to="/"> Home </RouterLink>
    <RouterLink class="routes" to="/about"> About </RouterLink>
    <RouterLink class="routes" to="/pays"> Pays </RouterLink>
    <RouterLink class="routes" to="/recherche"> Recherche </RouterLink>
    <RouterLink class="routes" to="/fournisseurs"> Fournisseurs </RouterLink>
    <RouterView></RouterView>
</template>

<style scoped>
    .routes{
        margin: 10px;
        font-weight: bold;
        text-decoration: none;
    }

</style>
