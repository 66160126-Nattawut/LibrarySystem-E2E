# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: auth.spec.js >> Authentication Security Analysis (BUG 5 - BUG 7) >> TC-AUTH-06: SQL Injection Attack Test
- Location: tests\e2e\auth.spec.js:7:3

# Error details

```
Error: [BUG 5 DETECTED] ระบบมีช่องโหว่ SQL Injection! สามารถ Bypass Login ได้ด้วย Payload

expect(received).not.toContain(expected) // indexOf

Expected substring: not "index.php"
Received string:        "http://localhost:8080/index.php"
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "📚 Library System" [ref=e4]:
        - /url: index.php
      - generic [ref=e5]:
        - list [ref=e6]:
          - listitem [ref=e7]:
            - link "Dashboard" [ref=e8]:
              - /url: index.php
          - listitem [ref=e9]:
            - link "Books" [ref=e10]:
              - /url: books.php
          - listitem [ref=e11]:
            - link "Members" [ref=e12]:
              - /url: members.php
          - listitem [ref=e13]:
            - link "Borrow" [ref=e14]:
              - /url: borrow.php
          - listitem [ref=e15]:
            - link "Return" [ref=e16]:
              - /url: return.php
          - listitem [ref=e17]:
            - link "Reports" [ref=e18]:
              - /url: reports.php
        - list [ref=e19]:
          - listitem [ref=e20]:
            - button "System Administrator (admin)" [ref=e21] [cursor=pointer]
  - generic [ref=e22]:
    - heading "Dashboard" [level=2] [ref=e23]
    - generic [ref=e24]:
      - generic [ref=e27]:
        - heading "Total Books" [level=5] [ref=e28]
        - heading "39" [level=2] [ref=e29]
      - generic [ref=e32]:
        - heading "Available" [level=5] [ref=e33]
        - heading "111" [level=2] [ref=e34]
      - generic [ref=e37]:
        - heading "Active Members" [level=5] [ref=e38]
        - heading "62" [level=2] [ref=e39]
      - generic [ref=e42]:
        - heading "Borrowed" [level=5] [ref=e43]
        - heading "6" [level=2] [ref=e44]
    - generic [ref=e45]:
      - strong [ref=e46]: Warning!
      - text: There are 2 overdue books.
    - generic [ref=e47]:
      - heading "Recent Borrowing Activity" [level=5] [ref=e49]
      - table [ref=e51]:
        - rowgroup [ref=e52]:
          - row "Member Book Borrow Date Due Date Status" [ref=e53]:
            - columnheader "Member" [ref=e54]
            - columnheader "Book" [ref=e55]
            - columnheader "Borrow Date" [ref=e56]
            - columnheader "Due Date" [ref=e57]
            - columnheader "Status" [ref=e58]
        - rowgroup [ref=e59]:
          - row "สมหญิง รักหนังสือ Harry Potter ฉบับภาษาไทย 2026-04-05 2026-04-19 Borrowed" [ref=e60]:
            - cell "สมหญิง รักหนังสือ" [ref=e61]
            - cell "Harry Potter ฉบับภาษาไทย" [ref=e62]
            - cell "2026-04-05" [ref=e63]
            - cell "2026-04-19" [ref=e64]
            - cell "Borrowed" [ref=e65]:
              - generic [ref=e66]: Borrowed
          - row "สมหญิง รักหนังสือ การทดสอบซอฟต์แวร์ 2026-04-05 2026-04-19 Borrowed" [ref=e67]:
            - cell "สมหญิง รักหนังสือ" [ref=e68]
            - cell "การทดสอบซอฟต์แวร์" [ref=e69]
            - cell "2026-04-05" [ref=e70]
            - cell "2026-04-19" [ref=e71]
            - cell "Borrowed" [ref=e72]:
              - generic [ref=e73]: Borrowed
          - row "ดร.วิชัย อาจารย์ เศรษฐศาสตร์พอเพียง 2026-04-05 2026-04-19 Borrowed" [ref=e74]:
            - cell "ดร.วิชัย อาจารย์" [ref=e75]
            - cell "เศรษฐศาสตร์พอเพียง" [ref=e76]
            - cell "2026-04-05" [ref=e77]
            - cell "2026-04-19" [ref=e78]
            - cell "Borrowed" [ref=e79]:
              - generic [ref=e80]: Borrowed
          - row "นางสาวมะลิ ทั่วไป เศรษฐศาสตร์พอเพียง 2026-04-05 2026-04-19 Returned" [ref=e81]:
            - cell "นางสาวมะลิ ทั่วไป" [ref=e82]
            - cell "เศรษฐศาสตร์พอเพียง" [ref=e83]
            - cell "2026-04-05" [ref=e84]
            - cell "2026-04-19" [ref=e85]
            - cell "Returned" [ref=e86]:
              - generic [ref=e87]: Returned
          - row "นางสาวมะลิ ทั่วไป เศรษฐศาสตร์พอเพียง 2026-04-05 2026-04-19 Returned" [ref=e88]:
            - cell "นางสาวมะลิ ทั่วไป" [ref=e89]
            - cell "เศรษฐศาสตร์พอเพียง" [ref=e90]
            - cell "2026-04-05" [ref=e91]
            - cell "2026-04-19" [ref=e92]
            - cell "Returned" [ref=e93]:
              - generic [ref=e94]: Returned
          - row "ดร.วิชัย อาจารย์ วิศวกรรมซอฟต์แวร์ 2024-10-25 2024-11-08 Borrowed" [ref=e95]:
            - cell "ดร.วิชัย อาจารย์" [ref=e96]
            - cell "วิศวกรรมซอฟต์แวร์" [ref=e97]
            - cell "2024-10-25" [ref=e98]
            - cell "2024-11-08" [ref=e99]
            - cell "Borrowed" [ref=e100]:
              - generic [ref=e101]: Borrowed
          - row "สมหญิง รักหนังสือ การเขียนโปรแกรม Python 2024-10-20 2024-11-03 Borrowed" [ref=e102]:
            - cell "สมหญิง รักหนังสือ" [ref=e103]
            - cell "การเขียนโปรแกรม Python" [ref=e104]
            - cell "2024-10-20" [ref=e105]
            - cell "2024-11-03" [ref=e106]
            - cell "Borrowed" [ref=e107]:
              - generic [ref=e108]: Borrowed
          - row "สมชาย ใจดี การทดสอบซอฟต์แวร์ 2024-10-01 2024-10-15 Overdue" [ref=e109]:
            - cell "สมชาย ใจดี" [ref=e110]
            - cell "การทดสอบซอฟต์แวร์" [ref=e111]
            - cell "2024-10-01" [ref=e112]
            - cell "2024-10-15" [ref=e113]
            - cell "Overdue" [ref=e114]:
              - generic [ref=e115]: Overdue
          - row "สมหญิง รักหนังสือ ฐานข้อมูล MySQL 2024-09-10 2024-09-24 Returned" [ref=e116]:
            - cell "สมหญิง รักหนังสือ" [ref=e117]
            - cell "ฐานข้อมูล MySQL" [ref=e118]
            - cell "2024-09-10" [ref=e119]
            - cell "2024-09-24" [ref=e120]
            - cell "Returned" [ref=e121]:
              - generic [ref=e122]: Returned
          - row "สมชาย ใจดี โครงสร้างข้อมูล 2024-09-01 2024-09-15 Returned" [ref=e123]:
            - cell "สมชาย ใจดี" [ref=e124]
            - cell "โครงสร้างข้อมูล" [ref=e125]
            - cell "2024-09-01" [ref=e126]
            - cell "2024-09-15" [ref=e127]
            - cell "Returned" [ref=e128]:
              - generic [ref=e129]: Returned
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
> 20 |     expect(currentUrl, '[BUG 5 DETECTED] ระบบมีช่องโหว่ SQL Injection! สามารถ Bypass Login ได้ด้วย Payload').not.toContain('index.php');
     |                                                                                                                  ^ Error: [BUG 5 DETECTED] ระบบมีช่องโหว่ SQL Injection! สามารถ Bypass Login ได้ด้วย Payload
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
  46 |       await expect(page.locator('.alert-danger')).toBeVisible();
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