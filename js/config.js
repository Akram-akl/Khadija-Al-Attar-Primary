// =====================================================
// Instance Configuration File - خديجه العطار - الابتدائيه
// =====================================================

const APP_CONFIG = {
    // 1. App Identity
    appName: "خديجه العطار - الابتدائيه",
    appDescription: "منصة التحفيظ والمتابعه القرآنية",

    // 2. Theme Configuration (الثيمات)
    themeColors: {
        50:  '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981', // اللون الأساسي
        600: '#059669',
        700: '#047857',
        800: '#065f46',
        900: '#064e3b',
    },
    // لون الهيدر (الشريط العلوي)
    headerColor: '#064e3b',

    // إظهار ملاحظات التجربة (لنسخة أكرم والتجريبية فقط)
    showDemoHints: false,

    // 3. Supabase Database Configuration
    supabaseUrl: 'https://exmnmpjtkltwpaeigkye.supabase.co',
    supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4bW5tcGp0a2x0d3BhZWlna3llIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc3Mzk4MzMsImV4cCI6MjEwMzMxNTgzM30.gParDywICCbkHVjjmyWDe0HaY4B3NaNMlJzJOV4gIWc',

    // 4. Levels Configuration
    levels: {
        'abubakar': {
            name: 'حلقة أبوبكر الصديق',
            emoji: '<i data-lucide="star" class="w-6 h-6 inline-block text-emerald-500"></i>'
        },
        'ubay': {
            name: 'حلقة أبي بن كعب',
            emoji: '<i data-lucide="star" class="w-6 h-6 inline-block text-emerald-500"></i>'
        },
        'ali': {
            name: 'حلقة علي بن أبي طالب',
            emoji: '<i data-lucide="star" class="w-6 h-6 inline-block text-emerald-500"></i>'
        },
        'umar': {
            name: 'حلقة عمر بن الخطاب',
            emoji: '<i data-lucide="star" class="w-6 h-6 inline-block text-emerald-500"></i>'
        },
        'hamza': {
            name: 'حلقة حمزة بن عبد المطلب',
            emoji: '<i data-lucide="star" class="w-6 h-6 inline-block text-emerald-500"></i>'
        },
        'khalid': {
            name: 'حلقة خالد بن الوليد',
            emoji: '<i data-lucide="star" class="w-6 h-6 inline-block text-emerald-500"></i>'
        }
    }
};
