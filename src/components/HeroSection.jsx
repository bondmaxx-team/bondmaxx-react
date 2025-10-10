import { useTranslation } from "react-i18next";
import heroImage from "../assets/22.jpeg";

const HeroSection = ({ onDiscoverColors }) => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* الخلفية */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/30 to-black/50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12 animate-fade-in">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight text-center">
          <span className="text-white drop-shadow-2xl">{t("main_title")}</span>

          <span
            className="inline-block mt-4 px-8 py-3 rounded-full border border-white/40 bg-white/10 backdrop-blur-md text-[#203F84] font-extrabold shadow-lg hover:bg-white/20 hover:shadow-2xl transition-all duration-300 relative"
            style={{
              textShadow: "0 2px 6px rgba(32,63,132,0.4)",
            }}
          >
            BONDMAXX
            <span className="absolute inset-0 rounded-full bg-white/30 opacity-0 hover:opacity-100 transition-opacity blur-md"></span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg mt-6">
          {t("description")}
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
            {/* تأثير الموجة المائية الأفقية */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out shimmer"></span>

            {/* تأثير الفقاعات الصاعدة */}
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="bubble bubble-1"></span>
              <span className="bubble bubble-2"></span>
              <span className="bubble bubble-3"></span>
              <span className="bubble bubble-4"></span>
            </span>

            {/* تأثير Ripple الدائري */}
            <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-150 transition-all duration-700 ease-out"></span>

            {/* تأثير التوهج الأزرق المائي */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/30 via-cyan-300/30 to-blue-400/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 animate-pulse-slow"></span>

            <i
              className="fas fa-palette text-lg relative z-10 group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300"
              style={{ color: "#203F84" }}
            />
            <span
              className="relative z-10 font-extrabold"
              style={{
                color: "#203F84",
                textShadow: "0 2px 4px rgba(32, 63, 132, 0.2)",
              }}
            >
              {t("cta_button")}
            </span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
          {[
            { icon: "fa-certificate", text: t("quality_guarantee") },
            { icon: "fa-swatchbook", text: t("colors_count") },
            { icon: "fa-leaf", text: t("eco_friendly") },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-3 text-white"
            >
              <div className="relative flex items-center justify-center w-16 h-16 rounded-full backdrop-blur-md bg-gradient-to-br from-white/20 to-white/10 border border-white/30 shadow-md">
                <i className={`fas ${feature.icon} text-2xl text-[#203F84]`} />
              </div>
              <span className="font-semibold text-blue-50">{feature.text}</span>
            </div>
          ))}
        </div>
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
