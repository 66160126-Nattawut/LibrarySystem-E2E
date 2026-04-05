# Bug Report - Library Management System

**Prepared by**: Manual Tester  
**Total Bugs Found**: 20  
**Status**: Open

---

# 1. Bug Report: Student ยืมหนังสือเกินโควต้าที่กำหนด

## Bug Information

**Bug ID:** BUG-001  
**Title:** ระบบอนุญาตให้สมาชิกกลุ่ม Student ยืมหนังสือเกินโควต้าที่กำหนด (ทะลุลิมิต 3 เล่ม)  
**Reported By:** Manual Tester  
**Date Reported:** 2026-04-04  
**Module:** Borrow

---

## Classification

**Severity:** Critical  
**Priority:** P1 - แก้ในวันนี้  
**Bug Type:** Business Logic Error

---

## Environment

**Browser:** Chrome  
**OS:** Windows 11 / Docker  
**Database:** MySQL 8.0  
**URL:** http://localhost:8080/borrow  
**User Role:** Librarian

---

## Description

### Summary

ระบบอนุญาตให้สมาชิกกลุ่ม Student ทำรายการยืมหนังสือต่อได้ แม้ว่าจะยืมหนังสือครบ 3 เล่มตามโควต้าสูงสุดแล้ว

### Detailed Description

ตาม Business Rules (BR-001) สมาชิกกลุ่ม Student สามารถยืมหนังสือได้สูงสุด 3 เล่ม แต่เมื่อ Student มีรายการยืมอยู่ในระบบครบ 3 เล่ม ระบบไม่มีการ Block การทำรายการในเล่มที่ 4

### Expected Behavior

ระบบควรตรวจสอบโควต้าที่เหลือก่อนบรรทึกการยืม และแสดงข้อความ Error "ยืมเกินจำนวนที่กำหนด" พร้อมปฏิเสธการทำรายการ

### Actual Behavior

ระบบบันทึกรายการยืมเล่มที่ 4 สำเร็จ ทำให้ยอดรวมโควต้าของ Student กลายเป็น 4/3 เล่ม

---

## Steps to Reproduce

1. Login เข้าสู่ระบบด้วย Librarian
2. ไปที่เมนู "Borrow"
3. ใส่รหัสสมาชิก `M001` (Student) ซึ่งยืมหนังสืออยู่แล้ว 3 เล่ม
4. เลือกรหัสหนังสือเล่มใหม่และกดลูกศร "Borrow Book"

### Preconditions

- สมาชิก `M001` (ประเภท Student) ต้องมียอดค้างยืมในระบบ 3 เล่ม

---

## Test Data

**Input Data:**

```
Member Code: M001
Book ID: 1004 (Available = 1)
```

---

## Status

**Current Status:** New  
**Assigned To:** สมาชิกในทีม Dev

---

---

# 2. Bug Report: ค่าปรับสะสมเกิน Max Limit

## Bug Information

**Bug ID:** BUG-002  
**Title:** ค่าปรับสะสมไม่หยุดอยู่ที่ Max Limit (200 บาท) ตามที่ระบุใน BR-007  
**Reported By:** Manual Tester  
**Date Reported:** 2026-04-04  
**Module:** Return / Fine

---

## Classification

**Severity:** High  
**Priority:** P2 - แก้ในสัปดาห์นี้  
**Bug Type:** Business Logic Error / Financial Issue

---

## Environment

**Browser:** Chrome  
**OS:** Windows 11 / Docker  
**Database:** MySQL 8.0  
**URL:** http://localhost:8080/return  
**User Role:** Librarian

---

## Description

### Summary

ระบบคำนวณค่าปรับเกินเพดาน 200 บาทต่อเล่ม เมื่อสมาชิกคืนหนังสือล่าช้าเป็นเวลานาน

### Expected Behavior

ระบบควรเช็ค Limit ค่าปรับรวม (ตาม BR-007: ค่าปรับสูงสุดต่อเล่ม 200 บาท) หากค่าปรับสะสมเกิน 200 บาท ระบบควรแสดงผลลัพธ์เป็นค่าปรับ = 200 บาท

