import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const { t } = useTranslation();
  const formRef = useRef();
  
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("success");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // EmailJS configuration - YOUR ACTUAL IDs
  const SERVICE_ID = 'service_xg3gkv8';
  const TEMPLATE_ID = 'template_a5om6dk';
  const PUBLIC_KEY = 'XXuNuXW-6_n31D-0J';

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const showNotification = (message, type = "success") => {
    setToastMessage(message);
    setToastType(type);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Prepare template parameters
      const templateParams = {
        name: form.name,
        email: form.email,
        phone: form.phone || 'Not provided',
        message: form.message,
        // If you used {{title}} in your template, uncomment this line:
        // title: "Contact Form"
      };

      console.log('Sending with params:', templateParams); // For debugging

      // Send email using EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        templateParams,
        PUBLIC_KEY
      );

      console.log('EmailJS result:', result); // For debugging

      if (result.status === 200) {
        showNotification(t("contact_success_message"));
        // Clear form
        setForm({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      } else {
        showNotification(t("contact_error_message"), "error");
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      showNotification(t("contact_error_message"), "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 relative">
      
      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-5 right-5 z-50 animate-slideIn">
          <div className={`${toastType === 'success' ? 'bg-green-500' : 'bg-red-500'} text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 rtl:space-x-reverse`}>
            {toastType === 'success' ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
            <span className="font-medium">{toastMessage}</span>
          </div>
        </div>
      )}

      <h1 className="text-3xl font-bold mb-10 text-center">
        {t("contact_title")}
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Contact Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-lg p-8 space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder={t("contact_name_placeholder")}
            value={form.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded focus:ring-2 focus:ring-[var(--header-primary)] focus:border-transparent outline-none transition-all"
          />

          <input
            type="email"
            name="email"
            placeholder={t("contact_email_placeholder")}
            value={form.email}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded focus:ring-2 focus:ring-[var(--header-primary)] focus:border-transparent outline-none transition-all"
          />

          <input
            type="text"
            name="phone"
            placeholder={t("contact_phone_placeholder")}
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded focus:ring-2 focus:ring-[var(--header-primary)] focus:border-transparent outline-none transition-all"
          />

          <textarea
            name="message"
            placeholder={t("contact_message_placeholder")}
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            className="w-full border p-3 rounded focus:ring-2 focus:ring-[var(--header-primary)] focus:border-transparent outline-none transition-all"
          ></textarea>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[var(--header-primary)] text-white px-6 py-3 rounded hover:opacity-90 transition-all duration-300 transform hover:scale-105 active:scale-95 w-full md:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? t("contact_sending") : t("contact_submit_button")}
          </button>
        </form>

        {/* Google Map */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <iframe
            title={t("contact_map_title")}
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3226.082557269725!2d36.833179!3d36.042691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzbCsDAyJzMzLjciTiAzNsKwNDknNTkuNCJF!5e0!3m2!1sar!2str!4v1773134589997!5m2!1sar!2str"
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>

      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .animate-slideIn {
          animation: slideIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}