import { test, expect } from '@playwright/test';

test('verify old town cafe branding', async ({ page }) => {
  await page.goto('http://localhost:3006');
  await page.waitForTimeout(2000);

  // Check for the new branding in Hero
  const heroTitle = await page.locator('h1.hero-title');
  await expect(heroTitle).toContainText('OLD TOWN');
  await expect(heroTitle).toContainText('CAFE');

  // Check Navbar
  const navbarLogo = await page.locator('nav').first();
  await expect(navbarLogo).toContainText('OLD TOWN');
  await expect(navbarLogo).toContainText('CAFE');

  await page.screenshot({ path: 'verification/final_branding.png', fullPage: false });
});
