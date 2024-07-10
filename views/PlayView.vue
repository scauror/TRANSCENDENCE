<template>
  <div>
    <h1>Game Modes</h1>
    <div class="button-container">
      <router-link to="/play/solo">
        <button @click="navigate('/play/solo')">Solo vs IA</button>
      </router-link>
      <router-link to="/play/local">
        <button @click="navigate('/play/local')">Local</button>
      </router-link>
      <router-link to="/play/multiplayer">
        <button @click="navigate('/play/multiplayer')">Multiplayer</button>
      </router-link>
      <router-link to="/play/tournament">
        <button @click="navigate('/play/tournament')">Tournament</button>
      </router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const navigate = (route) => {
  const router = useRouter();
  router.push(route);
};
</script>

<style scoped>
/* Styles pour PlayView */
</style>
