import { test, expect } from '@playwright/test';

test('verify final immersive experience', async ({ page }) => {
  await page.goto('http://localhost:3002');

  // Wait for preloader
  await page.waitForTimeout(3000);

  // Take screenshot of hero with mug
  await page.screenshot({ path: 'verification/final_v2_hero.png', fullPage: false });

  // Scroll to trigger liquid spill and story
  await page.mouse.wheel(0, 1500);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/final_v2_spill.png', fullPage: false });

  // Verify Menu
  await page.mouse.wheel(0, 2000);
  await page.waitForTimeout(1000);
  await page.screenshot({ path: 'verification/final_v2_menu.png', fullPage: false });
});
