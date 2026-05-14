# ALPHA BADMINTON KRABI

ระบบจัดการคอร์สแบดมินตัน · ทุกอย่างใน **ไฟล์เดียวต่อหน้า** ไม่มี folder ซับซ้อน

## โครงสร้างไฟล์ (เรียบง่าย)

```
alpha-badminton-single/
├── index.html           ← หน้าหลัก · มี CSS + JS ในตัว
├── kiosk.html           ← Kiosk เช็คชื่อ · มี CSS + JS ในตัว
├── face-register.html   ← ลงทะเบียนใบหน้า · มี CSS + JS ในตัว
└── README.md
```

**3 ไฟล์ HTML — เปิดแต่ละไฟล์เดี่ยว ๆ ก็ทำงานได้** ไม่ต้องสนใจ folder อื่น

## วิธี Deploy บน GitHub Pages

### 🔴 ก่อนอื่น — ลบของเก่าก่อน (ถ้ามี)

ใน GitHub repo:
1. คลิก folder `js` → คลิก "..." → Delete directory → Commit (ถ้ามี)
2. คลิก folder `css` → คลิก "..." → Delete directory → Commit (ถ้ามี)
3. คลิก `kiosk.html` เก่า → Delete → Commit
4. คลิก `index.html` เก่า → Delete → Commit
5. คลิก `face-register.html` เก่า → Delete → Commit

หรือง่ายกว่า: ลบ repo ทั้งหมดแล้วสร้างใหม่

### 🟢 Upload ไฟล์ใหม่

1. ใน repo → "Add file" → "Upload files"
2. Drag 3 ไฟล์ HTML ลงไป (ไม่มี folder ให้ปวดหัว!)
3. Commit changes
4. รอ 1-2 นาที
5. เปิด: `https://<USERNAME>.github.io/ALPHA-BADMINTON-KRABI/`

## ความแตกต่างกับเวอร์ชั่นเก่า

| เก่า (แยกไฟล์) | ใหม่ (รวมไฟล์) |
|---|---|
| 8 ไฟล์ · 2 folders | 3 ไฟล์ · 0 folders |
| แก้ที่เดียว = update ทุกหน้า | แก้แต่ละหน้าเอง |
| ไฟล์เล็ก ~2-5 KB | ไฟล์ใหญ่ ~20-25 KB ต่อหน้า |
| ต้องเข้าใจ folder structure | เปิดไฟล์ก็เห็นทุกอย่าง |

## เปลี่ยน API_KEY

ถ้าจะเปลี่ยน API_KEY ต้องแก้ **3 ไฟล์**:

ในแต่ละไฟล์ ค้นหา (Ctrl+F): `API_KEY:`

แล้วเปลี่ยน:
```javascript
API_KEY: 'ALPHA BADMINTON-KRABI',
```

## วิธีใช้งาน

1. **เปิด index.html** → เห็นเมนู + status "✓ API connected"
2. **เปิด face-register.html** → ลงทะเบียนใบหน้าให้สมาชิก
3. **เปิด kiosk.html** → ระบบเช็คชื่อด้วยใบหน้า

## ปุ่มย้อนกลับ

ทุกหน้ามีปุ่ม "← กลับหน้าหลัก" มุมขวาบน คลิกแล้วกลับไป index.html

## ป้องกัน Check-in ซ้ำ

ระบบจะเช็ค: ถ้าวันนี้คุณเช็คชื่อคอร์สนี้แล้ว → ปุ่มจะ disable เห็น "มาแล้ววันนี้" — ป้องกันการ check-in ซ้ำที่จะหัก session มากกว่าจริง
