export default function Footer() {
  const socialLinks = [
    { icon: "fab fa-facebook-f", hoverColor: "hover:bg-blue-600" },
    { icon: "fab fa-twitter", hoverColor: "hover:bg-blue-400" },
    { icon: "fab fa-instagram", hoverColor: "hover:bg-pink-500" },
    { icon: "fab fa-linkedin-in", hoverColor: "hover:bg-blue-700" },
  ];

  const products = [
    { icon: "fas fa-home", label: "الدهانات الداخلية", href: "#" },
    { icon: "fas fa-building", label: "الدهانات الخارجية", href: "#" },
    { icon: "fas fa-industry", label: "الدهانات الصناعية", href: "#" },
    { icon: "fas fa-ship", label: "الدهانات البحرية", href: "#" },
    { icon: "fas fa-palette", label: "مجموعة الألوان", href: "#" },
  ];

  const services = [
    { icon: "fas fa-comments", label: "استشارة الألوان", href: "#" },
    { icon: "fas fa-chalkboard-teacher", label: "التدريب التقني", href: "#" },
    { icon: "fas fa-tools", label: "الدعم الفني", href: "#" },
    { icon: "fas fa-certificate", label: "ضمان الجودة", href: "#" },
    { icon: "fas fa-search", label: "البحث عن تاجر", href: "#" },
  ];

  const contactInfo = [
    {
      icon: "fas fa-phone",
      label: "+90 555 000 40 00",
      href: "tel:+905550004000",
    },
    {
      icon: "fas fa-envelope",
      label: "info@bondmaxx.com",
      href: "mailto:info@bondmaxx.com",
    },
    { icon: "fas fa-map-marker-alt", label: "سوريا - إدلب", href: "#" },
    {
      icon: "fas fa-clock",
      label: "الأحد - الخميس: 8:00 ص - 6:00 م",
      href: "#",
    },
  ];

  return (
    <footer
      dir="rtl"
      className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20 px-6"
    >
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4 text-right">
        {/* Section 1 */}
        <div>
          <h3 className="text-xl font-bold mb-5">BONDMAXX</h3>
          <p className="text-gray-300 mb-5 leading-relaxed">
            شركة رائدة في مجال الدهانات والألوان عالية الجودة، نقدم حلولاً
            مبتكرة ومتطورة لجميع احتياجاتكم في الطلاء والديكور.
          </p>
          <div className="flex gap-4 mt-4">
            {socialLinks.map((social, index) => (
              <div
                key={index}
                className={`w-10 h-10 flex items-center justify-center bg-white/10 rounded-lg cursor-pointer ${social.hoverColor} transition`}
              >
                <i className={social.icon}></i>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2 - Products */}
        <div>
          <h3 className="text-xl font-bold mb-5">المنتجات</h3>
          <ul className="space-y-3">
            {products.map((product, index) => (
              <li key={index}>
                <a
                  href={product.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                >
                  <i className={product.icon}></i>
                  <span>{product.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 3 - Services */}
        <div>
          <h3 className="text-xl font-bold mb-5">الخدمات</h3>
          <ul className="space-y-3">
            {services.map((service, index) => (
              <li key={index}>
                <a
                  href={service.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                >
                  <i className={service.icon}></i>
                  <span>{service.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Section 4 - Contact */}
        <div>
          <h3 className="text-xl font-bold mb-5">تواصل معنا</h3>
          <ul className="space-y-3">
            {contactInfo.map((contact, index) => (
              <li key={index}>
                <a
                  href={contact.href}
                  className="flex items-center gap-2 text-gray-300 hover:text-white transition"
                >
                  <i className={contact.icon}></i>
                  <span>{contact.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 pt-8 mt-10">
        <div className="text-center text-gray-300 text-sm leading-relaxed space-y-2">
          <p className="mb-3">
            &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لشركة
            <span className="font-semibold text-white mx-1">Bondmaxx</span>
          </p>
          <p className="text-xs text-gray-400">
            تصميم وتطوير بواسطة
            <span className="font-semibold text-gray-200 mx-1">
              فريق Goldennet التقني
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
