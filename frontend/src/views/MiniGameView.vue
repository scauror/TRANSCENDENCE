<template>
	<div id="game" ref="canvasContainer"></div>>
</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import { Game } from '@scripts/minigame.js';


const canvasContainer = ref(null);
let game;
let renderer;

function animate() {
	game.update();
	game.render(renderer);
	requestAnimationFrame(animate);
}

onMounted(() => {
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	canvasContainer.value.appendChild(renderer.domElement);
	game = new Game();
	game.update();
	requestAnimationFrame(animate);
});

onUnmounted(() => {
	if (renderer !== undefined)
		renderer.dispose();
})

</script>

<style scoped>
</style>
