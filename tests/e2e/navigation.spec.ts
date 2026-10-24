import { expect, test, type Page } from '@playwright/test';

const narrow = { width: 360, height: 800 };
const wide = { width: 1280, height: 800 };

function navigation(page: Page) {
  return {
    toggle: page.getByRole('button', { name: 'Show main navigation' }),
    menuItem: page.locator('nav li').filter({ hasText: 'Speakers' }),
  };
}

test('the navigation toggle opens and closes the menu', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'narrow', 'The toggle shows only on narrow viewports');

  await page.goto('/');
  const { toggle, menuItem } = navigation(page);

  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(menuItem).toHaveAttribute('aria-hidden', 'true');
  await expect(menuItem).toBeHidden();

  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(menuItem).toHaveAttribute('aria-hidden', 'false');
  await expect(menuItem).toBeVisible();

  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(menuItem).toHaveAttribute('aria-hidden', 'true');
  await expect(menuItem).toBeHidden();
});

test('crossing the breakpoint resets an opened menu', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'narrow', 'Starts from a narrow viewport');

  await page.goto('/');
  const { toggle, menuItem } = navigation(page);
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');

  await page.setViewportSize(wide);
  await expect(toggle).toBeHidden();
  await expect(menuItem).toHaveAttribute('aria-hidden', 'false');
  await expect(menuItem).toBeVisible();

  await page.setViewportSize(narrow);
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(menuItem).toHaveAttribute('aria-hidden', 'true');
  await expect(menuItem).toBeHidden();
});

test('narrowing a wide viewport closes the menu behind the toggle', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'wide', 'Starts from a wide viewport');

  await page.goto('/');
  const { toggle, menuItem } = navigation(page);
  await expect(toggle).toBeHidden();
  await expect(menuItem).toBeVisible();

  await page.setViewportSize(narrow);
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(menuItem).toHaveAttribute('aria-hidden', 'true');
  await expect(menuItem).toBeHidden();
});

test.describe('without JavaScript', () => {
  test.use({ javaScriptEnabled: false });

  test('the menu is open on a narrow viewport', async ({ page }, testInfo) => {
    test.skip(testInfo.project.name !== 'narrow', 'The menu collapses only on narrow viewports');

    await page.goto('/');
    const { toggle, menuItem } = navigation(page);
    await expect(toggle).toHaveCount(0);
    await expect(menuItem).toBeVisible();
  });
});
