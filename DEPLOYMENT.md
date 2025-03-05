# خطوات نشر الموقع على GitHub Pages

## هيكل المشروع
```
├── client/
│   ├── public/
│   │   └── 404.html       # صفحة إعادة التوجيه لـ GitHub Pages
│   ├── src/
│   │   ├── components/    # مكونات واجهة المستخدم
│   │   ├── pages/        # صفحات الموقع
│   │   ├── App.tsx      # المكون الرئيسي
│   │   └── main.tsx     # نقطة البداية
│   └── index.html       # ملف HTML الرئيسي
├── package.json        # تكوين المشروع
└── README.md          # توثيق المشروع
```

## خطوات النشر

1. إنشاء مستودع جديد على GitHub:
   - قم بزيارة github.com وتسجيل الدخول
   - انقر على "New repository"
   - اختر اسم المستودع: `username.github.io`
   (استبدل username باسم المستخدم الخاص بك على GitHub)

2. تهيئة Git المحلي:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/username/username.github.io.git
git push -u origin main
```

3. تكوين GitHub Pages:
   - انتقل إلى صفحة إعدادات المستودع على GitHub
   - اختر قسم "Pages"
   - اختر الفرع "main" كمصدر
   - انقر على "Save"

4. الموقع سيكون متاحًا على:
   `https://username.github.io`

## ملاحظات هامة

- تأكد من أن جميع الروابط في التطبيق نسبية
- انتظر بضع دقائق بعد الدفع حتى يتم نشر الموقع
- يمكنك متابعة حالة النشر في قسم "Actions" على GitHub

## حل المشكلات الشائعة

1. إذا لم تظهر الصفحات:
   - تأكد من وجود ملف `404.html` في مجلد `public`
   - تأكد من صحة مسارات التوجيه في التطبيق

2. إذا لم تظهر التحديثات:
   - انتظر بضع دقائق للتحديث
   - احذف ذاكرة التخزين المؤقت للمتصفح

## للمساعدة والدعم
إذا واجهت أي مشكلات، يمكنك:
- مراجعة وثائق GitHub Pages
- فتح issue في المستودع
- التواصل مع مجتمع المطورين على GitHub
