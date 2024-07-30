<template>
	<section class="menu-buttons">
		<GlowingButton
			v-for="menu_button in menu_buttons"
			:text="menu_button.text"
			:dest="menu_button.dest"
			/>
	</section>
</template>

<script setup>
import GlowingButton from '@/components/GlowingButton.vue';
import utils from '@utils'

utils.updatePageTitle('PLAY');

const menu_buttons = [
	{ text: 'solo', dest: 'play/solo'},
	{ text: 'local', dest: 'play/local'},
	{ text: 'multiplayer', dest: 'play/multiplayer'},
	{ text: 'tournament', dest: 'play/tournament'},
]
</script>

<style scoped>
</style>
