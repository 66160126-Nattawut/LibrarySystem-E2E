# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: books.spec.js >> Books Management >> TC-BOOK-04: เพิ่มหนังสือโดยไม่กรอกข้อมูลที่จำเป็น
- Location: tests\e2e\books.spec.js:281:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('button, a').filter({ hasText: /Add New Book|เพิ่มหนังสือใหม่|\+ Add Book/i }).first()
    - locator resolved to <button data-bs-toggle="modal" class="btn btn-primary" data-bs-target="#addBookModal">↵                Add New Book↵            </button>
  - attempting click action
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "📚 Library System" [ref=e4] [cursor=pointer]:
        - /url: index.php
      - generic [ref=e5]:
        - list [ref=e6]:
          - listitem [ref=e7]:
            - link "Dashboard" [ref=e8] [cursor=pointer]:
              - /url: index.php
          - listitem [ref=e9]:
            - link "Books" [ref=e10] [cursor=pointer]:
              - /url: books.php
          - listitem [ref=e11]:
            - link "Members" [ref=e12] [cursor=pointer]:
              - /url: members.php
          - listitem [ref=e13]:
            - link "Borrow" [ref=e14] [cursor=pointer]:
              - /url: borrow.php
          - listitem [ref=e15]:
            - link "Return" [ref=e16] [cursor=pointer]:
              - /url: return.php
          - listitem [ref=e17]:
            - link "Reports" [ref=e18] [cursor=pointer]:
              - /url: reports.php
        - list [ref=e19]:
          - listitem [ref=e20]:
            - button "System Administrator" [ref=e21] [cursor=pointer]
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "Books Management" [level=2] [ref=e24]
      - button "Add New Book" [ref=e25] [cursor=pointer]
    - generic [ref=e28]:
      - textbox "Search by title, author, or ISBN..." [ref=e30]
      - button "Search" [ref=e32] [cursor=pointer]
    - table [ref=e36]:
      - rowgroup [ref=e37]:
        - row "ISBN Title Author Category Total Available Location Actions" [ref=e38]:
          - columnheader "ISBN" [ref=e39]
          - columnheader "Title" [ref=e40]
          - columnheader "Author" [ref=e41]
          - columnheader "Category" [ref=e42]
          - columnheader "Total" [ref=e43]
          - columnheader "Available" [ref=e44]
          - columnheader "Location" [ref=e45]
          - columnheader "Actions" [ref=e46]
      - rowgroup [ref=e47]:
        - row "978-616-567-890-1 Harry Potter ฉบับภาษาไทย J.K. Rowling Fiction 5 4 B-201 View Edit" [ref=e48]:
          - cell "978-616-567-890-1" [ref=e49]
          - cell "Harry Potter ฉบับภาษาไทย" [ref=e50]
          - cell "J.K. Rowling" [ref=e51]
          - cell "Fiction" [ref=e52]
          - cell "5" [ref=e53]
          - cell "4" [ref=e54]:
            - generic [ref=e55]: "4"
          - cell "B-201" [ref=e56]
          - cell "View Edit" [ref=e57]:
            - button "View" [ref=e58] [cursor=pointer]
            - button "Edit" [ref=e59] [cursor=pointer]
        - row "978-1775420497875 Test-Book-1775420497875 Test Author General 3 3 A-101 View Edit" [ref=e60]:
          - cell "978-1775420497875" [ref=e61]
          - cell "Test-Book-1775420497875" [ref=e62]
          - cell "Test Author" [ref=e63]
          - cell "General" [ref=e64]
          - cell "3" [ref=e65]
          - cell "3" [ref=e66]:
            - generic [ref=e67]: "3"
          - cell "A-101" [ref=e68]
          - cell "View Edit" [ref=e69]:
            - button "View" [ref=e70] [cursor=pointer]
            - button "Edit" [ref=e71] [cursor=pointer]
        - row "978-1775420503026 Test-Book-1775420503026 Test Author General 3 3 A-101 View Edit" [ref=e72]:
          - cell "978-1775420503026" [ref=e73]
          - cell "Test-Book-1775420503026" [ref=e74]
          - cell "Test Author" [ref=e75]
          - cell "General" [ref=e76]
          - cell "3" [ref=e77]
          - cell "3" [ref=e78]:
            - generic [ref=e79]: "3"
          - cell "A-101" [ref=e80]
          - cell "View Edit" [ref=e81]:
            - button "View" [ref=e82] [cursor=pointer]
            - button "Edit" [ref=e83] [cursor=pointer]
        - row "978-1775420578849 Test-Book-1775420578849 Test Author General 3 3 A-101 View Edit" [ref=e84]:
          - cell "978-1775420578849" [ref=e85]
          - cell "Test-Book-1775420578849" [ref=e86]
          - cell "Test Author" [ref=e87]
          - cell "General" [ref=e88]
          - cell "3" [ref=e89]
          - cell "3" [ref=e90]:
            - generic [ref=e91]: "3"
          - cell "A-101" [ref=e92]
          - cell "View Edit" [ref=e93]:
            - button "View" [ref=e94] [cursor=pointer]
            - button "Edit" [ref=e95] [cursor=pointer]
        - row "978-1775420684344 Test-Book-1775420684344 Test Author General 3 3 A-101 View Edit" [ref=e96]:
          - cell "978-1775420684344" [ref=e97]
          - cell "Test-Book-1775420684344" [ref=e98]
          - cell "Test Author" [ref=e99]
          - cell "General" [ref=e100]
          - cell "3" [ref=e101]
          - cell "3" [ref=e102]:
            - generic [ref=e103]: "3"
          - cell "A-101" [ref=e104]
          - cell "View Edit" [ref=e105]:
            - button "View" [ref=e106] [cursor=pointer]
            - button "Edit" [ref=e107] [cursor=pointer]
        - row "978-1775420693411 Test-Book-1775420693411 Test Author General 3 3 A-101 View Edit" [ref=e108]:
          - cell "978-1775420693411" [ref=e109]
          - cell "Test-Book-1775420693411" [ref=e110]
          - cell "Test Author" [ref=e111]
          - cell "General" [ref=e112]
          - cell "3" [ref=e113]
          - cell "3" [ref=e114]:
            - generic [ref=e115]: "3"
          - cell "A-101" [ref=e116]
          - cell "View Edit" [ref=e117]:
            - button "View" [ref=e118] [cursor=pointer]
            - button "Edit" [ref=e119] [cursor=pointer]
        - row "978-1775430167252 Test-Book-1775430167252 Test Author General 3 3 A-101 View Edit" [ref=e120]:
          - cell "978-1775430167252" [ref=e121]
          - cell "Test-Book-1775430167252" [ref=e122]
          - cell "Test Author" [ref=e123]
          - cell "General" [ref=e124]
          - cell "3" [ref=e125]
          - cell "3" [ref=e126]:
            - generic [ref=e127]: "3"
          - cell "A-101" [ref=e128]
          - cell "View Edit" [ref=e129]:
            - button "View" [ref=e130] [cursor=pointer]
            - button "Edit" [ref=e131] [cursor=pointer]
        - row "978-1775430171622 Test-Book-1775430171622 Test Author General 3 3 A-101 View Edit" [ref=e132]:
          - cell "978-1775430171622" [ref=e133]
          - cell "Test-Book-1775430171622" [ref=e134]
          - cell "Test Author" [ref=e135]
          - cell "General" [ref=e136]
          - cell "3" [ref=e137]
          - cell "3" [ref=e138]:
            - generic [ref=e139]: "3"
          - cell "A-101" [ref=e140]
          - cell "View Edit" [ref=e141]:
            - button "View" [ref=e142] [cursor=pointer]
            - button "Edit" [ref=e143] [cursor=pointer]
        - row "978-1775430176584 Test-Book-1775430176584 Test Author General 3 3 A-101 View Edit" [ref=e144]:
          - cell "978-1775430176584" [ref=e145]
          - cell "Test-Book-1775430176584" [ref=e146]
          - cell "Test Author" [ref=e147]
          - cell "General" [ref=e148]
          - cell "3" [ref=e149]
          - cell "3" [ref=e150]:
            - generic [ref=e151]: "3"
          - cell "A-101" [ref=e152]
          - cell "View Edit" [ref=e153]:
            - button "View" [ref=e154] [cursor=pointer]
            - button "Edit" [ref=e155] [cursor=pointer]
        - row "978-1775430184043 Test-Book-1775430184043 Test Author General 3 3 A-101 View Edit" [ref=e156]:
          - cell "978-1775430184043" [ref=e157]
          - cell "Test-Book-1775430184043" [ref=e158]
          - cell "Test Author" [ref=e159]
          - cell "General" [ref=e160]
          - cell "3" [ref=e161]
          - cell "3" [ref=e162]:
            - generic [ref=e163]: "3"
          - cell "A-101" [ref=e164]
          - cell "View Edit" [ref=e165]:
            - button "View" [ref=e166] [cursor=pointer]
            - button "Edit" [ref=e167] [cursor=pointer]
        - row "978-1775430193997 Test-Book-1775430193997 Test Author General 3 3 A-101 View Edit" [ref=e168]:
          - cell "978-1775430193997" [ref=e169]
          - cell "Test-Book-1775430193997" [ref=e170]
          - cell "Test Author" [ref=e171]
          - cell "General" [ref=e172]
          - cell "3" [ref=e173]
          - cell "3" [ref=e174]:
            - generic [ref=e175]: "3"
          - cell "A-101" [ref=e176]
          - cell "View Edit" [ref=e177]:
            - button "View" [ref=e178] [cursor=pointer]
            - button "Edit" [ref=e179] [cursor=pointer]
        - row "978-1775430200350 Test-Book-1775430200350 Test Author General 3 3 A-101 View Edit" [ref=e180]:
          - cell "978-1775430200350" [ref=e181]
          - cell "Test-Book-1775430200350" [ref=e182]
          - cell "Test Author" [ref=e183]
          - cell "General" [ref=e184]
          - cell "3" [ref=e185]
          - cell "3" [ref=e186]:
            - generic [ref=e187]: "3"
          - cell "A-101" [ref=e188]
          - cell "View Edit" [ref=e189]:
            - button "View" [ref=e190] [cursor=pointer]
            - button "Edit" [ref=e191] [cursor=pointer]
        - row "978-1775441026068 Test-Book-1775441026068 Test Author General 3 3 A-101 View Edit" [ref=e192]:
          - cell "978-1775441026068" [ref=e193]
          - cell "Test-Book-1775441026068" [ref=e194]
          - cell "Test Author" [ref=e195]
          - cell "General" [ref=e196]
          - cell "3" [ref=e197]
          - cell "3" [ref=e198]:
            - generic [ref=e199]: "3"
          - cell "A-101" [ref=e200]
          - cell "View Edit" [ref=e201]:
            - button "View" [ref=e202] [cursor=pointer]
            - button "Edit" [ref=e203] [cursor=pointer]
        - row "978-1775441030669 Test-Book-1775441030669 Test Author General 3 3 A-101 View Edit" [ref=e204]:
          - cell "978-1775441030669" [ref=e205]
          - cell "Test-Book-1775441030669" [ref=e206]
          - cell "Test Author" [ref=e207]
          - cell "General" [ref=e208]
          - cell "3" [ref=e209]
          - cell "3" [ref=e210]:
            - generic [ref=e211]: "3"
          - cell "A-101" [ref=e212]
          - cell "View Edit" [ref=e213]:
            - button "View" [ref=e214] [cursor=pointer]
            - button "Edit" [ref=e215] [cursor=pointer]
        - row "978-1775441069476 Test-Book-1775441069476 Test Author General 3 3 A-101 View Edit" [ref=e216]:
          - cell "978-1775441069476" [ref=e217]
          - cell "Test-Book-1775441069476" [ref=e218]
          - cell "Test Author" [ref=e219]
          - cell "General" [ref=e220]
          - cell "3" [ref=e221]
          - cell "3" [ref=e222]:
            - generic [ref=e223]: "3"
          - cell "A-101" [ref=e224]
          - cell "View Edit" [ref=e225]:
            - button "View" [ref=e226] [cursor=pointer]
            - button "Edit" [ref=e227] [cursor=pointer]
        - row "978-1775441078351 Test-Book-1775441078351 Test Author General 3 3 A-101 View Edit" [ref=e228]:
          - cell "978-1775441078351" [ref=e229]
          - cell "Test-Book-1775441078351" [ref=e230]
          - cell "Test Author" [ref=e231]
          - cell "General" [ref=e232]
          - cell "3" [ref=e233]
          - cell "3" [ref=e234]:
            - generic [ref=e235]: "3"
          - cell "A-101" [ref=e236]
          - cell "View Edit" [ref=e237]:
            - button "View" [ref=e238] [cursor=pointer]
            - button "Edit" [ref=e239] [cursor=pointer]
        - row "978-1775441120184 Test-Book-1775441120184 Test Author General 3 3 A-101 View Edit" [ref=e240]:
          - cell "978-1775441120184" [ref=e241]
          - cell "Test-Book-1775441120184" [ref=e242]
          - cell "Test Author" [ref=e243]
          - cell "General" [ref=e244]
          - cell "3" [ref=e245]
          - cell "3" [ref=e246]:
            - generic [ref=e247]: "3"
          - cell "A-101" [ref=e248]
          - cell "View Edit" [ref=e249]:
            - button "View" [ref=e250] [cursor=pointer]
            - button "Edit" [ref=e251] [cursor=pointer]
        - row "978-1775441127390 Test-Book-1775441127390 Test Author General 3 3 A-101 View Edit" [ref=e252]:
          - cell "978-1775441127390" [ref=e253]
          - cell "Test-Book-1775441127390" [ref=e254]
          - cell "Test Author" [ref=e255]
          - cell "General" [ref=e256]
          - cell "3" [ref=e257]
          - cell "3" [ref=e258]:
            - generic [ref=e259]: "3"
          - cell "A-101" [ref=e260]
          - cell "View Edit" [ref=e261]:
            - button "View" [ref=e262] [cursor=pointer]
            - button "Edit" [ref=e263] [cursor=pointer]
        - row "978-1775442637535 Test-Book-1775442637535 Test Author General 3 3 A-101 View Edit" [ref=e264]:
          - cell "978-1775442637535" [ref=e265]
          - cell "Test-Book-1775442637535" [ref=e266]
          - cell "Test Author" [ref=e267]
          - cell "General" [ref=e268]
          - cell "3" [ref=e269]
          - cell "3" [ref=e270]:
            - generic [ref=e271]: "3"
          - cell "A-101" [ref=e272]
          - cell "View Edit" [ref=e273]:
            - button "View" [ref=e274] [cursor=pointer]
            - button "Edit" [ref=e275] [cursor=pointer]
        - row "978-1775442643276 Test-Book-1775442643276 Test Author General 3 3 A-101 View Edit" [ref=e276]:
          - cell "978-1775442643276" [ref=e277]
          - cell "Test-Book-1775442643276" [ref=e278]
          - cell "Test Author" [ref=e279]
          - cell "General" [ref=e280]
          - cell "3" [ref=e281]
          - cell "3" [ref=e282]:
            - generic [ref=e283]: "3"
          - cell "A-101" [ref=e284]
          - cell "View Edit" [ref=e285]:
            - button "View" [ref=e286] [cursor=pointer]
            - button "Edit" [ref=e287] [cursor=pointer]
        - row "978-1775442687728 Test-Book-1775442687728 Test Author General 3 3 A-101 View Edit" [ref=e288]:
          - cell "978-1775442687728" [ref=e289]
          - cell "Test-Book-1775442687728" [ref=e290]
          - cell "Test Author" [ref=e291]
          - cell "General" [ref=e292]
          - cell "3" [ref=e293]
          - cell "3" [ref=e294]:
            - generic [ref=e295]: "3"
          - cell "A-101" [ref=e296]
          - cell "View Edit" [ref=e297]:
            - button "View" [ref=e298] [cursor=pointer]
            - button "Edit" [ref=e299] [cursor=pointer]
        - row "978-1775442822540 Test-Book-1775442822540 Test Author General 3 3 A-101 View Edit" [ref=e300]:
          - cell "978-1775442822540" [ref=e301]
          - cell "Test-Book-1775442822540" [ref=e302]
          - cell "Test Author" [ref=e303]
          - cell "General" [ref=e304]
          - cell "3" [ref=e305]
          - cell "3" [ref=e306]:
            - generic [ref=e307]: "3"
          - cell "A-101" [ref=e308]
          - cell "View Edit" [ref=e309]:
            - button "View" [ref=e310] [cursor=pointer]
            - button "Edit" [ref=e311] [cursor=pointer]
        - row "978-1775442833572 Test-Book-1775442833572 Test Author General 3 3 A-101 View Edit" [ref=e312]:
          - cell "978-1775442833572" [ref=e313]
          - cell "Test-Book-1775442833572" [ref=e314]
          - cell "Test Author" [ref=e315]
          - cell "General" [ref=e316]
          - cell "3" [ref=e317]
          - cell "3" [ref=e318]:
            - generic [ref=e319]: "3"
          - cell "A-101" [ref=e320]
          - cell "View Edit" [ref=e321]:
            - button "View" [ref=e322] [cursor=pointer]
            - button "Edit" [ref=e323] [cursor=pointer]
        - row "978-1775443020118 Test-Book-1775443020118 Test Author General 3 3 A-101 View Edit" [ref=e324]:
          - cell "978-1775443020118" [ref=e325]
          - cell "Test-Book-1775443020118" [ref=e326]
          - cell "Test Author" [ref=e327]
          - cell "General" [ref=e328]
          - cell "3" [ref=e329]
          - cell "3" [ref=e330]:
            - generic [ref=e331]: "3"
          - cell "A-101" [ref=e332]
          - cell "View Edit" [ref=e333]:
            - button "View" [ref=e334] [cursor=pointer]
            - button "Edit" [ref=e335] [cursor=pointer]
        - row "978-1775443024845 Test-Book-1775443024845 Test Author General 3 3 A-101 View Edit" [ref=e336]:
          - cell "978-1775443024845" [ref=e337]
          - cell "Test-Book-1775443024845" [ref=e338]
          - cell "Test Author" [ref=e339]
          - cell "General" [ref=e340]
          - cell "3" [ref=e341]
          - cell "3" [ref=e342]:
            - generic [ref=e343]: "3"
          - cell "A-101" [ref=e344]
          - cell "View Edit" [ref=e345]:
            - button "View" [ref=e346] [cursor=pointer]
            - button "Edit" [ref=e347] [cursor=pointer]
        - row "978-1775443062367 Test-Book-1775443062367 Test Author General 3 3 A-101 View Edit" [ref=e348]:
          - cell "978-1775443062367" [ref=e349]
          - cell "Test-Book-1775443062367" [ref=e350]
          - cell "Test Author" [ref=e351]
          - cell "General" [ref=e352]
          - cell "3" [ref=e353]
          - cell "3" [ref=e354]:
            - generic [ref=e355]: "3"
          - cell "A-101" [ref=e356]
          - cell "View Edit" [ref=e357]:
            - button "View" [ref=e358] [cursor=pointer]
            - button "Edit" [ref=e359] [cursor=pointer]
        - row "978-1775443068305 Test-Book-1775443068305 Test Author General 3 3 A-101 View Edit" [ref=e360]:
          - cell "978-1775443068305" [ref=e361]
          - cell "Test-Book-1775443068305" [ref=e362]
          - cell "Test Author" [ref=e363]
          - cell "General" [ref=e364]
          - cell "3" [ref=e365]
          - cell "3" [ref=e366]:
            - generic [ref=e367]: "3"
          - cell "A-101" [ref=e368]
          - cell "View Edit" [ref=e369]:
            - button "View" [ref=e370] [cursor=pointer]
            - button "Edit" [ref=e371] [cursor=pointer]
        - row "978-1775443112088 Test-Book-1775443112088 Test Author General 3 3 A-101 View Edit" [ref=e372]:
          - cell "978-1775443112088" [ref=e373]
          - cell "Test-Book-1775443112088" [ref=e374]
          - cell "Test Author" [ref=e375]
          - cell "General" [ref=e376]
          - cell "3" [ref=e377]
          - cell "3" [ref=e378]:
            - generic [ref=e379]: "3"
          - cell "A-101" [ref=e380]
          - cell "View Edit" [ref=e381]:
            - button "View" [ref=e382] [cursor=pointer]
            - button "Edit" [ref=e383] [cursor=pointer]
        - row "978-1775443121048 Test-Book-1775443121048 Test Author General 3 3 A-101 View Edit" [ref=e384]:
          - cell "978-1775443121048" [ref=e385]
          - cell "Test-Book-1775443121048" [ref=e386]
          - cell "Test Author" [ref=e387]
          - cell "General" [ref=e388]
          - cell "3" [ref=e389]
          - cell "3" [ref=e390]:
            - generic [ref=e391]: "3"
          - cell "A-101" [ref=e392]
          - cell "View Edit" [ref=e393]:
            - button "View" [ref=e394] [cursor=pointer]
            - button "Edit" [ref=e395] [cursor=pointer]
        - row "978-1775444006408 Test-Book-1775444006408 Test Author General 3 3 A-101 View Edit" [ref=e396]:
          - cell "978-1775444006408" [ref=e397]
          - cell "Test-Book-1775444006408" [ref=e398]
          - cell "Test Author" [ref=e399]
          - cell "General" [ref=e400]
          - cell "3" [ref=e401]
          - cell "3" [ref=e402]:
            - generic [ref=e403]: "3"
          - cell "A-101" [ref=e404]
          - cell "View Edit" [ref=e405]:
            - button "View" [ref=e406] [cursor=pointer]
            - button "Edit" [ref=e407] [cursor=pointer]
        - row "978-1775444012504 Test-Book-1775444012504 Test Author General 3 3 A-101 View Edit" [ref=e408]:
          - cell "978-1775444012504" [ref=e409]
          - cell "Test-Book-1775444012504" [ref=e410]
          - cell "Test Author" [ref=e411]
          - cell "General" [ref=e412]
          - cell "3" [ref=e413]
          - cell "3" [ref=e414]:
            - generic [ref=e415]: "3"
          - cell "A-101" [ref=e416]
          - cell "View Edit" [ref=e417]:
            - button "View" [ref=e418] [cursor=pointer]
            - button "Edit" [ref=e419] [cursor=pointer]
        - row "978-1775444058100 Test-Book-1775444058100 Test Author General 3 3 A-101 View Edit" [ref=e420]:
          - cell "978-1775444058100" [ref=e421]
          - cell "Test-Book-1775444058100" [ref=e422]
          - cell "Test Author" [ref=e423]
          - cell "General" [ref=e424]
          - cell "3" [ref=e425]
          - cell "3" [ref=e426]:
            - generic [ref=e427]: "3"
          - cell "A-101" [ref=e428]
          - cell "View Edit" [ref=e429]:
            - button "View" [ref=e430] [cursor=pointer]
            - button "Edit" [ref=e431] [cursor=pointer]
        - row "978-616-456-789-0 การทดสอบซอฟต์แวร์ ทดสอบ หาบั๊ก Computer 2 0 A-105 View Edit" [ref=e432]:
          - cell "978-616-456-789-0" [ref=e433]
          - cell "การทดสอบซอฟต์แวร์" [ref=e434]
          - cell "ทดสอบ หาบั๊ก" [ref=e435]
          - cell "Computer" [ref=e436]
          - cell "2" [ref=e437]
          - cell "0" [ref=e438]:
            - generic [ref=e439]: "0"
          - cell "A-105" [ref=e440]
          - cell "View Edit" [ref=e441]:
            - button "View" [ref=e442] [cursor=pointer]
            - button "Edit" [ref=e443] [cursor=pointer]
        - row "978-616-123-456-7 การเขียนโปรแกรม Python สมศักดิ์ โค้ดดี Computer 3 3 A-101 View Edit" [ref=e444]:
          - cell "978-616-123-456-7" [ref=e445]
          - cell "การเขียนโปรแกรม Python" [ref=e446]
          - cell "สมศักดิ์ โค้ดดี" [ref=e447]
          - cell "Computer" [ref=e448]
          - cell "3" [ref=e449]
          - cell "3" [ref=e450]:
            - generic [ref=e451]: "3"
          - cell "A-101" [ref=e452]
          - cell "View Edit" [ref=e453]:
            - button "View" [ref=e454] [cursor=pointer]
            - button "Edit" [ref=e455] [cursor=pointer]
        - row "978-616-345-678-9 ฐานข้อมูล MySQL สุดาศิริ ดาต้าเบส Computer 3 3 A-104 View Edit" [ref=e456]:
          - cell "978-616-345-678-9" [ref=e457]
          - cell "ฐานข้อมูล MySQL" [ref=e458]
          - cell "สุดาศิริ ดาต้าเบส" [ref=e459]
          - cell "Computer" [ref=e460]
          - cell "3" [ref=e461]
          - cell "3" [ref=e462]:
            - generic [ref=e463]: "3"
          - cell "A-104" [ref=e464]
          - cell "View Edit" [ref=e465]:
            - button "View" [ref=e466] [cursor=pointer]
            - button "Edit" [ref=e467] [cursor=pointer]
        - row "978-616-789-012-3 ประวัติศาสตร์ไทย ศาสตราจารย์ประวัติ รู้ลึก History 3 3 D-401 View Edit" [ref=e468]:
          - cell "978-616-789-012-3" [ref=e469]
          - cell "ประวัติศาสตร์ไทย" [ref=e470]
          - cell "ศาสตราจารย์ประวัติ รู้ลึก" [ref=e471]
          - cell "History" [ref=e472]
          - cell "3" [ref=e473]
          - cell "3" [ref=e474]:
            - generic [ref=e475]: "3"
          - cell "D-401" [ref=e476]
          - cell "View Edit" [ref=e477]:
            - button "View" [ref=e478] [cursor=pointer]
            - button "Edit" [ref=e479] [cursor=pointer]
        - row "978-616-234-567-8 วิศวกรรมซอฟต์แวร์ ดร.พัฒนา ซอฟต์แวร์ Computer 2 2 A-103 View Edit" [ref=e480]:
          - cell "978-616-234-567-8" [ref=e481]
          - cell "วิศวกรรมซอฟต์แวร์" [ref=e482]
          - cell "ดร.พัฒนา ซอฟต์แวร์" [ref=e483]
          - cell "Computer" [ref=e484]
          - cell "2" [ref=e485]
          - cell "2" [ref=e486]:
            - generic [ref=e487]: "2"
          - cell "A-103" [ref=e488]
          - cell "View Edit" [ref=e489]:
            - button "View" [ref=e490] [cursor=pointer]
            - button "Edit" [ref=e491] [cursor=pointer]
        - row "978-616-678-901-2 เศรษฐศาสตร์พอเพียง ดร.เศรษฐกิจ พอใจ Economics 2 1 C-301 View Edit" [ref=e492]:
          - cell "978-616-678-901-2" [ref=e493]
          - cell "เศรษฐศาสตร์พอเพียง" [ref=e494]
          - cell "ดร.เศรษฐกิจ พอใจ" [ref=e495]
          - cell "Economics" [ref=e496]
          - cell "2" [ref=e497]
          - cell "1" [ref=e498]:
            - generic [ref=e499]: "1"
          - cell "C-301" [ref=e500]
          - cell "View Edit" [ref=e501]:
            - button "View" [ref=e502] [cursor=pointer]
            - button "Edit" [ref=e503] [cursor=pointer]
        - row "978-616-123-456-8 โครงสร้างข้อมูล วิชัย อัลกอริทึม Computer 2 2 A-102 View Edit" [ref=e504]:
          - cell "978-616-123-456-8" [ref=e505]
          - cell "โครงสร้างข้อมูล" [ref=e506]
          - cell "วิชัย อัลกอริทึม" [ref=e507]
          - cell "Computer" [ref=e508]
          - cell "2" [ref=e509]
          - cell "2" [ref=e510]:
            - generic [ref=e511]: "2"
          - cell "A-102" [ref=e512]
          - cell "View Edit" [ref=e513]:
            - button "View" [ref=e514] [cursor=pointer]
            - button "Edit" [ref=e515] [cursor=pointer]
