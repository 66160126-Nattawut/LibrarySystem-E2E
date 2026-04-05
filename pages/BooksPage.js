// pages/BooksPage.js
class BooksPage {
  constructor(page) {
    this.page = page;
    this.addBtnHeader = page.locator('button, a').filter({ hasText: /Add New Book|เพิ่มหนังสือใหม่|\+ Add Book/i });
    this.isbnInput     = page.locator('input[name*="isbn"], #isbn');
    this.titleInput    = page.locator('input[name*="title"], #title');
    this.authorInput   = page.locator('input[name*="author"], #author');
    this.publisherInput= page.locator('input[name*="publisher"]');
    this.yearInput     = page.locator('input[name*="year"]');
    this.copiesInput   = page.locator('input[name*="copies"], input[name*="qty"]');
    this.categoryInput = page.locator('input[name*="category"], #category, select[name*="category"]');
    this.locationInput = page.locator('input[name*="location"], #location');
    this.artworkInput  = page.locator('input[type="file"][name*="image"], input[type="file"][name*="cover"], input[type="file"][name*="artwork"]');
    
    this.submitBtn     = page.locator('button[type="submit"]').filter({ hasText: /Add Book|Save|บันทึก/i });
    this.searchInput   = page.locator('input[name*="search"]');
    this.searchBtn     = page.locator('button').filter({ hasText: /Search|ค้นหา/i });
    this.noResultText  = page.locator('text=/No books found|ไม่พบ/i');
    this.bookTable     = page.locator('table tbody');
  }

  async goto() {
    await this.page.goto('http://localhost:8080/books.php');
    await this.page.waitForLoadState('networkidle', { timeout: 15000 });
    await this.page.waitForTimeout(500);
  }

  async gotoCategorySetting() {
    await this.page.goto('http://localhost:8080/categories.php'); // Assuming or navigate via menu
    await this.page.waitForLoadState('networkidle');
  }

  async openAddForm() {
    await this.addBtnHeader.first().waitFor({ state: 'visible', timeout: 10000 });
    await this.addBtnHeader.first().click();
    await this.isbnInput.waitFor({ state: 'visible', timeout: 8000 });
    await this.page.waitForTimeout(300);
  }

  async fillAndSubmit(data) {
    if (data.isbn) await this.isbnInput.fill(String(data.isbn));
    if (data.title) await this.titleInput.fill(String(data.title));
    if (data.author) await this.authorInput.fill(String(data.author));
    if (data.publisher && await this.publisherInput.isVisible())
      await this.publisherInput.fill(String(data.publisher));
    if (data.year && await this.yearInput.isVisible())
      await this.yearInput.fill(String(data.year));
    if (data.copies) await this.copiesInput.fill(String(data.copies));
    
    if (data.category && await this.categoryInput.isVisible().catch(() => false)) {
      const tag = await this.categoryInput.evaluate(n => n.tagName.toLowerCase());
      if (tag === 'select') {
        const options = this.categoryInput.locator('option');
        const count = await options.count();
        for (let i = 0; i < count; i++) {
          const text = await options.nth(i).textContent();
          if (text.toLowerCase().includes(data.category.toLowerCase())) {
            await this.categoryInput.selectOption({ index: i });
            break;
          }
        }
      } else {
        await this.categoryInput.fill(String(data.category));
      }
    }
    
    if (data.location && await this.locationInput.isVisible().catch(() => false))
      await this.locationInput.fill(String(data.location));
      
    if (data.artworkPath && await this.artworkInput.isVisible().catch(() => false)) {
      await this.artworkInput.setInputFiles(data.artworkPath);
    }

    await this.submitBtn.first().waitFor({ state: 'visible', timeout: 5000 });
    await this.submitBtn.first().click();
    await this.page.waitForTimeout(1000); 
  }

  async addBook(data) {
    await this.openAddForm();
    await this.fillAndSubmit(data);
  }

  async search(keyword) {
    if (await this.searchInput.isVisible()) {
      await this.searchInput.fill(keyword);
      await this.searchBtn.click();
      await this.page.waitForTimeout(800);
    }
  }

  rowWith(text) {
    return this.page.locator('table tbody tr').filter({ hasText: text });
  }
}

module.exports = { BooksPage };