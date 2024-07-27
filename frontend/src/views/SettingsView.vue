<template>
	<section class="settings-buttons">
		<table>
			<tr>
				<td></td>
				<td>
					<GlowingButton text="general" dest="/settings/settings_general" />
				</td>
				<td></td>
			</tr>
			<tr>
				<td>
					<GlowingButton text="graphics" dest="/settings/settings_graphics" />
				</td>
				<td></td>
				<td>
					<GlowingButton text="credits" dest="/settings/credits" />
				</td>
			</tr>
			<tr>
				<td></td>
				<td>
					<GlowingButton text="audio" dest="/settings/settings_audio" />
				</td>
				<td></td>
			</tr>
		</table>
	</section>
</template>

<script setup>
import GlowingButton from '@/components/GlowingButton.vue';
import utils from '@utils'

utils.updatePageTitle('SETTINGS');
</script>

<style scoped>
</style>
