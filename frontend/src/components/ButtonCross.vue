<template>
	<div class="button_cross">
		<GlowingButton
			v-if="buttons.length > 0"
			:text="buttons[0].text"
			:dest="buttons[0].dest"
			class="top-button"
		/>
		<div class="middle-row">
			<GlowingButton
				v-if="buttons.length > 1"
				:text="buttons[1].text"
				:dest="buttons[1].dest"
				class="left-button"
			/>
			<div class="middle-space"></div>
			<GlowingButton
				v-if="buttons.length > 2"
				:text="buttons[2].text"
				:dest="buttons[2].dest"
				class="right-button"
			/>
		</div>
		<GlowingButton
			v-if="buttons.length > 3"
			:text="buttons[3].text"
			:dest="buttons[3].dest"
			class="bottom-button"
		/>
	</div>
</template>

<script setup>
import GlowingButton from '@components/GlowingButton.vue';

const props = defineProps([ 'buttons' ]);
</script>

<style scoped>
.button_cross {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100%; /* Adjust as needed */
	width: 100%; /* Adjust as needed */
	position: relative;
}

.middle-row {
	display: flex;
	justify-content: space-between;
	width: 100%; /* Adjust as needed */
}

.middle-space {
	flex: 1;
}

.top-button {
	position: absolute;
	top: 0;
	left: 50%;
	transform: translateX(-50%);
	margin-top: 50px;
}

.left-button {
	flex: 1;
	margin-left: 50px;
}

.right-button {
	flex: 1;
	margin-right: 50px; /* Adjust as needed */
}

.bottom-button {
	position: absolute;
	bottom: 0;
	left: 50%;
	transform: translateX(-50%);
	margin-bottom: 50px;
}
</style>

