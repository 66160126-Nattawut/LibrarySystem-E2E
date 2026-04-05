const { defineConfig, devices } = require('@playwright/test');

/**
 
Playwright Configuration,
เอาไว้ควบคุมตั้งค่าการรัน Test ทั้งหมดในโปรแกรมเดียว,
ดูเพิ่มเติม: https://playwright.dev/docs/test-configuration*/,
module.exports = defineConfig({
  // โฟลเดอร์ที่เก็บไฟล์ Test
  testDir: './tests/e2e',

  // รันเทสพร้อมๆ กัน (Parallel) เพื่อประหยัดเวลา
  fullyParallel: true,

  // ฟ้อง Error ทันทีถ้าไฟล์มีคำว่า test.only (ป้องกันการลืมเอาออกตอนเอาขึ้น CI)
  forbidOnly: !!process.env.CI,

  // ให้ลองรันแก้ตัวใหม่ไหม ถ้าพังตั้งแต่ครั้งแรก (บนเครื่องเราไม่ต้องแก้ตัว ให้พังเห็นๆ ไปเลย)
  retries: process.env.CI ? 2 : 0,

  // จำนวนคนงาน (Workers) ที่เปิดหน้าต่าง Chrome ขึ้นมาช่วยกันเทส
  workers: process.env.CI ? 1 : undefined,

  // ออกสรุป Report เป็นหน้าเว็บ HTML และเก็บบันทึกข้อมูลลงไฟล์ JSON
  reporter: [
    ['html'],
    ['json', { outputFile: '/test-results/results.json' }]
  ],

  // การตั้งค่าที่จะแชร์ให้ทุกๆ Test เอาไปใช้
  use: {
    // URL หลักของระบบ (หลังจากมีตัวนี้ ในโค้ดเทสสามารถเปลี่ยนไปเขียนแค่ page.goto('/login.php') ได้เลย)
    baseURL: 'http://localhost:8080/',

    // เก็บภาพ Screen Shot ตอนที่เทสล้มเหลวโดยอัตโนมัติ (เอาไว้แนบ Bug Report ได้เลย)
    screenshot: 'only-on-failure',

    // อัดวิดีโอตอนเทสพังไว้ด้วย จะได้รู้ว่าก่อนพังมันเกิดอะไรขึ้น
    video: 'retain-on-failure',

    // เก็บประวัติการคลิกแบบเจาะลึก (Trace) ไว้ดูเมื่อเทสรันไม่ผ่าน
    trace: 'on-first-retry',
  },

  // ตั้งค่า Browser ที่ใช้รัน (Project Settings)
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'], viewport: { width: 1280, height: 720 } },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'], viewport: { width: 1280, height: 720 } },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'], viewport: { width: 1280, height: 720 } },
    }
  ],
});
