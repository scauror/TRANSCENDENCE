<template>
	<div id="home">
		<header>
			<nav>
				<div class="header">
					<router-link to="/">
						<img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
					</router-link>
					<h1 class="title">ft_transcendence</h1>
				</div>
			</nav>
		</header>
		<main>
			<section class="main-buttons">
				<!-- <audio id="background-music" src="@/assets/music.mp3" loop></audio>
				<button class="glowing-btn" @click="playAudio">Play Music</button> -->
				<router-link to="/play" class="glowing-btn">
					<span class="glowing-txt">p<span class="faulty-letter">l</span>ay</span>
				</router-link>
				<router-link to="/minigame" class="glowing-btn">
					<span class="glowing-txt">min<span class="faulty-letter">i g</span>ame</span>
				</router-link>
				<router-link to="/leaderboard" class="glowing-btn">
					<span class="glowing-txt">le<span class="faulty-letter">ad</span>erb<span class="faulty-letter">oa</span>rd</span>
				</router-link>
				<router-link to="/profile" class="glowing-btn">
					<span class="glowing-txt">p<span class="faulty-letter">ro</span>file</span>
				</router-link>
				<router-link to="/settings" class="glowing-btn">
					<span class="glowing-txt">se<span class="faulty-letter">tt</span>i<span class="faulty-letter">ng</span>s</span>
				</router-link>
			</section>
		</main>
		<footer>
			<div class="footer">
				<h1 class="title2">ft_transcendence</h1>
				<router-link to="/">
					<img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
				</router-link>
			</div>
		</footer>
	</div>
</template>

<script setup>
// import { ref, onMounted } from 'vue';

// const audio = ref(null);

// const playAudio = () => {
//   if (audio.value) {
//     audio.value.play();
//   }
// };

// onMounted(() => {
//   audio.value = document.getElementById('background-music');
//   if (audio.value) {
//     audio.value.volume = 0.5; // Initial volume
//   }
// });

// onMounted(() => {
// 	const audio = document.getElementById('background-music');
// 	if (audio) {
// 		audio.volume = 0.5; // Initial volume
// 		audio.play();
// 	}
// });
</script>


<style scoped>

@import '../styles/MainStyle.css';

</style>