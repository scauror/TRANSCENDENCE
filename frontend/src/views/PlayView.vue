<template>
	<ButtonList :buttons="buttons"/>
</template>

<script setup>
import ButtonList from '@/components/ButtonList.vue';
import utils from '@utils'

utils.updatePageTitle('play');

const buttons = [
	{ text: 'solo', dest: 'play/solo'},
	{ text: 'local', dest: 'play/local'},
	{ text: 'multiplayer', dest: 'play/multiplayer'},
	{ text: 'tournament', dest: 'play/tournament'},
]
</script>

<style scoped>
</style>