### Actual Behavior

ระบบคิดค่าปรับแบบเส้นตรงรายวันไปเรื่อยๆ ไม่มีที่สิ้นสุด เช่น เกิน 100 วัน โชว์ค่าปรับ 500 บาท

---

## Steps to Reproduce

1. เปลี่ยนเวลาจำลองของ Database/Server ให้หนังสือที่ยืมเลยกำหนดมา 100 วัน
2. Librarian นำหนังสือนั้นมารับคืนที่เมนู "Return"
3. สังเกตหน้าจอสรุปค่าปรับ

---

## Status

**Current Status:** New

---

---

# 3. Bug Report: ลบสมาชิกที่มีสถานะยืมหนังสือค้างได้

## Bug Information

**Bug ID:** BUG-003  
**Title:** ลบสมาชิกออกจากระบบได้ทันที แม้ว่าสมาชิกคนนั้นจะมีหนังสือค้างยืมอยู่  
**Reported By:** Manual Tester  
**Date Reported:** 2026-04-04  
**Module:** Member Management

---

## Classification

**Severity:** Critical  
**Priority:** P0 - แก้ทันที  
**Bug Type:** Data Validation Issue / Integrity Issue

---

## Environment

**Browser:** Firefox  
**OS:** macOS / Docker  
**Database:** MySQL 8.0  
**URL:** http://localhost:8080/members  
**User Role:** Admin

---

## Description

### Summary

ผู้ดูแลระบบสามารถกดลบ User ออกจากระบบได้แม้ User ผู้นั้นยังนำหนังสือมาคืนไม่ครบ ทำให้ข้อมูลในตารางยืม/หนังสือสูญเสียความสัมพันธ์อ้างอิง

### Expected Behavior

ระบบควรตรวจสอบ Constraint และไม่อนุญาตให้ลบ พร้อมแจ้งเตือน "ไม่สามารถลบได้เนื่องจากมีหนังสือค้างยืม"

### Actual Behavior

บัญชีผู้ใช้ถูกลบออกจากตาราง Users ทำให้หนังสือที่ถูกยืมกลายเป็น Orphan record ทันที

---

## Steps to Reproduce

1. Login ด้วยบัญชี Admin
2. ไปที่ Manage Members เลือกสมาชิก `M002` ที่กำลังยืมหนังสืออยู่ 1 เล่ม
3. กดปุ่ม Delete

---

---

# 4. Bug Report: Concurrency Issue หักสต็อกติดลบ

## Bug Information

**Bug ID:** BUG-004  
**Title:** หักสต็อกหนังสือจนติดลบได้ เมื่อมีหลาย Requests กดเข้ามายืมพร้อมกัน (Concurrency Issue)  
**Reported By:** Manual Tester  
**Date Reported:** 2026-04-04  
**Module:** Borrow / Database

---

## Classification

**Severity:** High  
**Priority:** P1  
**Bug Type:** Performance Issue / Concurrency Control

---

## Description

### Summary

เมื่อมีการกดยืมหนังสือเล่มเดียวกันในจังหวะเดียวกัน ระบบหักสต็อกพร้อมกันจนกลายเป็นยอดติดลบ

### Actual Behavior

ระบบยอมให้ยืมสำเร็จทั้ง 2 Requests แจ้งเตือน Available โชว์ผลเป็น `-1`

---

## Steps to Reproduce

1. เลือกหนังสือที่มี Available = 1
2. รัน Script Playwright ขอทำรายการยืมให้ User 2 คนพร้อมๆ กันในเสี้ยววินาที

---

---

# 5. Bug Report: ช่องชำระค่าปรับรับค่าติดลบ

## Bug Information

**Bug ID:** BUG-005  
**Title:** ช่องชำระค่าปรับสามารถใส่ค่าเป็นตัวเลขติดลบ (Negative value) ได้  
**Reported By:** Manual Tester  
**Date Reported:** 2026-04-04  
**Module:** Fine Payment

---

## Classification

**Severity:** High  
**Priority:** P2  
**Bug Type:** Data Validation Issue

