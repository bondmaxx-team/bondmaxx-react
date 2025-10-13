import testImage from "../assets/color-1.png";

const primerPaintsProducts = [
  {
    id: 401,
    type: "primer-paints",
    category: "water-based",
    image: testImage,
    name: {
      en: "White Water Based Sealer",
      ar: "سيلر مائي أبيض",
      de: "Weißer wasserbasierter Sealer",
      tr: "Beyaz Su Bazlı Sızdırmazlık",
    },
    description: {
      en: "White water-based sealer for smooth surface preparation.",
      ar: "سيلر مائي أبيض لتحضير سطح أملس.",
      de: "Weißer wasserbasierter Sealer zur Vorbereitung glatter Oberflächen.",
      tr: "Pürüzsüz yüzey hazırlığı için beyaz su bazlı sızdırmazlık.",
    },
    features: {
      en: ["Smooth finish", "Easy to apply", "Quick drying"],
      ar: ["لمسة نهائية ناعمة", "سهل التطبيق", "سريع الجفاف"],
      de: ["Glattes Finish", "Einfach aufzutragen", "Schnelltrocknend"],
      tr: ["Pürüzsüz bitiş", "Kolay uygulama", "Hızlı kuruma"],
    },
    fullDescription: {
      en: "White Water Based Sealer ensures a smooth and uniform surface for subsequent coatings. Ideal for interior and exterior use.",
      ar: "يضمن السيلر المائي الأبيض سطحًا أملسًا ومتساويًا للطبقات التالية. مثالي للاستخدام الداخلي والخارجي.",
      de: "Weißer wasserbasierter Sealer sorgt für eine glatte und gleichmäßige Oberfläche für nachfolgende Anstriche. Ideal für Innen- und Außenbereich.",
      tr: "Beyaz su bazlı sızdırmazlık, sonraki katlar için pürüzsüz ve homojen bir yüzey sağlar. İç ve dış mekan kullanımı için idealdir.",
    },
    detailedFeatures: {
      en: [
        "Improves adhesion of topcoats",
        "Reduces paint absorption",
        "Fast drying",
        "Non-toxic",
        "Environmentally friendly",
        "Easy sanding",
      ],
      ar: [
        "يحسن التصاق الطبقة النهائية",
        "يقلل امتصاص الطلاء",
        "سريع الجفاف",
        "غير سام",
        "صديق للبيئة",
        "سهل الصنفرة",
      ],
      de: [
        "Verbessert Haftung von Deckanstrichen",
        "Reduziert Farbaufnahme",
        "Schnelltrocknend",
        "Ungiftig",
        "Umweltfreundlich",
        "Leicht zu schleifen",
      ],
      tr: [
        "Üst kat yapışmasını iyileştirir",
        "Boya emilimini azaltır",
        "Hızlı kuruma",
        "Zararsız",
        "Çevre dostu",
        "Kolay zımparalama",
      ],
    },
    technicalSpecs: {
      en: {
        color: "White",
        type: "Water-based sealer",
        solidsContent: "35%",
        viscosity: "70-80 KU",
        density: "1.30 ± 0.05 kg/liter",
        dryingTime: "1-2 hours",
        recoatTime: "4 hours",
        coverage: "10 m²/liter",
        toolCleaning: "With water",
        curingTime: "24 hours",
        temperatureResistance: "Up to 60°C",
      },
      ar: {
        color: "أبيض",
        type: "سيلر مائي",
        solidsContent: "35%",
        viscosity: "70-80 KU",
        density: "1.30 ± 0.05 كجم/لتر",
        dryingTime: "1-2 ساعات",
        recoatTime: "4 ساعات",
        coverage: "10 م²/لتر",
        toolCleaning: "بالماء",
        curingTime: "24 ساعة",
        temperatureResistance: "حتى 60°م",
      },
      de: {
        color: "Weiß",
        type: "Wasserbasierter Sealer",
        solidsContent: "35%",
        viscosity: "70-80 KU",
        density: "1,30 ± 0,05 kg/Liter",
        dryingTime: "1-2 Stunden",
        recoatTime: "4 Stunden",
        coverage: "10 m²/Liter",
        toolCleaning: "Mit Wasser",
        curingTime: "24 Stunden",
        temperatureResistance: "Bis 60°C",
      },
      tr: {
        color: "Beyaz",
        type: "Su bazlı sızdırmazlık",
        solidsContent: "35%",
        viscosity: "70-80 KU",
        density: "1,30 ± 0,05 kg/litre",
        dryingTime: "1-2 saat",
        recoatTime: "4 saat",
        coverage: "10 m²/litre",
        toolCleaning: "Su ile",
        curingTime: "24 saat",
        temperatureResistance: "60°C'ye kadar",
      },
    },
    usage: {
      en: {
        surfacePrep: "Surface must be clean, dry, and free from dust.",
        application: "Apply with brush or roller. Allow to dry before topcoat.",
      },
      ar: {
        surfacePrep: "يجب أن يكون السطح نظيفًا وجافًا وخاليًا من الغبار.",
        application:
          "طبق بالفرشاة أو الرول. اتركه حتى يجف قبل الطبقة النهائية.",
      },
      de: {
        surfacePrep: "Die Oberfläche muss sauber, trocken und staubfrei sein.",
        application:
          "Mit Pinsel oder Rolle auftragen. Vor Deckanstrich trocknen lassen.",
      },
      tr: {
        surfacePrep: "Yüzey temiz, kuru ve tozdan arınmış olmalıdır.",
        application:
          "Fırça veya rulo ile uygulayın. Üst kat uygulamadan önce kurumasını bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months from production date",
        conditions:
          "Store in original container at +5°C to +30°C. Keep away from frost.",
      },
      ar: {
        shelfLife: "24 شهرًا من تاريخ الإنتاج",
        conditions:
          "يُخزن في الحاوية الأصلية عند +5 إلى +30°م. بعيدًا عن التجمد.",
      },
      de: {
        shelfLife: "24 Monate ab Produktionsdatum",
        conditions:
          "In Originalbehälter bei +5°C bis +30°C lagern. Vor Frost schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 24 ay",
        conditions:
          "+5°C ile +30°C arasında orijinal kapta saklayın. Don tehlikesinden uzak tutun.",
      },
    },
  },

  {
    id: 402,
    type: "primer-paints",
    category: "water-based",
    image: testImage,
    name: {
      en: "Transparent Water Based Sealer",
      ar: "سيلر مائي شفاف",
      de: "Transparenter wasserbasierter Sealer",
      tr: "Şeffaf Su Bazlı Sızdırmazlık",
    },
    description: {
      en: "Clear water-based sealer for surface protection.",
      ar: "سيلر مائي شفاف لحماية السطح.",
      de: "Transparenter wasserbasierter Sealer zum Oberflächenschutz.",
      tr: "Yüzey koruması için şeffaf su bazlı sızdırmazlık.",
    },
    features: {
      en: ["Easy application", "Non-yellowing", "Fast drying"],
      ar: ["سهل التطبيق", "لا يصفر", "سريع الجفاف"],
      de: ["Einfache Anwendung", "Vergilbungsfrei", "Schnelltrocknend"],
      tr: ["Kolay uygulama", "Sarılaşmaz", "Hızlı kuruma"],
    },
    fullDescription: {
      en: "Transparent Water Based Sealer provides a protective layer without altering surface appearance. Suitable for interior and exterior surfaces.",
      ar: "يقدم السيلر المائي الشفاف طبقة حماية دون تغيير مظهر السطح. مناسب للأسطح الداخلية والخارجية.",
      de: "Transparenter wasserbasierter Sealer bietet eine Schutzschicht, ohne das Erscheinungsbild der Oberfläche zu verändern. Geeignet für Innen- und Außenflächen.",
      tr: "Şeffaf su bazlı sızdırmazlık, yüzey görünümünü değiştirmeden koruyucu bir tabaka sağlar. İç ve dış mekan yüzeyleri için uygundur.",
    },
    detailedFeatures: {
      en: [
        "Protects surfaces",
        "Non-toxic",
        "Fast drying",
        "Easy sanding",
        "Improves topcoat adhesion",
        "Environmentally friendly",
      ],
      ar: [
        "يحمي الأسطح",
        "غير سام",
        "سريع الجفاف",
        "سهل الصنفرة",
        "يحسن التصاق الطبقة النهائية",
        "صديق للبيئة",
      ],
      de: [
        "Schützt Oberflächen",
        "Ungiftig",
        "Schnelltrocknend",
        "Leicht zu schleifen",
        "Verbessert Haftung Deckanstrich",
        "Umweltfreundlich",
      ],
      tr: [
        "Yüzeyleri korur",
        "Zararsız",
        "Hızlı kuruma",
        "Kolay zımparalama",
        "Üst kat yapışmasını iyileştirir",
        "Çevre dostu",
      ],
    },
    technicalSpecs: {
      en: {
        color: "Transparent",
        type: "Water-based sealer",
        solidsContent: "30%",
        viscosity: "70-80 KU",
        density: "1.25 ± 0.05 kg/liter",
        dryingTime: "1-2 hours",
        recoatTime: "4 hours",
        coverage: "10 m²/liter",
        toolCleaning: "With water",
        curingTime: "24 hours",
        temperatureResistance: "Up to 60°C",
      },
      ar: {
        color: "شفاف",
        type: "سيلر مائي",
        solidsContent: "30%",
        viscosity: "70-80 KU",
        density: "1.25 ± 0.05 كجم/لتر",
        dryingTime: "1-2 ساعات",
        recoatTime: "4 ساعات",
        coverage: "10 م²/لتر",
        toolCleaning: "بالماء",
        curingTime: "24 ساعة",
        temperatureResistance: "حتى 60°م",
      },
      de: {
        color: "Transparent",
        type: "Wasserbasierter Sealer",
        solidsContent: "30%",
        viscosity: "70-80 KU",
        density: "1,25 ± 0,05 kg/Liter",
        dryingTime: "1-2 Stunden",
        recoatTime: "4 Stunden",
        coverage: "10 m²/Liter",
        toolCleaning: "Mit Wasser",
        curingTime: "24 Stunden",
        temperatureResistance: "Bis 60°C",
      },
      tr: {
        color: "Şeffaf",
        type: "Su bazlı sızdırmazlık",
        solidsContent: "30%",
        viscosity: "70-80 KU",
        density: "1,25 ± 0,05 kg/litre",
        dryingTime: "1-2 saat",
        recoatTime: "4 saat",
        coverage: "10 m²/litre",
        toolCleaning: "Su ile",
        curingTime: "24 saat",
        temperatureResistance: "60°C'ye kadar",
      },
    },
    usage: {
      en: {
        surfacePrep: "Surface must be clean, dry, and free from dust.",
        application: "Apply with brush or roller. Allow to dry before topcoat.",
      },
      ar: {
        surfacePrep: "يجب أن يكون السطح نظيفًا وجافًا وخاليًا من الغبار.",
        application:
          "طبق بالفرشاة أو الرول. اتركه حتى يجف قبل الطبقة النهائية.",
      },
      de: {
        surfacePrep: "Die Oberfläche muss sauber, trocken und staubfrei sein.",
        application:
          "Mit Pinsel oder Rolle auftragen. Vor Deckanstrich trocknen lassen.",
      },
      tr: {
        surfacePrep: "Yüzey temiz, kuru ve tozdan arınmış olmalıdır.",
        application:
          "Fırça veya rulo ile uygulayın. Üst kat uygulamadan önce kurumasını bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months from production date",
        conditions:
          "Store in original container at +5°C to +30°C. Keep away from frost.",
      },
      ar: {
        shelfLife: "24 شهرًا من تاريخ الإنتاج",
        conditions:
          "يُخزن في الحاوية الأصلية عند +5 إلى +30°م. بعيدًا عن التجمد.",
      },
      de: {
        shelfLife: "24 Monate ab Produktionsdatum",
        conditions:
          "In Originalbehälter bei +5°C bis +30°C lagern. Vor Frost schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 24 ay",
        conditions:
          "+5°C ile +30°C arasında orijinal kapta saklayın. Don tehlikesinden uzak tutun.",
      },
    },
  },

  {
    id: 403,
    type: "primer-paints",
    category: "water-based",
    image: testImage,
    name: {
      en: "Water Based Undercoat",
      ar: "أساس مائي",
      de: "Wasserbasierte Grundierung",
      tr: "Su Bazlı Astarlık",
    },
    description: {
      en: "Water based undercoat for preparing surfaces before topcoat.",
      ar: "أساس مائي لتحضير الأسطح قبل الطبقة النهائية.",
      de: "Wasserbasierte Grundierung zur Vorbereitung der Oberfläche vor dem Deckanstrich.",
      tr: "Üst kat uygulamadan önce yüzey hazırlığı için su bazlı astar.",
    },
    features: {
      en: ["Enhances topcoat adhesion", "Easy to apply", "Quick drying"],
      ar: ["يحسن التصاق الطبقة النهائية", "سهل التطبيق", "سريع الجفاف"],
      de: [
        "Verbessert Haftung des Deckanstrichs",
        "Einfach aufzutragen",
        "Schnelltrocknend",
      ],
      tr: ["Üst kat yapışmasını iyileştirir", "Kolay uygulama", "Hızlı kuruma"],
    },
    fullDescription: {
      en: "Water Based Undercoat prepares the surface for uniform topcoat application and improves paint durability.",
      ar: "الأساس المائي يحضر السطح لتطبيق طبقة نهائية متساوية ويزيد من متانة الطلاء.",
      de: "Wasserbasierte Grundierung bereitet die Oberfläche für einen gleichmäßigen Deckanstrich vor und erhöht die Haltbarkeit des Lacks.",
      tr: "Su bazlı astar, yüzeyi homojen üst kat uygulamasına hazırlar ve boyanın dayanıklılığını artırır.",
    },
    detailedFeatures: {
      en: [
        "Seals porous surfaces",
        "Fast drying",
        "Non-toxic",
        "Easy sanding",
        "Suitable for all interiors",
        "Improves paint coverage",
      ],
      ar: [
        "يغلق الأسطح المسامية",
        "سريع الجفاف",
        "غير سام",
        "سهل الصنفرة",
        "مناسب لجميع الأسطح الداخلية",
        "يحسن تغطية الطلاء",
      ],
      de: [
        "Versiegelt poröse Oberflächen",
        "Schnelltrocknend",
        "Ungiftig",
        "Leicht zu schleifen",
        "Für alle Innenräume geeignet",
        "Verbessert Farbdeckung",
      ],
      tr: [
        "Gözenekli yüzeyleri kapatır",
        "Hızlı kuruma",
        "Zararsız",
        "Kolay zımparalama",
        "Tüm iç mekanlar için uygundur",
        "Boya örtücülüğünü artırır",
      ],
    },
    technicalSpecs: {
      en: {
        color: "White",
        type: "Water-based undercoat",
        solidsContent: "32%",
        viscosity: "70-80 KU",
        density: "1.28 ± 0.05 kg/liter",
        dryingTime: "1-2 hours",
        recoatTime: "4 hours",
        coverage: "10 m²/liter",
        toolCleaning: "With water",
        curingTime: "24 hours",
        temperatureResistance: "Up to 60°C",
      },
      ar: {
        color: "أبيض",
        type: "أساس مائي",
        solidsContent: "32%",
        viscosity: "70-80 KU",
        density: "1.28 ± 0.05 كجم/لتر",
        dryingTime: "1-2 ساعات",
        recoatTime: "4 ساعات",
        coverage: "10 م²/لتر",
        toolCleaning: "بالماء",
        curingTime: "24 ساعة",
        temperatureResistance: "حتى 60°م",
      },
      de: {
        color: "Weiß",
        type: "Wasserbasierte Grundierung",
        solidsContent: "32%",
        viscosity: "70-80 KU",
        density: "1,28 ± 0,05 kg/Liter",
        dryingTime: "1-2 Stunden",
        recoatTime: "4 Stunden",
        coverage: "10 m²/Liter",
        toolCleaning: "Mit Wasser",
        curingTime: "24 Stunden",
        temperatureResistance: "Bis 60°C",
      },
      tr: {
        color: "Beyaz",
        type: "Su bazlı astarlık",
        solidsContent: "32%",
        viscosity: "70-80 KU",
        density: "1,28 ± 0,05 kg/litre",
        dryingTime: "1-2 saat",
        recoatTime: "4 saat",
        coverage: "10 m²/litre",
        toolCleaning: "Su ile",
        curingTime: "24 saat",
        temperatureResistance: "60°C'ye kadar",
      },
    },
    usage: {
      en: {
        surfacePrep: "Ensure surface is clean, dry and free from dust.",
        application:
          "Apply one coat with brush or roller. Allow to dry completely before topcoat.",
      },
      ar: {
        surfacePrep: "تأكد من أن السطح نظيف وجاف وخالٍ من الغبار.",
        application:
          "طبق طبقة واحدة بالفرشاة أو الرول. اتركها حتى تجف تمامًا قبل الطبقة النهائية.",
      },
      de: {
        surfacePrep: "Oberfläche muss sauber, trocken und staubfrei sein.",
        application:
          "Eine Schicht mit Pinsel oder Rolle auftragen. Vor Deckanstrich vollständig trocknen lassen.",
      },
      tr: {
        surfacePrep: "Yüzey temiz, kuru ve tozdan arınmış olmalıdır.",
        application:
          "Fırça veya rulo ile bir kat uygulayın. Üst kat uygulamadan önce tamamen kurumasını bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months from production date",
        conditions:
          "Store in original container at +5°C to +30°C. Keep away from frost.",
      },
      ar: {
        shelfLife: "24 شهرًا من تاريخ الإنتاج",
        conditions:
          "يُخزن في الحاوية الأصلية عند +5 إلى +30°م. بعيدًا عن التجمد.",
      },
      de: {
        shelfLife: "24 Monate ab Produktionsdatum",
        conditions:
          "In Originalbehälter bei +5°C bis +30°C lagern. Vor Frost schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 24 ay",
        conditions:
          "+5°C ile +30°C arasında orijinal kapta saklayın. Don tehlikesinden uzak tutun.",
      },
    },
  },

  {
    id: 404,
    type: "primer-paints",
    category: "solvent-based",
    image: testImage,
    name: {
      en: "Oil Based Undercoat",
      ar: "أساس زيتي",
      de: "Ölbasierte Grundierung",
      tr: "Yağ Bazlı Astarlık",
    },
    description: {
      en: "Oil based undercoat for excellent adhesion and durability.",
      ar: "أساس زيتي لالتصاق ممتاز ومتانة عالية.",
      de: "Ölbasierte Grundierung für hervorragende Haftung und Haltbarkeit.",
      tr: "Üst kat yapışması ve dayanıklılık için yağ bazlı astar.",
    },
    features: {
      en: ["Strong adhesion", "Durable finish", "Seals porous surfaces"],
      ar: ["التصاق قوي", "لمسة نهائية متينة", "يغلق الأسطح المسامية"],
      de: [
        "Starke Haftung",
        "Langlebiges Finish",
        "Versiegelt poröse Oberflächen",
      ],
      tr: ["Güçlü yapışma", "Dayanıklı bitiş", "Gözenekli yüzeyleri kapatır"],
    },
    fullDescription: {
      en: "Oil Based Undercoat prepares surfaces for topcoats, enhances adhesion, and provides a durable base for painting.",
      ar: "الأساس الزيتي يحضر الأسطح للطبقة النهائية، ويعزز التصاق الطلاء، ويوفر قاعدة متينة للدهان.",
      de: "Ölbasierte Grundierung bereitet Oberflächen für Deckanstriche vor, verbessert die Haftung und bietet eine langlebige Basis.",
      tr: "Yağ bazlı astar, yüzeyleri üst katlar için hazırlar, yapışmayı artırır ve dayanıklı bir temel sağlar.",
    },
    detailedFeatures: {
      en: [
        "Seals surfaces",
        "Enhances topcoat adhesion",
        "Durable coating",
        "Easy application",
        "Suitable for metal and wood",
        "Non-yellowing",
      ],
      ar: [
        "يغلق الأسطح",
        "يعزز التصاق الطبقة النهائية",
        "طلاء متين",
        "سهل التطبيق",
        "مناسب للمعدن والخشب",
        "لا يصفر",
      ],
      de: [
        "Versiegelt Oberflächen",
        "Verbessert Haftung Deckanstrich",
        "Langlebige Beschichtung",
        "Einfach aufzutragen",
        "Für Metall und Holz geeignet",
        "Vergilbungsfrei",
      ],
      tr: [
        "Yüzeyleri kapatır",
        "Üst kat yapışmasını iyileştirir",
        "Dayanıklı kaplama",
        "Kolay uygulama",
        "Metal ve ahşap için uygun",
        "Sarılaşmaz",
      ],
    },
    technicalSpecs: {
      en: {
        color: "White/Red",
        type: "Oil-based undercoat",
        solidsContent: "40%",
        viscosity: "80-90 KU",
        density: "1.35 ± 0.05 kg/liter",
        dryingTime: "4-6 hours",
        recoatTime: "8 hours",
        coverage: "8-10 m²/liter",
        toolCleaning: "With mineral turpentine",
        curingTime: "48 hours",
        temperatureResistance: "Up to 80°C",
      },
      ar: {
        color: "أبيض/أحمر",
        type: "أساس زيتي",
        solidsContent: "40%",
        viscosity: "80-90 KU",
        density: "1.35 ± 0.05 كجم/لتر",
        dryingTime: "4-6 ساعات",
        recoatTime: "8 ساعات",
        coverage: "8-10 م²/لتر",
        toolCleaning: "بالزيت المعدني",
        curingTime: "48 ساعة",
        temperatureResistance: "حتى 80°م",
      },
      de: {
        color: "Weiß/Rot",
        type: "Ölbasierte Grundierung",
        solidsContent: "40%",
        viscosity: "80-90 KU",
        density: "1,35 ± 0,05 kg/Liter",
        dryingTime: "4-6 Stunden",
        recoatTime: "8 Stunden",
        coverage: "8-10 m²/Liter",
        toolCleaning: "Mit Mineral-Terpentin",
        curingTime: "48 Stunden",
        temperatureResistance: "Bis 80°C",
      },
      tr: {
        color: "Beyaz/Kırmızı",
        type: "Yağ bazlı astarlık",
        solidsContent: "40%",
        viscosity: "80-90 KU",
        density: "1,35 ± 0,05 kg/litre",
        dryingTime: "4-6 saat",
        recoatTime: "8 saat",
        coverage: "8-10 m²/litre",
        toolCleaning: "Mineral terebentin ile",
        curingTime: "48 saat",
        temperatureResistance: "80°C'ye kadar",
      },
    },
    usage: {
      en: {
        surfacePrep: "Surface must be clean, dry, and free from grease.",
        application: "Apply with brush or roller. Allow to dry before topcoat.",
      },
      ar: {
        surfacePrep: "يجب أن يكون السطح نظيفًا وجافًا وخاليًا من الشحوم.",
        application:
          "طبق بالفرشاة أو الرول. اتركه حتى يجف قبل الطبقة النهائية.",
      },
      de: {
        surfacePrep: "Oberfläche muss sauber, trocken und fettfrei sein.",
        application:
          "Mit Pinsel oder Rolle auftragen. Vor Deckanstrich trocknen lassen.",
      },
      tr: {
        surfacePrep: "Yüzey temiz, kuru ve yağsız olmalıdır.",
        application:
          "Fırça veya rulo ile uygulayın. Üst kat uygulamadan önce kurumasını bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months from production date",
        conditions:
          "Store in original container at +5°C to +30°C. Keep away from frost.",
      },
      ar: {
        shelfLife: "24 شهرًا من تاريخ الإنتاج",
        conditions:
          "يُخزن في الحاوية الأصلية عند +5 إلى +30°م. بعيدًا عن التجمد.",
      },
      de: {
        shelfLife: "24 Monate ab Produktionsdatum",
        conditions:
          "In Originalbehälter bei +5°C bis +30°C lagern. Vor Frost schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 24 ay",
        conditions:
          "+5°C ile +30°C arasında orijinal kapta saklayın. Don tehlikesinden uzak tutun.",
      },
    },
  },

  {
    id: 405,
    type: "primer-paints",
    category: "metal",
    image: testImage,
    name: {
      en: "Red Oxide Primer",
      ar: "برايمر أكسيد أحمر",
      de: "Red Oxide Grundierung",
      tr: "Kırmızı Oksit Astar",
    },
    description: {
      en: "Red oxide primer for metal surfaces to prevent rust and improve adhesion.",
      ar: "برايمر أكسيد أحمر للأسطح المعدنية لمنع الصدأ وتحسين الالتصاق.",
      de: "Red Oxide Grundierung für Metalloberflächen zum Rostschutz und zur Verbesserung der Haftung.",
      tr: "Metal yüzeyler için pas önleyici ve yapışmayı artırıcı kırmızı oksit astar.",
    },
    features: {
      en: ["Prevents rust", "Excellent adhesion", "Durable coating"],
      ar: ["يمنع الصدأ", "التصاق ممتاز", "طلاء متين"],
      de: [
        "Schützt vor Rost",
        "Hervorragende Haftung",
        "Langlebige Beschichtung",
      ],
      tr: ["Pas önler", "Mükemmel yapışma", "Dayanıklı kaplama"],
    },
    fullDescription: {
      en: "Red Oxide Primer provides a protective layer for metal surfaces, enhancing corrosion resistance and ensuring strong adhesion for topcoats.",
      ar: "برايمر أكسيد أحمر يوفر طبقة حماية للأسطح المعدنية، ويعزز مقاومة التآكل ويضمن التصاقًا قويًا للطبقة النهائية.",
      de: "Red Oxide Grundierung bietet eine Schutzschicht für Metalloberflächen, verbessert die Korrosionsbeständigkeit und sorgt für starke Haftung der Deckanstriche.",
      tr: "Kırmızı oksit astar, metal yüzeyler için koruyucu bir tabaka sağlar, korozyon direncini artırır ve üst katlar için güçlü yapışma sağlar.",
    },
    detailedFeatures: {
      en: [
        "Protects metal",
        "Enhances topcoat adhesion",
        "Fast drying",
        "Durable finish",
        "Easy application",
        "Prevents corrosion",
      ],
      ar: [
        "يحمي المعدن",
        "يعزز التصاق الطبقة النهائية",
        "سريع الجفاف",
        "لمسة نهائية متينة",
        "سهل التطبيق",
        "يمنع التآكل",
      ],
      de: [
        "Schützt Metall",
        "Verbessert Haftung Deckanstrich",
        "Schnelltrocknend",
        "Langlebiges Finish",
        "Einfach aufzutragen",
        "Verhindert Korrosion",
      ],
      tr: [
        "Metali korur",
        "Üst kat yapışmasını iyileştirir",
        "Hızlı kuruma",
        "Dayanıklı bitiş",
        "Kolay uygulama",
        "Korozyonu önler",
      ],
    },
    technicalSpecs: {
      en: {
        color: "Red",
        type: "Red oxide primer",
        solidsContent: "45%",
        viscosity: "80-90 KU",
        density: "1.40 ± 0.05 kg/liter",
        dryingTime: "2-3 hours",
        recoatTime: "6 hours",
        coverage: "8-10 m²/liter",
        toolCleaning: "With mineral turpentine",
        curingTime: "24 hours",
        temperatureResistance: "Up to 100°C",
      },
      ar: {
        color: "أحمر",
        type: "برايمر أكسيد أحمر",
        solidsContent: "45%",
        viscosity: "80-90 KU",
        density: "1.40 ± 0.05 كجم/لتر",
        dryingTime: "2-3 ساعات",
        recoatTime: "6 ساعات",
        coverage: "8-10 م²/لتر",
        toolCleaning: "بالزيت المعدني",
        curingTime: "24 ساعة",
        temperatureResistance: "حتى 100°م",
      },
      de: {
        color: "Rot",
        type: "Red Oxide Grundierung",
        solidsContent: "45%",
        viscosity: "80-90 KU",
        density: "1,40 ± 0,05 kg/Liter",
        dryingTime: "2-3 Stunden",
        recoatTime: "6 Stunden",
        coverage: "8-10 m²/Liter",
        toolCleaning: "Mit Mineral-Terpentin",
        curingTime: "24 Stunden",
        temperatureResistance: "Bis 100°C",
      },
      tr: {
        color: "Kırmızı",
        type: "Kırmızı oksit astar",
        solidsContent: "45%",
        viscosity: "80-90 KU",
        density: "1,40 ± 0,05 kg/litre",
        dryingTime: "2-3 saat",
        recoatTime: "6 saat",
        coverage: "8-10 m²/litre",
        toolCleaning: "Mineral terebentin ile",
        curingTime: "24 saat",
        temperatureResistance: "100°C'ye kadar",
      },
    },
    usage: {
      en: {
        surfacePrep: "Metal surface must be clean, dry, and free from rust.",
        application: "Apply with brush or spray. Allow to dry before topcoat.",
      },
      ar: {
        surfacePrep: "يجب أن تكون الأسطح المعدنية نظيفة وجافة وخالية من الصدأ.",
        application:
          "طبق بالفرشاة أو الرش. اتركها حتى تجف قبل الطبقة النهائية.",
      },
      de: {
        surfacePrep: "Metalloberfläche muss sauber, trocken und rostfrei sein.",
        application:
          "Mit Pinsel oder Sprühgerät auftragen. Vor Deckanstrich trocknen lassen.",
      },
      tr: {
        surfacePrep:
          "Metal yüzey temiz, kuru ve paslardan arındırılmış olmalıdır.",
        application:
          "Fırça veya sprey ile uygulayın. Üst kat uygulamadan önce kurumasını bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months from production date",
        conditions:
          "Store in original container at +5°C to +30°C. Keep away from frost.",
      },
      ar: {
        shelfLife: "24 شهرًا من تاريخ الإنتاج",
        conditions:
          "يُخزن في الحاوية الأصلية عند +5 إلى +30°م. بعيدًا عن التجمد.",
      },
      de: {
        shelfLife: "24 Monate ab Produktionsdatum",
        conditions:
          "In Originalbehälter bei +5°C bis +30°C lagern. Vor Frost schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 24 ay",
        conditions:
          "+5°C ile +30°C arasında orijinal kapta saklayın. Don tehlikesinden uzak tutun.",
      },
    },
  },
];

export default primerPaintsProducts;
