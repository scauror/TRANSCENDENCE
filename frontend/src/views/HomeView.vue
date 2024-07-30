<template>
	<ButtonList :buttons="buttons"/>
</template>

<script setup>
import ButtonList from '@components/ButtonList.vue'

const buttons = [
	{ text: 'play', dest: 'play' },
	{ text: 'minigame', dest: 'minigame' },
	{ text: 'leaderboard', dest: 'leaderboard' },
	{ text: 'profile', dest: 'profile' },
	{ text: 'settings', dest: 'settings' },
	{ text: 'login', dest: 'login' }
];
</script>

<style scoped>
</style>
