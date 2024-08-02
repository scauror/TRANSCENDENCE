<template>
	<div class="counter_container">
		<div
			ref="counter"
			class="counter"
			:class="{ 'counter_active': isActive }"
		></div>
	</div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
	active: Boolean,
	finishCallback: Function
});

const isActive = ref(props.active);

const emits = defineEmits([ 'toggle', 'finished' ])

function setIsActive(value) {
	emits('toggle', value);
}

const counter = ref(null);

watch(() => props.active, (newValue, oldValue) => {
	if (newValue == oldValue)
		return ;
	if (oldValue) {
		isActive.value = false;
		setIsActive(false);
		return ;
	}
	isActive.value = true;
	setTimeout(
		() => {
			isActive.value = false;
			setIsActive(false);
			emits('finished');
		},
		3000
	);
});

</script>

<style scoped>
.counter_container {
	background-color: #000000;
	margin: 0 auto;
	width: 50px;
	height: 50px;
}

.counter {
	position: relative;
	background-color: hsl(0, 100%, 59%);
	margin: 0 auto;
	width: 40%;
	height: 60%;
	border-radius: 30px;
	display: none;
}

.counter_active {
	display: block;
}

.counter_active:before,
.counter_active:after {
	content: " ";
	position: absolute;
	background-color: #000000;
	width: 50%;
	height: 33.3333334%;
	animation-duration: 3s;
	animation-timing-function: ease-in-out;
	animation-iteration-count: 1;
	animation-direction: normal;
	animation-fill-mode: forwards;
}

.counter_active:before {
	top: 16.6666667%;
	left: 25%;
	animation-name: contagem1;
}

.counter_active:after {
	top: 58.3333333%;
	left: 25%;
	animation-name: contagem2;
}

@keyframes contagem1 {

	0%,
	30%,
	35%,
	65% {
		top: 16.6666667%;
		left: 0%;
		width: 75%;
		height: 25%;
	}

	70%,
	100% {
		top: 0%;
		left: 0%;
		width: 75%;
		height: 50%;
	}
}

@keyframes contagem2 {

	0%,
	30% {
		top: 58.3333333%;
		left: 0%;
		width: 75%;
		height: 25%;
	}

	35%,
	65% {
		top: 58.3333333%;
		left: 25%;
		width: 75%;
		height: 25%;
	}

	70%,
	100% {
		top: 50%;
		left: 0%;
		width: 75%;
		height: 50%;
	}
}
</style>
