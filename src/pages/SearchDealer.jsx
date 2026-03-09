import { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";

const SearchDealerPage = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&h=1080&fit=crop",
}) => {
  const { t, i18n, ready } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  // Static data that doesn't need translation
  const STATIC_DEALER_DATA = [
    {
      id: 1,
      phone: "+90 555 000 40 00",
      mapLink: "https://maps.app.goo.gl/n3chLYJreJ8qNGh29",
      rating: 4.8,
      reviews: 156,
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
    }
  ];

  // Get time format based on language
  const getWorkingHours = () => {
    switch(i18n.language) {
      case 'ar':
        return "9:00 صباحاً - 8:00 مساءً";
      case 'tr':
        return "09:00 - 20:00";
      case 'de':
        return "09:00 - 20:00 Uhr";
      default:
        return "9:00 AM - 8:00 PM";
    }
  };

  // Combine static data with translations
  const dealers = useMemo(() => {
    if (!ready) return [];
    
    return STATIC_DEALER_DATA.map(dealer => ({
      ...dealer,
      name: t("store_idlib"),
      city: t("idlib"),
      address: t("maarat_al_nasan") + ", " + t("idlib") + ", " + t("syria"),
      workingHours: t("working_hours") + ": " + getWorkingHours(),
      services: [t("free_consultation"), t("customer_service_24_7")],
    }));
  }, [t, i18n.language, ready]);

  // Update FAQs when language changes
  const [faqs, setFaqs] = useState([]);
  
  useEffect(() => {
    if (ready) {
      const updatedFaqs = [
        { question: t("faq_question_1"), answer: t("faq_answer_1") },
        { question: t("faq_question_2"), answer: t("faq_answer_2") },
        { question: t("faq_question_3"), answer: t("faq_answer_3") },
        { question: t("faq_question_4"), answer: t("faq_answer_4") },
      ];
      setFaqs(updatedFaqs);
    }
  }, [t, i18n.language, ready]);

  const [filteredDealers, setFilteredDealers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Automatically show dealer when page loads and when language changes
  useEffect(() => {
    if (ready && dealers.length > 0) {
      setIsTransitioning(true);
      setIsLoading(true);
      
      // Very short delay for smoother transition
      const timer = setTimeout(() => {
        const updatedDealers = dealers.map((dealer) => ({
          ...dealer,
          distance: "2.5 " + t("distance_km"),
        }));

        setFilteredDealers(updatedDealers);
        setIsLoading(false);
        setShowResults(true);
        
        // Small delay to ensure DOM is updated before removing transition state
        setTimeout(() => setIsTransitioning(false), 100);
      }, 300); // Very short delay for automatic loading

      return () => clearTimeout(timer);
    }
  }, [ready, dealers, t, i18n.language]);

  const handleLocationClick = () => {
    if (!ready) return;
    
    setIsTransitioning(true);
    setIsLoading(true);
    setShowResults(false);

    // Simulate finding nearby dealers without asking for location
    const updatedDealers = dealers.map((dealer) => ({
      ...dealer,
      distance: "2.5 " + t("distance_km"),
    }));

    setTimeout(() => {
      setFilteredDealers(updatedDealers);
      setIsLoading(false);
      setShowResults(true);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 800); // Slightly longer for manual click
  };

  // Show loading until translations are ready
  if (!ready) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 transition-all duration-500">
        <div className="text-center">
          <div className="w-20 h-20 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-6 transition-all duration-300"></div>
          <p className="text-gray-600 text-lg font-medium animate-pulse transition-all duration-300">
            {t("loading_translations") || "Loading translations..."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="relative transition-all duration-500 ease-in-out">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center min-h-screen w-full flex items-center justify-center relative overflow-hidden py-20 transition-all duration-700"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/50 transition-all duration-1000"></div>

        <div className="container mx-auto px-4 text-center relative z-10 transform transition-all duration-500">
          <div className="max-w-2xl mx-auto">
            <h1
              className="text-5xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-2xl transform transition-all duration-700 hover:scale-105"
              style={{ color: "#ffffff" }}
            >
              {title || t("dealer_page_title")}
            </h1>
            <p
              className="text-xl md:text-2xl mb-16 font-medium drop-shadow-xl transform transition-all duration-600 opacity-90 hover:opacity-100"
              style={{ color: "#ffffff" }}
            >
              {subtitle || t("dealer_page_subtitle")}
            </p>

            <div className="flex justify-center transform transition-all duration-500">
              <button
                onClick={handleLocationClick}
                disabled={isLoading}
                className="flex items-center justify-center gap-3 transform transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-xl"
                style={{
                  backgroundColor: "#203F84",
                  color: "#fff",
                  padding: "1.25rem 3rem",
                  borderRadius: "1rem",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  cursor: isLoading ? "not-allowed" : "pointer",
                  opacity: isLoading ? 0.7 : 1,
                  boxShadow: "0 8px 25px rgba(32, 63, 132, 0.3)",
                  filter: isLoading ? "brightness(0.9)" : "brightness(1)",
                }}
              >
                {isLoading && (
                  <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin transition-all duration-300"></div>
                )}
                <span className="transition-all duration-300">📍 {t("use_current_location")}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section with smooth entrance */}
      <section 
        className={`py-20 bg-gradient-to-b from-gray-50 to-white transition-all duration-1000 ease-out ${
          showResults ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <h2
            className={`text-4xl md:text-5xl font-bold text-center mb-16 transition-all duration-700 ${
              isTransitioning ? 'opacity-50 scale-95' : 'opacity-100 scale-100'
            }`}
            style={{ color: "#203F84" }}
          >
            {t("nearby_stores")}
          </h2>

          {filteredDealers.length > 0 ? (
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 ${
              isTransitioning ? 'opacity-50' : 'opacity-100'
            }`}>
              {filteredDealers.map((dealer, index) => (
                <div
                  key={dealer.id}
                  className="bg-white rounded-3xl shadow-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 border border-gray-100"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: 'fadeInUp 0.6s ease-out forwards'
                  }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={dealer.image}
                      alt={dealer.name}
                      className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110"
                    />
                    {dealer.distance && (
                      <div
                        className={`absolute top-4 ${
                          isRTL ? "right-4" : "left-4"
                        } px-4 py-2 rounded-full text-sm font-bold shadow-lg transform transition-all duration-300 hover:scale-105`}
                        style={{ backgroundColor: "#203F84", color: "#fff" }}
                      >
                        📍 {dealer.distance}
                      </div>
                    )}
                  </div>

                  <div className="p-8 transform transition-all duration-500">
                    <h3
                      className="text-2xl font-bold mb-3 transform transition-all duration-300 hover:scale-105"
                      style={{ color: "#203F84" }}
                    >
                      {dealer.name}
                    </h3>
                    <p className="text-gray-700 mb-3 flex items-start gap-2 transition-all duration-300">
                      <span className="text-lg transform transition-all duration-300 hover:scale-110">📍</span>
                      <span className="transition-all duration-300">{dealer.address}</span>
                    </p>
                    <p className="text-gray-700 mb-4 flex items-center gap-2 transition-all duration-300">
                      <span className="text-lg transform transition-all duration-300 hover:scale-110">🕒</span>
                      <span className="transition-all duration-300">
                        <strong>{t("working_hours_label")}:</strong>{" "}
                        {dealer.workingHours}
                      </span>
                    </p>
                    <div className="flex flex-wrap gap-3 mb-6 transition-all duration-500">
                      {dealer.services.map((service, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 rounded-full text-sm font-semibold shadow-sm transform transition-all duration-300 hover:scale-105"
                          style={{
                            backgroundColor: "#E8EBF5",
                            color: "#203F84",
                          }}
                        >
                          ✓ {service}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3 transition-all duration-500">
                      <a
                        href={`tel:${dealer.phone}`}
                        className="flex-1 py-4 rounded-xl font-bold text-center transform transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg"
                        style={{ backgroundColor: "#203F84", color: "#fff" }}
                      >
                        📞 {t("call_now")}
                      </a>

                      <a
                        href={dealer.mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-4 rounded-xl font-bold text-center transform transition-all duration-300 hover:scale-105 active:scale-95 border-2"
                        style={{
                          backgroundColor: "transparent",
                          color: "#203F84",
                          borderColor: "#203F84",
                        }}
                      >
                        🗺️ {t("get_directions")}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className={`text-center text-gray-600 transition-all duration-500 ${
              isLoading ? 'opacity-50' : 'opacity-100'
            }`}>
              {isLoading ? t("searching") : t("no_stores_found")}
            </p>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`py-20 bg-gradient-to-b from-white to-gray-50 transition-all duration-1000 ${
        showResults ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="container mx-auto px-4 max-w-5xl">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 transform transition-all duration-700 hover:scale-105"
            style={{ color: "#203F84" }}
          >
            {t("faq_title")}
          </h2>

          <div className="space-y-5 transition-all duration-500">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl p-7 cursor-pointer transition-all duration-500 border border-gray-100 transform hover:-translate-y-1"
              >
                <summary
                  className="font-semibold text-lg transform transition-all duration-300 cursor-pointer hover:scale-105"
                  style={{ color: "#203F84" }}
                >
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed transition-all duration-500">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default SearchDealerPage;