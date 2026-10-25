import { baseUrl } from '$lib/config';

export function GET() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`, {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
