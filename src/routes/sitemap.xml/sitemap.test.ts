import { expect, test } from 'vitest';
import { GET } from './+server';

test('sitemap declares only the sitemap protocol namespace on its urlset root', async () => {
  const sitemap = await (await GET()).text();

  expect(sitemap).toMatch(
    /<urlset\s+xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9"\s*>/,
  );
  expect(sitemap.match(/xmlns/g)).toHaveLength(1);
});
