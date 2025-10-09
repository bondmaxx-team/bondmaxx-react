import testImage from "../assets/color-1.png";

// ✅ احفظ المفاتيح فقط، بدون ترجمة
const productsCollections = [
  {
    titleKey: "interior_paints", // مفتاح الترجمة
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
      },
      {
        id: 2,
        category: "walls",
        image: testImage,
        name: {
          en: "Bondmax Facade Exterior Paint",
          ar: "دهان الواجهات الخارجية من بوندماكس",
          de: "Bondmax Fassaden Außenfarbe",
          tr: "Bondmax Cephe Dış Boyası",
        },
        description: {
          en: "Ideal for facades with anti-crack technology and a durable finish.",
          ar: "مثالي للواجهات بفضل تقنية مقاومة التشقق وتشطيب متين.",
          de: "Ideal für Fassaden mit Anti-Riss-Technologie und langlebigem Finish.",
          tr: "Cepheler için ideal; çatlak önleyici teknoloji ve dayanıklı kaplama sağlar.",
        },
        features: {
          en: ["Anti-crack", "Easy application", "Durable finish"],
          ar: ["مقاوم للتشققات", "سهل التطبيق", "تشطيب متين"],
          de: ["Rissbeständig", "Einfache Anwendung", "Langlebiges Finish"],
          tr: ["Çatlak önleyici", "Kolay uygulama", "Dayanıklı kaplama"],
        },
      },
      {
        id: 3,
        category: "metal_and_wood",
        image: testImage,
        name: {
          en: "Bondmax Metal & Wood Exterior Paint",
          ar: "دهان خارجي للمعدن والخشب من بوندماكس",
          de: "Bondmax Außenfarbe für Metall & Holz",
          tr: "Bondmax Metal ve Ahşap Dış Cephe Boyası",
        },
        description: {
          en: "Protects metal and wood surfaces with a smooth and long-lasting finish.",
          ar: "يحمي الأسطح المعدنية والخشبية بتشطيب ناعم وطويل الأمد.",
          de: "Schützt Metall- und Holzoberflächen mit einem glatten und langlebigen Finish.",
          tr: "Metal ve ahşap yüzeyleri pürüzsüz ve uzun ömürlü bir kaplama ile korur.",
        },
        features: {
          en: ["Rust resistant", "Smooth finish", "Long lasting"],
          ar: ["مقاوم للصدأ", "تشطيب ناعم", "يدوم طويلاً"],
          de: ["Rostbeständig", "Glatte Oberfläche", "Langlebig"],
          tr: ["Paslanmaya dayanıklı", "Pürüzsüz kaplama", "Uzun ömürlü"],
        },
      },
      {
        id: 4,
        category: "walls",
        image: testImage,
        name: {
          en: "Bondmax Elastic Exterior Paint",
          ar: "دهان خارجي مرن من بوندماكس",
          de: "Bondmax Elastische Außenfarbe",
          tr: "Bondmax Elastik Dış Cephe Boyası",
        },
        description: {
          en: "Elastic coating prevents cracks and provides excellent waterproofing for exterior walls.",
          ar: "طلاء مرن يمنع التشققات ويوفر مقاومة ممتازة للماء للجدران الخارجية.",
          de: "Elastische Beschichtung verhindert Risse und bietet hervorragende Wasserdichtigkeit für Außenwände.",
          tr: "Elastik kaplama çatlakları önler ve dış cepheler için mükemmel su yalıtımı sağlar.",
        },
        features: {
          en: ["Flexible coating", "Waterproof", "Weatherproof"],
          ar: ["طلاء مرن", "مضاد للماء", "مقاوم للعوامل الجوية"],
          de: ["Elastische Beschichtung", "Wasserdicht", "Witterungsbeständig"],
          tr: ["Esnek kaplama", "Su geçirmez", "Hava koşullarına dayanıklı"],
        },
      },
      {
        id: 5,
        category: "walls",
        image: testImage,
        name: {
          en: "Bondmax Premium Exterior Paint",
          ar: "دهان خارجي فاخر من بوندماكس",
          de: "Bondmax Premium Außenfarbe",
          tr: "Bondmax Premium Dış Cephe Boyası",
        },
        description: {
          en: "Premium quality finish with rich colors, fade resistance, and easy cleaning.",
          ar: "تشطيب فاخر بجودة عالية مع ألوان غنية ومقاومة للبهتان وسهولة التنظيف.",
          de: "Hochwertiges Premium-Finish mit satten Farben, Farbbeständigkeit und einfacher Reinigung.",
          tr: "Zengin renkler, solma direnci ve kolay temizlenebilirlik ile premium kalite kaplama.",
        },
        features: {
          en: ["Rich colors", "Fade resistant", "Easy cleaning"],
          ar: ["ألوان غنية", "مقاوم للبهتان", "سهل التنظيف"],
          de: ["Satte Farben", "Farb­beständig", "Einfache Reinigung"],
          tr: ["Zengin renkler", "Solmaya dayanıklı", "Kolay temizlenir"],
        },
      },
      {
        id: 6,
        category: "walls",
        image: testImage,
        name: {
          en: "Bondmax Matte Exterior Paint",
          ar: "دهان خارجي مطفي من بوندماكس",
          de: "Bondmax Matte Außenfarbe",
          tr: "Bondmax Mat Dış Cephe Boyası",
        },
        description: {
          en: "Matte finish exterior paint for a modern look, dust resistance, and easy washing.",
          ar: "دهان خارجي مطفي لمظهر عصري، مقاوم للغبار وسهل الغسل.",
          de: "Matte Außenfarbe für einen modernen Look, staubabweisend und leicht zu reinigen.",
          tr: "Modern görünüm, toz direnci ve kolay yıkanabilirlik sağlayan mat dış cephe boyası.",
        },
        features: {
          en: ["Modern look", "Anti-dust", "Washable surface"],
          ar: ["مظهر عصري", "مضاد للغبار", "سطح قابل للغسل"],
          de: ["Moderner Look", "Staubabweisend", "Abwaschbare Oberfläche"],
          tr: ["Modern görünüm", "Toz önleyici", "Yıkanabilir yüzey"],
        },
      },
    ],
  },
  {
    titleKey: "insulation_products",
    color: "orange",
    linkTo: "insulation",
    collection: [
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
      },
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
      },
      {
        id: 3,
        category: "thermal_insulation",
        image: testImage,
        name: {
          en: "Bondmax Villas Thermal Insulation",
          ar: "عازل حراري بوندماكس للفلل",
          de: "Bondmax Wärmedämmung für Villen",
          tr: "Bondmax Villa Isı Yalıtımı",
        },
        description: {
          en: "Advanced insulation solution designed for villas to improve energy efficiency and fire resistance.",
          ar: "حل عزل متطور مصمم للفلل لتحسين كفاءة الطاقة ومقاومة الحريق.",
          de: "Fortschrittliche Dämmlösung für Villen zur Verbesserung der Energieeffizienz und des Brandschutzes.",
          tr: "Enerji verimliliğini ve yangına dayanıklılığı artırmak için villalar için tasarlanmış gelişmiş yalıtım çözümü.",
        },
        features: {
          en: [
            "Advanced insulation",
            "Improves energy efficiency",
            "Fire resistant",
          ],
          ar: ["عزل متطور", "يحسن كفاءة الطاقة", "مقاوم للحريق"],
          de: [
            "Fortschrittliche Isolierung",
            "Verbessert die Energieeffizienz",
            "Feuerbeständig",
          ],
          tr: [
            "Gelişmiş yalıtım",
            "Enerji verimliliğini artırır",
            "Yangına dayanıklı",
          ],
        },
      },
      {
        id: 4,
        category: "sound_insulation",
        image: testImage,
        name: {
          en: "Bondmax Interior Room Sound Insulation",
          ar: "عازل صوت للغرف الداخلية من بوندماكس",
          de: "Bondmax Schalldämmung für Innenräume",
          tr: "Bondmax İç Mekan Ses Yalıtımı",
        },
        description: {
          en: "Effective sound insulation for interior rooms that allows ventilation while reducing noise.",
          ar: "عازل صوت فعال للغرف الداخلية يسمح بالتهوية مع تقليل الضوضاء.",
          de: "Effektive Schalldämmung für Innenräume, die Belüftung ermöglicht und Lärm reduziert.",
          tr: "Havalandırmaya izin verirken gürültüyü azaltan iç mekanlar için etkili ses yalıtımı.",
        },
        features: {
          en: [
            "Noise absorption",
            "Light and easy to install",
            "Does not block ventilation",
          ],
          ar: ["امتصاص الضوضاء", "خفيف وسهل التركيب", "لا يمنع التهوية"],
          de: [
            "Geräuschabsorption",
            "Leicht und einfach zu installieren",
            "Blockiert die Belüftung nicht",
          ],
          tr: [
            "Gürültü emilimi",
            "Hafif ve kolay montaj",
            "Havalandırmayı engellemez",
          ],
        },
      },
    ],
  },
];

export default productsCollections;
