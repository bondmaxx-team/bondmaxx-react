import testImage from "../assets/color-1.png";

const accessoriesProducts = [
  {
    id: 701,
    type: "accessories",
    category: "brushes",
    image: testImage,
    name: {
      en: "Bondmax Professional Brush Set",
      ar: "طقم فرش بوندماكس الاحترافي",
      de: "Bondmax Professionelles Pinselset",
      tr: "Bondmax Profesyonel Fırça Seti",
    },
    description: {
      en: "High-quality professional brushes.",
      ar: "فرش احترافية عالية الجودة.",
      de: "Hochwertige Profipinsel.",
      tr: "Yüksek kaliteli profesyonel fırçalar.",
    },
    features: {
      en: ["Durable bristles", "Ergonomic handle", "Professional quality"],
      ar: ["شعيرات متينة", "مقبض مريح", "جودة احترافية"],
      de: ["Langlebige Borsten", "Ergonomischer Griff", "Profi-Qualität"],
      tr: ["Dayanıklı kıllar", "Ergonomik sap", "Profesyonel kalite"],
    },
    fullDescription: {
      en: "Bondmax Professional Brush Set includes premium quality brushes designed for professional painters. Made with high-grade synthetic bristles and comfortable ergonomic handles, these brushes provide excellent paint pickup and smooth application.",
      ar: "طقم فرش بوندماكس الاحترافي يتضمن فرش عالية الجودة مصممة للرسامين المحترفين. مصنوعة من شعيرات صناعية عالية الجودة ومقابض مريحة، توفر هذه الفرش امتصاصًا ممتازًا للطلاء وتطبيقًا ناعمًا.",
      de: "Das Bondmax Professionelle Pinselset enthält Premium-Pinsel für professionelle Maler. Hergestellt mit hochwertigen Synthetikborsten und komfortablen ergonomischen Griffen, bieten diese Pinsel exzellente Farbaufnahme und gleichmäßigen Auftrag.",
      tr: "Bondmax Profesyonel Fırça Seti, profesyonel boyacılar için tasarlanmış premium kalite fırçaları içerir. Yüksek kaliteli sentetik kıllar ve rahat ergonomik saplarla yapılmış bu fırçalar mükemmel boya alımı ve pürüzsüz uygulama sağlar.",
    },
    detailedFeatures: {
      en: [
        "Premium synthetic bristles",
        "Excellent paint pickup and release",
        "Comfortable ergonomic handles",
        "Durable and long-lasting",
        "Easy to clean",
        "Suitable for all paint types",
      ],
      ar: [
        "شعيرات صناعية فاخرة",
        "امتصاص وإطلاق ممتاز للطلاء",
        "مقابض مريحة",
        "متينة وطويلة الأمد",
        "سهلة التنظيف",
        "مناسبة لجميع أنواع الطلاء",
      ],
      de: [
        "Premium-Synthetikborsten",
        "Hervorragende Farbaufnahme und -abgabe",
        "Komfortable ergonomische Griffe",
        "Langlebig und dauerhaft",
        "Leicht zu reinigen",
        "Für alle Farbtypen geeignet",
      ],
      tr: [
        "Premium sentetik kıllar",
        "Mükemmel boya alımı ve bırakması",
        "Rahat ergonomik saplar",
        "Dayanıklı ve uzun ömürlü",
        "Kolay temizlik",
        "Tüm boya türleri için uygundur",
      ],
    },
    technicalSpecs: {
      en: {
        material: "Synthetic bristles with wooden handle",
        sizes: '1", 2", 3", 4"',
        type: "Flat and angled brushes",
        suitable: "Water and oil-based paints",
        cleaning: "Water or solvent depending on paint type",
      },
      ar: {
        material: "شعيرات صناعية بمقبض خشبي",
        sizes: "1 بوصة، 2 بوصة، 3 بوصة، 4 بوصة",
        type: "فرش مسطحة ومزوّاة",
        suitable: "دهانات مائية وزيتية",
        cleaning: "ماء أو مذيب حسب نوع الطلاء",
      },
      de: {
        material: "Synthetikborsten mit Holzgriff",
        sizes: '1", 2", 3", 4"',
        type: "Flach- und Schrägpinsel",
        suitable: "Wasser- und Ölfarben",
        cleaning: "Wasser oder Lösungsmittel je nach Farbtyp",
      },
      tr: {
        material: "Ahşap saplı sentetik kıllar",
        sizes: '1", 2", 3", 4"',
        type: "Düz ve açılı fırçalar",
        suitable: "Su ve yağ bazlı boyalar",
        cleaning: "Boya türüne göre su veya çözücü",
      },
    },
    usage: {
      en: {
        application:
          "Choose appropriate brush size for the area. Dip brush 1/3 into paint. Apply with smooth, even strokes. Clean immediately after use.",
        care: "Clean thoroughly with appropriate cleaner. Reshape bristles while wet. Hang to dry with bristles pointing down.",
      },
      ar: {
        application:
          "اختر حجم الفرشاة المناسب للمنطقة. اغمس الفرشاة بمقدار الثلث في الطلاء. طبق بضربات ناعمة ومتساوية. نظف فورًا بعد الاستخدام.",
        care: "نظف جيدًا بالمنظف المناسب. أعد تشكيل الشعيرات وهي مبللة. علق للتجفيف مع توجيه الشعيرات للأسفل.",
      },
      de: {
        application:
          "Wählen Sie die passende Pinselgröße für den Bereich. Tauchen Sie den Pinsel zu 1/3 in die Farbe. Mit gleichmäßigen Strichen auftragen. Sofort nach Gebrauch reinigen.",
        care: "Gründlich mit geeignetem Reiniger säubern. Borsten im nassen Zustand in Form bringen. Mit nach unten zeigenden Borsten zum Trocknen aufhängen.",
      },
      tr: {
        application:
          "Alan için uygun fırça boyutunu seçin. Fırçayı boyanın 1/3'üne batırın. Pürüzsüz, eşit vuruşlarla uygulayın. Kullanımdan hemen sonra temizleyin.",
        care: "Uygun temizleyici ile iyice temizleyin. Islakken kılları yeniden şekillendirin. Kıllar aşağı bakacak şekilde asarak kurutun.",
      },
    },
    storage: {
      en: {
        conditions:
          "Store in a dry place. Keep bristles protected from damage. Do not store wet or dirty brushes.",
      },
      ar: {
        conditions:
          "يُخزن في مكان جاف. احفظ الشعيرات محمية من التلف. لا تخزن الفرش وهي مبللة أو متسخة.",
      },
      de: {
        conditions:
          "An einem trockenen Ort lagern. Borsten vor Beschädigung schützen. Keine nassen oder schmutzigen Pinsel lagern.",
      },
      tr: {
        conditions:
          "Kuru yerde saklayın. Kılları hasardan koruyun. Islak veya kirli fırçaları saklamayın.",
      },
    },
  },
  {
    id: 702,
    type: "accessories",
    category: "rollers",
    image: testImage,
    name: {
      en: "Bondmax Paint Roller Kit",
      ar: "طقم رول بوندماكس",
      de: "Bondmax Farbroller-Set",
      tr: "Bondmax Boya Rulosu Seti",
    },
    description: {
      en: "Complete roller kit for smooth application.",
      ar: "طقم رول كامل للتطبيق الناعم.",
      de: "Komplettes Roller-Set für glatten Auftrag.",
      tr: "Pürüzsüz uygulama için eksiksiz rulo seti.",
    },
    features: {
      en: ["Anti-drip design", "Smooth finish", "Easy to use"],
      ar: ["تصميم مضاد للتقطير", "لمسة نهائية ناعمة", "سهل الاستخدام"],
      de: ["Tropffreies Design", "Glatte Oberfläche", "Einfach zu bedienen"],
      tr: ["Damlamayan tasarım", "Pürüzsüz yüzey", "Kullanımı kolay"],
    },
    fullDescription: {
      en: "Bondmax Paint Roller Kit includes professional-grade roller frame, extension pole, and premium roller covers. Designed for efficient painting with minimal splatter and excellent coverage.",
      ar: "طقم رول بوندماكس يتضمن إطار رول احترافي، عمود تمديد، وأغطية رول فاخرة. مصمم للدهان الفعال مع الحد الأدنى من الرذاذ وتغطية ممتازة.",
      de: "Das Bondmax Farbroller-Set enthält professionellen Rollerrahmen, Verlängerungsstange und Premium-Rollerbezüge. Entwickelt für effizientes Streichen mit minimalem Spritzen und ausgezeichneter Abdeckung.",
      tr: "Bondmax Boya Rulosu Seti, profesyonel kalite rulo çerçevesi, uzatma kolonu ve premium rulo kılıfları içerir. Minimum sıçrama ve mükemmel kaplama ile verimli boyama için tasarlanmıştır.",
    },
    detailedFeatures: {
      en: [
        "Professional roller frame",
        "Telescopic extension pole",
        "Multiple roller cover options",
        "Anti-drip tray included",
        "Durable construction",
        "Easy roller cover change",
      ],
      ar: [
        "إطار رول احترافي",
        "عمود تمديد تلسكوبي",
        "خيارات متعددة لأغطية الرول",
        "صينية مضادة للتقطير مضمنة",
        "بناء متين",
        "تغيير سهل لغطاء الرول",
      ],
      de: [
        "Professioneller Rollerrahmen",
        "Teleskop-Verlängerungsstange",
        "Mehrere Rollerbezug-Optionen",
        "Tropffreie Wanne enthalten",
        "Langlebige Konstruktion",
        "Einfacher Rollerbezug-Wechsel",
      ],
      tr: [
        "Profesyonel rulo çerçevesi",
        "Teleskopik uzatma kolonu",
        "Çoklu rulo kılıfı seçenekleri",
        "Damlamayan tepsi dahil",
        "Dayanıklı yapı",
        "Kolay rulo kılıfı değişimi",
      ],
    },
    technicalSpecs: {
      en: {
        frameSize: '9" standard',
        poleLength: "1.2m - 2.4m extendable",
        rollerTypes: "Short nap, medium nap, long nap",
        traySize: '9" compatible',
        material: "Steel frame with plastic handle",
      },
      ar: {
        frameSize: "9 بوصة قياسي",
        poleLength: "1.2 م - 2.4 م قابل للتمديد",
        rollerTypes: "وبر قصير، وبر متوسط، وبر طويل",
        traySize: "متوافق مع 9 بوصة",
        material: "إطار فولاذي بمقبض بلاستيكي",
      },
      de: {
        frameSize: '9" Standard',
        poleLength: "1,2 m - 2,4 m ausziehbar",
        rollerTypes: "Kurzflor, Mittelflor, Langflor",
        traySize: '9" kompatibel',
        material: "Stahlrahmen mit Kunststoffgriff",
      },
      tr: {
        frameSize: '9" standart',
        poleLength: "1,2 m - 2,4 m uzatılabilir",
        rollerTypes: "Kısa hav, orta hav, uzun hav",
        traySize: '9" uyumlu',
        material: "Plastik saplı çelik çerçeve",
      },
    },
    usage: {
      en: {
        application:
          "Attach roller cover to frame. Load with paint using tray. Apply in W or M pattern for even coverage. Use extension pole for high areas.",
        care: "Clean roller cover thoroughly after use. Rinse multiple times until water runs clear. Air dry completely before storage.",
      },
      ar: {
        application:
          "اربط غطاء الرول بالإطار. حمّل بالطلاء باستخدام الصينية. طبق بنمط W أو M للتغطية المتساوية. استخدم عمود التمديد للمناطق العالية.",
        care: "نظف غطاء الرول جيدًا بعد الاستخدام. اشطف عدة مرات حتى يصبح الماء صافيًا. جفف بالهواء تمامًا قبل التخزين.",
      },
      de: {
        application:
          "Rollerbezug am Rahmen befestigen. Mit Farbe aus der Wanne beladen. In W- oder M-Muster für gleichmäßige Abdeckung auftragen. Verlängerungsstange für hohe Bereiche verwenden.",
        care: "Rollerbezug nach Gebrauch gründlich reinigen. Mehrfach spülen, bis das Wasser klar ist. Vor der Lagerung vollständig lufttrocknen.",
      },
      tr: {
        application:
          "Rulo kılıfını çerçeveye takın. Tepsi kullanarak boya ile yükleyin. Eşit kaplama için W veya M deseninde uygulayın. Yüksek alanlar için uzatma kolonu kullanın.",
        care: "Kullanımdan sonra rulo kılıfını iyice temizleyin. Su berrak akana kadar birkaç kez durulayın. Saklamadan önce tamamen hava ile kurutun.",
      },
    },
    storage: {
      en: {
        conditions:
          "Store in dry place. Keep roller covers wrapped when not in use. Clean and dry before storage.",
      },
      ar: {
        conditions:
          "يُخزن في مكان جاف. احفظ أغطية الرول ملفوفة عند عدم الاستخدام. نظف وجفف قبل التخزين.",
      },
      de: {
        conditions:
          "An trockenem Ort lagern. Rollerbezüge bei Nichtgebrauch eingewickelt aufbewahren. Vor der Lagerung reinigen und trocknen.",
      },
      tr: {
        conditions:
          "Kuru yerde saklayın. Kullanılmadığında rulo kılıflarını sarılı tutun. Saklamadan önce temizleyin ve kurutun.",
      },
    },
  },
  {
    id: 703,
    type: "accessories",
    category: "tools",
    image: testImage,
    name: {
      en: "Bondmax Painting Tools Set",
      ar: "طقم أدوات دهان بوندماكس",
      de: "Bondmax Malwerkzeug-Set",
      tr: "Bondmax Boya Aletleri Seti",
    },
    description: {
      en: "Complete painting tools collection.",
      ar: "مجموعة كاملة من أدوات الدهان.",
      de: "Komplette Malwerkzeug-Sammlung.",
      tr: "Eksiksiz boya aletleri koleksiyonu.",
    },
    features: {
      en: ["Professional quality", "Durable materials", "Complete set"],
      ar: ["جودة احترافية", "مواد متينة", "طقم كامل"],
      de: ["Profi-Qualität", "Langlebige Materialien", "Komplettset"],
      tr: ["Profesyonel kalite", "Dayanıklı malzemeler", "Eksiksiz set"],
    },
    fullDescription: {
      en: "Bondmax Painting Tools Set includes all essential tools for professional painting work: putty knives, scrapers, sandpaper, masking tape, drop cloths, and more. Everything needed for surface preparation and protection.",
      ar: "طقم أدوات دهان بوندماكس يتضمن جميع الأدوات الأساسية للعمل الاحترافي: سكاكين معجون، كاشطات، ورق صنفرة، شريط لاصق، أغطية حماية، والمزيد. كل ما هو مطلوب لتحضير وحماية الأسطح.",
      de: "Das Bondmax Malwerkzeug-Set enthält alle wesentlichen Werkzeuge für professionelle Malerarbeiten: Spachtelmesser, Schaber, Schleifpapier, Abdeckband, Abdeckfolien und mehr. Alles Notwendige für Oberflächenvorbereitung und Schutz.",
      tr: "Bondmax Boya Aletleri Seti, profesyonel boyama işi için tüm temel aletleri içerir: macun bıçakları, kazıyıcılar, zımpara kağıdı, maskeleme bandı, koruma örtüleri ve daha fazlası. Yüzey hazırlığı ve koruma için gereken her şey.",
    },
    detailedFeatures: {
      en: [
        "Multiple putty knife sizes",
        "Paint scrapers and removers",
        "Various grit sandpaper",
        "Quality masking tape",
        "Protective drop cloths",
        "Paint stirrers and openers",
      ],
      ar: [
        "أحجام متعددة من سكاكين المعجون",
        "كاشطات ومزيلات طلاء",
        "ورق صنفرة بدرجات خشونة مختلفة",
        "شريط لاصق عالي الجودة",
        "أغطية حماية",
        "محركات وفتاحات طلاء",
      ],
      de: [
        "Mehrere Spachtelmesser-Größen",
        "Farbschaber und -entferner",
        "Verschiedene Schleifpapier-Körnungen",
        "Hochwertiges Abdeckband",
        "Schützende Abdeckfolien",
        "Farbrührer und -öffner",
      ],
      tr: [
        "Çoklu macun bıçağı boyutları",
        "Boya kazıyıcılar ve sökücüler",
        "Çeşitli grenli zımpara kağıtları",
        "Kaliteli maskeleme bandı",
        "Koruyucu örtüler",
        "Boya karıştırıcılar ve açıcılar",
      ],
    },
    technicalSpecs: {
      en: {
        includes: "12+ piece tool set",
        puttySizes: '2", 3", 4", 6"',
        sandpaper: "60, 80, 120, 180, 240 grit",
        tapeWidth: "24mm, 48mm",
        dropCloth: "4m x 5m plastic sheet",
      },
      ar: {
        includes: "طقم أدوات من 12+ قطعة",
        puttySizes: "2 بوصة، 3 بوصة، 4 بوصة، 6 بوصة",
        sandpaper: "60، 80، 120، 180، 240 حبيبة",
        tapeWidth: "24 مم، 48 مم",
        dropCloth: "غطاء بلاستيكي 4م × 5م",
      },
      de: {
        includes: "12+ Teile Werkzeugset",
        puttySizes: '2", 3", 4", 6"',
        sandpaper: "60, 80, 120, 180, 240 Körnung",
        tapeWidth: "24 mm, 48 mm",
        dropCloth: "4 m x 5 m Plastikfolie",
      },
      tr: {
        includes: "12+ parça alet seti",
        puttySizes: '2", 3", 4", 6"',
        sandpaper: "60, 80, 120, 180, 240 gren",
        tapeWidth: "24 mm, 48 mm",
        dropCloth: "4 m x 5 m plastik örtü",
      },
    },
    usage: {
      en: {
        application:
          "Use appropriate tool for each task. Putty knives for filling, scrapers for removing old paint, sandpaper for smoothing, tape for masking edges.",
        care: "Clean all tools after use. Store in dry place. Keep sharp edges protected.",
      },
      ar: {
        application:
          "استخدم الأداة المناسبة لكل مهمة. سكاكين المعجون للملء، الكاشطات لإزالة الطلاء القديم، ورق الصنفرة للتنعيم، الشريط لتغطية الحواف.",
        care: "نظف جميع الأدوات بعد الاستخدام. خزن في مكان جاف. احفظ الحواف الحادة محمية.",
      },
      de: {
        application:
          "Verwenden Sie das passende Werkzeug für jede Aufgabe. Spachtelmesser zum Füllen, Schaber zum Entfernen alter Farbe, Schleifpapier zum Glätten, Band zum Abdecken von Kanten.",
        care: "Alle Werkzeuge nach Gebrauch reinigen. An trockenem Ort aufbewahren. Scharfe Kanten geschützt halten.",
      },
      tr: {
        application:
          "Her görev için uygun aleti kullanın. Doldurma için macun bıçakları, eski boyayı çıkarmak için kazıyıcılar, düzeltmek için zımpara, kenarları maskelemek için bant.",
        care: "Kullanımdan sonra tüm aletleri temizleyin. Kuru yerde saklayın. Keskin kenarları korumalı tutun.",
      },
    },
    storage: {
      en: {
        conditions:
          "Store in toolbox or dry storage area. Keep organized for easy access. Protect metal parts from rust.",
      },
      ar: {
        conditions:
          "يُخزن في صندوق أدوات أو منطقة تخزين جافة. احتفظ به منظمًا لسهولة الوصول. احمِ الأجزاء المعدنية من الصدأ.",
      },
      de: {
        conditions:
          "In Werkzeugkasten oder trockenem Lagerbereich aufbewahren. Für einfachen Zugang organisiert halten. Metallteile vor Rost schützen.",
      },
      tr: {
        conditions:
          "Alet kutusunda veya kuru depolama alanında saklayın. Kolay erişim için düzenli tutun. Metal parçaları pastan koruyun.",
      },
    },
  },
];

export default accessoriesProducts;
