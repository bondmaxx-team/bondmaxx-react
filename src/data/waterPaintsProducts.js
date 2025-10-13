import testImage from "../assets/color-1.png";

const waterPaintsProducts = [
  {
    id: 201,
    type: "water-paints",
    category: "acrylic",
    image: testImage,
    name: {
      en: "Bondmax Acrylic Emulsion",
      ar: "دهان بوندماكس الأكريليك المائي",
      de: "Bondmax Acryl-Emulsion",
      tr: "Bondmax Akrilik Emülsiyon",
    },
    description: {
      en: "Premium water-based acrylic paint.",
      ar: "دهان أكريليك مائي فاخر.",
      de: "Premium wasserbasierte Acrylfarbe.",
      tr: "Premium su bazlı akrilik boya.",
    },
    features: {
      en: ["Eco-friendly", "Quick drying", "Easy cleanup"],
      ar: ["صديق للبيئة", "سريع الجفاف", "سهل التنظيف"],
      de: ["Umweltfreundlich", "Schnelltrocknend", "Einfache Reinigung"],
      tr: ["Çevre dostu", "Hızlı kuruma", "Kolay temizlik"],
    },
    fullDescription: {
      en: "Bondmax Acrylic Emulsion is a high-quality water-based paint that offers excellent coverage and durability. Perfect for interior and exterior walls, it's environmentally friendly with low VOC content and provides a beautiful, long-lasting finish.",
      ar: "دهان بوندماكس الأكريليك المائي هو طلاء مائي عالي الجودة يوفر تغطية ومتانة ممتازة. مثالي للجدران الداخلية والخارجية، صديق للبيئة مع محتوى منخفض من المركبات العضوية المتطايرة ويوفر لمسة نهائية جميلة وطويلة الأمد.",
      de: "Bondmax Acryl-Emulsion ist eine hochwertige wasserbasierte Farbe mit hervorragender Deckkraft und Haltbarkeit. Perfekt für Innen- und Außenwände, umweltfreundlich mit niedrigem VOC-Gehalt und bietet ein schönes, langlebiges Finish.",
      tr: "Bondmax Akrilik Emülsiyon, mükemmel kaplama ve dayanıklılık sunan yüksek kaliteli su bazlı boyadır. İç ve dış duvarlar için mükemmel, düşük VOC içeriği ile çevre dostu ve güzel, uzun ömürlü bir bitiş sağlar.",
    },
    detailedFeatures: {
      en: [
        "Superior coverage and hiding power",
        "Low odor and low VOC",
        "Excellent color retention",
        "Resistant to mold and mildew",
        "Breathable and flexible",
        "Easy application and cleanup with water",
      ],
      ar: [
        "تغطية فائقة وقوة إخفاء ممتازة",
        "رائحة منخفضة ومحتوى منخفض من المركبات العضوية المتطايرة",
        "احتفاظ ممتاز باللون",
        "مقاوم للعفن والفطريات",
        "قابل للتنفس ومرن",
        "سهل التطبيق والتنظيف بالماء",
      ],
      de: [
        "Überlegene Deckkraft und Deckvermögen",
        "Geringer Geruch und niedriger VOC-Gehalt",
        "Hervorragende Farbbeständigkeit",
        "Resistent gegen Schimmel und Mehltau",
        "Atmungsaktiv und flexibel",
        "Einfache Anwendung und Reinigung mit Wasser",
      ],
      tr: [
        "Üstün kaplama ve kapatma gücü",
        "Düşük koku ve düşük VOC",
        "Mükemmel renk tutma",
        "Küf ve küfe karşı dayanıklı",
        "Nefes alabilir ve esnek",
        "Su ile kolay uygulama ve temizlik",
      ],
    },
    technicalSpecs: {
      en: {
        color: "Available in full Bondmax color range",
        type: "Acrylic emulsion paint",
        solidsContent: "45%",
        viscosity: "100-110 KU",
        density: "1.45 ± 0.05 kg/liter",
        dryingTime: "1-2 hours",
        recoatTime: "4-6 hours",
        sheen: "Matt/Satin available",
        toolCleaning: "With water",
      },
      ar: {
        color: "متوفر في مجموعة ألوان بوندماكس الكاملة",
        type: "دهان أكريليك مائي",
        solidsContent: "45%",
        viscosity: "100-110 KU",
        density: "1.45 ± 0.05 كجم/لتر",
        dryingTime: "1-2 ساعة",
        recoatTime: "4-6 ساعات",
        sheen: "مطفي/ساتان متاح",
        toolCleaning: "بالماء",
      },
      de: {
        color: "Verfügbar im gesamten Bondmax-Farbsortiment",
        type: "Acryl-Emulsionsfarbe",
        solidsContent: "45%",
        viscosity: "100-110 KU",
        density: "1,45 ± 0,05 kg/Liter",
        dryingTime: "1-2 Stunden",
        recoatTime: "4-6 Stunden",
        sheen: "Matt/Satin verfügbar",
        toolCleaning: "Mit Wasser",
      },
      tr: {
        color: "Tam Bondmax renk yelpazesinde mevcuttur",
        type: "Akrilik emülsiyon boya",
        solidsContent: "45%",
        viscosity: "100-110 KU",
        density: "1,45 ± 0,05 kg/litre",
        dryingTime: "1-2 saat",
        recoatTime: "4-6 saat",
        sheen: "Mat/Saten mevcuttur",
        toolCleaning: "Su ile",
      },
    },
    usage: {
      en: {
        surfacePrep:
          "Surface must be clean, dry, and free from dust and grease. Fill cracks with suitable filler. Prime new surfaces with appropriate primer.",
        application:
          "Stir well before use. Can be diluted with 5-10% water if needed. Apply in 2-3 thin coats. Apply at temperatures between +5°C and +35°C.",
      },
      ar: {
        surfacePrep:
          "يجب أن يكون السطح نظيفًا وجافًا وخاليًا من الغبار والشحوم. املأ الشقوق بمادة مالئة مناسبة. استخدم البرايمر المناسب للأسطح الجديدة.",
        application:
          "حرك جيدًا قبل الاستخدام. يمكن تخفيفه بـ 5-10% ماء إذا لزم الأمر. طبق في 2-3 طبقات رقيقة. طبق في درجات حرارة بين +5 و+35 درجة مئوية.",
      },
      de: {
        surfacePrep:
          "Die Oberfläche muss sauber, trocken und frei von Staub und Fett sein. Risse mit geeignetem Füller füllen. Neue Oberflächen mit geeigneter Grundierung vorbehandeln.",
        application:
          "Vor Gebrauch gut umrühren. Kann bei Bedarf mit 5-10% Wasser verdünnt werden. In 2-3 dünnen Schichten auftragen. Bei Temperaturen zwischen +5°C und +35°C auftragen.",
      },
      tr: {
        surfacePrep:
          "Yüzey temiz, kuru ve toz ve yağdan arınmış olmalıdır. Çatlakları uygun dolgu ile doldurun. Yeni yüzeylere uygun astar uygulayın.",
        application:
          "Kullanmadan önce iyice karıştırın. Gerekirse %5-10 su ile inceletilebilir. 2-3 ince kat uygulayın. +5°C ile +35°C arasında uygulayın.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months from production date",
        conditions:
          "Store in original container at +5°C to +30°C. Protect from frost and direct sunlight.",
      },
      ar: {
        shelfLife: "24 شهرًا من تاريخ الإنتاج",
        conditions:
          "يُخزن في الحاوية الأصلية في درجة حرارة من +5 إلى +30 درجة مئوية. احمِ من التجمد وأشعة الشمس المباشرة.",
      },
      de: {
        shelfLife: "24 Monate ab Produktionsdatum",
        conditions:
          "In Originalbehälter bei +5°C bis +30°C lagern. Vor Frost und direkter Sonneneinstrahlung schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 24 ay",
        conditions:
          "Orijinal ambalajında +5°C ile +30°C arasında saklayın. Dondan ve doğrudan güneş ışığından koruyun.",
      },
    },
  },
];

export default waterPaintsProducts;
