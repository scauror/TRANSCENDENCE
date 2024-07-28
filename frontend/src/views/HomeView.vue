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

utils.updatePageTitle('FT_TRANSCENDENCE');

const menu_buttons = [
	{ text: 'play', dest: 'play' },
	{ text: 'minigame', dest: 'minigame' },
	{ text: 'leaderboard', dest: 'leaderboard' },
	{ text: 'profile', dest: 'profile' },
	{ text: 'settings', dest: 'settings' },
]
</script>

<style scoped>
</style>
