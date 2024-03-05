<script setup>
</script>

<template>
    <h1>Voici une liste de pays :</h1>
    <ul>
        <li v-for="liste in 10" :key="liste">
            <router-link :to="'/fiche-pays/' + liste">Pays {{liste}}</router-link>
        </li>
    </ul>
</template>