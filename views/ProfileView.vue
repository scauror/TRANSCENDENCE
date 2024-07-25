<template>
  <div id="profile">
    <header>
      <nav>
        <div class="header">
          <router-link to="/">
            <img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
          </router-link>
          <h1 class="title">Profile - {{ pseudo }}</h1>
        </div>
      </nav>
    </header>
    <main>
      <div class="profile-container">
        <div class="profile-stats">
          <h2>Statistics</h2>
          <ul>
            <li>Games Played - 100</li>
            <li>Games Won - 75</li>
            <li>Win Rate - 75%</li>
            <li>Rank - Gold</li>
          </ul>
        </div>
        <div class="profile-photo">
          <img class="photo" src="@/assets/simon.webp">
        </div>
      </div>
      <div class="profile-activity">
        <h2>Last Games</h2>
        <ul>
          <li>Simon Vs Louis | 5 - 4 |</li>
          <li>Simon Vs Alan | 3 - 5 |</li>
          <li>Simon VS Ia | 2 - 5 |</li>
        </ul>
      </div>
      <div class="profile-info">
        <h2>Personal Information</h2>
        <p>Name - Simon Carpentier</p>
        <p>Email - scarpent@student.42lehavre.fr</p>
      </div>
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
let pseudo = "dolphin";
</script>

<style scoped>
@import '../styles/MainStyle.css';

main {
	color: var(--glow-color);
}

.profile-container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	margin: 20px;
	padding: 20px;
	border: 0.2em solid var(--glow-color);
	border-radius: 0.45em;
	background: none;
	-webkit-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	-moz-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
}

.profile-photo .photo {
	width: 150px;
	height: 150px;
	border-radius: 50%;
	object-fit: cover;
	border: 0.2em solid var(--glow-color);
	box-shadow: 0px 0px 0.5em 0px var(--glow-color);
}

.profile-stats {
	flex: 1;
}

.profile-stats h2 {
	margin-bottom: 15px;
}

.profile-stats ul {
	list-style-type: none;
	padding: 0;
}

.profile-stats ul li,
.profile-activity ul li,
.profile-info p {
		margin-bottom: 10px;
	}

.profile-activity {
	margin: 20px;
	padding: 20px;
	border: 0.2em solid var(--glow-color);
	border-radius: 0.45em;
	background: none;
	-webkit-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	-moz-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
}

.profile-activity h2 {
	margin-bottom: 10px;
}

.profile-activity ul {
	list-style-type: none;
	padding: 0;
	margin: 0;
}

.profile-activity li {
	margin-bottom: 5px;
}

.profile-info {
	margin: 20px;
	padding: 20px;
	border: 0.2em solid var(--glow-color);
	border-radius: 0.45em;
	background: none;
	-webkit-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	-moz-box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	box-shadow: inset 0px 0px 0.5em 0px var(--glow-color),
		0px 0px 0.5em 0px var(--glow-color);
	text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em var(--glow-color);
}

.profile-info h2 {
	margin-bottom: 10px;
}
</style>