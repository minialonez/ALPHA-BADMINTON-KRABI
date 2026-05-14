# ALPHA BADMINTON KRABI v3.0

## 🎉 ไฟล์เดียวจบทุกอย่าง!

```
alpha-badminton-v3/
└── index.html      ← ไฟล์เดียวทำได้ทุกอย่าง
```

## 🆕 Feature ใหม่ใน v3

### 👨‍👩‍👧 Family Account
- 1 ครอบครัว = 1 เบอร์โทร = หลายสมาชิก
- คนแรกที่สมัครเป็น "หัวหน้าครอบครัว"
- ตั้งชื่อครอบครัวเองได้ (เช่น "บ้านใจดี")
- ดูคอร์สและโควต้าของทุกคนในครอบครัวจอเดียว

### 🔐 PIN 6 หลัก
- ตอนสมัคร: กรอก PIN 2 ครั้ง ยืนยัน
- login ครั้งถัดไป: กรอกเบอร์ + PIN
- PIN เก็บแบบ hash (SHA-256) ปลอดภัย

### 📱 SPA (Single Page App)
- เปลี่ยนหน้าทันที ไม่ต้องโหลดใหม่
- ปุ่ม Back ของ browser ใช้ได้
- URL hash routing (#/portal, #/kiosk, ฯลฯ)

## วิธี Deploy

1. ลบไฟล์เก่าทั้งหมดใน GitHub repo
2. Upload **`index.html` ไฟล์เดียว**
3. รอ 1-2 นาที
4. เปิด site + Hard refresh (Ctrl+Shift+R)

## หน้าทั้งหมดในระบบ

| URL | หน้า | ใช้ทำอะไร |
|---|---|---|
| `#/home` | หน้าแรก | เลือกเมนู |
| `#/register` | สมัครครอบครัวใหม่ | เริ่มต้นครั้งแรก |
| `#/login` | เข้าสู่ระบบ | กรอกเบอร์ + PIN |
| `#/portal` | Family Portal | ดูสมาชิกทั้งครอบครัว |
| `#/add-member` | เพิ่มสมาชิก | เพิ่มลูก/พ่อ/แม่ ในครอบครัวเดียวกัน |
| `#/face-register?uuid=xxx` | ลงทะเบียนใบหน้า | 3 ท่า |
| `#/kiosk` | Kiosk เช็คชื่อ | สำหรับ iPad หน้าร้าน |

## โครงสร้างข้อมูล

Family data เก็บใน **browser localStorage** (ไม่ส่งไป server):
```
{
  phone: "0812345678",
  familyName: "บ้านใจดี",
  pinHash: "sha256...",
  memberUUIDs: ["...", "...", "..."],
  headUUID: "...",
}
```

Member data ยังเก็บใน Google Sheet ปกติ (ผ่าน Apps Script)

**สมาชิกในครอบครัวเดียวกัน** = มี `ParentPhone` ตรงกัน

## เปลี่ยน API_KEY

แก้ที่เดียวใน `index.html` ค้นหา: `API_KEY:`
