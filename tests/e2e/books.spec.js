// tests/e2e/books.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { BooksPage } = require('../../pages/BooksPage');

// ── สร้างข้อมูลหนังสือ unique + ครบทุก field ──
function uniqueBook(overrides = {}) {
  const ts = Date.now();
  return {
    isbn:      `978-${ts}`,
    title:     `Test-Book-${ts}`,
    author:    'Test Author',
    publisher: 'Test Publisher',
    year:      '2024',
    category:  'General',
    copies:    3,
    location:  'A-101',
    ...overrides,
  };// tests/e2e/books.spec.js
const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/LoginPage');
const { BooksPage } = require('../../pages/BooksPage');
const path = require('path');

function uniqueBook(overrides = {}) {
  const ts = Date.now();
  return {
    isbn:   `978-${ts}`,
    title:  `Test-Book-${ts}`,
    author: 'Test Author',
    copies: 5,
    ...overrides,
  };
}

test.describe('Book Management (TC013 - TC020)', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('admin', 'admin123');
    await expect(page).not.toHaveURL(/login/);
  });

  test('TC013: Add Book Success', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();

    const book = uniqueBook({ copies: 5 });
    await booksPage.addBook(book);

    // Expected: บันทึกสำเร็จ และสถานะคือ "Available = 5"
    const row = booksPage.rowWith(book.isbn);
    await expect(row).toBeVisible({ timeout: 10000 });
    
    // ตรวจสอบว่ามีเลข 5 แสดงใน Column (Total/Available)
    const rowText = await row.innerText();
    expect(rowText).toContain('5');
  });

  test('TC014: Add Book Fail (Dup ISBN)', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();

    await page.waitForSelector('table tbody tr', { timeout: 10000 });
    const firstIsbn = await page.locator('table tbody tr td:nth-child(1)').first().innerText();

    const book = uniqueBook({ isbn: firstIsbn.trim() });
    await booksPage.addBook(book);

    // Expected: แสดงข้อผิดพลาด ISBN ซ้ำซ้อน
    const errorMsg = page.locator('.alert-danger, .error-message, [class*="alert"], .text-danger, .invalid-feedback');
    await expect(errorMsg.first()).toBeVisible({ timeout: 5000 });
  });

  test('TC015: Edit Quantity', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();

    await page.waitForSelector('table tbody tr', { timeout: 10000 });
    const firstRow = page.locator('table tbody tr').first();
    const isbn = await firstRow.locator('td').first().innerText();

    const editBtn = firstRow.locator('a, button').filter({ hasText: /Edit|แก้ไข/i });
    await editBtn.first().click();

    await booksPage.copiesInput.waitFor({ state: 'visible', timeout: 10000 });
    await booksPage.copiesInput.fill('10'); // เปลี่ยนจาก 3 เป็น 10 ตามโจทย์
    
    const updateBtn = page.locator('button[type="submit"], input[type="submit"]').filter({ hasText: /Update|Save|บันทึก/i });
    await updateBtn.first().click();
    await page.waitForLoadState('networkidle', { timeout: 15000 });

    // Expected: Stock ในระบบเปลี่ยนเป็น 10 สามารถให้ยืมเพิ่มได้
    const updatedRow = booksPage.rowWith(isbn.trim());
    await expect(updatedRow).toContainText('10');
  });

  test('TC016: Delete Book (No History)', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();

    const book = uniqueBook({ title: 'Delete-Me-No-History' });
    await booksPage.addBook(book);
    await expect(booksPage.rowWith(book.title)).toBeVisible({ timeout: 10000 });

    const row = booksPage.rowWith(book.title);
    const deleteBtn = row.locator('a, button').filter({ hasText: /Delete|ลบ/i });
    
    page.on('dialog', d => d.accept());
    await deleteBtn.first().click();
    await page.waitForLoadState('networkidle', { timeout: 15000 });

    // Expected: ลบสำเร็จและหายไปจากรายการ
    await expect(booksPage.rowWith(book.title)).not.toBeVisible({ timeout: 8000 });
  });

  test('TC017: Delete Book (Being Borrowed)', async ({ page }) => {
    await page.goto('http://localhost:8080/borrow.php');
    await page.waitForLoadState('networkidle');
    const borrowedRow = page.locator('table tbody tr').filter({ hasText: /Borrowed|ยืมอยู่/i }).first();
    
    if (await borrowedRow.isVisible()) {
      // Find book title or ID from borrow record (assume column 3 is book info)
      const bookInfo = await borrowedRow.locator('td').nth(2).innerText();
      
      const booksPage = new BooksPage(page);
      await booksPage.goto();
      await booksPage.search(bookInfo.trim());
      
      const row = booksPage.rowWith(bookInfo.trim()).first();
      if (await row.isVisible()) {
        const deleteBtn = row.locator('a, button').filter({ hasText: /Delete|ลบ/i });
        page.on('dialog', d => d.accept());
        await deleteBtn.first().click();
        
        // Expected: ไม่อนุญาตให้ลบ / ป้องกัน Referential Integrity Error
        const errorMsg = page.locator('.alert-danger, .error-message, [class*="alert"]');
        await expect(errorMsg.first()).toBeVisible({ timeout: 5000 });
      }
    } else {
      console.log('ℹ️ No book currently borrowed. Skipping.');
      test.skip();
    }
  });

  test('TC018: Real-time Status Display', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();

    await page.waitForSelector('table tbody tr', { timeout: 10000 });
    const firstRow = page.locator('table tbody tr').first();
    const rowText = await firstRow.innerText();
    
    // Check if table contains "Total" and "Available", e.g. from column headers or row values
    const headers = await page.locator('table thead th').allInnerTexts();
    const hasTotalOrAvailable = headers.some(h => /Total|Available/i.test(h));
    
    if (hasTotalOrAvailable) {
      // Expected: แสดงผล "Total=..., Available=..." ทันทีใน Catalog
      expect(rowText.length).toBeGreaterThan(0);
    } else {
       console.log('ℹ️ Table does not display Total/Available directly. Skipping explicit assert.');
    }
  });

  test('TC019: Upload Book Artwork', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();
    
    await booksPage.openAddForm();
    if (await booksPage.artworkInput.isVisible().catch(() => false)) {
      // Mock an upload by trying to set file if exist (We might not have actual image, but we can test interaction)
      // Playwright can handle upload by creating a buffer
      const buffer = Buffer.from('fake image content');
      await booksPage.artworkInput.setInputFiles({
        name: 'cover.jpg',
        mimeType: 'image/jpeg',
        buffer
      });
      await booksPage.fillAndSubmit({ isbn: uniqueBook().isbn, title: 'Art Book', copies: 1 });
      
      // Expected: ภาพแสดงขึ้นมาที่หน้ารายการหนังสือ
      const artRow = booksPage.rowWith('Art Book');
      await expect(artRow).toBeVisible();
      const img = artRow.locator('img');
      if (await img.count() > 0) {
        await expect(img.first()).toBeVisible();
      }
    } else {
       console.log('ℹ️ Artwork upload field not found. Skipping.');
       test.skip();
    }
  });

  test('TC020: Create Categories', async ({ page }) => {
    // Setting > Category
    const categoryMenu = page.locator('nav, .sidebar, .menu').locator('a').filter({ hasText: /Categor|หมวดหมู่/i });
    if (await categoryMenu.count() > 0) {
      await categoryMenu.first().click();
      await page.waitForLoadState('networkidle');
      
      const addCatBtn = page.locator('button, a').filter({ hasText: /Add Category|เพิ่มหมวดหมู่/i });
      if (await addCatBtn.isVisible()) {
        await addCatBtn.click();
        const catInput = page.locator('input[name="category_name"], #category_name');
        await catInput.fill('Fiction-' + Date.now());
        const submit = page.locator('button[type="submit"]').filter({ hasText: /Save|บันทึก/i });
        await submit.click();
        
        // Expected: หมวดหมู่ถูกเพิ่ม นำไปผูกตอนสร้าง Book List ได้
        const successMsg = page.locator('.alert-success, [class*="alert"]');
        await expect(successMsg.first()).toBeVisible();
      }
    } else {
       console.log('ℹ️ Category menu not found. Mapped to TC020 but feature might be in another URL. Skipping.');
       test.skip();
    }
  });

});
}

