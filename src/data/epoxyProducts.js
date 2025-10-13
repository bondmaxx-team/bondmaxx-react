import testImage from "../assets/color-1.png";

const epoxyProducts = [
  {
    id: 501,
    type: "epoxy",
    category: "floor",
    image: testImage,
    name: {
      en: "Bondmax Epoxy Floor Coating",
      ar: "إيبوكسي بوندماكس للأرضيات",
      de: "Bondmax Epoxid-Bodenbeschichtung",
      tr: "Bondmax Epoksi Zemin Kaplaması",
    },
    description: {
      en: "Heavy-duty epoxy flooring system.",
      ar: "نظام أرضيات إيبوكسي فائق التحمل.",
      de: "Hochbelastbares Epoxid-Bodensystem.",
      tr: "Ağır hizmet tipi epoksi zemin sistemi.",
    },
    features: {
      en: ["Extreme durability", "Chemical resistant", "Easy to clean"],
      ar: ["متانة فائقة", "مقاوم للمواد الكيميائية", "سهل التنظيف"],
      de: ["Extreme Haltbarkeit", "Chemikalienbeständig", "Leicht zu reinigen"],
      tr: ["Aşırı dayanıklılık", "Kimyasal dirençli", "Kolay temizlik"],
    },
    fullDescription: {
      en: "Bondmax Epoxy Floor Coating is a two-component, solvent-free epoxy system designed for industrial and commercial floors. It provides exceptional resistance to heavy traffic, chemicals, and abrasion while offering a smooth, attractive finish.",
      ar: "إيبوكسي بوندماكس للأرضيات هو نظام إيبوكسي ثنائي المكونات خالٍ من المذيبات مصمم للأرضيات الصناعية والتجارية. يوفر مقاومة استثنائية للحركة الكثيفة والمواد الكيميائية والتآكل مع توفير لمسة نهائية ناعمة وجذابة.",
      de: "Bondmax Epoxid-Bodenbeschichtung ist ein zweikomponentiges, lösemittelfreies Epoxidsystem für Industrie- und Gewerbeböden. Es bietet außergewöhnliche Beständigkeit gegen starken Verkehr, Chemikalien und Abrieb bei glatter, attraktiver Oberfläche.",
      tr: "Bondmax Epoksi Zemin Kaplaması, endüstriyel ve ticari zeminler için tasarlanmış iki bileşenli, çözücüsüz epoksi sistemidir. Yoğun trafiğe, kimyasallara ve aşınmaya karşı olağanüstü direnç sağlarken pürüzsüz, çekici bir yüzey sunar.",
    },
    detailedFeatures: {
      en: [
        "Two-component epoxy system",
        "Solvent-free and low odor",
        "Excellent chemical resistance",
        "High mechanical strength",
        "Seamless and easy to clean surface",
        "Available in various colors",
      ],
      ar: [
        "نظام إيبوكسي ثنائي المكونات",
        "خالٍ من المذيبات ورائحة منخفضة",
        "مقاومة ممتازة للمواد الكيميائية",
        "قوة ميكانيكية عالية",
        "سطح غير ملحوم وسهل التنظيف",
        "متوفر بألوان متنوعة",
      ],
      de: [
        "Zweikomponenten-Epoxidsystem",
        "Lösemittelfrei und geruchsarm",
        "Hervorragende Chemikalienbeständigkeit",
        "Hohe mechanische Festigkeit",
        "Fugenlose und leicht zu reinigende Oberfläche",
        "In verschiedenen Farben erhältlich",
      ],
      tr: [
        "İki bileşenli epoksi sistemi",
        "Çözücüsüz ve düşük kokulu",
        "Mükemmel kimyasal direnç",
        "Yüksek mekanik mukavemet",
        "Dikişsiz ve kolay temizlenebilir yüzey",
        "Çeşitli renklerde mevcuttur",
      ],
    },
    technicalSpecs: {
      en: {
        color: "Gray/Custom colors available",
        type: "Two-component epoxy",
        mixRatio: "2:1 (A:B by weight)",
        potLife: "45 minutes at +25°C",
        walkable: "24 hours",
        fullCure: "7 days",
        coverage: "0.3-0.5 kg/m² per coat",
        thickness: "0.3-0.5 mm per coat",
        toolCleaning: "With solvent before curing",
      },
      ar: {
        color: "رمادي/ألوان مخصصة متاحة",
        type: "إيبوكسي ثنائي المكونات",
        mixRatio: "2:1 (أ:ب بالوزن)",
        potLife: "45 دقيقة عند +25 درجة مئوية",
        walkable: "24 ساعة",
        fullCure: "7 أيام",
        coverage: "0.3-0.5 كجم/م² لكل طبقة",
        thickness: "0.3-0.5 مم لكل طبقة",
        toolCleaning: "بالمذيبات قبل التصلب",
      },
      de: {
        color: "Grau/Individuelle Farben verfügbar",
        type: "Zweikomponenten-Epoxid",
        mixRatio: "2:1 (A:B nach Gewicht)",
        potLife: "45 Minuten bei +25°C",
        walkable: "24 Stunden",
        fullCure: "7 Tage",
        coverage: "0,3-0,5 kg/m² pro Schicht",
        thickness: "0,3-0,5 mm pro Schicht",
        toolCleaning: "Mit Lösungsmittel vor dem Aushärten",
      },
      tr: {
        color: "Gri/Özel renkler mevcuttur",
        type: "İki bileşenli epoksi",
        mixRatio: "2:1 (A:B ağırlıkça)",
        potLife: "+25°C'de 45 dakika",
        walkable: "24 saat",
        fullCure: "7 gün",
        coverage: "Kat başına 0,3-0,5 kg/m²",
        thickness: "Kat başına 0,3-0,5 mm",
        toolCleaning: "Kürlenmeden önce çözücü ile",
      },
    },
    usage: {
      en: {
        surfacePrep:
          "Surface must be clean, dry, and free from oil, grease, and loose material. Concrete must be at least 28 days old. Grinding or shot blasting recommended for best adhesion.",
        application:
          "Mix components A and B thoroughly. Apply with roller or squeegee in 2-3 coats. Allow 12-24 hours between coats. Temperature should be +10°C to +30°C.",
      },
      ar: {
        surfacePrep:
          "يجب أن يكون السطح نظيفًا وجافًا وخاليًا من الزيت والشحوم والمواد السائبة. يجب أن تكون الخرسانة عمرها 28 يومًا على الأقل. يُنصح بالطحن أو التفجير بالكرات لأفضل التصاق.",
        application:
          "اخلط المكونات أ و ب جيدًا. طبق بالرول أو المِمسحة في 2-3 طبقات. اترك 12-24 ساعة بين الطبقات. يجب أن تكون درجة الحرارة من +10 إلى +30 درجة مئوية.",
      },
      de: {
        surfacePrep:
          "Die Oberfläche muss sauber, trocken und frei von Öl, Fett und losem Material sein. Beton muss mindestens 28 Tage alt sein. Schleifen oder Kugelstrahlen für beste Haftung empfohlen.",
        application:
          "Komponenten A und B gründlich mischen. Mit Rolle oder Rakel in 2-3 Schichten auftragen. 12-24 Stunden zwischen den Schichten warten. Temperatur sollte +10°C bis +30°C sein.",
      },
      tr: {
        surfacePrep:
          "Yüzey temiz, kuru ve yağ, gres ve gevşek malzemeden arınmış olmalıdır. Beton en az 28 günlük olmalıdır. En iyi yapışma için taşlama veya kumlama önerilir.",
        application:
          "A ve B bileşenlerini iyice karıştırın. Rulo veya spatula ile 2-3 kat uygulayın. Katlar arasında 12-24 saat bekleyin. Sıcaklık +10°C ile +30°C arasında olmalıdır.",
      },
    },
    storage: {
      en: {
        shelfLife: "12 months from production date",
        conditions:
          "Store in original sealed containers in a cool, dry place at +5°C to +25°C. Protect from frost and direct sunlight.",
      },
      ar: {
        shelfLife: "12 شهرًا من تاريخ الإنتاج",
        conditions:
          "يُخزن في الحاويات الأصلية المغلقة في مكان بارد وجاف في درجة حرارة من +5 إلى +25 درجة مئوية. احمِ من التجمد وأشعة الشمس المباشرة.",
      },
      de: {
        shelfLife: "12 Monate ab Produktionsdatum",
        conditions:
          "In original versiegelten Behältern an einem kühlen, trockenen Ort bei +5°C bis +25°C lagern. Vor Frost und direkter Sonneneinstrahlung schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 12 ay",
        conditions:
          "Orijinal kapalı kaplarda serin, kuru yerde +5°C ile +25°C arasında saklayın. Dondan ve doğrudan güneş ışığından koruyun.",
      },
    },
  },
];

export default epoxyProducts;
