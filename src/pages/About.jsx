import { useLocation, useNavigate } from "react-router-dom";
import backgroundImage from "../assets/10.png";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

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
      className="min-h-screen"
      dir="rtl"
      style={{ fontFamily: "Cairo, Tajawal, Arial, sans-serif" }}
    >
      <section className="relative text-white overflow-hidden">
        <motion.div
          className="relative py-16 md:py-28 lg:py-36"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.8))",
            }}
          ></div>

          <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 drop-shadow-lg tracking-wide leading-tight">
              {t("about_bondmaxx_title")}
            </h1>

            <h2
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 md:mb-12 px-2"
              style={{
                color: "#203F84",
                textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
              }}
            >
              {t("about_bondmaxx_subtitle")}
            </h2>

            <div className="max-w-5xl mx-auto space-y-4 sm:space-y-6 md:space-y-8">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-md text-gray-200 px-2">
                {t("about_bondmaxx_paragraph_1")}
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-md text-gray-200 px-2">
                {t("about_bondmaxx_paragraph_2")}
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-md text-gray-200 px-2">
                {t("about_bondmaxx_paragraph_3")}
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-md text-gray-200 px-2">
                {t("about_bondmaxx_paragraph_4")}
              </p>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-md text-gray-200 px-2">
                {t("about_bondmaxx_paragraph_5")}
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="relative py-10 sm:py-14 md:py-20 shadow-lg"
          style={{ backgroundColor: "#203F84" }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-snug drop-shadow-md px-2">
              {t("elevate_experience")} 🌟
            </p>

            <button
              onClick={handleClick}
              className="inline-block mt-6 sm:mt-8 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-bold rounded-full shadow-lg hover:opacity-90 transition-all duration-300 hover:scale-105"
              style={{ backgroundColor: "#fff", color: "#203F84" }}
            >
              {t("discover_products")}
            </button>
          </div>
        </motion.div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 px-2"
              style={{ color: "#203F84" }}
            >
              {t("industries_we_serve")}
            </h2>
            <div
              className="w-20 sm:w-24 h-1 mx-auto my-6 sm:my-8"
              style={{ backgroundColor: "#203F84" }}
            ></div>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              {t("industries_description")}
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 border border-gray-200 hover:shadow-xl hover:-translate-y-2"
              >
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ backgroundColor: "#203F84" }}
                ></div>

                <div className="relative z-10">
                  <div
                    className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: "#E0E4F0" }}
                  >
                    <i
                      className={`fas ${industry.icon} text-3xl sm:text-4xl`}
                      style={{ color: "#203F84" }}
                    ></i>
                  </div>

                  <h3
                    className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 transition-colors"
                    style={{ color: "#203F84" }}
                  >
                    {industry.title}
                  </h3>

                  <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed">
                    {industry.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <motion.section
        className="relative py-12 sm:py-16 overflow-hidden"
        style={{
          background: "linear-gradient(to right, #203F84, #203F84, #1B326E)",
        }}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-40 sm:w-64 h-40 sm:h-64 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-48 sm:w-80 h-48 sm:h-80 bg-white rounded-full filter blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-2">
            {t("ready_to_transform")}
          </h3>

          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            {t("cta_description")}
          </p>

          <button
            onClick={() => window.open("https://wa.me/905550004000", "_blank")}
            className="px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-bold hover:opacity-90 transform hover:scale-105 transition-all duration-300"
            style={{ backgroundColor: "#fff", color: "#203F84" }}
          >
            {t("contact_now")}
          </button>
        </div>
      </motion.section>
    </div>
  );
}
