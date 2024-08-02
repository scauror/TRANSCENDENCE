<template>
	<div id="game" ref="canvasContainer"></div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import * as THREE from 'three';
import { Game } from '@scripts/minigame.js';

const ZNEAR = 0.1;
const ZFAR = 1000;
const canvasContainer = ref(null);
let game;
let renderer;
let camera;

onMounted(() => {
	const WIDTH = window.innerWidth;
	const HEIGHT = window.innerHeight;
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(WIDTH, HEIGHT);
	camera = new THREE.OrthographicCamera(-WIDTH / 2, +WIDTH / 2, -HEIGHT / 2, +HEIGHT / 2, ZNEAR, ZFAR);
	canvasContainer.value.appendChild(renderer.domElement);
	game = new Game(renderer);
	camera.position.set(400, 500, 1); //  a changer c'est moche
	requestAnimationFrame(animate);
});

onUnmounted(() => {
	if (renderer !== undefined)
		renderer.dispose();
});

function animate() {
	game.update();
	game.render(renderer, camera);
	requestAnimationFrame(animate);
}

</script>

<style scoped>
#game {
	width: 100%;
	height: 100%;
}
</style>
  