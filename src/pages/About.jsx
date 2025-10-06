import { Link, useLocation, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/1.jpeg";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const industries = [
    {
      icon: "fa-home",
      title: t("residential_sector"),
      description: t("residential_description"),
    },
    {
      icon: "fa-building",
      title: t("commercial_sector"),
      description: t("commercial_description"),
    },
    {
      icon: "fa-industry",
      title: t("industrial_sector"),
      description: t("industrial_description"),
    },
    {
      icon: "fa-ship",
      title: t("marine_sector"),
      description: t("marine_description"),
    },
  ];

  const handleClick = () => {
    const targetId = "products-section";

    if (location.pathname === "/") {
      document.getElementById(targetId)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
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
        <div className="relative py-28 md:py-36">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105 transform transition-transform duration-700 hover:scale-110"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          ></div>

          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

          <div className="max-w-6xl mx-auto px-6 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 drop-shadow-lg tracking-wide leading-tight">
              {t("about_bondmaxx")}
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-10 text-blue-100 drop-shadow-md">
              {t("bring_colors_to_life")} ✨
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <p className="text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-md text-gray-200">
                {t("intro_paragraph_1")}
              </p>
              <p className="text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-md text-gray-200">
                {t("intro_paragraph_2")}
              </p>
            </div>
          </div>
        </div>

        <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 py-14 md:py-20 shadow-lg">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-snug drop-shadow-md">
              {t("choose_bondmaxx")} 🌟 <br />
              {t("elevate_experience")}
            </p>
            <button
              onClick={handleClick}
              className="inline-block mt-8 px-8 py-4 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition"
            >
              {t("discover_products")}
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-800">
              {t("industries_we_serve")}
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto my-8"></div>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t("industries_description")}
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

      <section className="relative py-16 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-80 h-80 bg-blue-300 rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
            {t("ready_to_transform")}
          </h3>
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {t("cta_description")}
          </p>
          <button
            onClick={() => window.open("https://wa.me/905550004000", "_blank")}
            className="bg-white text-blue-600 px-8 md:px-10 py-3 md:py-4 rounded-full text-base md:text-lg font-bold hover:bg-blue-50 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {t("contact_now")}
          </button>
        </div>
      </section>
    </div>
  );
}
