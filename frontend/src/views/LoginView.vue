<template>
	<table>
		<tr>
			<td>
				<GlowingText text="Email"/>
			</td>
			<td>
				<input type="text" name="email"/>
			</td>
		</tr>
		<tr>
			<td>
				<GlowingText text="Username"/>
			</td>
			<td>
				<input type="text" name="username"/>
			</td>
		</tr>
		<tr>
			<td>
				<GlowingText text="Password"/>
			</td>
			<td>
				<input type="text" name="password"/>
			</td>
		</tr>
		<tr>
			<td colspan="2">
				<input value="Submit" type="button" @click="onSubmit" />
			</td>
		</tr>
	</table>
</template>

<script setup>
import GlowingButton from '@components/GlowingButton.vue';
import GlowingText from '@components/GlowingText.vue'
import axios from 'axios';

function onSubmit() {
}
</script>

<style scoped>
</style>
