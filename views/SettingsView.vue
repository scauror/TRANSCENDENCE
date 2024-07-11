<template>
  <div id="settings">
    <header>
      <nav>
        <div class="header">
          <img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
          <h1 class="title">SETTINGS</h1>
        </div>
      </nav>
    </header>
    <main>
      
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

@import url("https://fonts.googleapis.com/css?family=Raleway");

* {
  margin: 0;
}

#settings {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1em;
  background-color: black;
}

header,
footer {
  margin: 5px;
}

.header {
  display: flex;
  align-items: center;
}

.footer {
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

.main_buttons {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

*,
*::before,
*::after {
  box-sizing: border-box;
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

.glowing-btn {
  position: relative;
  color: hsl(0, 100%, 59%);
  cursor: pointer;
  padding: 0.5em 2em;
  width: 450px;
  height: 115px;
  border: 0.15em solid hsl(0, 100%, 59%);
  border-radius: 0.45em;
  background: none;
  perspective: 2em;
  font-family: "Raleway", sans-serif;
  font-size: 2em;
  font-weight: 900;
  letter-spacing: 0.2em;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  -webkit-box-shadow: inset 0px 0px 0.5em 0px hsl(0, 100%, 59%),
    0px 0px 0.5em 0px hsl(0, 100%, 59%);
  -moz-box-shadow: inset 0px 0px 0.5em 0px hsl(0, 100%, 59%),
    0px 0px 0.5em 0px hsl(0, 100%, 59%);
  box-shadow: inset 0px 0px 0.5em 0px hsl(0, 100%, 59%),
    0px 0px 0.5em 0px hsl(0, 100%, 59%);
  animation: border-flicker 7s linear infinite;
}

.glowing-txt {
  float: left;
  margin-right: -0.2em;
  -webkit-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em hsl(0, 100%, 59%);
  -moz-text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3),
    0 0 0.45em hsl(0, 100%, 59%);
  text-shadow: 0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em hsl(0, 100%, 59%);
  animation: text-flicker 7s linear infinite;
}

.faulty-letter {
  opacity: 0.5;
  animation: faulty-flicker 7s linear infinite;
}

.glowing-btn::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  z-index: -1;
  background-color: hsl(0, 100%, 59%);
  box-shadow: 0 0 2em 0.2em hsl(0, 100%, 59%);
  transition: opacity 100ms linear;
}

.glowing-btn:hover {
  color: rgba(0, 0, 0, 0.8);
  text-shadow: none;
  animation: none;
}

.glowing-btn:hover .glowing-txt {
  animation: none;
}

.glowing-btn:hover .faulty-letter {
  animation: none;
  text-shadow: none;
  opacity: 1;
}

.glowing-btn:hover:before {
  filter: blur(1.5em);
  opacity: 1;
}

.glowing-btn:hover:after {
  opacity: 1;
}

@keyframes faulty-flicker {
  0% {
    opacity: 0.4;
  }
  2% {
    opacity: 0.4;
  }
  4% {
    opacity: 0.5;
  }
  19% {
    opacity: 0.5;
  }
  21% {
    opacity: 0.4;
  }
  23% {
    opacity: 1;
  }
  70% {
    opacity: 0.8;
  }
  80% {
    opacity: 0.5;
  }
  83% {
    opacity: 0.4;
  }
  87% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.6;
  }
}

@keyframes text-flicker {
  0% {
    opacity: 0.6;
  }
  8% {
    opacity: 0.8;
  }
  9% {
    opacity: 1;
  }
  12% {
    opacity: 0.4;
  }
  20% {
    opacity: 1;
  }
  25% {
    opacity: 0.4;
  }
  30% {
    opacity: 0.8;
  }
  70% {
    opacity: 0.7;
  }
  72% {
    opacity: 0.6;
  }
  77% {
    opacity: 0.9;
  }
  100% {
    opacity: 0.9;
  }
}

@keyframes border-flicker {
  0% {
    opacity: 0.6;
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
    opacity: 0.8;
  }
  61% {
    opacity: 0.5;
  }
  70% {
    opacity: 1;
  }
  100% {
    opacity: 0.9;
  }
}
</style>
