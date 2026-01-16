const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1400, height: 3000 });
    console.log('Loading page...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle0', timeout: 30000 });
    console.log('Page loaded, taking screenshot...');
    await page.screenshot({ path: '/tmp/cc-agent/62627810/project/landing-preview.png', fullPage: true });
    await browser.close();
    console.log('Screenshot saved successfully!');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
})();
