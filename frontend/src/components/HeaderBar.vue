<template>
	<nav class="header">
	<router-link to="/">
		<TranscendenceLogo />
	</router-link>
	<div class="sub-header">
		<router-link to="/login" class="signIn-link">
			<h1 class="header-box signIn">login</h1>
		</router-link>
		<h1 class="header-box title">{{ title }}</h1>
	</div>
	</nav>
</template>

<script setup>
import TranscendenceLogo from '@components/TranscendenceLogo.vue';
import { ref, onMounted, onUnmounted } from 'vue'

let mutation_observer;
const title = ref(0);

function updateTitle() {
	title.value = document.title
}

onMounted(() => {
	mutation_observer = new MutationObserver(updateTitle);
	mutation_observer.observe(
		document.querySelector('title'),
		{ subtree: true, characterData: true, childList: true }
	)
	updateTitle();
});

onUnmounted(() => {
	mutation_observer.disconnect();
	mutation_observer = undefined;
});
</script>

<style scoped>
.header {
	display: flex;
	flex-direction: row;
	align-items: center;
	text-align: center;
	width: 100%;
}

.sub-header {
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 0 2%;
	--size-factor: (0.00188323 * 70vw);
	font-size: calc(12 * var(--size-factor));
}

.header-box {
	color: var(--glow-color);
	padding: 0.35em 1em;
	border: 0.15em solid var(--glow-color);
	border-radius: 0.45em;
	background: none;
	perspective: 2em;
	font-family: "SpaceTron", sans-serif;
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

.signIn-link {
	text-decoration: none;
	cursor: pointer;
}

.signIn {
	flex: 1 0 40%;
	text-align: center;
	margin-right: 1em;
	letter-spacing: 0.1em;
}

.title {
	flex: 1 0 60%;
	text-align: right;
	letter-spacing: 0.6em;
}
</style>