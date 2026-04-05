// pages/DashboardPage.js
class DashboardPage {
  constructor(page) {
    this.page = page;

    // Stat cards
    this.totalBooksCard     = page.locator('.card, .stat-card, [class*="card"]').filter({ hasText: /Total Books|หนังสือทั้งหมด/i }).first();
    this.availableBooksCard = page.locator('.card, .stat-card, [class*="card"]').filter({ hasText: /Available Books|หนังสือที่ว่าง/i }).first();
    this.activeMembersCard  = page.locator('.card, .stat-card, [class*="card"]').filter({ hasText: /Active Members|สมาชิกที่ใช้งาน/i }).first();
    this.borrowedBooksCard  = page.locator('.card, .stat-card, [class*="card"]').filter({ hasText: /Borrowed Books|หนังสือที่ยืม/i }).first();

    // Navigation links
    this.booksLink     = page.locator('nav a, .sidebar a, .menu a').filter({ hasText: /^Books$|^หนังสือ$/i }).first();
    this.membersLink   = page.locator('nav a, .sidebar a, .menu a').filter({ hasText: /^Members$|^สมาชิก$/i }).first();
    this.borrowingLink = page.locator('nav a, .sidebar a, .menu a').filter({ hasText: /Borrow|การยืม/i }).first();
    this.reportsLink   = page.locator('nav a, .sidebar a, .menu a').filter({ hasText: /Reports|รายงาน/i }).first();
    
    // UI/UX Elements
    this.darkModeBtn   = page.locator('button, a, .toggle-switch').filter({ hasText: /Dark|Theme|สว่าง|มืด/i });
    this.hamburgerMenu = page.locator('.hamburger, .menu-toggle, [aria-label*="menu"]');
    this.toastAlert    = page.locator('.toast, [role="alert"], .alert, .notification');
    this.tooltipEl     = page.locator('[data-tooltip], .tooltip');
    
    // Search elements (can exist on dashboard or header)
    this.globalSearchInput = page.locator('input[type="search"], input[name*="search"], [placeholder*="search" i]');
    this.globalSearchBtn   = page.locator('button').filter({ hasText: /Search|ค้นหา/i });
  }

  async goto() {
    await this.page.goto('http://localhost:8080/index.php');
    await this.page.waitForLoadState('networkidle', { timeout: 15000 });
    await this.page.waitForTimeout(500);
  }

  async getStatValue(keyword) {
    const card = this.page.locator('.card, .stat-card, [class*="card"]').filter({ hasText: keyword }).first();
    await card.waitFor({ state: 'visible', timeout: 8000 });
    const numEl = card.locator('h1, h2, h3, h4, .number, .count, [class*="value"], [class*="stat"]').filter({ hasText: /^\d+$/ }).first();
    const text = await numEl.innerText();
    return parseInt(text.trim(), 10);
  }

  async navigateTo(linkLocator) {
    await linkLocator.waitFor({ state: 'visible', timeout: 8000 });
    await linkLocator.click();
    await this.page.waitForLoadState('networkidle', { timeout: 15000 });
  }
}

module.exports = { DashboardPage };