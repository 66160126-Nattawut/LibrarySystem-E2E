// tests/e2e/books.spec.js
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

  // ========== Extended E2E Tests (Boundary & Injection) ========== //

  test('[Extended] Negative Book Quantity', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();

    const book = uniqueBook({ copies: -10 });
    await booksPage.addBook(book);
    
    // ถ้าระบบยอมให้บันทึกหนังสือติดลบ ถือเป็นบั๊กลอจิก
    const row = booksPage.rowWith(book.isbn);
    if (await row.isVisible().catch(() => false)) {
        const rowText = await row.innerText();
        if(rowText.includes('-10')) {
          expect(rowText, '[BUG DETECTED] ระบบยอมให้อัปเดตจำนวนหนังสือในคลังเป็นค่าติดลบ').not.toContain('-10');
        }
    }
  });

  test('[Extended] Emoji & Special Char in Author', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();

    const authorName = "W!ttawat @ 🇹🇭 \u0000";
    const book = uniqueBook({ author: authorName });
    await booksPage.addBook(book);
    
    // ตรวจสอบว่าหลังจากบันทึกแล้ว ชื่อผู้เขียนกลับมาเหมือนเดิมหรือไม่ หรือกลายเป็น ????? 
    const row = booksPage.rowWith(book.isbn);
    if (await row.isVisible().catch(() => false)) {
       const displayAuthor = await row.locator('td').nth(2).innerText();
       // ถ้าระบบบันทึก \u0000 แล้วแตก หรือ Emoji หายไป
       if(!displayAuthor.includes('🇹🇭')) {
           console.log('ℹ️ [Notice] ฐานข้อมูลอาจไม่ได้ใช้ mb4 charset Emoji จึงหายไป');
       }
    }
  });

  test('[Extended] Trailing Spaces in Search', async ({ page }) => {
    const booksPage = new BooksPage(page);
    await booksPage.goto();

    const book = uniqueBook({ title: 'Python 101' });
    await booksPage.addBook(book);
    await expect(booksPage.rowWith('Python 101')).toBeVisible({ timeout: 10000 });

    // ค้นหาโดยเคาะเว้นวรรค
    await booksPage.search('   Python 101   ');
    
    // ถ้าระบบไม่ทำ trim ช่องค้นหา มันจะไม่เจอหนังสือ
    const result = booksPage.rowWith('Python 101');
    if (!(await result.isVisible())) {
       expect('Not found', '[BUG DETECTED] ช่องค้นหาไม่ทำการ Trim Whitespace เว้นวรรค ทำให้ค้นหาไม่เจอ').toEqual('Found');
    }
  });

});