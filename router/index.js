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
      path: '/play',
      name: 'PlayView',
      component: PlayView,
      children: [
        {path: 'solo', component: SoloView},
        {path: 'local', component: LocalView},
        {path: 'multiplayer', component: MultiplayerView},
        {path: 'tournament', component: TournamentView}
      ]
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
