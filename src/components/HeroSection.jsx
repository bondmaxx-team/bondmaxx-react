import { useTranslation } from "react-i18next";
import heroImage from "../assets/22.jpeg"; // استيراد الصورة

const HeroSection = ({ onDiscoverColors }) => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: `url(${heroImage})`, // استخدام الصورة المحلية
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-black/30 to-black/50" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-600 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-12">
        <div className="space-y-10 animate-fade-in">
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="text-white drop-shadow-2xl">
              {t("main_title")}
            </span>
            <span className="block mt-3 bg-gradient-to-r from-cyan-500 via-blue-500 to-blue-500 bg-clip-text text-transparent filter drop-shadow-lg">
              {t("brand_name")}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg">
            {t("description")}
          </p>

          {/* CTA Button */}
          <div className="flex justify-center pt-4">
            <button
              onClick={onDiscoverColors}
              className="group relative px-10 py-5 bg-gradient-to-r from-blue-500 to-blue-500 hover:from-blue-700 hover:to-cyan-600 text-white rounded-full font-bold text-lg shadow-2xl shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/60"
            >
              <span className="flex items-center gap-3">
                <i className="fas fa-palette text-xl" />
                <span>{t("cta_button")}</span>
                <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 sm:pt-12 max-w-3xl mx-auto">
            {[
              {
                icon: "fa-certificate",
                text: t("quality_guarantee"),
                color: "text-blue-400",
              },
              {
                icon: "fa-swatchbook",
                text: t("colors_count"),
                color: "text-blue-400",
              },
              {
                icon: "fa-leaf",
                text: t("eco_friendly"),
                color: "text-blue-400",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group flex items-center justify-center gap-3 text-blue-500 hover:text-cyan-500 transition-all duration-300 px-4 py-3 rounded-xl"
              >
                <i
                  className={`fas ${feature.icon} ${feature.color} text-sm sm:text-xl transition-colors drop-shadow-lg`}
                />
                <span className="font-semibold">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes subtle-zoom {
          0%,
          100% {
            transform: scale(1.05);
          }
          50% {
            transform: scale(1.08);
          }
        }

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

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.1);
          }
        }

        .animate-subtle-zoom {
          animation: subtle-zoom 20s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
