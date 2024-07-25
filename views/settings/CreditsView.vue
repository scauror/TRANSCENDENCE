<template>
	<div id="credits">
		<header>
			<nav>
				<div class="header">
					<router-link to="/">
						<img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
					</router-link>
					<h1 class="title">credit$</h1>
				</div>
			</nav>
		</header>
		<main>
			<div class="tab">
				<div class="portrait-container">
					<img class="portrait" src="@/assets/antoine2.webp" alt="Gros BG retourneur de cartes meres">
					<p class="name">amassias</p>
					<p class="name">aka</p>
					<p class="name">Antoine Massias</p>
				</div>
				<div class="portrait-container">
					<img class="portrait" src="@/assets/louis.webp" alt="Gros BG brasseur de logique">
					<p class="name">llaigle</p>
					<p class="name">aka</p>
					<p class="name">Louis Laigle</p>
				</div>
				<div class="portrait-container">
					<img class="portrait" src="@/assets/mathis.webp" alt="Gros BG dark sapologue ultime">
					<p class="name">mbatteux</p>
					<p class="name">aka</p>
					<p class="name">Mathis Batteux</p>
				</div>
				<div class="portrait-container">
					<img class="portrait" src="@/assets/simon.webp" alt="Gros BG de la grandiloquence">
					<p class="name">scarpent</p>
					<p class="name">aka</p>
					<p class="name">Simon Carpentier</p>
				</div>
				<div class="portrait-container">
					<img class="portrait" src="@/assets/alan1.webp" alt="Gros BG terreur des syscalls">
					<p class="name">ale-boud</p>
					<p class="name">aka</p>
					<p class="name">Alan Le Bouder</p>
				</div>
			</div>
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
import { RouterLink } from 'vue-router';


</script>

<style scoped>

@import '../../styles/MainStyle.css';

.tab {
	display: flex;
	direction: row;
	align-items: center;
	justify-content: center;
	gap: 150px;
	margin: 30px;
	border: 0.2em solid var(--glow-color);
	border-radius: 0.45em;
	padding: 40px;
	background: none;
	perspective: 2em;
	-webkit-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	-moz-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
}

.portrait-container {
	margin: 5px;
	text-align: center;
}

.portrait {
	width: 200px;
	height: 280px;
	display: block;
	margin: 0 auto;
	border: 0.1em solid rgb(255, 0, 0, 0.3);
	-webkit-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	-moz-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	border-radius: 0.45em;
}

.name {
	margin-top: 10px;
	font-size: 1.2em;
	color: var(--glow-color);
	text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
}
</style>