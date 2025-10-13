import testImage from "../assets/color-1.png";

const puttyProducts = [
  // 1. معجون سيلر لتسوية الجدران
  {
    id: 602,
    type: "putty",
    category: "wall-sealer",
    image: testImage,
    name: {
      en: "Wall Sealer Putty",
      ar: "معجون سيلر لتسوية الجدران",
      de: "Wandversiegelungs-Spachtel",
      tr: "Duvar Sızdırmazlık Macunu",
    },
    description: {
      en: "Sealer putty for leveling walls before painting.",
      ar: "معجون سيلر لتسوية الجدران قبل الدهان.",
      de: "Versiegelungsspachtel zum Nivellieren von Wänden vor dem Streichen.",
      tr: "Boyadan önce duvarları düzeltmek için sızdırmazlık macunu.",
    },
    features: {
      en: ["Easy leveling", "Smooth finish", "Quick drying"],
      ar: ["سهولة التسوية", "لمسة نهائية ناعمة", "يجف بسرعة"],
      de: ["Einfaches Nivellieren", "Glatte Oberfläche", "Schnelltrocknend"],
      tr: ["Kolay düzeltme", "Pürüzsüz bitiş", "Hızlı kuruma"],
    },
    fullDescription: {
      en: "Wall Sealer Putty is designed to create a smooth, uniform surface on walls. Ideal for preparing surfaces before painting, it fills minor imperfections and ensures perfect adhesion for topcoats.",
      ar: "معجون سيلر لتسوية الجدران مصمم لإنشاء سطح أملس ومتساوٍ على الجدران. مثالي لتحضير الأسطح قبل الدهان، يملأ العيوب الصغيرة ويضمن التصاق مثالي للطبقات النهائية.",
      de: "Wandversiegelungs-Spachtel ist für die Schaffung einer glatten, gleichmäßigen Oberfläche an Wänden konzipiert. Ideal zur Vorbereitung von Oberflächen vor dem Streichen, füllt kleine Unebenheiten und gewährleistet perfekte Haftung für Decklacke.",
      tr: "Duvar Sızdırmazlık Macunu, duvarlarda pürüzsüz ve düzgün bir yüzey oluşturmak için tasarlanmıştır. Boyadan önce yüzeyleri hazırlamak için idealdir, küçük kusurları doldurur ve üst kat boyalar için mükemmel yapışma sağlar.",
    },
    detailedFeatures: {
      en: [
        "High adhesion",
        "Quick drying",
        "Fills minor cracks",
        "Smooth application",
      ],
      ar: ["التصاق عالي", "يجف بسرعة", "يملأ الشقوق الصغيرة", "تطبيق سلس"],
      de: [
        "Hohe Haftung",
        "Schnelltrocknend",
        "Füllt kleine Risse",
        "Glatte Anwendung",
      ],
      tr: [
        "Yüksek yapışma",
        "Hızlı kuruma",
        "Küçük çatlakları doldurur",
        "Kolay uygulama",
      ],
    },
    technicalSpecs: {
      en: {
        color: "White",
        type: "Sealer putty",
        dryingTime: "1-2 hours",
        coverage: "0.8-1 kg/m²",
        sandingTime: "After 2 hours",
        toolCleaning: "With water",
      },
      ar: {
        color: "أبيض",
        type: "معجون سيلر",
        dryingTime: "1-2 ساعات",
        coverage: "0.8-1 كجم/م²",
        sandingTime: "بعد ساعتين",
        toolCleaning: "بالماء",
      },
      de: {
        color: "Weiß",
        type: "Versiegelungsspachtel",
        dryingTime: "1-2 Stunden",
        coverage: "0,8-1 kg/m²",
        sandingTime: "Nach 2 Stunden",
        toolCleaning: "Mit Wasser",
      },
      tr: {
        color: "Beyaz",
        type: "Sızdırmazlık macunu",
        dryingTime: "1-2 saat",
        coverage: "0,8-1 kg/m²",
        sandingTime: "2 saat sonra",
        toolCleaning: "Su ile",
      },
    },
    usage: {
      en: {
        surfacePrep: "Ensure wall is clean, dry, and free from dust.",
        application:
          "Apply thin layer with putty knife, let dry, sand smooth. Repeat if necessary.",
      },
      ar: {
        surfacePrep: "تأكد من أن الجدار نظيف وجاف وخالٍ من الغبار.",
        application:
          "ضع طبقة رقيقة باستخدام ملعقة المعجون، اتركها لتجف ثم صنفرها بشكل ناعم. كرر إذا لزم الأمر.",
      },
      de: {
        surfacePrep:
          "Stellen Sie sicher, dass die Wand sauber, trocken und staubfrei ist.",
        application:
          "Dünne Schicht mit Spachtel auftragen, trocknen lassen, glatt schleifen. Bei Bedarf wiederholen.",
      },
      tr: {
        surfacePrep:
          "Duvarın temiz, kuru ve tozdan arınmış olduğundan emin olun.",
        application:
          "Macun bıçağıyla ince bir kat uygulayın, kurumasını bekleyin, sonra pürüzsüz zımparalayın. Gerekirse tekrarlayın.",
      },
    },
    storage: {
      en: {
        shelfLife: "12 months from production date",
        conditions: "Store in dry place, protected from sunlight.",
      },
      ar: {
        shelfLife: "12 شهرًا من تاريخ الإنتاج",
        conditions: "يُخزن في مكان جاف ومحمي من أشعة الشمس.",
      },
      de: {
        shelfLife: "12 Monate ab Produktionsdatum",
        conditions: "An einem trockenen Ort lagern, vor Sonnenlicht schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 12 ay",
        conditions: "Kuru bir yerde saklayın, güneşten koruyun.",
      },
    },
  },

  // 2. معجون سماكات جبسن بورد
  {
    id: 603,
    type: "putty",
    category: "gypsum-thick",
    image: testImage,
    name: {
      en: "Gypsum Board Thick Putty",
      ar: "معجون سماكات جبسن بورد",
      de: "Gipskarton Dickspachtel",
      tr: "Alçıpan Kalın Macunu",
    },
    description: {
      en: "Thick putty for finishing gypsum boards.",
      ar: "معجون سميك لتشطيب ألواح الجبس.",
      de: "Dicker Spachtel für Gipskartonoberflächen.",
      tr: "Alçıpan yüzeyleri için kalın macun.",
    },
    features: {
      en: ["High filling capacity", "Smooth finish", "Easy sanding"],
      ar: ["سعة ملء عالية", "لمسة نهائية ناعمة", "سهل الصنفرة"],
      de: ["Hohe Füllkapazität", "Glatte Oberfläche", "Leicht zu schleifen"],
      tr: ["Yüksek dolgu kapasitesi", "Pürüzsüz bitiş", "Kolay zımparalama"],
    },
    fullDescription: {
      en: "Gypsum Board Thick Putty is designed to fill deep joints and imperfections on gypsum boards, providing a smooth, level surface for painting or wallpapering.",
      ar: "معجون سماكات جبسن بورد مصمم لملء الفواصل العميقة والعيوب على ألواح الجبس، ويوفر سطحًا أملسًا ومتساويًا للدهان أو الورق الحائطي.",
      de: "Gipskarton Dickspachtel ist dafür konzipiert, tiefe Fugen und Unebenheiten auf Gipskartonplatten zu füllen und eine glatte, ebene Oberfläche für das Streichen oder Tapezieren zu schaffen.",
      tr: "Alçıpan Kalın Macunu, alçıpan yüzeylerdeki derin ek yerlerini ve kusurları doldurmak için tasarlanmıştır, boyama veya duvar kağıdı uygulamaları için pürüzsüz bir yüzey sağlar.",
    },
    detailedFeatures: {
      en: [
        "Thick consistency",
        "High coverage",
        "Easy to sand",
        "Durable finish",
      ],
      ar: ["قوام سميك", "تغطية عالية", "سهل الصنفرة", "تشطيب متين"],
      de: [
        "Dickflüssig",
        "Hohe Deckkraft",
        "Leicht zu schleifen",
        "Langlebiges Finish",
      ],
      tr: [
        "Kalın kıvam",
        "Yüksek kaplama",
        "Kolay zımparalama",
        "Dayanıklı bitiş",
      ],
    },
    technicalSpecs: {
      en: {
        color: "White",
        type: "Thick gypsum putty",
        dryingTime: "6-8 hours",
        coverage: "1-1.5 kg/m² (per layer)",
        sandingTime: "After 8 hours",
        toolCleaning: "With water",
      },
      ar: {
        color: "أبيض",
        type: "معجون جبس سميك",
        dryingTime: "6-8 ساعات",
        coverage: "1-1.5 كجم/م² (لكل طبقة)",
        sandingTime: "بعد 8 ساعات",
        toolCleaning: "بالماء",
      },
      de: {
        color: "Weiß",
        type: "Dicker Gipsputz",
        dryingTime: "6-8 Stunden",
        coverage: "1-1,5 kg/m² (pro Schicht)",
        sandingTime: "Nach 8 Stunden",
        toolCleaning: "Mit Wasser",
      },
      tr: {
        color: "Beyaz",
        type: "Kalın alçı macunu",
        dryingTime: "6-8 saat",
        coverage: "1-1,5 kg/m² (kat başına)",
        sandingTime: "8 saat sonra",
        toolCleaning: "Su ile",
      },
    },
    usage: {
      en: {
        surfacePrep: "Ensure gypsum boards are clean and dry.",
        application:
          "Apply thick layer over joints and imperfections. Let dry, then sand smooth.",
      },
      ar: {
        surfacePrep: "تأكد من أن ألواح الجبس نظيفة وجافة.",
        application:
          "ضع طبقة سميكة فوق الفواصل والعيوب. اتركها لتجف ثم صنفرها بشكل ناعم.",
      },
      de: {
        surfacePrep:
          "Stellen Sie sicher, dass die Gipskartonplatten sauber und trocken sind.",
        application:
          "Dicke Schicht über Fugen und Unebenheiten auftragen. Trocknen lassen und glatt schleifen.",
      },
      tr: {
        surfacePrep: "Alçıpanların temiz ve kuru olduğundan emin olun.",
        application:
          "Ek yerleri ve kusurların üzerine kalın kat uygulayın. Kurumasını bekleyin ve pürüzsüz zımparalayın.",
      },
    },
    storage: {
      en: {
        shelfLife: "12 months from production date",
        conditions: "Store in dry place, protect from sunlight.",
      },
      ar: {
        shelfLife: "12 شهرًا من تاريخ الإنتاج",
        conditions: "يُخزن في مكان جاف ومحمي من أشعة الشمس.",
      },
      de: {
        shelfLife: "12 Monate ab Produktionsdatum",
        conditions: "An einem trockenen Ort lagern, vor Sonnenlicht schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 12 ay",
        conditions: "Kuru bir yerde saklayın, güneşten koruyun.",
      },
    },
  },

  // 3. معجون سيلكون للشقوق داخلي وخارجي
  {
    id: 604,
    type: "putty",
    category: "silicone-cracks",
    image: testImage,
    name: {
      en: "Interior & Exterior Silicone Putty",
      ar: "معجون سيلكون للشقوق داخلي وخارجي",
      de: "Innen- & Außensilikonspachtel",
      tr: "İç ve Dış Silikon Macunu",
    },
    description: {
      en: "Flexible silicone putty for filling interior and exterior cracks.",
      ar: "معجون سيليكون مرن لملء الشقوق الداخلية والخارجية.",
      de: "Flexibler Silikonspachtel zum Füllen von Innen- und Außenrissen.",
      tr: "İç ve dış çatlakları doldurmak için esnek silikon macun.",
    },
    features: {
      en: ["Flexible", "Waterproof", "Durable", "Easy application"],
      ar: ["مرن", "مقاوم للماء", "متين", "سهل التطبيق"],
      de: ["Flexibel", "Wasserfest", "Langlebig", "Einfache Anwendung"],
      tr: ["Esnek", "Su geçirmez", "Dayanıklı", "Kolay uygulama"],
    },
    fullDescription: {
      en: "Silicone Putty is ideal for sealing cracks in walls, ceilings, and other surfaces. Its flexibility allows for expansion and contraction without cracking.",
      ar: "معجون السيليكون مثالي لسد الشقوق في الجدران والأسقف والأسطح الأخرى. مرونته تسمح بالتمدد والانكماش دون تشقق.",
      de: "Silikonspachtel eignet sich ideal zum Abdichten von Rissen in Wänden, Decken und anderen Oberflächen. Seine Flexibilität ermöglicht Dehnung und Schrumpfung ohne Rissbildung.",
      tr: "Silikon Macunu, duvarlar, tavanlar ve diğer yüzeylerdeki çatlakları kapatmak için idealdir. Esnekliği sayesinde genleşme ve büzülme sırasında çatlamaz.",
    },
    detailedFeatures: {
      en: [
        "High flexibility",
        "Water and weather resistant",
        "Long-lasting",
        "Paintable after curing",
      ],
      ar: [
        "مرونة عالية",
        "مقاوم للماء والعوامل الجوية",
        "متين وطويل الأمد",
        "قابل للدهان بعد التجفيف",
      ],
      de: [
        "Hohe Flexibilität",
        "Wasser- und wetterbeständig",
        "Langlebig",
        "Überstreichbar nach Aushärtung",
      ],
      tr: [
        "Yüksek esneklik",
        "Su ve hava koşullarına dayanıklı",
        "Uzun ömürlü",
        "Kuruduktan sonra boyanabilir",
      ],
    },
    technicalSpecs: {
      en: {
        color: "White",
        type: "Silicone crack filler",
        curingTime: "24 hours",
        temperatureResistance: "-40°C to 150°C",
        toolCleaning: "With alcohol",
      },
      ar: {
        color: "أبيض",
        type: "معجون سيليكون للشقوق",
        curingTime: "24 ساعة",
        temperatureResistance: "-40° إلى 150° م",
        toolCleaning: "بالمسح بالكحول",
      },
      de: {
        color: "Weiß",
        type: "Silikonrissfüller",
        curingTime: "24 Stunden",
        temperatureResistance: "-40°C bis 150°C",
        toolCleaning: "Mit Alkohol",
      },
      tr: {
        color: "Beyaz",
        type: "Silikon çatlak dolgu macunu",
        curingTime: "24 saat",
        temperatureResistance: "-40°C ile 150°C arası",
        toolCleaning: "Alkol ile",
      },
    },
    usage: {
      en: {
        surfacePrep: "Ensure crack is clean and dry. Remove loose debris.",
        application:
          "Cut nozzle, apply putty into crack, smooth with spatula. Allow to cure.",
      },
      ar: {
        surfacePrep: "تأكد من أن الشق نظيف وجاف. أزل الحطام الفضفاض.",
        application:
          "اقطع الفوهة، ضع المعجون في الشق، وسوّها باستخدام ملعقة. اتركها لتجف.",
      },
      de: {
        surfacePrep: "Riss sauber und trocken halten. Lose Partikel entfernen.",
        application:
          "Düse abschneiden, Spachtel in Riss einfüllen, mit Spachtel glätten. Aushärten lassen.",
      },
      tr: {
        surfacePrep:
          "Çatlağın temiz ve kuru olduğundan emin olun. Gevşek parçaları temizleyin.",
        application:
          "Ucu kesin, macunu çatlağa uygulayın, spatula ile düzeltin. Kürlenmesini bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months from production date",
        conditions: "Store in dry place, protected from direct sunlight.",
      },
      ar: {
        shelfLife: "24 شهرًا من تاريخ الإنتاج",
        conditions: "يُخزن في مكان جاف بعيدًا عن أشعة الشمس المباشرة.",
      },
      de: {
        shelfLife: "24 Monate ab Produktionsdatum",
        conditions:
          "An einem trockenen Ort lagern, vor direktem Sonnenlicht schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 24 ay",
        conditions:
          "Kuru bir yerde, doğrudan güneş ışığından koruyarak saklayın.",
      },
    },
  },
];

export default puttyProducts;
