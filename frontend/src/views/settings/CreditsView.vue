<template>
	<div class="tab">
		<PortraitContainer
			v-for="dev in devs"
			:name="dev.name"
			:nickname="dev.nickname"
			:src="dev.src"
			:alt='dev.alt'
			/>
	</div>
</template>

<script setup>
import PortraitContainer from '@/components/PortraitContainer.vue';
import { devs } from '@assets/data/devs.json'
import utils from '@utils'

utils.updatePageTitle('CREDITS - SETTINGS');
</script>

<style scoped>
.tab {
	display: flex;
	direction: row;
	align-items: center;
	justify-content: center;
	gap: 150px;
	margin: 30px;
	border: 0.2em solid var(--glow-color);
	border-radius: 0.45em;
	padding: 40px;
	background: none;
	perspective: 2em;
	-webkit-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	-moz-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
}
</style>
