import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import heroImage from "../assets/22.jpeg";
import heroImage1 from "../assets/car1.png";
import heroImage2 from "../assets/fire1.jpg";

const HeroSection = ({ onDiscoverColors }) => {
  const { t, i18n } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroImage,
      showFullContent: true,
      texts: {
        ar: {},
        en: {},
        tr: {},
        de: {},
      },
    },
    {
      image: heroImage1,
      showFullContent: false,
      texts: {
        ar: {
          line1: "لأول مرة في سوريا تصنيع طلاء",
          line2: "سيارات ينافس المنتجات الأوروبية",
        },
        en: {
          line1: "For the first time in Syria, manufacturing paint",
          line2: "Cars competing with European products",
        },
        tr: {
          line1: "Suriye'de ilk kez boya üretimi",
          line2: "Avrupa ürünleriyle rekabet eden arabalar",
        },
        de: {
          line1: "Zum ersten Mal in Syrien Farbherstellung",
          line2: "Autos konkurrieren mit europäischen Produkten",
        },
      },
    },
    {
      image: heroImage2,
      showFullContent: false,
      texts: {
        ar: {
          line1: "الأول على",
          line2: "مستوى الشرق الأوسط في",
          line3: "تصنيع طلاء ضد الحريق",
        },
        en: {
          line1: "The first in",
          line2: "The Middle East in",
          line3: "Manufacturing fireproof paint",
        },
        tr: {
          line1: "İlk sırada",
          line2: "Orta Doğu'da",
          line3: "Yangına dayanıklı boya üretimi",
        },
        de: {
          line1: "Der Erste in",
          line2: "Der Nahe Osten in",
          line3: "Herstellung feuerfester Farbe",
        },
      },
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentLang = i18n.language || "ar";
  const currentText =
    slides[currentSlide].texts[currentLang] || slides[currentSlide].texts.ar;
  const showFullContent = slides[currentSlide].showFullContent;

  return (
    <section className="relative min-h-screen flex items-center justify-center mb-28">
      {/* صور السلايدر */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000  ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat "
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/30 to-black/50" />
          </div>
        ))}
      </div>

      {/* أسهم التنقل - تحت الهيرو */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 z-30 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="bg-[#203F84]/80 hover:bg-[#203F84] backdrop-blur-md p-3 md:p-4 rounded-full transition-all duration-300 border border-[#203F84] shadow-xl group"
          aria-label="Previous slide"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* مؤشرات السلايد */}
        <div className="flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 md:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-[#203F84] w-6 md:w-8 shadow-lg"
                  : "bg-[#203F84] hover:bg-[#203F84]/60 w-2 md:w-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="bg-[#203F84]/80 hover:bg-[#203F84] backdrop-blur-md p-3 md:p-4 rounded-full transition-all duration-300 border border-[#203F84] shadow-xl group"
          aria-label="Next slide"
        >
          <svg
            className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:scale-110 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <div className="z-10 max-w-4xl mx-auto px-6 text-center flex flex-col justify-center h-screen">
        {/* المحتوى حسب السلايد */}
        {showFullContent ? (
          // الصورة الأساسية مع كل العناصر
          <>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-white drop-shadow-2xl block mb-3 sm:mb-4">
                {t("main_title")}
              </span>

              <span
                className="inline-block px-8 sm:px-10 md:px-12 py-3 sm:py-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-[#203F84] font-extrabold shadow-lg hover:bg-white/20 hover:shadow-2xl transition-all duration-300 relative"
                style={{
                  textShadow: "0 0 5px white",
                }}
              >
                BONDMAXX
                <span className="absolute inset-0 rounded-full bg-white/30 opacity-0 hover:opacity-100 transition-opacity blur-md"></span>
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white max-w-4xl mx-auto leading-relaxed font-medium drop-shadow-lg mt-6 px-4">
              اكتشفوا تشكيلة متنوعة من الطلاء الفاخرة وملحقاتها، حيث تلبي
              منتجاتنا أعلى معايير الجودة وأسعار مناسبة لتكونوا دائمًا في
              المقدمة
            </p>

            <div className="flex justify-center pt-8">
              <button
                onClick={onDiscoverColors}
                className="group relative flex items-center gap-3 px-12 py-5 font-bold text-lg rounded-full border-2 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden backdrop-blur-md"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  borderColor: "#203F84",
                  color: "#203F84",
                }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out shimmer"></span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="bubble bubble-1"></span>
                  <span className="bubble bubble-2"></span>
                  <span className="bubble bubble-3"></span>
                  <span className="bubble bubble-4"></span>
                </span>
                <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-150 transition-all duration-700 ease-out"></span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 via-cyan-300/30 to-blue-400/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 animate-pulse-slow"></span>
                <i className="text-2xl md:text-3xl relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" />
                <span
                  className="relative z-10 font-extrabold text-xl md:text-2xl"
                  style={{
                    textShadow: "0 0 2px white",
                  }}
                >
                  {t("slogan")}
                </span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-16 max-w-4xl mx-auto">
              {[
                {
                  icon: "fa-hand-holding-usd",
                  text: t("competitive_prices"),
                },
                {
                  icon: "fa-certificate",
                  text: t("quality_guarantee"),
                },
                {
                  icon: "fa-swatchbook",
                  text: t("colors_count"),
                },
                {
                  icon: "fa-tools",
                  text: t("american_technology"),
                },
                {
                  icon: "fa-users",
                  text: t("lebanese_expertise"),
                },
                {
                  icon: "fa-leaf",
                  text: t("german_materials"),
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center gap-2 text-white group"
                >
                  <div className="flex items-center justify-center w-14 h-14 rounded-full backdrop-blur-md bg-gradient-to-br from-white/20 to-white/10 border-2 border-white/30 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <i
                      className={`fas ${feature.icon} text-xl text-[#203F84]`}
                      style={{
                        filter: "drop-shadow(0 0 3px rgba(255, 255, 255, 0.8))",
                        textShadow: "0 0 3px rgba(255, 255, 255, 0.8)",
                      }}
                    />
                  </div>
                  <span className="font-semibold text-sm text-blue-50 text-center">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div key={`${currentSlide}-${currentLang}`}>
            {/* كلمة قريباً - في الزاوية اليمنى العلوية */}
            <div className="absolute top-4 md:top-6 right-4 md:right-8 z-20">
              <div
                className="inline-block px-6 md:px-8 py-2 md:py-2.5 text-lg md:text-xl lg:text-2xl rounded-xl border-2 border-[#203F84]/70 bg-gradient-to-br from-[#203F84]/20 to-[#203F84]/10 backdrop-blur-md text-white font-bold shadow-2xl"
                style={{
                  textShadow:
                    "0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(32, 63, 132, 0.6)",
                }}
              >
                {currentLang === "ar" && "قريباً"}
                {currentLang === "en" && "Coming Soon"}
                {currentLang === "tr" && "Yakında"}
                {currentLang === "de" && "Demnächst"}
              </div>
            </div>

            <div className="space-y-4 md:space-y-6 max-w-5xl mx-auto pt-16 md:pt-20">
              {/* العنوان الرئيسي */}
              <div className="space-y-2 md:space-y-3">
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight px-4"
                  style={{
                    textShadow:
                      "0 0 20px rgba(32, 63, 132, 0.8), 0 0 40px rgba(32, 63, 132, 0.6), 0 0 60px rgba(32, 63, 132, 0.4)",
                    filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))",
                  }}
                >
                  {currentText.line1}
                </h2>
                <h2
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight px-4"
                  style={{
                    textShadow:
                      "0 0 20px rgba(32, 63, 132, 0.8), 0 0 40px rgba(32, 63, 132, 0.6), 0 0 60px rgba(32, 63, 132, 0.4)",
                    filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))",
                  }}
                >
                  {currentText.line2}
                </h2>
                {currentText.line3 && (
                  <h2
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight px-4"
                    style={{
                      textShadow:
                        "0 0 20px rgba(32, 63, 132, 0.8), 0 0 40px rgba(32, 63, 132, 0.6), 0 0 60px rgba(32, 63, 132, 0.4)",
                      filter: "drop-shadow(0 10px 30px rgba(0, 0, 0, 0.5))",
                    }}
                  >
                    {currentText.line3}
                  </h2>
                )}
              </div>

              {/* خط فاصل مع تأثير وهج */}
              <div className="flex justify-center items-center gap-3 py-3">
                <div className="h-0.5 w-16 md:w-24 bg-gradient-to-r from-transparent via-[#203F84] to-transparent rounded-full opacity-60"></div>
                <div className="w-2 h-2 rounded-full bg-[#203F84] animate-pulse shadow-lg shadow-[#203F84]/50"></div>
                <div className="h-0.5 w-16 md:w-24 bg-gradient-to-r from-transparent via-[#203F84] to-transparent rounded-full opacity-60"></div>
              </div>

              <div className="flex justify-center">
                <div
                  className="inline-block px-6 md:px-10 py-2 md:py-3 text-xl md:text-2xl lg:text-3xl rounded-full border-2 border-white/40 bg-white/10 backdrop-blur-md text-[#203F84] font-extrabold shadow-xl hover:bg-white/20 hover:shadow-2xl transition-all duration-300"
                  style={{
                    textShadow: "0 0 15px rgba(255, 255, 255, 0.8)",
                  }}
                >
                  BONDMAXX
                </div>
              </div>

              <div className="flex justify-center gap-4 md:gap-6 pt-3">
                {[
                  {
                    icon: "fa-certificate",
                    text: currentSlide === 1 ? "معتمد دولياً" : "حماية كاملة",
                  },
                  { icon: "fa-star", text: "جودة مضمونة" },
                  { icon: "fa-shield-alt", text: "ضمان طويل" },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-1.5 group"
                  >
                    <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full backdrop-blur-md bg-gradient-to-br from-white/20 to-white/10 border-2 border-white/30 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <i
                        className={`fas ${feature.icon} text-base md:text-xl text-[#203F84]`}
                        style={{
                          filter:
                            "drop-shadow(0 0 5px rgba(255, 255, 255, 0.9))",
                          textShadow: "0 0 5px rgba(255, 255, 255, 0.9)",
                        }}
                      />
                    </div>
                    <span className="text-[10px] md:text-xs font-bold text-white text-center">
                      {feature.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* التأثيرات */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }

        @keyframes bubble-rise {
          0% {
            transform: translateY(0) scale(0);
            opacity: 0;
          }
          20% {
            opacity: 1;
          }
          100% {
            transform: translateY(-60px) scale(1);
            opacity: 0;
          }
        }

        .bubble {
          position: absolute;
          bottom: 0;
          background: rgba(32, 63, 132, 0.4);
          border-radius: 50%;
          pointer-events: none;
        }

        .bubble-1 {
          left: 20%;
          width: 8px;
          height: 8px;
          animation: bubble-rise 2s ease-in-out infinite;
          animation-delay: 0s;
        }

        .bubble-2 {
          left: 40%;
          width: 12px;
          height: 12px;
          animation: bubble-rise 2.3s ease-in-out infinite;
          animation-delay: 0.3s;
        }

        .bubble-3 {
          left: 60%;
          width: 10px;
          height: 10px;
          animation: bubble-rise 2.5s ease-in-out infinite;
          animation-delay: 0.6s;
        }

        .bubble-4 {
          left: 80%;
          width: 9px;
          height: 9px;
          animation: bubble-rise 2.2s ease-in-out infinite;
          animation-delay: 0.9s;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        @keyframes shine {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }

        .shimmer {
          animation: shine 2s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
