/// <reference types="vitest/config" />
import adapter from '@sveltejs/adapter-cloudflare';
import { sveltekit } from '@sveltejs/kit/vite';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 9009,
  },
  css: {
    devSourcemap: true,
  },
  plugins: [
    sveltekit({
      preprocess: [vitePreprocess(), mdsvex()],
      extensions: ['.svelte', '.svx'],
      adapter: adapter({}),
    }),
  ],
  test: {
    include: ['src/**/*.test.ts'],
  },
});
