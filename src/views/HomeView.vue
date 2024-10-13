<script setup lang="ts">
import { reactive } from 'vue';
import { useUserStore } from '@/stores/userStore';
import type { User } from '@/models/UserModel';
import { useAuthStore } from '@/stores/authStore';
import { useRouter } from 'vue-router';

const user: User = reactive<User>(useUserStore().user)

const authStore = useAuthStore();
const router = useRouter()

function logout(){
    authStore.logout().then(() =>  router.push('/'));
}

</script>

<template>
    <h1 class="title">Hola: {{ user.username }}</h1>
    <h3 class="subtitle">
        Contraseña ingresada: {{ user.password }} <br>
        ¿Recordarme?: {{ user.remember }}
    </h3>
    <button @click="logout()">Logout</button>
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
