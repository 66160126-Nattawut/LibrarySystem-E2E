#  Library Management System — Educational Testing Platform

> ระบบจัดการห้องสมุดสำหรับการเรียนการสอนวิชา **Software Testing and Evaluation**
> พร้อม Automated Testing ด้วย Playwright

---

##  วัตถุประสงค์


| ทักษะ | รายละเอียด |
|-------|-----------|
|  Bug Hunting | การหา bugs ด้วยเทคนิค Manual & Automated |
|  Test Cases | การออกแบบและเขียน test cases |
|  Software Testing | Black Box, Visual Regression |
|  Bug Reports | การเขียนรายงาน bug ที่มีคุณภาพ |
|  Test Automation | การเขียนระบบทดสอบอัตโนมัติด้วย Playwright |

---

##  การติดตั้งและเริ่มต้นใช้งาน

### Prerequisites

- **Docker** & **Docker Compose** — สำหรับรัน Web Server และ Database
- **Node.js** v18+ — สำหรับ Playwright Test Automation
- **Git** — สำหรับจัดการเวอร์ชันโค้ด

### ขั้นตอนที่ 1 — รันระบบผ่าน Docker

```bash
# Clone โปรเจกต์
git clone <repository-url>
cd Library-Management-all-bugs

# รัน containers
docker-compose up -d
```

>  ครั้งแรกอาจใช้เวลาสักครู่ในการ build image

### ขั้นตอนที่ 2 — ติดตั้ง Playwright (สำหรับ Automated Testing)

```bash
# ติดตั้ง dependencies
npm install

# ติดตั้ง Playwright browsers
npx playwright install
```

### ขั้นตอนที่ 3 — เข้าใช้งาน

| Service | URL | หมายเหตุ |
|---------|-----|---------|
|  ระบบหลัก | http://localhost:8080 | หน้าเว็บระบบห้องสมุด |
|  phpMyAdmin | http://localhost:8081 | จัดการฐานข้อมูล |

### ข้อมูล Login

**ผู้ใช้ระบบ:**

| Role | Username | Password |
|------|----------|----------|
| Admin | `admin` | `admin123` |
| Librarian | `librarian` | `lib123` |

**phpMyAdmin:**

| Field | Value |
|-------|-------|
| Server | `db` |
| Username | `root` |
| Password | `root_password` |

>  หรือใช้ `library_user` / `library_pass` (Database: `library_db`)

---

##  ฟังก์ชันหลักของระบบ

| # | Module | คำอธิบาย |
|---|--------|---------|
| 1 | **Dashboard** | แสดงภาพรวมระบบ — จำนวนหนังสือ, สมาชิก, การยืมค้าง |
| 2 | **Books Management** | เพิ่ม / แก้ไข / ค้นหาหนังสือ |
| 3 | **Members Management** | จัดการข้อมูลสมาชิก |
| 4 | **Borrow Books** | ระบบยืมหนังสือ |
| 5 | **Return Books** | คืนหนังสือ & คำนวณค่าปรับ |
| 6 | **Reports** | รายงานสรุปยอดยืม-คืน, ค่าปรับ |

---


##  Automated Testing ด้วย Playwright

ระบบทดสอบอัตโนมัติครอบคลุม 3 ด้านหลัก:

1. **Functional Testing** — ยืม-คืน, เพิ่มลบข้อมูล, Login/Logout
2. **Security & Boundary** — XSS, SQL Injection, ค่าขอบเขต
3. **Visual Regression** — จับภาพหน้าจอเปรียบเทียบ UI

###  สถาปัตยกรรมโค้ด (Page Object Model)

โครงสร้างใช้ **POM (Page Object Model)** เพื่อให้โค้ดอ่านง่ายและดูแลรักษาได้:

