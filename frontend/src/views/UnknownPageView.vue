<template>
	<div id="unknown_page">
		<GlowingText class="entry" :text="'Page not found'"/>
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
}
</style>
