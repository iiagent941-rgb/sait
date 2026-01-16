const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1400, height: 3000 });
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(2000);
  await page.screenshot({ path: '/tmp/cc-agent/62627810/project/landing-preview.png', fullPage: true });
  await browser.close();
  console.log('Screenshot saved!');
})();
