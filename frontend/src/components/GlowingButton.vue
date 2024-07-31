<template>
	<router-link v-if="dest" v-bind:to="dest" class="glowing_button">
		<GlowingText
			v-for="chunk in chunks"
			:glowing="chunk.glowing"
			:text="chunk.text"
			:class="chunk.index == 0 ? '' : 'padded_text'"
			/>
	</router-link>
	<div v-else class="glowing_button">
		<GlowingText
			v-for="chunk in chunks"
			:glowing="chunk.glowing"
			:text="chunk.text"
			:class="chunk.index == 0 ? '' : 'padded_text'"
			/>
	</div>
</template>

<script setup>
import GlowingText from '@components/GlowingText.vue';

function createTextChuks(text) {
	let chunks = [];
	let glowing = Math.random() > .7;
	let index = 0;
	while (text.length > 0)
	{
		const end_index = 1 + Math.floor(Math.random() * (text.length - 1))
		let chunk = text.substring(0, end_index);
		chunks.push({
			index: index++,
			text: chunk,
			glowing: glowing
		});
		text = text.substring(end_index, text.length);
		glowing = !glowing;
	}
	return (chunks);
}

const props = defineProps([ 'text', 'dest' ]);
const chunks = createTextChuks(props.text);
</script>

<style scoped>
.padded_text {
	margin-left: 0.2em;
}

.glowing_button {
	position: relative;
	color: var(--glow-color);
	cursor: pointer;
	padding: 0.5em 2em;
	width: 25vw;
	height: 8vh;
	border: 0.15em solid var(--glow-color);
	border-radius: 0.45em;
	background: none;
	perspective: 2em;
	text-decoration: none;
	font-family: "SpaceTron", sans-serif;
	font-weight: 900;
	letter-spacing: 0.2em;
	--size-factor: (0.00188323 * 70vw);
	font-size: calc(12 * var(--size-factor));
	text-align: center;
	display: flex;
	justify-content: center;
	align-items: center;
	-webkit-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	-moz-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	animation: border-flicker 7s linear infinite;
	text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
}

.glowing_button::after {
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

.glowing_button:hover {
	color: rgba(0, 0, 0, 0.8);
	text-shadow: none;
	animation: none;
}

.glowing_button:hover .glowing-txt {
	color: rgba(0, 0, 0, 0.8);
	animation: none;
}

.glowing_button:hover .faulty-letter {
	color: rgba(0, 0, 0, 0.8);
	animation: none;
	text-shadow: none;
	opacity: 1;
}

.glowing_button:hover:before {
	filter: blur(1.5em);
	opacity: 1;
}

.glowing_button:hover:after {
	opacity: 1;
}

@keyframes border-flicker {
	0% {
		opacity: 0.6;
	}

	10% {
		opacity: 0.9;
	}

	19% {
		opacity: 1;
	}

	31% {
		opacity: 0.7;
	}

	42% {
		opacity: 0.8;
	}

	61% {
		opacity: 0.5;
	}

	70% {
		opacity: 1;
	}

	100% {
		opacity: 0.9;
	}
}
</style>
