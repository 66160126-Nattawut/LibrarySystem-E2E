const { test, expect } = require('@playwright/test');

test.describe('Visual Regression Testing (Comprehensive UI Coverage)', () => {
  // มาตรฐานหน้าจอ Desktop ปกติ
  test.use({ viewport: { width: 1280, height: 720 } });
  
  // ==========================================
  // Section 1: Authentication (Login Forms)
  // ==========================================
  test.describe('Auth Module', () => {
    test('1.1 Login Page - Default State', async ({ page }) => {
      await page.goto('http://localhost:8080/login.php');
      await expect(page).toHaveScreenshot('auth-01-login-default.png', { fullPage: true });
    });

    test('1.2 Login Page - Error State (Wrong Password)', async ({ page }) => {
      await page.goto('http://localhost:8080/login.php');
      await page.fill('input[name="username"]', 'admin');
      await page.fill('input[name="password"]', 'wrongpass');
      await page.click('button[type="submit"]');
      await page.waitForLoadState('networkidle');
      // เก็บภาพหน้าจอตอนกดยืนยันแล้วมี Error สีแดงโผล่ขึ้นมา
      await expect(page).toHaveScreenshot('auth-02-login-error.png', { fullPage: true });
    });
  });

  // ==========================================
  // Section 2: Authenticated Modules
  // ==========================================
  test.describe('Dashboard & Core Modules', () => {
    
    // Login ทุกครั้งก่อนเริ่ม Test ภายในกลุ่มนี้
    test.beforeEach(async ({ page }) => {
      await page.goto('http://localhost:8080/login.php');
      await page.fill('input[name="username"]', 'admin');
      await page.fill('input[name="password"]', 'admin123');
      await page.click('button[type="submit"]');
      await page.waitForLoadState('networkidle');
    });

    // --- Dashboard ---
    test('2.1 Dashboard - Default View', async ({ page }) => {
      await page.goto('http://localhost:8080/index.php');
      await expect(page).toHaveScreenshot('dashboard-01-default.png', { fullPage: true, maxDiffPixels: 500 });
    });

    test('2.2 Dashboard - Mobile Responsive View', async ({ page }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto('http://localhost:8080/index.php');
      await expect(page).toHaveScreenshot('dashboard-02-mobile.png', { fullPage: true, maxDiffPixels: 500 });
    });

    // --- Books Management ---
    test('3.1 Books - List View', async ({ page }) => {
      await page.goto('http://localhost:8080/books.php');
      await expect(page).toHaveScreenshot('books-01-list.png', { fullPage: true, maxDiffPixels: 500 });
    });

    test('3.2 Books - Add New Book Modal Open', async ({ page }) => {
      await page.goto('http://localhost:8080/books.php');
      await page.click('button[data-bs-target="#addBookModal"], a:has-text("Add New Book")');
      // รอให้ Modal เด้งโชว์จนเสร็จ Animation
      await page.waitForTimeout(500); 
      await expect(page).toHaveScreenshot('books-02-add-modal.png', { fullPage: true });
    });

    // --- Members Management ---
    test('4.1 Members - List View', async ({ page }) => {
      await page.goto('http://localhost:8080/members.php');
      await expect(page).toHaveScreenshot('members-01-list.png', { fullPage: true, maxDiffPixels: 500 });
    });

    test('4.2 Members - Add New Member Modal Open', async ({ page }) => {
      await page.goto('http://localhost:8080/members.php');
      await page.click('button[data-bs-target="#addMemberModal"], a:has-text("Add New Member")');
      await page.waitForTimeout(500);
      await expect(page).toHaveScreenshot('members-02-add-modal.png', { fullPage: true });
    });

    // --- Borrowing Process ---
    test('5.1 Borrow - Form View', async ({ page }) => {
      await page.goto('http://localhost:8080/borrow.php');
      await expect(page).toHaveScreenshot('borrow-01-form.png', { fullPage: true });
    });

    // --- Returning Process ---
    test('6.1 Return - List/Form View', async ({ page }) => {
      await page.goto('http://localhost:8080/return.php');
      await expect(page).toHaveScreenshot('return-01-list.png', { fullPage: true, maxDiffPixels: 500 });
    });

    test('6.2 Return - Pay Fine Modal/State', async ({ page }) => {
        await page.goto('http://localhost:8080/return.php');
        // ลองหาปุ่มรับเงินค่าปรับ ถ้ามีให้กดเปิด Modal ถ้าไม่มีก็ข้ามไป
        const payBtn = page.locator('button:has-text("Pay"), button[class*="pay-btn"]').first();
        if (await payBtn.isVisible()) {
            await payBtn.click();
            await page.waitForTimeout(500);
            await expect(page).toHaveScreenshot('return-02-pay-modal.png', { fullPage: true });
        }
    });

    // --- Reports Module ---
    test('7.1 Reports - General View', async ({ page }) => {
      await page.goto('http://localhost:8080/reports.php');
      await expect(page).toHaveScreenshot('reports-01-main.png', { fullPage: true, maxDiffPixels: 500 });
    });

  });
});
