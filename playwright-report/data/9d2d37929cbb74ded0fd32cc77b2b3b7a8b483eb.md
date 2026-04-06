# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: books.spec.js >> Books Management >> TC-BOOK-05: แก้ไขข้อมูลหนังสือ
- Location: tests\e2e\books.spec.js:302:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('input[name*="title"], #title').first() to be visible
    - waiting for" http://localhost:8080/book_edit.php?id=6" navigation to finish...
    - navigated to "http://localhost:8080/book_edit.php?id=6"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - heading "Not Found" [level=1] [ref=e2]
  - paragraph [ref=e3]: The requested URL was not found on this server.
  - separator [ref=e4]
  - generic [ref=e5]: Apache/2.4.65 (Debian) Server at localhost Port 8080
```

# Test source

```ts
  220 | 
  221 | });
  222 | }
  223 | 
  224 | test.describe('Books Management', () => {
  225 | 
  226 |   test.beforeEach(async ({ page }) => {
  227 |     const loginPage = new LoginPage(page);
  228 |     await loginPage.goto();
  229 |     await loginPage.login('admin', 'admin123');
  230 |     await expect(page).not.toHaveURL(/login/);
  231 |   });
  232 | 
  233 |   // ─────────────────────────────────────────────
  234 |   // TC-BOOK-01: เปิดหน้า Books Management
  235 |   // ─────────────────────────────────────────────
  236 |   test('TC-BOOK-01: เปิดหน้า Books Management', async ({ page }) => {
  237 |     const booksPage = new BooksPage(page);
  238 |     await booksPage.goto();
  239 | 
  240 |     await expect(page).toHaveURL(/books/);
  241 |     await expect(booksPage.bookTable).toBeVisible({ timeout: 10000 });
  242 |     await expect(booksPage.addBtnHeader.first()).toBeVisible();
  243 |   });
  244 | 
  245 |   // ─────────────────────────────────────────────
  246 |   // TC-BOOK-02: แสดงรายการหนังสือทั้งหมด
  247 |   // ─────────────────────────────────────────────
  248 |   test('TC-BOOK-02: แสดงรายการหนังสือทั้งหมด', async ({ page }) => {
  249 |     const booksPage = new BooksPage(page);
  250 |     await booksPage.goto();
  251 | 
  252 |     const firstRow = page.locator('table tbody tr').first();
  253 |     await expect(firstRow).toBeVisible({ timeout: 10000 });
  254 | 
  255 |     // ตาราง: ISBN | Title | Author | Category | Total | Available | Location | Actions
  256 |     const cellCount = await firstRow.locator('td').count();
  257 |     expect(cellCount).toBeGreaterThanOrEqual(5);
  258 |   });
  259 | 
  260 |   // ─────────────────────────────────────────────
  261 |   // TC-BOOK-03: เพิ่มหนังสือใหม่ด้วยข้อมูลครบถ้วน
  262 |   // ─────────────────────────────────────────────
  263 |   test('TC-BOOK-03: เพิ่มหนังสือใหม่ด้วยข้อมูลครบถ้วน', async ({ page }) => {
  264 |     const booksPage = new BooksPage(page);
  265 |     await booksPage.goto();
  266 | 
  267 |     const book = uniqueBook();
  268 |     await booksPage.addBook(book);
  269 | 
  270 |     // ตรวจ SQL error ก่อน
  271 |     const bodyText = await page.locator('body').textContent();
  272 |     expect(bodyText, '[BUG] book_add.php มี SQL syntax error').not.toContain('Fatal error');
  273 | 
  274 |     // หนังสือต้องปรากฏในตาราง
  275 |     await expect(booksPage.rowWith(book.isbn)).toBeVisible({ timeout: 10000 });
  276 |   });
  277 | 
  278 |   // ─────────────────────────────────────────────
  279 |   // TC-BOOK-04: เพิ่มหนังสือโดยไม่กรอกข้อมูลที่จำเป็น
  280 |   // ─────────────────────────────────────────────
  281 |   test('TC-BOOK-04: เพิ่มหนังสือโดยไม่กรอกข้อมูลที่จำเป็น', async ({ page }) => {
  282 |     const booksPage = new BooksPage(page);
  283 |     await booksPage.goto();
  284 |     await booksPage.openAddForm();
  285 | 
  286 |     // กด Add Book ทันทีโดยไม่กรอกอะไร
  287 |     await booksPage.submitBtn.first().click();
  288 |     await page.waitForTimeout(500);
  289 | 
  290 |     const isbnRequired  = await booksPage.isbnInput.evaluate(n => n.validity.valueMissing).catch(() => false);
  291 |     const titleRequired = await booksPage.titleInput.evaluate(n => n.validity.valueMissing).catch(() => false);
  292 |     const errorVisible  = await page.locator('[class*="alert"], [class*="error"], .text-danger')
  293 |                                .first().isVisible().catch(() => false);
  294 |     expect(isbnRequired || titleRequired || errorVisible,
  295 |       'ต้องแสดง validation error เมื่อไม่กรอกข้อมูล'
  296 |     ).toBeTruthy();
  297 |   });
  298 | 
  299 |   // ─────────────────────────────────────────────
  300 |   // TC-BOOK-05: แก้ไขข้อมูลหนังสือ (ผ่านปุ่ม Edit)
  301 |   // ─────────────────────────────────────────────
  302 |   test('TC-BOOK-05: แก้ไขข้อมูลหนังสือ', async ({ page }) => {
  303 |     const booksPage = new BooksPage(page);
  304 |     await booksPage.goto();
  305 | 
  306 |     await page.waitForSelector('table tbody tr', { timeout: 10000 });
  307 | 
  308 |     // คลิก Edit แถวแรก
  309 |     const editBtn = page.locator('table tbody tr').first()
  310 |                         .locator('a, button').filter({ hasText: /Edit/i });
  311 |     await editBtn.first().click();
  312 |     await page.waitForLoadState('networkidle', { timeout: 15000 });
  313 | 
  314 |     // ตรวจว่าไม่ได้ขึ้น 404
  315 |     const bodyText = await page.locator('body').textContent();
  316 |     expect(bodyText, '[BUG] book_edit.php ไม่มีในระบบ').not.toContain('Not Found');
  317 | 
  318 |     // กรอก Title ใหม่
  319 |     const titleField = page.locator('input[name*="title"], #title').first();
> 320 |     await titleField.waitFor({ state: 'visible', timeout: 10000 });
      |                      ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  321 |     const newTitle = 'Edited-' + Date.now();
  322 |     await titleField.fill(newTitle);
  323 | 
  324 |     // กรอก field อื่นที่อาจต้องการ (publisher, year, category, location)
  325 |     const publisherField = page.locator('input[name*="publisher"]');
  326 |     if (await publisherField.isVisible().catch(() => false))
  327 |       await publisherField.fill('Test Publisher');
  328 | 
  329 |     const yearField = page.locator('input[name*="year"], input[name*="publication"]');
  330 |     if (await yearField.isVisible().catch(() => false))
  331 |       await yearField.fill('2024');
  332 | 
  333 |     const categoryField = page.locator('input[name*="category"], select[name*="category"]');
  334 |     if (await categoryField.isVisible().catch(() => false)) {
  335 |       const tag = await categoryField.evaluate(n => n.tagName.toLowerCase());
  336 |       if (tag === 'select') await categoryField.selectOption({ index: 1 });
  337 |       else await categoryField.fill('General');
  338 |     }
  339 | 
  340 |     const locationField = page.locator('input[name*="location"], input[name*="shelf"]');
  341 |     if (await locationField.isVisible().catch(() => false))
  342 |       await locationField.fill('A-101');
  343 | 
  344 |     // Submit
  345 |     const updateBtn = page.locator('button[type="submit"], input[type="submit"]')
  346 |                           .filter({ hasText: /Update|Save|Edit Book/i });
  347 |     await updateBtn.first().click();
  348 |     await page.waitForLoadState('networkidle', { timeout: 15000 });
  349 | 
  350 |     await expect(page.locator('body')).toContainText(newTitle, { timeout: 10000 });
  351 |   });
  352 | 
  353 |   // ─────────────────────────────────────────────
  354 |   // TC-BOOK-06: ตรวจสอบว่าไม่มีปุ่ม Delete (ระบบออกแบบไม่ให้ลบ)
  355 |   // ─────────────────────────────────────────────
  356 |   test('TC-BOOK-06: ตรวจสอบปุ่มใน Actions — มี View และ Edit เท่านั้น', async ({ page }) => {
  357 |     const booksPage = new BooksPage(page);
  358 |     await booksPage.goto();
  359 | 
  360 |     await page.waitForSelector('table tbody tr', { timeout: 10000 });
  361 |     const firstRow = page.locator('table tbody tr').first();
  362 | 
  363 |     // ต้องมีปุ่ม View
  364 |     await expect(firstRow.locator('a, button').filter({ hasText: /View/i }).first())
  365 |       .toBeVisible({ timeout: 5000 });
  366 | 
  367 |     // ต้องมีปุ่ม Edit
  368 |     await expect(firstRow.locator('a, button').filter({ hasText: /Edit/i }).first())
  369 |       .toBeVisible({ timeout: 5000 });
  370 | 
  371 |     // ต้องไม่มีปุ่ม Delete (ระบบนี้ไม่มี feature ลบ)
  372 |     const deleteBtn = firstRow.locator('a, button').filter({ hasText: /Delete|ลบ/i });
  373 |     await expect(deleteBtn).not.toBeVisible();
  374 |   });
  375 | 
  376 |   // ─────────────────────────────────────────────
  377 |   // TC-BOOK-07: ค้นหาหนังสือด้วยชื่อ
  378 |   // ─────────────────────────────────────────────
  379 |   test('TC-BOOK-07: ค้นหาหนังสือด้วยชื่อ', async ({ page }) => {
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
```