<template>
  <div id="solo">
    <header class="score-header">
      Score: {{ score }}
    </header>
    <main>
      <div ref="canvasContainer"></div>
      
    </main>

  </div>
</template>

<script setup>

import { ref, onMounted } from 'vue';
import * as THREE from 'three';
import { Game } from '../../experience/GameInit'

const canvasContainer = ref(null);
const score = ref(0);

let renderer;
let game;

onMounted(() => {
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);

  // document.body.appendChild(renderer.domElement);
  canvasContainer.value.appendChild(renderer.domElement);

  game = new Game();
  console.log(game);
  console.log(renderer);
  animate();
});

function animate() {
  requestAnimationFrame(animate);
  if (!game.isGamePaused())
  {
    game.update();
    game.render(renderer);

    // score.value = game.getScore();
  }
}

</script>

<style scoped>


</style>