---

## Description

### Summary

การป้อนค่าใน TextBox หน้าจ่ายค่าปรับไม่ได้ห้ามค่าที่ต่ำกว่าศูนย์ ส่งผลต่อยอดเงิน

### Actual Behavior

เมื่อใส่เงินติดลบ ยอดหนี้กลับเพิ่มขึ้น หรือระบบบันทึกความผิดพลาดทางบัญชี

---

## Steps to Reproduce

1. เข้าหน้าชำระค่าปรับของ M001 ที่มียอดค้าง 20 บาท
2. ระบุยอดเงินที่ชำระเป็น `-500` และกด Payment

---

---

# 6. Bug Report: Access Control Broken สำหรับ Member

## Bug Information

**Bug ID:** BUG-006  
**Title:** Member ทั่วไป (ไม่มีสิทธิ์ Admin) พิมพ์ URL ลัดเข้าหน้าตั้งค่าของระบบได้  
**Reported By:** Manual Tester  
**Bug Type:** Security Vulnerability

---

## Description

### Summary

ไม่มีการดัก Auth Guard/Role อย่างถูกต้องใน Route ของหน้าแอดมิน ทำให้ใครก็เข้าได้ถ้ารู้ URL

### Actual Behavior

Member ทั่วไปสามารถแก้ไข Rate ค่าปรับในหน้า Admin Config ได้

---

## Steps to Reproduce

1. สมัคร/Login ด้วย Account กลุ่ม Member ทั่วไป
2. พิมพ์ URL ท้ายเบราวเซอร์เป็น `/admin/settings`

---

---

# 7. Bug Report: คำนวณวันดีเลย์คาดเคลื่อนข้าม Timezone

## Bug Information

**Bug ID:** BUG-007  
**Title:** การคำนวณค่าปรับ คืนช่วงเที่ยงคืนระบบนับเป็นวันล่าช้าล่วงหน้าไป 1 วัน  
**Severity:** Medium  
**Bug Type:** Business Logic Error

---

## Description

### Actual Behavior

หนังสือครบกำหนดคืนวันที่ 4 ถ้านำมาคืนวันที่ 4 เวลา 23:30 หักว่า Local = TH(+7) แต่ Database มองเป็นเวลา UTC(เลยเที่ยงคืนเป็นวันที่ 5 ไปแล้ว) ระบบจะปรับเงินทันที

---

---

# 8. Bug Report: สร้างหนังสือ ISBN ซ้ำระบบพัง 500

## Bug Information

**Bug ID:** BUG-008  
**Title:** เพิ่มหนังสือเลข ISBN ซ้ำ ระบบหน้าเว็บพัง (Error 500)  
**Severity:** Medium  
**Bug Type:** UI/UX Issue / Data Validation Issue

---

## Description

### Actual Behavior

ระบบไม่ Validate ในฝั่ง Controller ทำให้โดน Database Constraint เตะกลับมาแล้วแสดงหน้าขาวพร้อม Error Code 500

---

## Steps to Reproduce

1. เพิ่มหนังสือ ISBN `1234567890` (มีอยู่แล้ว) เข้าไปใหม่
2. กด Save

---

---

# 9. Bug Report: สามารถ Reservation เล่ม Available

## Bug Information

**Bug ID:** BUG-009  
**Title:** ระบบอนุญาตให้จองหนังสือที่สถานะเป็น Available ได้  
**Severity:** Medium  
**Bug Type:** Business Logic Error

---

## Description

### Summary

หนังสือว่างอยู่ (Available) แทนที่หน้าเว็บจะกดเพื่อเดินไปหยิบยืมได้เลย กลับมีปุ่ม Reserve ให้กดค้างในระบบ

---

---

# 10. Bug Report: อายุผู้สมัครต่ำกว่า 7 ปีสมัครได้

## Bug Information

**Bug ID:** BUG-010  
**Title:** อนุญาตให้บันทึกสมาชิกที่อายุน้อยกว่า 7 ปี (ละเมิด BR-014)  
**Severity:** Medium  
**Bug Type:** Data Validation Issue

