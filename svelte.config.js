import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  define: {
    'process.env.PUBLIC_DEPLOY_TIMESTAMP': JSON.stringify(new Date().toISOString()),
  },

  kit: {
    adapter: adapter(),
  },
};

export default config;
