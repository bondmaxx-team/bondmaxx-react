import { useLocation, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/10.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { DEFAULT_WHATSAPP_NUMBER } from "@/config/whatsapp";

export default function About() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const isRTL = i18n.language === "ar";

  const industries = [
    {
      icon: "fa-home",
      title: t("residential_sector"),
      description: t("residential_description"),
    },
    {
      icon: "fa-building",
      title: t("commercial_sector"),
      description: t("commercial_description"),
    },
    {
      icon: "fa-industry",
      title: t("industrial_sector"),
      description: t("industrial_description"),
    },
    {
      icon: "fa-ship",
      title: t("marine_sector"),
      description: t("marine_description"),
    },
  ];

  const values = [
    {
      icon: "fa-lightbulb",
      title: {
        ar: "الابتكار",
        en: "Innovation",
        tr: "İnovasyon",
        de: "Innovation",
      },
      description: {
        ar: "نسعى دائماً لتطوير حلول جديدة ومبتكرة",
        en: "We always strive to develop new and innovative solutions",
        tr: "Her zaman yeni ve yenilikçi çözümler geliştirmeye çalışıyoruz",
        de: "Wir streben stets nach neuen und innovativen Lösungen",
      },
    },
    {
      icon: "fa-handshake",
      title: {
        ar: "التعاون",
        en: "Collaboration",
        tr: "İşbirliği",
        de: "Zusammenarbeit",
      },
      description: {
        ar: "نؤمن بقوة العمل الجماعي والشراكات",
        en: "We believe in the power of teamwork and partnerships",
        tr: "Takım çalışması ve ortaklıkların gücüne inanıyoruz",
        de: "Wir glauben an die Kraft von Teamarbeit und Partnerschaften",
      },
    },
    {
      icon: "fa-certificate",
      title: {
        ar: "الأصالة",
        en: "Authenticity",
        tr: "Özgünlük",
        de: "Authentizität",
      },
      description: {
        ar: "نلتزم بالجودة والشفافية في كل ما نقدمه",
        en: "We are committed to quality and transparency in everything we offer",
        tr: "Sunduğumuz her şeyde kalite ve şeffaflığa bağlıyız",
        de: "Wir sind der Qualität und Transparenz verpflichtet",
      },
    },
    {
      icon: "fa-star",
      title: {
        ar: "الجودة",
        en: "Quality",
        tr: "Kalite",
        de: "Qualität",
      },
      description: {
        ar: "معايير عالمية في كل منتج نصنعه",
        en: "Global standards in every product we manufacture",
        tr: "Ürettiğimiz her üründe küresel standartlar",
        de: "Weltweite Standards in jedem Produkt, das wir herstellen",
      },
    },
  ];

  const mission = [
    {
      icon: "fa-lightbulb",
      title: {
        ar: "ابتكار حلول شاملة",
        en: "Innovating Comprehensive Solutions",
        tr: "Kapsamlı Çözümler Geliştirme",
        de: "Umfassende Lösungen Entwickeln",
      },
      description: {
        ar: "تطوير وتقديم مجموعة متكاملة من منتجات وخدمات الطلاء عالية الجودة، مصممة خصيصاً لتناسب الاحتياجات الفريدة لكل قطاع وعمل.",
        en: "Developing and delivering a full range of high-quality coating products and services, tailored to the unique needs of every sector and client.",
        tr: "Her sektör ve müşterinin benzersiz ihtiyaçlarına göre özelleştirilmiş, yüksek kaliteli kaplama ürün ve hizmetlerinin tam yelpazesini geliştirme ve sunma.",
        de: "Entwicklung und Bereitstellung einer vollständigen Palette hochwertiger Beschichtungsprodukte und -dienstleistungen, die auf die einzigartigen Bedürfnisse jedes Sektors und Kunden zugeschnitten sind.",
      },
    },
    {
      icon: "fa-handshake",
      title: {
        ar: "الشراكة مع عملائنا",
        en: "Partnering with Our Clients",
        tr: "Müşterilerimizle Ortaklık",
        de: "Partnerschaft mit Unseren Kunden",
      },
      description: {
        ar: "بناء علاقات طويلة الأمد مع عملائنا من خلال فهم متطلباتهم العميقة وتقديم حلول تلبي توقعاتهم وتتجاوزها، بدعم فني واستشاري دائم.",
        en: "Building long-term relationships by deeply understanding their requirements and providing solutions that meet and exceed expectations, backed by constant technical and advisory support.",
        tr: "İhtiyaçlarını derinlemesine anlayarak ve sürekli teknik ve danışmanlık desteğiyle beklentileri karşılayan ve aşan çözümler sunarak uzun vadeli ilişkiler kurma.",
        de: "Aufbau langfristiger Beziehungen durch tiefes Verständnis ihrer Anforderungen und Bereitstellung von Lösungen, die Erwartungen erfüllen und übertreffen, unterstützt durch ständige technische und beratende Unterstützung.",
      },
    },
    {
      icon: "fa-leaf",
      title: {
        ar: "الالتزام بالاستدامة",
        en: "Committing to Sustainability",
        tr: "Sürdürülebilirliğe Bağlılık",
        de: "Engagement für Nachhaltigkeit",
      },
      description: {
        ar: "اعتماد معايير صديقة للبيئة في عملياتنا التصنيعية ومنتجاتنا، للمساهمة في بناء مستقبل أكثر استدامة لأجيال الغد.",
        en: "Adopting eco-friendly standards in our manufacturing and products to contribute to a more sustainable future for the next generations.",
        tr: "Gelecek nesiller için daha sürdürülebilir bir geleceğe katkıda bulunmak üzere üretim ve ürünlerimizde çevre dostu standartları benimseme.",
        de: "Einführung umweltfreundlicher Standards in unserer Fertigung und unseren Produkten, um zu einer nachhaltigeren Zukunft für kommende Generationen beizutragen.",
      },
    },
  ];

  const vision = {
    ar: "أن نكون الشركة الرائدة إقليمياً في تقديم حلول الطلاء المبتكرة والذكية التي تعيد تعريف مفهوم الجمال والمتانة في الفضاءات المعيشية والعملية.",
    en: "To be the regional leader in providing innovative and smart coating solutions that redefine beauty and durability in living and working spaces.",
    tr: "Yaşam ve çalışma alanlarında güzellik ve dayanıklılığı yeniden tanımlayan yenilikçi ve akıllı kaplama çözümleri sunmada bölgesel lider olmak.",
    de: "Regionaler Marktführer bei der Bereitstellung innovativer und intelligenter Beschichtungslösungen zu sein, die Schönheit und Haltbarkeit in Wohn- und Arbeitsräumen neu definieren.",
  };

  const handleClick = () => {
    const targetId = "products-section";

    if (location.pathname === "/") {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      navigate("/", { state: { scrollTo: targetId } });
    }
  };
  return (
    <div
      className="min-h-screen"
      dir={isRTL ? "rtl" : "ltr"}
      style={{ fontFamily: "Cairo, Tajawal, Arial, sans-serif" }}
    >
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden">
        <motion.div
          className="relative py-16 md:py-28 lg:py-36"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 bg-black/70"></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
              {t("about_bondmaxx_title")}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-8 px-2 text-blue-200 drop-shadow">
              {t("about_bondmaxx_subtitle")}
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 text-gray-200 text-lg leading-relaxed">
              {[1, 2, 3, 4, 5].map((i) => (
                <p key={i}>{t(`about_bondmaxx_paragraph_${i}`)}</p>
              ))}
            </div>
            <button
              onClick={handleClick}
              className="mt-8 px-8 py-3 font-bold rounded-full shadow-lg bg-white text-blue-900 hover:scale-105 transition-transform"
            >
              {t("discover_products")}
            </button>
          </div>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "#203F84" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
              {isRTL
                ? "رؤيتنا"
                : i18n.language === "en"
                ? "Our Vision"
                : i18n.language === "tr"
                ? "Vizyonumuz"
                : "Unsere Vision"}
            </h2>
            <div className="w-20 h-1 mx-auto mb-8 bg-white"></div>
            <motion.div
              className="max-w-4xl mx-auto bg-white/20 rounded-3xl p-8 md:p-12 shadow-xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white">
                  <i className="fas fa-eye text-3xl text-blue-900"></i>
                </div>
              </div>
              <p className="text-white text-lg md:text-xl leading-relaxed">
                {vision[i18n.language] || vision.ar}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
            {isRTL
              ? "مهمتنا"
              : i18n.language === "en"
              ? "Our Mission"
              : i18n.language === "tr"
              ? "Misyonumuz"
              : "Unsere Mission"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mission.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col bg-white p-6 md:p-8 rounded-2xl shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
              >
                <motion.div
                  className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-blue-900 text-white rounded-full text-2xl md:text-3xl mb-4 md:mb-2"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  <i className={`fas ${item.icon}`}></i>
                </motion.div>
                <h3 className="font-bold text-lg md:text-xl text-blue-900 mb-2">
                  {item.title[i18n.language] || item.title.ar}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.description[i18n.language] || item.description.ar}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-blue-900">
            {isRTL
              ? "قيمنا"
              : i18n.language === "en"
              ? "Our Values"
              : i18n.language === "tr"
              ? "Değerlerimiz"
              : "Unsere Werte"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={idx}
                className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 flex items-center justify-center bg-blue-900 text-white rounded-full text-2xl"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 1 }}
                >
                  <i className={`fas ${val.icon}`}></i>
                </motion.div>
                <div>
                  <h3 className="font-bold text-lg text-blue-900 mb-1">
                    {val.title[i18n.language] || val.title.ar}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                    {val.description[i18n.language] || val.description.ar}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-900">
            {t("industries_we_serve")}
          </h2>
          <div className="w-20 h-1 mx-auto mb-8 bg-blue-900"></div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {industries.map((ind, idx) => (
              <motion.div
                key={idx}
                className="flex flex-col items-center p-6 rounded-2xl hover:shadow-lg transition-all border border-gray-200"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
              >
                <div className="w-16 h-16 flex items-center justify-center bg-blue-900 text-white rounded-full text-2xl mb-3">
                  <i className={`fas ${ind.icon}`}></i>
                </div>
                <h3 className="text-blue-900 font-bold text-base mb-1">
                  {ind.title}
                </h3>
                <p className="text-gray-600 text-xs md:text-sm">
                  {ind.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
