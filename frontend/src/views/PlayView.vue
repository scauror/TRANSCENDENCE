<template>
	<div id="home">
		<header>
			<nav>
				<div class="header">
					<img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
					<h1 class="title">GAME MODES</h1>
				</div>
			</nav>
		</header>
		<main>
			<section class="main_buttons">
				<router-link to="/play/solo" class="glowing-btn">
					<span class="glowing-txt">SOLO<span class="faulty-letter"> VS </span>IA</span>
				</router-link>
				<router-link to="/play/local" class="glowing-btn">
					<span class="glowing-txt">LOC<span class="faulty-letter">A</span>L</span>
				</router-link>
				<router-link to="/play/multiplayer" class="glowing-btn">
					<span class="glowing-txt">MULT<span class="faulty-letter">IP</span>LAYER</span>
				</router-link>
				<router-link to="/play/tournament" class="glowing-btn">
					<span class="glowing-txt">T<span class="faulty-letter">OURNAM</span>ENT</span>
				</router-link>
			</section>
		</main>
		<footer>
			<div class="footer">
				<img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
			</div>
		</footer>
	</div>
</template>

<script setup>
</script>

<style scoped>
</style>
