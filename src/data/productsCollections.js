import testImage from "../assets/color-1.png";

const productsCollections = [
  {
    titleKey: "interior_paints", // مفتاح الترجمة
    type: "interior",
    color: "blue",
    linkTo: "interior-colors",
    collection: [
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
          en: [
            "Luxurious silk touch",
            "High washability",
            "Precise warm colors",
          ],
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
          de: [
            "Vergilbungsbeständig",
            "Einfache Anwendung",
            "Schnelltrocknend",
          ],
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
          de: [
            "Eleganter Glanz",
            "Fleckenbeständig",
            "Langanhaltende Schönheit",
          ],
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
          de: [
            "Glatte Anwendung",
            "Tropffreie Formel",
            "Hervorragende Deckkraft",
          ],
          tr: [
            "Pürüzsüz uygulama",
            "Damlamayan formül",
            "Mükemmel kapatıcılık",
          ],
        },
      },
    ],
  },
  {
    titleKey: "exterior_paints",
    type: "exterior",
    color: "green",
    linkTo: "exterior-colors",
    collection: [
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
          ar: [
            "حماية من الأشعة فوق البنفسجية",
            "مضاد للماء",
            "ألوان تدوم طويلاً",
          ],
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
            conditions:
              "Store in a cool, dry place, away from direct sunlight.",
          },
          ar: {
            shelfLife: "24 شهرًا",
            conditions:
              "يُخزن في مكان بارد وجاف بعيدًا عن أشعة الشمس المباشرة.",
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
            surfacePrep:
              "Clean surface and remove dust, grease, or loose paint.",
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
            conditions:
              "Store in a cool, dry place away from sunlight and frost.",
          },
          ar: {
            shelfLife: "24 شهرًا",
            conditions: "يخزن في مكان بارد وجاف بعيد عن الشمس والصقيع.",
          },
          de: {
            shelfLife: "24 Monate",
            conditions:
              "Kühl und trocken lagern, vor Sonne und Frost schützen.",
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
          ar: [
            "حماية من الأشعة فوق البنفسجية",
            "مضاد للماء",
            "يبرز تفاصيل الخشب",
          ],
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
            surfacePrep:
              "قم بصنفرة وتنظيف سطح الخشب. أزل الورنيش القديم والغبار.",
            application:
              "ضع طبقتين باستخدام فرشاة أو رول. جفف ساعتين بين الطبقات.",
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
            conditions:
              "Store in a cool, dry place, away from sunlight and frost.",
          },
          ar: {
            shelfLife: "36 شهرًا",
            conditions: "يخزن في مكان بارد وجاف بعيدًا عن الشمس والصقيع.",
          },
          de: {
            shelfLife: "36 Monate",
            conditions:
              "Kühl und trocken lagern, vor Sonne und Frost schützen.",
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
            conditions:
              "Store in a cool, dry place, away from sunlight and frost.",
          },
          ar: {
            shelfLife: "36 شهرًا",
            conditions: "يخزن في مكان بارد وجاف بعيدًا عن الشمس والصقيع.",
          },
          de: {
            shelfLife: "36 Monate",
            conditions:
              "Kühl und trocken lagern, vor Sonne und Frost schützen.",
          },
          tr: {
            shelfLife: "36 ay",
            conditions:
              "Serin ve kuru yerde, güneşten ve don tehlikesinden uzak saklayın.",
          },
        },
      },
    ],
  },
  {
    titleKey: "insulation_products",
    color: "orange",
    type: "insulation",
    linkTo: "insulation",
    collection: [
      // 1️⃣ العازل الحراري
      {
        id: 1,
        category: "thermal_insulation",
        image: testImage,
        name: {
          en: "Bondmax Premium Thermal Insulation",
          ar: "عازل حراري بوندماكس بريميوم",
          de: "Bondmax Premium Wärmedämmung",
          tr: "Bondmax Premium Isı Yalıtımı",
        },
        description: {
          en: "High-performance thermal insulation that reduces energy consumption and protects against moisture.",
          ar: "عازل حراري عالي الأداء يقلل استهلاك الطاقة ويحمي من الرطوبة.",
          de: "Hochleistungswärmedämmung, die den Energieverbrauch senkt und vor Feuchtigkeit schützt.",
          tr: "Enerji tüketimini azaltan ve neme karşı koruma sağlayan yüksek performanslı ısı yalıtımı.",
        },
        features: {
          en: [
            "Reduces energy consumption",
            "Moisture resistant",
            "Easy installation",
          ],
          ar: ["يقلل استهلاك الطاقة", "مقاوم للرطوبة", "سهل التركيب"],
          de: [
            "Reduziert den Energieverbrauch",
            "Feuchtigkeitsbeständig",
            "Einfache Installation",
          ],
          tr: ["Enerji tüketimini azaltır", "Neme dayanıklı", "Kolay montaj"],
        },
        fullDescription: {
          en: "Bondmax Premium Thermal Insulation is designed to provide superior heat resistance and reduce energy costs for residential and commercial buildings. It also helps maintain comfortable indoor temperatures year-round.",
          ar: "تم تصميم عازل بوندماكس الحراري بريميوم لتوفير مقاومة حرارية فائقة وتقليل تكاليف الطاقة للمباني السكنية والتجارية. كما يساعد على الحفاظ على درجات حرارة داخلية مريحة طوال العام.",
          de: "Bondmax Premium Wärmedämmung wurde entwickelt, um überlegene Wärmebeständigkeit zu bieten und Energiekosten für Wohn- und Geschäftsgebäude zu senken. Es trägt auch zur Aufrechterhaltung angenehmer Innentemperaturen bei.",
          tr: "Bondmax Premium Isı Yalıtımı, konut ve ticari binalar için üstün ısı direnci sağlamak ve enerji maliyetlerini azaltmak amacıyla tasarlanmıştır. Ayrıca yıl boyunca konforlu iç mekan sıcaklıklarının korunmasına yardımcı olur.",
        },
        detailedFeatures: {
          en: [
            "Superior thermal resistance",
            "Reduces heating and cooling costs",
            "Moisture and mold resistant",
            "Lightweight and easy to install",
            "Long-lasting durability",
            "Environmentally friendly",
          ],
          ar: [
            "مقاومة حرارية فائقة",
            "يقلل من تكاليف التدفئة والتبريد",
            "مقاوم للرطوبة والعفن",
            "خفيف وسهل التركيب",
            "متين وطويل الأمد",
            "صديق للبيئة",
          ],
          de: [
            "Überlegene Wärmedämmung",
            "Reduziert Heiz- und Kühlkosten",
            "Feuchtigkeits- und schimmelresistent",
            "Leicht und einfach zu installieren",
            "Langlebig",
            "Umweltfreundlich",
          ],
          tr: [
            "Üstün ısı direnci",
            "Isıtma ve soğutma maliyetlerini azaltır",
            "Neme ve küfe dayanıklı",
            "Hafif ve kolay kurulum",
            "Uzun ömürlü",
            "Çevre dostu",
          ],
        },
        technicalSpecs: {
          en: {
            material: "High-density foam",
            thickness: "50mm",
            thermalConductivity: "0.035 W/mK",
            fireResistance: "Class B",
            dimensions: "1200mm x 600mm sheets",
            weight: "5 kg per sheet",
          },
          ar: {
            material: "رغوة عالية الكثافة",
            thickness: "50 مم",
            thermalConductivity: "0.035 واط/م×ك",
            fireResistance: "الدرجة B",
            dimensions: "ألواح 1200 مم × 600 مم",
            weight: "5 كجم لكل لوح",
          },
          de: {
            material: "Hochdichter Schaum",
            thickness: "50mm",
            thermalConductivity: "0,035 W/mK",
            fireResistance: "Klasse B",
            dimensions: "1200mm x 600mm Platten",
            weight: "5 kg pro Platte",
          },
          tr: {
            material: "Yüksek yoğunluklu köpük",
            thickness: "50mm",
            thermalConductivity: "0,035 W/mK",
            fireResistance: "Sınıf B",
            dimensions: "1200mm x 600mm levhalar",
            weight: "Her levha 5 kg",
          },
        },
        usage: {
          en: {
            surfacePrep:
              "Ensure surface is clean, dry, and free of dust. Repair any cracks before installation.",
            application:
              "Cut insulation to fit, place against the wall or ceiling, and fix with adhesive or mechanical fasteners as needed.",
          },
          ar: {
            surfacePrep:
              "تأكد من أن السطح نظيف وجاف وخالٍ من الغبار. أصلح أي تشققات قبل التركيب.",
            application:
              "قم بقص العازل ليتناسب مع المكان، وضعه على الحائط أو السقف وثبته باستخدام لاصق أو مسامير حسب الحاجة.",
          },
          de: {
            surfacePrep:
              "Stellen Sie sicher, dass die Oberfläche sauber, trocken und staubfrei ist. Risse vor der Installation ausbessern.",
            application:
              "Dämmung zuschneiden, an Wand oder Decke anbringen und bei Bedarf mit Kleber oder mechanischen Befestigungen fixieren.",
          },
          tr: {
            surfacePrep:
              "Yüzeyin temiz, kuru ve tozdan arınmış olduğundan emin olun. Kurulumdan önce çatlakları onarın.",
            application:
              "Yalıtımı uygun şekilde kesin, duvar veya tavana yerleştirin ve gerekirse yapıştırıcı veya mekanik bağlantılarla sabitleyin.",
          },
        },
        storage: {
          en: {
            shelfLife: "36 months from production date",
            conditions:
              "Store flat in original packaging, protected from moisture and direct sunlight.",
          },
          ar: {
            shelfLife: "36 شهرًا من تاريخ الإنتاج",
            conditions:
              "يُخزّن مستويًا في عبواته الأصلية، بعيدًا عن الرطوبة وأشعة الشمس المباشرة.",
          },
          de: {
            shelfLife: "36 Monate ab Produktionsdatum",
            conditions:
              "Flach in Originalverpackung lagern, vor Feuchtigkeit und direkter Sonneneinstrahlung schützen.",
          },
          tr: {
            shelfLife: "Üretim tarihinden itibaren 36 ay",
            conditions:
              "Orijinal ambalajında düz şekilde saklayın, nemden ve doğrudan güneş ışığından koruyun.",
          },
        },
      },

      // 2️⃣ العازل الصوتي
      {
        id: 2,
        category: "sound_insulation",
        image: testImage,
        name: {
          en: "Bondmax Excellent Sound Insulation",
          ar: "عازل صوت بوندماكس الممتاز",
          de: "Bondmax Hervorragende Schalldämmung",
          tr: "Bondmax Mükemmel Ses Yalıtımı",
        },
        description: {
          en: "Lightweight and durable sound insulation offering excellent noise absorption for interior spaces.",
          ar: "عازل صوت خفيف الوزن ومتين يوفر امتصاصًا ممتازًا للضوضاء للمساحات الداخلية.",
          de: "Leichte und langlebige Schalldämmung mit hervorragender Geräuschabsorption für Innenräume.",
          tr: "İç mekanlar için mükemmel gürültü emilimi sağlayan hafif ve dayanıklı ses yalıtımı.",
        },
        features: {
          en: [
            "Excellent sound absorption",
            "Lightweight",
            "Durable and long lasting",
          ],
          ar: ["امتصاص ممتاز للصوت", "خفيف الوزن", "متين وطويل الأمد"],
          de: [
            "Hervorragende Schallabsorption",
            "Leichtgewichtig",
            "Langlebig und strapazierfähig",
          ],
          tr: ["Mükemmel ses emilimi", "Hafif", "Dayanıklı ve uzun ömürlü"],
        },
        fullDescription: {
          en: "Bondmax Excellent Sound Insulation provides superior noise reduction for homes and offices, making spaces more comfortable and private. Ideal for walls, ceilings, and partitions.",
          ar: "يوفر عازل صوت بوندماكس الممتاز تقليلًا ممتازًا للضوضاء للمنازل والمكاتب، مما يجعل المساحات أكثر راحة وخصوصية. مثالي للجدران والأسقف والفواصل.",
          de: "Bondmax Hervorragende Schalldämmung bietet überlegene Geräuschreduzierung für Häuser und Büros und macht Räume komfortabler und privater. Ideal für Wände, Decken und Trennwände.",
          tr: "Bondmax Mükemmel Ses Yalıtımı, evler ve ofisler için üstün gürültü azaltımı sağlar, mekanları daha konforlu ve özel hale getirir. Duvarlar, tavanlar ve bölmeler için idealdir.",
        },
        detailedFeatures: {
          en: [
            "Superior noise reduction",
            "Lightweight and easy to handle",
            "Long-lasting durability",
            "Does not affect wall structure",
            "Fire resistant",
            "Eco-friendly materials",
          ],
          ar: [
            "تقليل ضوضاء ممتاز",
            "خفيف وسهل التعامل معه",
            "متين وطويل الأمد",
            "لا يؤثر على هيكل الجدار",
            "مقاوم للحريق",
            "مواد صديقة للبيئة",
          ],
          de: [
            "Überlegene Geräuschreduktion",
            "Leicht und einfach zu handhaben",
            "Langlebig",
            "Beeinflusst nicht die Wandstruktur",
            "Feuerbeständig",
            "Umweltfreundliche Materialien",
          ],
          tr: [
            "Üstün gürültü azaltımı",
            "Hafif ve kullanımı kolay",
            "Uzun ömürlü",
            "Duvar yapısını etkilemez",
            "Yangına dayanıklı",
            "Çevre dostu malzemeler",
          ],
        },
        technicalSpecs: {
          en: {
            material: "Acoustic foam",
            thickness: "30mm",
            soundReductionIndex: "NRR 28 dB",
            fireResistance: "Class B",
            dimensions: "1200mm x 600mm sheets",
            weight: "3 kg per sheet",
          },
          ar: {
            material: "رغوة صوتية",
            thickness: "30 مم",
            soundReductionIndex: "NRR 28 ديسيبل",
            fireResistance: "الدرجة B",
            dimensions: "ألواح 1200 مم × 600 مم",
            weight: "3 كجم لكل لوح",
          },
          de: {
            material: "Akustikschaum",
            thickness: "30mm",
            soundReductionIndex: "NRR 28 dB",
            fireResistance: "Klasse B",
            dimensions: "1200mm x 600mm Platten",
            weight: "3 kg pro Platte",
          },
          tr: {
            material: "Akustik köpük",
            thickness: "30mm",
            soundReductionIndex: "NRR 28 dB",
            fireResistance: "Sınıf B",
            dimensions: "1200mm x 600mm levhalar",
            weight: "Her levha 3 kg",
          },
        },
        usage: {
          en: {
            surfacePrep:
              "Ensure surface is clean and dry. Remove dust and debris.",
            application:
              "Attach insulation using adhesive or screws. Overlap edges slightly for full coverage.",
          },
          ar: {
            surfacePrep: "تأكد من أن السطح نظيف وجاف. أزل الغبار والحطام.",
            application:
              "ثبت العازل باستخدام لاصق أو مسامير. قم بتداخل الحواف قليلاً لتغطية كاملة.",
          },
          de: {
            surfacePrep:
              "Stellen Sie sicher, dass die Oberfläche sauber und trocken ist. Entfernen Sie Staub und Schmutz.",
            application:
              "Dämmung mit Kleber oder Schrauben befestigen. Kanten leicht überlappen für vollständige Abdeckung.",
          },
          tr: {
            surfacePrep:
              "Yüzeyin temiz ve kuru olduğundan emin olun. Toz ve kalıntıları temizleyin.",
            application:
              "Yalıtımı yapıştırıcı veya vidalarla sabitleyin. Tam kaplama için kenarları hafifçe üst üste getirin.",
          },
        },
        storage: {
          en: {
            shelfLife: "36 months from production date",
            conditions:
              "Store flat in original packaging, protect from moisture and sunlight.",
          },
          ar: {
            shelfLife: "36 شهرًا من تاريخ الإنتاج",
            conditions:
              "يُخزّن مستويًا في عبواته الأصلية، بعيدًا عن الرطوبة وأشعة الشمس.",
          },
          de: {
            shelfLife: "36 Monate ab Produktionsdatum",
            conditions:
              "Flach in Originalverpackung lagern, vor Feuchtigkeit und Sonnenlicht schützen.",
          },
          tr: {
            shelfLife: "Üretim tarihinden itibaren 36 ay",
            conditions:
              "Orijinal ambalajında düz şekilde saklayın, nem ve güneş ışığından koruyun.",
          },
        },
      },
    ],
  },
];

export default productsCollections;
