# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: members.spec.js >> Member Management (TC006 - TC012) >> TC010: Delete Member (Safe)
- Location: tests\e2e\members.spec.js:84:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('table tbody tr').filter({ hasText: 'Delete-Safe-1775444235437' }).locator('a, button').filter({ hasText: /Delete|ลบ/i }).first()

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "📚 Library System" [ref=e4]:
        - /url: index.php
      - generic [ref=e5]:
        - list [ref=e6]:
          - listitem [ref=e7]:
            - link "Dashboard" [ref=e8]:
              - /url: index.php
          - listitem [ref=e9]:
            - link "Books" [ref=e10]:
              - /url: books.php
          - listitem [ref=e11]:
            - link "Members" [ref=e12]:
              - /url: members.php
          - listitem [ref=e13]:
            - link "Borrow" [ref=e14]:
              - /url: borrow.php
          - listitem [ref=e15]:
            - link "Return" [ref=e16]:
              - /url: return.php
          - listitem [ref=e17]:
            - link "Reports" [ref=e18]:
              - /url: reports.php
        - list [ref=e19]:
          - listitem [ref=e20]:
            - button "System Administrator" [ref=e21] [cursor=pointer]
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "Members Management" [level=2] [ref=e24]
      - button "Add New Member" [ref=e25] [cursor=pointer]
    - table [ref=e29]:
      - rowgroup [ref=e30]:
        - row "Member Code Full Name Email Phone Type Max Books Status Registration" [ref=e31]:
          - columnheader "Member Code" [ref=e32]
          - columnheader "Full Name" [ref=e33]
          - columnheader "Email" [ref=e34]
          - columnheader "Phone" [ref=e35]
          - columnheader "Type" [ref=e36]
          - columnheader "Max Books" [ref=e37]
          - columnheader "Status" [ref=e38]
          - columnheader "Registration" [ref=e39]
      - rowgroup [ref=e40]:
        - row "M001 สมชาย ใจดี somchai@email.com 081-234-5678 Student 3 Active 2024-01-15" [ref=e41]:
          - cell "M001" [ref=e42]
          - cell "สมชาย ใจดี" [ref=e43]
          - cell "somchai@email.com" [ref=e44]
          - cell "081-234-5678" [ref=e45]
          - cell "Student" [ref=e46]:
            - generic [ref=e47]: Student
          - cell "3" [ref=e48]
          - cell "Active" [ref=e49]:
            - generic [ref=e50]: Active
          - cell "2024-01-15" [ref=e51]
        - row "M002 สมหญิง รักหนังสือ somying@email.com 082-345-6789 Student 3 Active 2024-01-20" [ref=e52]:
          - cell "M002" [ref=e53]
          - cell "สมหญิง รักหนังสือ" [ref=e54]
          - cell "somying@email.com" [ref=e55]
          - cell "082-345-6789" [ref=e56]
          - cell "Student" [ref=e57]:
            - generic [ref=e58]: Student
          - cell "3" [ref=e59]
          - cell "Active" [ref=e60]:
            - generic [ref=e61]: Active
          - cell "2024-01-20" [ref=e62]
        - row "M003 ดร.วิชัย อาจารย์ wichai@email.com 083-456-7890 Teacher 5 Active 2024-02-01" [ref=e63]:
          - cell "M003" [ref=e64]
          - cell "ดร.วิชัย อาจารย์" [ref=e65]
          - cell "wichai@email.com" [ref=e66]
          - cell "083-456-7890" [ref=e67]
          - cell "Teacher" [ref=e68]:
            - generic [ref=e69]: Teacher
          - cell "5" [ref=e70]
          - cell "Active" [ref=e71]:
            - generic [ref=e72]: Active
          - cell "2024-02-01" [ref=e73]
        - row "M004 นางสาวมะลิ ทั่วไป mali@email.com 084-567-8901 Public 2 Active 2024-02-10" [ref=e74]:
          - cell "M004" [ref=e75]
          - cell "นางสาวมะลิ ทั่วไป" [ref=e76]
          - cell "mali@email.com" [ref=e77]
          - cell "084-567-8901" [ref=e78]
          - cell "Public" [ref=e79]:
            - generic [ref=e80]: Public
          - cell "2" [ref=e81]
          - cell "Active" [ref=e82]:
            - generic [ref=e83]: Active
          - cell "2024-02-10" [ref=e84]
        - row "M005 นายทดสอบ บั๊กเกอร์ test@email.com 085-678-9012 Student 3 Active 2024-03-01" [ref=e85]:
          - cell "M005" [ref=e86]
          - cell "นายทดสอบ บั๊กเกอร์" [ref=e87]
          - cell "test@email.com" [ref=e88]
          - cell "085-678-9012" [ref=e89]
          - cell "Student" [ref=e90]:
            - generic [ref=e91]: Student
          - cell "3" [ref=e92]
          - cell "Active" [ref=e93]:
            - generic [ref=e94]: Active
          - cell "2024-03-01" [ref=e95]
        - row "M039844 Student-Member-1775444039844 student@mail.com 0812345678 Student 3 Active 2026-04-06" [ref=e96]:
          - cell "M039844" [ref=e97]
          - cell "Student-Member-1775444039844" [ref=e98]
          - cell "student@mail.com" [ref=e99]
          - cell "0812345678" [ref=e100]
          - cell "Student" [ref=e101]:
            - generic [ref=e102]: Student
          - cell "3" [ref=e103]
          - cell "Active" [ref=e104]:
            - generic [ref=e105]: Active
          - cell "2026-04-06" [ref=e106]
        - row "M042564 Delete-Safe-1775444042564 del@mail.com 0800000000 Student 3 Active 2026-04-06" [ref=e107]:
          - cell "M042564" [ref=e108]
          - cell "Delete-Safe-1775444042564" [ref=e109]
          - cell "del@mail.com" [ref=e110]
          - cell "0800000000" [ref=e111]
          - cell "Student" [ref=e112]:
            - generic [ref=e113]: Student
          - cell "3" [ref=e114]
          - cell "Active" [ref=e115]:
            - generic [ref=e116]: Active
          - cell "2026-04-06" [ref=e117]
        - row "M045780 Student-Member-1775418045780 student@mail.com 0812345678 Student 3 Active 2026-04-05" [ref=e118]:
          - cell "M045780" [ref=e119]
          - cell "Student-Member-1775418045780" [ref=e120]
          - cell "student@mail.com" [ref=e121]
          - cell "0812345678" [ref=e122]
          - cell "Student" [ref=e123]:
            - generic [ref=e124]: Student
          - cell "3" [ref=e125]
          - cell "Active" [ref=e126]:
            - generic [ref=e127]: Active
          - cell "2026-04-05" [ref=e128]
        - row "M047233 Student-Member-1775443047233 student@mail.com 0812345678 Student 3 Active 2026-04-06" [ref=e129]:
          - cell "M047233" [ref=e130]
          - cell "Student-Member-1775443047233" [ref=e131]
          - cell "student@mail.com" [ref=e132]
          - cell "0812345678" [ref=e133]
          - cell "Student" [ref=e134]:
            - generic [ref=e135]: Student
          - cell "3" [ref=e136]
          - cell "Active" [ref=e137]:
            - generic [ref=e138]: Active
          - cell "2026-04-06" [ref=e139]
        - row "M047645 Delete-Safe-1775418047645 del@mail.com 0800000000 Student 3 Active 2026-04-05" [ref=e140]:
          - cell "M047645" [ref=e141]
          - cell "Delete-Safe-1775418047645" [ref=e142]
          - cell "del@mail.com" [ref=e143]
          - cell "0800000000" [ref=e144]
          - cell "Student" [ref=e145]:
            - generic [ref=e146]: Student
          - cell "3" [ref=e147]
          - cell "Active" [ref=e148]:
            - generic [ref=e149]: Active
          - cell "2026-04-05" [ref=e150]
        - row "M049083 Delete-Safe-1775443049083 del@mail.com 0800000000 Student 3 Active 2026-04-06" [ref=e151]:
          - cell "M049083" [ref=e152]
          - cell "Delete-Safe-1775443049083" [ref=e153]
          - cell "del@mail.com" [ref=e154]
          - cell "0800000000" [ref=e155]
          - cell "Student" [ref=e156]:
            - generic [ref=e157]: Student
          - cell "3" [ref=e158]
          - cell "Active" [ref=e159]:
            - generic [ref=e160]: Active
          - cell "2026-04-06" [ref=e161]
        - row "M051044 Test Invalid Phone testphone@mail.com ABCDEFGHIJ Student 3 Active 2026-04-05" [ref=e162]:
          - cell "M051044" [ref=e163]
          - cell "Test Invalid Phone" [ref=e164]
          - cell "testphone@mail.com" [ref=e165]
          - cell "ABCDEFGHIJ" [ref=e166]
          - cell "Student" [ref=e167]:
            - generic [ref=e168]: Student
          - cell "3" [ref=e169]
          - cell "Active" [ref=e170]:
            - generic [ref=e171]: Active
          - cell "2026-04-05" [ref=e172]
        - row "M053354 Student-Member-1775441053354 student@mail.com 0812345678 Student 3 Active 2026-04-06" [ref=e173]:
          - cell "M053354" [ref=e174]
          - cell "Student-Member-1775441053354" [ref=e175]
          - cell "student@mail.com" [ref=e176]
          - cell "0812345678" [ref=e177]
          - cell "Student" [ref=e178]:
            - generic [ref=e179]: Student
          - cell "3" [ref=e180]
          - cell "Active" [ref=e181]:
            - generic [ref=e182]: Active
          - cell "2026-04-06" [ref=e183]
        - row "M055473 Delete-Safe-1775441055473 del@mail.com 0800000000 Student 3 Active 2026-04-06" [ref=e184]:
          - cell "M055473" [ref=e185]
          - cell "Delete-Safe-1775441055473" [ref=e186]
          - cell "del@mail.com" [ref=e187]
          - cell "0800000000" [ref=e188]
          - cell "Student" [ref=e189]:
            - generic [ref=e190]: Student
          - cell "3" [ref=e191]
          - cell "Active" [ref=e192]:
            - generic [ref=e193]: Active
          - cell "2026-04-06" [ref=e194]
        - row "M099094 Student-Member-1775443099094 student@mail.com 0812345678 Student 3 Active 2026-04-06" [ref=e195]:
          - cell "M099094" [ref=e196]
          - cell "Student-Member-1775443099094" [ref=e197]
          - cell "student@mail.com" [ref=e198]
          - cell "0812345678" [ref=e199]
          - cell "Student" [ref=e200]:
            - generic [ref=e201]: Student
          - cell "3" [ref=e202]
          - cell "Active" [ref=e203]:
            - generic [ref=e204]: Active
          - cell "2026-04-06" [ref=e205]
        - row "M101445 Delete-Safe-1775443101445 del@mail.com 0800000000 Student 3 Active 2026-04-06" [ref=e206]:
          - cell "M101445" [ref=e207]
          - cell "Delete-Safe-1775443101445" [ref=e208]
          - cell "del@mail.com" [ref=e209]
          - cell "0800000000" [ref=e210]
          - cell "Student" [ref=e211]:
            - generic [ref=e212]: Student
          - cell "3" [ref=e213]
          - cell "Active" [ref=e214]:
            - generic [ref=e215]: Active
          - cell "2026-04-06" [ref=e216]
        - row "M106159 Student-Member-1775441106159 student@mail.com 0812345678 Student 3 Active 2026-04-06" [ref=e217]:
          - cell "M106159" [ref=e218]
          - cell "Student-Member-1775441106159" [ref=e219]
          - cell "student@mail.com" [ref=e220]
          - cell "0812345678" [ref=e221]
          - cell "Student" [ref=e222]:
            - generic [ref=e223]: Student
          - cell "3" [ref=e224]
          - cell "Active" [ref=e225]:
            - generic [ref=e226]: Active
          - cell "2026-04-06" [ref=e227]
        - row "M108531 Delete-Safe-1775441108531 del@mail.com 0800000000 Student 3 Active 2026-04-06" [ref=e228]:
          - cell "M108531" [ref=e229]
          - cell "Delete-Safe-1775441108531" [ref=e230]
          - cell "del@mail.com" [ref=e231]
          - cell "0800000000" [ref=e232]
          - cell "Student" [ref=e233]:
            - generic [ref=e234]: Student
          - cell "3" [ref=e235]
          - cell "Active" [ref=e236]:
            - generic [ref=e237]: Active
          - cell "2026-04-06" [ref=e238]
        - row "M115088 Student-Member-1775418115088 student@mail.com 0812345678 Student 3 Active 2026-04-05" [ref=e239]:
          - cell "M115088" [ref=e240]
          - cell "Student-Member-1775418115088" [ref=e241]
          - cell "student@mail.com" [ref=e242]
          - cell "0812345678" [ref=e243]
          - cell "Student" [ref=e244]:
            - generic [ref=e245]: Student
          - cell "3" [ref=e246]
          - cell "Active" [ref=e247]:
            - generic [ref=e248]: Active
          - cell "2026-04-05" [ref=e249]
        - row "M117186 Delete-Safe-1775418117186 del@mail.com 0800000000 Student 3 Active 2026-04-05" [ref=e250]:
          - cell "M117186" [ref=e251]
          - cell "Delete-Safe-1775418117186" [ref=e252]
          - cell "del@mail.com" [ref=e253]
          - cell "0800000000" [ref=e254]
          - cell "Student" [ref=e255]:
            - generic [ref=e256]: Student
          - cell "3" [ref=e257]
          - cell "Active" [ref=e258]:
            - generic [ref=e259]: Active
          - cell "2026-04-05" [ref=e260]
        - row "M121104 Test Invalid Phone testphone@mail.com ABCDEFGHIJ Student 3 Active 2026-04-05" [ref=e261]:
          - cell "M121104" [ref=e262]
          - cell "Test Invalid Phone" [ref=e263]
          - cell "testphone@mail.com" [ref=e264]
          - cell "ABCDEFGHIJ" [ref=e265]
          - cell "Student" [ref=e266]:
            - generic [ref=e267]: Student
          - cell "3" [ref=e268]
          - cell "Active" [ref=e269]:
            - generic [ref=e270]: Active
          - cell "2026-04-05" [ref=e271]
        - row "M149614 Student-Member-1775443149614 student@mail.com 0812345678 Student 3 Active 2026-04-06" [ref=e272]:
          - cell "M149614" [ref=e273]
          - cell "Student-Member-1775443149614" [ref=e274]
          - cell "student@mail.com" [ref=e275]
          - cell "0812345678" [ref=e276]
          - cell "Student" [ref=e277]:
            - generic [ref=e278]: Student
          - cell "3" [ref=e279]
          - cell "Active" [ref=e280]:
            - generic [ref=e281]: Active
          - cell "2026-04-06" [ref=e282]
        - row "M153020 Delete-Safe-1775443153020 del@mail.com 0800000000 Student 3 Active 2026-04-06" [ref=e283]:
          - cell "M153020" [ref=e284]
          - cell "Delete-Safe-1775443153020" [ref=e285]
          - cell "del@mail.com" [ref=e286]
          - cell "0800000000" [ref=e287]
          - cell "Student" [ref=e288]:
            - generic [ref=e289]: Student
          - cell "3" [ref=e290]
          - cell "Active" [ref=e291]:
            - generic [ref=e292]: Active
          - cell "2026-04-06" [ref=e293]
        - row "M156658 Student-Member-1775441156658 student@mail.com 0812345678 Student 3 Active 2026-04-06" [ref=e294]:
          - cell "M156658" [ref=e295]
          - cell "Student-Member-1775441156658" [ref=e296]
          - cell "student@mail.com" [ref=e297]
          - cell "0812345678" [ref=e298]
          - cell "Student" [ref=e299]:
            - generic [ref=e300]: Student
          - cell "3" [ref=e301]
          - cell "Active" [ref=e302]:
            - generic [ref=e303]: Active
          - cell "2026-04-06" [ref=e304]
        - row "M159141 Delete-Safe-1775441159141 del@mail.com 0800000000 Student 3 Active 2026-04-06" [ref=e305]:
          - cell "M159141" [ref=e306]
          - cell "Delete-Safe-1775441159141" [ref=e307]
          - cell "del@mail.com" [ref=e308]
          - cell "0800000000" [ref=e309]
          - cell "Student" [ref=e310]:
            - generic [ref=e311]: Student
          - cell "3" [ref=e312]
          - cell "Active" [ref=e313]:
            - generic [ref=e314]: Active
          - cell "2026-04-06" [ref=e315]
        - row "M172680 Delete-Safe-1775444172680 del@mail.com 0800000000 Student 3 Active 2026-04-06" [ref=e316]:
          - cell "M172680" [ref=e317]
          - cell "Delete-Safe-1775444172680" [ref=e318]
          - cell "del@mail.com" [ref=e319]
          - cell "0800000000" [ref=e320]
          - cell "Student" [ref=e321]:
            - generic [ref=e322]: Student
          - cell "3" [ref=e323]
          - cell "Active" [ref=e324]:
            - generic [ref=e325]: Active
          - cell "2026-04-06" [ref=e326]
        - row "M183421 Student-Member-1775418183421 student@mail.com 0812345678 Student 3 Active 2026-04-05" [ref=e327]:
          - cell "M183421" [ref=e328]
          - cell "Student-Member-1775418183421" [ref=e329]
          - cell "student@mail.com" [ref=e330]
          - cell "0812345678" [ref=e331]
          - cell "Student" [ref=e332]:
            - generic [ref=e333]: Student
          - cell "3" [ref=e334]
          - cell "Active" [ref=e335]:
            - generic [ref=e336]: Active
          - cell "2026-04-05" [ref=e337]
        - row "M185020 Delete-Safe-1775418185020 del@mail.com 0800000000 Student 3 Active 2026-04-05" [ref=e338]:
          - cell "M185020" [ref=e339]
          - cell "Delete-Safe-1775418185020" [ref=e340]
          - cell "del@mail.com" [ref=e341]
          - cell "0800000000" [ref=e342]
          - cell "Student" [ref=e343]:
            - generic [ref=e344]: Student
          - cell "3" [ref=e345]
          - cell "Active" [ref=e346]:
            - generic [ref=e347]: Active
          - cell "2026-04-05" [ref=e348]
        - row "M189635 Test Invalid Phone testphone@mail.com ABCDEFGHIJ Student 3 Active 2026-04-05" [ref=e349]:
          - cell "M189635" [ref=e350]
          - cell "Test Invalid Phone" [ref=e351]
          - cell "testphone@mail.com" [ref=e352]
          - cell "ABCDEFGHIJ" [ref=e353]
          - cell "Student" [ref=e354]:
            - generic [ref=e355]: Student
          - cell "3" [ref=e356]
          - cell "Active" [ref=e357]:
            - generic [ref=e358]: Active
          - cell "2026-04-05" [ref=e359]
        - row "M232967 Student-Member-1775444232967 student@mail.com 0812345678 Student 3 Active 2026-04-06" [ref=e360]:
          - cell "M232967" [ref=e361]
          - cell "Student-Member-1775444232967" [ref=e362]
          - cell "student@mail.com" [ref=e363]
          - cell "0812345678" [ref=e364]
          - cell "Student" [ref=e365]:
            - generic [ref=e366]: Student
          - cell "3" [ref=e367]
          - cell "Active" [ref=e368]:
            - generic [ref=e369]: Active
          - cell "2026-04-06" [ref=e370]
        - row "M235437 Delete-Safe-1775444235437 del@mail.com 0800000000 Student 3 Active 2026-04-06" [ref=e371]:
          - cell "M235437" [ref=e372]
          - cell "Delete-Safe-1775444235437" [ref=e373]
          - cell "del@mail.com" [ref=e374]
          - cell "0800000000" [ref=e375]
          - cell "Student" [ref=e376]:
            - generic [ref=e377]: Student
          - cell "3" [ref=e378]
          - cell "Active" [ref=e379]:
            - generic [ref=e380]: Active
          - cell "2026-04-06" [ref=e381]
        - row "M414054 Student-Member-1775417414054 student@mail.com 0812345678 Student 3 Active 2026-04-05" [ref=e382]:
          - cell "M414054" [ref=e383]
          - cell "Student-Member-1775417414054" [ref=e384]
          - cell "student@mail.com" [ref=e385]
          - cell "0812345678" [ref=e386]
          - cell "Student" [ref=e387]:
            - generic [ref=e388]: Student
          - cell "3" [ref=e389]
          - cell "Active" [ref=e390]:
            - generic [ref=e391]: Active
          - cell "2026-04-05" [ref=e392]
        - row "M415993 Delete-Safe-1775417415993 del@mail.com 0800000000 Student 3 Active 2026-04-05" [ref=e393]:
          - cell "M415993" [ref=e394]
          - cell "Delete-Safe-1775417415993" [ref=e395]
          - cell "del@mail.com" [ref=e396]
          - cell "0800000000" [ref=e397]
          - cell "Student" [ref=e398]:
            - generic [ref=e399]: Student
          - cell "3" [ref=e400]
          - cell "Active" [ref=e401]:
            - generic [ref=e402]: Active
          - cell "2026-04-05" [ref=e403]
        - row "M419609 Test Invalid Phone testphone@mail.com ABCDEFGHIJ Student 3 Active 2026-04-05" [ref=e404]:
          - cell "M419609" [ref=e405]
          - cell "Test Invalid Phone" [ref=e406]
          - cell "testphone@mail.com" [ref=e407]
          - cell "ABCDEFGHIJ" [ref=e408]
          - cell "Student" [ref=e409]:
            - generic [ref=e410]: Student
          - cell "3" [ref=e411]
          - cell "Active" [ref=e412]:
            - generic [ref=e413]: Active
          - cell "2026-04-05" [ref=e414]
        - row "M489296 Student-Member-1775417489296 student@mail.com 0812345678 Student 3 Active 2026-04-05" [ref=e415]:
          - cell "M489296" [ref=e416]
          - cell "Student-Member-1775417489296" [ref=e417]
          - cell "student@mail.com" [ref=e418]
          - cell "0812345678" [ref=e419]
          - cell "Student" [ref=e420]:
            - generic [ref=e421]: Student
          - cell "3" [ref=e422]
          - cell "Active" [ref=e423]:
            - generic [ref=e424]: Active
          - cell "2026-04-05" [ref=e425]
        - row "M491022 Delete-Safe-1775417491022 del@mail.com 0800000000 Student 3 Active 2026-04-05" [ref=e426]:
          - cell "M491022" [ref=e427]
          - cell "Delete-Safe-1775417491022" [ref=e428]
          - cell "del@mail.com" [ref=e429]
          - cell "0800000000" [ref=e430]
          - cell "Student" [ref=e431]:
            - generic [ref=e432]: Student
          - cell "3" [ref=e433]
          - cell "Active" [ref=e434]:
            - generic [ref=e435]: Active
          - cell "2026-04-05" [ref=e436]
        - row "M495234 Test Invalid Phone testphone@mail.com ABCDEFGHIJ Student 3 Active 2026-04-05" [ref=e437]:
          - cell "M495234" [ref=e438]
          - cell "Test Invalid Phone" [ref=e439]
          - cell "testphone@mail.com" [ref=e440]
          - cell "ABCDEFGHIJ" [ref=e441]
          - cell "Student" [ref=e442]:
            - generic [ref=e443]: Student
          - cell "3" [ref=e444]
          - cell "Active" [ref=e445]:
            - generic [ref=e446]: Active
          - cell "2026-04-05" [ref=e447]
        - row "M517793 Test-Member-1775420517793 test@mail.com 0812345678 Student 3 Active 2026-04-05" [ref=e448]:
          - cell "M517793" [ref=e449]
          - cell "Test-Member-1775420517793" [ref=e450]
          - cell "test@mail.com" [ref=e451]
          - cell "0812345678" [ref=e452]
          - cell "Student" [ref=e453]:
            - generic [ref=e454]: Student
          - cell "3" [ref=e455]
          - cell "Active" [ref=e456]:
            - generic [ref=e457]: Active
          - cell "2026-04-05" [ref=e458]
        - row "M523396 Invalid-Email-User not-an-email 0812345678 Student 3 Active 2026-04-05" [ref=e459]:
          - cell "M523396" [ref=e460]
          - cell "Invalid-Email-User" [ref=e461]
          - cell "not-an-email" [ref=e462]
          - cell "0812345678" [ref=e463]
          - cell "Student" [ref=e464]:
            - generic [ref=e465]: Student
          - cell "3" [ref=e466]
          - cell "Active" [ref=e467]:
            - generic [ref=e468]: Active
          - cell "2026-04-05" [ref=e469]
        - row "M526729 Teacher-Test-1775420526729 teacher@mail.com 0812345678 Teacher 3 Active 2026-04-05" [ref=e470]:
          - cell "M526729" [ref=e471]
          - cell "Teacher-Test-1775420526729" [ref=e472]
          - cell "teacher@mail.com" [ref=e473]
          - cell "0812345678" [ref=e474]
          - cell "Teacher" [ref=e475]:
            - generic [ref=e476]: Teacher
          - cell "3" [ref=e477]
          - cell "Active" [ref=e478]:
            - generic [ref=e479]: Active
          - cell "2026-04-05" [ref=e480]
        - row "M563088 Student-Member-1775417563088 student@mail.com 0812345678 Student 3 Active 2026-04-05" [ref=e481]:
          - cell "M563088" [ref=e482]
          - cell "Student-Member-1775417563088" [ref=e483]
          - cell "student@mail.com" [ref=e484]
          - cell "0812345678" [ref=e485]
          - cell "Student" [ref=e486]:
            - generic [ref=e487]: Student
          - cell "3" [ref=e488]
          - cell "Active" [ref=e489]:
            - generic [ref=e490]: Active
          - cell "2026-04-05" [ref=e491]
        - row "M564053 Delete-Safe-1775417564053 del@mail.com 0800000000 Student 3 Active 2026-04-05" [ref=e492]:
          - cell "M564053" [ref=e493]
          - cell "Delete-Safe-1775417564053" [ref=e494]
          - cell "del@mail.com" [ref=e495]
          - cell "0800000000" [ref=e496]
          - cell "Student" [ref=e497]:
            - generic [ref=e498]: Student
          - cell "3" [ref=e499]
          - cell "Active" [ref=e500]:
            - generic [ref=e501]: Active
          - cell "2026-04-05" [ref=e502]
        - row "M569818 Student-Member-1775436569818 student@mail.com 0812345678 Student 3 Active 2026-04-06" [ref=e503]:
          - cell "M569818" [ref=e504]
          - cell "Student-Member-1775436569818" [ref=e505]
          - cell "student@mail.com" [ref=e506]
          - cell "0812345678" [ref=e507]
          - cell "Student" [ref=e508]:
            - generic [ref=e509]: Student
          - cell "3" [ref=e510]
          - cell "Active" [ref=e511]:
            - generic [ref=e512]: Active
          - cell "2026-04-06" [ref=e513]
        - row "M569991 Delete-Safe-1775436569991 del@mail.com 0800000000 Student 3 Active 2026-04-06" [ref=e514]:
          - cell "M569991" [ref=e515]
          - cell "Delete-Safe-1775436569991" [ref=e516]
          - cell "del@mail.com" [ref=e517]
          - cell "0800000000" [ref=e518]
          - cell "Student" [ref=e519]:
            - generic [ref=e520]: Student
          - cell "3" [ref=e521]
          - cell "Active" [ref=e522]:
            - generic [ref=e523]: Active
          - cell "2026-04-06" [ref=e524]
        - row "M570493 Test Invalid Phone testphone@mail.com ABCDEFGHIJ Student 3 Active 2026-04-05" [ref=e525]:
          - cell "M570493" [ref=e526]
          - cell "Test Invalid Phone" [ref=e527]
          - cell "testphone@mail.com" [ref=e528]
          - cell "ABCDEFGHIJ" [ref=e529]
          - cell "Student" [ref=e530]:
            - generic [ref=e531]: Student
          - cell "3" [ref=e532]
          - cell "Active" [ref=e533]:
            - generic [ref=e534]: Active
          - cell "2026-04-05" [ref=e535]
        - row "M571687 Student-Member-1775436571687 student@mail.com 0812345678 Student 3 Active 2026-04-06" [ref=e536]:
          - cell "M571687" [ref=e537]
          - cell "Student-Member-1775436571687" [ref=e538]
          - cell "student@mail.com" [ref=e539]
          - cell "0812345678" [ref=e540]
          - cell "Student" [ref=e541]:
            - generic [ref=e542]: Student
          - cell "3" [ref=e543]
          - cell "Active" [ref=e544]:
            - generic [ref=e545]: Active
          - cell "2026-04-06" [ref=e546]
        - row "M579047 Delete-Safe-1775436579047 del@mail.com 0800000000 Student 3 Active 2026-04-06" [ref=e547]:
          - cell "M579047" [ref=e548]
          - cell "Delete-Safe-1775436579047" [ref=e549]
          - cell "del@mail.com" [ref=e550]
          - cell "0800000000" [ref=e551]
          - cell "Student" [ref=e552]:
            - generic [ref=e553]: Student
          - cell "3" [ref=e554]
          - cell "Active" [ref=e555]:
            - generic [ref=e556]: Active
          - cell "2026-04-06" [ref=e557]
        - row "M583074 Student-Member-1775436583074 student@mail.com 0812345678 Student 3 Active 2026-04-06" [ref=e558]:
          - cell "M583074" [ref=e559]
          - cell "Student-Member-1775436583074" [ref=e560]
          - cell "student@mail.com" [ref=e561]
          - cell "0812345678" [ref=e562]
          - cell "Student" [ref=e563]:
            - generic [ref=e564]: Student
          - cell "3" [ref=e565]
          - cell "Active" [ref=e566]:
            - generic [ref=e567]: Active
          - cell "2026-04-06" [ref=e568]
        - row "M589389 Delete-Safe-1775436589389 del@mail.com 0800000000 Student 3 Active 2026-04-06" [ref=e569]:
          - cell "M589389" [ref=e570]
          - cell "Delete-Safe-1775436589389" [ref=e571]
          - cell "del@mail.com" [ref=e572]
          - cell "0800000000" [ref=e573]
          - cell "Student" [ref=e574]:
            - generic [ref=e575]: Student
          - cell "3" [ref=e576]
          - cell "Active" [ref=e577]:
            - generic [ref=e578]: Active
          - cell "2026-04-06" [ref=e579]
        - row "M653739 Invalid-Email-User not-an-email 0812345678 Student 3 Active 2026-04-05" [ref=e580]:
          - cell "M653739" [ref=e581]
          - cell "Invalid-Email-User" [ref=e582]
          - cell "not-an-email" [ref=e583]
          - cell "0812345678" [ref=e584]
          - cell "Student" [ref=e585]:
            - generic [ref=e586]: Student
          - cell "3" [ref=e587]
          - cell "Active" [ref=e588]:
            - generic [ref=e589]: Active
          - cell "2026-04-05" [ref=e590]
        - row "M669298 Student-Member-1775442669298 student@mail.com 0812345678 Student 3 Active 2026-04-06" [ref=e591]:
          - cell "M669298" [ref=e592]
          - cell "Student-Member-1775442669298" [ref=e593]
          - cell "student@mail.com" [ref=e594]
          - cell "0812345678" [ref=e595]
          - cell "Student" [ref=e596]:
            - generic [ref=e597]: Student
          - cell "3" [ref=e598]
          - cell "Active" [ref=e599]:
            - generic [ref=e600]: Active
          - cell "2026-04-06" [ref=e601]
        - row "M672095 Delete-Safe-1775442672095 del@mail.com 0800000000 Student 3 Active 2026-04-06" [ref=e602]:
          - cell "M672095" [ref=e603]
          - cell "Delete-Safe-1775442672095" [ref=e604]
          - cell "del@mail.com" [ref=e605]
          - cell "0800000000" [ref=e606]
          - cell "Student" [ref=e607]:
            - generic [ref=e608]: Student
          - cell "3" [ref=e609]
          - cell "Active" [ref=e610]:
            - generic [ref=e611]: Active
          - cell "2026-04-06" [ref=e612]
        - row "M712962 Test-Member-1775420712962 test@mail.com 0812345678 Student 3 Active 2026-04-05" [ref=e613]:
          - cell "M712962" [ref=e614]
          - cell "Test-Member-1775420712962" [ref=e615]
          - cell "test@mail.com" [ref=e616]
          - cell "0812345678" [ref=e617]
          - cell "Student" [ref=e618]:
            - generic [ref=e619]: Student
          - cell "3" [ref=e620]
          - cell "Active" [ref=e621]:
            - generic [ref=e622]: Active
          - cell "2026-04-05" [ref=e623]
        - row "M720758 Invalid-Email-User not-an-email 0812345678 Student 3 Active 2026-04-05" [ref=e624]:
          - cell "M720758" [ref=e625]
          - cell "Invalid-Email-User" [ref=e626]
          - cell "not-an-email" [ref=e627]
          - cell "0812345678" [ref=e628]
          - cell "Student" [ref=e629]:
            - generic [ref=e630]: Student
          - cell "3" [ref=e631]
          - cell "Active" [ref=e632]:
            - generic [ref=e633]: Active
          - cell "2026-04-05" [ref=e634]
        - row "M721966 Teacher-Test-1775420721966 teacher@mail.com 0812345678 Teacher 3 Active 2026-04-05" [ref=e635]:
          - cell "M721966" [ref=e636]
          - cell "Teacher-Test-1775420721966" [ref=e637]
          - cell "teacher@mail.com" [ref=e638]
          - cell "0812345678" [ref=e639]
          - cell "Teacher" [ref=e640]:
            - generic [ref=e641]: Teacher
          - cell "3" [ref=e642]
          - cell "Active" [ref=e643]:
            - generic [ref=e644]: Active
          - cell "2026-04-05" [ref=e645]
        - row "M780092 Student-Member-1775442780092 student@mail.com 0812345678 Student 3 Active 2026-04-06" [ref=e646]:
          - cell "M780092" [ref=e647]
          - cell "Student-Member-1775442780092" [ref=e648]
          - cell "student@mail.com" [ref=e649]
          - cell "0812345678" [ref=e650]
          - cell "Student" [ref=e651]:
            - generic [ref=e652]: Student
          - cell "3" [ref=e653]
          - cell "Active" [ref=e654]:
            - generic [ref=e655]: Active
          - cell "2026-04-06" [ref=e656]
        - row "M857520 Student-Member-1775408857520 student@mail.com 0812345678 Student 3 Active 2026-04-05" [ref=e657]:
          - cell "M857520" [ref=e658]
          - cell "Student-Member-1775408857520" [ref=e659]
          - cell "student@mail.com" [ref=e660]
          - cell "0812345678" [ref=e661]
          - cell "Student" [ref=e662]:
            - generic [ref=e663]: Student
          - cell "3" [ref=e664]
          - cell "Active" [ref=e665]:
            - generic [ref=e666]: Active
          - cell "2026-04-05" [ref=e667]
        - row "M859021 Delete-Safe-1775408859021 del@mail.com 0800000000 Student 3 Active 2026-04-05" [ref=e668]:
          - cell "M859021" [ref=e669]
          - cell "Delete-Safe-1775408859021" [ref=e670]
          - cell "del@mail.com" [ref=e671]
          - cell "0800000000" [ref=e672]
          - cell "Student" [ref=e673]:
            - generic [ref=e674]: Student
          - cell "3" [ref=e675]
          - cell "Active" [ref=e676]:
            - generic [ref=e677]: Active
          - cell "2026-04-05" [ref=e678]
        - row "M867281 Student-Member-1775442867281 student@mail.com 0812345678 Student 3 Active 2026-04-06" [ref=e679]:
          - cell "M867281" [ref=e680]
          - cell "Student-Member-1775442867281" [ref=e681]
          - cell "student@mail.com" [ref=e682]
          - cell "0812345678" [ref=e683]
          - cell "Student" [ref=e684]:
            - generic [ref=e685]: Student
          - cell "3" [ref=e686]
          - cell "Active" [ref=e687]:
            - generic [ref=e688]: Active
          - cell "2026-04-06" [ref=e689]
        - row "M869778 Delete-Safe-1775442869778 del@mail.com 0800000000 Student 3 Active 2026-04-06" [ref=e690]:
          - cell "M869778" [ref=e691]
          - cell "Delete-Safe-1775442869778" [ref=e692]
          - cell "del@mail.com" [ref=e693]
          - cell "0800000000" [ref=e694]
          - cell "Student" [ref=e695]:
            - generic [ref=e696]: Student
          - cell "3" [ref=e697]
          - cell "Active" [ref=e698]:
            - generic [ref=e699]: Active
          - cell "2026-04-06" [ref=e700]
        - row "M915449 Student-Member-1775408915449 student@mail.com 0812345678 Student 3 Active 2026-04-05" [ref=e701]:
          - cell "M915449" [ref=e702]
          - cell "Student-Member-1775408915449" [ref=e703]
          - cell "student@mail.com" [ref=e704]
          - cell "0812345678" [ref=e705]
          - cell "Student" [ref=e706]:
            - generic [ref=e707]: Student
          - cell "3" [ref=e708]
          - cell "Active" [ref=e709]:
            - generic [ref=e710]: Active
          - cell "2026-04-05" [ref=e711]
        - row "M917734 Delete-Safe-1775408917734 del@mail.com 0800000000 Student 3 Active 2026-04-05" [ref=e712]:
          - cell "M917734" [ref=e713]
          - cell "Delete-Safe-1775408917734" [ref=e714]
          - cell "del@mail.com" [ref=e715]
          - cell "0800000000" [ref=e716]
          - cell "Student" [ref=e717]:
            - generic [ref=e718]: Student
          - cell "3" [ref=e719]
          - cell "Active" [ref=e720]:
            - generic [ref=e721]: Active
          - cell "2026-04-05" [ref=e722]
        - row "M971907 Student-Member-1775408971907 student@mail.com 0812345678 Student 3 Active 2026-04-05" [ref=e723]:
          - cell "M971907" [ref=e724]
          - cell "Student-Member-1775408971907" [ref=e725]
          - cell "student@mail.com" [ref=e726]
          - cell "0812345678" [ref=e727]
          - cell "Student" [ref=e728]:
            - generic [ref=e729]: Student
          - cell "3" [ref=e730]
          - cell "Active" [ref=e731]:
            - generic [ref=e732]: Active
          - cell "2026-04-05" [ref=e733]
        - row "M973924 Delete-Safe-1775408973924 del@mail.com 0800000000 Student 3 Active 2026-04-05" [ref=e734]:
          - cell "M973924" [ref=e735]
          - cell "Delete-Safe-1775408973924" [ref=e736]
          - cell "del@mail.com" [ref=e737]
          - cell "0800000000" [ref=e738]
          - cell "Student" [ref=e739]:
            - generic [ref=e740]: Student
          - cell "3" [ref=e741]
          - cell "Active" [ref=e742]:
            - generic [ref=e743]: Active
          - cell "2026-04-05" [ref=e744]
