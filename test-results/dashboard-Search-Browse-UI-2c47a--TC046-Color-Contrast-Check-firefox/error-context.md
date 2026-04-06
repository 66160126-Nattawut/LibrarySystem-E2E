# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboard.spec.js >> Search, Browse & UI/UX (TC038 - TC041, TC043, TC045 - TC050) >> TC046: Color Contrast Check
- Location: tests\e2e\dashboard.spec.js:103:3

# Error details

```
Test timeout of 30000ms exceeded while running "beforeEach" hook.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button[type="submit"]').filter({ hasText: /Login|เข้าสู่ระบบ/i })
    - locator resolved to <button type="submit" class="btn btn-primary w-100">Login</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action

```

# Page snapshot

```yaml
- generic [ref=e6]:
  - heading "Library System" [level=3] [ref=e7]: Library System
  - generic [ref=e8]:
    - generic [ref=e9]:
      - generic [ref=e10]: Username
      - textbox "Username" [ref=e11]: admin
    - generic [ref=e12]:
      - generic [ref=e13]: Password
      - textbox "Password" [ref=e14]: admin123
    - button "Login" [active] [ref=e15] [cursor=pointer]
  - generic [ref=e16]:
    - paragraph [ref=e17]: "Default accounts:"
    - paragraph [ref=e18]:
      - text: admin / admin123
      - text: librarian / lib123
```

# Test source

```ts
  1  | // pages/LoginPage.js
  2  | class LoginPage {
  3  |   constructor(page) {
  4  |     this.page = page;
  5  |     this.usernameInput = page.locator('input[name="username"], #username');
  6  |     this.passwordInput = page.locator('input[name="password"], #password');
  7  |     this.loginButton = page.locator('button[type="submit"]').filter({ hasText: /Login|เข้าสู่ระบบ/i });
  8  |   }
  9  | 
  10 |   async goto() {
  11 |     await this.page.goto('http://localhost:8080/login.php');
  12 |     await this.page.waitForLoadState('networkidle');
  13 |   }
  14 | 
  15 |   async login(username, password) {
  16 |     if (username) {
  17 |       await this.usernameInput.waitFor({ state: 'visible', timeout: 5000 });
  18 |       await this.usernameInput.fill(username);
  19 |     }
  20 |     if (password) {
  21 |       await this.passwordInput.waitFor({ state: 'visible', timeout: 5000 });
  22 |       await this.passwordInput.fill(password);
  23 |     }
  24 | 
  25 |     await this.loginButton.waitFor({ state: 'visible', timeout: 5000 });
  26 |     await this.page.waitForTimeout(500);
> 27 |     await this.loginButton.click();
     |                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  28 |     
  29 |     // We don't always wait for networkidle here because login might fail and stay on the same page
  30 |     await this.page.waitForTimeout(1000); 
  31 |   }
  32 | 
  33 |   async isOnLoginPage() {
  34 |     return this.page.url().includes('login');
  35 |   }
  36 | }
  37 | 
  38 | module.exports = { LoginPage };
```