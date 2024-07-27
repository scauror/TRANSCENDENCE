<template>
	<router-link v-bind:to="dest" class="glowing-btn">
		<GlowingText
			v-for="chunk in chunks"
			:glowing="chunk.faulty"
			:text="chunk.text"
			/>
		<!-- <span class="glowing-txt">{{ text }}</span> -->
	</router-link>
	<!-- <span class="glowing-txt">P<span class="faulty-letter">L</span>AY</span> -->
</template>

<script setup>
import GlowingText from './GlowingText.vue';

function createTextChuks(text) {
	let chunks = [];
	let glowing = Math.random() > .7;
	while (text.length > 0)
	{
		const end_index = 1 + Math.floor(Math.random() * (text.length - 1))
		let chunk = text.substring(0, end_index);
		chunks.push({
			text: chunk,
			glowing: glowing
		});
		text = text.substring(end_index, text.length);
		glowing = !glowing;
	}
	return (chunks);
}

const props = defineProps([ 'text', 'dest' ]);
const chunks = createTextChuks(props.text);
</script>
