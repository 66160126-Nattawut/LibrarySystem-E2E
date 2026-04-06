const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');

test.describe('Authentication Security Analysis (BUG 5 - BUG 7)', () => {

  // ทดสอบ BUG 5: SQL Injection
  test('TC-AUTH-06: SQL Injection Attack Test', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    // ลองใช้ Payload มาตรฐานของ SQL Injection
    // ถ้า BUG 5 มีจริง ระบบจะยอมให้เข้าสู่หน้า index.php ทันที
    await loginPage.login("' OR '1'='1", "' OR '1'='1");

    await page.waitForLoadState('networkidle');

    const currentUrl = page.url();
    
    // ถ้า URL เปลี่ยนไปเป็น index.php แสดงว่าช่องโหว่ SQL Injection ทำงาน!
    expect(currentUrl, '[BUG 5 DETECTED] ระบบมีช่องโหว่ SQL Injection! สามารถ Bypass Login ได้ด้วย Payload').not.toContain('index.php');
  });

  // ทดสอบ BUG 6 & 7: Logic Error (ใส่รหัสผิดแต่ดันผ่าน)
  test('TC-AUTH-03: Login with Non-existent User', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();

    // ลองใส่ Username มั่วๆ ที่ไม่มีในระบบ
    // เนื่องจาก BUG 6 (ไม่เช็ก num_rows) และ BUG 7 (ไม่เช็กว่ามี User จริงไหม)
    // ระบบอาจจะพยายามสร้าง Session จากค่าว่างแล้ว Redirect ไปเลย
    await loginPage.login('non_existent_user_999', 'wrong_password');

    await page.waitForLoadState('networkidle');

    const currentUrl = page.url();

    // ตรวจสอบว่าระบบเด้งไปหน้า index หรือไม่
    if (currentUrl.includes('index.php')) {
      // ตรวจสอบต่อว่าชื่อผู้ใช้ที่แสดงเป็นค่าว่างหรือไม่ (เพราะดึงจาก DB ไม่ได้)
      const userDropdown = page.locator('#userDropdown');
      const usernameText = await userDropdown.innerText();
      
      expect(currentUrl, `[BUG 6/7 DETECTED] ระบบยอมให้ User ที่ไม่มีตัวตนเข้าถึงหน้าหลักได้ (Username ที่แสดง: ${usernameText})`).not.toContain('index.php');
    } else {
      // ถ้าไม่เด้งไป index แสดงว่าเคสนี้ผ่าน (แต่ใน PHP คุณเขียนให้มันเด้งแน่ๆ)
      await expect(page.locator('.alert-danger')).toBeVisible();
    }
  });

  // ทดสอบเคสปกติเพื่อให้มั่นใจว่า Admin ยังเข้าได้
  test('TC-AUTH-01: Admin Login (Standard)', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('admin', 'admin123');

    await page.waitForURL('**/index.php');
    await expect(page.locator('#userDropdown')).toContainText(/admin/i);
  });

});