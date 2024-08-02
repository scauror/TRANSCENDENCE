<template>
	<h1>
		waiting for a match<span class="dots"></span>
	</h1>
	<div id="waiting_match">
		<GlowingButton :text="'cancel matchmaking'" :dest="'/'" />
	</div>
</template>

<script setup>
import GlowingButton from '@components/GlowingButton.vue';
</script>

<style scoped>
#waiting_match {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 50vh;
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
}

.dots {
	display: inline-block;
	margin-left: 0.5em;
	letter-spacing: 0.5em;
	width: 1em;
}

.dots::after {
	content: '';
	animation: dots 3s steps(3, end) infinite;
	width: 100%;
	text-align: left;
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
</style>