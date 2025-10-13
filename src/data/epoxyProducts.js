import testImage from "../assets/color-1.png";

const epoxyProducts = [
  // 🚢 MARINE EPOXY
  {
    id: 501,
    type: "epoxy",
    category: "marine",
    image: testImage,
    name: {
      en: "Bondmax Marine Epoxy Coating",
      ar: "طلاء إيبوكسي بحري بوندماكس",
      de: "Bondmax Marine Epoxidbeschichtung",
      tr: "Bondmax Deniz Epoksi Kaplaması",
    },
    description: {
      en: "High-performance epoxy coating for marine environments, providing superior protection for boats and underwater structures.",
      ar: "طلاء إيبوكسي عالي الأداء للبيئات البحرية يوفر حماية فائقة للقوارب والهياكل تحت الماء.",
      de: "Hochleistungs-Epoxidbeschichtung für den maritimen Einsatz, bietet überlegenen Schutz für Boote und Unterwasserstrukturen.",
      tr: "Deniz ortamları için yüksek performanslı epoksi kaplama; tekneler ve su altı yapıları için üstün koruma sağlar.",
    },
    fullDescription: {
      en: "Bondmax Marine Epoxy Coating is a two-component, solvent-free epoxy system formulated for marine applications. It provides long-lasting resistance to saltwater, UV radiation, and abrasion. Ideal for ship hulls, docks, and underwater metal or concrete surfaces.",
      ar: "طلاء إيبوكسي بحري بوندماكس هو نظام إيبوكسي ثنائي المكونات وخالٍ من المذيبات مصمم للتطبيقات البحرية. يوفر مقاومة طويلة الأمد للمياه المالحة والأشعة فوق البنفسجية والتآكل. مثالي لهياكل السفن والأرصفة والأسطح المعدنية أو الخرسانية تحت الماء.",
      de: "Bondmax Marine Epoxy Coating ist ein zweikomponentiges, lösungsmittelfreies Epoxidharzsystem für maritime Anwendungen. Es bietet langanhaltenden Schutz gegen Salzwasser, UV-Strahlung und Abrieb.",
      tr: "Bondmax Deniz Epoksi Kaplaması, deniz uygulamaları için formüle edilmiş iki bileşenli, solventsiz bir epoksi sistemidir. Tuzlu suya, UV ışınlarına ve aşınmaya karşı uzun ömürlü direnç sağlar.",
    },
    detailedFeatures: {
      en: [
        "Excellent saltwater and chemical resistance",
        "Strong adhesion to steel and fiberglass",
        "UV and weather resistant",
        "Prevents corrosion and blistering",
        "Can be applied underwater after curing",
      ],
      ar: [
        "مقاومة ممتازة للمياه المالحة والمواد الكيميائية",
        "التصاق قوي بالفولاذ والألياف الزجاجية",
        "مقاوم للأشعة فوق البنفسجية والعوامل الجوية",
        "يمنع التآكل والتقرحات",
        "يمكن تطبيقه تحت الماء بعد التصلب الكامل",
      ],
      de: [
        "Hervorragende Salz- und Chemikalienbeständigkeit",
        "Starke Haftung auf Stahl und Glasfaser",
        "UV- und witterungsbeständig",
        "Verhindert Korrosion und Blasenbildung",
        "Unterwasseranwendung nach Aushärtung möglich",
      ],
      tr: [
        "Tuzlu suya ve kimyasallara mükemmel direnç",
        "Çelik ve fiberglasa güçlü yapışma",
        "UV ve hava koşullarına dayanıklı",
        "Korozyon ve kabarcık oluşumunu önler",
        "Tam kürleşmeden sonra su altında uygulanabilir",
      ],
    },
    technicalSpecs: {
      en: {
        color: "White, gray, or custom marine shades",
        mixRatio: "2:1 by weight (A:B)",
        potLife: "40 minutes at 25°C",
        walkable: "48 hours",
        fullCure: "7–10 days",
        coverage: "0.4–0.6 kg/m² per coat",
        recommendedThickness: "0.4–0.6 mm per coat",
        applicationTemperature: "+10°C to +35°C",
      },
      ar: {
        color: "أبيض، رمادي، أو ألوان بحرية مخصصة",
        mixRatio: "2:1 بالوزن (أ:ب)",
        potLife: "40 دقيقة عند 25 درجة مئوية",
        walkable: "48 ساعة",
        fullCure: "7–10 أيام",
        coverage: "0.4–0.6 كجم/م² لكل طبقة",
        recommendedThickness: "0.4–0.6 مم لكل طبقة",
        applicationTemperature: "من +10 إلى +35 درجة مئوية",
      },
      de: {
        color: "Weiß, Grau oder kundenspezifische Marinetöne",
        mixRatio: "2:1 nach Gewicht (A:B)",
        potLife: "40 Minuten bei 25°C",
        walkable: "48 Stunden",
        fullCure: "7–10 Tage",
        coverage: "0,4–0,6 kg/m² pro Schicht",
        recommendedThickness: "0,4–0,6 mm pro Schicht",
        applicationTemperature: "+10°C bis +35°C",
      },
      tr: {
        color: "Beyaz, gri veya özel deniz tonları",
        mixRatio: "2:1 (A:B, ağırlıkça)",
        potLife: "25°C’de 40 dakika",
        walkable: "48 saat",
        fullCure: "7–10 gün",
        coverage: "Kat başına 0.4–0.6 kg/m²",
        recommendedThickness: "Kat başına 0.4–0.6 mm",
        applicationTemperature: "+10°C ila +35°C",
      },
    },
    usage: {
      en: {
        surfacePrep:
          "Remove oil, rust, and loose paint. Surface must be clean and dry. Sandblast or grind to ensure adhesion.",
        application:
          "Mix components A and B for 3–5 minutes. Apply using brush or roller in 2–3 coats. Allow 24 hours between coats.",
      },
      ar: {
        surfacePrep:
          "أزل الزيت والصدأ والطلاء القديم. يجب أن يكون السطح نظيفًا وجافًا. استخدم الصنفرة أو السفع الرملي لتحسين الالتصاق.",
        application:
          "اخلط المكونين أ و ب لمدة 3–5 دقائق. طبّق باستخدام فرشاة أو رول على 2–3 طبقات مع ترك 24 ساعة بين كل طبقة.",
      },
      de: {
        surfacePrep:
          "Öl, Rost und alte Farbe entfernen. Oberfläche muss sauber und trocken sein. Sandstrahlen oder schleifen.",
        application:
          "Komponenten A und B 3–5 Minuten mischen. Mit Pinsel oder Rolle in 2–3 Schichten auftragen.",
      },
      tr: {
        surfacePrep:
          "Yağ, pas ve eski boyayı çıkarın. Yüzey temiz ve kuru olmalıdır. Yapışma için kumlama veya zımpara yapın.",
        application:
          "A ve B bileşenlerini 3–5 dakika karıştırın. 2–3 kat halinde fırça veya rulo ile uygulayın. Katlar arasında 24 saat bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "18 months from production date",
        conditions:
          "Store in original sealed containers at +5°C to +25°C. Protect from direct sunlight and moisture.",
      },
      ar: {
        shelfLife: "18 شهرًا من تاريخ الإنتاج",
        conditions:
          "يُخزن في العبوة الأصلية المغلقة بين +5 و +25 درجة مئوية، بعيدًا عن أشعة الشمس والرطوبة.",
      },
      de: {
        shelfLife: "18 Monate ab Produktionsdatum",
        conditions:
          "In Originalverpackung bei +5°C bis +25°C lagern. Vor direkter Sonneneinstrahlung und Feuchtigkeit schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 18 ay",
        conditions:
          "Orijinal kapalı ambalajında +5°C ila +25°C’de saklayın. Güneş ışığı ve nemden koruyun.",
      },
    },
  },

  // 🏭 FLOOR COATING
  {
    id: 502,
    type: "epoxy",
    category: "floor",
    image: testImage,
    name: {
      en: "Bondmax Industrial Floor Coating",
      ar: "طلاء أرضيات صناعي بوندماكس",
      de: "Bondmax Industrie-Bodenbeschichtung",
      tr: "Bondmax Endüstriyel Zemin Kaplaması",
    },
    description: {
      en: "Durable epoxy coating designed for industrial and commercial floors, offering high abrasion and chemical resistance.",
      ar: "طلاء إيبوكسي متين مصمم للأرضيات الصناعية والتجارية، يوفر مقاومة عالية للاحتكاك والمواد الكيميائية.",
      de: "Langlebige Epoxidbeschichtung für Industrie- und Gewerbeböden mit hoher Abrieb- und Chemikalienbeständigkeit.",
      tr: "Endüstriyel ve ticari zeminler için tasarlanmış dayanıklı epoksi kaplama; aşınma ve kimyasallara karşı yüksek direnç sağlar.",
    },
    fullDescription: {
      en: "Bondmax Industrial Floor Coating is a heavy-duty, solvent-free, self-leveling epoxy designed to withstand mechanical loads and frequent cleaning. Suitable for factories, warehouses, workshops, and parking garages.",
      ar: "طلاء أرضيات صناعي بوندماكس هو إيبوكسي ذاتي التسوية وخالٍ من المذيبات، مصمم لتحمل الأحمال الميكانيكية والتنظيف المتكرر. مناسب للمصانع والمستودعات وورش العمل ومواقف السيارات.",
      de: "Bondmax Industrie-Bodenbeschichtung ist ein lösungsmittelfreies, selbstnivellierendes Epoxidharz, das mechanischen Belastungen und häufiger Reinigung standhält.",
      tr: "Bondmax Endüstriyel Zemin Kaplaması, mekanik yüklere ve sık temizliğe dayanacak şekilde formüle edilmiş solventsiz, kendi kendine yayılan bir epoksi sistemidir.",
    },
    detailedFeatures: {
      en: [
        "High mechanical strength",
        "Resistant to heavy loads and traffic",
        "Excellent adhesion to concrete",
        "Chemical and oil resistant",
        "Seamless glossy finish",
      ],
      ar: [
        "قوة ميكانيكية عالية",
        "مقاوم للأحمال الثقيلة وحركة المرور",
        "التصاق ممتاز بالخرسانة",
        "مقاوم للمواد الكيميائية والزيوت",
        "تشطيب لامع بدون فواصل",
      ],
      de: [
        "Hohe mechanische Festigkeit",
        "Beständig gegen hohe Belastung und Verkehr",
        "Hervorragende Haftung auf Beton",
        "Chemikalien- und ölbeständig",
        "Nahtloses glänzendes Finish",
      ],
      tr: [
        "Yüksek mekanik dayanım",
        "Ağır yüklere ve trafiğe dayanıklı",
        "Betona mükemmel yapışma",
        "Kimyasallara ve yağa dayanıklı",
        "Dikişsiz parlak yüzey",
      ],
    },
    technicalSpecs: {
      en: {
        color: "Gray, green, blue, or custom shades",
        mixRatio: "3:1 by weight (A:B)",
        potLife: "30 minutes at 25°C",
        walkable: "24 hours",
        fullCure: "5–7 days",
        coverage: "0.8–1.0 kg/m² per mm thickness",
        recommendedThickness: "1–3 mm",
        applicationTemperature: "+10°C to +35°C",
      },
      ar: {
        color: "رمادي، أخضر، أزرق، أو ألوان مخصصة",
        mixRatio: "3:1 بالوزن (أ:ب)",
        potLife: "30 دقيقة عند 25 درجة مئوية",
        walkable: "24 ساعة",
        fullCure: "5–7 أيام",
        coverage: "0.8–1.0 كجم/م² لكل مم سماكة",
        recommendedThickness: "1–3 مم",
        applicationTemperature: "من +10 إلى +35 درجة مئوية",
      },
      de: {
        color: "Grau, Grün, Blau oder kundenspezifische Farbtöne",
        mixRatio: "3:1 nach Gewicht (A:B)",
        potLife: "30 Minuten bei 25°C",
        walkable: "24 Stunden",
        fullCure: "5–7 Tage",
        coverage: "0,8–1,0 kg/m² pro mm Schichtdicke",
        recommendedThickness: "1–3 mm",
        applicationTemperature: "+10°C bis +35°C",
      },
      tr: {
        color: "Gri, yeşil, mavi veya özel renk tonları",
        mixRatio: "3:1 (A:B, ağırlıkça)",
        potLife: "25°C’de 30 dakika",
        walkable: "24 saat",
        fullCure: "5–7 gün",
        coverage: "mm başına 0.8–1.0 kg/m²",
        recommendedThickness: "1–3 mm",
        applicationTemperature: "+10°C ila +35°C",
      },
    },
    usage: {
      en: {
        surfacePrep:
          "Ensure the surface is dry, clean, and structurally sound. Grind and remove dust or oil. Apply epoxy primer before coating.",
        application:
          "Mix components for 3–4 minutes. Pour onto floor and spread evenly using a notched trowel or roller. Allow 24 hours between coats.",
      },
      ar: {
        surfacePrep:
          "تأكد من أن السطح جاف ونظيف وسليم هيكليًا. قم بالصنفرة وإزالة الغبار أو الزيت. ضع برايمر إيبوكسي قبل الطلاء.",
        application:
          "اخلط المكونات لمدة 3–4 دقائق. صب الخليط على الأرض وافرده بالتساوي باستخدام مالج مسنن أو رولر. اترك 24 ساعة بين الطبقات.",
      },
      de: {
        surfacePrep:
          "Sicherstellen, dass die Oberfläche trocken, sauber und stabil ist. Schleifen und Staub oder Öl entfernen. Vor dem Beschichten Epoxid-Primer auftragen.",
        application:
          "Komponenten 3–4 Minuten mischen. Auf den Boden gießen und gleichmäßig mit Zahnkelle oder Rolle verteilen.",
      },
      tr: {
        surfacePrep:
          "Yüzeyin kuru, temiz ve sağlam olduğundan emin olun. Zımparalayın, toz veya yağı temizleyin. Kaplamadan önce epoksi astar uygulayın.",
        application:
          "Bileşenleri 3–4 dakika karıştırın. Zemine dökün ve mala veya rulo ile eşit şekilde yayın. Katlar arasında 24 saat bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "12 months from production date",
        conditions:
          "Store in sealed containers between +5°C and +30°C. Avoid direct sunlight.",
      },
      ar: {
        shelfLife: "12 شهرًا من تاريخ الإنتاج",
        conditions:
          "يُخزن في عبوات مغلقة بين +5 و +30 درجة مئوية، بعيدًا عن أشعة الشمس المباشرة.",
      },
      de: {
        shelfLife: "12 Monate ab Produktionsdatum",
        conditions:
          "In verschlossenen Behältern bei +5°C bis +30°C lagern. Direkte Sonneneinstrahlung vermeiden.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 12 ay",
        conditions:
          "Kapalı kaplarda +5°C ile +30°C arasında saklayın. Doğrudan güneş ışığından kaçının.",
      },
    },
  },

  // 🏠 INTERIOR COATING
  {
    id: 503,
    type: "epoxy",
    category: "interior",
    image: testImage,
    name: {
      en: "Bondmax Interior Wall Epoxy",
      ar: "طلاء إيبوكسي للجدران الداخلية بوندماكس",
      de: "Bondmax Epoxid-Innenwandbeschichtung",
      tr: "Bondmax İç Cephe Epoksi Kaplaması",
    },
    description: {
      en: "Smooth and washable epoxy coating for interior walls, providing aesthetic finish and hygiene.",
      ar: "طلاء إيبوكسي ناعم وقابل للغسل للجدران الداخلية يوفر مظهرًا جماليًا ونظافة عالية.",
      de: "Glatte, abwaschbare Epoxidbeschichtung für Innenwände mit ästhetischem Finish und hoher Hygiene.",
      tr: "İç duvarlar için pürüzsüz ve yıkanabilir epoksi kaplama; estetik görünüm ve hijyen sağlar.",
    },
    fullDescription: {
      en: "Bondmax Interior Wall Epoxy is a decorative, two-component coating offering a glossy, hygienic surface ideal for hospitals, kitchens, and clean rooms.",
      ar: "طلاء إيبوكسي للجدران الداخلية من بوندماكس هو طلاء ديكوري ثنائي المكونات يوفر سطحًا لامعًا وصحيًا مثاليًا للمستشفيات والمطابخ وغرف النظافة.",
      de: "Bondmax Innenwand-Epoxid ist eine dekorative Zweikomponentenbeschichtung mit glänzender, hygienischer Oberfläche – ideal für Krankenhäuser und Küchen.",
      tr: "Bondmax İç Cephe Epoksi, parlak ve hijyenik yüzey sunan dekoratif, iki bileşenli bir kaplamadır; hastaneler ve mutfaklar için idealdir.",
    },
    detailedFeatures: {
      en: [
        "Smooth glossy finish",
        "Resistant to stains and moisture",
        "Washable and easy to clean",
        "Non-yellowing formula",
        "Excellent adhesion to plaster and concrete",
      ],
      ar: [
        "تشطيب لامع وناعم",
        "مقاوم للبقع والرطوبة",
        "قابل للغسل وسهل التنظيف",
        "لا يصفر مع الوقت",
        "التصاق ممتاز بالجبس والخرسانة",
      ],
      de: [
        "Glatte, glänzende Oberfläche",
        "Beständig gegen Flecken und Feuchtigkeit",
        "Abwaschbar und leicht zu reinigen",
        "Vergilbt nicht mit der Zeit",
        "Haftet hervorragend auf Putz und Beton",
      ],
      tr: [
        "Pürüzsüz parlak yüzey",
        "Leke ve neme dayanıklı",
        "Yıkanabilir ve kolay temizlenir",
        "Zamanla sararmaz",
        "Alçı ve betona mükemmel yapışma",
      ],
    },
    technicalSpecs: {
      en: {
        color: "White, beige, pastel shades",
        mixRatio: "2:1 by weight (A:B)",
        potLife: "25 minutes at 25°C",
        walkable: "12 hours",
        fullCure: "5 days",
        coverage: "0.15–0.3 kg/m² per coat",
        recommendedThickness: "0.2–0.4 mm",
        applicationTemperature: "+10°C to +30°C",
      },
      ar: {
        color: "أبيض، بيج، ألوان باهتة",
        mixRatio: "2:1 بالوزن (أ:ب)",
        potLife: "25 دقيقة عند 25 درجة مئوية",
        walkable: "12 ساعة",
        fullCure: "5 أيام",
        coverage: "0.15–0.3 كجم/م² لكل طبقة",
        recommendedThickness: "0.2–0.4 مم",
        applicationTemperature: "من +10 إلى +30 درجة مئوية",
      },
      de: {
        color: "Weiß, Beige, Pastelltöne",
        mixRatio: "2:1 nach Gewicht (A:B)",
        potLife: "25 Minuten bei 25°C",
        walkable: "12 Stunden",
        fullCure: "5 Tage",
        coverage: "0,15–0,3 kg/m² pro Schicht",
        recommendedThickness: "0,2–0,4 mm",
        applicationTemperature: "+10°C bis +30°C",
      },
      tr: {
        color: "Beyaz, bej, pastel tonları",
        mixRatio: "2:1 (A:B, ağırlıkça)",
        potLife: "25°C’de 25 dakika",
        walkable: "12 saat",
        fullCure: "5 gün",
        coverage: "Kat başına 0.15–0.3 kg/m²",
        recommendedThickness: "0.2–0.4 mm",
        applicationTemperature: "+10°C ila +30°C",
      },
    },
    usage: {
      en: {
        surfacePrep:
          "Clean surface from dust, dirt, and loose paint. Repair cracks. Ensure substrate is dry.",
        application:
          "Mix thoroughly and apply with brush or roller in 2 coats. Allow 12 hours between coats.",
      },
      ar: {
        surfacePrep:
          "نظف السطح من الغبار والأوساخ والطلاء المتقشر. أصلح التشققات. تأكد من أن السطح جاف.",
        application:
          "اخلط جيدًا وطبّق بالفرشاة أو الرول على 2 طبقة. اترك 12 ساعة بين كل طبقة.",
      },
      de: {
        surfacePrep:
          "Oberfläche von Staub, Schmutz und loser Farbe reinigen. Risse reparieren. Untergrund muss trocken sein.",
        application:
          "Gründlich mischen und mit Pinsel oder Rolle in 2 Schichten auftragen. 12 Stunden zwischen den Schichten warten.",
      },
      tr: {
        surfacePrep:
          "Yüzeyi toz, kir ve gevşek boyadan temizleyin. Çatlakları onarın. Alt yüzeyin kuru olduğundan emin olun.",
        application:
          "İyice karıştırın ve fırça veya rulo ile 2 kat uygulayın. Katlar arasında 12 saat bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "12 months from production date",
        conditions:
          "Keep in sealed containers at +5°C to +25°C, away from direct sunlight and moisture.",
      },
      ar: {
        shelfLife: "12 شهرًا من تاريخ الإنتاج",
        conditions:
          "احتفظ بالعبوات مغلقة بين +5 و +25 درجة مئوية، بعيدًا عن أشعة الشمس والرطوبة.",
      },
      de: {
        shelfLife: "12 Monate ab Produktionsdatum",
        conditions:
          "In verschlossenen Behältern bei +5°C bis +25°C lagern. Vor direkter Sonneneinstrahlung und Feuchtigkeit schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 12 ay",
        conditions:
          "Kapalı kaplarda +5°C ila +25°C arasında saklayın. Doğrudan güneş ışığından ve nemden koruyun.",
      },
    },
  },

  // ⚙️ METAL COATING
  {
    id: 505,
    type: "epoxy",
    category: "metal",
    image: testImage,
    name: {
      en: "Bondmax Metal Protection Epoxy",
      ar: "طلاء حماية المعادن بوندماكس",
      de: "Bondmax Metallschutz-Epoxid",
      tr: "Bondmax Metal Koruma Epoksisi",
    },
    description: {
      en: "Epoxy coating for metal surfaces, providing corrosion resistance and long-term protection in industrial environments.",
      ar: "طلاء إيبوكسي للأسطح المعدنية يوفر مقاومة للصدأ وحماية طويلة الأمد في البيئات الصناعية.",
      de: "Epoxidbeschichtung für Metalloberflächen mit Korrosionsschutz und langfristiger Beständigkeit in Industrieumgebungen.",
      tr: "Metal yüzeyler için epoksi kaplama; korozyona karşı direnç ve uzun ömürlü koruma sağlar.",
    },
    fullDescription: {
      en: "Bondmax Metal Protection Epoxy is a two-component, solvent-free epoxy designed for industrial metal surfaces. Offers excellent adhesion, chemical and corrosion resistance, suitable for machinery, pipelines, and structural steel.",
      ar: "طلاء حماية المعادن بوندماكس هو إيبوكسي ثنائي المكونات وخالٍ من المذيبات مصمم للأسطح المعدنية الصناعية. يوفر التصاق ممتاز ومقاومة للمواد الكيميائية والصدأ، مناسب للآلات وأنابيب الصلب والهياكل المعدنية.",
      de: "Bondmax Metallschutz-Epoxid ist ein zweikomponentiges, lösungsmittelfreies Epoxid für industrielle Metalloberflächen. Bietet hervorragende Haftung, chemische und Korrosionsbeständigkeit.",
      tr: "Bondmax Metal Koruma Epoksisi, endüstriyel metal yüzeyler için tasarlanmış iki bileşenli, solventsiz bir epoksidir. Mükemmel yapışma, kimyasal ve korozyon direnci sağlar.",
    },
    detailedFeatures: {
      en: [
        "Protects against corrosion and rust",
        "Strong adhesion to steel and iron",
        "Chemical and solvent resistant",
        "Durable glossy finish",
        "Suitable for indoor and outdoor metal surfaces",
      ],
      ar: [
        "يحمي من التآكل والصدأ",
        "التصاق قوي بالفولاذ والحديد",
        "مقاوم للمواد الكيميائية والمذيبات",
        "تشطيب لامع متين",
        "مناسب للأسطح المعدنية الداخلية والخارجية",
      ],
      de: [
        "Schützt vor Korrosion und Rost",
        "Starke Haftung auf Stahl und Eisen",
        "Chemikalien- und lösemittelbeständig",
        "Langlebiges glänzendes Finish",
        "Für Innen- und Außenmetallflächen geeignet",
      ],
      tr: [
        "Korozyon ve pas koruması sağlar",
        "Çelik ve demire güçlü yapışma",
        "Kimyasal ve çözücüye dayanıklı",
        "Dayanıklı parlak yüzey",
        "İç ve dış metal yüzeyler için uygundur",
      ],
    },
    technicalSpecs: {
      en: {
        color: "Gray, black, or custom shades",
        mixRatio: "2:1 by weight (A:B)",
        potLife: "35 minutes at 25°C",
        walkable: "24 hours",
        fullCure: "7 days",
        coverage: "0.3–0.5 kg/m² per coat",
        recommendedThickness: "0.3–0.5 mm",
        applicationTemperature: "+5°C to +35°C",
      },
      ar: {
        color: "رمادي، أسود، أو ألوان مخصصة",
        mixRatio: "2:1 بالوزن (أ:ب)",
        potLife: "35 دقيقة عند 25 درجة مئوية",
        walkable: "24 ساعة",
        fullCure: "7 أيام",
        coverage: "0.3–0.5 كجم/م² لكل طبقة",
        recommendedThickness: "0.3–0.5 مم",
        applicationTemperature: "من +5 إلى +35 درجة مئوية",
      },
      de: {
        color: "Grau, Schwarz oder kundenspezifische Farbtöne",
        mixRatio: "2:1 nach Gewicht (A:B)",
        potLife: "35 Minuten bei 25°C",
        walkable: "24 Stunden",
        fullCure: "7 Tage",
        coverage: "0,3–0,5 kg/m² pro Schicht",
        recommendedThickness: "0,3–0,5 mm",
        applicationTemperature: "+5°C bis +35°C",
      },
      tr: {
        color: "Gri, siyah veya özel renkler",
        mixRatio: "2:1 (A:B, ağırlıkça)",
        potLife: "25°C’de 35 dakika",
        walkable: "24 saat",
        fullCure: "7 gün",
        coverage: "Kat başına 0.3–0.5 kg/m²",
        recommendedThickness: "0.3–0.5 mm",
        applicationTemperature: "+5°C ila +35°C",
      },
    },
    usage: {
      en: {
        surfacePrep:
          "Clean metal from rust, grease, and old paint. Sand or blast for better adhesion.",
        application:
          "Mix A and B thoroughly for 3–5 minutes. Apply with brush, roller, or airless spray in 2 coats. Allow 24 hours between coats.",
      },
      ar: {
        surfacePrep:
          "نظف المعدن من الصدأ والشحوم والطلاء القديم. استخدم الصنفرة أو التفجير لتحسين الالتصاق.",
        application:
          "اخلط المكونات أ و ب جيدًا لمدة 3–5 دقائق. طبق بالفرشاة أو الرول أو الرش بدون هواء على 2 طبقة. اترك 24 ساعة بين كل طبقة.",
      },
      de: {
        surfacePrep:
          "Metall von Rost, Fett und alter Farbe reinigen. Zum besseren Haften schleifen oder sandstrahlen.",
        application:
          "A und B 3–5 Minuten gründlich mischen. Mit Pinsel, Rolle oder Airless-Spray in 2 Schichten auftragen. 24 Stunden zwischen den Schichten warten.",
      },
      tr: {
        surfacePrep:
          "Metal yüzeyi pas, yağ ve eski boyadan temizleyin. Daha iyi yapışma için zımpara veya kumlama yapın.",
        application:
          "A ve B bileşenlerini 3–5 dakika iyice karıştırın. Fırça, rulo veya havasız sprey ile 2 kat uygulayın. Katlar arasında 24 saat bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "18 months from production date",
        conditions:
          "Store in sealed containers at +5°C to +25°C. Avoid moisture and direct sunlight.",
      },
      ar: {
        shelfLife: "18 شهرًا من تاريخ الإنتاج",
        conditions:
          "يُخزن في عبوات مغلقة بين +5 و +25 درجة مئوية، بعيدًا عن الرطوبة وأشعة الشمس المباشرة.",
      },
      de: {
        shelfLife: "18 Monate ab Produktionsdatum",
        conditions:
          "In verschlossenen Behältern bei +5°C bis +25°C lagern. Vor Feuchtigkeit und direkter Sonneneinstrahlung schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 18 ay",
        conditions:
          "Kapalı kaplarda +5°C ila +25°C arasında saklayın. Nem ve doğrudan güneş ışığından koruyun.",
      },
    },
  },

  {
    id: 503,
    type: "epoxy",
    category: "interior",
    image: testImage,
    name: {
      en: "Bondmax Interior Wall Epoxy",
      ar: "طلاء إيبوكسي للجدران الداخلية بوندماكس",
      de: "Bondmax Epoxid-Innenwandbeschichtung",
      tr: "Bondmax İç Cephe Epoksi Kaplaması",
    },
    description: {
      en: "Smooth and washable epoxy coating for interior walls, providing aesthetic finish and hygiene.",
      ar: "طلاء إيبوكسي ناعم وقابل للغسل للجدران الداخلية يوفر مظهرًا جماليًا ونظافة عالية.",
      de: "Glatte, abwaschbare Epoxidbeschichtung für Innenwände mit ästhetischem Finish und hoher Hygiene.",
      tr: "İç duvarlar için pürüzsüz ve yıkanabilir epoksi kaplama; estetik görünüm ve hijyen sağlar.",
    },
    fullDescription: {
      en: "Bondmax Interior Wall Epoxy is a decorative, two-component coating offering a glossy, hygienic surface ideal for hospitals, kitchens, and clean rooms.",
      ar: "طلاء إيبوكسي للجدران الداخلية من بوندماكس هو طلاء ديكوري ثنائي المكونات يوفر سطحًا لامعًا وصحيًا مثاليًا للمستشفيات والمطابخ وغرف النظافة.",
      de: "Bondmax Innenwand-Epoxid ist eine dekorative Zweikomponentenbeschichtung mit glänzender, hygienischer Oberfläche – ideal für Krankenhäuser und Küchen.",
      tr: "Bondmax İç Cephe Epoksi, parlak ve hijyenik yüzey sunan dekoratif, iki bileşenli bir kaplamadır; hastaneler ve mutfaklar için idealdir.",
    },
    detailedFeatures: {
      en: [
        "Smooth glossy finish",
        "Resistant to stains and moisture",
        "Washable and easy to clean",
        "Non-yellowing formula",
        "Excellent adhesion to plaster and concrete",
      ],
      ar: [
        "تشطيب لامع وناعم",
        "مقاوم للبقع والرطوبة",
        "قابل للغسل وسهل التنظيف",
        "لا يصفر مع الوقت",
        "التصاق ممتاز بالجبس والخرسانة",
      ],
      de: [
        "Glatte, glänzende Oberfläche",
        "Beständig gegen Flecken und Feuchtigkeit",
        "Abwaschbar und leicht zu reinigen",
        "Vergilbt nicht mit der Zeit",
        "Haftet hervorragend auf Putz und Beton",
      ],
      tr: [
        "Pürüzsüz parlak yüzey",
        "Leke ve neme dayanıklı",
        "Yıkanabilir ve kolay temizlenir",
        "Zamanla sararmaz",
        "Alçı ve betona mükemmel yapışma",
      ],
    },
    technicalSpecs: {
      en: {
        color: "White, beige, pastel shades",
        mixRatio: "2:1 by weight (A:B)",
        potLife: "25 minutes at 25°C",
        walkable: "12 hours",
        fullCure: "5 days",
        coverage: "0.15–0.3 kg/m² per coat",
        recommendedThickness: "0.2–0.4 mm",
        applicationTemperature: "+10°C to +30°C",
      },
      ar: {
        color: "أبيض، بيج، ألوان باهتة",
        mixRatio: "2:1 بالوزن (أ:ب)",
        potLife: "25 دقيقة عند 25°C",
        walkable: "12 ساعة",
        fullCure: "5 أيام",
        coverage: "0.15–0.3 كجم/م² لكل طبقة",
        recommendedThickness: "0.2–0.4 مم",
        applicationTemperature: "من +10 إلى +30°C",
      },
      de: {
        color: "Weiß, Beige, Pastelltöne",
        mixRatio: "2:1 nach Gewicht (A:B)",
        potLife: "25 Minuten bei 25°C",
        walkable: "12 Stunden",
        fullCure: "5 Tage",
        coverage: "0,15–0,3 kg/m² pro Schicht",
        recommendedThickness: "0,2–0,4 mm",
        applicationTemperature: "+10°C bis +30°C",
      },
      tr: {
        color: "Beyaz, bej, pastel tonları",
        mixRatio: "2:1 (A:B, ağırlıkça)",
        potLife: "25°C’de 25 dakika",
        walkable: "12 saat",
        fullCure: "5 gün",
        coverage: "Kat başına 0.15–0.3 kg/m²",
        recommendedThickness: "0.2–0.4 mm",
        applicationTemperature: "+10°C ila +30°C",
      },
    },
    usage: {
      en: {
        surfacePrep:
          "Surface must be dry, clean, and free from dust, grease, or loose paint. Apply epoxy primer before coating.",
        application:
          "Mix A and B thoroughly and apply in 2 coats. Allow 12 hours between coats.",
      },
      ar: {
        surfacePrep:
          "يجب أن يكون السطح جافًا ونظيفًا وخاليًا من الغبار أو الشحوم أو الطلاء المتقشر. ضع برايمر إيبوكسي قبل الطلاء.",
        application:
          "اخلط المكونات أ و ب جيدًا وطبق على 2 طبقة. اترك 12 ساعة بين كل طبقة.",
      },
      de: {
        surfacePrep:
          "Oberfläche muss trocken, sauber und frei von Staub, Fett oder loser Farbe sein. Vor dem Beschichten Epoxid-Primer auftragen.",
        application:
          "A und B gründlich mischen und in 2 Schichten auftragen. 12 Stunden zwischen den Schichten warten.",
      },
      tr: {
        surfacePrep:
          "Yüzey kuru, temiz ve toz, yağ veya gevşek boyadan arınmış olmalıdır. Kaplamadan önce epoksi astar uygulayın.",
        application:
          "A ve B bileşenlerini iyice karıştırın ve 2 kat uygulayın. Katlar arasında 12 saat bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "12 months from production date",
        conditions:
          "Store in sealed containers at +5°C to +25°C, away from direct sunlight and moisture.",
      },
      ar: {
        shelfLife: "12 شهرًا من تاريخ الإنتاج",
        conditions:
          "يُخزن في عبوات مغلقة بين +5 و +25 درجة مئوية، بعيدًا عن أشعة الشمس المباشرة والرطوبة.",
      },
      de: {
        shelfLife: "12 Monate ab Produktionsdatum",
        conditions:
          "In verschlossenen Behältern bei +5°C bis +25°C lagern. Vor direkter Sonneneinstrahlung und Feuchtigkeit schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 12 ay",
        conditions:
          "Kapalı kaplarda +5°C ila +25°C arasında saklayın. Doğrudan güneş ışığından ve nemden koruyun.",
      },
    },
  },
];

export default epoxyProducts;
