import { Link, useLocation, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/1.jpeg";

export default function About() {
  const navigate = useNavigate();
  const location = useLocation();

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

  const handleClick = () => {
    const targetId = "products-section";

    if (location.pathname === "/") {
      // Already on home → smooth scroll
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      // Not on home → go to home and scroll after mount
      navigate("/", { state: { scrollTo: targetId } });
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-50"
      dir="rtl"
      style={{ fontFamily: "Cairo, Tajawal, Arial, sans-serif" }}
    >
      <section className="relative text-white overflow-hidden">
        {/* Hero Section */}
        <div className="relative py-28 md:py-36">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform transition-transform duration-700 hover:scale-110"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

          {/* Content */}
          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-wide leading-tight">
              حول <span className="text-blue-400">بوندماكس</span>
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 text-blue-100 drop-shadow-md">
              نُضفي الحياة على الألوان ✨
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-md text-gray-200">
                في <span className="font-semibold text-white">بوندماكس</span>،
                لا نبيع الدهانات فحسب، بل نوفر الألوان التي تُغير عالمك. متخصصون
                في طلاءات الديكور الداخلي والخارجي والسيارات والبحرية، نُحوّل كل
                مساحة وسطح إلى انعكاس لذوقك وطموحك.
              </p>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-md text-gray-200">
                باستخدام أحدث التقنيات ومواد عالية الجودة، نقدم تشطيبات لا تتميز
                فقط بالحيوية والمتانة الاستثنائية، بل تُحافظ أيضًا على البيئة.
                بوندماكس شريكك في الحماية والجمال، مما يضمن لمشاريعك أن تصمد
                أمام اختبار الزمن والذوق الرفيع.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 py-14 md:py-20 shadow-lg">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-snug drop-shadow-md">
              اختر <span className="text-yellow-300">بوندماكس</span> 🌟 <br />
              لا تُغيّر اللون فحسب، بل ارتقِ بتجربة مميزة
            </p>
            <button
              onClick={handleClick}
              className="inline-block mt-8 px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              اكتشف منتجاتنا
            </button>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
              الصناعات التي نخدمها
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto my-8"></div>
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
          <button
            onClick={() => window.open("https://wa.me/905550004000", "_blank")}
            className="bg-white text-blue-600 px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-bold hover:bg-blue-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            تواصل معنا الآن
          </button>
        </div>
      </section>
    </div>
  );
}
