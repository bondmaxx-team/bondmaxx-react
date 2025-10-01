import React, { useState } from "react";

const SearchDealerPage = ({
  title = "اعثر على متجر",
  subtitle = "اعثر على أقرب موزع لمنتجاتك",
  backgroundImage = "https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&h=1080&fit=crop",
  onLocationRequest,
  onSearch,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLocationClick = async () => {
    setIsLoading(true);

    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const { latitude, longitude } = position.coords;

            if (onLocationRequest) {
              await onLocationRequest({ latitude, longitude });
            }

            // Simulate API call
            setTimeout(() => {
              setIsLoading(false);
            }, 2000);
          },
          (error) => {
            console.error("Error getting location:", error);
            alert("تعذر الحصول على موقعك. يرجى التحقق من إعدادات الموقع.");
            setIsLoading(false);
          }
        );
      } else {
        alert("المتصفح الخاص بك لا يدعم خدمات الموقع");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Location error:", error);
      setIsLoading(false);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setIsLoading(true);

      if (onSearch) {
        onSearch(searchQuery);
      }

      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        className="bg-cover bg-center h-screen w-full flex items-center justify-center relative overflow-hidden"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          {/* Main Content */}
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12">{subtitle}</p>

            {/* Search Section */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 backdrop-blur-sm bg-opacity-95">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Location Button */}
                <button
                  onClick={handleLocationClick}
                  disabled={isLoading}
                  className="flex items-center justify-center gap-3 bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 min-w-fit disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span>استخدم بياناتي الموقعي</span>
                </button>

                {/* Search Input */}
                <div className="relative flex-1 flex items-center">
                  <button
                    onClick={handleSearch}
                    disabled={isLoading}
                    className="absolute left-2 flex items-center justify-center bg-gray-100 hover:bg-gray-200 p-3 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>

                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                    disabled={isLoading}
                    placeholder="أدخل اسم المدينة"
                    className="w-full px-12 py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-right placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loading Modal */}
      {isLoading && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-900 bg-opacity-85 backdrop-blur-sm"></div>

          {/* Modal Content */}
          <div className="relative z-10 bg-white rounded-3xl p-12 text-center shadow-2xl max-w-sm mx-4 transform transition-all duration-300 animate-fade-in">
            {/* Animated Logo */}
            <div className="relative mb-8">
              <div className="w-20 h-20 mx-auto relative">
                {/* Outer rotating ring */}
                <div className="absolute inset-0 rounded-full border-4 border-blue-200 animate-spin border-t-blue-500"></div>
                {/* Inner pulsing circle */}
                <div className="absolute inset-2 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full animate-pulse flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
              </div>
              {/* Floating dots animation */}
              <div
                className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              ></div>
              <div
                className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-300 rounded-full animate-bounce"
                style={{ animationDelay: "0.3s" }}
              ></div>
              <div
                className="absolute top-1/2 -left-4 w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>

            {/* Loading Text */}
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              جاري البحث عن المتاجر
            </h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              نحن نبحث عن أقرب متاجر بوندماكس إليك...
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-2 mb-4 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full animate-pulse w-full"></div>
            </div>

            {/* Loading dots */}
            <div className="flex justify-center space-x-1 rtl:space-x-reverse">
              <div
                className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"
                style={{ animationDelay: "0s" }}
              ></div>
              <div
                className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchDealerPage;
