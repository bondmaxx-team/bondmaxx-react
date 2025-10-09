import testImage from "../assets/color-1.png";

const exteriorProducts = [
  {
    id: 1,
    category: "walls",
    image: testImage,
    name: {
      en: "Bondmax Weatherproof Exterior Paint",
      ar: "دهان خارجي بوندماكس مقاوم للعوامل الجوية",
      de: "Bondmax Wetterfeste Außenfarbe",
      tr: "Bondmax Hava Koşullarına Dayanıklı Dış Cephe Boyası",
    },
    description: {
      en: "Provides long-lasting protection against sun, rain, and humidity with vibrant colors.",
      ar: "يوفر حماية طويلة الأمد ضد الشمس والمطر والرطوبة بألوان زاهية.",
      de: "Bietet langanhaltenden Schutz vor Sonne, Regen und Feuchtigkeit mit leuchtenden Farben.",
      tr: "Güneş, yağmur ve neme karşı uzun süreli koruma sağlar, canlı renkleriyle öne çıkar.",
    },
    features: {
      en: ["UV protection", "Water repellent", "Long-lasting color"],
      ar: ["حماية من الأشعة فوق البنفسجية", "مضاد للماء", "ألوان تدوم طويلاً"],
      de: ["UV-Schutz", "Wasserabweisend", "Langanhaltende Farbe"],
      tr: ["UV koruması", "Su itici", "Uzun ömürlü renk"],
    },
    fullDescription: {
      en: "Bondmax Weatherproof Exterior Paint is formulated for maximum durability and color retention. It protects walls from extreme weather, UV rays, and humidity, ensuring long-term beauty and resistance.",
      ar: "تمت صياغة دهان بوندماكس الخارجي المقاوم للعوامل الجوية لتحقيق أقصى درجات المتانة وثبات اللون. يحمي الجدران من الظروف الجوية القاسية والأشعة فوق البنفسجية والرطوبة، مما يضمن جمالًا ومتانة طويلة الأمد.",
      de: "Bondmax Wetterfeste Außenfarbe wurde für maximale Haltbarkeit und Farbtreue entwickelt. Sie schützt Wände vor extremen Wetterbedingungen, UV-Strahlen und Feuchtigkeit und sorgt für langfristige Schönheit und Beständigkeit.",
      tr: "Bondmax Hava Koşullarına Dayanıklı Dış Cephe Boyası, maksimum dayanıklılık ve renk kalıcılığı için formüle edilmiştir. Duvarları zorlu hava koşullarından, UV ışınlarından ve nemden korur, uzun ömürlü güzellik sağlar.",
    },
    detailedFeatures: {
      en: [
        "Resists UV damage and fading",
        "Prevents water penetration",
        "Retains vibrant color for years",
        "Easy to apply and maintain",
        "Weatherproof and durable",
        "Suitable for concrete and plaster surfaces",
      ],
      ar: [
        "مقاوم لأشعة الشمس والبهتان",
        "يمنع تسرب الماء",
        "يحافظ على الألوان الزاهية لسنوات",
        "سهل التطبيق والصيانة",
        "مقاوم للعوامل الجوية ومتعدد الاستخدام",
        "مناسب للأسطح الخرسانية والجصية",
      ],
      de: [
        "Beständig gegen UV-Strahlung und Ausbleichen",
        "Verhindert Wassereindringung",
        "Behält lebendige Farben über Jahre",
        "Einfach aufzutragen und zu pflegen",
        "Wetterfest und langlebig",
        "Geeignet für Beton- und Putzoberflächen",
      ],
      tr: [
        "UV ışınlarına ve solmaya dayanıklı",
        "Su geçişini önler",
        "Yıllarca canlı renkleri korur",
        "Uygulaması ve bakımı kolaydır",
        "Hava koşullarına dayanıklı ve uzun ömürlü",
        "Beton ve sıva yüzeyler için uygundur",
      ],
    },
    technicalSpecs: {
      en: {
        finish: "Matte or Gloss",
        base: "Acrylic Resin",
        coverage: "12 m²/L",
        dryingTime: "2 hours",
        recoatTime: "4 hours",
        packaging: "1L, 5L, 15L",
      },
      ar: {
        finish: "مطفي أو لامع",
        base: "راتنج أكريليك",
        coverage: "12 م²/لتر",
        dryingTime: "2 ساعات",
        recoatTime: "4 ساعات",
        packaging: "1 لتر، 5 لتر، 15 لتر",
      },
      de: {
        finish: "Matt oder Glänzend",
        base: "Acrylharz",
        coverage: "12 m²/L",
        dryingTime: "2 Stunden",
        recoatTime: "4 Stunden",
        packaging: "1L, 5L, 15L",
      },
      tr: {
        finish: "Mat veya Parlak",
        base: "Akrilik Reçine",
        coverage: "12 m²/L",
        dryingTime: "2 saat",
        recoatTime: "4 saat",
        packaging: "1L, 5L, 15L",
      },
    },
    usage: {
      en: {
        surfacePrep:
          "Ensure surface is clean, dry, and free of dust or loose paint.",
        application:
          "Apply two coats using a brush or roller. Allow drying between coats.",
      },
      ar: {
        surfacePrep:
          "تأكد من أن السطح نظيف وجاف وخالٍ من الغبار أو الطلاء المتقشر.",
        application:
          "ضع طبقتين باستخدام فرشاة أو رول مع تركها تجف بين الطبقات.",
      },
      de: {
        surfacePrep:
          "Stellen Sie sicher, dass die Oberfläche sauber, trocken und staubfrei ist.",
        application:
          "Zwei Schichten mit Pinsel oder Rolle auftragen. Zwischen den Schichten trocknen lassen.",
      },
      tr: {
        surfacePrep:
          "Yüzeyin temiz, kuru ve tozdan arınmış olduğundan emin olun.",
        application:
          "Fırça veya rulo ile iki kat uygulayın. Katlar arasında kurumasını bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months from production date",
        conditions:
          "Store in a cool, dry place away from direct sunlight and frost.",
      },
      ar: {
        shelfLife: "24 شهرًا من تاريخ الإنتاج",
        conditions:
          "يُخزَّن في مكان بارد وجاف بعيدًا عن أشعة الشمس المباشرة والصقيع.",
      },
      de: {
        shelfLife: "24 Monate ab Produktionsdatum",
        conditions:
          "Kühl und trocken lagern, vor direkter Sonneneinstrahlung und Frost schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 24 ay",
        conditions:
          "Serin ve kuru yerde, doğrudan güneş ışığından ve don tehlikesinden uzakta saklayın.",
      },
    },
  },

  // 🧱 Product 2
  {
    id: 2,
    category: "roof",
    image: testImage,
    name: {
      en: "Bondmax Roof Shield",
      ar: "بوندماكس شيلد لعزل الأسطح",
      de: "Bondmax Dachschutz",
      tr: "Bondmax Çatı Koruma",
    },
    description: {
      en: "A high-performance waterproof coating for roof protection against rain and heat.",
      ar: "طلاء عالي الأداء لعزل الأسطح ضد المطر والحرارة.",
      de: "Hochleistungsbeschichtung zum Schutz des Dachs vor Regen und Hitze.",
      tr: "Yağmur ve ısıya karşı çatı koruması için yüksek performanslı kaplama.",
    },
    features: {
      en: ["Waterproof", "Heat reflective", "Crack resistant"],
      ar: ["مقاوم للماء", "عاكس للحرارة", "مقاوم للتشققات"],
      de: ["Wasserdicht", "Hitzereflektion", "Rissbeständig"],
      tr: ["Su geçirmez", "Isı yansıtıcı", "Çatlaklara dayanıklı"],
    },
    fullDescription: {
      en: "Bondmax Roof Shield provides ultimate protection for rooftops. Its elastomeric formula prevents water penetration, reflects heat, and resists cracking, ensuring roof longevity.",
      ar: "يقدم بوندماكس شيلد حماية فائقة للأسطح. تمنع تركيبته المرنة تسرب الماء، وتعكس الحرارة، وتقاوم التشققات، مما يضمن عمرًا أطول للأسطح.",
      de: "Bondmax Dachschutz bietet ultimativen Schutz für Dächer. Die elastomerische Formel verhindert Wassereintritt, reflektiert Wärme und widersteht Rissen, was die Lebensdauer des Dachs verlängert.",
      tr: "Bondmax Çatı Koruma, çatılar için maksimum koruma sağlar. Elastomerik formülü su geçişini önler, ısıyı yansıtır ve çatlamaya karşı direnç sağlar, çatının ömrünü uzatır.",
    },
    detailedFeatures: {
      en: [
        "Elastomeric coating for flexibility",
        "Waterproof and heat reflective",
        "Crack resistant",
        "Long-lasting durability",
        "Easy to apply",
      ],
      ar: [
        "طلاء مرن للمرونة",
        "مقاوم للماء وعاكس للحرارة",
        "مقاوم للتشققات",
        "متانة طويلة الأمد",
        "سهل التطبيق",
      ],
      de: [
        "Elastomerische Beschichtung für Flexibilität",
        "Wasserdicht und hitzereflektierend",
        "Rissbeständig",
        "Langlebig",
        "Einfach aufzutragen",
      ],
      tr: [
        "Esnek kaplama",
        "Su geçirmez ve ısı yansıtıcı",
        "Çatlaklara dayanıklı",
        "Uzun ömürlü",
        "Uygulaması kolay",
      ],
    },
    technicalSpecs: {
      en: {
        finish: "Matte",
        base: "Elastomeric Acrylic",
        coverage: "10 m²/L",
        dryingTime: "3 hours",
        recoatTime: "6 hours",
        packaging: "5L, 15L",
      },
      ar: {
        finish: "مطفي",
        base: "أكريليك مرن",
        coverage: "10 م²/لتر",
        dryingTime: "3 ساعات",
        recoatTime: "6 ساعات",
        packaging: "5 لتر، 15 لتر",
      },
      de: {
        finish: "Matt",
        base: "Elastomerisches Acryl",
        coverage: "10 m²/L",
        dryingTime: "3 Stunden",
        recoatTime: "6 Stunden",
        packaging: "5L, 15L",
      },
      tr: {
        finish: "Mat",
        base: "Elastomerik Akrilik",
        coverage: "10 m²/L",
        dryingTime: "3 saat",
        recoatTime: "6 saat",
        packaging: "5L, 15L",
      },
    },
    usage: {
      en: {
        surfacePrep:
          "Clean roof surface from dust, debris, and loose materials.",
        application:
          "Apply two coats with a brush or roller. Allow 6 hours between coats.",
      },
      ar: {
        surfacePrep: "نظف السطح من الغبار والحطام والمواد المتساقطة.",
        application:
          "ضع طبقتين باستخدام فرشاة أو رول مع ترك 6 ساعات بين الطبقات.",
      },
      de: {
        surfacePrep:
          "Reinigen Sie die Dachfläche von Staub, Schmutz und losen Materialien.",
        application:
          "Zwei Schichten mit Pinsel oder Rolle auftragen. 6 Stunden zwischen den Schichten warten.",
      },
      tr: {
        surfacePrep:
          "Çatı yüzeyini toz, döküntü ve gevşek malzemelerden temizleyin.",
        application:
          "Fırça veya rulo ile iki kat uygulayın. Katlar arasında 6 saat bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months",
        conditions: "Store in a cool, dry place, away from direct sunlight.",
      },
      ar: {
        shelfLife: "24 شهرًا",
        conditions: "يُخزن في مكان بارد وجاف بعيدًا عن أشعة الشمس المباشرة.",
      },
      de: {
        shelfLife: "24 Monate",
        conditions:
          "Kühl und trocken lagern, vor direkter Sonneneinstrahlung schützen.",
      },
      tr: {
        shelfLife: "24 ay",
        conditions:
          "Serin ve kuru yerde, doğrudan güneş ışığından uzak saklayın.",
      },
    },
  },

  // 🧱 Product 3
  {
    id: 3,
    category: "primer",
    image: testImage,
    name: {
      en: "Bondmax Exterior Primer",
      ar: "بوندماكس برايمر خارجي",
      de: "Bondmax Außenprimer",
      tr: "Bondmax Dış Cephe Astarı",
    },
    description: {
      en: "Improves adhesion and durability of exterior coatings.",
      ar: "يحسن الالتصاق ويزيد من متانة الطلاءات الخارجية.",
      de: "Verbessert die Haftung und Haltbarkeit von Außenbeschichtungen.",
      tr: "Dış cephe boyalarının yapışmasını ve dayanıklılığını artırır.",
    },
    features: {
      en: ["Strong adhesion", "Quick drying", "Water-based"],
      ar: ["التصاق قوي", "يجف بسرعة", "مائي الأساس"],
      de: ["Starke Haftung", "Schnelltrocknend", "Wasserbasiert"],
      tr: ["Güçlü yapışma", "Hızlı kuruma", "Su bazlı"],
    },
    fullDescription: {
      en: "Bondmax Exterior Primer ensures superior adhesion for paints on walls, roofs, and other exterior surfaces. It prepares surfaces for long-lasting coatings.",
      ar: "يضمن برايمر بوندماكس الخارجي التصاقًا ممتازًا للدهانات على الجدران والأسطح الخارجية الأخرى. يُحضّر الأسطح لطلاءات تدوم طويلاً.",
      de: "Bondmax Außenprimer sorgt für überlegene Haftung von Farben auf Wänden, Dächern und anderen Außenflächen. Bereitet Oberflächen für langlebige Beschichtungen vor.",
      tr: "Bondmax Dış Cephe Astarı, duvarlar, çatılar ve diğer dış yüzeylerde üstün yapışma sağlar. Uzun ömürlü boyalar için yüzeyi hazırlar.",
    },
    detailedFeatures: {
      en: [
        "Enhances paint adhesion",
        "Quick drying",
        "Water-based, low VOC",
        "Prepares uneven surfaces",
      ],
      ar: [
        "يعزز التصاق الطلاء",
        "يجف بسرعة",
        "مائي، منخفض المركبات العضوية المتطايرة",
        "يجهز الأسطح غير المستوية",
      ],
      de: [
        "Verbessert Haftung der Farbe",
        "Schnelltrocknend",
        "Wasserbasiert, geringe VOC",
        "Bereitet unebene Oberflächen vor",
      ],
      tr: [
        "Boyanın yapışmasını artırır",
        "Hızlı kuruma",
        "Su bazlı, düşük VOC",
        "Düzensiz yüzeyleri hazırlar",
      ],
    },
    technicalSpecs: {
      en: {
        finish: "Matte",
        base: "Acrylic Primer",
        coverage: "10-12 m²/L",
        dryingTime: "1 hour",
        recoatTime: "2 hours",
        packaging: "1L, 5L",
      },
      ar: {
        finish: "مطفي",
        base: "برايمر أكريليك",
        coverage: "10-12 م²/لتر",
        dryingTime: "1 ساعة",
        recoatTime: "2 ساعة",
        packaging: "1 لتر، 5 لتر",
      },
      de: {
        finish: "Matt",
        base: "Acrylprimer",
        coverage: "10-12 m²/L",
        dryingTime: "1 Stunde",
        recoatTime: "2 Stunden",
        packaging: "1L, 5L",
      },
      tr: {
        finish: "Mat",
        base: "Akrilik Astar",
        coverage: "10-12 m²/L",
        dryingTime: "1 saat",
        recoatTime: "2 saat",
        packaging: "1L, 5L",
      },
    },
    usage: {
      en: {
        surfacePrep: "Clean surface and remove dust, grease, or loose paint.",
        application:
          "Apply one coat with brush or roller. Dry 1 hour before topcoat.",
      },
      ar: {
        surfacePrep: "نظف السطح وأزل الغبار أو الدهون أو الطلاء المتقشر.",
        application:
          "ضع طبقة واحدة باستخدام فرشاة أو رول. جفف لمدة ساعة قبل الطبقة النهائية.",
      },
      de: {
        surfacePrep:
          "Oberfläche reinigen und Staub, Fett oder lose Farbe entfernen.",
        application:
          "Eine Schicht mit Pinsel oder Rolle auftragen. 1 Stunde vor Oberbeschichtung trocknen lassen.",
      },
      tr: {
        surfacePrep:
          "Yüzeyi temizleyin ve toz, yağ veya gevşek boyayı giderin.",
        application:
          "Fırça veya rulo ile tek kat uygulayın. Üst kat öncesi 1 saat kurumasını bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months",
        conditions: "Store in a cool, dry place away from sunlight and frost.",
      },
      ar: {
        shelfLife: "24 شهرًا",
        conditions: "يخزن في مكان بارد وجاف بعيد عن الشمس والصقيع.",
      },
      de: {
        shelfLife: "24 Monate",
        conditions: "Kühl und trocken lagern, vor Sonne und Frost schützen.",
      },
      tr: {
        shelfLife: "24 ay",
        conditions:
          "Serin ve kuru yerde, güneşten ve don tehlikesinden uzak saklayın.",
      },
    },
  },

  // 🧱 Product 4
  {
    id: 4,
    category: "wood",
    image: testImage,
    name: {
      en: "Bondmax WoodGuard Exterior Varnish",
      ar: "ورنيش خارجي بوندماكس لحماية الخشب",
      de: "Bondmax Außenholzschutzlack",
      tr: "Bondmax Dış Mekan Ahşap Verniği",
    },
    description: {
      en: "Protects wood from moisture, sunlight, and weathering.",
      ar: "يحمي الخشب من الرطوبة وأشعة الشمس والعوامل الجوية.",
      de: "Schützt Holz vor Feuchtigkeit, Sonnenlicht und Witterung.",
      tr: "Ahşabı nem, güneş ışığı ve hava koşullarına karşı korur.",
    },
    features: {
      en: ["UV protection", "Water repellent", "Enhances wood grain"],
      ar: ["حماية من الأشعة فوق البنفسجية", "مضاد للماء", "يبرز تفاصيل الخشب"],
      de: ["UV-Schutz", "Wasserabweisend", "Betont Holzmaserung"],
      tr: ["UV koruması", "Su itici", "Ahşap dokusunu vurgular"],
    },
    fullDescription: {
      en: "Bondmax WoodGuard Exterior Varnish is designed to shield wood surfaces from moisture and UV damage. It enhances natural wood appearance and ensures long-lasting protection.",
      ar: "صُمم ورنيش بوندماكس وودغارد لحماية أسطح الخشب من الرطوبة وأضرار الأشعة فوق البنفسجية. يعزز مظهر الخشب الطبيعي ويوفر حماية طويلة الأمد.",
      de: "Bondmax Außenholzschutzlack schützt Holzoberflächen vor Feuchtigkeit und UV-Schäden. Betont das natürliche Aussehen und bietet langanhaltenden Schutz.",
      tr: "Bondmax Dış Mekan Ahşap Verniği, ahşap yüzeyleri nem ve UV hasarına karşı korur. Doğal ahşap görünümünü artırır ve uzun süreli koruma sağlar.",
    },
    detailedFeatures: {
      en: [
        "Protects against moisture and sun",
        "Enhances wood grain",
        "Durable and long-lasting",
        "Easy to apply",
        "Weather resistant",
      ],
      ar: [
        "يحمي من الرطوبة وأشعة الشمس",
        "يبرز تفاصيل الخشب",
        "متين وطويل الأمد",
        "سهل التطبيق",
        "مقاوم للعوامل الجوية",
      ],
      de: [
        "Schützt vor Feuchtigkeit und Sonne",
        "Betont Holzmaserung",
        "Langlebig und robust",
        "Einfach aufzutragen",
        "Witterungsbeständig",
      ],
      tr: [
        "Neme ve güneşe karşı korur",
        "Ahşap dokusunu vurgular",
        "Dayanıklı ve uzun ömürlü",
        "Uygulaması kolay",
        "Hava koşullarına dayanıklı",
      ],
    },
    technicalSpecs: {
      en: {
        finish: "Glossy",
        base: "Acrylic Varnish",
        coverage: "12 m²/L",
        dryingTime: "2 hours",
        recoatTime: "4 hours",
        packaging: "0.75L, 2.5L, 5L",
      },
      ar: {
        finish: "لامع",
        base: "ورنيش أكريليك",
        coverage: "12 م²/لتر",
        dryingTime: "2 ساعات",
        recoatTime: "4 ساعات",
        packaging: "0.75 لتر، 2.5 لتر، 5 لتر",
      },
      de: {
        finish: "Glänzend",
        base: "Acryl-Varnish",
        coverage: "12 m²/L",
        dryingTime: "2 Stunden",
        recoatTime: "4 Stunden",
        packaging: "0.75L, 2.5L, 5L",
      },
      tr: {
        finish: "Parlak",
        base: "Akrilik Vernik",
        coverage: "12 m²/L",
        dryingTime: "2 saat",
        recoatTime: "4 saat",
        packaging: "0.75L, 2.5L, 5L",
      },
    },
    usage: {
      en: {
        surfacePrep:
          "Sand and clean wood surface. Remove old varnish and dust.",
        application:
          "Apply 2 coats using a brush or roller. Dry 2 hours between coats.",
      },
      ar: {
        surfacePrep: "قم بصنفرة وتنظيف سطح الخشب. أزل الورنيش القديم والغبار.",
        application: "ضع طبقتين باستخدام فرشاة أو رول. جفف ساعتين بين الطبقات.",
      },
      de: {
        surfacePrep:
          "Holzoberfläche schleifen und reinigen. Alte Lackreste und Staub entfernen.",
        application:
          "2 Schichten mit Pinsel oder Rolle auftragen. 2 Stunden zwischen den Schichten trocknen lassen.",
      },
      tr: {
        surfacePrep:
          "Ahşap yüzeyi zımparalayın ve temizleyin. Eski vernik ve tozu giderin.",
        application:
          "Fırça veya rulo ile 2 kat uygulayın. Katlar arasında 2 saat kurumasını bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "36 months",
        conditions: "Store in a cool, dry place, away from sunlight and frost.",
      },
      ar: {
        shelfLife: "36 شهرًا",
        conditions: "يخزن في مكان بارد وجاف بعيدًا عن الشمس والصقيع.",
      },
      de: {
        shelfLife: "36 Monate",
        conditions: "Kühl und trocken lagern, vor Sonne und Frost schützen.",
      },
      tr: {
        shelfLife: "36 ay",
        conditions:
          "Serin ve kuru yerde, güneşten ve don tehlikesinden uzak saklayın.",
      },
    },
  },

  // 🧱 Product 5
  {
    id: 5,
    category: "stone",
    image: testImage,
    name: {
      en: "Bondmax Stone & Concrete Sealer",
      ar: "مادة عازلة للحجر والخرسانة من بوندماكس",
      de: "Bondmax Stein- und Betondichtmittel",
      tr: "Bondmax Taş ve Beton Koruyucu",
    },
    description: {
      en: "Transparent sealer for stone and concrete surfaces that prevents water absorption.",
      ar: "مادة شفافة لحماية الحجر والخرسانة تمنع امتصاص الماء.",
      de: "Transparente Versiegelung für Stein- und Betonoberflächen, verhindert Wasseraufnahme.",
      tr: "Taş ve beton yüzeyler için su emilimini önleyen şeffaf koruyucu.",
    },
    features: {
      en: ["Transparent finish", "Deep penetration", "Weather resistant"],
      ar: ["تشطيب شفاف", "تغلغل عميق", "مقاوم للعوامل الجوية"],
      de: [
        "Transparente Oberfläche",
        "Tiefes Eindringen",
        "Witterungsbeständig",
      ],
      tr: ["Şeffaf görünüm", "Derin nüfuz", "Hava koşullarına dayanıklı"],
    },
    fullDescription: {
      en: "Bondmax Stone & Concrete Sealer penetrates deep into masonry and concrete, forming a protective layer against water, stains, and weathering, while maintaining surface appearance.",
      ar: "يتغلغل مادة بوندماكس العازلة في الحجر والخرسانة لتشكيل طبقة حماية ضد الماء والبقع والعوامل الجوية، مع الحفاظ على مظهر السطح.",
      de: "Bondmax Stein- und Betondichtmittel dringt tief in Mauerwerk und Beton ein und bildet eine Schutzschicht gegen Wasser, Flecken und Witterung, während das Oberflächenbild erhalten bleibt.",
      tr: "Bondmax Taş ve Beton Koruyucu, taş ve betona derinlemesine nüfuz ederek su, lekeler ve hava koşullarına karşı koruyucu bir tabaka oluşturur ve yüzey görünümünü korur.",
    },
    detailedFeatures: {
      en: [
        "Protects against water and stains",
        "Maintains natural appearance",
        "Deep penetration for long-term protection",
        "UV resistant",
      ],
      ar: [
        "يحمي من الماء والبقع",
        "يحافظ على المظهر الطبيعي",
        "تغلغل عميق لحماية طويلة الأمد",
        "مقاوم للأشعة فوق البنفسجية",
      ],
      de: [
        "Schützt vor Wasser und Flecken",
        "Erhält das natürliche Aussehen",
        "Tiefes Eindringen für langfristigen Schutz",
        "UV-beständig",
      ],
      tr: [
        "Su ve lekelerden korur",
        "Doğal görünümü korur",
        "Uzun süreli koruma için derin nüfuz",
        "UV dirençli",
      ],
    },
    technicalSpecs: {
      en: {
        finish: "Transparent",
        base: "Silane/Siloxane",
        coverage: "8-10 m²/L",
        dryingTime: "1-2 hours",
        recoatTime: "4 hours",
        packaging: "1L, 5L",
      },
      ar: {
        finish: "شفاف",
        base: "سيلان/سيلوكسان",
        coverage: "8-10 م²/لتر",
        dryingTime: "1-2 ساعات",
        recoatTime: "4 ساعات",
        packaging: "1 لتر، 5 لتر",
      },
      de: {
        finish: "Transparent",
        base: "Silane/Siloxan",
        coverage: "8-10 m²/L",
        dryingTime: "1-2 Stunden",
        recoatTime: "4 Stunden",
        packaging: "1L, 5L",
      },
      tr: {
        finish: "Şeffaf",
        base: "Silane/Siloksan",
        coverage: "8-10 m²/L",
        dryingTime: "1-2 saat",
        recoatTime: "4 saat",
        packaging: "1L, 5L",
      },
    },
    usage: {
      en: {
        surfacePrep: "Clean surface from dust, dirt, and loose particles.",
        application:
          "Apply evenly with brush, roller, or sprayer. Allow to dry 1-2 hours.",
      },
      ar: {
        surfacePrep: "نظف السطح من الغبار والأوساخ والجزيئات المتساقطة.",
        application:
          "ضعه بالتساوي باستخدام فرشاة أو رول أو رذاذ. اتركه يجف لمدة 1-2 ساعات.",
      },
      de: {
        surfacePrep:
          "Oberfläche von Staub, Schmutz und losen Partikeln reinigen.",
        application:
          "Gleichmäßig mit Pinsel, Rolle oder Sprühgerät auftragen. 1-2 Stunden trocknen lassen.",
      },
      tr: {
        surfacePrep: "Yüzeyi toz, kir ve gevşek parçacıklardan temizleyin.",
        application:
          "Fırça, rulo veya sprey ile eşit şekilde uygulayın. 1-2 saat kurumasını bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "36 months",
        conditions: "Store in a cool, dry place, away from sunlight and frost.",
      },
      ar: {
        shelfLife: "36 شهرًا",
        conditions: "يخزن في مكان بارد وجاف بعيدًا عن الشمس والصقيع.",
      },
      de: {
        shelfLife: "36 Monate",
        conditions: "Kühl und trocken lagern, vor Sonne und Frost schützen.",
      },
      tr: {
        shelfLife: "36 ay",
        conditions:
          "Serin ve kuru yerde, güneşten ve don tehlikesinden uzak saklayın.",
      },
    },
  },
];

export default exteriorProducts;
