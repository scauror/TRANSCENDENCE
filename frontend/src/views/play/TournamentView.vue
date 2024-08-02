<template>
	<div class="tournament">
		<h1>Tournament Bracket</h1>
		<Bracket />
	</div>
</template>

<script setup>
import Bracket from '@/components/TournamentBracket.vue';
</script>

<style scoped>
.tournament {
	display: flex;
	flex-direction: column;
	align-items: center;
	color: var(--glow-color);
	text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
}
</style>