```

# Test source

```ts
  1   | // tests/e2e/members.spec.js
  2   | const { test, expect } = require('@playwright/test');
  3   | const { LoginPage } = require('../../pages/LoginPage');
  4   | const { MembersPage } = require('../../pages/MembersPage');
  5   | 
  6   | function uniqueCode() {
  7   |   return 'M' + Date.now().toString().slice(-6);
  8   | }
  9   | 
  10  | test.describe('Member Management (TC006 - TC012)', () => {
  11  | 
  12  |   test.beforeEach(async ({ page }) => {
  13  |     const loginPage = new LoginPage(page);
  14  |     await loginPage.goto();
  15  |     // Precondition: Login by Librarian/Admin
  16  |     await loginPage.login('admin', 'admin123');
  17  |     await expect(page).not.toHaveURL(/login/);
  18  |   });
  19  | 
  20  |   test('TC006: Add Member (Student)', async ({ page }) => {
  21  |     const membersPage = new MembersPage(page);
  22  |     await membersPage.goto();
  23  | 
  24  |     const code = uniqueCode();
  25  |     const name = 'Student-Member-' + Date.now();
  26  |     await membersPage.fillMemberInfo(code, name, 'student@mail.com', '0812345678', 'student');
  27  | 
  28  |     // Expected: บันทึกสำเร็จ สมาชิกใหม่พร้อมใช้งาน
  29  |     await expect(membersPage.rowWith(name)).toBeVisible({ timeout: 10000 });
  30  |   });
  31  | 
  32  |   test('TC007: Add Member Fail (Duplicate Code)', async ({ page }) => {
  33  |     const membersPage = new MembersPage(page);
  34  |     await membersPage.goto();
  35  | 
  36  |     await page.waitForSelector('table tbody tr', { timeout: 10000 });
  37  |     const existingCode = (await page.locator('table tbody tr td').first().innerText()).trim();
  38  | 
  39  |     await membersPage.fillMemberInfo(existingCode, 'Duplicate-User', 'dup@mail.com', '000000000');
  40  | 
  41  |     // Expected: ระบบแสดง Error "รหัสสมาชิกนี้มีในระบบแล้ว" บันทึกไม่สำเร็จ
  42  |     const errorMsg = page.locator('.alert-danger, .error-message, [class*="alert"], .text-danger, .invalid-feedback');
  43  |     await expect(errorMsg.first()).toBeVisible({ timeout: 5000 });
  44  |   });
  45  | 
  46  |   test('TC008: Add Member Fail (Missing Req)', async ({ page }) => {
  47  |     const membersPage = new MembersPage(page);
  48  |     await membersPage.goto();
  49  |     
  50  |     // กรอกรหัส แต่ไม่ได้กรอก "ชื่อ-สกุล"
  51  |     await membersPage.openAddForm();
  52  |     await membersPage.codeInput.fill(uniqueCode());
  53  |     await membersPage.nameInput.fill('');
  54  |     await membersPage.submitBtn.first().click();
  55  | 
  56  |     // Expected: ระบบแสดง Error ป้องกันไม่ให้ลงข้อมูลในฐานข้อมูล (HTML5 Validation หรือ Server-side)
  57  |     const isNameInvalid = await membersPage.nameInput.evaluate(node => !node.validity.valid);
  58  |     const isErrorVisible = await page.locator('.alert-danger, .error-message, [class*="alert"], .text-danger, .invalid-feedback').first().isVisible();
  59  |     expect(isNameInvalid || isErrorVisible).toBeTruthy();
  60  |   });
  61  | 
  62  |   test('TC009: Edit Member Detail', async ({ page }) => {
  63  |     const membersPage = new MembersPage(page);
  64  |     await membersPage.goto();
  65  | 
  66  |     await page.waitForSelector('table tbody tr', { timeout: 10000 });
  67  |     const firstRow = page.locator('table tbody tr').first();
  68  |     const editBtn = firstRow.locator('a, button').filter({ hasText: /Edit|แก้ไข/i });
  69  |     await editBtn.first().click();
  70  | 
  71  |     await membersPage.nameInput.waitFor({ state: 'visible', timeout: 10000 });
  72  |     const newName = 'Updated-Mem-' + Date.now();
  73  |     await membersPage.nameInput.fill(newName);
  74  |     
  75  |     // Submit (Update/Save)
  76  |     const updateBtn = page.locator('button[type="submit"], input[type="submit"]').filter({ hasText: /Update|Save|บันทึก/i });
  77  |     await updateBtn.first().click();
  78  |     await page.waitForLoadState('networkidle', { timeout: 15000 });
  79  | 
  80  |     // Expected: ข้อมูลถูกอัปเดต
  81  |     await expect(membersPage.rowWith(newName)).toBeVisible({ timeout: 10000 });
  82  |   });
  83  | 
  84  |   test('TC010: Delete Member (Safe)', async ({ page }) => {
  85  |     const membersPage = new MembersPage(page);
  86  |     await membersPage.goto();
  87  | 
  88  |     const code = uniqueCode();
  89  |     const name = 'Delete-Safe-' + Date.now();
  90  |     await membersPage.fillMemberInfo(code, name, 'del@mail.com', '0800000000');
  91  |     await expect(membersPage.rowWith(name)).toBeVisible({ timeout: 10000 });
  92  | 
  93  |     const row = membersPage.rowWith(name);
  94  |     const deleteBtn = row.locator('a, button').filter({ hasText: /Delete|ลบ/i });
  95  | 
  96  |     page.on('dialog', d => d.accept());
> 97  |     await deleteBtn.first().click();
      |                             ^ Error: locator.click: Test timeout of 30000ms exceeded.
  98  |     await page.waitForLoadState('networkidle', { timeout: 15000 });
  99  | 
  100 |     // Expected: สมาชิกถูกลบออกจากระบบ
  101 |     await expect(membersPage.rowWith(name)).not.toBeVisible({ timeout: 8000 });
  102 |   });
  103 | 
  104 |   test('TC011: Delete Member (Has Active Borrow)', async ({ page }) => {
  105 |     // สมมติว่าในระบบมีสมาชิกที่มียืมอยู่แล้ว หรือเราจำลองพฤติกรรม
  106 |     // วิธีทดสอบ: ไปที่หน้า Member หาคนที่ยังไม่ได้คืน แล้วลบ จะต้องเจอ Error
  107 |     // เนื่องจาก Environment เราไม่สามารถ guarantee ได้ร้อยเปอร์เซ็นต์ว่ามี 
  108 |     // เราจะเขียน test ให้รองรับการหาคนมียืมก่อน (ถ้าหาได้ค่อยเทส ถ้าหาไม่ได้ให้ข้ามเพื่อไม่ให้ fail)
  109 |     
  110 |     await page.goto('http://localhost:8080/borrow.php');
  111 |     await page.waitForLoadState('networkidle');
  112 |     const borrowedRow = page.locator('table tbody tr').filter({ hasText: /Borrowed|ยืมอยู่/i }).first();
  113 |     let memberCodeWithBorrow = null;
  114 |     
  115 |     if (await borrowedRow.isVisible()) {
  116 |       memberCodeWithBorrow = await borrowedRow.locator('td').first().innerText(); // สมมติว่า Column แรก หรือสอง เป็น Code
  117 |     }
  118 | 
  119 |     if (memberCodeWithBorrow) {
  120 |       const membersPage = new MembersPage(page);
  121 |       await membersPage.goto();
  122 |       await membersPage.searchInput.fill(memberCodeWithBorrow);
  123 |       await membersPage.searchBtn.click();
  124 |       
  125 |       const row = membersPage.rowWith(memberCodeWithBorrow.trim());
  126 |       if (await row.isVisible()) {
  127 |         const deleteBtn = row.locator('a, button').filter({ hasText: /Delete|ลบ/i });
  128 |         page.on('dialog', d => d.accept());
  129 |         await deleteBtn.first().click();
  130 |         
  131 |         // Expected: ไม่อนุญาตให้ลบ แสดงแจ้งเตือน
  132 |         const errorMsg = page.locator('.alert-danger, .error-message, [class*="alert"]');
  133 |         await expect(errorMsg.first()).toBeVisible({ timeout: 5000 });
  134 |       }
  135 |     } else {
  136 |       console.log('ℹ️ ไม่มีสมาชิกใดมียืมหนังสืออยู่ ขออนุญาต Skip');
  137 |       test.skip();
  138 |     }
  139 |   });
  140 | 
  141 |   test('TC012: View Member Dashboard', async ({ page }) => {
  142 |     const membersPage = new MembersPage(page);
  143 |     await membersPage.goto();
  144 | 
  145 |     await page.waitForSelector('table tbody tr', { timeout: 10000 });
  146 |     const firstRow = page.locator('table tbody tr').first();
  147 |     
  148 |     // คลิกปุ่ม Profile หรือ View
  149 |     const profileBtn = firstRow.locator('a, button').filter({ hasText: /Profile|View|ดูข้อมูล/i });
  150 |     if (await profileBtn.count() > 0) {
  151 |       await profileBtn.first().click();
  152 |       await page.waitForLoadState('networkidle');
  153 |       
  154 |       // Expected: แสดงสถานะประเภทสมาชิก, ยอดคงเหลือในการยืม, รายการหนังสือที่ยืมอยู่
  155 |       const profileCard = page.locator('.card, .profile, [class*="profile"]');
  156 |       await expect(profileCard.first()).toBeVisible();
  157 |       // ควรมีข้อมูลสถานะ
  158 |       const text = await page.locator('body').innerText();
  159 |       expect(/Type|Status|ประเภท|สถานะ/i.test(text)).toBeTruthy();
  160 |     } else {
  161 |       console.log('ℹ️ ไม่มีปุ่ม Profile ให้กด ขออนุญาต Skip');
  162 |       test.skip();
  163 |     }
  164 |   });
  165 | 
  166 | });
```