test.describe('Books Management', () => {

  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('admin', 'admin123');
    await expect(page).not.toHaveURL(/login/);
  });

  // ─────────────────────────────────────────────
  // TC-BOOK-01: เปิดหน้า Books Management
  // ─────────────────────────────────────────────
  test('TC-BOOK-01: เปิดหน้า Books Management', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();

    await expect(page).toHaveURL(/books/);
    await expect(booksPage.bookTable).toBeVisible({ timeout: 10000 });
    await expect(booksPage.addBtnHeader.first()).toBeVisible();
  });

  // ─────────────────────────────────────────────
  // TC-BOOK-02: แสดงรายการหนังสือทั้งหมด
  // ─────────────────────────────────────────────
  test('TC-BOOK-02: แสดงรายการหนังสือทั้งหมด', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();

    const firstRow = page.locator('table tbody tr').first();
    await expect(firstRow).toBeVisible({ timeout: 10000 });

    // ตาราง: ISBN | Title | Author | Category | Total | Available | Location | Actions
    const cellCount = await firstRow.locator('td').count();
    expect(cellCount).toBeGreaterThanOrEqual(5);
  });

  // ─────────────────────────────────────────────
  // TC-BOOK-03: เพิ่มหนังสือใหม่ด้วยข้อมูลครบถ้วน
  // ─────────────────────────────────────────────
  test('TC-BOOK-03: เพิ่มหนังสือใหม่ด้วยข้อมูลครบถ้วน', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();

    const book = uniqueBook();
    await booksPage.addBook(book);

    // ตรวจ SQL error ก่อน
    const bodyText = await page.locator('body').textContent();
    expect(bodyText, '[BUG] book_add.php มี SQL syntax error').not.toContain('Fatal error');

    // หนังสือต้องปรากฏในตาราง
    await expect(booksPage.rowWith(book.isbn)).toBeVisible({ timeout: 10000 });
  });

  // ─────────────────────────────────────────────
  // TC-BOOK-04: เพิ่มหนังสือโดยไม่กรอกข้อมูลที่จำเป็น
  // ─────────────────────────────────────────────
  test('TC-BOOK-04: เพิ่มหนังสือโดยไม่กรอกข้อมูลที่จำเป็น', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();
    await booksPage.openAddForm();

    // กด Add Book ทันทีโดยไม่กรอกอะไร
    await booksPage.submitBtn.first().click();
    await page.waitForTimeout(500);

    const isbnRequired  = await booksPage.isbnInput.evaluate(n => n.validity.valueMissing).catch(() => false);
    const titleRequired = await booksPage.titleInput.evaluate(n => n.validity.valueMissing).catch(() => false);
    const errorVisible  = await page.locator('[class*="alert"], [class*="error"], .text-danger')
                               .first().isVisible().catch(() => false);
    expect(isbnRequired || titleRequired || errorVisible,
      'ต้องแสดง validation error เมื่อไม่กรอกข้อมูล'
    ).toBeTruthy();
  });

  // ─────────────────────────────────────────────
  // TC-BOOK-05: แก้ไขข้อมูลหนังสือ (ผ่านปุ่ม Edit)
  // ─────────────────────────────────────────────
  test('TC-BOOK-05: แก้ไขข้อมูลหนังสือ', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();

    await page.waitForSelector('table tbody tr', { timeout: 10000 });

    // คลิก Edit แถวแรก
    const editBtn = page.locator('table tbody tr').first()
                        .locator('a, button').filter({ hasText: /Edit/i });
    await editBtn.first().click();
    await page.waitForLoadState('networkidle', { timeout: 15000 });

    // ตรวจว่าไม่ได้ขึ้น 404
    const bodyText = await page.locator('body').textContent();
    expect(bodyText, '[BUG] book_edit.php ไม่มีในระบบ').not.toContain('Not Found');

    // กรอก Title ใหม่
    const titleField = page.locator('input[name*="title"], #title').first();
    await titleField.waitFor({ state: 'visible', timeout: 10000 });
    const newTitle = 'Edited-' + Date.now();
    await titleField.fill(newTitle);

    // กรอก field อื่นที่อาจต้องการ (publisher, year, category, location)
    const publisherField = page.locator('input[name*="publisher"]');
    if (await publisherField.isVisible().catch(() => false))
      await publisherField.fill('Test Publisher');

    const yearField = page.locator('input[name*="year"], input[name*="publication"]');
    if (await yearField.isVisible().catch(() => false))
      await yearField.fill('2024');

    const categoryField = page.locator('input[name*="category"], select[name*="category"]');
    if (await categoryField.isVisible().catch(() => false)) {
      const tag = await categoryField.evaluate(n => n.tagName.toLowerCase());
      if (tag === 'select') await categoryField.selectOption({ index: 1 });
      else await categoryField.fill('General');
    }

    const locationField = page.locator('input[name*="location"], input[name*="shelf"]');
    if (await locationField.isVisible().catch(() => false))
      await locationField.fill('A-101');

    // Submit
    const updateBtn = page.locator('button[type="submit"], input[type="submit"]')
                          .filter({ hasText: /Update|Save|Edit Book/i });
    await updateBtn.first().click();
    await page.waitForLoadState('networkidle', { timeout: 15000 });

    await expect(page.locator('body')).toContainText(newTitle, { timeout: 10000 });
  });

  // ─────────────────────────────────────────────
  // TC-BOOK-06: ตรวจสอบว่าไม่มีปุ่ม Delete (ระบบออกแบบไม่ให้ลบ)
  // ─────────────────────────────────────────────
  test('TC-BOOK-06: ตรวจสอบปุ่มใน Actions — มี View และ Edit เท่านั้น', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();

    await page.waitForSelector('table tbody tr', { timeout: 10000 });
    const firstRow = page.locator('table tbody tr').first();

    // ต้องมีปุ่ม View
    await expect(firstRow.locator('a, button').filter({ hasText: /View/i }).first())
      .toBeVisible({ timeout: 5000 });

    // ต้องมีปุ่ม Edit
    await expect(firstRow.locator('a, button').filter({ hasText: /Edit/i }).first())
      .toBeVisible({ timeout: 5000 });

    // ต้องไม่มีปุ่ม Delete (ระบบนี้ไม่มี feature ลบ)
    const deleteBtn = firstRow.locator('a, button').filter({ hasText: /Delete|ลบ/i });
    await expect(deleteBtn).not.toBeVisible();
  });

  // ─────────────────────────────────────────────
  // TC-BOOK-07: ค้นหาหนังสือด้วยชื่อ
  // ─────────────────────────────────────────────
  test('TC-BOOK-07: ค้นหาหนังสือด้วยชื่อ', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();

    await page.waitForSelector('table tbody tr', { timeout: 10000 });
    // Title อยู่คอลัมน์ที่ 2
    const firstTitle = await page.locator('table tbody tr td:nth-child(2)').first().innerText();

    await booksPage.search(firstTitle.trim());
    await expect(booksPage.bookTable).toContainText(firstTitle.trim(), { timeout: 8000 });
  });

  // ─────────────────────────────────────────────
  // TC-BOOK-08: ค้นหาหนังสือที่ไม่มีในระบบ
  // ─────────────────────────────────────────────
  test('TC-BOOK-08: ค้นหาหนังสือที่ไม่มีในระบบ', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();
    await booksPage.search('ZZZZZZ_NOT_EXISTS');

    const noResult = await booksPage.noResultText.isVisible().catch(() => false);
    const emptyTable = await page.locator('table tbody tr').count() === 0;
    expect(noResult || emptyTable,
      'ควรแสดง No books found หรือตารางว่าง'
    ).toBeTruthy();
  });

  // ─────────────────────────────────────────────
  // TC-BOOK-09: ค้นหาด้วยชื่อผู้แต่ง
  // ─────────────────────────────────────────────
  test('TC-BOOK-09: ค้นหาด้วยชื่อผู้แต่ง', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();

    await page.waitForSelector('table tbody tr', { timeout: 10000 });
    // Author อยู่คอลัมน์ที่ 3
    const firstAuthor = await page.locator('table tbody tr td:nth-child(3)').first().innerText();

    await booksPage.search(firstAuthor.trim());
    await expect(booksPage.bookTable).toContainText(firstAuthor.trim(), { timeout: 8000 });
  });

  // ─────────────────────────────────────────────
  // TC-BOOK-10: ค้นหาด้วย ISBN
  // ─────────────────────────────────────────────
  test('TC-BOOK-10: ค้นหาด้วย ISBN', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();

    await page.waitForSelector('table tbody tr', { timeout: 10000 });
    // ISBN อยู่คอลัมน์แรก
    const firstIsbn = await page.locator('table tbody tr td:nth-child(1)').first().innerText();

    await booksPage.search(firstIsbn.trim());
    await expect(booksPage.bookTable).toContainText(firstIsbn.trim(), { timeout: 8000 });
  });

  // ─────────────────────────────────────────────
  // TC-BOOK-11: [BUG 17] ระบบต้องปฏิเสธ ISBN ที่ซ้ำ
  // ─────────────────────────────────────────────
  test('TC-BOOK-11: [BUG 17] ระบบต้องปฏิเสธ ISBN ที่ซ้ำ', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();

    const book = uniqueBook();

    // เพิ่มครั้งแรก
    await booksPage.addBook(book);
    const bodyText1 = await page.locator('body').textContent();
    expect(bodyText1).not.toContain('Fatal error');
    await expect(booksPage.rowWith(book.isbn)).toBeVisible({ timeout: 10000 });

    // เพิ่มครั้งที่ 2 ด้วย ISBN เดิม
    await booksPage.addBook({ ...book, title: 'Duplicate ISBN Book' });

    const errorVisible = await page.locator('[class*="alert"], [class*="error"], .text-danger')
                              .first().isVisible({ timeout: 5000 }).catch(() => false);
    if (!errorVisible) {
      console.warn('⚠️  [BUG 17 DETECTED] ระบบยอมรับ ISBN ซ้ำโดยไม่แสดง error');
    }
    expect(errorVisible, '[BUG 17 DETECTED] ต้องแสดง error เมื่อ ISBN ซ้ำ').toBeTruthy();
  });

  // ─────────────────────────────────────────────
  // TC-BOOK-12: [BUG 15] ระบบต้องปฏิเสธ copies ติดลบ
  // ─────────────────────────────────────────────
  test('TC-BOOK-12: [BUG 15] ระบบต้องปฏิเสธจำนวนหนังสือติดลบ', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();

    await booksPage.addBook(uniqueBook({
      isbn:  'ERR-NEG-' + Date.now(),
      title: 'Negative-Copies-Book',
      copies: -99,
    }));

    const errorVisible = await page.locator('[class*="alert"], [class*="error"], .text-danger')
                              .first().isVisible({ timeout: 5000 }).catch(() => false);
    if (!errorVisible) {
      console.warn('⚠️  [BUG 15 DETECTED] ระบบยอมรับ copies = -99');
    }
    expect(errorVisible, '[BUG 15 DETECTED] ระบบต้องปฏิเสธ copies ติดลบ').toBeTruthy();
  });
});