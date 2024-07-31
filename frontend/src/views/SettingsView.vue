<template>
	<ButtonCross :buttons="buttons"/>
</template>

<script setup>
import ButtonCross from '@/components/ButtonCross.vue';

const buttons = [
	{ text:"general", dest:"/settings/settings_general" },
	{ text:"graphics", dest:"/settings/settings_graphics" },
	{ text:"credits", dest:"/settings/credits" },
	{ text:"audio", dest:"/settings/settings_audio" },
];
</script>

<style scoped>
</style>
