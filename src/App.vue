<script setup lang="ts">
import { RouterLink,  RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar">
        <RouterLink id="route"  to="/">Home</RouterLink> 
        <RouterLink id="route" to="/login">Login</RouterLink> 
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<style scoped>
.navbar{
  padding: 10px;
}

#route{
  color: white;
  margin: 10px
}

</style>
