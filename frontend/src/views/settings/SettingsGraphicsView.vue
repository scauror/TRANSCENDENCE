<template>
	<div class="playboard-selector">
		<h1>Select Playboard</h1>
		<div class="playboard-options">
			<div class="playboard-option" @click="selectPlayboard('playboard1')">
				<img src="@assets/play_boards/playboard1.png" alt="Playboard 1" />
				<p>I</p>
			</div>
			<div class="playboard-option" @click="selectPlayboard('playboard2')">
				<img src="@assets/play_boards/playboard2.png" alt="Playboard 2" />
				<p>II</p>
			</div>
			<div class="playboard-option" @click="selectPlayboard('playboard3')">
				<img src="@assets/play_boards/playboard3.jpeg" alt="playboard 3" />
				<p>III</p>
			</div>
		</div>
	</div>
</template>

<script setup>
import utils from '@utils'

utils.updatePageTitle('graphics - settings');

const selectPlayboard = (theme) => {
	console.log(`Selected theme: ${theme}`);
}
</script>

<style scoped>
#settings_graphics {
	display: flex;
	flex-direction: column;
	height: 100vh;
}

.header,
.footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.main {
	flex: 1;
	display: flex;
	justify-content: center;
	align-items: center;
}

.playboard-selector {
	text-align: center;
	font-family: 'SpaceTron', sans-serif;
	padding: 10px;
	color: var(--glow-color);
	border: 5px solid var(--glow-color);
	margin: 30px;
	border-radius: 0.45em;
	-webkit-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	-moz-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	-webkit-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
		0 0 0.45em var(--glow-color);
	-moz-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
		0 0 0.45em var(--glow-color);
	text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
}

.playboard-options {
	display: flex;
	margin: 30px;
	gap: 50px;
	justify-content: center;
}

.playboard-option {
	border: 5px solid var(--glow-color);
	border-radius: 8px;
	padding: 16px;
	margin: 8px;
	cursor: pointer;
	transition: transform 0.2s;
}

.playboard-option:hover {
	transform: scale(1.05);
}

.playboard-option img {
	width: 350px;
	/* Ajuste la taille selon tes besoins */
	height: 240px;
	/* Ajuste la taille selon tes besoins */
}

.title2 {
	margin: 0;
}
</style>
