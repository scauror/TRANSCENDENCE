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

<style>
@import './styles/style.css';
</style>
