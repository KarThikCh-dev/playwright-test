import { test, expect } from '@playwright/test';
import { chromium } from '@playwright/test';

test('LOE TEST', async ({ }) => {
  // open browser
  test.setTimeout(6000000000);


  const browser = await chromium.launch({
    headless: true
  });
  const context = await browser.newContext();
  // Open new page
  const page = await context.newPage();

  await page.goto('https://hurrey.teamnest.com/login/');

  // Click [placeholder="Your Email\/Mobile Number"]
  await page.locator('[placeholder="Your Email\\/Mobile Number"]').click();
  // Press CapsLock
  await page.locator('[placeholder="Your Email\\/Mobile Number"]').press('CapsLock');
  // Fill [placeholder="Your Email\/Mobile Number"]
  await page.locator('[placeholder="Your Email\\/Mobile Number"]').fill('CHILAKURI@');
  // Press CapsLock
  await page.locator('[placeholder="Your Email\\/Mobile Number"]').press('CapsLock');
  // Fill [placeholder="Your Email\/Mobile Number"]
  await page.locator('[placeholder="Your Email\\/Mobile Number"]').fill('CHILAKURI@hurreytech.com');
  // Click [placeholder="Enter Password"]
  await page.locator('[placeholder="Enter Password"]').click();
  // Fill [placeholder="Enter Password"]
  await page.locator('[placeholder="Enter Password"]').fill('Teamnest@123');
  // Click button:has-text("Login")
  await page.locator('button:has-text("Login")').click();
  await expect(page).toHaveURL('https://hurrey.teamnest.com/core/employee/');

  await context.grantPermissions(['geolocation']);

  await context.setGeolocation({ latitude: 59.95, longitude: 30.31667 });

  // Click button[name="punch_in"]
  // await page.locator('button[name="punch_in"]').click();
  let selector = 'button[name="punch_in"]';

  // does not work
  await page.click(selector); 

  // does work
  await page.evaluate((selector) => document.querySelector(selector).click(), selector); 
  // await page.locator('button:has-text("punch_in")').click();


  await expect(page).toHaveURL('https://hurrey.teamnest.com/core/employee/25');



  // 15 23 * * *   cd Desktop/karthik/research/playwriter &&  npx playwright test

});