```
tests/
├── e2e/                        # Test Suites
│   ├── auth.spec.js            # Login ทั้งถูก ผิด และเจาะระบบ
│   ├── dashboard.spec.js       # เช็คตัวเลขสถิติ
│   ├── books.spec.js           # ISBN ซ้ำ, จำนวนติดลบ
│   ├── members.spec.js         # จัดการสมาชิก
│   ├── borrowing.spec.js       # ยืมคืน, ค่าปรับ, โควต้า
│   ├── reports.spec.js         # การออกรายงาน
│   └── visual.spec.js          # Visual Regression
│
pages/                          # Page Objects
├── LoginPage.js                # กรอก Username/Password
├── DashboardPage.js            # อ่านค่าสถิติ
├── BooksPage.js                # ค้นหา, เพิ่มหนังสือ
├── MembersPage.js              # เพิ่ม, ลบ สมาชิก
├── BorrowingPage.js            # ฟอร์มยืม/คืนหนังสือ
└── ReportsPage.js              # เช็คค่าปรับย้อนหลัง
```

###  Configuration (`playwright.config.js`)

| Setting | ค่า | คำอธิบาย |
|---------|-----|---------|
| `baseURL` | `http://localhost:8080` | URL หลักของระบบ |
| `screenshot` | `only-on-failure` | แคปภาพเมื่อเทสไม่ผ่าน |
| `video` | `retain-on-failure` | อัดวิดีโอเมื่อเทสไม่ผ่าน |
| `reporter` | `html` + `json` | ออกรายงาน 2 รูปแบบ |
| **Browsers** | Chromium, Firefox, WebKit | รองรับ Multi-browser |

###  คำสั่งรันเทส

```bash
# รันเทส E2E ทั้งหมด พร้อมดูผลเป็น HTML Report
npx playwright test tests/e2e --headed --reporter=html

# รันเฉพาะ Visual Regression
npx playwright test tests/e2e/visual.spec.js

# อัปเดต Visual Baseline (สร้างภาพต้นฉบับใหม่)
npx playwright test tests/e2e/visual.spec.js --update-snapshots

# Export ผลลัพธ์เป็น JSON
npx playwright test --reporter=json > test-results/results.json
```

###  ผลลัพธ์จากการรันเทส

| ไฟล์/โฟลเดอร์ | คำอธิบาย |
|---------------|---------|
| `test-results/results.json` | ข้อมูล Report ดิบ (JSON) |
| `playwright-report/` | HTML Report สำหรับดูผลแบบ Interactive |
| `visual.spec.js-snapshots/` | ภาพแคปเจอร์ UI สำหรับ Visual Comparison |
| `screenshots/` | ภาพจับหน้าจอเมื่อเทสล้มเหลว |

---

##  Troubleshooting

<details>
<summary><strong>Docker ไม่ทำงาน</strong></summary>

```bash
# หยุด containers
docker-compose down

# ลบ volumes (ข้อมูลจะหาย)
docker-compose down -v

# สร้างใหม่
docker-compose up -d
```
</details>

<details>
<summary><strong>เข้า phpMyAdmin ไม่ได้</strong></summary>

ลอง login ด้วย:
- Username: `library_user`
- Password: `library_pass`
- Database: `library_db`
</details>

<details>
<summary><strong>Port ซ้ำ</strong></summary>

แก้ไขในไฟล์ `docker-compose.yml`:
```yaml
ports:
  - "8082:80"  # เปลี่ยนจาก 8080:80
```
</details>

<details>
<summary><strong>Playwright รันไม่ได้</strong></summary>

```bash
# ตรวจสอบ Node.js version
node -v  # ต้อง >= 18

# ติดตั้ง browsers ใหม่
npx playwright install --with-deps

# ตรวจสอบว่า Docker กำลังทำงาน
docker-compose ps
```
</details>

---

##  เอกสารประกอบโปรเจกต์

| ไฟล์ | คำอธิบาย |
|------|---------|
| [`test-cases.xlsx`](test-case.xlsx) | รายการ Test Cases (TC001–TC050) |
| [`bugreport.md`](bugreport.md) | รายงาน Bug 15 รายการ |
| [`blackboxtest.md`](blackboxtest.md) | ผลทดสอบ Black Box |
| [`exploratorytest.md`](exploratorytest.md) | ผลทดสอบ Exploratory |

---

##  License

> ระบบนี้สร้างขึ้นเพื่อ **การศึกษาเท่านั้น** — ไม่เหมาะสำหรับใช้งานจริง (Production)
