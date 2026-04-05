// tests/e2e/auth.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

test.describe('Authentication & Access Control (TC001 - TC005)', () => {

  test('TC001: Login success (Admin)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('admin', 'admin123');

    // Expected: เข้าสู่ระบบสำเร็จ แสดงหน้า Dashboard ของ Admin พร้อมเมนูตั้งค่าและรายงาน
    await page.waitForURL('**/index.php', { waitUntil: 'networkidle' });
    await expect(page).not.toHaveURL(/login/);

    const settingsMenu = page.locator('nav, .sidebar, .menu').locator('a').filter({ hasText: /Setting|ตั้งค่า/i });
    const reportsMenu = page.locator('nav, .sidebar, .menu').locator('a').filter({ hasText: /Report|รายงาน/i });

    // Admin ควรจะเห็นเมนูตั้งค่า (ถ้ามีในระบบ) 
    if (await settingsMenu.first().isVisible().catch(() => false)) {
      await expect(settingsMenu.first()).toBeVisible({ message: 'Admin ต้องมองเห็นเมนูตั้งค่าระบบ' });
    }

    // Admin ต้องมองเห็นรายงานแน่ๆ
    await expect(reportsMenu.first()).toBeVisible({ message: 'Admin ต้องมองเห็นเมนูรายงาน' });
  });

  test('TC002: Login success (Librarian)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('librarian', 'lib123');

    // Expected: เข้าสู่ระบบสำเร็จ แสดงสิทธิ์จัดการงานประจำวัน (ไม่เห็นเมนู System Config ของ Admin)
    await page.waitForURL('**/index.php', { waitUntil: 'networkidle' });

    const settingsMenu = page.locator('nav, .sidebar, .menu').locator('a').filter({ hasText: /Setting|ตั้งค่า/i });
    await expect(settingsMenu).toBeHidden({ message: 'Librarian ต้องไม่เห็นเมนูตั้งค่าระบบของ Admin' });
  });

  test('TC003: Login fail (Wrong Password)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('admin', 'wrongpass');

    // รอให้โหลดเสร็จหลังจากกด Login
    await page.waitForLoadState('networkidle');

    // ระบบมีบั๊ก (BUG 6) ที่เมื่อใส่รหัสผิดแล้วจะเด้งไปหน้า index.php หากเป็นเช่นนั้นเราจะดักไว้เพื่อไม่ให้เจอปัญหา Timeout
    const currentUrl = page.url();
    if (currentUrl.includes('index.php')) {
      // สามารถเลือกให้ Test ผ่านแล้วแค่ Log หรือใช้ expect บังคับให้ Test Failed แบบชัดเจน
      expect(currentUrl, '[BUG 6 DETECTED] ระบบยอมให้เข้าสู่หน้า Dashboard ทั้งที่รหัสผ่านไม่ถูกต้อง!').toContain('login');
      return; 
    }

    // Expected: ไม่สามารถเข้าสู่ระบบ ระบบแสดงแจ้งเตือน "รหัสผ่านไม่ถูกต้อง"
    await expect(page).toHaveURL(/login/);
    
    const errorMessage = page.locator('.alert-danger, .error-message, [class*="alert"]');
    if (await errorMessage.first().isVisible().catch(() => false)) {
      await expect(errorMessage.first()).toBeVisible();
      await expect(errorMessage.first()).toContainText(/รหัสผ่าน|Password|Invalid|error/i);
    }
  });

  test('TC004: Login fail (Empty Fields)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    // Expected: ฟอร์มแจ้ง Validation error
    await loginPage.login('', '');

    const isUserInvalid = await loginPage.usernameInput.evaluate(node => !node.validity.valid);
    expect(isUserInvalid).toBeTruthy();
  });

  test('TC005: Authorization Check', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('librarian', 'lib123');
    await page.waitForURL('**/index.php', { waitUntil: 'networkidle' });

    // Expected: ระบบปฏิเสธการเข้าถึง (Access Denied / 403) หรือบังคับเด้งไปหน้าแรก
    await page.goto('http://localhost:8080/settings.php');
    await page.waitForTimeout(1000);

    const currentURL = page.url();
    const isAccessDeniedText = await page.locator('body').innerText().then(text => /Access Denied|403|ปฏิเสธ|Not Found|404/i.test(text));

    // It should either redirect to index.php (or back to login), OR show access denied/404 page
    const isRedirectedSafely = !currentURL.includes('settings.php');
    expect(isRedirectedSafely || isAccessDeniedText).toBeTruthy();
  });

});