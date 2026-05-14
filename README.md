# ALPHA BADMINTON KRABI v2.0

ระบบจัดการคอร์สแบดมินตัน · UI ใหม่ทันสมัย · 4 หน้า

## ⚡ ที่แก้ใหม่ใน v2.0

| ปรับปรุง | รายละเอียด |
|---|---|
| 🚀 **เร็วขึ้น** | localStorage cache · ลด API call ซ้ำ |
| ✍️ **หน้าสมัครสมาชิก** | ฟอร์มสมัครพร้อม PDPA consent + auto User ID |
| 🎨 **UI ใหม่** | Modern Sport Studio · teal + coral · IBM Plex Sans Thai |
| 📱 **Mobile-first** | ปุ่มใหญ่ touch-friendly · sticky header |
| 🎭 **Face register flow** | สมัครเสร็จ → ลงใบหน้าต่อทันที (URL param) |

## โครงสร้างไฟล์

```
alpha-badminton-v2/
├── index.html           ← หน้าหลัก
├── register.html        ← สมัครสมาชิก (NEW!)
├── face-register.html   ← ลงทะเบียนใบหน้า
├── kiosk.html           ← เช็คชื่อ
└── README.md
```

**4 ไฟล์ HTML — เปิดเดี่ยว ๆ ก็ทำงานได้**

## วิธี Deploy

1. ลบไฟล์เก่าทั้งหมดใน GitHub repo
2. Upload 4 ไฟล์ใหม่
3. รอ 1-2 นาที
4. เปิด URL + Hard refresh

## วิธีใช้

```
1. สมัครสมาชิกใหม่
   → เปิด register.html → กรอกฟอร์ม → ได้ User ID เช่น F26001
   
2. ลงทะเบียนใบหน้า  
   → เปิด face-register.html → ค้นชื่อ → 3 ท่า
   (หรือกดจากหน้า "สมัครสำเร็จ" เลย)
   
3. เช็คชื่อ
   → เปิด kiosk.html (ตั้งเป็น iPad หน้าร้าน)
   → นักเรียนมองกล้อง → เลือกคอร์ส → ✓
```

## Design system

- **Font:** IBM Plex Sans Thai (Google Fonts)
- **Colors:** Teal 600 (primary) · Coral 500 (accent) · Cream (bg)
- **Radius:** 8 / 12 / 16 / 24px
- **Touch targets:** 44px+ height ทุกปุ่ม
- **Dark text on light cream** = อ่านสบายตา ทุกวัย

## เปลี่ยน API_KEY

แก้ใน **4 ไฟล์ HTML** ค้นหา (Ctrl+F): `API_KEY:`
