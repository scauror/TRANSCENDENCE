<template>
	<h1>match found :</h1>
	<div id="match_found_1">
		<div class="player1">
			{{ player1 }}
		</div>
	</div>
	<div class="versus">
		<div class="letter" id="letter_V">v</div>
		<div class="letter" id="letter_S">s</div>
	</div>
	<div id="match_found_2">
		<div class="player2">
			{{ player2 }}
		</div>
	</div>
</template>

<script setup>
import { ref } from 'vue'

const player1 = ref("souli");
const player2 = ref("dolphin");
</script>

<style scoped>
#match_found_1, #match_found_2 {
	color: var(--glow-color);
	text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
	display: flex;
	font-size: 5vh;
	font-weight: bold;
	position: relative;
	height: 80%;
	width: 100%;
	letter-spacing: 0.1em;
	opacity: 0;
	animation: fadeIn 2s forwards;
}

h1 {
	color: var(--glow-color);
	margin-top: 10vh;
	text-align: center;
	font-size: 6vh;
	font-weight: bolder;
	letter-spacing: 0.2em;
	text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
	position: relative;
	transform: translateY(-10vh);
}

.player1 {
	position: absolute;
	top: -110%;
	left: 20%;
}

.player2 {
	position: absolute;
	top: -10%;
	right: 20%;
}

.versus {
	color: var(--glow-color);
	text-align: center;
	font-size: 6vh;
	font-weight: bolder;
	letter-spacing: 0.2em;
	text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	transform: translateY(-10vh);
}

.letter {
	position: relative;
	font-size: 4rem;
	font-weight: bold;
}

#letter_V {
	animation: moveToCenterV 2s forwards;
}

#letter_S {
	animation: moveToCenterS 2s forwards;
}

@keyframes moveToCenterV {
	from {
		transform: translate(-50px, 0);
		opacity: 0;
	}
	to {
		transform: translate(0, 0);
		opacity: 1;
	}
}

@keyframes moveToCenterS {
	from {
		transform: translate(50px, 0);
		opacity: 0;
	}
	to {
		transform: translate(0, 0);
		opacity: 1;
	}
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}
</style>
