<template>
	<nav class="footer">
		<router-link to="/">
			<TranscendenceLogo class="minimized" />
		</router-link>
	</nav>
</template>

<script setup>
import TranscendenceLogo from '@components/TranscendenceLogo.vue';
</script>

<style scoped>
.minimized {
	width: 5vh;
	height: 5vh;
}
.footer {
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
