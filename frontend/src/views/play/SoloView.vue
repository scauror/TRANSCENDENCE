<template>
	<PongGame :config="config" />
</template>

<script setup>
import PongGame from '@components/PongGame.vue';
import { config } from '@assets/game_config/pong/solo'
</script>

<style scoped></style>
