// pages/ReportsPage.js
class ReportsPage {
  constructor(page) {
    this.page = page;

    this.reportsLink = page.locator('nav a, .sidebar a, .menu a').filter({ hasText: /^Reports$|^รายงาน$/i }).first();

    // ระบุตาราง Overdue/Fine
    this.overdueTable = page.locator('table').filter({ has: page.locator('th', { hasText: /Days.?Overdue|เกินกำหนด|Fine|ค่าปรับ/i }) }).first();
    this.overdueRows = this.overdueTable.locator('tbody tr');

    this.memberHeader = this.overdueTable.locator('th').filter({ hasText: /Member|สมาชิก/i });
    this.bookHeader = this.overdueTable.locator('th').filter({ hasText: /Book|หนังสือ/i });
    this.daysOverdueHeader = this.overdueTable.locator('th').filter({ hasText: /Days.?Overdue|เกินกำหนด/i });
    this.fineHeader = this.overdueTable.locator('th').filter({ hasText: /Fine|ค่าปรับ/i });
  }

  async goto() {
    await this.page.goto('http://localhost:8080/reports.php'); // Assuming or report.php
    await this.page.waitForLoadState('networkidle', { timeout: 15000 });
  }

  async getOverdueRecordsCount() {
    return await this.overdueRows.count();
  }

  async getOverdueRecord(index) {
    const cells = this.overdueRows.nth(index).locator('td');
    return {
      memberCode:  ((await cells.nth(0).textContent()) || '').trim(),
      member:      ((await cells.nth(1).textContent()) || '').trim(),
      book:        ((await cells.nth(2).textContent()) || '').trim(),
      borrowDate:  ((await cells.nth(3).textContent()) || '').trim(),
      dueDate:     ((await cells.nth(4).textContent()) || '').trim(),
      daysOverdue: ((await cells.nth(5).textContent()) || '').trim(),
      fine:        ((await cells.nth(6).textContent()) || '').trim(),
    };
  }
}

module.exports = { ReportsPage };