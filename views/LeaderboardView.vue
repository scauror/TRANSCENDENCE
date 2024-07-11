<template>
  <div id="page">
  <header>
    <nav>
      <div class="header">
			<img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
			<h1 class="title">LEADERBOARD</h1>
      </div>
    </nav>
  </header>
  <main>
    <div class="leaderboard">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(player, index) in players" :key="player.id">
            <td>{{ index + 1 }}</td>
            <td>{{ player.name }}</td>
            <td>{{ player.score }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
  <footer>
			<div class="footer">
			<img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
			</div>
	</footer>
</div>
</template>

<script>
export default {
  name: 'LeaderboardView',
  data() {
    return {
      players: [
        { id: 1, name: 'Alice', score: 1500 },
        { id: 2, name: 'Bob', score: 1400 },
        { id: 3, name: 'Charlie', score: 1300 },
        // Exemple naze pour l'instant ici mais va falloir afficher l'entierete du tableau avec iterateur ou variable
      ]
    }
  }
}
</script>

<style scoped>

#page {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1em;
  background-color: black;
}

main {
  background-color: black;
}

header, footer {
  text-align: center;
  background-color: black;
}

.header, .footer {
  display: flex;
  align-items: center;
}

.logo {
  width: 125px;
  height: 125px;
  border-radius: 50%;
  overflow: hidden;
  margin: 10px;
  -webkit-box-shadow: inset 0px 0px 1.75em 0px hsl(0, 100%, 59%),
    0px 0px 1.75em 0px hsl(0, 100%, 59%);
  -moz-box-shadow: inset 0px 0px 1.75em 0px hsl(0, 100%, 59%),
    0px 0px 1.75em 0px hsl(0, 100%, 59%);
  box-shadow: inset 0px 0px 1.75em 0px hsl(0, 100%, 59%),
    0px 0px 1.75em 0px hsl(0, 100%, 59%);
  border: 0.25em solid hsl(0, 100%, 59%);
  perspective: 2em;
}

.title {
  flex: 1;
  color: hsl(0, 100%, 59%);
  padding: 0.35em 1em;
  border: 0.15em solid hsl(0, 100%, 59%);
  border-radius: 0.45em;
  background: none;
  perspective: 2em;
  text-align: end;
  letter-spacing: 0.6em;
  font-family: "Raleway", sans-serif;
  font-size: 2em;
  font-weight: 900;
  -webkit-box-shadow: inset 0px 0px 0.5em 0px hsl(0, 100%, 59%),
    0px 0px 0.5em 0px hsl(0, 100%, 59%);
  -moz-box-shadow: inset 0px 0px 0.5em 0px hsl(0, 100%, 59%),
    0px 0px 0.5em 0px hsl(0, 100%, 59%);
  box-shadow: inset 0px 0px 0.5em 0px hsl(0, 100%, 59%),
    0px 0px 0.5em 0px hsl(0, 100%, 59%);
  -webkit-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em hsl(0, 100%, 59%);
  -moz-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em hsl(0, 100%, 59%);
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em hsl(0, 100%, 59%);
}

.leaderboard {
  max-width: 600px;
  margin: auto;
  text-align: center;
  font-family: "Raleway", sans-serif;
  font-weight: bold;
  color: hsl(0, 100%, 59%);
}

h1 {
  color: hsl(0, 100%, 59%);
}

table {
  width: 100%;
  border: 0.15em solid hsl(0, 100%, 59%);
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 50px;
  background-color: black;
  border-radius: 1em;
  overflow: hidden;
  color: hsl(0, 100%, 59%);
  font-family: "Raleway", sans-serif;
  text-transform: uppercase;
  -webkit-box-shadow: inset 0px 0px 0.5em 0px hsl(0, 100%, 59%),
    0px 0px 0.5em 0px hsl(0, 100%, 59%);
  -moz-box-shadow: inset 0px 0px 0.5em 0px hsl(0, 100%, 59%),
    0px 0px 0.5em 0px hsl(0, 100%, 59%);
  box-shadow: inset 0px 0px 0.5em 0px hsl(0, 100%, 59%),
    0px 0px 0.5em 0px hsl(0, 100%, 59%);
  animation: border-flicker 3s linear infinite;
}

th, td {
  padding: 10px;
  border: 0.15em solid hsl(0, 100%, 59%);
  font-weight: bold;
  font-size: 25px;
  -webkit-box-shadow: inset 0px 0px 0.5em 0px hsl(0, 100%, 59%),
    0px 0px 0.5em 0px hsl(0, 100%, 59%);
  -moz-box-shadow: inset 0px 0px 0.5em 0px hsl(0, 100%, 59%),
    0px 0px 0.5em 0px hsl(0, 100%, 59%);
  box-shadow: inset 0px 0px 0.5em 0px hsl(0, 100%, 59%),
    0px 0px 0.5em 0px hsl(0, 100%, 59%);
}

tbody tr:nth-child(even) {
  background-color: black;
}

tbody tr:nth-child(odd) {
  background-color: black;
}

/* Arrondir les coins supérieurs du tableau */
table thead tr:first-child th:first-child {
  border-top-left-radius: 0.5em;
}

table thead tr:first-child th:last-child {
  border-top-right-radius: 0.5em;
}

/* Arrondir les coins inférieurs du tableau */
table tbody tr:last-child td:first-child {
  border-bottom-left-radius: 0.5em;
}

table tbody tr:last-child td:last-child {
  border-bottom-right-radius: 0.5em;
}

@keyframes border-flicker {
  0% {
    opacity: 0.8;
  }
  10% {
    opacity: 0.9;
  }
  19% {
    opacity: 1;
  }
  31% {
    opacity: 0.7;
  }
  42% {
    opacity: 0.9;
  }
  61% {
    opacity: 0.7;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0.9;
  }
}

</style>