import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import PlayView from '@/views/PlayView.vue'
import TournamentView from '@/views/TournamentView.vue'
import LeaderboardView from '@/views/LeaderboardView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SettingsView from '@/views/SettingsView.vue'

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
      component: PlayView
    },
    {
      path: '/tournament',
      name: 'TournamentView',
      component: TournamentView
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
