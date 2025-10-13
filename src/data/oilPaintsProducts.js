import testImage from "../assets/color-1.png";

const oilPaintsProducts = [
  {
    id: 1,
    type: "oil-paints",
    category: "glossy",
    image: testImage,
    name: {
      de: "Bondmax Glänzende Ölfarbe",
      tr: "Bondmax Parlak Yağlı Boya",
      ar: "دهان بوندماكس اللامع الزيتي",
      en: "Bondmax Glossy Oil Paint",
    },
    description: {
      de: "Hochwertige Ölfarbe mit glänzendem und langlebigem Finish.",
      tr: "Parlak ve dayanıklı bir bitişe sahip premium yağ bazlı boya.",
      ar: "دهان زيتي فاخر بلمسة نهائية لامعة ومتينة.",
      en: "Premium oil-based paint with a bright, durable glossy finish.",
    },
    features: {
      de: ["Hochglanz-Finish", "Hervorragende Haltbarkeit", "Wetterbeständig"],
      tr: [
        "Yüksek parlak bitiş",
        "Mükemmel dayanıklılık",
        "Hava koşullarına dayanıklı",
      ],
      ar: ["لمسة نهائية عالية اللمعان", "متانة ممتازة", "مقاوم للعوامل الجوية"],
      en: ["High-gloss finish", "Excellent durability", "Weather resistant"],
    },
    fullDescription: {
      de: "Bondmax Glänzende Ölfarbe ist eine hochwertige Ölfarbe, die ein helles, langlebiges und elegantes Hochglanzfinish bietet. Ideal für Metall-, Holz- und Mauerwerksflächen, bietet sie hervorragenden Schutz vor Witterung und Korrosion.",
      tr: "Bondmax Parlak Yağlı Boya, parlak, dayanıklı ve zarif bir bitiş sağlayan premium yağ bazlı boyadır. Metal, ahşap ve duvar yüzeyleri için idealdir; hava koşullarına ve korozyona karşı üstün koruma sağlar.",
      ar: "دهان بوندماكس اللامع الزيتي هو طلاء زيتي فاخر يوفر لمسة نهائية لامعة ومتينة وأنيقة. مثالي للأسطح المعدنية والخشب والبناء، يضمن حماية فائقة ضد العوامل الجوية والتآكل والتلف اليومي.",
      en: "Bondmax Glossy Oil Paint is a premium oil-based paint that provides a bright, durable, and elegant glossy finish. Ideal for metal, wood, and masonry surfaces, it ensures superior protection against weathering, corrosion, and daily wear.",
    },
    detailedFeatures: {
      de: [
        "Brillantes Hochglanz-Finish",
        "Hervorragende Haftung auf verschiedenen Oberflächen",
        "Beständig gegen Ausbleichen und Vergilben",
        "Einfach mit Pinsel oder Rolle aufzutragen",
        "Langlebiger Schutz",
        "Für Innen- und Außenbereich geeignet",
      ],
      tr: [
        "Üstün yüksek parlak bitiş",
        "Çeşitli yüzeylere mükemmel yapışma",
        "Solmaya ve sararmaya karşı dayanıklı",
        "Fırça veya rulo ile kolay uygulama",
        "Uzun ömürlü koruma",
        "İç ve dış mekan kullanımı için uygun",
      ],
      ar: [
        "لمسة نهائية فائقة اللمعان",
        "التصاق ممتاز على الأسطح المختلفة",
        "مقاوم للبهتان والاصفرار",
        "سهل التطبيق بالفرشاة أو الرول",
        "حماية متينة وطويلة الأمد",
        "مناسب للاستخدام الداخلي والخارجي",
      ],
      en: [
        "Brilliant high-gloss finish",
        "Excellent adhesion to various surfaces",
        "Resistant to fading and yellowing",
        "Easy application with brush or roller",
        "Durable and long-lasting protection",
        "Suitable for indoor and outdoor use",
      ],
    },
    technicalSpecs: {
      de: {
        color: "Verfügbar in allen Farben des Bondmax-Systems",
        type: "Ölbasiertes-Email",
        solidsContent: "52%",
        viscosity: "85-95 KU",
        density: "1,25 ± 0,05 kg/Liter",
        dryingTime: "4-6 Stunden (berührungstrocken)",
        recoatTime: "16-24 Stunden",
        sheen: "Hochglanz",
        toolCleaning: "Mit Mineralgeist oder Verdünner",
      },
      tr: {
        color: "Bondmax sisteminden tüm renklerde mevcuttur",
        type: "Yağ bazlı emaye",
        solidsContent: "52%",
        viscosity: "85-95 KU",
        density: "1,25 ± 0,05 kg/litre",
        dryingTime: "4-6 saat (temas kurusu)",
        recoatTime: "16-24 saat",
        sheen: "Yüksek parlak",
        toolCleaning: "Mineral spirit veya inceltici ile",
      },
      ar: {
        color: "متوفر بجميع الألوان من نظام بوندماكس",
        type: "دهان ألكيدي زيتي",
        solidsContent: "52%",
        viscosity: "85-95 KU",
        density: "1.25 ± 0.05 كجم/لتر",
        dryingTime: "4-6 ساعات (جفاف السطح)",
        recoatTime: "16-24 ساعة",
        sheen: "لامع عالي",
        toolCleaning: "بالمذيبات المعدنية أو مخفف الطلاء",
      },
      en: {
        color: "Available in all colors from Bondmax system",
        type: "Oil-based enamel",
        solidsContent: "52%",
        viscosity: "85-95 KU",
        density: "1.25 ± 0.05 kg/liter",
        dryingTime: "4-6 hours (touch dry)",
        recoatTime: "16-24 hours",
        sheen: "High gloss",
        toolCleaning: "With mineral spirits or thinner",
      },
    },
    usage: {
      de: {
        surfacePrep:
          "Die Oberfläche muss sauber, trocken und frei von Rost, Fett und loser Farbe sein.",
        application:
          "Vor Gebrauch gut umrühren und gleichmäßig mit Pinsel oder Rolle auftragen.",
      },
      tr: {
        surfacePrep:
          "Yüzey temiz, kuru ve pas, yağ ve gevşek boyadan arındırılmış olmalıdır.",
        application:
          "Kullanmadan önce iyice karıştırın. Fırça veya rulo ile eşit şekilde uygulayın.",
      },
      ar: {
        surfacePrep:
          "تأكد من أن السطح نظيف وجاف وخالٍ من الصدأ أو الشحوم أو الطلاء المتقشر.",
        application:
          "حرك جيدًا قبل الاستخدام وطبّق بشكل متساوٍ باستخدام فرشاة أو رول.",
      },
      en: {
        surfacePrep:
          "Ensure the surface is clean, dry, and free of rust, grease, and peeling paint.",
        application:
          "Stir thoroughly before use. Apply evenly using a brush or roller in thin layers.",
      },
    },
    storage: {
      de: {
        shelfLife: "36 Monate ab Produktionsdatum",
        conditions:
          "An einem kühlen, trockenen Ort fern von direkter Sonneneinstrahlung lagern.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 36 ay",
        conditions:
          "Serin, kuru ve doğrudan güneş ışığından uzak bir yerde saklayın.",
      },
      ar: {
        shelfLife: "36 شهرًا من تاريخ الإنتاج",
        conditions: "يُخزن في مكان بارد وجاف بعيدًا عن أشعة الشمس المباشرة.",
      },
      en: {
        shelfLife: "36 months from production date",
        conditions: "Store in a cool, dry place away from direct sunlight.",
      },
    },
  },

  // 2️⃣ Semi-Gloss
  {
    id: 2,
    type: "oil-paints",
    category: "semi-glossy",
    image: testImage,
    name: {
      de: "Bondmax Halbglanz Email",
      tr: "Bondmax Yarı Parlak Emaye",
      ar: "دهان بوندماكس نصف لامع",
      en: "Bondmax Semi-Gloss Enamel",
    },
    description: {
      de: "Langlebiger Halbglanz-Email-Lack für ein glattes, elegantes Finish.",
      tr: "Pürüzsüz ve zarif bir görünüm sağlayan dayanıklı yarı parlak emaye boya.",
      ar: "دهان نصف لامع متين يمنح لمسة ناعمة وأنيقة.",
      en: "Durable semi-gloss enamel paint for a smooth and elegant finish.",
    },
    features: {
      de: ["Halbglanz-Finish", "Glatte Textur", "Wetterbeständig"],
      tr: ["Yarı parlak bitiş", "Pürüzsüz doku", "Hava koşullarına dayanıklı"],
      ar: ["لمسة نهائية نصف لامعة", "ملمس ناعم", "مقاوم للعوامل الجوية"],
      en: ["Semi-gloss finish", "Smooth texture", "Weather resistant"],
    },
    fullDescription: {
      de: "Bondmax Halbglanz  Email bietet ein glattes, elegantes Finish mit mäßigem Glanz und hoher Haltbarkeit.",
      tr: "Bondmax Yarı Parlak Emaye, orta parlaklıkta pürüzsüz ve zarif bir görünüm sağlar.",
      ar: "دهان بوندماكس  نصف لامع يوفر مظهرًا ناعمًا وراقيًا بلمعان معتدل ومتانة عالية.",
      en: "Bondmax Semi-Gloss Enamel offers a refined, smooth appearance with moderate gloss and excellent durability.",
    },
    detailedFeatures: {
      de: [
        "Halbglänzendes Finish",
        "Glatte Oberfläche",
        "Wetterbeständig",
        "Leicht aufzutragen mit Pinsel oder Rolle",
      ],
      tr: [
        "Yarı parlak bitiş",
        "Düzgün yüzey",
        "Hava koşullarına dayanıklı",
        "Fırça veya rulo ile kolay uygulanır",
      ],
      ar: [
        "لمسة نصف لامعة",
        "سطح ناعم",
        "مقاوم للعوامل الجوية",
        "سهل التطبيق بالفرشاة أو الرول",
      ],
      en: [
        "Semi-gloss finish",
        "Smooth surface",
        "Weather resistant",
        "Easy to apply with brush or roller",
      ],
    },
    technicalSpecs: {
      de: {
        color: "In allen Bondmax-Farben erhältlich",
        type: "Halbglanz-Email",
        solidsContent: "50%",
        viscosity: "80-90 KU",
        density: "1,23 ± 0,05 kg/Liter",
        dryingTime: "5-7 Stunden (berührungstrocken)",
        recoatTime: "18-24 Stunden",
        sheen: "Halbglanz",
        toolCleaning: "Mit Verdünner reinigen",
      },
      tr: {
        color: "Bondmax renklerinde mevcuttur",
        type: "Yarı parlak emaye",
        solidsContent: "50%",
        viscosity: "80-90 KU",
        density: "1,23 ± 0,05 kg/litre",
        dryingTime: "5-7 saat (temas kurusu)",
        recoatTime: "18-24 saat",
        sheen: "Yarı parlak",
        toolCleaning: "İnceltici ile temizleyin",
      },
      ar: {
        color: "متوفر بجميع ألوان بوندماكس",
        type: "دهان نصف لامع",
        solidsContent: "50%",
        viscosity: "80-90 KU",
        density: "1.23 ± 0.05 كجم/لتر",
        dryingTime: "5-7 ساعات (جفاف السطح)",
        recoatTime: "18-24 ساعة",
        sheen: "نصف لامع",
        toolCleaning: "ينظف بالمخفف أو المذيب",
      },
      en: {
        color: "Available in all Bondmax colors",
        type: "Semi-gloss enamel",
        solidsContent: "50%",
        viscosity: "80-90 KU",
        density: "1.23 ± 0.05 kg/liter",
        dryingTime: "5-7 hours (touch dry)",
        recoatTime: "18-24 hours",
        sheen: "Semi-gloss",
        toolCleaning: "With mineral spirits or thinner",
      },
    },
    usage: {
      de: {
        surfacePrep:
          "Die Oberfläche muss sauber, trocken und frei von Rost, Fett und loser Farbe sein.",
        application:
          "Vor Gebrauch gut umrühren und gleichmäßig mit Pinsel oder Rolle auftragen.",
      },
      tr: {
        surfacePrep:
          "Yüzey temiz, kuru ve pas, yağ ve gevşek boyadan arındırılmış olmalıdır.",
        application:
          "Kullanmadan önce iyice karıştırın. Fırça veya rulo ile eşit şekilde uygulayın.",
      },
      ar: {
        surfacePrep:
          "تأكد من أن السطح نظيف وجاف وخالٍ من الصدأ أو الشحوم أو الطلاء المتقشر.",
        application:
          "حرك جيدًا قبل الاستخدام وطبّق بشكل متساوٍ باستخدام فرشاة أو رول.",
      },
      en: {
        surfacePrep:
          "Ensure the surface is clean, dry, and free of rust, grease, and peeling paint.",
        application:
          "Stir thoroughly before use. Apply evenly using a brush or roller in thin layers.",
      },
    },
    storage: {
      de: {
        shelfLife: "36 Monate ab Produktionsdatum",
        conditions: "Kühl und trocken lagern.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 36 ay",
        conditions: "Serin ve kuru yerde saklayın.",
      },
      ar: {
        shelfLife: "36 شهرًا من تاريخ الإنتاج",
        conditions: "يُخزن في مكان بارد وجاف بعيدًا عن الشمس.",
      },
      en: {
        shelfLife: "36 months from production date",
        conditions: "Keep container tightly closed in a cool, dry place.",
      },
    },
  },

  {
    id: 3,
    type: "oil-paints",
    category: "matte",
    image: testImage,
    name: {
      de: "Bondmax Matte",
      tr: "Bondmax Mat Boya",
      ar: "دهان بوندماكس المطفي",
      en: "Bondmax Matte Paint",
    },
    description: {
      de: "Matte  mit glattem Finish, hoher Deckkraft und Haltbarkeit.",
      tr: "Pürüzsüz mat bitişli, yüksek kapatıcılığa ve dayanıklılığa sahip boya.",
      ar: "دهان مطفي بملمس ناعم وتغطية قوية ومتانة عالية.",
      en: "Smooth matte finish with strong coverage and durability.",
    },
    features: {
      de: [
        "Mattes Finish",
        "Hervorragende Deckkraft",
        "Lang anhaltender Schutz",
      ],
      tr: ["Mat bitiş", "Mükemmel kapatıcılık", "Uzun ömürlü koruma"],
      ar: ["لمسة نهائية مطفية", "تغطية ممتازة", "حماية طويلة الأمد"],
      en: ["Matte finish", "Excellent coverage", "Long-lasting protection"],
    },
    fullDescription: {
      de: "Bondmax Matte Alkydfarbe bietet ein weiches, nicht reflektierendes Finish, ideal für elegante Innenräume und anspruchsvolle Außenbereiche.",
      tr: "Bondmax Mat  Boya, zarif iç mekanlar ve şık dış cepheler için ideal, yumuşak ve yansımayan bir bitiş sağlar.",
      ar: "دهان بوندماكس المطفي يمنح لمسة ناعمة غير عاكسة، مثالية للمساحات الداخلية الأنيقة والخارجية الراقية.",
      en: "Bondmax Matte Paint provides a soft, non-reflective finish ideal for elegant interiors and refined exteriors.",
    },
    detailedFeatures: {
      de: [
        "Mattes Finish",
        "Hervorragende Deckkraft",
        "Lang anhaltender Schutz",
        "Einfach aufzutragen",
      ],
      tr: [
        "Mat bitiş",
        "Mükemmel kapatıcılık",
        "Uzun ömürlü koruma",
        "Kolay uygulanır",
      ],
      ar: ["لمسة مطفية", "تغطية ممتازة", "حماية طويلة الأمد", "سهل التطبيق"],
      en: [
        "Matte finish",
        "Excellent coverage",
        "Long-lasting protection",
        "Easy to apply",
      ],
    },
    technicalSpecs: {
      de: {
        color: "Verfügbar in allen matten Bondmax-Farben",
        type: "Matte-Emaille",
        solidsContent: "48%",
        viscosity: "75-85 KU",
        density: "1,20 ± 0,05 kg/Liter",
        dryingTime: "4-6 Stunden",
        recoatTime: "12-16 Stunden",
        sheen: "Matt",
        toolCleaning: "Sofort nach Gebrauch mit Verdünner reinigen",
      },
      tr: {
        color: "Bondmax mat renklerinde mevcuttur",
        type: "Mat emaye",
        solidsContent: "48%",
        viscosity: "75-85 KU",
        density: "1,20 ± 0,05 kg/litre",
        dryingTime: "4-6 saat",
        recoatTime: "12-16 saat",
        sheen: "Mat",
        toolCleaning: "Kullanımdan hemen sonra inceltici ile temizleyin",
      },
      ar: {
        color: "متوفر بجميع الألوان المطفي من بوندماكس",
        type: "دهان ألكيدي مطفي",
        solidsContent: "48%",
        viscosity: "75-85 KU",
        density: "1.20 ± 0.05 كجم/لتر",
        dryingTime: "4-6 ساعات",
        recoatTime: "12-16 ساعة",
        sheen: "مطفي",
        toolCleaning: "ينظف بالمخفف مباشرة بعد الاستخدام",
      },
      en: {
        color: "Available in all Bondmax matte colors",
        type: "Matte enamel",
        solidsContent: "48%",
        viscosity: "75-85 KU",
        density: "1.20 ± 0.05 kg/liter",
        dryingTime: "4-6 hours",
        recoatTime: "12-16 hours",
        sheen: "Matte",
        toolCleaning: "Clean tools with thinner immediately after use",
      },
    },
    usage: {
      de: {
        surfacePrep:
          "Die Oberfläche muss sauber, trocken und frei von Rost, Fett und loser Farbe sein.",
        application:
          "Vor Gebrauch gut umrühren und gleichmäßig mit Pinsel oder Rolle auftragen.",
      },
      tr: {
        surfacePrep:
          "Yüzey temiz, kuru ve pas, yağ ve gevşek boyadan arındırılmış olmalıdır.",
        application:
          "Kullanmadan önce iyice karıştırın. Fırça veya rulo ile eşit şekilde uygulayın.",
      },
      ar: {
        surfacePrep:
          "تأكد من أن السطح نظيف وجاف وخالٍ من الصدأ أو الشحوم أو الطلاء المتقشر.",
        application:
          "حرك جيدًا قبل الاستخدام وطبّق بشكل متساوٍ باستخدام فرشاة أو رول.",
      },
      en: {
        surfacePrep:
          "Ensure the surface is clean, dry, and free of rust, grease, and peeling paint.",
        application:
          "Stir thoroughly before use. Apply evenly using a brush or roller in thin layers.",
      },
    },
    storage: {
      de: {
        shelfLife: "36 Monate ab Produktionsdatum",
        conditions: "Trocken und schattig lagern.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 36 ay",
        conditions: "Kuru ve gölgeli yerde saklayın.",
      },
      ar: {
        shelfLife: "36 شهرًا من تاريخ الإنتاج",
        conditions: "يُخزن بإحكام في مكان جاف ومظلل.",
      },
      en: {
        shelfLife: "36 months from production date",
        conditions: "Store tightly closed in a dry, shaded area.",
      },
    },
  },
];

export default oilPaintsProducts;
