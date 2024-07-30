import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import UnknownView from '@/views/UnknownPageView.vue'

import PlayView from '@/views/PlayView.vue'
	import SoloView from '@/views/play/SoloView.vue'
	import LocalView from '@/views/play/LocalView.vue'
	import MultiplayerView from '@/views/play/MultiplayerView.vue'
	import TournamentView from '@/views/play/TournamentView.vue'

import MiniGameView from '@/views/MiniGameView.vue'
import LeaderboardView from '@/views/LeaderboardView.vue'
import ProfileView from '@/views/ProfileView.vue'

import SettingsView from '@/views/SettingsView.vue'
	import SettingsAudioView from '@/views/settings/SettingsAudioView.vue'
	import SettingsGeneralView from '@/views/settings/SettingsGeneralView.vue'
	import SettingsGraphicsView from '@/views/settings/SettingsGraphicsView.vue'
	import CreditsView from '@/views/settings/CreditsView.vue'

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
		},
		{
			path: '/settings/settings_general',
			name: 'SettingsGeneralView',
			component: SettingsGeneralView
		},
		{
			path: '/settings/settings_audio',
			name: 'SettingsAudioView',
			component: SettingsAudioView
		},
		{
			path: '/settings/settings_graphics',
			name: 'SettingsGraphicsView',
			component: SettingsGraphicsView
		},
		{
			path: '/settings/credits',
			name: 'CreditsView',
			component: CreditsView
		},
		{
			path: '/:pathMatch(.*)',
			name: 'UnknownView',
			component: UnknownView
		},
	]
})

export default router