---

## Description

### Steps to Reproduce

1. หน้า Add Member
2. ใส่วันเกิด (Date of Birth) เป็นปีเมื่อ 2 ปีที่แล้ว
3. คลิกปุ่ม Submit
   > ผลลัพธ์: สมัครผ่าน

---

---

# 11. Bug Report: XSS Vulnerability ในหน้า Search

## Bug Information

**Bug ID:** BUG-011  
**Title:** ช่อง Keyword ค้นหาหนังสือรับอักขระพิเศษและเกิด Stored/Reflected XSS ได้  
**Severity:** Medium  
**Bug Type:** Security Vulnerability

---

## Description

### Actual Behavior

ไม่ได้ทำ Escaping บน Keyword ส่งผลให้ถูก Injection เข้าเครื่อง Client ได้
_Steps_ : กรอก `<script>alert(1)</script>` ในช่อง Search แล้วกดค้นหา มี popup ขึ้น

---

---

# 12. Bug Report: ตารางไม่ Responsive (Mobile View)

## Bug Information

**Bug ID:** BUG-012  
**Title:** หน้าผลลัพธ์การค้นหาหนังสือตารางหลุดกรอบบนมือถือ  
**Severity:** Low  
**Bug Type:** UI/UX Issue

---

## Description

เปิดผ่าน iPhone 12 Pro (390px Width) ตารางล้นขอบขวา และไม่สามารถ Slide ไปกดปุ่มเมนู Action ได้

---

---

# 13. Bug Report: Tooltip แสดงผลผิดเพี้ยนถูกซ่อน (Z-Index Issue)

## Bug Information

**Bug ID:** BUG-013  
**Title:** กล่อง Tooltip หรือ Dropdown ถูกซ่อนแอบอยู่ขัางล่างตาราง ไม่ลอยอยู่บนสุด  
**Severity:** Low  
**Bug Type:** UI/UX Issue / Styling

---

## Description

## เกิดปัญหา Z-Index ฝั่ง CSS เมื่อชี้เมาส์ที่ไอคอน "รายละเอียด" บริเวณตารางข้อมูล Tooltip ที่ควรจะลอยอยู่เหนือตารางกลับไปซุกอยู่ด้านหลังมองไม่เห็นข้อความ

---

# 14. Bug Report: Dark Mode อ่านยาก

## Bug Information

**Bug ID:** BUG-014  
**Title:** ตัวหนังสือเมนู (Sidebar Navigation) อ่านยากเมื่อปรับระบบเป็น Dark Mode  
**Severity:** Low  
**Bug Type:** UI/UX Issue

---

## Description

สี Font Contrast ยังเป็นสีเทาเข้มเหมือนกลืนไปกับสีดำของ Theme

---

---

# 15. Bug Report: ปุ่ม Clear Filter ไม่ล้างข้อมูล

## Bug Information

**Bug ID:** BUG-015  
**Title:** ปุ่ม "Clear Filter" ในหน้าค้นหาไม่ล้างค่า Keyword ใน Textbox  
**Reported By:** Manual Tester  
**Date Reported:** 2026-04-04  
**Module:** Search

---

## Classification

**Severity:** Low  
**Priority:** P3 - แก้ในอนาคต  
**Bug Type:** UI/UX Issue

---

## Environment

**Browser:** Chrome / Edge  
**OS:** Windows 11  
**URL:** http://localhost:8080/books  
**User Role:** Member / Librarian

---

## Description

### Summary

พอกดล้างค่าค้นหา ตารางกลับมาแสดงหนังสือครบทุกเล่ม ถือว่าสำเร็จ แต่ค่า Keyword "Python" ในกล่อง input ยังคาอยู่

### Expected Behavior

ควรใช้คำสั่ง `input.value = ''` ล้างกล่องค้นหาให้สะอาดเกลี้ยงเกลา

### Actual Behavior

ตารางถูกรีเซ็ต แต่ข้อความ "Python" ยังคือกวนใจสายตาคนใช้งาน

---

## Steps to Reproduce

