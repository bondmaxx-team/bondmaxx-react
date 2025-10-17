import Image1 from "../assets/Internal Waterproof Wall Coating.png";
import Image2 from "../assets/External Waterproof Wall Coating.png";
import Image3 from "../assets/Elastic Bituminous Waterproof Coating.png";
const insulationProducts = [
  {
    id: 1,
    image: Image1,
    category: "interior-waterproof",
    name: {
      en: "Internal Waterproof Wall Coating",
      ar: "عازل الجدران والرطوبة المائي الداخلي",
      de: "Innen Wasserdichte Wandbeschichtung",
      tr: "İç Su Geçirmez Duvar Kaplaması",
    },
    description: {
      en: "High-quality water-based interior wall coating that prevents moisture penetration and protects indoor surfaces.",
      ar: "طلاء داخلي عالي الجودة مقاوم للماء يمنع تسرب الرطوبة ويحمي الأسطح الداخلية.",
      de: "Hochwertige wasserbasierte Innenwandbeschichtung, die das Eindringen von Feuchtigkeit verhindert und Innenflächen schützt.",
      tr: "Yüksek kaliteli su bazlı iç duvar kaplaması, nem sızıntısını önler ve iç yüzeyleri korur.",
    },
    features: {
      en: ["Moisture resistant", "Easy to apply", "Durable finish"],
      ar: ["مقاوم للرطوبة", "سهل التطبيق", "تشطيب متين"],
      de: [
        "Feuchtigkeitsbeständig",
        "Einfach aufzutragen",
        "Langlebige Oberfläche",
      ],
      tr: ["Neme dayanıklı", "Uygulaması kolay", "Dayanıklı kaplama"],
    },
    fullDescription: {
      en: "Internal Waterproof Wall Coating forms a protective barrier against moisture and humidity, ideal for bathrooms, kitchens, and basements. It provides a smooth, durable finish that maintains interior aesthetics.",
      ar: "يُكوّن عازل الجدران الداخلي المائي حاجزًا واقيًا ضد الرطوبة والرطوبة الزائدة، مثالي للحمامات والمطابخ والطوابق السفلية. يوفر تشطيبًا أملسًا ومتينًا يحافظ على جمالية الديكور الداخلي.",
      de: "Innen Wasserdichte Wandbeschichtung bildet eine Schutzbarriere gegen Feuchtigkeit, ideal für Badezimmer, Küchen und Keller. Es bietet ein glattes, langlebiges Finish, das die Innenästhetik bewahrt.",
      tr: "İç Su Geçirmez Duvar Kaplaması, nem ve rutubete karşı koruyucu bir bariyer oluşturur; banyolar, mutfaklar ve bodrumlar için idealdir. Pürüzsüz ve dayanıklı bir yüzey sağlar.",
    },
    detailedFeatures: {
      en: [
        "Prevents water penetration",
        "Resistant to mold and mildew",
        "Non-toxic and environmentally friendly",
        "Smooth and decorative finish",
        "Long-lasting durability",
      ],
      ar: [
        "يمنع تسرب الماء",
        "مقاوم للعفن والفطريات",
        "غير سام وصديق للبيئة",
        "تشطيب ناعم وزخرفي",
        "متين وطويل الأمد",
      ],
      de: [
        "Verhindert das Eindringen von Wasser",
        "Schimmel- und mehltauresistent",
        "Ungiftig und umweltfreundlich",
        "Glattes und dekoratives Finish",
        "Langlebig",
      ],
      tr: [
        "Su sızmasını önler",
        "Küf ve mantara dayanıklı",
        "Toksik olmayan ve çevre dostu",
        "Pürüzsüz ve dekoratif yüzey",
        "Uzun ömürlü",
      ],
    },
    technicalSpecs: {
      en: {
        type: "Water-based coating",
        color: "White",
        coverage: "10-12 m² per liter",
        dryingTime: "2-4 hours",
        applicationMethod: "Brush, roller, or spray",
      },
      ar: {
        type: "طلاء مائي",
        color: "أبيض",
        coverage: "10-12 متر مربع لكل لتر",
        dryingTime: "2-4 ساعات",
        applicationMethod: "فرشاة، رولر، أو بخاخ",
      },
      de: {
        type: "Wasserbasierte Beschichtung",
        color: "Weiß",
        coverage: "10-12 m² pro Liter",
        dryingTime: "2-4 Stunden",
        applicationMethod: "Pinsel, Rolle oder Sprühgerät",
      },
      tr: {
        type: "Su bazlı kaplama",
        color: "Beyaz",
        coverage: "Litre başına 10-12 m²",
        dryingTime: "2-4 saat",
        applicationMethod: "Fırça, rulo veya sprey",
      },
    },
    usage: {
      en: {
        surfacePrep: "Ensure surface is clean, dry, and free of dust.",
        application:
          "Apply 2 coats with roller or brush, allowing 2-4 hours drying between coats.",
      },
      ar: {
        surfacePrep: "تأكد من أن السطح نظيف وجاف وخالٍ من الغبار.",
        application:
          "ضع طبقتين باستخدام الرولر أو الفرشاة مع السماح بجفاف 2-4 ساعات بين الطبقات.",
      },
      de: {
        surfacePrep:
          "Stellen Sie sicher, dass die Oberfläche sauber, trocken und staubfrei ist.",
        application:
          "Tragen Sie 2 Schichten mit Rolle oder Pinsel auf, 2-4 Stunden Trocknungszeit zwischen den Schichten.",
      },
      tr: {
        surfacePrep: "Yüzeyin temiz, kuru ve tozsuz olduğundan emin olun.",
        application:
          "2 kat uygulayın, katlar arasında 2-4 saat kurumasını bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months from production date",
        conditions: "Store in a cool, dry place, away from direct sunlight.",
      },
      ar: {
        shelfLife: "24 شهرًا من تاريخ الإنتاج",
        conditions: "يُخزن في مكان بارد وجاف بعيدًا عن أشعة الشمس المباشرة.",
      },
      de: {
        shelfLife: "24 Monate ab Produktionsdatum",
        conditions:
          "Kühl und trocken lagern, vor direkter Sonneneinstrahlung schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 24 ay",
        conditions:
          "Serin ve kuru bir yerde, doğrudan güneş ışığından uzakta saklayın.",
      },
    },
  },

  {
    id: 2,
    image: Image2,
    category: "exterior-waterproof",
    name: {
      en: "External Waterproof Wall Coating",
      ar: "عازل الجدران والرطوبة المائي الخارجي",
      de: "Außen Wasserdichte Wandbeschichtung",
      tr: "Dış Su Geçirmez Duvar Kaplaması",
    },
    description: {
      en: "Durable exterior coating that protects walls from water and weather damage.",
      ar: "طلاء خارجي متين يحمي الجدران من المياه وأضرار الطقس.",
      de: "Langlebige Außenbeschichtung, die Wände vor Wasser und Witterungsschäden schützt.",
      tr: "Dış duvarları su ve hava koşullarına karşı koruyan dayanıklı kaplama.",
    },
    features: {
      en: ["Weather resistant", "Waterproof", "Long-lasting protection"],
      ar: ["مقاوم للطقس", "مقاوم للماء", "حماية طويلة الأمد"],
      de: ["Witterungsbeständig", "Wasserdicht", "Langzeit-Schutz"],
      tr: ["Hava koşullarına dayanıklı", "Su geçirmez", "Uzun süreli koruma"],
    },
    fullDescription: {
      en: "External Waterproof Wall Coating provides a protective layer that shields exterior walls from rain, moisture, and temperature changes, ensuring structural integrity and aesthetic appeal.",
      ar: "يقدم العازل الخارجي المائي طبقة واقية تحمي الجدران الخارجية من الأمطار والرطوبة وتغيرات درجات الحرارة، مما يضمن سلامة الهيكل والمظهر الجمالي.",
      de: "Außen Wasserdichte Wandbeschichtung bietet eine Schutzschicht, die Außenwände vor Regen, Feuchtigkeit und Temperaturschwankungen schützt und so die strukturelle Integrität und Optik gewährleistet.",
      tr: "Dış Su Geçirmez Duvar Kaplaması, dış duvarları yağmur, nem ve sıcaklık değişimlerinden koruyan bir koruyucu tabaka sağlar, yapısal bütünlük ve estetik görünümü garanti eder.",
    },
    detailedFeatures: {
      en: [
        "Prevents water infiltration",
        "Resistant to UV and weathering",
        "Crack resistant",
        "Durable and long-lasting",
        "Environmentally friendly",
      ],
      ar: [
        "يمنع تسرب الماء",
        "مقاوم للأشعة فوق البنفسجية والعوامل الجوية",
        "مقاوم للتشققات",
        "متين وطويل الأمد",
        "صديق للبيئة",
      ],
      de: [
        "Verhindert Wassereintritt",
        "UV- und witterungsbeständig",
        "Rissbeständig",
        "Langlebig",
        "Umweltfreundlich",
      ],
      tr: [
        "Su sızmasını önler",
        "UV ve hava koşullarına dayanıklı",
        "Çatlamaya dayanıklı",
        "Dayanıklı ve uzun ömürlü",
        "Çevre dostu",
      ],
    },
    technicalSpecs: {
      en: {
        type: "Waterproof exterior coating",
        color: "White / Grey",
        coverage: "8-10 m² per liter",
        dryingTime: "4-6 hours",
        applicationMethod: "Brush, roller, or spray",
      },
      ar: {
        type: "طلاء خارجي مقاوم للماء",
        color: "أبيض / رمادي",
        coverage: "8-10 متر مربع لكل لتر",
        dryingTime: "4-6 ساعات",
        applicationMethod: "فرشاة، رولر، أو بخاخ",
      },
      de: {
        type: "Wasserdichte Außenbeschichtung",
        color: "Weiß / Grau",
        coverage: "8-10 m² pro Liter",
        dryingTime: "4-6 Stunden",
        applicationMethod: "Pinsel, Rolle oder Sprühgerät",
      },
      tr: {
        type: "Su geçirmez dış kaplama",
        color: "Beyaz / Gri",
        coverage: "Litre başına 8-10 m²",
        dryingTime: "4-6 saat",
        applicationMethod: "Fırça, rulo veya sprey",
      },
    },
    usage: {
      en: {
        surfacePrep: "Clean surface, remove loose particles, ensure dry.",
        application:
          "Apply 2 coats allowing 4-6 hours drying time between coats.",
      },
      ar: {
        surfacePrep: "نظف السطح، أزل الجزيئات الفضفاضة، وتأكد من جفافه.",
        application: "ضع طبقتين مع السماح بجفاف 4-6 ساعات بين الطبقات.",
      },
      de: {
        surfacePrep:
          "Reinigen Sie die Oberfläche, lose Partikel entfernen, trocken sein.",
        application:
          "2 Schichten auftragen, 4-6 Stunden Trocknungszeit zwischen den Schichten.",
      },
      tr: {
        surfacePrep:
          "Yüzeyi temizleyin, gevşek parçaları çıkarın, kuru olduğundan emin olun.",
        application:
          "2 kat uygulayın, katlar arasında 4-6 saat kurumasını bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months from production date",
        conditions: "Store in cool, dry place, protected from sunlight.",
      },
      ar: {
        shelfLife: "24 شهرًا من تاريخ الإنتاج",
        conditions: "يخزن في مكان بارد وجاف بعيدًا عن أشعة الشمس.",
      },
      de: {
        shelfLife: "24 Monate ab Produktionsdatum",
        conditions: "Kühl und trocken lagern, vor Sonnenlicht schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 24 ay",
        conditions: "Serin ve kuru yerde, güneş ışığından koruyarak saklayın.",
      },
    },
  },

  {
    id: 3,
    image: Image3,
    category: "empty-insulation",
    name: {
      en: "Elastic Bituminous Waterproof Coating",
      ar: "تربروف نفضي (للأسطح، المعادن، الجدران)",
      de: "Elastische bituminöse Abdichtung",
      tr: "Elastik Bitümlü Su Yalıtım Kaplaması",
    },
    description: {
      en: "Flexible bituminous coating suitable for roofs, metals, and walls, providing waterproof protection.",
      ar: "طلاء بيتوميني مرن مناسب للأسطح والمعادن والجدران، يوفر حماية ضد الماء.",
      de: "Flexible bituminöse Beschichtung für Dächer, Metalle und Wände, bietet wasserdichten Schutz.",
      tr: "Esnek bitümlü kaplama, çatılar, metaller ve duvarlar için uygundur, su geçirmez koruma sağlar.",
    },
    features: {
      en: ["Flexible and durable", "Waterproof", "UV resistant"],
      ar: ["مرن ومتین", "مقاوم للماء", "مقاوم للأشعة فوق البنفسجية"],
      de: ["Flexibel und langlebig", "Wasserdicht", "UV-beständig"],
      tr: ["Esnek ve dayanıklı", "Su geçirmez", "UV dayanıklı"],
    },
    fullDescription: {
      en: "Elastic Bituminous Waterproof Coating is ideal for surfaces that require a flexible and robust waterproof barrier. Can be applied on roofs, metal surfaces, and walls, ensuring long-term protection.",
      ar: "طلاء بيتوميني نفضي مثالي للأسطح التي تتطلب حاجزًا مرنًا ومتينًا ضد الماء. يمكن تطبيقه على الأسطح والمعادن والجدران لضمان حماية طويلة الأمد.",
      de: "Elastische bituminöse Abdichtung eignet sich ideal für Oberflächen, die eine flexible und robuste wasserfeste Barriere benötigen. Kann auf Dächern, Metallflächen und Wänden aufgetragen werden und sorgt für langfristigen Schutz.",
      tr: "Elastik Bitümlü Su Yalıtım Kaplaması, esnek ve sağlam bir su geçirmez bariyer gerektiren yüzeyler için idealdir. Çatılar, metal yüzeyler ve duvarlara uygulanabilir, uzun süreli koruma sağlar.",
    },
    detailedFeatures: {
      en: [
        "Flexible and elastic",
        "Waterproof and durable",
        "UV and weather resistant",
        "Adheres to multiple surfaces",
        "Long-lasting protection",
      ],
      ar: [
        "مرن ومرن",
        "مقاوم للماء وطويل الأمد",
        "مقاوم للأشعة والعوامل الجوية",
        "يلتصق بأسطح متعددة",
        "حماية طويلة الأمد",
      ],
      de: [
        "Flexibel und elastisch",
        "Wasserdicht und langlebig",
        "UV- und witterungsbeständig",
        "Haftet auf verschiedenen Oberflächen",
        "Langzeit-Schutz",
      ],
      tr: [
        "Esnek ve elastik",
        "Su geçirmez ve dayanıklı",
        "UV ve hava koşullarına dayanıklı",
        "Çeşitli yüzeylere yapışır",
        "Uzun süreli koruma",
      ],
    },
    technicalSpecs: {
      en: {
        type: "Bituminous waterproof coating",
        color: "Black",
        coverage: "1-1.5 m² per kg",
        dryingTime: "6-8 hours",
        applicationMethod: "Brush, roller, or trowel",
      },
      ar: {
        type: "طلاء بيتوميني مقاوم للماء",
        color: "أسود",
        coverage: "1-1.5 متر مربع لكل كجم",
        dryingTime: "6-8 ساعات",
        applicationMethod: "فرشاة، رولر، أو مجرفة",
      },
      de: {
        type: "Bituminöse wasserdichte Beschichtung",
        color: "Schwarz",
        coverage: "1-1,5 m² pro kg",
        dryingTime: "6-8 Stunden",
        applicationMethod: "Pinsel, Rolle oder Kelle",
      },
      tr: {
        type: "Bitümlü su yalıtım kaplaması",
        color: "Siyah",
        coverage: "Kg başına 1-1,5 m²",
        dryingTime: "6-8 saat",
        applicationMethod: "Fırça, rulo veya mala",
      },
    },
    usage: {
      en: {
        surfacePrep:
          "Ensure surface is clean, dry, and free of dust and loose particles.",
        application:
          "Apply evenly using brush, roller, or trowel. Allow 6-8 hours drying before exposure to water.",
      },
      ar: {
        surfacePrep:
          "تأكد من أن السطح نظيف وجاف وخالٍ من الغبار والجزيئات الفضفاضة.",
        application:
          "ضع الطلاء بالتساوي باستخدام الفرشاة أو الرولر أو المجرفة. اتركه يجف 6-8 ساعات قبل التعرض للماء.",
      },
      de: {
        surfacePrep:
          "Stellen Sie sicher, dass die Oberfläche sauber, trocken und frei von Staub und losen Partikeln ist.",
        application:
          "Gleichmäßig mit Pinsel, Rolle oder Kelle auftragen. 6-8 Stunden Trocknen lassen, bevor Wasser ausgesetzt wird.",
      },
      tr: {
        surfacePrep:
          "Yüzeyin temiz, kuru ve gevşek parçalar içermediğinden emin olun.",
        application:
          "Fırça, rulo veya mala ile eşit şekilde uygulayın. Suya maruz bırakmadan önce 6-8 saat kurumasını bekleyin.",
      },
    },
    storage: {
      en: {
        shelfLife: "24 months from production date",
        conditions: "Store in cool, dry place, protected from sunlight.",
      },
      ar: {
        shelfLife: "24 شهرًا من تاريخ الإنتاج",
        conditions: "يُخزن في مكان بارد وجاف بعيدًا عن أشعة الشمس.",
      },
      de: {
        shelfLife: "24 Monate ab Produktionsdatum",
        conditions: "Kühl und trocken lagern, vor Sonnenlicht schützen.",
      },
      tr: {
        shelfLife: "Üretim tarihinden itibaren 24 ay",
        conditions: "Serin ve kuru yerde, güneş ışığından koruyarak saklayın.",
      },
    },
  },
];

export default insulationProducts;
