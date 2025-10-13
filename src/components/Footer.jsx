import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === "rtl";

  const products = [
    {
      icon: "fas fa-door-open",
      label: t("interior_paints"),
      href: "/interior-colors",
    },
    {
      icon: "fas fa-building",
      label: t("exterior_paints"),
      href: "/exterior-colors",
    },
    {
      icon: "fas fa-shield-alt",
      label: t("insulation"),
      href: "/insulation",
    },
  ];

  const services = [
    {
      icon: "fas fa-comments",
      label: t("request_consultation"),
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
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white pt-12 px-6 relative">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-[var(--header-primary)]">
            {t("company_name")}
          </h3>
          <p className="text-gray-300 mb-5 leading-relaxed">
            {t("company_description")}
          </p>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-[var(--header-primary)]">
            {t("products_title")}
          </h3>
          <ul className="space-y-3">
            {products.map((product, index) => (
              <li key={index}>
                <Link
                  to={product.href}
                  className="flex items-center gap-2 text-gray-300 transition hover:text-[var(--header-primary)]"
                >
                  <i
                    className={`${product.icon} text-[var(--header-primary)]`}
                  ></i>
                  <span>{product.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-[var(--header-primary)]">
            {t("services_title")}
          </h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <a
                  href={service.href}
                  className="flex items-center gap-2 text-gray-300 transition hover:text-[var(--header-primary)]"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    className={`${service.icon} text-[var(--header-primary)]`}
                  ></i>
                  <span>{service.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold mb-5 text-[var(--header-primary)]">
            {t("contact_title")}
          </h3>
          <ul className="space-y-3">
            {contactInfo.map((contact, index) => (
              <li key={index}>
                <a
                  href={contact.href}
                  className="flex items-center gap-2 text-gray-300 transition hover:text-[var(--header-primary)]"
                  target={contact.type === "whatsapp" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                >
                  <i
                    className={`${contact.icon} text-[var(--header-primary)]`}
                  ></i>
                  {contact.type === "whatsapp" ? (
                    <span dir="ltr" className="font-mono tracking-wide">
                      {contact.label}
                    </span>
                  ) : (
                    <span>{contact.label}</span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 pt-8 mt-10 text-center text-gray-300 text-sm leading-relaxed space-y-2">
        <p>
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

      <a
        href={`https://mail.google.com/mail/?view=cm&fs=1&to=info@bondmaxx.com&su=${encodeURIComponent(
          t("email_subject")
        )}&body=${encodeURIComponent(t("email_body"))}`}
        target="_blank"
        rel="noopener noreferrer"
        title={t("email_contact")}
        className={`fixed bottom-20 md:bottom-24 ${
          ["ar"].includes(i18n.language) ? "left-5" : "right-5"
        } w-12 h-12 md:w-16 md:h-16 z-50 cursor-pointer animate-bounce`}
        style={{ animationDelay: "0.2s" }}
      >
        <div
          className="w-full h-full rounded-full flex items-center justify-center shadow-lg transform transition-transform duration-300 hover:scale-110"
          style={{ backgroundColor: "#203F84" }}
        >
          <i className="fas fa-envelope text-white text-xl md:text-3xl"></i>
        </div>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/905550004000"
        target="_blank"
        rel="noopener noreferrer"
        title={t("whatsapp_contact")}
        className={`fixed bottom-5 ${
          ["ar"].includes(i18n.language) ? "left-5" : "right-5"
        } w-12 h-12 md:w-16 md:h-16 z-50 cursor-pointer animate-bounce`}
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-full h-full transform transition-transform duration-300 hover:scale-110"
        />
      </a>

      {/* Legal Links */}
      <div className="text-center py-6">
        <Link
          to="/Imprint"
          className="mx-2 text-gray-600 transition hover:text-[var(--header-primary)]"
        >
          Imprint
        </Link>
        |
        <Link
          to="/PrivacyPolicy"
          className="mx-2 text-gray-600 transition hover:text-[var(--header-primary)]"
        >
          Privacy Policy
        </Link>
        |
        <Link
          to="/DataProtection"
          className="mx-2 text-gray-600 transition hover:text-[var(--header-primary)]"
        >
          Data Protection
        </Link>
      </div>
    </footer>
  );
}
