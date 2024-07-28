<template>
	<section class="menu-buttons">
		<GlowingButton
			v-for="menu_button in menu_buttons"
			:text="menu_button.text"
			:dest="menu_button.dest"
			/>
	</section>
</template>

<script setup>
import GlowingButton from '@/components/GlowingButton.vue';
import utils from '@utils'

utils.updatePageTitle('SETTINGS');

const menu_buttons = [
	{ text:"general", dest:"/settings/settings_general" },
	{ text:"graphics", dest:"/settings/settings_graphics" },
	{ text:"credits", dest:"/settings/credits" },
	{ text:"audio", dest:"/settings/settings_audio" },
];
</script>

<style scoped>
</style>
