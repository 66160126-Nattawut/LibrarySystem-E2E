# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: members.spec.js >> Member Management (TC006 - TC012) >> TC007: Add Member Fail (Duplicate Code)
- Location: tests\e2e\members.spec.js:32:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.alert-danger, .error-message, [class*="alert"], .text-danger, .invalid-feedback').first()
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('.alert-danger, .error-message, [class*="alert"], .text-danger, .invalid-feedback').first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]: "Fatal error: Uncaught mysqli_sql_exception: Duplicate entry 'M001' for key 'members.member_code' in /var/www/html/member_add.php:31 Stack trace: #0 /var/www/html/member_add.php(31): mysqli_query(Object(mysqli), 'INSERT INTO mem...') #1 {main} thrown in /var/www/html/member_add.php on line 31"
```

# Test source

```ts
  1   | // tests/e2e/members.spec.js
  2   | const { test, expect } = require('@playwright/test');
  3   | const { LoginPage } = require('../../pages/LoginPage');
  4   | const { MembersPage } = require('../../pages/MembersPage');
  5   | 
  6   | function uniqueCode() {
  7   |   return 'M' + Date.now().toString().slice(-6);
  8   | }
  9   | 
  10  | test.describe('Member Management (TC006 - TC012)', () => {
  11  | 
  12  |   test.beforeEach(async ({ page }) => {
  13  |     const loginPage = new LoginPage(page);
  14  |     await loginPage.goto();
  15  |     // Precondition: Login by Librarian/Admin
  16  |     await loginPage.login('admin', 'admin123');
  17  |     await expect(page).not.toHaveURL(/login/);
  18  |   });
  19  | 
  20  |   test('TC006: Add Member (Student)', async ({ page }) => {
  21  |     const membersPage = new MembersPage(page);
  22  |     await membersPage.goto();
  23  | 
  24  |     const code = uniqueCode();
  25  |     const name = 'Student-Member-' + Date.now();
  26  |     await membersPage.fillMemberInfo(code, name, 'student@mail.com', '0812345678', 'student');
  27  | 
  28  |     // Expected: บันทึกสำเร็จ สมาชิกใหม่พร้อมใช้งาน
  29  |     await expect(membersPage.rowWith(name)).toBeVisible({ timeout: 10000 });
  30  |   });
  31  | 
  32  |   test('TC007: Add Member Fail (Duplicate Code)', async ({ page }) => {
  33  |     const membersPage = new MembersPage(page);
  34  |     await membersPage.goto();
  35  | 
  36  |     await page.waitForSelector('table tbody tr', { timeout: 10000 });
  37  |     const existingCode = (await page.locator('table tbody tr td').first().innerText()).trim();
  38  | 
  39  |     await membersPage.fillMemberInfo(existingCode, 'Duplicate-User', 'dup@mail.com', '000000000');
  40  | 
  41  |     // Expected: ระบบแสดง Error "รหัสสมาชิกนี้มีในระบบแล้ว" บันทึกไม่สำเร็จ
  42  |     const errorMsg = page.locator('.alert-danger, .error-message, [class*="alert"], .text-danger, .invalid-feedback');
> 43  |     await expect(errorMsg.first()).toBeVisible({ timeout: 5000 });
      |                                    ^ Error: expect(locator).toBeVisible() failed
  44  |   });
  45  | 
  46  |   test('TC008: Add Member Fail (Missing Req)', async ({ page }) => {
  47  |     const membersPage = new MembersPage(page);
  48  |     await membersPage.goto();
  49  |     
  50  |     // กรอกรหัส แต่ไม่ได้กรอก "ชื่อ-สกุล"
  51  |     await membersPage.openAddForm();
  52  |     await membersPage.codeInput.fill(uniqueCode());
  53  |     await membersPage.nameInput.fill('');
  54  |     await membersPage.submitBtn.first().click();
  55  | 
  56  |     // Expected: ระบบแสดง Error ป้องกันไม่ให้ลงข้อมูลในฐานข้อมูล (HTML5 Validation หรือ Server-side)
  57  |     const isNameInvalid = await membersPage.nameInput.evaluate(node => !node.validity.valid);
  58  |     const isErrorVisible = await page.locator('.alert-danger, .error-message, [class*="alert"], .text-danger, .invalid-feedback').first().isVisible();
  59  |     expect(isNameInvalid || isErrorVisible).toBeTruthy();
  60  |   });
  61  | 
  62  |   test('TC009: Edit Member Detail', async ({ page }) => {
  63  |     const membersPage = new MembersPage(page);
  64  |     await membersPage.goto();
  65  | 
  66  |     await page.waitForSelector('table tbody tr', { timeout: 10000 });
  67  |     const firstRow = page.locator('table tbody tr').first();
  68  |     const editBtn = firstRow.locator('a, button').filter({ hasText: /Edit|แก้ไข/i });
  69  |     await editBtn.first().click();
  70  | 
  71  |     await membersPage.nameInput.waitFor({ state: 'visible', timeout: 10000 });
  72  |     const newName = 'Updated-Mem-' + Date.now();
  73  |     await membersPage.nameInput.fill(newName);
  74  |     
  75  |     // Submit (Update/Save)
  76  |     const updateBtn = page.locator('button[type="submit"], input[type="submit"]').filter({ hasText: /Update|Save|บันทึก/i });
  77  |     await updateBtn.first().click();
  78  |     await page.waitForLoadState('networkidle', { timeout: 15000 });
  79  | 
  80  |     // Expected: ข้อมูลถูกอัปเดต
  81  |     await expect(membersPage.rowWith(newName)).toBeVisible({ timeout: 10000 });
  82  |   });
  83  | 
  84  |   test('TC010: Delete Member (Safe)', async ({ page }) => {
  85  |     const membersPage = new MembersPage(page);
  86  |     await membersPage.goto();
  87  | 
  88  |     const code = uniqueCode();
  89  |     const name = 'Delete-Safe-' + Date.now();
  90  |     await membersPage.fillMemberInfo(code, name, 'del@mail.com', '0800000000');
  91  |     await expect(membersPage.rowWith(name)).toBeVisible({ timeout: 10000 });
  92  | 
  93  |     const row = membersPage.rowWith(name);
  94  |     const deleteBtn = row.locator('a, button').filter({ hasText: /Delete|ลบ/i });
  95  | 
  96  |     page.on('dialog', d => d.accept());
  97  |     await deleteBtn.first().click();
  98  |     await page.waitForLoadState('networkidle', { timeout: 15000 });
  99  | 
  100 |     // Expected: สมาชิกถูกลบออกจากระบบ
  101 |     await expect(membersPage.rowWith(name)).not.toBeVisible({ timeout: 8000 });
  102 |   });
  103 | 
  104 |   test('TC011: Delete Member (Has Active Borrow)', async ({ page }) => {
  105 |     // สมมติว่าในระบบมีสมาชิกที่มียืมอยู่แล้ว หรือเราจำลองพฤติกรรม
  106 |     // วิธีทดสอบ: ไปที่หน้า Member หาคนที่ยังไม่ได้คืน แล้วลบ จะต้องเจอ Error
  107 |     // เนื่องจาก Environment เราไม่สามารถ guarantee ได้ร้อยเปอร์เซ็นต์ว่ามี 
  108 |     // เราจะเขียน test ให้รองรับการหาคนมียืมก่อน (ถ้าหาได้ค่อยเทส ถ้าหาไม่ได้ให้ข้ามเพื่อไม่ให้ fail)
  109 |     
  110 |     await page.goto('http://localhost:8080/borrow.php');
  111 |     await page.waitForLoadState('networkidle');
  112 |     const borrowedRow = page.locator('table tbody tr').filter({ hasText: /Borrowed|ยืมอยู่/i }).first();
  113 |     let memberCodeWithBorrow = null;
  114 |     
  115 |     if (await borrowedRow.isVisible()) {
  116 |       memberCodeWithBorrow = await borrowedRow.locator('td').first().innerText(); // สมมติว่า Column แรก หรือสอง เป็น Code
  117 |     }
  118 | 
  119 |     if (memberCodeWithBorrow) {
  120 |       const membersPage = new MembersPage(page);
  121 |       await membersPage.goto();
  122 |       await membersPage.searchInput.fill(memberCodeWithBorrow);
  123 |       await membersPage.searchBtn.click();
  124 |       
  125 |       const row = membersPage.rowWith(memberCodeWithBorrow.trim());
  126 |       if (await row.isVisible()) {
  127 |         const deleteBtn = row.locator('a, button').filter({ hasText: /Delete|ลบ/i });
  128 |         page.on('dialog', d => d.accept());
  129 |         await deleteBtn.first().click();
  130 |         
  131 |         // Expected: ไม่อนุญาตให้ลบ แสดงแจ้งเตือน
  132 |         const errorMsg = page.locator('.alert-danger, .error-message, [class*="alert"]');
  133 |         await expect(errorMsg.first()).toBeVisible({ timeout: 5000 });
  134 |       }
  135 |     } else {
  136 |       console.log('ℹ️ ไม่มีสมาชิกใดมียืมหนังสืออยู่ ขออนุญาต Skip');
  137 |       test.skip();
  138 |     }
  139 |   });
  140 | 
  141 |   test('TC012: View Member Dashboard', async ({ page }) => {
  142 |     const membersPage = new MembersPage(page);
  143 |     await membersPage.goto();
```