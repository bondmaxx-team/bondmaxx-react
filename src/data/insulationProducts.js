import testImage from "../assets/color-1.png";

const insulationProductsDetailed = [
  {
    id: 1,
    category: "external",
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

  {
    id: 2,
    category: "external",
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
        surfacePrep: "Ensure surface is clean and dry. Remove dust and debris.",
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
];

export default insulationProductsDetailed;
