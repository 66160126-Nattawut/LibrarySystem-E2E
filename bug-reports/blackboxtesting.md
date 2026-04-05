# Black Box Testing Execution & Bug Report

**Project:** Library Management System
**Testing Approach:** Black Box Testing (Functional, UI, Navigation, Edge Cases)
**Executed By:** Manual Tester
**Date:** 2026-04-04

---

## 1. Executive Summary (สรุปผลการทดสอบ)

จากการดำเนินการทดสอบแบบ Black Box Testing ตามเอกสาร Test Plan และ Test Cases ทั้งหมด 50 กรณี (ครอบคลุมโมดูล Auth, Member, Book, Borrow, Return, Search และ NFR) พบว่าระบบสามารถทำงานตาม Happy Path ได้บางส่วน แต่มีช่องโหว่ทาง Business Logic และกระบวนการ Validate ข้อมูลจำนวนมาก

- **รวม Test Cases ทั้งหมด:** 50
- **ทดสอบผ่าน (Passed):** 30 (60%)
- **ทดสอบไม่ผ่าน (Failed):** 20 (40%)

---

## 2. Test Execution Matrix (ผลการรัน Test Case แยกตามข้อ)

| TC ID     | Module      | Test Scenario                         | Status      | Linked Bug / Root Cause                                  |
| --------- | ----------- | ------------------------------------- | ----------- | -------------------------------------------------------- |
| TC001     | Auth        | Login success (Admin)                 | ✅ Pass     | -                                                        |
| TC002     | Auth        | Login success (Librarian)             | ✅ Pass     | -                                                        |
| TC003     | Auth        | Login fail (Wrong Password)           | ✅ Pass     | -                                                        |
| TC004     | Auth        | Login fail (Empty Fields)             | ✅ Pass     | -                                                        |
| **TC005** | **Auth**    | **Authorization Check**               | ❌ **Fail** | **BUG-006, BUG-016** (URL Bypass / Session Timeout)      |
| TC006     | Member      | Add Member (Student)                  | ✅ Pass     | -                                                        |
| TC007     | Member      | Add Member Fail (Duplicate Code)      | ✅ Pass     | -                                                        |
| TC008     | Member      | Add Member Fail (Missing Req)         | ✅ Pass     | -                                                        |
| TC009     | Member      | Edit Member Detail                    | ✅ Pass     | -                                                        |
| TC010     | Member      | Delete Member (Safe)                  | ✅ Pass     | -                                                        |
| **TC011** | **Member**  | **Delete Member (Has Active Borrow)** | ❌ **Fail** | **BUG-003** (ลบสมาชิกค้างยืมได้)                         |
| TC012     | Member      | View Member Dashboard                 | ✅ Pass     | -                                                        |
| TC013     | Book        | Add Book Success                      | ✅ Pass     | -                                                        |
| **TC014** | **Book**    | **Add Book Fail (Dup ISBN)**          | ❌ **Fail** | **BUG-008** (ระบบพัง Error 500 แทนที่จะแจ้งเตือน)        |
| TC015     | Book        | Edit Quantity                         | ✅ Pass     | -                                                        |
| TC016     | Book        | Delete Book (No History)              | ✅ Pass     | -                                                        |
| TC017     | Book        | Delete Book (Being Borrowed)          | ✅ Pass     | -                                                        |
| TC018     | Book        | Real-time Status Display              | ✅ Pass     | -                                                        |
| TC019     | Book        | Upload Book Artwork                   | ✅ Pass     | -                                                        |
| TC020     | Book        | Create Categories                     | ✅ Pass     | -                                                        |
| TC021     | Borrow      | Student Borrow 1 Book                 | ✅ Pass     | -                                                        |
| TC022     | Borrow      | Teacher Borrow 1 Book                 | ✅ Pass     | -                                                        |
| TC023     | Borrow      | Public Borrow 1 Book                  | ✅ Pass     | -                                                        |
| **TC024** | **Borrow**  | **Student Max Limit Block**           | ❌ **Fail** | **BUG-001** (ยืมเกินโควต้า 3 เล่มได้)                    |
| TC025     | Borrow      | Teacher Max Limit Block               | ✅ Pass     | -                                                        |
| TC026     | Borrow      | Public Max Limit Block                | ✅ Pass     | -                                                        |
| TC027     | Borrow      | Invalid Member Input                  | ✅ Pass     | -                                                        |
| **TC028** | **Borrow**  | **Borrow Out of Stock Book**          | ❌ **Fail** | **BUG-009** (จองหนังสือที่สถานะ Available ได้)           |
| TC029     | Borrow      | Block borrow on Fine                  | ✅ Pass     | -                                                        |
| TC030     | Borrow      | Consecutive Borrow                    | ✅ Pass     | -                                                        |
| TC031     | Return      | Return Before/On Due Date             | ✅ Pass     | -                                                        |
| **TC032** | **Return**  | **Return Late / Fine Calc**           | ❌ **Fail** | **BUG-007** (คำนวณวันดีเลย์ Timezone ผิด)                |
| **TC033** | **Return**  | **Return Late by >> 5 Days**          | ❌ **Fail** | **BUG-002** (ค่าปรับทะลุ Max Limit 200 บาท)              |
| TC034     | Fine        | Check Fine Accumulation               | ✅ Pass     | -                                                        |
| **TC035** | **Fine**    | **Pay Fine Completely / Input**       | ❌ **Fail** | **BUG-005** (ช่องจ่ายเงินรับค่าติดลบได้)                 |
| TC036     | Return      | Return Unborrowed Book                | ✅ Pass     | -                                                        |
| TC037     | Return      | Lost Book Handler                     | ✅ Pass     | -                                                        |
| TC038     | Search      | Exact Search                          | ✅ Pass     | -                                                        |
| TC039     | Search      | Keyword / Partial Search              | ✅ Pass     | -                                                        |
| **TC040** | **Search**  | **Search No Match / Filter**          | ❌ **Fail** | **BUG-015** (กด Clear Filter แล้วคำไม่หาย)               |
| TC041     | Search      | Search By Author / ISBN               | ✅ Pass     | -                                                        |
| **TC042** | **Limit**   | **Business Rules Extra Check**        | ❌ **Fail** | **BUG-010** (รับสมัครเด็กอายุต่ำกว่า 7 ปี)               |
| **TC043** | **Sec.**    | **Security / XSS Attack**             | ❌ **Fail** | **BUG-011** (เกิด XSS แจ้งเตือน Popup ได้)               |
| **TC044** | **Concur.** | **Double Borrow Attack**              | ❌ **Fail** | **BUG-004** (สต็อกติดลบเวลาแย่งยืม)                      |
| **TC045** | **UI/UX**   | **Responsiveness Check**              | ❌ **Fail** | **BUG-012, BUG-017** (จอตารางพัง, กราฟ Dashboard ทับกัน) |
| **TC046** | **UI/UX**   | **Color Contrast Check**              | ❌ **Fail** | **BUG-020** (ตัวอักษรปุ่มกลืนไปกับแสงพื้น)               |
| **TC047** | **UI/UX**   | **Toast Alert & Feedback**            | ❌ **Fail** | **BUG-018** (จอค้างโหลด ไม่มี Popup แจ้งเตือน)           |
| **TC048** | **UI/UX**   | **Dark Mode Display**                 | ❌ **Fail** | **BUG-014** (สี Font เมนูไม่อัพเดท กลืนไปกับความดำ)      |
| **TC049** | **UI/UX**   | **Button Loading State**              | ❌ **Fail** | **BUG-019** (ปุ่มไม่ติดสถานะ Loading ทำให้คนกดซ้ำ)       |
| **TC050** | **UI/UX**   | **Interactive Element Overlay**       | ❌ **Fail** | **BUG-013** (Tooltip ซ่อนแอบใต้ตาราง Z-Index พัง)        |

