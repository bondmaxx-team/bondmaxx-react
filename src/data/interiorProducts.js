import testImage from "../assets/color-1.png";

const interiorProducts = [
  {
    id: 1,
    type: "interior",
    category: "walls",
    quality: "normal",
    weight: "1kg",
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
    fullDescription: {
      en: "Bondmax Economy Color is a water-based emulsion paint for interior use, featuring excellent coverage, high transparency, and easy application. It dries quickly, lasts long, and is virtually odorless, making it ideal for painting walls and ceilings in interior spaces.",
      ar: "بوندماكس إيكونومي كولور هو طلاء مستحلب مائي للاستخدام الداخلي، يتميز بتغطية ممتازة وشفافية عالية وسهولة في التطبيق. يجف بسرعة، يدوم لفترة طويلة، وخالٍ من الرائحة تقريبًا، مما يجعله مثاليًا لدهان الجدران والأسقف في المساحات الداخلية.",
      de: "Bondmax Economy Color ist eine wasserbasierte Emulsionsfarbe für den Innenbereich mit hervorragender Deckkraft, hoher Transparenz und einfacher Anwendung. Sie trocknet schnell, ist langlebig und nahezu geruchsfrei, ideal für Wände und Decken.",
      tr: "Bondmax Economy Color, mükemmel kaplama, yüksek şeffaflık ve kolay uygulama özellikleriyle iç mekan kullanımı için su bazlı emülsiyon boyasıdır. Hızlı kurur, uzun ömürlüdür ve neredeyse kokusuz olup iç mekanlarda duvar ve tavan boyaması için idealdir.",
    },
    detailedFeatures: {
      en: [
        "Excellent coverage and uniform final appearance",
        "Dries quickly and easy to apply",
        "Virtually odorless during and after use",
        "Resistant to peeling and long-lasting",
        "Provides an elegant matte finish",
        "Economical and practical for home or commercial use",
      ],
      ar: [
        "تغطية ممتازة ومظهر نهائي متجانس",
        "يجف بسرعة وسهل التطبيق",
        "خالٍ من الرائحة تقريبًا أثناء وبعد الاستخدام",
        "مقاوم للتقشر ويدوم لفترة طويلة",
        "يمنح لمسة نهائية غير لامعة أنيقة",
        "اقتصادي وعملي للاستخدام المنزلي أو التجاري",
      ],
      de: [
        "Hervorragende Deckkraft und gleichmäßiges Endresultat",
        "Trocknet schnell und einfach aufzutragen",
        "Nahezu geruchsfrei während und nach der Anwendung",
        "Abblätterungsbeständig und langlebig",
        "Verleiht ein elegantes mattes Finish",
        "Wirtschaftlich und praktisch für den privaten oder gewerblichen Gebrauch",
      ],
      tr: [
        "Mükemmel kaplama ve homojen son görünüm",
        "Hızlı kurur ve kolay uygulanır",
        "Kullanım sırasında ve sonrasında neredeyse kokusuz",
        "Soyulmaya karşı dayanıklı ve uzun ömürlü",
        "Zarif mat bir bitiş sağlar",
        "Ev veya ticari kullanım için ekonomik ve pratik",
      ],
    },
    technicalSpecs: {
      en: {
        color:
          "White and can be tinted to thousands of colors from Bondmax system",
        type: "Water-based emulsion paint",
        solidsContent: "44.2%",
        viscosity: "25-30 Poise",
        density: "1.66 ± 0.03 kg/liter",
        pH: "8.5-9.5 at +23°C",
        whiteness: "87%",
        dryingTime: "30 to 60 minutes",
        recoatTime: "3 to 4 hours",
        sheen: "Matte (approximately 18 degrees)",
        toolCleaning: "With water immediately after use",
      },
      ar: {
        color: "أبيض ويمكن تلوينه بآلاف الألوان من نظام بوندماكس",
        type: "طلاء مستحلب مائي",
        solidsContent: "44.2%",
        viscosity: "25-30 بويز",
        density: "1.66 ± 0.03 كجم/لتر",
        pH: "8.5-9.5 عند +23°م",
        whiteness: "87%",
        dryingTime: "من 30 إلى 60 دقيقة",
        recoatTime: "من 3 إلى 4 ساعات",
        sheen: "غير لامع (18 درجة تقريبًا)",
        toolCleaning: "بالماء مباشرة بعد الاستخدام",
      },
      de: {
        color: "Weiß und in tausenden Farben des Bondmax-Systems tönen",
        type: "Wasserbasierte Emulsionsfarbe",
        solidsContent: "44,2%",
        viscosity: "25-30 Poise",
        density: "1,66 ± 0,03 kg/Liter",
        pH: "8,5-9,5 bei +23°C",
        whiteness: "87%",
        dryingTime: "30 bis 60 Minuten",
        recoatTime: "3 bis 4 Stunden",
        sheen: "Matt (ca. 18 Grad)",
        toolCleaning: "Direkt nach Gebrauch mit Wasser",
      },
      tr: {
        color: "Beyaz ve Bondmax sisteminden binlerce renge boyatılabilir",
        type: "Su bazlı emülsiyon boya",
        solidsContent: "44,2%",
        viscosity: "25-30 Poise",
        density: "1,66 ± 0,03 kg/litre",
        pH: "8,5-9,5 +23°C'de",
        whiteness: "87%",
        dryingTime: "30 ila 60 dakika",
        recoatTime: "3 ila 4 saat",
        sheen: "Mat (yaklaşık 18 derece)",
        toolCleaning: "Kullanımdan hemen sonra suyla",
      },
    },
    usage: {
      en: {
        surfacePrep:
          "Surface must be dry, clean, and free from dust and oils. Repair defects using appropriate Bondmax products, and it is recommended to use Bondmax primer to ensure best paint adhesion.",
        application:
          "Stir paint well before use and dilute with water at 10-20%. Apply in two coats, allowing the first coat to dry completely before applying the second. Ideal application temperature is between +10 and +35°C.",
      },
      ar: {
        surfacePrep:
          "يجب أن يكون السطح جافًا ونظيفًا وخاليًا من الغبار والزيوت. تُصلّح العيوب باستخدام منتجات بوندماكس المناسبة، ويُنصح باستخدام برايمر بوندماكس لضمان أفضل التصاق للطلاء.",
        application:
          "يُحرّك الطلاء جيدًا قبل الاستخدام، ويُخفّف بالماء بنسبة 10-20%. يُطبّق على طبقتين مع ترك الطبقة الأولى لتجف تمامًا قبل وضع الثانية. درجة الحرارة المثالية للتطبيق بين +10 و+35 درجة مئوية.",
      },
      de: {
        surfacePrep:
          "Die Oberfläche muss trocken, sauber und frei von Staub und Ölen sein. Mängel mit geeigneten Bondmax-Produkten beheben und Bondmax-Grundierung für beste Haftung verwenden.",
        application:
          "Farbe vor Gebrauch gut umrühren und mit 10-20% Wasser verdünnen. In zwei Schichten auftragen, wobei die erste Schicht vollständig trocknen muss. Ideale Anwendungstemperatur zwischen +10 und +35°C.",
      },
      tr: {
        surfacePrep:
          "Yüzey kuru, temiz ve toz ile yağdan arınmış olmalıdır. Kusurları uygun Bondmax ürünleriyle onarın ve en iyi boya yapışması için Bondmax astarı kullanılması önerilir.",
        application:
          "Kullanmadan önce boyayı iyice karıştırın ve %10-20 oranında suyla inceletin. İki kat uygulayın, ikinci katı uygulamadan önce ilk katın tamamen kurumasını bekleyin. İdeal uygulama sıcaklığı +10 ile +35°C arasındadır.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months from production date",
        conditions:
          "Store in original unopened container at temperature between +5 and +35°C. Keep away from direct sunlight and frost.",
      },
      ar: {
        shelfLife: "24 شهرًا من تاريخ الإنتاج",
        conditions:
          "يُخزَّن في العبوة الأصلية غير المفتوحة في درجة حرارة بين +5 و+35 درجة مئوية. يُحفظ بعيدًا عن أشعة الشمس المباشرة والصقيع.",
      },
      de: {
        shelfLife: "24 Monate ab Produktionsdatum",
        conditions:
          "In ungeöffnetem Originalbehälter bei Temperaturen zwischen +5 und +35°C lagern. Vor direkter Sonneneinstrahlung und Frost schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 24 ay",
        conditions:
          "Açılmamış orijinal ambalajında +5 ile +35°C arasında saklayın. Doğrudan güneş ışığından ve dondan uzak tutun.",
      },
    },
  },
  {
    id: 2,
    type: "interior",
    category: "ceilings",
    quality: "normal",
    weight: "1kg",
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
    fullDescription: {
      en: "Bondmax Ceiling White is specially formulated for ceiling applications, providing brilliant white coverage that resists yellowing over time. Its anti-drip formula ensures easy overhead application.",
      ar: "بوندماكس سقف أبيض مُصمم خصيصًا لتطبيقات الأسقف، يوفر تغطية بيضاء ناصعة تقاوم الاصفرار مع مرور الوقت. تركيبته المضادة للتقطير تضمن سهولة التطبيق على الأسطح العلوية.",
      de: "Bondmax Deckenweiß ist speziell für Deckenanwendungen formuliert und bietet brillante weiße Abdeckung, die gegen Vergilbung beständig ist. Seine tropffreie Formel gewährleistet einfache Überkopfanwendung.",
      tr: "Bondmax Tavan Beyazı, tavan uygulamaları için özel olarak formüle edilmiştir ve zamanla sararmaya karşı dayanıklı parlak beyaz kaplama sağlar. Damlamayan formülü, tavandan kolay uygulama sağlar.",
    },
    detailedFeatures: {
      en: [
        "Superior white coverage for ceilings",
        "Anti-yellowing formula maintains brightness",
        "Quick drying time saves application time",
        "No-drip formula for overhead work",
        "Excellent hiding power",
        "Low odor and easy cleanup",
      ],
      ar: [
        "تغطية بيضاء فائقة للأسقف",
        "تركيبة مضادة للاصفرار تحافظ على السطوع",
        "وقت جفاف سريع يوفر وقت التطبيق",
        "تركيبة لا تقطر للعمل على الأسطح العلوية",
        "قوة إخفاء ممتازة",
        "رائحة خفيفة وتنظيف سهل",
      ],
      de: [
        "Überlegene weiße Abdeckung für Decken",
        "Anti-Vergilbungs-Formel erhält Helligkeit",
        "Schnelle Trocknungszeit spart Anwendungszeit",
        "Tropffreie Formel für Überkopfarbeiten",
        "Hervorragende Deckkraft",
        "Geringer Geruch und einfache Reinigung",
      ],
      tr: [
        "Tavanlar için üstün beyaz kaplama",
        "Sararmayı önleyen formül parlaklığı korur",
        "Hızlı kuruma süresi uygulama süresinden tasarruf sağlar",
        "Tavan çalışmaları için damlamayan formül",
        "Mükemmel kapatma gücü",
        "Düşük koku ve kolay temizlik",
      ],
    },
    technicalSpecs: {
      en: {
        color: "Pure white",
        type: "Water-based ceiling paint",
        solidsContent: "46%",
        viscosity: "28-32 Poise",
        density: "1.68 ± 0.03 kg/liter",
        pH: "8.5-9.5 at +23°C",
        whiteness: "92%",
        dryingTime: "20 to 40 minutes",
        recoatTime: "2 to 3 hours",
        sheen: "Flat matte",
        toolCleaning: "With water immediately after use",
      },
      ar: {
        color: "أبيض ناصع",
        type: "طلاء سقف مائي",
        solidsContent: "46%",
        viscosity: "28-32 بويز",
        density: "1.68 ± 0.03 كجم/لتر",
        pH: "8.5-9.5 عند +23°م",
        whiteness: "92%",
        dryingTime: "من 20 إلى 40 دقيقة",
        recoatTime: "من 2 إلى 3 ساعات",
        sheen: "مطفي تماماً",
        toolCleaning: "بالماء مباشرة بعد الاستخدام",
      },
      de: {
        color: "Reinweiß",
        type: "Wasserbasierte Deckenfarbe",
        solidsContent: "46%",
        viscosity: "28-32 Poise",
        density: "1,68 ± 0,03 kg/Liter",
        pH: "8,5-9,5 bei +23°C",
        whiteness: "92%",
        dryingTime: "20 bis 40 Minuten",
        recoatTime: "2 bis 3 Stunden",
        sheen: "Flach matt",
        toolCleaning: "Direkt nach Gebrauch mit Wasser",
      },
      tr: {
        color: "Saf beyaz",
        type: "Su bazlı tavan boyası",
        solidsContent: "46%",
        viscosity: "28-32 Poise",
        density: "1,68 ± 0,03 kg/litre",
        pH: "8,5-9,5 +23°C'de",
        whiteness: "92%",
        dryingTime: "20 ila 40 dakika",
        recoatTime: "2 ila 3 saat",
        sheen: "Düz mat",
        toolCleaning: "Kullanımdan hemen sonra suyla",
      },
    },
    usage: {
      en: {
        surfacePrep:
          "Ceiling surface must be clean, dry, and free from loose particles. Fill cracks and holes with appropriate filler. Prime new surfaces with Bondmax primer for best results.",
        application:
          "Stir well before use. Can be diluted with 5-10% water if needed. Apply in thin, even coats using a roller. Two coats recommended for best coverage. Apply at temperatures between +10 and +30°C.",
      },
      ar: {
        surfacePrep:
          "يجب أن يكون سطح السقف نظيفًا وجافًا وخاليًا من الجسيمات السائبة. املأ الشقوق والثقوب بمادة مالئة مناسبة. استخدم برايمر بوندماكس للأسطح الجديدة لأفضل النتائج.",
        application:
          "حرّك جيدًا قبل الاستخدام. يمكن تخفيفه بـ 5-10% ماء إذا لزم الأمر. طبّق طبقات رقيقة ومتساوية باستخدام الرول. يُنصح بطبقتين لأفضل تغطية. طبّق في درجات حرارة بين +10 و+30 درجة مئوية.",
      },
      de: {
        surfacePrep:
          "Die Deckenoberfläche muss sauber, trocken und frei von losen Partikeln sein. Risse und Löcher mit geeignetem Füller füllen. Neue Oberflächen mit Bondmax-Grundierung vorbehandeln.",
        application:
          "Vor Gebrauch gut umrühren. Kann bei Bedarf mit 5-10% Wasser verdünnt werden. In dünnen, gleichmäßigen Schichten mit einer Rolle auftragen. Zwei Schichten für beste Abdeckung empfohlen. Bei Temperaturen zwischen +10 und +30°C auftragen.",
      },
      tr: {
        surfacePrep:
          "Tavan yüzeyi temiz, kuru ve gevşek parçacıklardan arınmış olmalıdır. Çatlak ve delikleri uygun dolgu ile doldurun. En iyi sonuç için yeni yüzeylere Bondmax astarı uygulayın.",
        application:
          "Kullanmadan önce iyice karıştırın. Gerekirse %5-10 su ile inceletilebilir. Rulo kullanarak ince, eşit katlar halinde uygulayın. En iyi kaplama için iki kat önerilir. +10 ile +30°C arasında uygulayın.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months from production date",
        conditions:
          "Store in original sealed container between +5 and +30°C. Protect from freezing and direct sunlight.",
      },
      ar: {
        shelfLife: "24 شهرًا من تاريخ الإنتاج",
        conditions:
          "يُخزن في الحاوية الأصلية المغلقة بين +5 و+30 درجة مئوية. احمِ من التجمد وأشعة الشمس المباشرة.",
      },
      de: {
        shelfLife: "24 Monate ab Produktionsdatum",
        conditions:
          "In original versiegeltem Behälter zwischen +5 und +30°C lagern. Vor Frost und direkter Sonneneinstrahlung schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 24 ay",
        conditions:
          "Orijinal kapalı ambalajında +5 ile +30°C arasında saklayın. Donmadan ve doğrudan güneş ışığından koruyun.",
      },
    },
  },
  {
    id: 3,
    type: "interior",
    category: "walls",
    quality: "normal",
    weight: "1kg",
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
    fullDescription: {
      en: "Bondmax Luxury Silk offers a sophisticated silk-sheen finish that adds elegance to any interior space. Its advanced formula provides excellent stain resistance while maintaining a luxurious appearance that enhances the beauty of your walls.",
      ar: "يوفر بوندماكس الحريري الفاخر لمسة نهائية حريرية راقية تضيف الأناقة لأي مساحة داخلية. تركيبته المتقدمة توفر مقاومة ممتازة للبقع مع الحفاظ على مظهر فاخر يعزز جمال جدرانك.",
      de: "Bondmax Luxus Seide bietet ein anspruchsvolles Seidenglanz-Finish, das jedem Innenraum Eleganz verleiht. Seine fortschrittliche Formel bietet hervorragende Fleckenbeständigkeit bei gleichzeitiger Beibehaltung eines luxuriösen Aussehens.",
      tr: "Bondmax Lüks İpek, her iç mekana zarafet katan sofistike ipeksi parlak bir bitiş sunar. Gelişmiş formülü, duvarlarınızın güzelliğini artıran lüks görünümü korurken mükemmel leke direnci sağlar.",
    },
    detailedFeatures: {
      en: [
        "Luxurious silk-sheen finish",
        "Superior stain and dirt resistance",
        "Highly washable and durable",
        "Rich, vibrant colors",
        "Smooth, elegant application",
        "Perfect for living rooms and bedrooms",
      ],
      ar: [
        "لمسة نهائية حريرية فاخرة",
        "مقاومة فائقة للبقع والأوساخ",
        "قابل للغسيل بشكل كبير ومتين",
        "ألوان غنية وزاهية",
        "تطبيق ناعم وأنيق",
        "مثالي لغرف المعيشة والنوم",
      ],
      de: [
        "Luxuriöses Seidenglanz-Finish",
        "Überlegene Flecken- und Schmutzbeständigkeit",
        "Hochwaschbar und langlebig",
        "Satte, lebendige Farben",
        "Glatte, elegante Anwendung",
        "Perfekt für Wohn- und Schlafzimmer",
      ],
      tr: [
        "Lüks ipeksi parlak bitiş",
        "Üstün leke ve kir direnci",
        "Yüksek yıkanabilir ve dayanıklı",
        "Zengin, canlı renkler",
        "Pürüzsüz, zarif uygulama",
        "Oturma odaları ve yatak odaları için mükemmel",
      ],
    },
    technicalSpecs: {
      en: {
        color: "Available in full Bondmax color range",
        type: "Premium silk-sheen emulsion",
        solidsContent: "48%",
        viscosity: "30-35 Poise",
        density: "1.70 ± 0.03 kg/liter",
        pH: "8.5-9.5 at +23°C",
        whiteness: "90%",
        dryingTime: "40 to 70 minutes",
        recoatTime: "4 to 5 hours",
        sheen: "Silk (35-40 degrees)",
        toolCleaning: "With water immediately after use",
      },
      ar: {
        color: "متوفر في مجموعة ألوان بوندماكس الكاملة",
        type: "مستحلب حريري فاخر",
        solidsContent: "48%",
        viscosity: "30-35 بويز",
        density: "1.70 ± 0.03 كجم/لتر",
        pH: "8.5-9.5 عند +23°م",
        whiteness: "90%",
        dryingTime: "من 40 إلى 70 دقيقة",
        recoatTime: "من 4 إلى 5 ساعات",
        sheen: "حريري (35-40 درجة)",
        toolCleaning: "بالماء مباشرة بعد الاستخدام",
      },
      de: {
        color: "Verfügbar im gesamten Bondmax-Farbsortiment",
        type: "Premium Seidenglanz-Emulsion",
        solidsContent: "48%",
        viscosity: "30-35 Poise",
        density: "1,70 ± 0,03 kg/Liter",
        pH: "8,5-9,5 bei +23°C",
        whiteness: "90%",
        dryingTime: "40 bis 70 Minuten",
        recoatTime: "4 bis 5 Stunden",
        sheen: "Seide (35-40 Grad)",
        toolCleaning: "Direkt nach Gebrauch mit Wasser",
      },
      tr: {
        color: "Tam Bondmax renk yelpazesinde mevcuttur",
        type: "Premium ipeksi parlak emülsiyon",
        solidsContent: "48%",
        viscosity: "30-35 Poise",
        density: "1,70 ± 0,03 kg/litre",
        pH: "8,5-9,5 +23°C'de",
        whiteness: "90%",
        dryingTime: "40 ila 70 dakika",
        recoatTime: "4 ila 5 saat",
        sheen: "İpek (35-40 derece)",
        toolCleaning: "Kullanımdan hemen sonra suyla",
      },
    },
    usage: {
      en: {
        surfacePrep:
          "Ceiling surface must be clean, dry, and free from loose particles. Fill cracks and holes with appropriate filler. Prime new surfaces with Bondmax primer for best results.",
        application:
          "Stir well before use. Can be diluted with 5-10% water if needed. Apply in thin, even coats using a roller. Two coats recommended for best coverage. Apply at temperatures between +10 and +30°C.",
      },
      ar: {
        surfacePrep:
          "يجب أن يكون سطح السقف نظيفًا وجافًا وخاليًا من الجسيمات السائبة. املأ الشقوق والثقوب بمادة مالئة مناسبة. استخدم برايمر بوندماكس للأسطح الجديدة لأفضل النتائج.",
        application:
          "حرّك جيدًا قبل الاستخدام. يمكن تخفيفه بـ 5-10% ماء إذا لزم الأمر. طبّق طبقات رقيقة ومتساوية باستخدام الرول. يُنصح بطبقتين لأفضل تغطية. طبّق في درجات حرارة بين +10 و+30 درجة مئوية.",
      },
      de: {
        surfacePrep:
          "Die Deckenoberfläche muss sauber, trocken und frei von losen Partikeln sein. Risse und Löcher mit geeignetem Füller füllen. Neue Oberflächen mit Bondmax-Grundierung vorbehandeln.",
        application:
          "Vor Gebrauch gut umrühren. Kann bei Bedarf mit 5-10% Wasser verdünnt werden. In dünnen, gleichmäßigen Schichten mit einer Rolle auftragen. Zwei Schichten für beste Abdeckung empfohlen. Bei Temperaturen zwischen +10 und +30°C auftragen.",
      },
      tr: {
        surfacePrep:
          "Tavan yüzeyi temiz, kuru ve gevşek parçacıklardan arınmış olmalıdır. Çatlak ve delikleri uygun dolgu ile doldurun. En iyi sonuç için yeni yüzeylere Bondmax astarı uygulayın.",
        application:
          "Kullanmadan önce iyice karıştırın. Gerekirse %5-10 su ile inceletilebilir. Rulo kullanarak ince, eşit katlar halinde uygulayın. En iyi kaplama için iki kat önerilir. +10 ile +30°C arasında uygulayın.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months from production date",
        conditions:
          "Store in original sealed container between +5 and +30°C. Protect from freezing and direct sunlight.",
      },
      ar: {
        shelfLife: "24 شهرًا من تاريخ الإنتاج",
        conditions:
          "يُخزن في الحاوية الأصلية المغلقة بين +5 و+30 درجة مئوية. احمِ من التجمد وأشعة الشمس المباشرة.",
      },
      de: {
        shelfLife: "24 Monate ab Produktionsdatum",
        conditions:
          "In original versiegeltem Behälter zwischen +5 und +30°C lagern. Vor Frost und direkter Sonneneinstrahlung schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 24 ay",
        conditions:
          "Orijinal kapalı ambalajında +5 ile +30°C arasında saklayın. Donmadan ve doğrudan güneş ışığından koruyun.",
      },
    },
  },
];
export default interiorProducts;
