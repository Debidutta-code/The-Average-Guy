const { chromium } = require('playwright');
const fs = require('fs');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1280, height: 800 });

  const urls = [
    { name: 'home_final', url: 'http://localhost:3000/' },
    { name: 'menu_final', url: 'http://localhost:3000/menu' },
    { name: 'about_final', url: 'http://localhost:3000/about' },
    { name: 'contact_final', url: 'http://localhost:3000/contact' },
    { name: 'reservations_final', url: 'http://localhost:3000/reservations' },
    { name: 'notfound_final', url: 'http://localhost:3000/non-existent-page' }
  ];

  for (const item of urls) {
    try {
      console.log(`Visiting ${item.url}...`);
      await page.goto(item.url, { waitUntil: 'networkidle', timeout: 30000 });

      // Scroll to bottom to trigger animations
      await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 100;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;
            if (totalHeight >= scrollHeight) {
              clearInterval(timer);
              resolve();
            }
          }, 100);
        });
      });

      // Wait a bit for animations to finish
      await page.waitForTimeout(2000);

      await page.screenshot({ path: `verification/${item.name}.png`, fullPage: true });
      console.log(`Captured ${item.name}.png`);
    } catch (e) {
      console.error(`Failed to capture ${item.name}: ${e.message}`);
    }
  }

  await browser.close();
})();
