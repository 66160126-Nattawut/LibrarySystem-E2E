// pages/LoginPage.js
class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('input[name="username"], #username');
    this.passwordInput = page.locator('input[name="password"], #password');
    this.loginButton = page.locator('button[type="submit"]').filter({ hasText: /Login|เข้าสู่ระบบ/i });
  }

  async goto() {
    await this.page.goto('http://localhost:8080/login.php');
    await this.page.waitForLoadState('networkidle');
  }

  async login(username, password) {
    if (username) {
      await this.usernameInput.waitFor({ state: 'visible', timeout: 5000 });
      await this.usernameInput.fill(username);
    }
    if (password) {
      await this.passwordInput.waitFor({ state: 'visible', timeout: 5000 });
      await this.passwordInput.fill(password);
    }

    await this.loginButton.waitFor({ state: 'visible', timeout: 5000 });
    await this.page.waitForTimeout(500);
    await this.loginButton.click();
    
    // We don't always wait for networkidle here because login might fail and stay on the same page
    await this.page.waitForTimeout(1000); 
  }

  async isOnLoginPage() {
    return this.page.url().includes('login');
  }
}

module.exports = { LoginPage };