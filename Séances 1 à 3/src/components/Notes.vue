<script setup>
    import { computed } from 'vue';

    const comprendre = 13.514
    const concevoir = 14.073
    const exprimer = 14.288
    const developper = 11.287
    const entreprendre = 11.888

    const somme = computed(() => {
        return comprendre + concevoir + exprimer + developper + entreprendre
    })

    const moyenne = computed(() => {
        return ((comprendre + concevoir + exprimer + developper + entreprendre) / 5).toFixed(3)
    })

</script>

<template>
    <p>Mes UE lors de mon S3 :<br>
        <ul>
            <li>Comprendre : {{ comprendre }}/20</li>
            <li>Concevoir : {{ concevoir }}/20</li>
            <li>Exprimer : {{ exprimer }}/20</li>
            <li>Développer : {{ developper }}/20</li>
            <li>Entreprendre : {{ entreprendre }}/20</li>
        </ul>
    La somme de ces UE est de {{ somme }}, et la moyenne est de {{ moyenne }}/20.</p>
</template>