import { createRouter, createWebHistory } from 'vue-router';
import PlayMenu from '@/components/PlayMenu.vue';
import TournamentMenu from '@/components/TournamentMenu.vue';
import LeaderboardMenu from '@/components/LeaderboardMenu.vue';
import ProfileMenu from '@/components/ProfileMenu.vue';
import SettingsMenu from '@/components/SettingsMenu.vue';

const routes = [
  {
    path: '/menu/play',
    component: PlayMenu
  },
  {
    path: '/menu/tournament',
    component: TournamentMenu
  },
  {
    path: '/menu/leaderboard',
    component: LeaderboardMenu
  },
  {
    path: '/menu/profile',
    component: ProfileMenu
  },
  {
    path: '/menu/settings',
    component: SettingsMenu
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

