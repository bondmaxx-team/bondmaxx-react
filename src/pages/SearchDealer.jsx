import React, { useState } from "react";

const initialDealers = [
  {
    id: 1,
    name: "متجر بوندماكس - دمشق",
    city: "دمشق",
    address: "شارع الحمرا، دمشق، سوريا",
    phone: "+963 11 123 4567",
    distance: "",
    rating: 4.8,
    reviews: 156,
    workingHours: "السبت - الخميس: 9:00 ص - 8:00 م",
    services: ["توصيل مجاني", "استشارات مجانية", "خدمة عملاء 24/7"],
    image: "رابط_الصورة",
  },
  {
    id: 2,
    name: "متجر بوندماكس - حلب",
    city: "حلب",
    address: "حي العزيزية، حلب، سوريا",
    phone: "+963 21 234 5678",
    distance: "",
    rating: 4.6,
    reviews: 98,
    workingHours: "السبت - الخميس: 8:30 ص - 7:30 م",
    services: ["توصيل مجاني", "خصم 10%", "كتالوج مجاني"],
    image: "رابط_الصورة",
  },
  {
    id: 3,
    name: "متجر بوندماكس - حمص",
    city: "حمص",
    address: "شارع الغوطة، حمص، سوريا",
    phone: "+963 31 345 6789",
    distance: "",
    rating: 4.7,
    reviews: 124,
    workingHours: "السبت - الخميس: 9:00 ص - 9:00 م",
    services: ["توصيل سريع", "استشارات فنية", "ضمان ممتد"],
    image: "رابط_الصورة",
  },
];

const faqs = [
  {
    question: "كيف أعرف أقرب متجر لي؟",
    answer:
      "استخدم زر 'استخدم بياناتي الموقعي' أو أدخل اسم مدينتك في خانة البحث للعثور على أقرب متجر.",
  },
  {
    question: "هل يوجد خدمة توصيل؟",
    answer:
      "نعم، معظم متاجرنا توفر خدمة التوصيل المجاني للطلبات التي تتجاوز قيمة معينة.",
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer: "نقبل الدفع نقداً عند الاستلام، بطاقات الائتمان، والتحويل البنكي.",
  },
  {
    question: "هل يمكنني الحصول على استشارة مجانية؟",
    answer:
      "نعم، جميع متاجرنا توفر استشارات مجانية من خبراء الدهانات لمساعدتك في اختيار المنتج المناسب.",
  },
];

const SearchDealerPage = ({
  title = "اعثر على متجر",
  subtitle = "اعثر على أقرب موزع لمنتجاتك",
  backgroundImage = "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&h=1080&fit=crop",
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredDealers, setFilteredDealers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSearch = () => {
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    setShowResults(false);

    setTimeout(() => {
      const results = initialDealers.filter((dealer) =>
        dealer.city.toLowerCase().includes(searchQuery.trim().toLowerCase())
      );
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
      alert("المتصفح الخاص بك لا يدعم خدمات الموقع");
      return;
    }

    setIsLoading(true);
    setShowResults(false);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // لو عندك حساب المسافة: يمكن تعديل المسافة هنا لكل متجر
        const updatedDealers = initialDealers.map((dealer) => ({
          ...dealer,
          distance: "2.5 كم", // مثال ثابت، يمكن تحسينه باستخدام موقع المستخدم
        }));
        setTimeout(() => {
          setFilteredDealers(updatedDealers);
          setIsLoading(false);
          setShowResults(true);
        }, 1500);
      },
      () => {
        alert("تعذر الحصول على موقعك. تحقق من إعدادات الموقع.");
        setIsLoading(false);
      }
    );
  };

  return (
    <div dir="rtl" className="relative">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen w-full flex items-center justify-center relative overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12">{subtitle}</p>

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
                  <span>استخدم موقعي الحالي</span>
                </button>

                <div className="relative flex-1 flex items-center">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                    placeholder="أدخل اسم المدينة"
                    className="w-full px-6 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right placeholder-gray-400 disabled:opacity-50"
                  />
                  <button
                    onClick={handleSearch}
                    disabled={isLoading}
                    className="absolute left-2 bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors"
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
              المتاجر القريبة منك
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
                        <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
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
                        ساعات العمل: {dealer.workingHours}
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
                          اتصل الآن
                        </a>
                        <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-xl font-semibold transition-colors">
                          احصل على الاتجاهات
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600">
                {isLoading
                  ? "جاري البحث..."
                  : "لم يتم العثور على أي متاجر. حاول البحث باسم مدينة أخرى."}
              </p>
            )}
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            الأسئلة الشائعة
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
