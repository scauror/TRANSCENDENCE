<template>
	<h1>and the winner is<br><br>
		<span class="dots"></span><br>
		<span class="winner">{{ winner }}</span>
	</h1>
	<div id="won_match">
		<GlowingButton :text="'main menu'" :dest="'/'" />
	</div>
</template>

<script setup>
import {ref} from 'vue';
import GlowingButton from '@components/GlowingButton.vue';

const winner = ref("souli");
const loser = ref("dolphin");
</script>

<style scoped>
#won_match {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}

h1 {
	color: var(--glow-color);
	margin-top: 10vh;
	text-align: center;
	font-size: 7vh;
	font-weight: bolder;
	letter-spacing: 0.2em;
	text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
	position: relative;
}

.winner {
	font-size: 10vh;
	opacity: 0;
	animation: fadeIn 6s forwards;
}

.dots {
	display: inline-block;
	margin-left: 0.5em;
	letter-spacing: 0.5em;
	text-align: center;
}

.dots::after {
	content: '';
	animation: dots 3s steps(3, end);
    animation-iteration-count: 1;
	width: 100%;
}

@keyframes dots {
	10% {
		content: '.';
	}
	40% {
		content: '..';
	}
	60% {
		content: '...';
	}
	90%{
		content: '';
	}
}

@keyframes fadeIn {
	50% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
</style>
