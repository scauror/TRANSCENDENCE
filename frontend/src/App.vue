<template>
	<div id="root">
		<header>
			<HeaderBar />
		</header>
		<main>
			<RouterView />
		</main>
		<footer>
			<FooterBar />
		</footer>
	</div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import FooterBar from '@components/FooterBar.vue';
import HeaderBar from '@components/HeaderBar.vue';
</script>

<style>
:root {
	--glow-color: hsl(0, 100%, 59%);
}

@font-face {
	font-family: 'SpaceTron';
	src: url('/fonts/spacetron-51nwz.otf') format('opentype');
}

#header {
	display: flex;
	align-items: center;
}

#root {
	font-family: "SpaceTron", sans-serif;
	font-size: 1em;
	background-color: black;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	margin: 0;
}

main {
	display: grid;
	flex: 1;
}

header,
footer {
	background-color: black;
	margin: 1vh;
}
</style>
