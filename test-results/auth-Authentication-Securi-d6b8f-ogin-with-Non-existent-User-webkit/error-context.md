# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.js >> Authentication Security Analysis (BUG 5 - BUG 7) >> TC-AUTH-03: Login with Non-existent User
- Location: tests\e2e\auth.spec.js:24:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.alert-danger')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.alert-danger')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - text: "Warning: Trying to access array offset on value of type null in /var/www/html/login.php on line 22"
  - text: "Warning: Trying to access array offset on value of type null in /var/www/html/login.php on line 23"
  - text: "Warning: Trying to access array offset on value of type null in /var/www/html/login.php on line 24"
  - text: "Warning: Trying to access array offset on value of type null in /var/www/html/login.php on line 25"
  - text: "Warning: Cannot modify header information - headers already sent by (output started at /var/www/html/login.php:22) in /var/www/html/login.php on line 27"
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { LoginPage } = require('../../pages/LoginPage');
  3  | 
  4  | test.describe('Authentication Security Analysis (BUG 5 - BUG 7)', () => {
  5  | 
  6  |   // ทดสอบ BUG 5: SQL Injection
  7  |   test('TC-AUTH-06: SQL Injection Attack Test', async ({ page }) => {
  8  |     const loginPage = new LoginPage(page);
  9  |     await loginPage.goto();
  10 | 
  11 |     // ลองใช้ Payload มาตรฐานของ SQL Injection
  12 |     // ถ้า BUG 5 มีจริง ระบบจะยอมให้เข้าสู่หน้า index.php ทันที
  13 |     await loginPage.login("' OR '1'='1", "' OR '1'='1");
  14 | 
  15 |     await page.waitForLoadState('networkidle');
  16 | 
  17 |     const currentUrl = page.url();
  18 |     
  19 |     // ถ้า URL เปลี่ยนไปเป็น index.php แสดงว่าช่องโหว่ SQL Injection ทำงาน!
  20 |     expect(currentUrl, '[BUG 5 DETECTED] ระบบมีช่องโหว่ SQL Injection! สามารถ Bypass Login ได้ด้วย Payload').not.toContain('index.php');
  21 |   });
  22 | 
  23 |   // ทดสอบ BUG 6 & 7: Logic Error (ใส่รหัสผิดแต่ดันผ่าน)
  24 |   test('TC-AUTH-03: Login with Non-existent User', async ({ page }) => {
  25 |     const loginPage = new LoginPage(page);
  26 |     await loginPage.goto();
  27 | 
  28 |     // ลองใส่ Username มั่วๆ ที่ไม่มีในระบบ
  29 |     // เนื่องจาก BUG 6 (ไม่เช็ก num_rows) และ BUG 7 (ไม่เช็กว่ามี User จริงไหม)
  30 |     // ระบบอาจจะพยายามสร้าง Session จากค่าว่างแล้ว Redirect ไปเลย
  31 |     await loginPage.login('non_existent_user_999', 'wrong_password');
  32 | 
  33 |     await page.waitForLoadState('networkidle');
  34 | 
  35 |     const currentUrl = page.url();
  36 | 
  37 |     // ตรวจสอบว่าระบบเด้งไปหน้า index หรือไม่
  38 |     if (currentUrl.includes('index.php')) {
  39 |       // ตรวจสอบต่อว่าชื่อผู้ใช้ที่แสดงเป็นค่าว่างหรือไม่ (เพราะดึงจาก DB ไม่ได้)
  40 |       const userDropdown = page.locator('#userDropdown');
  41 |       const usernameText = await userDropdown.innerText();
  42 |       
  43 |       expect(currentUrl, `[BUG 6/7 DETECTED] ระบบยอมให้ User ที่ไม่มีตัวตนเข้าถึงหน้าหลักได้ (Username ที่แสดง: ${usernameText})`).not.toContain('index.php');
  44 |     } else {
  45 |       // ถ้าไม่เด้งไป index แสดงว่าเคสนี้ผ่าน (แต่ใน PHP คุณเขียนให้มันเด้งแน่ๆ)
> 46 |       await expect(page.locator('.alert-danger')).toBeVisible();
     |                                                   ^ Error: expect(locator).toBeVisible() failed
  47 |     }
  48 |   });
  49 | 
  50 |   // ทดสอบเคสปกติเพื่อให้มั่นใจว่า Admin ยังเข้าได้
  51 |   test('TC-AUTH-01: Admin Login (Standard)', async ({ page }) => {
  52 |     const loginPage = new LoginPage(page);
  53 |     await loginPage.goto();
  54 |     await loginPage.login('admin', 'admin123');
  55 | 
  56 |     await page.waitForURL('**/index.php');
  57 |     await expect(page.locator('#userDropdown')).toContainText(/admin/i);
  58 |   });
  59 | 
  60 | });
```