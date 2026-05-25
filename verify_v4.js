const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const urls = [
    { name: 'home_v4', url: 'http://localhost:3000/' },
    { name: 'events_v4', url: 'http://localhost:3000/events' },
    { name: 'menu_v4', url: 'http://localhost:3000/menu' },
    { name: 'admin_login_v4', url: 'http://localhost:3000/admin/login' },
    { name: 'privacy_v4', url: 'http://localhost:3000/privacy-policy' }
  ];

  for (const item of urls) {
    try {
      console.log(`Visiting ${item.url}...`);
      await page.goto(item.url, { waitUntil: 'networkidle', timeout: 30000 });
      await page.screenshot({ path: `verification/${item.name}.png`, fullPage: true });
      console.log(`Captured ${item.name}.png`);
    } catch (e) {
      console.error(`Failed to capture ${item.name}: ${e.message}`);
    }
  }

  await browser.close();
})();
