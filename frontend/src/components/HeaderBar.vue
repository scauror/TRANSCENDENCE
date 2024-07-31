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


.signIn::after {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	opacity: 0;
	z-index: -1;
	color: rgba(0, 0, 0, 0.8);
	background-color: var(--glow-color);
	box-shadow: 0 0 2em 0.2em var(--glow-color);
	transition: opacity 100ms linear;
}

.signIn:hover {
	color: rgba(0, 0, 0, 0.8);
	text-shadow: none;
	animation: none;
}

.signIn:hover .glowing-txt {
	color: rgba(0, 0, 0, 0.8);
	animation: none;
}

.signIn:hover .faulty-letter {
	color: rgba(0, 0, 0, 0.8);
	animation: none;
	text-shadow: none;
	opacity: 1;
}

.signIn {
	flex: 1 0 40%;
	text-align: center;
	margin-right: 1em;
	letter-spacing: 0.1em;
}

.signIn:hover:before {
	filter: blur(1.5em);
	opacity: 1;
}

.signIn:hover:after {
	opacity: 1;
}

.title {
	flex: 1 0 60%;
	text-align: right;
	letter-spacing: 0.6em;
}
</style>
