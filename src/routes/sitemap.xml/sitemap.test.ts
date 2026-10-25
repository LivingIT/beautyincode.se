import { afterEach, expect, test, vi } from 'vitest';

const sitemapFor = async (deployTimestamp: string) => {
  vi.doMock(import('$env/static/public'), async (importOriginal) => ({
    ...(await importOriginal()),
    PUBLIC_DEPLOY_TIMESTAMP: deployTimestamp,
  }));
  const { GET } = await import('./+server');
  return (await GET()).text();
};

afterEach(() => {
  vi.resetModules();
});

test('sitemap declares only the sitemap protocol namespace on its urlset root', async () => {
  const sitemap = await sitemapFor('2026-10-25T12:00:00Z');

  expect(sitemap).toMatch(
    /<urlset\s+xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"\s*>/,
  );
  expect(sitemap.match(/xmlns/g)).toHaveLength(1);
});

test('every lastmod is the deploy timestamp', async () => {
  const sitemap = await sitemapFor('2026-10-25T12:00:00Z');
  const lastmods = [...sitemap.matchAll(/<lastmod>([^<]*)<\/lastmod>/g)].map((m) => m[1]);

  expect(lastmods).toHaveLength(sitemap.match(/<url>/g)!.length);
  expect(new Set(lastmods)).toEqual(new Set(['2026-10-25T12:00:00Z']));
});

test('sitemap has no lastmod when the deploy timestamp is empty', async () => {
  const sitemap = await sitemapFor('');

  expect(sitemap).toMatch(/<url>/);
  expect(sitemap).not.toMatch(/<lastmod>/);
});
