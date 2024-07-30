<template>
	<div id="local">
		<h1 class="player">
			player 1: {{ player1 }} <br>
			<h3 class="commands">commands : 'w + s'</h3>
		</h1>
		<h1 class="score-header">
			score: {{ score1 }} - {{ score2 }}
		</h1>
		<h1 class="player">
			player 2: {{ player2 }} <br>
			<h3 class="commands">commands : '↑ + ↓'</h3>
		</h1>
	</div>
	<div class="numero_counting_wrapper">
		<div ref="numeroShape" class="numero_shape"></div>
	</div>
	<div class="game" ref="canvasContainer"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as THREE from 'three';
import { Game } from '../../experience/GameInit';
import utils from '@utils'

utils.updatePageTitle('local - play');

const canvasContainer = ref(null);
const numeroShape = ref(null);

const score1 = ref(0);
const score2 = ref(0);

const player1 = ref("tintin");
const player2 = ref("milou");

let renderer;
let game;

const game_config2 = {
    camera: {
        position: {
            x: 0,
            y: 25,
            z: 5
        },
        lookat: {
            x: 0,
            y: -20,
            z: 0
        },
    },
    mappings: {
        paddles: {
            left: {
                go_left: 's',
                go_right: 'w'
            },
            right: {
                go_left: 'ArrowDown',
                go_right: 'ArrowUp'
            }
        }
    }
};

onMounted(() => {
	renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth * 0.9, window.innerHeight * 0.9);

	canvasContainer.value.appendChild(renderer.domElement);

	game = new Game(numeroShape, game_config2);
	game.countdown();
	animate();
});

function animate() {
	requestAnimationFrame(animate);
	if (!game.isGamePaused()) {
		game.update();
		game.render(renderer);

		score1.value = game.getScore1();
		score2.value = game.getScore2();
	}
}
</script>

<style scoped>
@font-face {
	font-family: 'SpaceTron';
	src: url('../../styles/fonts/spacetron-51nwz.otf') format('opentype');
	font-weight: normal;
	font-style: normal;
}

#local {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	color: hsl(0, 100%, 59%);
	height: 10vh;
	font-family: 'SpaceTron', sans-serif;
}
/* bite */
.game {
	display: flex;
	align-items: center;
	justify-content: center;
}

.player,
.score-header {
	flex: 1;
	text-align: center;
	padding: 10px;
}

.commands {
	font-size: 0.5em;
}

.numero_counting_wrapper {
	background-color: #000000;
	margin: 0 auto;
	width: 50px;
	height: 50px;
}

.numero_shape {
	position: relative;
	background-color: hsl(0, 100%, 59%);
	margin: 0 auto;
	width: 40%;
	height: 60%;
	border-radius: 30px;
	display: none;

}

.score-animation:before,
.score-animation:after {
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

.score-animation:before {
	top: 16.6666667%;
	left: 25%;
	animation-name: contagem1;
}

.score-animation:after {
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
