<template>
	<div class="portrait-container">
		<img
			class="portrait"
			v-bind:src="url"
			v-bind:alt="alt"
			/>
		<p class="name"> {{ name }} </p>
		<p class="name">aka</p>
		<p class="name"> {{ nickname }} </p>
	</div>
</template>

<script setup>
import utils from '@utils';

const props = defineProps([ 'name', 'nickname', 'src', 'alt' ]);
const url = utils.loadAsset(props.src);
</script>

<style scoped>
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
