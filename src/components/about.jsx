import backgroundImage from "../assets/1.jpeg";

export default function About() {
  const industries = [
    {
      icon: "fa-home",
      title: "القطاع السكني",
      description:
        "حلول طلاء متطورة للمنازل والشقق والفيلات مع ضمان الجودة والأناقة",
    },
    {
      icon: "fa-building",
      title: "القطاع التجاري",
      description:
        "طلاء المباني التجارية والمكاتب والمراكز التسويقية بأحدث التقنيات",
    },
    {
      icon: "fa-industry",
      title: "القطاع الصناعي",
      description:
        "حلول طلاء متخصصة للمنشآت الصناعية والمصانع مقاومة للظروف القاسية",
    },
    {
      icon: "fa-ship",
      title: "القطاع البحري",
      description:
        "طلاء السفن والمنشآت البحرية بتقنيات مقاومة للتآكل والمياه المالحة",
    },
  ];

  return (
    <div
      className="min-h-screen bg-gray-50"
      dir="rtl"
      style={{ fontFamily: "Cairo, Tajawal, Arial, sans-serif" }}
    >
      {/* Hero About Section */}
      <section className="relative text-white py-24 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center drop-shadow-lg">
            حول بوندماكس
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-center text-blue-100 drop-shadow-lg">
            نُضفي الحياة على الألوان
          </h2>

          <div className="max-w-4xl mx-auto space-y-6 text-center">
            <p className="text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-md">
              في بوندماكس، لا نبيع الدهانات فحسب، بل نوفر الألوان التي تُغير
              عالمك. متخصصون في طلاءات الديكور الداخلي والخارجي والسيارات
              والبحرية، نُحوّل كل مساحة وسطح إلى انعكاس لذوقك وطموحك.
            </p>
            <p className="text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-md">
              باستخدام أحدث التقنيات ومواد عالية الجودة لا تُضاهى، نُقدم تشطيبات
              لا تتميز فقط بالحيوية والمتانة الاستثنائية، بل تُحافظ أيضًا على
              البيئة. بوندماكس شريكك في الحماية والجمال، مما يضمن لمشاريعك أن
              تصمد أمام اختبار الزمن والذوق الرفيع.
            </p>
            <div className="pt-6">
              <p className="text-lg md:text-xl lg:text-2xl font-bold bg-white text-blue-600 inline-block px-6 md:px-8 py-3 md:py-4 rounded-full shadow-lg">
                اختر بوندماكس. لا تُغيّر اللون فحسب، بل ارتقِ بتجربة مميزة
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
              الصناعات التي نخدمها
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              نقدم حلول الطلاء المتخصصة والمبتكرة لمختلف الصناعات والقطاعات، مع
              ضمان أعلى معايير الجودة والأداء
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 text-center transition-all duration-300 border border-gray-200 hover:border-blue-500 hover:shadow-xl hover:-translate-y-2"
              >
                <div className="absolute inset-0 bg-blue-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-20 h-20 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <i
                      className={`fas ${industry.icon} text-4xl text-blue-600`}
                    ></i>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                    {industry.title}
                  </h3>

                  <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            هل أنت مستعد لتحويل مشروعك؟
          </h3>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            تواصل معنا اليوم واكتشف كيف يمكن لحلول الطلاء الاحترافية أن تُحدث
            فرقاً
          </p>
          <button className="bg-white text-blue-600 px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-bold hover:bg-blue-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            تواصل معنا الآن
          </button>
        </div>
      </section>
    </div>
  );
}
