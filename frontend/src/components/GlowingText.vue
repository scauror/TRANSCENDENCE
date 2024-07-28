<template>
	<span :class="glowing ? 'glowing-txt' : 'faulty-letter'">
		{{ text }}
	</span>
</template>

<script setup>
const props = defineProps([ 'text', 'glowing' ]);
</script>
