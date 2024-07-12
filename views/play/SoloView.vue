<template>
  <div id="solo">
    <header>
      <h1>TEST TEST 3D TEST TEST</h1>
    </header>
    <main>
      <canvas ref="canvas"></canvas>
    </main>

  </div>
</template>

<script setup>

import * as THREE from 'three';
import { ref, onMounted } from 'vue';

const canvas = ref(null);

const animate = () => {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

// init de Three.js
let scene, camera, renderer, cube;

onMounted(() => {

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ canvas: canvas.value });

  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  camera.position.z = 5;
  animate();
});

</script>

<style scoped>

#solo {
  text-align: center;
}

canvas {
  display: block;
  margin: 0 auto;
  width: 80%;
  height: 60vh;
}
</style>
