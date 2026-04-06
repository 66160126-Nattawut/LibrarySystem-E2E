# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: borrowing.spec.js >> Borrowing & Return Process (TC021 - TC037, TC042, TC044) >> TC024: Student Max Limit Block
- Location: tests\e2e\borrowing.spec.js:83:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('a, button').filter({ hasText: /New Borrow|Create Borrow|เพิ่มการยืม/i }).first() to be visible

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
            - button "System Administrator" [ref=e21] [cursor=pointer]
  - generic [ref=e22]:
    - heading "Borrow Book" [level=2] [ref=e23]
    - generic [ref=e24]:
      - generic [ref=e26]:
        - heading "Borrow Form" [level=5] [ref=e28]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - generic [ref=e32]: Member Code
            - textbox "Enter member code (e.g., M001)" [ref=e33]
            - text: "Example: M001, M002, M003"
          - generic [ref=e34]:
            - generic [ref=e35]: Select Book
            - combobox [ref=e36]:
              - option "-- Select Book --" [selected]
              - 'option "Harry Potter ฉบับภาษาไทย (Available: 4)"'
              - 'option "Test-Book-1775420497875 (Available: 3)"'
              - 'option "Test-Book-1775420503026 (Available: 3)"'
              - 'option "Test-Book-1775420578849 (Available: 3)"'
              - 'option "Test-Book-1775420684344 (Available: 3)"'
              - 'option "Test-Book-1775420693411 (Available: 3)"'
              - 'option "Test-Book-1775430167252 (Available: 3)"'
              - 'option "Test-Book-1775430171622 (Available: 3)"'
              - 'option "Test-Book-1775430176584 (Available: 3)"'
              - 'option "Test-Book-1775430184043 (Available: 3)"'
              - 'option "Test-Book-1775430193997 (Available: 3)"'
              - 'option "Test-Book-1775430200350 (Available: 3)"'
              - 'option "Test-Book-1775441026068 (Available: 3)"'
              - 'option "Test-Book-1775441030669 (Available: 3)"'
              - 'option "Test-Book-1775441069476 (Available: 3)"'
              - 'option "Test-Book-1775441078351 (Available: 3)"'
              - 'option "Test-Book-1775441120184 (Available: 3)"'
              - 'option "Test-Book-1775441127390 (Available: 3)"'
              - 'option "Test-Book-1775442637535 (Available: 3)"'
              - 'option "Test-Book-1775442643276 (Available: 3)"'
              - 'option "Test-Book-1775442687728 (Available: 3)"'
              - 'option "Test-Book-1775442822540 (Available: 3)"'
              - 'option "Test-Book-1775442833572 (Available: 3)"'
              - 'option "Test-Book-1775443020118 (Available: 3)"'
              - 'option "Test-Book-1775443024845 (Available: 3)"'
              - 'option "Test-Book-1775443062367 (Available: 3)"'
              - 'option "Test-Book-1775443068305 (Available: 3)"'
              - 'option "Test-Book-1775443112088 (Available: 3)"'
              - 'option "Test-Book-1775443121048 (Available: 3)"'
              - 'option "Test-Book-1775444006408 (Available: 3)"'
              - 'option "Test-Book-1775444012504 (Available: 3)"'
              - 'option "Test-Book-1775444058100 (Available: 3)"'
              - 'option "Test-Book-1775444194375 (Available: 3)"'
              - 'option "Test-Book-1775444202931 (Available: 3)"'
              - 'option "การเขียนโปรแกรม Python (Available: 3)"'
              - 'option "ฐานข้อมูล MySQL (Available: 3)"'
              - 'option "ประวัติศาสตร์ไทย (Available: 3)"'
              - 'option "วิศวกรรมซอฟต์แวร์ (Available: 2)"'
              - 'option "เศรษฐศาสตร์พอเพียง (Available: 1)"'
              - 'option "โครงสร้างข้อมูล (Available: 2)"'
          - button "Borrow Book" [ref=e37] [cursor=pointer]
      - generic [ref=e39]:
        - heading "Borrowing Rules" [level=5] [ref=e41]
        - list [ref=e43]:
          - listitem [ref=e44]:
            - strong [ref=e45]: "Students:"
            - text: Maximum 3 books, 14 days
          - listitem [ref=e46]:
            - strong [ref=e47]: "Teachers:"
            - text: Maximum 5 books, 30 days
          - listitem [ref=e48]:
            - strong [ref=e49]: "Public:"
            - text: Maximum 2 books, 7 days
          - listitem [ref=e50]:
            - strong [ref=e51]: "Fine:"
            - text: 5 Baht per day for overdue books
