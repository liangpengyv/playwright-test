// @ts-check
const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  // Go to https://unirpa.com/
  await page.goto('https://unirpa.com/');

  // Click text=登录
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://personalcenter.unirpa.com/account/login?ReturnUrl=https%3A%2F%2Fpersonalcenter.unirpa.com%2Fapi%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dmasterwebsiteclient%26redirect_uri%3Dhttps%253A%252F%252Fwww.unirpa.com%252Fsign-in-callback%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520IdentityServerApi%26state%3D07f88746626d4919bb171f8d011f2a6e%26code_challenge%3DX8v-GxVioXb-AfqNDmDO2Zg5gIPK3PTtD2avv8BLJkg%26code_challenge_method%3DS256%26response_mode%3Dquery' }*/),
    page.locator('text=登录').click()
  ]);

  // Click [placeholder="手机号\/邮箱"]
  await page.locator('[placeholder="手机号\\/邮箱"]').click();

  // Fill [placeholder="手机号\/邮箱"]
  await page.locator('[placeholder="手机号\\/邮箱"]').fill('13300000000');

  // Press Tab
  await page.locator('[placeholder="手机号\\/邮箱"]').press('Tab');

  // Fill [placeholder="密码"]
  await page.locator('[placeholder="密码"]').fill('xxxxxxxx');

  // Click button:has-text("登 录")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://www.unirpa.com/' }*/),
    page.locator('button:has-text("登 录")').click()
  ]);

  // 加一行暂停
  await page.pause()

});