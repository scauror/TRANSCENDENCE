<template>
  <div id="home">
    <header>
      <nav>
        <div class="header">
          <router-link to="/">
            <img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
          </router-link>
          <h1 class="title">game modes</h1>
        </div>
      </nav>
    </header>
    <main>
        <section class="main-buttons">
          <router-link to="/play/solo" class="glowing-btn">
            <span class="glowing-txt">solo<span class="faulty-letter"> vs </span>ia</span>
          </router-link>
          <router-link to="/play/local" class="glowing-btn">
            <span class="glowing-txt">loc<span class="faulty-letter">a</span>l</span>
          </router-link>
          <router-link to="/play/multiplayer" class="glowing-btn">
            <span class="glowing-txt">m<span class="faulty-letter">u</span>lt<span class="faulty-letter">ip</span>lay<span class="faulty-letter">e</span>r</span>
        </router-link>
        <router-link to="/play/tournament" class="glowing-btn">
          <span class="glowing-txt">t<span class="faulty-letter">ou</span>r<span class="faulty-letter">nam</span>ent</span>
        </router-link>
      </section>
  </main>
  <footer>
      <div class="footer">
        <h1 class="title2">ft_transcendence</h1>
        <router-link to="/">
          <img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
        </router-link>
      </div>
    </footer>
  </div>
</template>

<script setup>

</script>

<style scoped>

@import '../styles/MainStyle.css';


</style>