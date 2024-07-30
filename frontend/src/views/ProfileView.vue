<template>
	<div class="profile">
		<div class="profile-info">
			<h2>Personal Information</h2>
			<p> Name - {{ data.profile.fullname }} </p>
			<p>Email - {{ data.profile.email }} </p>
		</div>
		<div class="profile-container">
			<div class="profile-stats">
				<h2>Statistics</h2>
				<ul>
					<li> Games Played - {{ data.stats.played }} </li>
					<li> Games Won - {{ data.stats.wins }} </li>
					<li> Win Rate - {{ getWinRate(data) }} </li>
					<li> Rank - Gold </li>
				</ul>
			</div>
			<div class="profile-photo">
				<img class="photo" :src="utils.loadAsset(data.profile.profile_picture_path)"/>
			</div>
		</div>
		<div class="profile-activity">
			<h2> Last Games </h2>
			<ul>
				<li v-for="match in data.match_history">
					{{ data.profile.username }} Vs {{ match.opponent }} | {{ match.score }} - {{ match.opponent_score }} |
				</li>
			</ul>
		</div>
	</div>
</template>


<script setup>
import utils from '@utils'

const data = {
	stats: {
		played: 100,
		wins: 75,
		rank: 'gold',
	},
	profile: {
		fullname: 'Simon Carpentier',
		username: 'Auror',
		email: 'scarpent@student.42lehavre.fr',
		profile_picture_path: 'dev_pp/simon.webp' // TODO: Replace hard path by API call.
	},
	match_history: [
		{
			opponent: 'Louis', // TODO: Replace hard username by API call.
			score: 5,
			opponent_score: 4
		},
		{
			opponent: 'Alan', // TODO: Replace hard username by API call.
			score: 3,
			opponent_score: 5
		},
		{
			opponent: 'AI', // TODO: Replace hard username by API call.
			score: 2,
			opponent_score: 5
		},
	]
};

function getWinRate(data) {
	return Math.round(100 * data.stats.played / data.stats.wins);
}

utils.updatePageTitle(`${data.profile.username} - PROFILE`);
</script>

<style scoped>
.profile {
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
