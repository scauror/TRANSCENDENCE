import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@components': fileURLToPath(new URL('./src/components', import.meta.url)),
			'@scripts': fileURLToPath(new URL('./src/scripts', import.meta.url)),
			'@assets': fileURLToPath(new URL('./assets', import.meta.url)),
			'@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
		}
	}
})
