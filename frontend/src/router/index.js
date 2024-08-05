import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import UnknownView from '@/views/UnknownPageView.vue'
/* ************************************************************************** */
import SoloView from '@/views/play/SoloView.vue'
import LocalView from '@/views/play/LocalView.vue'
import MultiplayerView from '@/views/play/MultiplayerView.vue'
import TournamentView from '@/views/play/TournamentView.vue'
/* ************************************************************************** */
import PlayView from '@/views/PlayView.vue'
import MiniGameView from '@/views/MiniGameView.vue'
import LeaderboardView from '@/views/LeaderboardView.vue'
import ProfileView from '@/views/ProfileView.vue'
import SettingsView from '@/views/SettingsView.vue'
import LoginView from '@/views/LoginView.vue'
/* ************************************************************************** */
import SettingsAudioView from '@/views/settings/SettingsAudioView.vue'
import SettingsGeneralView from '@/views/settings/SettingsGeneralView.vue'
import SettingsGraphicsView from '@/views/settings/SettingsGraphicsView.vue'
import CreditsView from '@/views/settings/CreditsView.vue'
/* ************************************************************************** */

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'HomeView',
			component: HomeView,
			meta: {
				title: 'ft_transcendence'
			}
		},
		{
			path: '/play',
			name: 'PlayView',
			component: PlayView,
			meta: {
				title: 'play',
			}
		},
		{
			path: '/login',
			name: 'LoginView',
			component: LoginView,
			meta: {
				title: 'login',
			}
		},
		{
			path: '/play/solo',
			name: 'SoloView',
			component: SoloView,
			meta: {
				title: 'solo - play',
			}
		},
		{
			path: '/play/local',
			name: 'LocalView',
			component: LocalView,
			meta: {
				title: 'local - play',
			}
		},
		{
			path: '/play/multiplayer',
			name: 'MultiplayerView',
			component: MultiplayerView,
			meta: {
				title: 'multiplayer - play',
			}
		},
		{
			path: '/play/tournament',
			name: 'TournamentView',
			component: TournamentView,
			meta: {
				title: 'tournament',
			}
		},
		{
			path: '/minigame',
			name: 'MiniGameView',
			component: MiniGameView,
			meta: {
				title: 'tron - mini game',
			}
		},
		{
			path: '/leaderboard',
			name: 'LeaderboardView',
			component: LeaderboardView,
			meta: {
				title: 'leaderboard'
			}
		},
		{
			path: '/profile',
			name: 'ProfileView',
			component: ProfileView,
			meta: {
				title: 'profile'
			}
		},
		{
			path: '/settings',
			name: 'SettingsView',
			component: SettingsView,
			meta: {
				title: 'settings'
			}
		},
		{
			path: '/settings/settings_general',
			name: 'SettingsGeneralView',
			component: SettingsGeneralView,
			meta: {
				title: 'general - settings'
			}
		},
		{
			path: '/settings/settings_audio',
			name: 'SettingsAudioView',
			component: SettingsAudioView,
			meta: {
				title: 'audio - settings'
			}
		},
		{
			path: '/settings/settings_graphics',
			name: 'SettingsGraphicsView',
			component: SettingsGraphicsView,
			meta: {
				title: 'graphics - settings'
			}
		},
		{
			path: '/settings/credits',
			name: 'CreditsView',
			component: CreditsView,
			meta: {
				title: 'credit$'
			}
		},
		{
			path: '/:pathMatch(.*)',
			name: 'UnknownView',
			component: UnknownView,
			meta: {
				title: 'unknown page'
			}
		},
	]
});

router.beforeEach(
	(to, from) => {
		document.title = to.meta?.title ?? 'placeholder title';
	}
);

export default router
