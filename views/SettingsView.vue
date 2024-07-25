<template>
  <div id="settings">
    <header>
			<nav>
				<div class="header">
        <router-link to="/">
          <img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
        </router-link>
				<h1 class="title">settings</h1>
				</div>
			</nav>
		</header>
    <main>
      <section class="settings-buttons">
        <table>
          <tr>
            <td></td>
            <td>
              <router-link to="/settings/settings_general" class="glowing-btn">
                <span class="glowing-txt">ge<span class="faulty-letter">ner</span>al</span>
              </router-link>
            </td>
            <td></td>
          </tr>
          <tr>
            <td>
              <router-link to="/settings/settings_graphics" class="glowing-btn">
                <span class="glowing-txt"><span class="faulty-letter">gra</span>p<span class="faulty-letter">hi</span>cs</span>
              </router-link>
            </td>
            <td></td>
            <td>
              <router-link to="/settings/credits" class="glowing-btn">
                <span class="glowing-txt">cre<span class="faulty-letter">dit</span>s</span>
              </router-link>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <router-link to="/settings/settings_audio" class="glowing-btn">
                <span class="glowing-txt">a<span class="faulty-letter">u</span>d<span class="faulty-letter">i</span>o</span>
              </router-link>
            </td>
            <td></td>
          </tr>
        </table>
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