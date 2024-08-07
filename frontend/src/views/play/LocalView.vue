<template>
	<PongGame :config="config" />
</template>

<script setup>
import PongGame from '@components/PongGame.vue';
import { config } from '@assets/game_config/pong/local'
</script>

<style scoped></style>
