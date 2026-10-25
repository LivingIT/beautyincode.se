import { expect, test, vi } from 'vitest';

vi.mock(import('$app/env/public'), async (importOriginal) => ({
  ...(await importOriginal()),
  PUBLIC_BASE_URL: 'https://example.test',
}));

test('robots.txt allows every crawler and points at the sitemap on PUBLIC_BASE_URL', async () => {
  const { GET } = await import('./+server');
  const response = GET();

  expect(response.headers.get('Content-Type')).toBe('text/plain');
  expect(await response.text()).toBe(
    'User-agent: *\nAllow: /\n\nSitemap: https://example.test/sitemap.xml\n',
  );
});
