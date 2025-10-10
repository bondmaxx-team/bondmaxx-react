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

        <style>
          {`
@keyframes shine {
  0% { transform: translateX(-100%); opacity: 0; }
  50% { opacity: 0.6; }
  100% { transform: translateX(100%); opacity: 0; }
}
`}
        </style>

        <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg mt-6">
          {t("description")}
        </p>

        <div className="flex justify-center pt-8">
          <button
            onClick={onDiscoverColors}
            className="group relative flex items-center gap-3 px-12 py-5 font-bold text-lg text-white rounded-full bg-[#203F84] shadow-xl hover:bg-[#1a3369] hover:shadow-2xl transition-all duration-300"
          >
            <i className="fas fa-palette text-lg text-white" />
            <span>{t("cta_button")}</span>
            <span
              className="ml-2 font-extrabold text-white"
              style={{
                textShadow: "0 2px 6px rgba(0,0,0,0.3)",
              }}
            ></span>

            {/* لمعة ناعمة عند hover */}
            <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
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
      `}</style>
    </section>
  );
};

export default HeroSection;
