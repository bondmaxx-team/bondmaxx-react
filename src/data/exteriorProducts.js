import testImage from "../assets/color-1.png"; // صورة افتراضية للمنتجات الخارجية

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
];

export default exteriorProducts;
