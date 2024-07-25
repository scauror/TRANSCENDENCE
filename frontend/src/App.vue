<template>
	<div id="app">
		<header>
		</header>
		<main>
			<RouterView />
		</main>
		<footer>
		</footer>
	</div>
</template>

<script setup>
import { RouterView } from 'vue-router'
</script>

<style scoped>
@import './styles/style.css';
</style>
