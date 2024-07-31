<template>
	<span v-html="text.replace(' ', '&nbsp;')" :class="type"/>
</template>

<script setup>
const props = defineProps([ 'text', 'glowing' ]);

const type = props.glowing
	? 'glowing-text'
	: 'faulty-text';
</script>

<style scoped>
.glowing-text {
	float: left;
	margin-right: -0.2em;
	-webkit-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
		0 0 0.45em var(--glow-color);
	-moz-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
		0 0 0.45em var(--glow-color);
	text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
	animation: text-flicker 7s linear infinite;
}

.faulty-text {
	opacity: 0.5;
	animation: faulty-flicker 7s linear infinite;
}

@keyframes faulty-flicker {
	0% {opacity: 0.4;}

	2% {
		opacity: 0.4;
	}

	4% {
		opacity: 0.5;
	}

	19% {
		opacity: 0.5;
	}

	21% {
		opacity: 0.4;
	}

	23% {
		opacity: 1;
	}

	70% {
		opacity: 0.8;
	}

	80% {
		opacity: 0.5;
	}

	83% {
		opacity: 0.4;
	}

	87% {
		opacity: 0.9;
	}

	100% {
		opacity: 0.6;
	}
}

@keyframes text-flicker {
	0% {
		opacity: 0.6;
	}

	8% {
		opacity: 0.8;
	}

	9% {
		opacity: 1;
	}

	12% {
		opacity: 0.4;
	}

	20% {
		opacity: 1;
	}

	25% {
		opacity: 0.4;
	}

	30% {
		opacity: 0.8;
	}

	70% {
		opacity: 0.7;
	}

	72% {
		opacity: 0.6;
	}

	77% {
		opacity: 0.9;
	}

	100% {
		opacity: 0.9;
	}
}
</style>
