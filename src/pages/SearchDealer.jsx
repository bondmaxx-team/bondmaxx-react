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

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDealers, setFilteredDealers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setShowResults(false);

    setTimeout(() => {
      const query = searchQuery.trim().toLowerCase();

      const results = initialDealers.filter((dealer) => {
        const city = dealer.city?.toLowerCase() || "";
        const name = dealer.name?.toLowerCase() || "";
        const address = dealer.address?.toLowerCase() || "";
        const keywords = (dealer.keywords || []).map((k) => k.toLowerCase());

        // ✅ Check across city, name, address, and keywords
        return (
          city.includes(query) ||
          name.includes(query) ||
          address.includes(query) ||
          keywords.some((k) => k.includes(query))
        );
      });

      setFilteredDealers(results);
      setIsLoading(false);
      setShowResults(true);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleSearch();
  };

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
        className="bg-cover bg-center h-screen w-full flex items-center justify-center relative overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {title || t("dealer_page_title")}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12">
              {subtitle || t("dealer_page_subtitle")}
            </p>

            <div className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-95">
              <div className="flex flex-col md:flex-row gap-4">
                <button
                  onClick={handleLocationClick}
                  disabled={isLoading}
                  className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading && (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  )}
                  <span>{t("use_current_location")}</span>
                </button>

                <div className="relative flex-1 flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                    placeholder={t("enter_city_name")}
                    className={`w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      isRTL ? "text-right" : "text-left"
                    } placeholder-gray-400 disabled:opacity-50`}
                  />
                  <button
                    onClick={handleSearch}
                    disabled={isLoading}
                    className={`absolute ${
                      isRTL ? "left-2" : "right-2"
                    } bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors`}
                  >
                    🔍
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      {showResults && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
              {t("nearby_stores")}
            </h2>

            {filteredDealers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredDealers.map((dealer) => (
                  <div
                    key={dealer.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={dealer.image}
                        alt={dealer.name}
                        className="w-full h-full object-cover"
                      />
                      {dealer.distance && (
                        <div
                          className={`absolute top-4 ${
                            isRTL ? "right-4" : "left-4"
                          } bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold`}
                        >
                          {dealer.distance}
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {dealer.name}
                      </h3>
                      <p className="text-gray-600 mb-2">{dealer.address}</p>
                      <p className="text-gray-600 mb-2">
                        {t("working_hours_label")}: {dealer.workingHours}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {dealer.services.map((service, index) => (
                          <span
                            key={index}
                            className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-xs font-medium"
                          >
                            {service}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-2">
                        <a
                          href={`tel:${dealer.phone}`}
                          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold text-center transition-colors"
                        >
                          {t("call_now")}
                        </a>

                        <a
                          href={dealer.mapLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold text-center transition-colors"
                        >
                          {t("get_directions")}
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
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            {t("faq_title")}
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 cursor-pointer transition-all duration-300"
              >
                <summary className="font-semibold text-gray-900 text-lg">
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchDealerPage;
