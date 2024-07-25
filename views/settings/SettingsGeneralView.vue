<template>
	<div id="settings_general">
		<header>
			<nav>
				<div class="header">
					<router-link to="/">
            <img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
          </router-link>
					<h1 class="title">SETTINGS - GENERAL</h1>
				</div>
			</nav>
		</header>
		<main>
		<div class="difficulties">
			<button class="glowing-btn" @click="null">Easy</button>
			<button class="glowing-btn" @click="null">Normal</button>
			<button class="glowing-btn" @click="null">Hard</button>
		</div>
		</main>
		<footer>
			<div class="footer">
				<h1 class="title2">SETTINGS - GENERAL</h1>
				<router-link to="/">
          <img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
        </router-link>
			</div>
		</footer>
	</div>
</template>

<script setup>

</script>

<style scoped>

@import '../../styles/MainStyle.css';

.difficulties {
	display: flex;
	direction: row;
	justify-content: space-around;
}
</style>