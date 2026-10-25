import type { Handle } from '@sveltejs/kit';

import { baseUrl } from '$lib/config';

const productionHost = new URL(baseUrl).host;

// Cloudflare Pages also serves every build on *.pages.dev hostnames; keep those copies out of search.
export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);
  if (event.url.host !== productionHost) response.headers.set('X-Robots-Tag', 'noindex');
  return response;
};
