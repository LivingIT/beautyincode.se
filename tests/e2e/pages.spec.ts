import AxeBuilder from '@axe-core/playwright';
import { expect, test, type APIRequestContext } from '@playwright/test';

import speakers from '../../src/lib/data/speakers';
import { schedule } from '../../src/lib/data/schedule';

const siteTitle = String(process.env.PUBLIC_SITE_TITLE);
const baseUrl = String(process.env.PUBLIC_BASE_URL);
const ogImage = String(process.env.PUBLIC_OG_IMAGE);

async function sitemapPaths(request: APIRequestContext) {
  const sitemap = await (await request.get('/sitemap.xml')).text();
  const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, loc]) => new URL(loc).pathname);
  expect(paths.length).toBeGreaterThan(0);
  return paths;
}

test('every page in the sitemap renders its title, share titles and Open Graph URL without console errors', async ({
  page,
  request,
}) => {
  const paths = await sitemapPaths(request);

  let errors: Array<string> = [];
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('pageerror', (error) => errors.push(error.message));

  for (const path of paths) {
    await test.step(path, async () => {
      errors = [];
      const response = await page.goto(path);
      expect(response?.status()).toBe(200);
      const title = await page.title();
      expect(title.slice(-siteTitle.length)).toBe(siteTitle);
      if (path === '/') expect(title).toBe(siteTitle);
      for (const shareTitle of ['meta[property="og:title"]', 'meta[name="twitter:title"]']) {
        await expect(page.locator(shareTitle)).toHaveCount(1);
        await expect(page.locator(shareTitle)).toHaveAttribute('content', title);
      }
      await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
        'content',
        `${baseUrl}${path}`,
      );
      await expect(page.locator('meta[property="og.url"]')).toHaveCount(0);
      await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'website');
      await expect(page.locator('meta[name="twitter:image"]')).toHaveAttribute(
        'content',
        `${baseUrl}/${ogImage}`,
      );
      await expect(page.locator('meta[property="twitter:image"]')).toHaveCount(0);
      await page.waitForLoadState('networkidle');
      expect(errors).toEqual([]);
    });
  }
});

// Incomplete results, such as contrast over the hero image, stay part of the manual rendered check.
test('every page in the sitemap has no WCAG A or AA violations in either colour scheme', async ({
  page,
  request,
}) => {
  const paths = await sitemapPaths(request);
  for (const colorScheme of ['light', 'dark'] as const) {
    await page.emulateMedia({ colorScheme });
    for (const path of paths) {
      await test.step(`${path} (${colorScheme})`, async () => {
        await page.goto(path);
        const { violations } = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
          .analyze();
        const found = violations.map(({ id, nodes }) => ({
          rule: id,
          elements: nodes.map(({ target }) => target.join(' ')),
        }));
        expect(found, `WCAG violations on ${path} (${colorScheme})`).toEqual([]);
      });
    }
  }
});

test('the sitemap, meta tag and deploy comment show one build-time W3C timestamp', async ({
  request,
}) => {
  const sitemap = await (await request.get('/sitemap.xml')).text();
  const lastmods = new Set([...sitemap.matchAll(/<lastmod>(.*?)<\/lastmod>/g)].map(([, t]) => t));
  expect(lastmods.size).toBe(1);
  const [deployTime] = lastmods;
  expect(deployTime).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/);

  for (const [, loc] of sitemap.matchAll(/<loc>(.*?)<\/loc>/g)) {
    const html = await (await request.get(new URL(loc).pathname)).text();
    expect(html).toContain(`<meta name="deploy-time" content="${deployTime}"`);
    expect(html).toContain(`<!-- Deployed: ${deployTime} -->`);
  }
});

test('no page loads Google Analytics, since .env.example leaves PUBLIC_GOOGLE_ANALYTICS empty', async ({
  page,
  request,
}) => {
  const paths = await sitemapPaths(request);
  const analyticsRequests: Array<string> = [];
  page.on('request', (request) => {
    if (new URL(request.url()).hostname === 'www.googletagmanager.com') {
      analyticsRequests.push(request.url());
    }
  });

  for (const path of paths) {
    await test.step(path, async () => {
      await page.goto(path);
      await page.waitForLoadState('networkidle');
      expect(await page.evaluate(() => 'gtag' in window || 'dataLayer' in window)).toBe(false);
    });
  }
  expect(analyticsRequests).toEqual([]);
});

test('robots.txt is served as plain text without a redirect', async ({ request }) => {
  const response = await request.get('/robots.txt', { maxRedirects: 0 });
  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toBe('text/plain');
});

test('every response is marked noindex, since the tests serve on a host other than PUBLIC_BASE_URL', async ({
  request,
}) => {
  const paths = [...(await sitemapPaths(request)), '/robots.txt', '/sitemap.xml', '/no-such-page/'];
  for (const path of paths) {
    const response = await request.get(path);
    expect(response.headers()['x-robots-tag'], path).toBe('noindex');
  }
});

test('the speakers page has an anchor for each speaker', async ({ page }) => {
  await page.goto('/speakers/');
  for (const slug of Object.keys(speakers)) {
    await expect(page.locator(`[id="${slug}"]`)).toHaveCount(1);
  }
});

test('the schedule links each talk to its speaker', async ({ page }) => {
  await page.goto('/schedule/');
  for (const { speakerSlug } of schedule.filter((item) => item.speakerSlug)) {
    await expect(page.locator(`a[href="/speakers/#${speakerSlug}"]`)).not.toHaveCount(0);
  }
});

test('the hero and the tickets page show open ticket sales, as .env.example sets them', async ({
  page,
}) => {
  for (const path of ['/', '/tickets/']) {
    await page.goto(path);
    await expect(page.getByRole('link', { name: 'Get tickets now' })).toBeVisible();
    await expect(page.getByText('Ticket sales have closed!')).toHaveCount(0);
  }
});
