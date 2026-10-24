import { expect, test } from '@playwright/test';

test('the navigation toggle opens and closes the menu', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'narrow', 'The toggle shows only on narrow viewports');

  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Show main navigation' });
  const menuItem = page.locator('nav li').filter({ hasText: 'Speakers' });

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
