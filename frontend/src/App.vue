<template>
	<head>
		<title> {{ $store.getters.getPageTitle }} </title>
	</head>
	<body>
		<header>
			<HeaderBar />
		</header>
		<main>
			<RouterView />
		</main>
		<footer>
			<FooterBar />
		</footer>
	</body>
</template>

<script setup>
import { RouterView } from 'vue-router'
import FooterBar from '@/components/FooterBar.vue';
import HeaderBar from '@/components/HeaderBar.vue';
</script>

<style>
@import './styles/style.css';
</style>
