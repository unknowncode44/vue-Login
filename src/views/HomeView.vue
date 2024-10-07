<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';

// computed permite crear props reactivas basadas en otras variables
import { computed } from 'vue';
// Instanciamos store para acceder a su state
const userStore = useUserStore();
// Definimos const computada para que se actualice cuando cambie la info del estado
const userInfo = computed(() => userStore.userInfo);
</script>

<template>
    <h1 class="title">Usuario ingresado: {{ userInfo.user }}</h1>
    <h3 class="subtitle">
        Contraseña ingresada: {{ userInfo.password }} <br>
        ¿Recordarme?: {{ userInfo.remember }}
    </h3>
</template>

<style scoped>
.title{
    font-size: 27px;
    text-align: center;
    color: white;
}

.subtitle{
    font-size: 24px;
    text-align: center;
    color: white;
}
</style>
