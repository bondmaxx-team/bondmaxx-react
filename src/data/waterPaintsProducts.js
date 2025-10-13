import testImage from "../assets/color-1.png";

const waterPaintsProducts = [
  // 🏠 Emulsion Wall Paint
  {
    id: 201,
    type: "water-paints",
    category: "emulsion",
    image: testImage,
    name: {
      en: "Bondmax Emulsion Wall Paint",
      ar: "دهان بوندماكس إيملشن للجدران",
      de: "Bondmax Dispersions-Wandfarbe",
      tr: "Bondmax Emülsiyon Duvar Boyası",
    },
    description: {
      en: "High-quality water-based emulsion paint for interior walls.",
      ar: "دهان إيملشن مائي عالي الجودة للجدران الداخلية.",
      de: "Hochwertige wasserbasierte Dispersionsfarbe für Innenwände.",
      tr: "İç duvarlar için yüksek kaliteli su bazlı emülsiyon boya.",
    },
    features: {
      en: ["Smooth finish", "Quick-drying", "Low odor", "Breathable"],
      ar: ["لمسة ناعمة", "سريع الجفاف", "رائحة منخفضة", "قابل للتنفس"],
      de: ["Glattes Finish", "Schnelltrocknend", "Geruchsarm", "Atmungsaktiv"],
      tr: ["Pürüzsüz bitiş", "Hızlı kuruma", "Düşük koku", "Nefes alabilir"],
    },
    fullDescription: {
      en: "Bondmax Emulsion Wall Paint is a premium water-based paint designed for interior walls, providing smooth coverage, durability, and vibrant long-lasting color.",
      ar: "دهان بوندماكس إيملشن للجدران هو طلاء مائي فاخر مصمم للجدران الداخلية، يوفر تغطية ناعمة، متانة، ولون زاهي طويل الأمد.",
      de: "Bondmax Dispersions-Wandfarbe ist eine Premium-Wasserfarbe für Innenwände mit glatter Deckkraft, Langlebigkeit und lebendiger, langanhaltender Farbe.",
      tr: "Bondmax Emülsiyon Duvar Boyası, iç duvarlar için tasarlanmış premium su bazlı boya olup, pürüzsüz kaplama, dayanıklılık ve uzun ömürlü canlı renk sağlar.",
    },
    detailedFeatures: {
      en: [
        "Smooth and even finish",
        "Resistant to cracking and peeling",
        "Breathable to prevent mold",
        "Quick-drying and low odor",
        "Easy to clean with water",
      ],
      ar: [
        "لمسة ناعمة ومتجانسة",
        "مقاوم للتشقق والتقشر",
        "قابل للتنفس لمنع العفن",
        "سريع الجفاف وذو رائحة منخفضة",
        "سهل التنظيف بالماء",
      ],
      de: [
        "Glattes und gleichmäßiges Finish",
        "Riss- und abblätterungsbeständig",
        "Atmungsaktiv zur Schimmelvermeidung",
        "Schnelltrocknend und geruchsarm",
        "Leicht mit Wasser zu reinigen",
      ],
      tr: [
        "Pürüzsüz ve homojen bitiş",
        "Çatlama ve soyulmaya dayanıklı",
        "Küf oluşumunu önlemek için nefes alabilir",
        "Hızlı kuruma ve düşük koku",
        "Su ile kolay temizlenebilir",
      ],
    },
    technicalSpecs: {
      en: {
        color: "White and full Bondmax color range",
        type: "Water-based emulsion paint",
        solidsContent: "50%",
        viscosity: "95-105 KU",
        density: "1.42 ± 0.05 kg/l",
        dryingTime: "1-2 hours",
        recoatTime: "4-6 hours",
        sheen: "Matt/Satin",
        recommendedThickness: "0.2–0.4 mm",
        applicationTemperature: "+10°C to +30°C",
        toolCleaning: "With water",
      },
      ar: {
        color: "أبيض وجميع ألوان بوندماكس",
        type: "طلاء إيملشن مائي",
        solidsContent: "50%",
        viscosity: "95-105 KU",
        density: "1.42 ± 0.05 كجم/لتر",
        dryingTime: "1-2 ساعة",
        recoatTime: "4-6 ساعات",
        sheen: "مطفي/ساتان",
        recommendedThickness: "0.2–0.4 مم",
        applicationTemperature: "+10 إلى +30°C",
        toolCleaning: "بالماء",
      },
      de: {
        color: "Weiß und gesamte Bondmax-Farbpalette",
        type: "Wasserbasierte Dispersionsfarbe",
        solidsContent: "50%",
        viscosity: "95-105 KU",
        density: "1,42 ± 0,05 kg/L",
        dryingTime: "1-2 Stunden",
        recoatTime: "4-6 Stunden",
        sheen: "Matt/Satin",
        recommendedThickness: "0,2–0,4 mm",
        applicationTemperature: "+10°C bis +30°C",
        toolCleaning: "Mit Wasser",
      },
      tr: {
        color: "Beyaz ve tüm Bondmax renk yelpazesi",
        type: "Su bazlı emülsiyon",
        solidsContent: "50%",
        viscosity: "95-105 KU",
        density: "1,42 ± 0,05 kg/litre",
        dryingTime: "1-2 saat",
        recoatTime: "4-6 saat",
        sheen: "Mat/Saten",
        recommendedThickness: "0.2–0.4 mm",
        applicationTemperature: "+10°C ila +30°C",
        toolCleaning: "Su ile",
      },
    },
    usage: {
      en: {
        surfacePrep:
          "Ensure surface is clean, dry, and free of dust, grease, and loose paint. Prime new surfaces.",
        application:
          "Stir thoroughly. Apply 2-3 thin coats with brush or roller. Allow 4-6 hours between coats.",
      },
      ar: {
        surfacePrep:
          "تأكد من نظافة وجفاف السطح وخلوه من الغبار والشحوم والطلاء المتقشر. استخدم برايمر للأسطح الجديدة.",
        application:
          "حرك جيدًا. طبق 2-3 طبقات رقيقة بالفرشاة أو الرول. اترك 4-6 ساعات بين الطبقات.",
      },
      de: {
        surfacePrep:
          "Oberfläche sauber, trocken und frei von Staub, Fett und loser Farbe. Neue Oberflächen grundieren.",
        application:
          "Gründlich umrühren. 2-3 dünne Schichten mit Pinsel oder Rolle auftragen. 4-6 Stunden warten.",
      },
      tr: {
        surfacePrep:
          "Yüzey temiz, kuru ve toz, yağ ve gevşek boyadan arınmış olmalıdır. Yeni yüzeylere astar uygulayın.",
        application:
          "İyice karıştırın. Fırça veya rulo ile 2-3 ince kat uygulayın. Katlar arasında 4-6 saat bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months from production date",
        conditions:
          "Store in original sealed container at +5°C to +30°C. Protect from frost and direct sunlight.",
      },
      ar: {
        shelfLife: "24 شهرًا من تاريخ الإنتاج",
        conditions:
          "يُخزن في الحاوية الأصلية المغلقة عند +5 إلى +30°C. احمِ من التجمد والشمس المباشرة.",
      },
      de: {
        shelfLife: "24 Monate ab Produktionsdatum",
        conditions:
          "Im Originalbehälter bei +5°C bis +30°C lagern. Vor Frost und Sonne schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 24 ay",
        conditions:
          "Orijinal kapalı ambalajında +5°C ila +30°C arasında saklayın. Don ve güneşten koruyun.",
      },
    },
  },

  // 🎨 Acrylic / Latex Wall Paint
  {
    id: 202,
    type: "water-paints",
    category: "acrylic",
    image: testImage,
    name: {
      en: "Bondmax Acrylic / Latex Wall Paint",
      ar: "دهان بوندماكس أكريليك / لاتكس للجدران",
      de: "Bondmax Acryl / Latexfarbe für Wände",
      tr: "Bondmax Akrilik / Lateks Duvar Boyası",
    },
    description: {
      en: "Premium water-based acrylic or latex paint for interior and exterior walls.",
      ar: "دهان أكريليك أو لاتكس مائي فاخر للجدران الداخلية والخارجية.",
      de: "Premium wasserbasierte Acryl- oder Latexfarbe für Innen- und Außenwände.",
      tr: "İç ve dış duvarlar için premium su bazlı akrilik veya lateks boya.",
    },
    features: {
      en: ["Excellent coverage", "Durable", "Washable", "Low odor"],
      ar: ["تغطية ممتازة", "متين", "قابل للغسل", "رائحة منخفضة"],
      de: ["Hervorragende Deckkraft", "Langlebig", "Waschbar", "Geruchsarm"],
      tr: ["Mükemmel kaplama", "Dayanıklı", "Yıkanabilir", "Düşük koku"],
    },
    fullDescription: {
      en: "Bondmax Acrylic / Latex Wall Paint provides excellent coverage, durability, and color retention for interior and exterior walls.",
      ar: "دهان بوندماكس أكريليك / لاتكس يوفر تغطية ممتازة، متانة، واحتفاظ باللون للجدران الداخلية والخارجية.",
      de: "Bondmax Acryl / Latexfarbe bietet hervorragende Deckkraft, Haltbarkeit und Farbbeständigkeit für Innen- und Außenwände.",
      tr: "Bondmax Akrilik / Lateks Duvar Boyası, iç ve dış duvarlar için mükemmel kaplama, dayanıklılık ve renk koruma sağlar.",
    },
    detailedFeatures: {
      en: [
        "Excellent coverage and hiding power",
        "Low odor and low VOC",
        "Durable and washable",
        "Mold and mildew resistant",
        "Easy to apply",
      ],
      ar: [
        "تغطية ممتازة وقوة إخفاء عالية",
        "رائحة منخفضة ومحتوى منخفض من المركبات العضوية المتطايرة",
        "متين وقابل للغسل",
        "مقاوم للعفن والفطريات",
        "سهل التطبيق",
      ],
      de: [
        "Hervorragende Deckkraft",
        "Geringer Geruch und niedriger VOC-Gehalt",
        "Langlebig und waschbar",
        "Schimmel- und mehltauresistent",
        "Einfach anzuwenden",
      ],
      tr: [
        "Mükemmel kaplama ve örtme gücü",
        "Düşük koku ve düşük VOC",
        "Dayanıklı ve yıkanabilir",
        "Küf ve mantar direnci",
        "Uygulaması kolay",
      ],
    },
    technicalSpecs: {
      en: {
        color: "Full Bondmax color range",
        type: "Acrylic / Latex paint",
        solidsContent: "48-52%",
        viscosity: "100-110 KU",
        density: "1.43 ± 0.05 kg/l",
        dryingTime: "1-2 hours",
        recoatTime: "4-6 hours",
        sheen: "Matt / Satin / Gloss",
        recommendedThickness: "0.2–0.5 mm",
        applicationTemperature: "+10°C to +35°C",
        toolCleaning: "With water",
      },
      ar: {
        color: "مجموعة ألوان بوندماكس الكاملة",
        type: "دهان أكريليك / لاتكس",
        solidsContent: "48-52%",
        viscosity: "100-110 KU",
        density: "1.43 ± 0.05 كجم/لتر",
        dryingTime: "1-2 ساعة",
        recoatTime: "4-6 ساعات",
        sheen: "مطفي / ساتان / لامع",
        recommendedThickness: "0.2–0.5 مم",
        applicationTemperature: "+10 إلى +35°C",
        toolCleaning: "بالماء",
      },
      de: {
        color: "Komplette Bondmax-Farbpalette",
        type: "Acryl / Latexfarbe",
        solidsContent: "48-52%",
        viscosity: "100-110 KU",
        density: "1,43 ± 0,05 kg/L",
        dryingTime: "1-2 Stunden",
        recoatTime: "4-6 Stunden",
        sheen: "Matt / Satin / Glanz",
        recommendedThickness: "0,2–0,5 mm",
        applicationTemperature: "+10°C bis +35°C",
        toolCleaning: "Mit Wasser",
      },
      tr: {
        color: "Tam Bondmax renk yelpazesi",
        type: "Akrilik / Lateks boya",
        solidsContent: "48-52%",
        viscosity: "100-110 KU",
        density: "1,43 ± 0,05 kg/litre",
        dryingTime: "1-2 saat",
        recoatTime: "4-6 saat",
        sheen: "Mat / Saten / Parlak",
        recommendedThickness: "0.2–0.5 mm",
        applicationTemperature: "+10°C ila +35°C",
        toolCleaning: "Su ile",
      },
    },
    usage: {
      en: {
        surfacePrep:
          "Surface must be clean, dry, and free of dust, grease, and loose paint. Prime new surfaces.",
        application:
          "Stir well. Apply 2-3 thin coats with brush or roller. Allow 4-6 hours between coats.",
      },
      ar: {
        surfacePrep:
          "يجب أن يكون السطح نظيفًا وجافًا وخاليًا من الغبار والشحوم والطلاء المتقشر. استخدم برايمر للأسطح الجديدة.",
        application:
          "حرك جيدًا. طبق 2-3 طبقات رقيقة بالفرشاة أو الرول. اترك 4-6 ساعات بين الطبقات.",
      },
      de: {
        surfacePrep:
          "Oberfläche muss sauber, trocken und frei von Staub, Fett und loser Farbe sein. Neue Oberflächen grundieren.",
        application:
          "Gut umrühren. 2-3 dünne Schichten mit Pinsel oder Rolle auftragen. 4-6 Stunden warten.",
      },
      tr: {
        surfacePrep:
          "Yüzey temiz, kuru ve toz, yağ ve gevşek boyadan arınmış olmalıdır. Yeni yüzeylere astar uygulayın.",
        application:
          "Kullanmadan önce iyice karıştırın. Fırça veya rulo ile 2-3 ince kat uygulayın. Katlar arasında 4-6 saat bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months",
        conditions:
          "Store in sealed container at +5°C to +30°C, protect from frost and sunlight.",
      },
      ar: {
        shelfLife: "24 شهرًا",
        conditions:
          "يُخزن في حاوية مغلقة عند +5 إلى +30°C، احمِ من الصقيع وأشعة الشمس.",
      },
      de: {
        shelfLife: "24 Monate",
        conditions:
          "In verschlossenem Behälter bei +5°C bis +30°C lagern, vor Frost und Sonne schützen.",
      },
      tr: {
        shelfLife: "24 ay",
        conditions:
          "Kapalı kapta +5°C ila +30°C arasında saklayın, don ve güneşten koruyun.",
      },
    },
  },

  // 🌤️ Silicone-Based Wall Paint
  {
    id: 203,
    type: "water-paints",
    category: "silicone",
    image: testImage,
    name: {
      en: "Bondmax Silicone-Based Wall Paint",
      ar: "دهان بوندماكس سيليكون للجدران",
      de: "Bondmax Silikon-Wandfarbe",
      tr: "Bondmax Silikon Bazlı Duvar Boyası",
    },
    description: {
      en: "High-performance silicone-based paint for exterior walls.",
      ar: "دهان سيليكون عالي الأداء للجدران الخارجية.",
      de: "Hochleistungs-Silikonfarbe für Außenwände.",
      tr: "Dış duvarlar için yüksek performanslı silikon bazlı boya.",
    },
    features: {
      en: ["Water-repellent", "Durable", "UV resistant", "Breathable"],
      ar: ["مقاوم للماء", "متين", "مقاوم للأشعة فوق البنفسجية", "قابل للتنفس"],
      de: ["Wasserabweisend", "Langlebig", "UV-beständig", "Atmungsaktiv"],
      tr: ["Su itici", "Dayanıklı", "UV dirençli", "Nefes alabilir"],
    },
    fullDescription: {
      en: "Bondmax Silicone-Based Wall Paint provides excellent water repellency, durability, and long-lasting color for exterior surfaces.",
      ar: "دهان بوندماكس سيليكون يوفر مقاومة ممتازة للماء، متانة، ولون طويل الأمد للأسطح الخارجية.",
      de: "Bondmax Silikon-Wandfarbe bietet hervorragende Wasserabweisung, Langlebigkeit und langanhaltende Farbe für Außenflächen.",
      tr: "Bondmax Silikon Bazlı Duvar Boyası, dış yüzeyler için mükemmel su iticilik, dayanıklılık ve uzun ömürlü renk sağlar.",
    },
    detailedFeatures: {
      en: ["Water-repellent", "Durable", "UV resistant", "Breathable"],
      ar: ["مقاوم للماء", "متين", "مقاوم للأشعة فوق البنفسجية", "قابل للتنفس"],
      de: ["Wasserabweisend", "Langlebig", "UV-beständig", "Atmungsaktiv"],
      tr: ["Su itici", "Dayanıklı", "UV dirençli", "Nefes alabilir"],
    },
    technicalSpecs: {
      en: {
        color: "Full Bondmax exterior range",
        type: "Silicone-based paint",
        solidsContent: "40-45%",
        viscosity: "90-100 KU",
        density: "1.38 ± 0.05 kg/l",
        dryingTime: "2-3 hours",
        recoatTime: "6-8 hours",
        sheen: "Matt / Satin",
        recommendedThickness: "0.2–0.5 mm",
        applicationTemperature: "+5°C to +35°C",
        toolCleaning: "With water before drying",
      },
      ar: {
        color: "متوفر في مجموعة بوندماكس للواجهات",
        type: "دهان سيليكون",
        solidsContent: "40-45%",
        viscosity: "90-100 KU",
        density: "1.38 ± 0.05 كجم/لتر",
        dryingTime: "2-3 ساعات",
        recoatTime: "6-8 ساعات",
        sheen: "مطفي / ساتان",
        recommendedThickness: "0.2–0.5 مم",
        applicationTemperature: "+5 إلى +35°C",
        toolCleaning: "بالماء قبل الجفاف",
      },
      de: {
        color: "Verfügbar im gesamten Bondmax-Außenbereich",
        type: "Silikonfarbe",
        solidsContent: "40-45%",
        viscosity: "90-100 KU",
        density: "1,38 ± 0,05 kg/L",
        dryingTime: "2-3 Stunden",
        recoatTime: "6-8 Stunden",
        sheen: "Matt / Satin",
        recommendedThickness: "0,2–0,5 mm",
        applicationTemperature: "+5°C bis +35°C",
        toolCleaning: "Mit Wasser vor dem Trocknen",
      },
      tr: {
        color: "Tam Bondmax dış mekan renklerinde mevcut",
        type: "Silikon bazlı boya",
        solidsContent: "40-45%",
        viscosity: "90-100 KU",
        density: "1,38 ± 0,05 kg/litre",
        dryingTime: "2-3 saat",
        recoatTime: "6-8 saat",
        sheen: "Mat / Saten",
        recommendedThickness: "0.2–0.5 mm",
        applicationTemperature: "+5°C ila +35°C",
        toolCleaning: "Kuruma öncesi su ile temizleyin",
      },
    },
    usage: {
      en: {
        surfacePrep:
          "Ensure surface is clean, dry, and free of dust and loose material. Prime if needed.",
        application:
          "Stir well. Apply 2 thin coats with brush or roller. Allow 6-8 hours between coats.",
      },
      ar: {
        surfacePrep:
          "تأكد من نظافة وجفاف السطح وخلوه من الغبار والمواد المتقشرة. استخدم برايمر إذا لزم الأمر.",
        application:
          "حرك جيدًا. طبق طبقتين رقيقتين بالفرشاة أو الرول. اترك 6-8 ساعات بين الطبقات.",
      },
      de: {
        surfacePrep:
          "Oberfläche sauber, trocken und frei von Staub und losen Materialien. Grundieren falls nötig.",
        application:
          "Gut umrühren. 2 dünne Schichten auftragen. 6-8 Stunden warten.",
      },
      tr: {
        surfacePrep:
          "Yüzey temiz, kuru ve toz ve gevşek malzemeden arınmış olmalıdır. Gerekirse astar uygulayın.",
        application:
          "İyice karıştırın. Fırça veya rulo ile 2 ince kat uygulayın. Katlar arasında 6-8 saat bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months",
        conditions:
          "Store in original sealed container at +5°C to +30°C. Protect from frost and sunlight.",
      },
      ar: {
        shelfLife: "24 شهرًا",
        conditions:
          "يُخزن في الحاوية الأصلية المغلقة عند +5 إلى +30°C. احمِ من التجمد والشمس المباشرة.",
      },
      de: {
        shelfLife: "24 Monate",
        conditions:
          "Im Originalbehälter bei +5°C bis +30°C lagern. Vor Frost und Sonne schützen.",
      },
      tr: {
        shelfLife: "24 ay",
        conditions:
          "Orijinal kapalı ambalajında +5°C ila +30°C arasında saklayın. Don ve güneşten koruyun.",
      },
    },
  },
];

export default waterPaintsProducts;
