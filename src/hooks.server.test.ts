import type { RequestEvent } from '@sveltejs/kit';
import { expect, test, vi } from 'vitest';

vi.mock(import('$env/static/public'), async (importOriginal) => ({
  ...(await importOriginal()),
  PUBLIC_BASE_URL: 'https://example.test',
}));

const robotsTagFor = async (url: string) => {
  const { handle } = await import('./hooks.server');
  const event = { url: new URL(url) } as RequestEvent;
  const response = await handle({ event, resolve: async () => new Response('') });
  return response.headers.get('X-Robots-Tag');
};

test.each([
  ['https://example.test/', null],
  ['https://example.test/speakers/', null],
  ['https://example.test:8443/', 'noindex'],
  ['https://abc123.example-se.pages.dev/', 'noindex'],
  ['http://localhost:4173/robots.txt', 'noindex'],
])('a request to %j gets X-Robots-Tag %j', async (url, expected) => {
  expect(await robotsTagFor(url)).toBe(expected);
});
