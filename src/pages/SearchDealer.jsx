import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "sonner";

const SearchDealerPage = ({
  title,
  subtitle,
  backgroundImage = "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&h=1080&fit=crop",
}) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  const initialDealers = [
    {
      id: 1,
      name: t("store_idlib"),
      city: t("idlib"),
      address: t("maarat_al_nasan") + ", " + t("idlib") + ", " + t("syria"),
      phone: "+90 555 000 40 00",
      mapLink: "https://maps.app.goo.gl/n3chLYJreJ8qNGh29",
      distance: "",
      rating: 4.8,
      reviews: 156,
      workingHours: t("saturday_thursday") + ": 9:00 ص - 8:00 م",
      services: [t("free_consultation"), t("customer_service_24_7")],
      image:
        "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&h=600&fit=crop",
      keywords: [
        "idlib",
        "idlip",
        "ادلب",
        "إدلب",
        "maarat al nasan",
        "معرة النعسان",
        "syria",
        "سوريا",
        "store",
        "dealer",
        "paint",
        "دهان",
        "متجر",
        "وكيل",
      ],
    },
  ];

  const faqs = [
    { question: t("faq_question_1"), answer: t("faq_answer_1") },
    { question: t("faq_question_2"), answer: t("faq_answer_2") },
    { question: t("faq_question_3"), answer: t("faq_answer_3") },
    { question: t("faq_question_4"), answer: t("faq_answer_4") },
  ];

  const [filteredDealers, setFilteredDealers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleLocationClick = () => {
    if (!navigator.geolocation) {
      toast.error(t("location_not_supported"));
      return;
    }

    setIsLoading(true);
    setShowResults(false);

    navigator.geolocation.getCurrentPosition(
      () => {
        const updatedDealers = initialDealers.map((dealer) => ({
          ...dealer,
          distance: "2.5 " + t("distance_km"),
        }));
        setTimeout(() => {
          setFilteredDealers(updatedDealers);
          setIsLoading(false);
          setShowResults(true);
        }, 1500);
      },
      () => {
        toast.error(t("location_error"));
        setIsLoading(false);
      }
    );
  };

  return (
    <div dir={isRTL ? "rtl" : "ltr"} className="relative">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center min-h-screen w-full flex items-center justify-center relative overflow-hidden py-20"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/40"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h1
              className="text-5xl md:text-6xl font-bold mb-8 leading-tight drop-shadow-2xl"
              style={{ color: "#ffffff" }}
            >
              {title || t("dealer_page_title")}
            </h1>
            <p
              className="text-xl md:text-2xl mb-16 font-medium drop-shadow-xl"
              style={{ color: "#ffffff" }}
            >
              {subtitle || t("dealer_page_subtitle")}
            </p>

            <div className="flex justify-center">
              <button
                onClick={handleLocationClick}
                disabled={isLoading}
                className="flex items-center justify-center gap-3 hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: "#203F84",
                  color: "#fff",
                  padding: "1.25rem 3rem",
                  borderRadius: "1rem",
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  transition: "all 0.3s",
                  cursor: isLoading ? "not-allowed" : "pointer",
                  opacity: isLoading ? 0.7 : 1,
                  boxShadow: "0 4px 15px rgba(32, 63, 132, 0.3)",
                }}
              >
                {isLoading && (
                  <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                )}
                <span>{t("use_current_location")}</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-4">
            <h2
              className="text-4xl md:text-5xl font-bold text-center mb-16"
              style={{ color: "#203F84" }}
            >
              {t("nearby_stores")}
            </h2>

            {filteredDealers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDealers.map((dealer) => (
                  <div
                    key={dealer.id}
                    className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-3 border border-gray-100"
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={dealer.image}
                        alt={dealer.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                      {dealer.distance && (
                        <div
                          className={`absolute top-4 ${
                            isRTL ? "right-4" : "left-4"
                          } px-4 py-2 rounded-full text-sm font-bold shadow-lg`}
                          style={{ backgroundColor: "#203F84", color: "#fff" }}
                        >
                          📍 {dealer.distance}
                        </div>
                      )}
                    </div>

                    <div className="p-8">
                      <h3
                        className="text-2xl font-bold mb-3"
                        style={{ color: "#203F84" }}
                      >
                        {dealer.name}
                      </h3>
                      <p className="text-gray-700 mb-3 flex items-start gap-2">
                        <span className="text-lg">📍</span>
                        <span>{dealer.address}</span>
                      </p>
                      <p className="text-gray-700 mb-4 flex items-center gap-2">
                        <span className="text-lg">🕒</span>
                        <span>
                          <strong>{t("working_hours_label")}:</strong>{" "}
                          {dealer.workingHours}
                        </span>
                      </p>
                      <div className="flex flex-wrap gap-3 mb-6">
                        {dealer.services.map((service, index) => (
                          <span
                            key={index}
                            className="px-4 py-2 rounded-full text-sm font-semibold shadow-sm"
                            style={{
                              backgroundColor: "#E8EBF5",
                              color: "#203F84",
                            }}
                          >
                            ✓ {service}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-3">
                        <a
                          href={`tel:${dealer.phone}`}
                          className="flex-1 py-4 rounded-xl font-bold text-center transition-all hover:scale-105 active:scale-95 shadow-lg"
                          style={{ backgroundColor: "#203F84", color: "#fff" }}
                        >
                          📞 {t("call_now")}
                        </a>

                        <a
                          href={dealer.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-4 rounded-xl font-bold text-center transition-all hover:scale-105 active:scale-95 border-2"
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
              <p className="text-center text-gray-600">
                {isLoading ? t("searching") : t("no_stores_found")}
              </p>
            )}
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{ color: "#203F84" }}
          >
            {t("faq_title")}
          </h2>

          <div className="space-y-5">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl p-7 cursor-pointer transition-all duration-300 border border-gray-100"
              >
                <summary
                  className="font-semibold text-lg"
                  style={{ color: "#203F84" }}
                >
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchDealerPage;
