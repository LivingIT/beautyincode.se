import { readFileSync } from 'node:fs';
import { parseEnv } from 'node:util';
import { expect, test } from '@playwright/test';

import speakers from '../../src/lib/data/speakers';
import { schedule } from '../../src/lib/data/schedule';

const { PUBLIC_SITE_TITLE: siteTitle } = parseEnv(readFileSync('.env.example', 'utf8'));

// Keep the tests off the network: analytics loads from Google.
test.beforeEach(async ({ page }) => {
  await page.route('https://www.googletagmanager.com/**', (route) => route.fulfill({ body: '' }));
});

test('every page in the sitemap renders without console errors', async ({ page, request }) => {
  const sitemap = await (await request.get('/sitemap.xml')).text();
  const paths = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([, loc]) => new URL(loc).pathname);
  expect(paths.length).toBeGreaterThan(0);

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
      await expect(page).toHaveTitle(new RegExp(`${siteTitle}$`));
      await page.waitForLoadState('networkidle');
      expect(errors).toEqual([]);
    });
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

test('the hero and the tickets page show open ticket sales', async ({ page }) => {
  for (const path of ['/', '/tickets/']) {
    await page.goto(path);
    await expect(page.getByRole('link', { name: 'Get tickets now' })).toBeVisible();
    await expect(page.getByText('Ticket sales have closed!')).toHaveCount(0);
  }
});
