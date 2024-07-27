<template>
	<span v-if="glowing" class="glowing-txt">
		{{ text }}
	</span>
	<span v-else class="faulty-letter">
		{{ text }}
	</span>
</template>

<script setup>
const props = defineProps([ 'text', 'glowing' ]);
</script>
