import testImage from "../assets/color-1.png";

const primerPaintsProducts = [
  {
    id: 301,
    type: "primer-paints",
    category: "universal",
    image: testImage,
    name: {
      en: "Bondmax Universal Primer",
      ar: "برايمر بوندماكس الشامل",
      de: "Bondmax Universal-Grundierung",
      tr: "Bondmax Evrensel Astar",
    },
    description: {
      en: "Multi-surface primer for perfect adhesion.",
      ar: "برايمر متعدد الأسطح لالتصاق مثالي.",
      de: "Mehrzweck-Grundierung für perfekte Haftung.",
      tr: "Mükemmel yapışma için çok yüzeyli astar.",
    },
    features: {
      en: ["Excellent adhesion", "Seals porous surfaces", "Fast drying"],
      ar: ["التصاق ممتاز", "يغلق الأسطح المسامية", "سريع الجفاف"],
      de: [
        "Hervorragende Haftung",
        "Versiegelt poröse Oberflächen",
        "Schnelltrocknend",
      ],
      tr: ["Mükemmel yapışma", "Gözenekli yüzeyleri kapatır", "Hızlı kuruma"],
    },
    fullDescription: {
      en: "Bondmax Universal Primer is designed to provide excellent adhesion and sealing properties on various surfaces including concrete, plaster, wood, and metal. It creates a perfect base for topcoats and ensures uniform finish.",
      ar: "برايمر بوندماكس الشامل مصمم لتوفير خصائص التصاق وإغلاق ممتازة على مختلف الأسطح بما في ذلك الخرسانة والجبس والخشب والمعدن. يخلق قاعدة مثالية للطبقات النهائية ويضمن لمسة نهائية موحدة.",
      de: "Bondmax Universal-Grundierung wurde entwickelt, um hervorragende Haftungs- und Versiegelungseigenschaften auf verschiedenen Oberflächen wie Beton, Putz, Holz und Metall zu bieten. Sie schafft eine perfekte Basis für Decklacke und gewährleistet ein gleichmäßiges Finish.",
      tr: "Bondmax Evrensel Astar, beton, sıva, ahşap ve metal dahil olmak üzere çeşitli yüzeylerde mükemmel yapışma ve sızdırmazlık özellikleri sağlamak üzere tasarlanmıştır. Üst katlar için mükemmel bir temel oluşturur ve homojen bitiş sağlar.",
    },
    detailedFeatures: {
      en: [
        "Suitable for all surfaces",
        "Excellent sealing properties",
        "Prevents paint absorption",
        "Improves topcoat adhesion",
        "Quick drying formula",
        "Easy to apply",
      ],
      ar: [
        "مناسب لجميع الأسطح",
        "خصائص إغلاق ممتازة",
        "يمنع امتصاص الطلاء",
        "يحسن التصاق الطبقة النهائية",
        "تركيبة سريعة الجفاف",
        "سهل التطبيق",
      ],
      de: [
        "Für alle Oberflächen geeignet",
        "Hervorragende Versiegelungseigenschaften",
        "Verhindert Farbabsorption",
        "Verbessert die Haftung des Decklacks",
        "Schnelltrocknende Formel",
        "Einfach aufzutragen",
      ],
      tr: [
        "Tüm yüzeyler için uygundur",
        "Mükemmel sızdırmazlık özellikleri",
        "Boya emilimini önler",
        "Üst kat yapışmasını iyileştirir",
        "Hızlı kuruma formülü",
        "Kolay uygulama",
      ],
    },
    technicalSpecs: {
      en: {
        color: "White/Transparent",
        type: "Universal primer",
        solidsContent: "38%",
        viscosity: "75-85 KU",
        density: "1.35 ± 0.05 kg/liter",
        dryingTime: "2-3 hours",
        recoatTime: "4-6 hours",
        coverage: "10-12 m²/liter",
        toolCleaning: "With water",
      },
      ar: {
        color: "أبيض/شفاف",
        type: "برايمر شامل",
        solidsContent: "38%",
        viscosity: "75-85 KU",
        density: "1.35 ± 0.05 كجم/لتر",
        dryingTime: "2-3 ساعات",
        recoatTime: "4-6 ساعات",
        coverage: "10-12 م²/لتر",
        toolCleaning: "بالماء",
      },
      de: {
        color: "Weiß/Transparent",
        type: "Universal-Grundierung",
        solidsContent: "38%",
        viscosity: "75-85 KU",
        density: "1,35 ± 0,05 kg/Liter",
        dryingTime: "2-3 Stunden",
        recoatTime: "4-6 Stunden",
        coverage: "10-12 m²/Liter",
        toolCleaning: "Mit Wasser",
      },
      tr: {
        color: "Beyaz/Şeffaf",
        type: "Evrensel astar",
        solidsContent: "38%",
        viscosity: "75-85 KU",
        density: "1,35 ± 0,05 kg/litre",
        dryingTime: "2-3 saat",
        recoatTime: "4-6 saat",
        coverage: "10-12 m²/litre",
        toolCleaning: "Su ile",
      },
    },
    usage: {
      en: {
        surfacePrep:
          "Surface must be clean, dry, and free from loose particles. Remove old flaking paint. Fill major defects before priming.",
        application:
          "Stir well before use. Apply one coat with brush or roller. Allow to dry before applying topcoat. Apply at +10°C to +30°C.",
      },
      ar: {
        surfacePrep:
          "يجب أن يكون السطح نظيفًا وجافًا وخاليًا من الجسيمات السائبة. أزل الطلاء القديم المتقشر. املأ العيوب الكبيرة قبل التبطين.",
        application:
          "حرك جيدًا قبل الاستخدام. طبق طبقة واحدة بالفرشاة أو الرول. اترك حتى يجف قبل تطبيق الطبقة النهائية. طبق في درجة حرارة من +10 إلى +30 درجة مئوية.",
      },
      de: {
        surfacePrep:
          "Die Oberfläche muss sauber, trocken und frei von losen Partikeln sein. Alte abblätternde Farbe entfernen. Größere Mängel vor dem Grundieren ausbessern.",
        application:
          "Vor Gebrauch gut umrühren. Eine Schicht mit Pinsel oder Rolle auftragen. Vor dem Auftragen des Decklacks trocknen lassen. Bei +10°C bis +30°C auftragen.",
      },
      tr: {
        surfacePrep:
          "Yüzey temiz, kuru ve gevşek parçacıklardan arınmış olmalıdır. Eski pullanmış boyayı çıkarın. Astar uygulamadan önce büyük kusurları doldurun.",
        application:
          "Kullanmadan önce iyice karıştırın. Fırça veya rulo ile bir kat uygulayın. Üst kat uygulamadan önce kurumasını bekleyin. +10°C ile +30°C arasında uygulayın.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months from production date",
        conditions:
          "Store in original sealed container at +5°C to +30°C. Keep away from frost.",
      },
      ar: {
        shelfLife: "24 شهرًا من تاريخ الإنتاج",
        conditions:
          "يُخزن في الحاوية الأصلية المغلقة في درجة حرارة من +5 إلى +30 درجة مئوية. أبعده عن التجمد.",
      },
      de: {
        shelfLife: "24 Monate ab Produktionsdatum",
        conditions:
          "In original versiegeltem Behälter bei +5°C bis +30°C lagern. Vor Frost schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 24 ay",
        conditions:
          "Orijinal kapalı ambalajında +5°C ile +30°C arasında saklayın. Dondan uzak tutun.",
      },
    },
  },
];

export default primerPaintsProducts;
