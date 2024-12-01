import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	server: {
		host: '0.0.0.0',
		port: 9002
	},
	css: {
		devSourcemap: true
	},
	plugins: [sveltekit()]
});
