<template>
	<head>
		<title> {{ $store.getters.getPageTitle }} </title>
	</head>
	<header>
		<HeaderBar />
	</header>
	<body>
		<RouterView />
	</body>
	<footer>
		<FooterBar />
	</footer>
</template>

<script setup>
import { RouterView } from 'vue-router'
import FooterBar from '@/components/FooterBar.vue';
import HeaderBar from '@/components/HeaderBar.vue';
</script>

<style>
@import './styles/style.css';
</style>
