<template>
	<div id="unknown_page">
		<GlowingButton :text="'go back home'" :dest="'/'"/>
	</div>
</template>

<script setup>
import GlowingButton from '@components/GlowingButton.vue';
</script>

<style scoped>
#unknown_page {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
}
</style>
