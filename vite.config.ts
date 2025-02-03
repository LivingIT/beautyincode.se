import { sveltekit } from '@sveltejs/kit/vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 9001,
  },
  css: {
    devSourcemap: true,
  },
  plugins: [sveltekit(), SvelteKitPWA()],
});
