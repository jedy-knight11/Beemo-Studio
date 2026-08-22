const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });

  console.log('Capturing after.png from http://127.0.0.1:3000...');
  try {
      await page.goto('http://127.0.0.1:3000', { waitUntil: 'domcontentloaded', timeout: 10000 });
      await new Promise(resolve => setTimeout(resolve, 3000));
      await page.screenshot({ path: 'after.png', fullPage: true });
      console.log('after.png saved.');
  } catch (e) {
      console.error('Failed to capture local:', e.message);
  }

  console.log('Capturing before.png from https://www.beemostudio.com...');
  try {
      await page.goto('https://www.beemostudio.com', { waitUntil: 'domcontentloaded', timeout: 10000 });
      await new Promise(resolve => setTimeout(resolve, 3000));
      await page.screenshot({ path: 'before.png', fullPage: true });
      console.log('before.png saved.');
  } catch (e) {
      console.error('Failed to capture beemostudio.com:', e.message);
  }

  await browser.close();
  console.log('Screenshots complete.');
})();
