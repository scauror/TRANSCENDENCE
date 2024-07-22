<template>
	<div id="home">
		<header>
			<nav>
				<div class="header">
				<img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
				<h1 class="title">FT_TRANSCENDENCE</h1>
				</div>
			</nav>
		</header>
		<main>
			<section class="main_buttons">
			<router-link to="/play" class="glowing-btn">
			<span class="glowing-txt">P<span class="faulty-letter">L</span>AY</span>
			</router-link>
			<router-link to="/minigame" class="glowing-btn">
			<span class="glowing-txt">MIN<span class="faulty-letter">I G</span>AME</span>
			</router-link>
			<router-link to="/leaderboard" class="glowing-btn">
			<span class="glowing-txt">LEADERB<span class="faulty-letter">OA</span>RD</span>
			</router-link>
			<router-link to="/profile" class="glowing-btn">
			<span class="glowing-txt">P<span class="faulty-letter">RO</span>FILE</span>
			</router-link>
			<router-link to="/settings" class="glowing-btn">
			<span class="glowing-txt">SETTI<span class="faulty-letter">NG</span>S</span>
			</router-link>
			</section>
		</main>
			<footer>
			<div class="footer">
			<img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
			</div>
		</footer>
	</div>
</template>



<script setup>

</script>


<style scoped>



</style>