1. เข้าหน้าค้นหาหนังสือ กรอกคำว่า "Python" ลงไปแล้วกดค้นหา
2. กดปุ่ม "Clear Filter" เพื่อล้างการค้นหาทั้งหมด

---

## Status

**Current Status:** Confirmed  
**Assigned To:** Lead Test

---

---

# 16. Bug Report: Session Timeout เกิดเร็วผิดปกติ

## Bug Information

**Bug ID:** BUG-016  
**Title:** Session Timeout หลุดจากระบบแม้อยู่หน้าจอและขยับเมาส์ตลอดเวลา  
**Reported By:** Manual Tester  
**Module:** Authentication

---

## Classification

**Severity:** Medium  
**Bug Type:** Configuration Issue

---

## Description

### Actual Behavior

ล็อกอินเข้าใช้งานระบบไปเพียง 5 นาที Session หมดอายุและถูกล็อกเอาต์ทันที ทำให้พิมพ์ข้อมูลสมาชิกค้างไว้แล้วข้อมูลหาย

---

---

# 17. Bug Report: กราฟหน้า Dashboard ซ้อนทับกันบนหน้าจอเล็ก (UI)

## Bug Information

**Bug ID:** BUG-017  
**Title:** กราฟสถิติบนหน้า Dashboard ขยายซ้อนทับกันจนอ่านไม่ออก  
**Module:** Dashboard

---

## Classification

**Severity:** Low  
**Bug Type:** UI/UX Issue / Responsiveness

---

## Description

### Actual Behavior

Component กราฟแท่งจัดตัวไม่ Responsive ทำให้เปิดดูในหน้าจอ Tablet แล้วกราฟทะลุขอบเขตของ Card ยืดซ้อนทับตัวหนังสืออื่นๆ

---

---

# 18. Bug Report: ไม่แสดงแจ้งเตือน Invalid ID เมื่อจองหนังสือ

## Bug Information

**Bug ID:** BUG-018  
**Title:** พิมพ์ Book ID ที่ไม่มีอยู่จริงเพื่อจอง ระบบแสดงหน้าจอดาวน์โหลดค้าง  
**Module:** Reservation

---

## Classification

**Severity:** Medium  
**Bug Type:** UI/UX Issue / Data Validation Issue

---

## Description

### Actual Behavior

ไม่มี Toast Notification หรือ Alert แจ้งเตือนเมื่อคีย์รหัสหนังสือผิด ระบบโหลดซ้ำไปเรื่อยๆ

---

---

# 19. Bug Report: ปุ่ม Submit หน้าฟอร์มไม่มีสถานะ Loading Spinner

## Bug Information

**Bug ID:** BUG-019  
**Title:** กด Submit การบันทึกต่างๆ ไม่มี Loading Spinner ทำให้ผู้ใช้อาจกดเบิ้ลซ้ำรัวๆ  
**Module:** UI Components

---

## Classification

**Severity:** Low  
**Bug Type:** UI/UX Issue

---

## Description

### Actual Behavior

เมื่อคลิกกดปุ่มบันทึกข้อมูล (Save) ปุ่มไม่มีการแสดงสถานะกำลังโหลด (Spinner) และไม่ถูก Disable อย่างรวดเร็ว ทำให้พฤติกรรมผู้ใช้เผลอกดซ้ำ (Double Click) ส่ง Request ค้าง

---

---

# 20. Bug Report: สีอักษรปุ่มเพิ่มหนังสือกลืนกับพื้นหลัง

## Bug Information

**Bug ID:** BUG-020  
**Title:** ตัวอักษรบนปุ่ม "เพิ่มหนังสือ" สีจาง (Contrast ต่ำ) มองเห็นยาก  
**Module:** Book Management UI

---

## Classification

**Severity:** Low  
**Bug Type:** UI/UX Issue / Accessibility

---

## Description

### Actual Behavior

ความเข้มสีอักษรขาวบนพื้นเหลืองอ่อน Contrast Ratio ไม่ได้มาตรฐาน ทำให้ผู้อ่านสายตาปกติหรือมีอายุมองหาปุ่มไม่พบ

---
