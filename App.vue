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
//import router from './router'

</script>

<style scoped>

@import './styles/MainStyle.css';

</style>
