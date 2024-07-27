<template>
	<nav>
		<div class="header">
			<router-link to="/">
				<img class="logo" src="@assets/logo.png" alt="Logo Pong Ft_Transcendence">
			</router-link>
			<h1 class="title"> {{ $store.getters.getPageTitle }} </h1>
		</div>
	</nav>
</template>

<script setup>
</script>

<style scoped>
</style>
