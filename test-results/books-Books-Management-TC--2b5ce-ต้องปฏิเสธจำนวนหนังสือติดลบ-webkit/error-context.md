# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: books.spec.js >> Books Management >> TC-BOOK-12: [BUG 15] ระบบต้องปฏิเสธจำนวนหนังสือติดลบ
- Location: tests\e2e\books.spec.js:465:3

# Error details

```
Error: [BUG 15 DETECTED] ระบบต้องปฏิเสธ copies ติดลบ

expect(received).toBeTruthy()

Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]: "Fatal error: Uncaught mysqli_sql_exception: Data too long for column 'isbn' at row 1 in /var/www/html/book_add.php:25 Stack trace: #0 /var/www/html/book_add.php(25): mysqli_query(Object(mysqli), 'INSERT INTO boo...') #1 {main} thrown in /var/www/html/book_add.php on line 25"
```

# Test source

```ts
  380 |     const booksPage = new BooksPage(page);
  381 |     await booksPage.goto();
  382 | 
  383 |     await page.waitForSelector('table tbody tr', { timeout: 10000 });
  384 |     // Title อยู่คอลัมน์ที่ 2
  385 |     const firstTitle = await page.locator('table tbody tr td:nth-child(2)').first().innerText();
  386 | 
  387 |     await booksPage.search(firstTitle.trim());
  388 |     await expect(booksPage.bookTable).toContainText(firstTitle.trim(), { timeout: 8000 });
  389 |   });
  390 | 
  391 |   // ─────────────────────────────────────────────
  392 |   // TC-BOOK-08: ค้นหาหนังสือที่ไม่มีในระบบ
  393 |   // ─────────────────────────────────────────────
  394 |   test('TC-BOOK-08: ค้นหาหนังสือที่ไม่มีในระบบ', async ({ page }) => {
  395 |     const booksPage = new BooksPage(page);
  396 |     await booksPage.goto();
  397 |     await booksPage.search('ZZZZZZ_NOT_EXISTS');
  398 | 
  399 |     const noResult = await booksPage.noResultText.isVisible().catch(() => false);
  400 |     const emptyTable = await page.locator('table tbody tr').count() === 0;
  401 |     expect(noResult || emptyTable,
  402 |       'ควรแสดง No books found หรือตารางว่าง'
  403 |     ).toBeTruthy();
  404 |   });
  405 | 
  406 |   // ─────────────────────────────────────────────
  407 |   // TC-BOOK-09: ค้นหาด้วยชื่อผู้แต่ง
  408 |   // ─────────────────────────────────────────────
  409 |   test('TC-BOOK-09: ค้นหาด้วยชื่อผู้แต่ง', async ({ page }) => {
  410 |     const booksPage = new BooksPage(page);
  411 |     await booksPage.goto();
  412 | 
  413 |     await page.waitForSelector('table tbody tr', { timeout: 10000 });
  414 |     // Author อยู่คอลัมน์ที่ 3
  415 |     const firstAuthor = await page.locator('table tbody tr td:nth-child(3)').first().innerText();
  416 | 
  417 |     await booksPage.search(firstAuthor.trim());
  418 |     await expect(booksPage.bookTable).toContainText(firstAuthor.trim(), { timeout: 8000 });
  419 |   });
  420 | 
  421 |   // ─────────────────────────────────────────────
  422 |   // TC-BOOK-10: ค้นหาด้วย ISBN
  423 |   // ─────────────────────────────────────────────
  424 |   test('TC-BOOK-10: ค้นหาด้วย ISBN', async ({ page }) => {
  425 |     const booksPage = new BooksPage(page);
  426 |     await booksPage.goto();
  427 | 
  428 |     await page.waitForSelector('table tbody tr', { timeout: 10000 });
  429 |     // ISBN อยู่คอลัมน์แรก
  430 |     const firstIsbn = await page.locator('table tbody tr td:nth-child(1)').first().innerText();
  431 | 
  432 |     await booksPage.search(firstIsbn.trim());
  433 |     await expect(booksPage.bookTable).toContainText(firstIsbn.trim(), { timeout: 8000 });
  434 |   });
  435 | 
  436 |   // ─────────────────────────────────────────────
  437 |   // TC-BOOK-11: [BUG 17] ระบบต้องปฏิเสธ ISBN ที่ซ้ำ
  438 |   // ─────────────────────────────────────────────
  439 |   test('TC-BOOK-11: [BUG 17] ระบบต้องปฏิเสธ ISBN ที่ซ้ำ', async ({ page }) => {
  440 |     const booksPage = new BooksPage(page);
  441 |     await booksPage.goto();
  442 | 
  443 |     const book = uniqueBook();
  444 | 
  445 |     // เพิ่มครั้งแรก
  446 |     await booksPage.addBook(book);
  447 |     const bodyText1 = await page.locator('body').textContent();
  448 |     expect(bodyText1).not.toContain('Fatal error');
  449 |     await expect(booksPage.rowWith(book.isbn)).toBeVisible({ timeout: 10000 });
  450 | 
  451 |     // เพิ่มครั้งที่ 2 ด้วย ISBN เดิม
  452 |     await booksPage.addBook({ ...book, title: 'Duplicate ISBN Book' });
  453 | 
  454 |     const errorVisible = await page.locator('[class*="alert"], [class*="error"], .text-danger')
  455 |                               .first().isVisible({ timeout: 5000 }).catch(() => false);
  456 |     if (!errorVisible) {
  457 |       console.warn('⚠️  [BUG 17 DETECTED] ระบบยอมรับ ISBN ซ้ำโดยไม่แสดง error');
  458 |     }
  459 |     expect(errorVisible, '[BUG 17 DETECTED] ต้องแสดง error เมื่อ ISBN ซ้ำ').toBeTruthy();
  460 |   });
  461 | 
  462 |   // ─────────────────────────────────────────────
  463 |   // TC-BOOK-12: [BUG 15] ระบบต้องปฏิเสธ copies ติดลบ
  464 |   // ─────────────────────────────────────────────
  465 |   test('TC-BOOK-12: [BUG 15] ระบบต้องปฏิเสธจำนวนหนังสือติดลบ', async ({ page }) => {
  466 |     const booksPage = new BooksPage(page);
  467 |     await booksPage.goto();
  468 | 
  469 |     await booksPage.addBook(uniqueBook({
  470 |       isbn:  'ERR-NEG-' + Date.now(),
  471 |       title: 'Negative-Copies-Book',
  472 |       copies: -99,
  473 |     }));
  474 | 
  475 |     const errorVisible = await page.locator('[class*="alert"], [class*="error"], .text-danger')
  476 |                               .first().isVisible({ timeout: 5000 }).catch(() => false);
  477 |     if (!errorVisible) {
  478 |       console.warn('⚠️  [BUG 15 DETECTED] ระบบยอมรับ copies = -99');
  479 |     }
> 480 |     expect(errorVisible, '[BUG 15 DETECTED] ระบบต้องปฏิเสธ copies ติดลบ').toBeTruthy();
      |                                                                           ^ Error: [BUG 15 DETECTED] ระบบต้องปฏิเสธ copies ติดลบ
  481 |   });
  482 | });
```