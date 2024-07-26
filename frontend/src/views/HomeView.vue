<template>
	<section class="main_buttons">
		<GlowingButton
			v-for="menu_button in menu_buttons"
			:text="menu_button.text"
			:dest="menu_button.text"
			/>
	</section>
</template>

<script setup>
import GlowingButton from '@/components/GlowingButton.vue';

const menu_buttons = [
	{ text: 'play', dest: '/play' },
	{ text: 'minigame', dest: '/minigame' },
	{ text: 'leaderboard', dest: '/leaderboard' },
	{ text: 'profile', dest: '/profile' },
	{ text: 'settings', dest: '/settings' },
]

// const store = useStore();
// store.dispatch('changeTitle', 'coucou bite')
</script>

<style scoped>
</style>
