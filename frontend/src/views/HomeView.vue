<template>
	<header>
		<nav>
			<div class="header">
				<img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
				<h1 class="title">FT_TRANSCENDENCE</h1>
			</div>
		</nav>
	</header>
	<body>
		<section class="main_buttons">
			<GlowingButton
				v-for="menu_button in menu_buttons"
				:text="menu_button.text"
				:dest="menu_button.text"
				/>
		</section>
	</body>
	<footer>
		<div class="footer">
			<img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
		</div>
	</footer>
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
</script>

<style scoped>
</style>
