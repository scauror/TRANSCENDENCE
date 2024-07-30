import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UnknownView from '@/views/UnknownPageView.vue'
import PlayView from '@/views/PlayView.vue'
import SoloView from '@/views/play/SoloView.vue'

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
			path: '/play/solo',
			name: 'SoloView',
			component: SoloView
		},
		// {
		// 	path: '/play/local',
		// 	name: 'LocalView',
		// 	component: LocalView
		// },
		// {
		// 	path: '/play/multiplayer',
		// 	name: 'MultiplayerView',
		// 	component: MultiplayerView
		// },
		// {
		// 	path: '/play/tournament',
		// 	name: 'TournamentView',
		// 	component: TournamentView
		// },
		// {
		// 	path: '/minigame',
		// 	name: 'MiniGameView',
		// 	component: MiniGameView
		// },
		// {
		// 	path: '/leaderboard',
		// 	name: 'LeaderboardView',
		// 	component: LeaderboardView
		// },
		// {
		// 	path: '/profile',
		// 	name: 'ProfileView',
		// 	component: ProfileView
		// },
		// {
		// 	path: '/settings',
		// 	name: 'SettingsView',
		// 	component: SettingsView
		// },
		// {
		// 	path: '/settings/settings_general',
		// 	name: 'SettingsGeneralView',
		// 	component: SettingsGeneralView
		// },
		// {
		// 	path: '/settings/settings_audio',
		// 	name: 'SettingsAudioView',
		// 	component: SettingsAudioView
		// },
		// {
		// 	path: '/settings/settings_graphics',
		// 	name: 'SettingsGraphicsView',
		// 	component: SettingsGraphicsView
		// },
		// {
		// 	path: '/settings/credits',
		// 	name: 'CreditsView',
		// 	component: CreditsView
		// },
		{
			path: '/:pathMatch(.*)',
			name: 'UnknownView',
			component: UnknownView
		},
	]
})

export default router