```

# Test source

```ts
  1  | // pages/BooksPage.js
  2  | class BooksPage {
  3  |   constructor(page) {
  4  |     this.page = page;
  5  |     this.addBtnHeader = page.locator('button, a').filter({ hasText: /Add New Book|เพิ่มหนังสือใหม่|\+ Add Book/i });
  6  |     this.isbnInput     = page.locator('input[name*="isbn"], #isbn');
  7  |     this.titleInput    = page.locator('input[name*="title"], #title');
  8  |     this.authorInput   = page.locator('input[name*="author"], #author');
  9  |     this.publisherInput= page.locator('input[name*="publisher"]');
  10 |     this.yearInput     = page.locator('input[name*="year"]');
  11 |     this.copiesInput   = page.locator('input[name*="copies"], input[name*="qty"]');
  12 |     this.categoryInput = page.locator('input[name*="category"], #category, select[name*="category"]');
  13 |     this.locationInput = page.locator('input[name*="location"], #location');
  14 |     this.artworkInput  = page.locator('input[type="file"][name*="image"], input[type="file"][name*="cover"], input[type="file"][name*="artwork"]');
  15 |     
  16 |     this.submitBtn     = page.locator('button[type="submit"]').filter({ hasText: /Add Book|Save|บันทึก/i });
  17 |     this.searchInput   = page.locator('input[name*="search"]');
  18 |     this.searchBtn     = page.locator('button').filter({ hasText: /Search|ค้นหา/i });
  19 |     this.noResultText  = page.locator('text=/No books found|ไม่พบ/i');
  20 |     this.bookTable     = page.locator('table tbody');
  21 |   }
  22 | 
  23 |   async goto() {
  24 |     await this.page.goto('http://localhost:8080/books.php');
  25 |     await this.page.waitForLoadState('networkidle', { timeout: 15000 });
  26 |     await this.page.waitForTimeout(500);
  27 |   }
  28 | 
  29 |   async gotoCategorySetting() {
  30 |     await this.page.goto('http://localhost:8080/categories.php'); // Assuming or navigate via menu
  31 |     await this.page.waitForLoadState('networkidle');
  32 |   }
  33 | 
  34 |   async openAddForm() {
  35 |     await this.addBtnHeader.first().waitFor({ state: 'visible', timeout: 10000 });
> 36 |     await this.addBtnHeader.first().click();
     |                                     ^ Error: locator.click: Test timeout of 30000ms exceeded.
  37 |     await this.isbnInput.waitFor({ state: 'visible', timeout: 8000 });
  38 |     await this.page.waitForTimeout(300);
  39 |   }
  40 | 
  41 |   async fillAndSubmit(data) {
  42 |     if (data.isbn) await this.isbnInput.fill(String(data.isbn));
  43 |     if (data.title) await this.titleInput.fill(String(data.title));
  44 |     if (data.author) await this.authorInput.fill(String(data.author));
  45 |     if (data.publisher && await this.publisherInput.isVisible())
  46 |       await this.publisherInput.fill(String(data.publisher));
  47 |     if (data.year && await this.yearInput.isVisible())
  48 |       await this.yearInput.fill(String(data.year));
  49 |     if (data.copies) await this.copiesInput.fill(String(data.copies));
  50 |     
  51 |     if (data.category && await this.categoryInput.isVisible().catch(() => false)) {
  52 |       const tag = await this.categoryInput.evaluate(n => n.tagName.toLowerCase());
  53 |       if (tag === 'select') {
  54 |         const options = this.categoryInput.locator('option');
  55 |         const count = await options.count();
  56 |         for (let i = 0; i < count; i++) {
  57 |           const text = await options.nth(i).textContent();
  58 |           if (text.toLowerCase().includes(data.category.toLowerCase())) {
  59 |             await this.categoryInput.selectOption({ index: i });
  60 |             break;
  61 |           }
  62 |         }
  63 |       } else {
  64 |         await this.categoryInput.fill(String(data.category));
  65 |       }
  66 |     }
  67 |     
  68 |     if (data.location && await this.locationInput.isVisible().catch(() => false))
  69 |       await this.locationInput.fill(String(data.location));
  70 |       
  71 |     if (data.artworkPath && await this.artworkInput.isVisible().catch(() => false)) {
  72 |       await this.artworkInput.setInputFiles(data.artworkPath);
  73 |     }
  74 | 
  75 |     await this.submitBtn.first().waitFor({ state: 'visible', timeout: 5000 });
  76 |     await this.submitBtn.first().click();
  77 |     await this.page.waitForTimeout(1000); 
  78 |   }
  79 | 
  80 |   async addBook(data) {
  81 |     await this.openAddForm();
  82 |     await this.fillAndSubmit(data);
  83 |   }
  84 | 
  85 |   async search(keyword) {
  86 |     if (await this.searchInput.isVisible()) {
  87 |       await this.searchInput.fill(keyword);
  88 |       await this.searchBtn.click();
  89 |       await this.page.waitForTimeout(800);
  90 |     }
  91 |   }
  92 | 
  93 |   rowWith(text) {
  94 |     return this.page.locator('table tbody tr').filter({ hasText: text });
  95 |   }
  96 | }
  97 | 
  98 | module.exports = { BooksPage };
```