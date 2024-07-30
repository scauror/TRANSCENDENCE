<template>
	<ButtonList :buttons="buttons"/>
</template>

<script setup>
import ButtonList from '@components/ButtonList.vue'
import utils from '@utils'

utils.updatePageTitle('ft_transcendence');

const buttons = [
	{ text: 'play', dest: 'play' },
	{ text: 'minigame', dest: 'minigame' },
	{ text: 'leaderboard', dest: 'leaderboard' },
	{ text: 'profile', dest: 'profile' },
	{ text: 'settings', dest: 'settings' },
];
</script>

<style scoped>
</style>
