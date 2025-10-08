import testImage from "../assets/color-1.png";

const interiorProducts = [
  {
    id: 1,
    category: "walls", // استخدم key بدلاً من النص المترجم
    image: testImage,
    name: {
      en: "Bondmax Matte Paint",
      ar: "دهان بوندماكس مطفي",
      de: "Bondmax Matte Farbe",
      tr: "Bondmax Mat Boya",
    },
    description: {
      en: "Beautiful walls every day.",
      ar: "جدران جميلة كل يوم.",
      de: "Schöne Wände jeden Tag.",
      tr: "Her gün güzel duvarlar.",
    },
    features: {
      en: ["Luxurious silk touch", "High washability", "Precise warm colors"],
      ar: ["لمسة حريرية فاخرة", "قابلية غسيل عالية", "ألوان دافئة دقيقة"],
      de: [
        "Luxuriöse Seidentextur",
        "Hohe Waschbeständigkeit",
        "Präzise warme Farben",
      ],
      tr: [
        "Lüks ipeksi dokunuş",
        "Yüksek yıkanabilirlik",
        "Hassas sıcak renkler",
      ],
    },
  },
  {
    id: 2,
    category: "ceilings", // استخدم key بدلاً من النص المترجم
    image: testImage,
    name: {
      en: "Bondmax Ceiling White",
      ar: "بوندماكس سقف أبيض",
      de: "Bondmax Deckenweiß",
      tr: "Bondmax Tavan Beyazı",
    },
    description: {
      en: "Perfect white ceiling.",
      ar: "سقف أبيض ناصع مثالي.",
      de: "Perfekte weiße Decke.",
      tr: "Mükemmel beyaz tavan.",
    },
    features: {
      en: ["Anti-yellowing", "Easy application", "Quick drying"],
      ar: ["مضاد لاصفرار الطلاء", "سهل التطبيق", "سريع الجفاف"],
      de: ["Vergilbungsbeständig", "Einfache Anwendung", "Schnelltrocknend"],
      tr: ["Sarılaşma karşıtı", "Kolay uygulama", "Hızlı kuruma"],
    },
  },
  {
    id: 3,
    category: "walls",
    image: testImage,
    name: {
      en: "Bondmax Luxury Silk",
      ar: "دهان بوندماكس الحريري الفاخر",
      de: "Bondmax Luxus Seide",
      tr: "Bondmax Lüks İpek",
    },
    description: {
      en: "Elegant silk finish.",
      ar: "لمسة نهائية حريرية أنيقة.",
      de: "Elegantes Seidenfinish.",
      tr: "Zarif ipeksi bitiş.",
    },
    features: {
      en: ["Elegant sheen", "Stain resistant", "Long lasting beauty"],
      ar: ["لمعة أنيقة", "مقاوم للبقع", "جمال يدوم طويلاً"],
      de: ["Eleganter Glanz", "Fleckenbeständig", "Langanhaltende Schönheit"],
      tr: ["Zarif parlaklık", "Leke tutmaz", "Uzun ömürlü güzellik"],
    },
  },
  {
    id: 4,
    category: "walls",
    image: testImage,
    name: {
      en: "Bondmax Kids Safe",
      ar: "دهان آمن للأطفال",
      de: "Bondmax Kinderfreundlich",
      tr: "Bondmax Çocuk Güvenli",
    },
    description: {
      en: "Safe and healthy for kids.",
      ar: "آمن للأطفال وصحي.",
      de: "Sicher und gesund für Kinder.",
      tr: "Çocuklar için güvenli ve sağlıklı.",
    },
    features: {
      en: ["Non-toxic formula", "Easy cleaning", "Vibrant colors"],
      ar: ["تركيبة غير سامة", "سهل التنظيف", "ألوان زاهية"],
      de: ["Ungiftige Formel", "Leicht zu reinigen", "Lebendige Farben"],
      tr: ["Zararsız formül", "Kolay temizlenir", "Canlı renkler"],
    },
  },
  {
    id: 5,
    category: "walls",
    image: testImage,
    name: {
      en: "Bondmax Kitchen & Bath",
      ar: "دهان المطبخ والحمام",
      de: "Bondmax Küche & Bad",
      tr: "Bondmax Mutfak & Banyo",
    },
    description: {
      en: "Moisture-resistant paint for kitchens and bathrooms.",
      ar: "طلاء مقاوم للرطوبة للمطابخ والحمامات.",
      de: "Feuchtigkeitsbeständige Farbe für Küche und Bad.",
      tr: "Mutfak ve banyolar için neme dayanıklı boya.",
    },
    features: {
      en: ["Anti-mold", "Water resistant", "Easy maintenance"],
      ar: ["مضاد للعفن", "مقاوم للماء", "سهل الصيانة"],
      de: ["Schimmelresistent", "Wasserbeständig", "Leicht zu pflegen"],
      tr: ["Küf önleyici", "Suya dayanıklı", "Kolay bakım"],
    },
  },
  {
    id: 6,
    category: "ceilings",
    image: testImage,
    name: {
      en: "Bondmax Premium Ceiling",
      ar: "دهان السقف الفاخر",
      de: "Bondmax Premium Decke",
      tr: "Bondmax Premium Tavan",
    },
    description: {
      en: "Smooth premium ceiling finish with excellent coverage.",
      ar: "لمسة نهائية ناعمة للسقف بتغطية ممتازة.",
      de: "Glatte Premium-Deckenbeschichtung mit hervorragender Deckkraft.",
      tr: "Mükemmel kaplama sağlayan pürüzsüz premium tavan bitişi.",
    },
    features: {
      en: ["Smooth application", "No-drip formula", "Excellent coverage"],
      ar: ["تطبيق ناعم وسهل", "تركيبة لا تقطر", "تغطية ممتازة"],
      de: ["Glatte Anwendung", "Tropffreie Formel", "Hervorragende Deckkraft"],
      tr: ["Pürüzsüz uygulama", "Damlamayan formül", "Mükemmel kapatıcılık"],
    },
  },
];

export default interiorProducts;
