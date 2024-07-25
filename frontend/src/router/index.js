import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PlayView from '@/views/PlayView.vue'
import MiniGameView from '@/views/MiniGameView.vue'
import LeaderboardView from '@/views/LeaderboardView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SettingsView from '@/views/SettingsView.vue'

import SoloView from '@/views/play/SoloView.vue'
import LocalView from '@/views/play/LocalView.vue'
import MultiplayerView from '@/views/play/MultiplayerView.vue'
import TournamentView from '@/views/play/TournamentView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'HomeView',
      component: HomeView
    },
    {
      path: '/play', //jai give up les children c'est de la merde en barre et ca complique le taff plus qu'autre chose
      name: 'PlayView', //apres moultes recherches bcp de gens font comme ca c'est commun donc bon nike sa mere ca fonctionne nickel
      component: PlayView //Alan si tu passes par la mange mes pieds
    },
    {
      path: '/play/solo',
      name: 'SoloView',
      component: SoloView
    },
    {
      path: '/play/local',
      name: 'LocalView',
      component: LocalView
    },
    {
      path: '/play/multiplayer',
      name: 'MultiplayerView',
      component: MultiplayerView
    },
    {
      path: '/play/tournament',
      name: 'TournamentView',
      component: TournamentView
    },
    {
      path: '/minigame',
      name: 'MiniGameView',
      component: MiniGameView
    },
    {
      path: '/leaderboard',
      name: 'LeaderboardView',
      component: LeaderboardView
    },
    {
      path: '/profile',
      name: 'ProfileView',
      component: ProfileView
    },
    {
      path: '/settings',
      name: 'SettingsView',
      component: SettingsView
    }
  ]
})

export default router
