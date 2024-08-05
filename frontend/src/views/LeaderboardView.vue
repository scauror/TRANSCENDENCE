<template>
	<div class="leaderboard">
		<table>
			<thead>
				<tr>
					<th>Rank</th>
					<th>Name</th>
					<th>Winrate</th>
					<th>Rating</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(player, index) in players" :key="player.id">
					<td>#{{ index + 1 }}</td>
					<td>{{ player.name }}</td>
					<td>{{ player.winrate }}%</td>
					<td>{{ player.score }} elo</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script setup>
const players = [
	{ id: 1, name: 'Alice', winrate: 92, score: 1500 },
	{ id: 2, name: 'Bob', winrate: 86, score: 1400 },
	{ id: 3, name: 'Charlie', winrate: 75, score: 1300 },
	// Exemple naze pour l'instant ici mais va falloir afficher l'entierete du tableau avec iterateur ou variable
];
</script>

<style scoped>
.leaderboard {
	margin: 2vh 7vh 2vh 7vh;
	text-align: center;
	color: var(--glow-color);
	font-family: "SpaceTron", sans-serif;
	--size-factor: (0.00188323 * 70vw);
	font-size: calc(12 * var(--size-factor));
}

table {
	height: auto;
	width: 100%;
	overflow: hidden;
	font-family: "SpaceTron", sans-serif;
	-webkit-box-shadow: inset 0px 0px 0.5em 0px hsl(0, 100%, 59%),
		0px 0px 0.5em 0px hsl(0, 100%, 59%);
	-moz-box-shadow: inset 0px 0px 0.5em 0px hsl(0, 100%, 59%),
		0px 0px 0.5em 0px hsl(0, 100%, 59%);
	box-shadow: inset 0px 0px 0.5em 0px hsl(0, 100%, 59%),
		0px 0px 0.5em 0px hsl(0, 100%, 59%);
}


th,
td {
	background-color: rgba(104, 0, 0, 0.274);
	padding: 10px;
	-webkit-box-shadow: inset 0px 0px 0.5em 0px hsl(0, 100%, 59%),
	0px 0px 0.5em 0px hsl(0, 100%, 59%);
	-moz-box-shadow: inset 0px 0px 0.5em 0px hsl(0, 100%, 59%),
	0px 0px 0.5em 0px hsl(0, 100%, 59%);
	box-shadow: inset 0px 0px 0.5em 0px hsl(0, 100%, 59%),
	0px 0px 0.5em 0px hsl(0, 100%, 59%);
}

th {
	font-weight: bolder;
	font-size: larger;
}

tbody tr:nth-child(even) {
	background-color: black;
}

tbody tr:nth-child(odd) {
	background-color: black;
}
</style>
