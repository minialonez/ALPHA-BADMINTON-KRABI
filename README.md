# ALPHA BADMINTON KRABI — Frontend

ระบบจัดการคอร์สแบดมินตัน · ส่วน frontend สำหรับ GitHub Pages

## โครงสร้างไฟล์

```
alpha-badminton/
├── index.html              # หน้า landing menu
├── kiosk.html              # หน้า Kiosk เช็คชื่อด้วย face recognition
├── face-register.html      # หน้า ลงทะเบียนใบหน้า 3 ท่า
├── js/
│   ├── config.js           # API URL, key, settings
│   ├── api.js              # API wrapper สำหรับ Apps Script
│   └── face.js             # face-api.js helper
├── css/
│   └── style.css           # CSS ทั้งระบบ
└── README.md
```

## วิธี deploy บน GitHub Pages

1. สร้าง GitHub repo ใหม่ เช่น `alpha-badminton`
2. Upload ไฟล์ทั้งหมดในโฟลเดอร์นี้ขึ้น repo
3. ไป Settings → Pages
4. Source: Deploy from a branch · Branch: `main` · Folder: `/ (root)`
5. รอ ~1 นาที จะได้ URL `https://<username>.github.io/alpha-badminton/`

## ทดสอบก่อน deploy (ทดสอบในเครื่อง)

```bash
cd alpha-badminton
python3 -m http.server 8000
```

เปิด http://localhost:8000

**สำคัญ:** กล้องต้องใช้งานผ่าน HTTPS ยกเว้น localhost
หลัง deploy ขึ้น GitHub Pages จะใช้ HTTPS อัตโนมัติ

## วิธีใช้งานครั้งแรก

### 1. สร้างสมาชิกในระบบ (ตอนนี้ต้องเพิ่มใน Sheet เอง หรือใช้ API ตรง)

ก่อนที่ admin.html จะเสร็จ ให้เพิ่มสมาชิกใน Google Sheet โดยตรง:
- `👥 People`: เพิ่มแถวสมาชิกใหม่ (UUID, DisplayID, Role=student, etc.)
- `🧒 MemberProfile`: เพิ่ม profile เชื่อมกับ PersonUUID
- อย่าลืม Status = active

หรือ:
- เปิด console ใน browser
- เรียก `api.createMember({FirstName:'...',LastName:'...',Phone:'...',DOB:'2010-01-01'})` 

### 2. ลงทะเบียนใบหน้า

1. เปิด `face-register.html`
2. ค้นหาสมาชิกที่จะลงใบหน้า
3. ทำตาม 3 ท่า: หน้าตรง → หันซ้าย → หันขวา
4. ระบบจะ auto-capture เมื่อตรวจเจอใบหน้า

### 3. เช็คชื่อด้วยใบหน้า

1. เปิด `kiosk.html`
2. รอ model โหลด (ครั้งแรก ~30-60 วินาที จากนั้น cache)
3. มองเข้ากล้อง → ระบบจะ recognize อัตโนมัติ
4. นักเรียน → เลือกคอร์ส → กดยืนยัน
5. ผู้ช่วย/admin → check-in อัตโนมัติ

## หมายเหตุสำคัญ

- **Face model files** โหลดจาก jsDelivr CDN ครั้งแรก ~6MB · cache ในเครื่องครั้งถัดไปเร็ว
- **Camera permission** browser จะถามครั้งแรก ต้องอนุญาต
- **iPad/iPhone Safari**: "Add to Home Screen" จะทำให้รู้สึกเหมือนแอป + กล้องเปิดเร็วขึ้น
- **HTTPS required**: GitHub Pages ให้ HTTPS อยู่แล้ว ปกติไม่ต้องทำอะไร

## Troubleshooting

**"API error" บนหน้า landing**
- ตรวจสอบ `js/config.js` ว่า `API_URL` และ `API_KEY` ตรงกับ Apps Script
- ตรวจสอบใน Apps Script ว่า Deploy แล้ว · Web app · Access = Anyone

**กล้องเปิดไม่ขึ้น**
- ตรวจสอบ browser permission (ลบเว็บไซต์ออกจาก blocked list)
- ลองใน private/incognito window
- Safari iOS: Settings → Safari → Camera = Ask

**Face detection ไม่จับ**
- แสงสว่างพอ
- ไม่ใส่หน้ากาก/แว่นกันแดด
- ใบหน้าอยู่ในกรอบสีเขียว
- ระยะ ~30-60 ซม.

**Face match ผิดคน**
- ลองลด `FACE_MATCH_THRESHOLD` ใน config.js จาก 0.5 → 0.45
- ลงทะเบียนใบหน้าใหม่ ในแสงที่ดี

## API endpoints ที่ใช้

ดูใน `js/api.js` — ทั้งหมดเรียกผ่าน Apps Script Web App
