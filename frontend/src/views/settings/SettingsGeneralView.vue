<template>
	<div class="difficulties">
		<GlowingButton :text="'Easy'"/>
		<GlowingButton :text="'Normal'"/>
		<GlowingButton :text="'Hard'"/>
	</div>
</template>

<script setup>
import GlowingButton from '@/components/GlowingButton.vue';
import utils from '@utils'

utils.updatePageTitle('general - settings');
</script>

<style scoped>
.difficulties {
	display: flex;
	direction: row;
	justify-content: space-around;
	align-items: center;
}
</style>
