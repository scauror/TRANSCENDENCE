// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

//import { createApp } from 'vue';
//import { createRouter, createWebHistory } from 'vue-router';
//import App from './App.vue';
//import PlayMenu from './menu/PlayMenu.vue';

//const routes = [
//  { path: '/menu/play', component: PlayMenu }
   //Ajoutez d'autres routes ici si nécessaire
//];

//const router = createRouter({
//  history: createWebHistory(),
//  routes
//});

//const app = createApp(App);
//app.use(router);
//app.mount('#app');

import { createApp } from 'vue'; // Import correct pour Vue 3
import App from './App.vue';
import router from './router';

createApp(App)
  .use(router)
  .mount('#app');


