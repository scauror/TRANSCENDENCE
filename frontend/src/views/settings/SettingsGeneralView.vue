<template>
	<div class="difficulties">
		<!-- TODO: Use components instead of hardcoded buttons ? -->
		<button class="glowing-btn" @click="null">Easy</button>
		<button class="glowing-btn" @click="null">Normal</button>
		<button class="glowing-btn" @click="null">Hard</button>
	</div>
</template>

<script setup>
import utils from '@utils'

utils.updatePageTitle('GENERAL - SETTINGS');
</script>

<style scoped>
.difficulties {
	display: flex;
	direction: row;
	justify-content: space-around;
}
</style>