---

## 🐞 3. Defect & Bug Reports (สร้างจาก Test Case ที่ Failed)

นี่คือรายการ Bug Report ทั้ง 20 ข้อที่ตรวจพบด้วย Black Box Testing (อ้างอิงจากรหัสที่ Fail ด้านบน) จัดเรียงตามความรุนแรง:

### Critical Severity (3 ข้อ)

1. **BUG-001:** ระบบอนุญาตให้สมาชิกกลุ่ม Student ยืมหนังสือเกินโควต้าที่กำหนด _(จาก TC024)_
2. **BUG-003:** ลบสมาชิกออกจากระบบได้ทันที ทั้งที่สมาชิกมีหนังสือค้างยืม _(จาก TC011)_
3. **BUG-006:** Member ทั่วไป พิมพ์ URL ลัดเข้าหน้าตั้งค่าของ Admin ระบบได้ _(จาก TC005)_

### High Severity (3 ข้อ)

4. **BUG-002:** ค่าปรับสะสมไม่หยุดอยู่ที่ Max Limit (200 บาท) ตามเอกสาร BR-007 _(จาก TC033)_
5. **BUG-004:** หักสต็อกหนังสือจนติดลบเป็น -1 ได้ เมื่อมี Request เข้ามายืมพร้อมกัน _(จาก TC044)_
6. **BUG-005:** ช่องชำระค่าปรับสามารถใส่ค่าเป็นตัวเลขติดลบได้ ส่งผลต่อยอดหนี้รวม _(จาก TC035)_

### Medium Severity (7 ข้อ)

7. **BUG-007:** คืนหนังสือตอนดึก ระบบใช้ Timezone UTC ทำให้เกิดค่าปรับล่วงหน้า 1 วัน _(จาก TC032)_
8. **BUG-008:** เพิ่มหนังสือ ISBN ซ้ำ หน้าเว็บพัง Error 500 แทนที่จะแจ้งเตือน Validation สีแดง _(จาก TC014)_
9. **BUG-009:** อนุญาตให้กดจองหนังสือในเล่มที่สถานะเป็น Available ได้ (ปกติควรจองได้แค่เล่มที่ไม่อยู่) _(จาก TC028)_
10. **BUG-010:** ผู้ใช้งานอายุน้อยกว่า 7 ปี สมัครสมาชิกผ่าน (ละเมิด BR-014) _(จาก TC042)_
11. **BUG-011:** ช่อง Keyword ตรวจพบช่องโหว่ Stored/Reflected XSS ยิงสคริปต์ Alert ได้ _(จาก TC043)_
12. **BUG-016:** Session Timeout เกิดวัยผิดปกติ หลุดจากล็อกอินทุกๆ 5 นาทีแม้อยู่หน้าจอ _(จาก TC005)_
13. **BUG-018:** พิมพ์ Book ID ผิดตอนทำรายการจอง หน้าจอค้างไม่มี Notification หรือ Toast บอก _(จาก TC047)_
