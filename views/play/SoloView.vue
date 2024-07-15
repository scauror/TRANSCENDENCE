<template>
  <div id="solo">
    <header>
      <h1>TEST TEST 3D TEST TEST</h1>
    </header>
    <main>
      <!-- <canvas ref="canvas"></canvas> -->
      <canvas ref="gameCanvas" :width="canvasWidth" :height="canvasHeight"></canvas>
    </main>

  </div>
</template>

<!-- <script setup>

import * as THREE from 'three';
import { ref, onMounted } from 'vue';

const canvas = ref(null);

const animate = () => {
  requestAnimationFrame(animate);

  //cube1.position.x += 0.01;
  cube1.rotation.y += 0.01;

  //cube2.position.x -= 0.01;
  cube2.rotation.y -= 0.01;

  renderer.render(scene, camera);
};

// init de Three.js
let scene, camera, renderer, cube1, cube2;

onMounted(() => {

  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new THREE.WebGLRenderer({ canvas: canvas.value });

  renderer.setSize(window.innerWidth, window.innerHeight);

  const geometry = new THREE.BoxGeometry(3, 1, 2);
  const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
  cube1 = new THREE.Mesh(geometry, material);
  cube2 = new THREE.Mesh(geometry, material);
  cube2.position.x = 5;
  cube1.position.x = -5;
  scene.add(cube1);
  scene.add(cube2);

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
</style> -->

<script setup>

import { ref, onMounted, onBeforeUnmount } from 'vue';

const canvasWidth = 800;
const canvasHeight = 600;

const ball = ref({
  x: canvasWidth / 2,
  y: canvasHeight / 2,
  radius: 10,
  speedX: 2,
  speedY: 2,
});

const paddle1 = ref({
  x: 10,
  y: canvasHeight / 2 - 50,
  width: 10,
  height: 100,
  speed: 5,
  upPressed: false,
  downPressed: false,
});

const paddle2 = ref({
  x: canvasWidth - 20,
  y: canvasHeight / 2 - 50,
  width: 10,
  height: 100,
  speed: 5,
});

let canvas;
let ctx;
let gameInterval;

const keyDownHandler = (e) => {
  if (e.key === 'ArrowUp') {
    paddle1.value.upPressed = true;
  } else if (e.key === 'ArrowDown') {
    paddle1.value.downPressed = true;
  }
};

const keyUpHandler = (e) => {
  if (e.key === 'ArrowUp') {
    paddle1.value.upPressed = false;
  } else if (e.key === 'ArrowDown') {
    paddle1.value.downPressed = false;
  }
};

const startGame = () => {
  gameInterval = setInterval(updateGame, 10);
};

const updateGame = () => {
  moveBall();
  movePaddles();
  checkCollisions();
  drawGame();
};

const moveBall = () => {
  ball.value.x += ball.value.speedX;
  ball.value.y += ball.value.speedY;
};

const movePaddles = () => {
  if (paddle1.value.upPressed && paddle1.value.y > 0) {
    paddle1.value.y -= paddle1.value.speed;
  } else if (paddle1.value.downPressed && paddle1.value.y < canvasHeight - paddle1.value.height) {
    paddle1.value.y += paddle1.value.speed;
  }
  // Paddle 2 AI movement
  if (ball.value.y < paddle2.value.y + paddle2.value.height / 2 && paddle2.value.y > 0) {
    paddle2.value.y -= paddle2.value.speed;
  } else if (ball.value.y > paddle2.value.y + paddle2.value.height / 2 && paddle2.value.y < canvasHeight - paddle2.value.height) {
    paddle2.value.y += paddle2.value.speed;
  }
};

const checkCollisions = () => {
  // Ball and wall collision
  if (ball.value.y + ball.value.radius >= canvasHeight || ball.value.y - ball.value.radius <= 0) {
    ball.value.speedY = -ball.value.speedY;
  }
  // Ball and paddle collision
  if (
    ball.value.x - ball.value.radius <= paddle1.value.x + paddle1.value.width &&
    ball.value.y >= paddle1.value.y &&
    ball.value.y <= paddle1.value.y + paddle1.value.height
  ) {
    ball.value.speedX = -ball.value.speedX;
  }
  if (
    ball.value.x + ball.value.radius >= paddle2.value.x &&
    ball.value.y >= paddle2.value.y &&
    ball.value.y <= paddle2.value.y + paddle2.value.height
  ) {
    ball.value.speedX = -ball.value.speedX;
  }
  // Ball out of bounds
  if (ball.value.x + ball.value.radius >= canvasWidth || ball.value.x - ball.value.radius <= 0) {
    resetBall();
  }
};

const resetBall = () => {
  ball.value.x = canvasWidth / 2;
  ball.value.y = canvasHeight / 2;
  ball.value.speedX = -ball.value.speedX;
  ball.value.speedY = 2;
};

const drawGame = () => {
  ctx.clearRect(0, 0, canvasWidth, canvasHeight);
  drawBall();
  drawPaddles();
};

const drawBall = () => {
  ctx.beginPath();
  ctx.arc(ball.value.x, ball.value.y, ball.value.radius, 0, Math.PI * 2);
  ctx.fillStyle = '#0095DD';
  ctx.fill();
  ctx.closePath();
};

const drawPaddles = () => {
  ctx.fillStyle = '#0095DD';
  ctx.fillRect(paddle1.value.x, paddle1.value.y, paddle1.value.width, paddle1.value.height);
  ctx.fillRect(paddle2.value.x, paddle2.value.y, paddle2.value.width, paddle2.value.height);
};

onMounted(() => {
  canvas = document.querySelector('canvas');
  ctx = canvas.getContext('2d');
  startGame();
  document.addEventListener('keydown', keyDownHandler);
  document.addEventListener('keyup', keyUpHandler);
});

onBeforeUnmount(() => {
  clearInterval(gameInterval);
  document.removeEventListener('keydown', keyDownHandler);
  document.removeEventListener('keyup', keyUpHandler);
});
</script>

<style>
#app {
  text-align: center;
  margin-top: 20px;
}
canvas {
  border: 1px solid #000;
}
</style>