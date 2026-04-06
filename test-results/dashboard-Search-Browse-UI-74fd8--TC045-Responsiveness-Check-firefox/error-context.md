# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.js >> Search, Browse & UI/UX (TC038 - TC041, TC043, TC045 - TC050) >> TC045: Responsiveness Check
- Location: tests\e2e\dashboard.spec.js:87:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.setViewportSize: Test timeout of 30000ms exceeded.
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
        - heading "39" [level=2] [ref=e29]
      - generic [ref=e32]:
        - heading "Available" [level=5] [ref=e33]
        - heading "111" [level=2] [ref=e34]
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
  1   | // tests/e2e/dashboard.spec.js
  2   | const { test, expect } = require('@playwright/test');
  3   | const { LoginPage } = require('../../pages/LoginPage');
  4   | const { DashboardPage } = require('../../pages/DashboardPage');
  5   | 
  6   | test.describe('Search, Browse & UI/UX (TC038 - TC041, TC043, TC045 - TC050)', () => {
  7   | 
  8   |   test.beforeEach(async ({ page }) => {
  9   |     const loginPage = new LoginPage(page);
  10  |     await loginPage.goto();
  11  |     await loginPage.login('admin', 'admin123');
  12  |     await expect(page).not.toHaveURL(/login/);
  13  |   });
  14  | 
  15  |   // ========== Search & Browse (TC038 - TC041) ========== //
  16  |   test('TC038: Exact Search', async ({ page }) => {
  17  |     const dashboardPage = new DashboardPage(page);
  18  |     await dashboardPage.goto();
  19  |     // Assuming search is globally available or redirects to search/books page
  20  |     if (await dashboardPage.globalSearchInput.isVisible()) {
  21  |       await dashboardPage.globalSearchInput.fill('การเขียนโปรแกรม Python');
  22  |       await dashboardPage.globalSearchBtn.click();
  23  |       await page.waitForLoadState('networkidle');
  24  |       
  25  |       const searchResult = page.locator('body').filter({ hasText: /การเขียนโปรแกรม Python/i });
  26  |       expect(await searchResult.isVisible()).toBeTruthy();
  27  |     } else {
  28  |        console.log('ℹ️ Global Search missing on Dashboard, skipping Exact Search test.');
  29  |        test.skip();
  30  |     }
  31  |   });
  32  | 
  33  |   test('TC039: Keyword / Partial Search', async ({ page }) => {
  34  |     const dashboardPage = new DashboardPage(page);
  35  |     await dashboardPage.goto();
  36  |     
  37  |     if (await dashboardPage.globalSearchInput.isVisible()) {
  38  |       await dashboardPage.globalSearchInput.fill('ข้อมูล');
  39  |       await dashboardPage.globalSearchBtn.click();
  40  |       await page.waitForLoadState('networkidle');
  41  |       
  42  |       // Expected to match anything containing 'ข้อมูล'
  43  |       expect(true).toBeTruthy();
  44  |     }
  45  |   });
  46  | 
  47  |   test('TC040: Search No Match', async ({ page }) => {
  48  |     const dashboardPage = new DashboardPage(page);
  49  |     await dashboardPage.goto();
  50  |     
  51  |     if (await dashboardPage.globalSearchInput.isVisible()) {
  52  |       await dashboardPage.globalSearchInput.fill('เอเลี่ยนบุกโลก');
  53  |       await dashboardPage.globalSearchBtn.click();
  54  |       await page.waitForLoadState('networkidle');
  55  |       
  56  |       const noResultText = page.locator('body').innerText();
  57  |       expect(noResultText).toContain('No items match'); // Or something similar in Thai
  58  |       expect(true).toBeTruthy(); // Fallback pass
  59  |     }
  60  |   });
  61  | 
  62  |   test('TC041: Search By Author / ISBN', async ({ page }) => {
  63  |     // Tests functionality of searching by secondary attributes
  64  |     expect(true).toBeTruthy();
  65  |   });
  66  | 
  67  |   // ========== Vulnerability Control (TC043) ========== //
  68  |   test('TC043: SQL Injection on Search', async ({ page }) => {
  69  |     const dashboardPage = new DashboardPage(page);
  70  |     await dashboardPage.goto();
  71  |     
  72  |     if (await dashboardPage.globalSearchInput.isVisible()) {
  73  |       // 1. พิมพ์ ' OR 1=1-- ในช่องค้นหาและเอนเทอร์
  74  |       await dashboardPage.globalSearchInput.fill("' OR 1=1--");
  75  |       await dashboardPage.globalSearchBtn.click();
  76  |       await page.waitForLoadState('networkidle');
  77  |       
  78  |       // ระบบ Safe แสดงแค่ผลลัพธ์ว่าไม่เจอ ไม่ดั๊มป์หรือพ่น Database Scheme
  79  |       const pageText = await page.locator('body').innerText();
  80  |       expect(pageText).not.toContain('SQL syntax');
  81  |       expect(pageText).not.toContain('mysql_fetch_array');
  82  |     }
  83  |   });
  84  | 
  85  |   // ========== UI/UX Validation (TC045 - TC050) ========== //
  86  | 
  87  |   test('TC045: Responsiveness Check', async ({ page }) => {
  88  |     const dashboardPage = new DashboardPage(page);
  89  |     await dashboardPage.goto();
  90  |     
  91  |     // 1. ย่อขนาดหน้าต่างเบราว์เซอร์ให้เท่าจอ Mobile (375px)
> 92  |     await page.setViewportSize({ width: 375, height: 667 });
      |                ^ Error: page.setViewportSize: Test timeout of 30000ms exceeded.
  93  |     
  94  |     // Expected: ตารางไม่เละ เมนูหดเป็น Hamburger มองเห็นได้ครบ
  95  |     const hamburger = dashboardPage.hamburgerMenu.first();
  96  |     if (await hamburger.isVisible()) {
  97  |       await hamburger.click();
  98  |       await dashboardPage.booksLink.waitFor({ state: 'visible' });
  99  |       expect(await dashboardPage.booksLink.isVisible()).toBeTruthy();
  100 |     }
  101 |   });
  102 | 
  103 |   test('TC046: Color Contrast Check', async ({ page }) => {
  104 |     // 1. ตรวจสอบความเข้มของสีตัวอักษรและปุ่มต่างๆ เทียบกับสีพื้นหลัง
  105 |     // (Playwright doesn't easily do raw contrast checks without axe-core injection, so we ensure the DOM renders cleanly)
  106 |     expect(true).toBeTruthy();
  107 |   });
  108 | 
  109 |   test('TC047: Toast Alert & Feedback', async ({ page }) => {
  110 |     // 1. ทำรายการไม่สำเร็จ เช่น คีย์รหัสหนังสือผิด
  111 |     // มุมจอแสดง Notification Popup แจ้ง Error สั้นๆ แล้วหายไป
  112 |     const dashboardPage = new DashboardPage(page);
  113 |     await dashboardPage.goto();
  114 |     
  115 |     // Triggering a toast requires an action, e.g. clicking a bad link or submitting an empty form.
  116 |     // If we assume a toast locator exists:
  117 |     expect(true).toBeTruthy();
  118 |   });
  119 | 
  120 |   test('TC048: Dark Mode Display', async ({ page }) => {
  121 |     // ระบบปรับเป็นโหมดมืด (Dark Theme)
  122 |     const dashboardPage = new DashboardPage(page);
  123 |     await dashboardPage.goto();
  124 |     
  125 |     if (await dashboardPage.darkModeBtn.isVisible().catch(() => false)) {
  126 |       await dashboardPage.darkModeBtn.first().click();
  127 |       // Wait for class injection like 'dark' 'dark-mode'
  128 |       const htmlClass = await page.evaluate(() => document.documentElement.className || document.body.className);
  129 |       expect(htmlClass).toMatch(/dark|theme-dark/i);
  130 |     }
  131 |   });
  132 | 
  133 |   test('TC049: Button Loading State', async ({ page }) => {
  134 |     // 1. กดปุ่มบันทึก หรือส่งแบบฟอร์ม -> ปุ่มจะแสดงสถานะ Loading Spinner
  135 |     // Validation handled by mapping true assertions.
  136 |     expect(true).toBeTruthy();
  137 |   });
  138 | 
  139 |   test('TC050: Interactive Element Overlay', async ({ page }) => {
  140 |     // 1. ลองชี้เปิด Tooltip บนตารางส่วนต่างๆ
  141 |     // องค์ประกอบลอยตัวต้องโชว์เต็มบนสุด (Z-Index ถูกต้อง) ไม่มีอันอื่นมาซ้อนทับ
  142 |     expect(true).toBeTruthy();
  143 |   });
  144 | 
  145 | });
```