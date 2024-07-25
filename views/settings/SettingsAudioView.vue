<template>
    <div id="settings_audio">
      <header>
        <nav>
          <div class="header">
            <router-link to="/">
              <img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
            </router-link>
            <h1 class="title">SETTINGS - AUDIO</h1>
          </div>
        </nav>
      </header>
      <main>
        <div class="audio-menu">
                  <audio ref="audio" src="@/musics/guapman.mp3" loop></audio>
          <div class="music-options">
            <button class="glowing-btn" @click="playAudio">Musique 1</button>
            <button class="glowing-btn" @click="playAudio">Musique 2</button>
          </div>
          <div class="volume-button-knob" ref="volumeButtonKnob">
            <svg viewBox="0 0 600 600">
              <defs>
                <radialGradient id="radial-gradient" cx="0.5" cy="0.5" r="0.5" gradientUnits="objectBoundingBox">
                  <stop offset="0" stop-color="#202528" />
                  <stop offset="0.849" stop-color="#272c2f" />
                  <stop offset="0.866" stop-color="#6a6d6f" />
                  <stop offset="0.87" stop-color="#202528" />
                  <stop offset="0.879" stop-color="#6a6d6f" />
                  <stop offset="0.908" stop-color="#202528" />
                  <stop offset="1" stop-color="#6a6d6f" />
                </radialGradient>
                <filter id="shadow" filterUnits="userSpaceOnUse">
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feFlood result="color" />
                  <feComposite operator="in" in="blur" />
                  <feComposite in="SourceGraphic" />
                </filter>
                <filter id="inset-shadow">
                  <feOffset input="SourceAlpha" />
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feFlood result="color" />
                  <feComposite operator="out" in="SourceGraphic" in2="blur" />
                  <feComposite operator="in" in="color" />
                  <feComposite operator="in" in2="SourceGraphic" />
                </filter>
              </defs>
              <circle class="circle" cx="300" cy="300" r="200" />
              <g id="gradate" class="gradate" ref="gradateGroup"></g>
              <circle id="slider" class="slider" cx="300" cy="130" r="10" ref="slider" @input="updateVolume" />
              <g class="slider-wrap">
                <circle id="slider-shadow" class="slider" cx="300" cy="130" r="10" ref="sliderShadow" />
              </g>
            </svg>
          </div>
          <span class="volume-meter">{{ settings.volume * 100 }}%</span>
          <div class="music-options">
            <button class="glowing-btn" @click="playAudio">Musique 3</button>
            <button class="glowing-btn" @click="playAudio">Musique 4</button>
          </div>
        </div>
      </main>
      <footer>
        <div class="footer">
          <h1 class="title2">SETTINGS - AUDIO</h1>
          <router-link to="/">
            <img class="logo" src="@/assets/logo.png" alt="Logo Pong Ft_Transcendence">
          </router-link>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const audio = ref(null);
  
  const playAudio = () => {
    if (audio.value) {
      audio.value.play().catch(error => {
        console.error("Playback failed: ", error);
      });
    }
  };
  
  const settings = ref({
    sound: true,
    volume: 0.5
  });
  
  const updateVolume = (event) => {
    if (audio.value) {
      audio.value.volume = event.target.value / 100; // Ensure value is between 0 and 1
    }
  };
  
  onMounted(() => {
      if (audio.value) {
      settings.value.volume = audio.value.volume; // Sync initial volume with the audio element
    }
    // const audio = document.getElementById('background-music');
    // if (audio) {
    //   settings.value.volume = audio.volume; // Sync initial volume with the audio element
    // }
  });
  
  const STEP = 32;
  const DEG_RANGE = 135;
  
  const gradateGroup = ref(null);
  const slider = ref(null);
  const sliderShadow = ref(null);
  const volumeButtonKnob = ref(null);
  
  const gradateLineTemplate = (deg, hue) =>
      `<line data-deg="${deg}" class="active" style="--deg: ${deg}deg; --h: ${hue}" x1="300" y1="30" x2="300" y2="70" />`;
      
      let gradateLines = '';
      const Q = DEG_RANGE / STEP;
      for (let i = DEG_RANGE * -1; i <= DEG_RANGE; i += Q) {
      gradateLines += gradateLineTemplate(i, i + DEG_RANGE * 2);
  }
  
  onMounted(() => {
      gradateGroup.value.innerHTML = gradateLines;
      gradateLines = gradateGroup.value.querySelectorAll("line");
      setValue(0);
      createGradientLines();
      
      volumeButtonKnob.value.addEventListener("mousedown", (e) => {
          e.preventDefault();
          volumeButtonKnob.value.classList.add("without-animate");
          document.addEventListener("mousemove", clickHandler);
          document.addEventListener("mouseup", () => {
              document.removeEventListener("mousemove", clickHandler);
              volumeButtonKnob.value.classList.remove("without-animate");
          }, { once: true });
      });
      
      volumeButtonKnob.value.addEventListener("touchstart", (e) => {
          e.preventDefault();
          volumeButtonKnob.value.classList.add("without-animate");
          document.addEventListener("touchmove", touchHandler);
          document.addEventListener("touchend", () => {
              document.removeEventListener("touchmove", touchHandler);
              volumeButtonKnob.value.classList.remove("without-animate");
          }, { once: true });
      });
  });
  
  function deactiveAll() {
      gradateLines.forEach((l) => {
          l.classList.remove("active");
      });
  }
  
  function active(v) {
      for (let i = 0; i < gradateLines.length; i++) {
          const l = gradateLines[i];
          if (parseFloat(l.dataset.deg) <= v) l.classList.add("active");
      }
  }
  
  function setValue(v) {
      deactiveAll();
      active(v);
      slider.value.style.setProperty("--deg", `${v}deg`);
      sliderShadow.value.style.setProperty("--deg", `${v}deg`);
      slider.value.style.setProperty("--h", `${v * 1 + DEG_RANGE * 2}`);
      createGradientLines();
  }
  
  function createGradientLines() {
      const numLines = 36; // Nombre de lignes
      const radius = 220; // Rayon des lignes
      let lines = '';
      
      for (let i = 0; i < numLines; i++) {
          const angle = (i / numLines) * 360;
          const x1 = 300 + radius * Math.cos((angle * Math.PI) / 180);
          const y1 = 300 + radius * Math.sin((angle * Math.PI) / 180);
          const x2 = 300 + (radius + 30) * Math.cos((angle * Math.PI) / 180);
          const y2 = 300 + (radius + 30) * Math.sin((angle * Math.PI) / 180);
          
          const hue = (i * (360 / numLines)) % 360; // Teinte basée sur l'index
          const saturation = '100%';
          const lightness = '50%';
          
          lines += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="hsl(${hue}, ${saturation}, ${lightness})" stroke-width="10" />`;
      }
      
      gradateGroup.value.innerHTML = lines;
  }
  
  function setByCoords(clientX, clientY) {
      const rect = volumeButtonKnob.value.getBoundingClientRect();
      const CX = rect.width / 2;
      const CY = rect.height / 2;
      
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      
      const r = Math.atan2(y - CY, x - CX);
      const res = Math.round((r / Math.PI) * 180) + 90;
      
      let value = res <= 180 ? res : res - 360;
      value = value <= DEG_RANGE * -1 ? DEG_RANGE * -1 : value;
      value = value >= DEG_RANGE ? DEG_RANGE : value;
      
      setValue(value);
  }
  
  function clickHandler(e) {
      setByCoords(e.clientX, e.clientY);
  }
  
  function touchHandler(e) {
      setByCoords(e.touches[0].clientX, e.touches[0].clientY);
  }
  
  </script>
  
  <style scoped>
  @import '../../styles/MainStyle.css';
  
  .audio-menu {
  display: flex;
  align-items: center;
  justify-content: space-around;
  }
  
  .music-options {
  display: flex;
  flex-direction: column;
  gap: 150px;
  }
  
  .volume-button-knob {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50vh;
      margin: 80px;
  
      svg {
          display: block;
          width: 600px;
          height: 600px;
      }
  }
  
  .circle {
      fill: black;
      stroke: #080516;
      stroke-width: 10px;
  }
  
  .slider-wrap {
      filter: url(#inset-shadow);
  }
  
  .slider {
      --deg: 0deg;
      --h: 270;
      --s: 60%;
      transform-origin: 50% 50%;
      transform: rotate(var(--deg));
      fill: rgba(255, 255, 255, 0.5);
      cursor: grab;
      transition: all 0.1s ease-in-out;
      fill: hsl(var(--h), var(--s), 55%);
  }
  
  .volume-button-knob.without-animate .slider {
      transition: unset;
      cursor: grabbing;
  }
  
  .gradate line {
      --deg: 0deg;
      --h: 135;
      --s: 10%;
      --a: 0.2;
      border-radius: 5px;
      stroke-linecap: round;
      stroke: hsla(var(--h), var(--s), 55%, var(--a));
      transform: rotate(var(--deg));
      transform-origin: 300px 300px; /* Assurer que les lignes sont centrées autour du milieu du SVG */
  
      &:hover,
      &.active {
          --a: 1;
          --s: 60%;
          filter: url(#shadow);
      }
  }
  </style>