<template>
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
// import useStore from 'vuex'

// const store = useStore();
// store.dispatch('changeTitle', 'coucou bite')
</script>

<style>
@import './styles/style.css';
</style>
