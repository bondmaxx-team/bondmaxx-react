import testImage from "../assets/color-1.png";

const insulationProducts = [
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
];

export default insulationProducts;
