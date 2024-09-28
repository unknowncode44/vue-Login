<script setup lang="ts">
import LoginForm from '@/components/LoginForm.vue';
import { useUserStore } from '@/stores/userStore';
// computed permite crear props reactivas basadas en otras variables
import { computed } from 'vue';

// Instanciamos store para acceder a su state
const userStore = useUserStore();
// Definimos const computada para que se actualice cuando cambie la info del estado
const userInfo = computed(() => userStore.userInfo);
console.log(userStore.userInfo)
</script>


<template>
  <LoginForm />
  <table>
    <thead>
      <tr>
        <th>Usuario </th>
        <th>Password </th>
        <th>Remember </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{{ userInfo.user }}</td>
        <td>{{ userInfo.password }}</td>
        <td>{{ userInfo.remember }}</td>
      </tr>
    </tbody>
    F
  </table>
</template>

<style scoped>
table {
  width: 90%;
  margin-top: 15px;
  margin-right: auto;
  margin-left: auto;
  border: 0.5px solid;
  border-color: gray;
  border-spacing: 0;
}

thead {
  background: #aa0486;
  height: 50px;
  color: #fff;
}

td {
  color: white !important;
}
</style>
