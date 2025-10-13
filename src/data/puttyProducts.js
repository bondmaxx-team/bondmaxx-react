import testImage from "../assets/color-1.png";

const puttyProducts = [
  {
    id: 601,
    type: "putty",
    category: "wall",
    image: testImage,
    name: {
      en: "Bondmax Wall Putty",
      ar: "معجون بوندماكس للجدران",
      de: "Bondmax Wandspachtel",
      tr: "Bondmax Duvar Macunu",
    },
    description: {
      en: "Smooth finish wall putty.",
      ar: "معجون جدران للتشطيب الناعم.",
      de: "Glatter Wandspachtel.",
      tr: "Pürüzsüz bitirme duvar macunu.",
    },
    features: {
      en: ["Smooth finish", "Easy sanding", "Crack resistant"],
      ar: ["لمسة نهائية ناعمة", "سهل الصنفرة", "مقاوم للتشققات"],
      de: ["Glatte Oberfläche", "Leicht zu schleifen", "Rissbeständig"],
      tr: ["Pürüzsüz yüzey", "Kolay zımparalama", "Çatlak dirençli"],
    },
    fullDescription: {
      en: "Bondmax Wall Putty is a white cement-based compound designed to provide a smooth, even surface before painting. It fills minor imperfections, levels surfaces, and creates the perfect base for topcoats.",
      ar: "معجون بوندماكس للجدران هو مركب أساسه الأسمنت الأبيض مصمم لتوفير سطح أملس ومتساوٍ قبل الدهان. يملأ العيوب الطفيفة، ويسوي الأسطح، ويخلق القاعدة المثالية للطبقات النهائية.",
      de: "Bondmax Wandspachtel ist eine Verbindung auf Weißzementbasis zur Schaffung einer glatten, ebenen Oberfläche vor dem Streichen. Er füllt kleinere Unebenheiten, nivelliert Oberflächen und schafft die perfekte Basis für Decklacke.",
      tr: "Bondmax Duvar Macunu, boyamadan önce pürüzsüz, düzgün bir yüzey sağlamak için tasarlanmış beyaz çimento bazlı bir bileşiktir. Küçük kusurları doldurur, yüzeyleri düzeltir ve üst katlar için mükemmel bir temel oluşturur.",
    },
    detailedFeatures: {
      en: [
        "White cement-based formula",
        "Excellent filling properties",
        "Easy to apply and sand",
        "Provides smooth, even surface",
        "Good adhesion to various substrates",
        "Suitable for interior and exterior use",
      ],
      ar: [
        "تركيبة أساسها الأسمنت الأبيض",
        "خصائص ملء ممتازة",
        "سهل التطبيق والصنفرة",
        "يوفر سطحًا أملس ومتساويًا",
        "التصاق جيد على مختلف الركائز",
        "مناسب للاستخدام الداخلي والخارجي",
      ],
      de: [
        "Weißzementbasierte Formel",
        "Hervorragende Fülleigenschaften",
        "Einfach aufzutragen und zu schleifen",
        "Bietet glatte, ebene Oberfläche",
        "Gute Haftung auf verschiedenen Untergründen",
        "Geeignet für Innen- und Außenbereich",
      ],
      tr: [
        "Beyaz çimento bazlı formül",
        "Mükemmel doldurma özellikleri",
        "Kolay uygulama ve zımparalama",
        "Pürüzsüz, düzgün yüzey sağlar",
        "Çeşitli yüzeylere iyi yapışma",
        "İç ve dış mekan kullanımı için uygundur",
      ],
    },
    technicalSpecs: {
      en: {
        color: "White",
        type: "Cement-based wall putty",
        mixRatio: "Water as needed for workable consistency",
        workingTime: "2-3 hours",
        dryingTime: "4-6 hours",
        recoatTime: "12-24 hours",
        coverage: "1-1.5 kg/m² (1mm thickness)",
        sandingTime: "After 24 hours",
        toolCleaning: "With water",
      },
      ar: {
        color: "أبيض",
        type: "معجون جدران أساسه الأسمنت",
        mixRatio: "ماء حسب الحاجة للحصول على قوام قابل للعمل",
        workingTime: "2-3 ساعات",
        dryingTime: "4-6 ساعات",
        recoatTime: "12-24 ساعة",
        coverage: "1-1.5 كجم/م² (سمك 1 مم)",
        sandingTime: "بعد 24 ساعة",
        toolCleaning: "بالماء",
      },
      de: {
        color: "Weiß",
        type: "Zementbasierter Wandspachtel",
        mixRatio: "Wasser nach Bedarf für verarbeitbare Konsistenz",
        workingTime: "2-3 Stunden",
        dryingTime: "4-6 Stunden",
        recoatTime: "12-24 Stunden",
        coverage: "1-1,5 kg/m² (1 mm Dicke)",
        sandingTime: "Nach 24 Stunden",
        toolCleaning: "Mit Wasser",
      },
      tr: {
        color: "Beyaz",
        type: "Çimento bazlı duvar macunu",
        mixRatio: "İşlenebilir kıvam için gerektiği kadar su",
        workingTime: "2-3 saat",
        dryingTime: "4-6 saat",
        recoatTime: "12-24 saat",
        coverage: "1-1,5 kg/m² (1 mm kalınlık)",
        sandingTime: "24 saat sonra",
        toolCleaning: "Su ile",
      },
    },
    usage: {
      en: {
        surfacePrep:
          "Surface must be clean, dry, and free from dust, oil, and loose material. Remove old flaking paint. Dampen surface before application.",
        application:
          "Mix putty with water to a smooth, lump-free paste. Apply with putty knife in thin layers (max 2mm per coat). Allow to dry, then sand smooth. Apply 2-3 coats as needed.",
      },
      ar: {
        surfacePrep:
          "يجب أن يكون السطح نظيفًا وجافًا وخاليًا من الغبار والزيت والمواد السائبة. أزل الطلاء القديم المتقشر. رطب السطح قبل التطبيق.",
        application:
          "اخلط المعجون بالماء للحصول على عجينة ناعمة خالية من الكتل. طبق بسكين المعجون في طبقات رقيقة (بحد أقصى 2 مم لكل طبقة). اترك حتى يجف، ثم صنفر بشكل ناعم. طبق 2-3 طبقات حسب الحاجة.",
      },
      de: {
        surfacePrep:
          "Die Oberfläche muss sauber, trocken und frei von Staub, Öl und losem Material sein. Alte abblätternde Farbe entfernen. Oberfläche vor dem Auftragen anfeuchten.",
        application:
          "Spachtel mit Wasser zu einer glatten, klumpenfreien Paste mischen. Mit Spachtel in dünnen Schichten auftragen (max. 2 mm pro Schicht). Trocknen lassen, dann glatt schleifen. 2-3 Schichten nach Bedarf auftragen.",
      },
      tr: {
        surfacePrep:
          "Yüzey temiz, kuru ve toz, yağ ve gevşek malzemeden arınmış olmalıdır. Eski pullanmış boyayı çıkarın. Uygulamadan önce yüzeyi nemlendirin.",
        application:
          "Macunu su ile pürüzsüz, topaksız bir hamur haline getirin. Macun bıçağı ile ince katlar halinde uygulayın (kat başına maks. 2 mm). Kurumasını bekleyin, sonra pürüzsüz zımparalayın. Gerektiğinde 2-3 kat uygulayın.",
      },
    },
    storage: {
      en: {
        shelfLife: "12 months from production date",
        conditions:
          "Store in original sealed bags in a dry place. Protect from moisture and direct sunlight.",
      },
      ar: {
        shelfLife: "12 شهرًا من تاريخ الإنتاج",
        conditions:
          "يُخزن في الأكياس الأصلية المغلقة في مكان جاف. احمِ من الرطوبة وأشعة الشمس المباشرة.",
      },
      de: {
        shelfLife: "12 Monate ab Produktionsdatum",
        conditions:
          "In original versiegelten Säcken an einem trockenen Ort lagern. Vor Feuchtigkeit und direkter Sonneneinstrahlung schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 12 ay",
        conditions:
          "Orijinal kapalı torbalarda kuru yerde saklayın. Nemden ve doğrudan güneş ışığından koruyun.",
      },
    },
  },
];

export default puttyProducts;