```

# Test source

```ts
  1  | // pages/BorrowingPage.js
  2  | class BorrowingPage {
  3  |   constructor(page) {
  4  |     this.page = page;
  5  | 
  6  |     this.newBorrowBtn  = page.locator('a, button').filter({ hasText: /New Borrow|Create Borrow|เพิ่มการยืม/i });
  7  |     this.borrowingTable= page.locator('table tbody');
  8  | 
  9  |     // Form fields
  10 |     this.memberSelect  = page.locator('select[name*="member"], input[name*="member"], [placeholder*="member" i]');
  11 |     this.bookSelect    = page.locator('select[name*="book"], input[name*="book"], [placeholder*="book" i]');
  12 |     this.borrowDateInput = page.locator('input[name*="borrow"], input[name*="date"], [placeholder*="borrow" i]');
  13 |     this.dueDateInput  = page.locator('input[name*="due"], input[name*="due_date"]');
  14 | 
  15 |     this.submitBtn  = page.locator('button[type="submit"], .btn-primary').filter({ hasText: /Save|Submit|Borrow|ยืม/i });
  16 |     
  17 |     // Return & Fine Modals/Buttons
  18 |     this.returnBtn  = page.locator('button, a').filter({ hasText: /Return|คืน/i });
  19 |     this.lostBtn    = page.locator('button, a').filter({ hasText: /Lost|สูญหาย/i });
  20 |     this.payBtn     = page.locator('button, a').filter({ hasText: /Pay|ชำระค่าปรับ/i });
  21 |     this.fineInput  = page.locator('input[name*="fine_amount"], #fine_amount, input[name*="amount"]');
  22 |     
  23 |     this.detailsBtn = page.locator('button, a').filter({ hasText: /Details|Detail|รายละเอียด/i });
  24 | 
  25 |     this.statusCell    = page.locator('table td').filter({ hasText: /Borrowed|Returned|Overdue|ยืม|คืน|เกินกำหนด/i });
  26 |     this.returnDateCell= page.locator('table td').filter({ hasText: /\d{4}-\d{2}-\d{2}/ });
  27 |   }
  28 | 
  29 |   async goto() {
  30 |     await this.page.goto('http://localhost:8080/borrow.php');
  31 |     await this.page.waitForLoadState('networkidle', { timeout: 15000 });
  32 |     await this.page.waitForTimeout(500);
  33 |   }
  34 | 
  35 |   async clickNewBorrow() {
> 36 |     await this.newBorrowBtn.first().waitFor({ state: 'visible', timeout: 10000 });
     |                                     ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  37 |     await this.newBorrowBtn.first().click();
  38 |     await this.page.waitForTimeout(500);
  39 |   }
  40 | 
  41 |   async submitBorrow() {
  42 |     await this.submitBtn.first().waitFor({ state: 'visible', timeout: 5000 });
  43 |     await this.submitBtn.first().click();
  44 |     await this.page.waitForTimeout(800);
  45 |   }
  46 | 
  47 |   async getRecordCount() {
  48 |     return await this.page.locator('table tbody tr').count();
  49 |   }
  50 | }
  51 | 
  52 | module.exports = { BorrowingPage };
```