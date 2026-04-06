# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: visual-comparison.spec.js >> Visual Regression - All System Pages (Full Check)
- Location: tests\e2e\visual-comparison.spec.js:3:1

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  705 pixels (ratio 0.01 of all image pixels) are different.

  Snapshot: 02-dashboard.png

Call log:
  - Expect "toHaveScreenshot(02-dashboard.png)" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 705 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 705 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "📚 Library System" [ref=e4] [cursor=pointer]:
        - /url: index.php
      - generic [ref=e5]:
        - list [ref=e6]:
          - listitem [ref=e7]:
            - link "Dashboard" [ref=e8] [cursor=pointer]:
              - /url: index.php
          - listitem [ref=e9]:
            - link "Books" [ref=e10] [cursor=pointer]:
              - /url: books.php
          - listitem [ref=e11]:
            - link "Members" [ref=e12] [cursor=pointer]:
              - /url: members.php
          - listitem [ref=e13]:
            - link "Borrow" [ref=e14] [cursor=pointer]:
              - /url: borrow.php
          - listitem [ref=e15]:
            - link "Return" [ref=e16] [cursor=pointer]:
              - /url: return.php
          - listitem [ref=e17]:
            - link "Reports" [ref=e18] [cursor=pointer]:
              - /url: reports.php
        - list [ref=e19]:
          - listitem [ref=e20]:
            - button "System Administrator (admin)" [ref=e21] [cursor=pointer]
  - generic [ref=e22]:
    - heading "Dashboard" [level=2] [ref=e23]
    - generic [ref=e24]:
      - generic [ref=e27]:
        - heading "Total Books" [level=5] [ref=e28]
        - heading "38" [level=2] [ref=e29]
      - generic [ref=e32]:
        - heading "Available" [level=5] [ref=e33]
        - heading "108" [level=2] [ref=e34]
      - generic [ref=e37]:
        - heading "Active Members" [level=5] [ref=e38]
        - heading "61" [level=2] [ref=e39]
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
  2  | 
  3  | test('Visual Regression - All System Pages (Full Check)', async ({ page }) => {
  4  |   // 1. ตั้งค่า Timeout และการเตรียมตัว
  5  |   test.setTimeout(120000);
  6  | 
  7  |   // --- ขั้นตอนที่ 1: Login ---
  8  |   console.log('🔐 Logging in...');
  9  |   await page.goto('http://localhost:8080/login.php');
  10 |   await page.waitForLoadState('networkidle');
  11 |   await expect(page).toHaveScreenshot('01-login.png');
  12 | 
  13 |   await page.fill('input[name="username"]', 'admin');
  14 |   await page.fill('input[name="password"]', 'admin123');
  15 |   
  16 |   await Promise.all([
  17 |     page.waitForURL('**/index.php'),
  18 |     page.click('button[type="submit"]'),
  19 |   ]);
  20 | 
  21 |   // --- ขั้นตอนที่ 2: แคปหน้าจอหลัก (Main Pages) ---
  22 |   const mainPages = [
  23 |     { name: '02-dashboard', url: 'index.php' },
  24 |     { name: '03-books-list', url: 'books.php' },
  25 |     { name: '05-members-list', url: 'members.php' },
  26 |     { name: '07-borrow-books', url: 'borrow.php' },
  27 |     { name: '08-return-books', url: 'return.php' },
  28 |     { name: '09-reports', url: 'reports.php' },
  29 |   ];
  30 | 
  31 |   for (const pageInfo of mainPages) {
  32 |     console.log(`📸 Capturing Page: ${pageInfo.url}`);
  33 |     await page.goto(`http://localhost:8080/${pageInfo.url}`);
  34 |     await page.waitForLoadState('networkidle');
  35 |     await page.waitForTimeout(1000); 
> 36 |     await expect(page).toHaveScreenshot(`${pageInfo.name}.png`);
     |                        ^ Error: expect(page).toHaveScreenshot(expected) failed
  37 |   }
  38 | 
  39 |   // --- ขั้นตอนที่ 3: ทดสอบ Visual บน Modal ---
  40 | 
  41 |   // 📕 ทดสอบ Add Book Modal
  42 |   console.log('📸 Capturing Modal: Add Book');
  43 |   await page.goto('http://localhost:8080/books.php');
  44 |   await page.waitForLoadState('networkidle');
  45 |   
  46 |   // ใช้ Attribute เจาะจงสำหรับปุ่มเปิด Modal ของหนังสือ
  47 |   const addBookBtn = page.locator('button[data-bs-target*="Book"], button[data-bs-target*="book"]').filter({ visible: true }).first();
  48 |   await addBookBtn.click();
  49 |   
  50 |   await page.waitForSelector('.modal.show', { state: 'visible', timeout: 10000 });
  51 |   await page.waitForTimeout(1000); 
  52 |   await expect(page).toHaveScreenshot('04-add-book-modal.png');
  53 |   await page.keyboard.press('Escape'); 
  54 |   await page.waitForTimeout(500);
  55 | 
  56 |   // 👥 ทดสอบ Add Member Modal (อ้างอิงตาม HTML members.php ของคุณ)
  57 |   console.log('📸 Capturing Modal: Add Member');
  58 |   await page.goto('http://localhost:8080/members.php');
  59 |   await page.waitForLoadState('networkidle');
  60 |   
  61 |   // จากโค้ดคุณ: <button class="btn btn-primary" data-bs-target="#addMemberModal">
  62 |   // เราจะเลือกปุ่มที่มี data-bs-target โดยตรง เพราะมัน "ไม่ซ้ำ" กับปุ่ม Submit ใน Modal
  63 |   const addMemberBtn = page.locator('button[data-bs-target="#addMemberModal"]');
  64 |   
  65 |   await expect(addMemberBtn).toBeVisible();
  66 |   await addMemberBtn.click();
  67 |   
  68 |   // รอจน ID ของ Modal ปรากฏและมี Class .show (Bootstrap Animation)
  69 |   await page.waitForSelector('#addMemberModal.show', { state: 'visible', timeout: 10000 });
  70 |   await page.waitForTimeout(1000);
  71 |   await expect(page).toHaveScreenshot('06-add-member-modal.png');
  72 | 
  73 |   console.log('✅ Visual Regression Test Completed!');
  74 | });
```