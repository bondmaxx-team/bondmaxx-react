import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  // const socialLinks = [
  //   { icon: "fab fa-facebook-f", hoverColor: "#203F84" },
  //   { icon: "fab fa-twitter", hoverColor: "#203F84" },
  //   { icon: "fab fa-instagram", hoverColor: "#203F84" },
  //   { icon: "fab fa-linkedin-in", hoverColor: "#203F84" },
  // ];

  const products = [
    {
      icon: "fas fa-home",
      label: t("interior_paints"),
      href: "/interior-colors",
    },
    {
      icon: "fas fa-building",
      label: t("exterior_paints"),
      href: "/exterior-colors",
    },
    {
      icon: "fas fa-palette",
      label: t("color_collection"),
      href: "/color-collection",
    },
  ];

  const services = [
    {
      icon: "fas fa-comments",
      label: t("color_consultation"),
      href: "https://wa.me/905550004000",
    },
    {
      icon: "fas fa-chalkboard-teacher",
      label: t("technical_training"),
      href: "https://wa.me/905550004000",
    },
    {
      icon: "fas fa-tools",
      label: t("technical_support"),
      href: "https://wa.me/905550004000",
    },
    {
      icon: "fas fa-certificate",
      label: t("quality_guarantee_footer"),
      href: "#",
    },
    {
      icon: "fas fa-search",
      label: t("search_dealer"),
      href: "/search-dealer",
    },
  ];

  const contactInfo = [
    {
      type: "whatsapp",
      icon: "fab fa-whatsapp",
      label: t("phone_number"),
      href: "https://wa.me/905550004000",
    },
    {
      type: "email",
      icon: "fas fa-envelope",
      label: t("email_address"),
      href: "mailto:info@bondmaxx.com",
    },
    {
      icon: "fas fa-map-marker-alt",
      label: t("location"),
      href: "#",
    },
    {
      type: "other",
      icon: "fas fa-clock",
      label: t("working_hours"),
      href: "#",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-12 px-6">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">
        {/* BONDMAXX Section */}
        <div>
          <h3 className="text-xl font-bold mb-5" style={{ color: "#203F84" }}>
            {t("company_name")}
          </h3>
          <p className="text-gray-300 mb-5 leading-relaxed">
            {t("company_description")}
          </p>
          {/* <div className="flex gap-4 mt-4">
            {socialLinks.map((social, index) => (
              <div
                key={index}
                className="w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg cursor-pointer transition"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = social.hoverColor;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255, 255, 255, 0.1)";
                }}
              >
                <i className={social.icon}></i>
              </div>
            ))}
          </div> */}
        </div>

        {/* Products Section - المنتجات */}
        <div>
          <h3 className="text-xl font-bold mb-5" style={{ color: "#203F84" }}>
            {t("products_title")}
          </h3>
          <ul className="space-y-3">
            {products.map((product, index) => (
              <li key={index}>
                <Link
                  to={product.href}
                  className="flex items-center gap-2 text-gray-300 transition group"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#203F84";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#d1d5db";
                  }}
                >
                  <i
                    className={product.icon}
                    style={{ color: "#203F84", transition: "all 0.3s" }}
                  ></i>
                  <span>{product.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services Section - الخدمات */}
        <div>
          <h3 className="text-xl font-bold mb-5" style={{ color: "#203F84" }}>
            {t("services_title")}
          </h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <Link
                  to={service.href}
                  className="flex items-center gap-2 text-gray-300 transition group"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#203F84";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#d1d5db";
                  }}
                >
                  <i
                    className={service.icon}
                    style={{ color: "#203F84", transition: "all 0.3s" }}
                  ></i>
                  <span>{service.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Section - تواصل معنا */}
        <div>
          <h3 className="text-xl font-bold mb-5" style={{ color: "#203F84" }}>
            {t("contact_title")}
          </h3>
          <ul className="space-y-3">
            {contactInfo.map((contact, index) => (
              <li key={index}>
                <Link
                  to={contact.href}
                  className="flex items-center gap-2 text-gray-300 transition group"
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#203F84";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#d1d5db";
                  }}
                >
                  <i
                    className={contact.icon}
                    style={{ color: "#203F84", transition: "all 0.3s" }}
                  ></i>

                  {contact.type === "whatsapp" ? (
                    // Force phone number to stay LTR
                    <span dir="ltr" className="font-mono tracking-wide">
                      {contact.label}
                    </span>
                  ) : (
                    <span>{contact.label}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-8 mt-10">
        <div className="text-center text-gray-300 text-sm leading-relaxed space-y-2">
          <p className="mb-3">
            &copy; {new Date().getFullYear()} {t("all_rights_reserved")}
            <span className="font-semibold text-white mx-1">
              {t("company_name")}
            </span>
          </p>
          <p className="text-xs text-gray-400">
            {t("designed_by")}
            <span className="font-semibold text-gray-200 mx-1">
              {t("dev_team")}
            </span>
          </p>
        </div>
      </div>

      <a
        href="https://wa.me/905550004000"
        target="_blank"
        rel="noopener noreferrer"
        title={t("whatsapp_contact")}
        className="fixed bottom-5 right-5 w-12 h-12 md:w-16 md:h-16 z-50 cursor-pointer animate-bounce"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-full h-full transform transition-transform duration-300 hover:scale-110"
        />
      </a>

      <div className="text-center py-6">
        <Link
          to="/Imprint"
          className="mx-2 text-gray-600 transition"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#203F84";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#4b5563";
          }}
        >
          Imprint
        </Link>
        |
        <Link
          to="/PrivacyPolicy"
          className="mx-2 text-gray-600 transition"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#203F84";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#4b5563";
          }}
        >
          Privacy Policy
        </Link>
        |
        <Link
          to="/DataProtection"
          className="mx-2 text-gray-600 transition"
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#203F84";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#4b5563";
          }}
        >
          Data Protection
        </Link>
      </div>
    </footer>
  );
}
