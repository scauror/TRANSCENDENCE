<template>
	<nav class="footer">
		<h1 class="title">ft_transcendence</h1>
		<router-link to="/">
			<TranscendenceLogo />
		</router-link>
	</nav>
</template>

<script setup>
import TranscendenceLogo from '@components/TranscendenceLogo.vue';
</script>

<style scoped>
.footer {
	display: flex;
	align-items: center;
	justify-content: center;
}
.title {
	flex: 1;
	color: var(--glow-color);
	padding: 0.35em 1em;
	border: 0.15em solid var(--glow-color);
	border-radius: 0.45em;
	background: none;
	perspective: 2em;
	text-align: begin;
	letter-spacing: 0.6em;
	font-family: "SpaceTron", sans-serif;
	--size-factor: (0.00188323 * 70vw);
	font-size: calc(12 * var(--size-factor));
	font-weight: 900;
	-webkit-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	-moz-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	-webkit-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
		0 0 0.45em var(--glow-color);
	-moz-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
		0 0 0.45em var(--glow-color);
	text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
}
</style>
