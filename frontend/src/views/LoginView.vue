<template>
	<div id="register_page">
		<form @submit.prevent="submitForm">
			<div class="form-group">
				<label for="login">login:</label>
				<input type="text" id="login" v-model="login">
			</div>
			<div class="form-group">
				<label for="password">password:</label>
				<input type="password" id="password" v-model="password">
			</div>
			<div class="button-group">
				<GlowingButton class="small-button" :type="'submit'" :text="'login'"/>
				<GlowingButton class="small-button" :type="'submit'" :text="'register'"/>
			</div>
		</form>
		<GlowingButton class="go-back-button small-button" :text="'go back home'" :dest="'/'"/>
	</div>
</template>


<script setup>
import GlowingButton from '@/components/GlowingButton.vue'
</script>

<style scoped>
#register_page {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: var(--glow-color);
	--size-factor: (0.00188323 * 70vw);
	font-size: calc(8 * var(--size-factor));
}

.form-group {
	margin-bottom: 2vh;
	width: 100%;
	text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
}

#login, #password {
	width: 100%;
	padding: 1vh;
	background-color: black;
	border: 0.15em solid var(--glow-color);
	border-radius: 0.45em;
	color: var(--glow-color);
	box-sizing: border-box;
	-webkit-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	-moz-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	animation: border-flicker 7s linear infinite;
	font-family: 'SpaceTron', sans-serif;
	outline: none;
}

.button-group {
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-top: 2vh;
}

.button-group .small-button {
	margin-right: 1vh;
	flex: 1;
}

.button-group .small-button:last-child {
	margin-right: 0;
}


form {
	width: 50vh;
}

label {
	display: block;
	margin-bottom: 0.5vh;
}

.small-button {
	padding: 1vh 2vh;
	font-size: 0.8em;
	min-width: 12vh;
}

.go-back-button {
	margin-top: 2vh;
	width: 45.7vh;
}
</style>
