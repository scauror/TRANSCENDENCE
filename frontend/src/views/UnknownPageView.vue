<template>
	<div id="unknown_page">
		<div class="entry">Page not found</div>
		<br/>
		<GlowingButton :text="'go back home'" :dest="'/'"/>
	</div>
</template>

<script setup>
import GlowingButton from '@components/GlowingButton.vue';
import utils from '@utils'

utils.updatePageTitle('UNKNOWN PAGE');
</script>

<style scoped>
#unknown_page {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
}

.entry {
	padding: 10vh;
	color: var(--glow-color);
}
</style>
