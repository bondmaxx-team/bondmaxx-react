import { useState } from "react";

export default function PaintingServices() {
  const [formData, setFormData] = useState({
    location: "سوريا",
    city: "اختر",
    fullName: "",
    email: "",
    phoneCode: "+963",
    phone: "",
    paintType: "اختر",
    serviceType: "اختر",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.city || formData.city === "اختر") {
      alert("الرجاء اختيار المدينة");
      return;
    }
    if (!formData.fullName) {
      alert("الرجاء إدخال الاسم الكامل");
      return;
    }
    if (!formData.email) {
      alert("الرجاء إدخال البريد الإلكتروني");
      return;
    }
    if (!formData.phone) {
      alert("الرجاء إدخال رقم الهاتف");
      return;
    }
    if (!formData.serviceType || formData.serviceType === "اختر") {
      alert("الرجاء اختيار نوع الدهان");
      return;
    }
    if (!formData.paintType || formData.paintType === "اختر") {
      alert("الرجاء اختيار نوع خدمة الدهان");
      return;
    }

    console.log("Form submitted:", formData);
    alert("تم إرسال النموذج بنجاح!");
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4"
      dir="rtl"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header Card */}
        <div className="p-8 md:p-12 mb-8">
          <div className="text-center">
            <div className="inline-block p-3 bg-blue-100 rounded-full mb-4">
              <svg
                className="w-12 h-12 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              جدد منزلك عن طريق خدماتنا بكل سهولة
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              احجز دهان محترف لتحديد أي مساحة أو اطلب توصيل الطلاء لمنزلك. كل
              هذا يمكنكم فعله من راحة منزلكم.
            </p>
          </div>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <div className="space-y-7">
            {/* Location Selection */}
            <div>
              <label className="flex items-center text-gray-800 font-bold mb-3 text-base">
                <svg
                  className="w-5 h-5 ml-2 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                اختر موقعك
              </label>
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-base bg-gray-50 hover:bg-white hover:border-blue-300 font-semibold"
              >
                <option value="سوريا">سوريا</option>
              </select>
            </div>

            {/* Contact Info Banner */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-5 rounded-xl shadow-lg">
              <p className="text-center text-base font-medium">
                املأ الخانات أدناه أو{" "}
                <a
                  href="https://wa.me/905550004000"
                  className="font-bold underline hover:text-blue-200 transition-colors"
                >
                  او تواصل معنا
                </a>
              </p>
            </div>

            {/* City and Full Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-gray-800 font-bold mb-3 text-base">
                  <span className="text-red-500 ml-1">*</span>
                  المدينة
                </label>
                <select
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-base bg-gray-50 hover:bg-white hover:border-blue-300"
                >
                  <option value="اختر">اختر المدينة</option>
                  <option value="إدلب">إدلب</option>
                  <option value="حلب">حلب</option>
                  <option value="دمشق">دمشق</option>
                  <option value="حمص">حمص</option>
                  <option value="حماة">حماة</option>
                  <option value="اللاذقية">اللاذقية</option>
                  <option value="طرطوس">طرطوس</option>
                </select>
              </div>

              <div>
                <label className="flex items-center text-gray-800 font-bold mb-3 text-base">
                  <span className="text-red-500 ml-1">*</span>
                  الاسم الكامل
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="أدخل اسمك الكامل"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-base bg-gray-50 hover:bg-white hover:border-blue-300"
                />
              </div>
            </div>

            {/* Email, Phone Number, and Country Code Row */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              <div className="lg:col-span-6">
                <label className="flex items-center text-gray-800 font-bold mb-3 text-base">
                  <span className="text-red-500 ml-1">*</span>
                  البريد الإلكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="example@email.com"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-base bg-gray-50 hover:bg-white hover:border-blue-300"
                />
              </div>

              <div className="lg:col-span-4">
                <label className="flex items-center text-gray-800 font-bold mb-3 text-base">
                  <span className="text-red-500 ml-1">*</span>
                  رقم الهاتف
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="123456789"
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-base bg-gray-50 hover:bg-white hover:border-blue-300"
                />
              </div>

              <div className="lg:col-span-2">
                <label className="block text-gray-800 font-bold mb-3 text-base text-center">
                  الرمز
                </label>
                <input
                  type="text"
                  name="phoneCode"
                  value={formData.phoneCode}
                  onChange={handleChange}
                  className="w-full px-3 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-base text-center font-bold bg-blue-50 hover:bg-blue-100"
                  readOnly
                />
              </div>
            </div>

            {/* Service Type and Paint Type Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-gray-800 font-bold mb-3 text-base">
                  <span className="text-red-500 ml-1">*</span>
                  اختر نوع الدهان
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-base bg-gray-50 hover:bg-white hover:border-blue-300"
                >
                  <option value="اختر">اختر نوع الدهان</option>
                  <option value="دهان داخلي">دهان داخلي</option>
                  <option value="دهان خارجي">دهان خارجي</option>
                </select>
              </div>

              <div>
                <label className="flex items-center text-gray-800 font-bold mb-3 text-base">
                  <span className="text-red-500 ml-1">*</span>
                  اختر نوع خدمة الدهان
                </label>
                <select
                  name="paintType"
                  value={formData.paintType}
                  onChange={handleChange}
                  className="w-full px-5 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-base bg-gray-50 hover:bg-white hover:border-blue-300"
                >
                  <option value="اختر">اختر نوع الخدمة</option>
                  <option value="دهان عادي">دهان عادي</option>
                  <option value="دهان ديكوري">دهان ديكوري</option>
                  <option value="دهان فاخر">دهان فاخر</option>
                  <option value="دهان متخصص">دهان متخصص</option>
                </select>
              </div>
            </div>

            {/* Terms Notice */}
            <div className="bg-amber-50 border-r-4 border-amber-500 p-4 rounded-lg">
              <div className="flex items-start">
                <svg
                  className="w-5 h-5 text-amber-600 ml-2 mt-0.5 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm text-amber-800 font-medium">
                  تطبق مصاريف التوصيل وفق موقعك والكمية المطلوبة.
                </p>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                onClick={handleSubmit}
                className="group relative w-full md:w-auto px-16 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-lg font-bold rounded-xl transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95 transform hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10">إرسال الطلب</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-gray-600 text-sm">
          <p>
            جميع الحقول المطلوبة مميزة بعلامة{" "}
            <span className="text-red-500 font-bold">*</span>
          </p>
        </div>
      </div>
    </div>
  );
}
