import SyntaxHighlighter from '@/components/shared/SyntaxHighlighter'

const FolderStructure = () => {
    return (
        <>
            <p>
                در این بخش، ساختار اولیه پوشه‌ها و هر چیزی که برای راه‌اندازی و اجرای قالب نیاز دارید را پیدا خواهید کرد. نسخه‌های دمو و استارتر ساختار یکسانی دارند، با این تفاوت که نسخه استارتر شامل فایل‌ها و پوشه‌های کمتری است زیرا برخی از آن‌ها در نسخه استارتر لازم نیستند.
            </p>
            <p>در زیر یک نمودار شماتیک از ساختار پوشه‌ها آورده شده است:</p>
            <SyntaxHighlighter>
                {`
    ├── public                        # منابع استاتیک
    |   ├── img                       # تصاویر
    |   ├── data                      # داده‌های استاتیک
    |   └── ...                       # سایر فایل‌های استاتیک
    ├── src
    │   ├── @types                    # فایل‌های نوع که در سراسر قالب مشترک هستند
    │   │   ├── ...                   
    │   ├── assets                    # منابع استاتیک برنامه
    │   │   ├── maps                  # متاداده نقشه‌ها
    │   │   ├── markdown              # فایل‌های مارک‌داون
    │   │   ├── styles                # فایل‌های CSS عمومی
    │   │   └── svg	                  # فایل‌های SVG
    │   ├── components                # کامپوننت‌های عمومی
    │   │   ├── docs                  # کامپوننت‌های مرتبط با مستندات
    │   │   ├── layout                # کامپوننت‌های طرح‌بندی
    │   │   ├── route                 # کامپوننت‌های مرتبط با مسیر
    │   │   ├── shared                # کامپوننت‌های سطح بالاتر ساخته‌شده بر روی کامپوننت‌های رابط کاربری
    │   │   ├── template              # کامپوننت‌های قالب، مثل Header، Footer، Nav و غیره
    │   │   └── ui                    # کامپوننت‌های سطح پایین مثل Button، Dropdown و غیره
    │   ├── configs                   # فایل‌های تنظیمات        
    │   │   └── ...          
    │   ├── constants                 # فایل‌های ثابت
    │   │   └── ...      
    │   ├── locales                   # تنظیمات محلی‌سازی
    │   │   ├── lang
    │   │   |   └── ...               # فایل‌های JSON زبان
    │   │   └── index.ts              # فایل ورودی محلی‌سازی
    │   ├── mock                      # داده‌های ساختگی برای تماس‌های API
    │   │   ├── data                  # داده‌های ساختگی
    │   │   |   └── ...               # فایل‌های TS داده‌های ساختگی
    │   │   ├── fakeApi               # تنظیمات API ساختگی
    │   │   |   └── ...               # فایل‌های TS API ساختگی
    │   │   └── index.ts              # فایل ورودی ساختگی
    │   ├── services                  # فایل‌های خدمات برای مدیریت یکپارچه‌سازی API
    │   │   ├── ApiService.ts         # مدیریت درخواست و پاسخ API
    │   │   ├── axios                 # تنظیمات و واسط‌های Axios
    |   |   |   └── ...
    │   │   └── ...                   # سایر فایل‌های خدمات
    │   ├── store                     # هوک‌های Zustand برای حالت‌های اصلی قالب
    │   │   └── ...                    
    │   ├── utils                     # همه توابع و هوک‌های قابل استفاده مجدد
    │   │   ├── hooks                 # هوک‌ها
    │   │   |   └── ...      					
    │   │   └── ...                   # توابع قابل استفاده مجدد 
    │   ├── views                     # فایل‌های View که تمام صفحات را رندر می‌کنند
    │   |   ├── ...                   # همه فایل‌های View
    │   |   └── index.ts              # نقطه ورودی View
    │   |   └── View.tsx              # کامپوننت View
    │   |   App.tsx                   # تنظیم برنامه
    │   |   index.css                 # ورودی CSS
    │   |   main.tsx                  # ورودی React
    │   |   mdDynamicImporter.tsx     # مدیریت وارد کردن داینامیک فایل‌های md
    │   └── vite-env.d.ts             # تعریف محیط Vite
    ├── .env                          # فایل ذخیره‌سازی تنظیمات محیط و اطلاعات حساس
    ├── .eslintignore                 # فایل نادیده‌گیری برای eslint  
    ├── .eslintrc.cjs                 # تنظیمات eslint
    ├── .gitignore                    # فایل نادیده‌گیری برای git
    ├── .prettierignore               # فایل نادیده‌گیری برای prettier
    ├── .prettierrc                   # تنظیمات Prettier 
    ├── index.html                    # فایل ورودی وب
    ├── package.json                  
    ├── package.lock.json            
    ├── postcss.config.cjs            # فایل تنظیمات PostCss
    ├── README.md 
    ├── tailwind.config.cjs           # فایل تنظیمات TailwindCSS
    ├── tsconfig.eslint.json          # تنظیمات Typescript برای eslint
    ├── tsconfig.json                 # تنظیمات Typescript پروژه
    ├── tsconfig.eslint.json          # تنظیمات Typescript برای node
    └── vite.config.ts                # فایل تنظیمات vite
    `}
            </SyntaxHighlighter>
            <p>
                این ساختار پوشه، سازماندهی واضحی از منابع، کامپوننت‌ها، تنظیمات و دارایی‌ها ارائه می‌دهد و مدیریت و توسعه پروژه را آسان‌تر می‌کند. هر پوشه و فایل به‌صورت هدفمند قرار داده شده تا کد منظم و قابل نگهداری باشد.
            </p>
        </>
    )
}

export default FolderStructure
