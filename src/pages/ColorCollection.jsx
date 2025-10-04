import React, { useState } from "react";
import { useShop } from "../context/ShopContext";

const colorFamilies = [
  {
    id: "royal-blue",
    category: "blues",
    name: "الأزرق الملكي",
    colors: [
      { id: "blue-1", hex: "#E8F2FF", name: "أزرق فاتح جداً" },
      { id: "blue-2", hex: "#B8D9FF", name: "أزرق فاتح" },
      { id: "blue-3", hex: "#7FB8FF", name: "أزرق متوسط" },
      { id: "blue-4", hex: "#2450A5", name: "أزرق غامق" },
      { id: "blue-5", hex: "#1A3D7A", name: "أزرق داكن" },
    ],
  },
  {
    id: "golden-orange",
    category: "oranges",
    name: "البرتقالي الذهبي",
    colors: [
      { id: "orange-1", hex: "#FFF4E6", name: "برتقالي فاتح جداً" },
      { id: "orange-2", hex: "#FFE4B3", name: "برتقالي فاتح" },
      { id: "orange-3", hex: "#FFD080", name: "برتقالي متوسط" },
      { id: "orange-4", hex: "#F39200", name: "برتقالي غامق" },
      { id: "orange-5", hex: "#E6732A", name: "برتقالي داكن" },
    ],
  },
  {
    id: "royal-red",
    category: "reds",
    name: "الأحمر الملكي",
    colors: [
      { id: "red-1", hex: "#FFE6E6", name: "أحمر فاتح جداً" },
      { id: "red-2", hex: "#FFB3B3", name: "أحمر فاتح" },
      { id: "red-3", hex: "#FF8080", name: "أحمر متوسط" },
      { id: "red-4", hex: "#E00025", name: "أحمر غامق" },
      { id: "red-5", hex: "#B8001D", name: "أحمر داكن" },
    ],
  },
  {
    id: "sunny-yellow",
    category: "yellows",
    name: "الأصفر الشمسي",
    colors: [
      { id: "yellow-1", hex: "#FFFACD", name: "أصفر فاتح جداً" },
      { id: "yellow-2", hex: "#FFF68F", name: "أصفر فاتح" },
      { id: "yellow-3", hex: "#FFE135", name: "أصفر متوسط" },
      { id: "yellow-4", hex: "#FEE880", name: "أصفر غامق" },
      { id: "yellow-5", hex: "#DAA520", name: "أصفر داكن" },
    ],
  },
  {
    id: "crystal-cyan",
    category: "blues",
    name: "السماوي الكريستالي",
    colors: [
      { id: "cyan-1", hex: "#E6F9FF", name: "سماوي فاتح جداً" },
      { id: "cyan-2", hex: "#B3F0FF", name: "سماوي فاتح" },
      { id: "cyan-3", hex: "#80E7FF", name: "سماوي متوسط" },
      { id: "cyan-4", hex: "#00AEEF", name: "سماوي غامق" },
      { id: "cyan-5", hex: "#0088CC", name: "سماوي داكن" },
    ],
  },
  {
    id: "natural-green",
    category: "greens",
    name: "الأخضر الطبيعي",
    colors: [
      { id: "green-1", hex: "#F0F8E8", name: "أخضر فاتح جداً" },
      { id: "green-2", hex: "#C8E6C9", name: "أخضر فاتح" },
      { id: "green-3", hex: "#A5D6A7", name: "أخضر متوسط" },
      { id: "green-4", hex: "#66BB6A", name: "أخضر غامق" },
      { id: "green-5", hex: "#388E3C", name: "أخضر داكن" },
    ],
  },
];

const ColorCard = ({ color, item }) => {
  const { toggleFavorite, addToCart, isFavorite } = useShop();

  const favorite = isFavorite(item.id);

  return (
    <div
      className="aspect-square rounded-xl border-2 border-gray-200 cursor-pointer hover:scale-110 hover:shadow-lg hover:border-blue-400 transition-all duration-300 relative overflow-hidden group"
      style={{ backgroundColor: color.hex }}
      title={`${color.name} - ${color.hex}`}
    >
      <button
        type="button"
        className="absolute top-1 right-1 bg-white/90 border-0 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
        onClick={() => toggleFavorite(item)}
      >
        <i
          className={favorite ? "fas fa-heart text-red-500" : "far fa-heart"}
        ></i>
      </button>
    </div>
  );
};

const ColorCollection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAllColors, setShowAllColors] = useState(false);

  const filteredFamilies = colorFamilies.filter((family) => {
    const matchesCategory =
      selectedCategory === "all" || family.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      family.name.includes(searchTerm) ||
      family.colors.some(
        (color) =>
          color.name.includes(searchTerm) ||
          color.hex.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const ColorFamilyCard = ({ family }) => (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-8 border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
        {family.name}
      </h3>
      <div className="grid grid-cols-5 gap-3 mb-6">
        {family.colors.map((color) => (
          <ColorCard item={color} key={color.id} color={color} />
        ))}
      </div>
      {/* <div className="text-center">
        <button className="text-blue-600 bg-transparent border-0 font-semibold cursor-pointer transition-all duration-300 p-2 rounded-lg hover:text-blue-800 hover:bg-blue-50">
          <i className="fas fa-arrow-left mr-2"></i>استكشف المزيد
        </button>
      </div> */}
    </div>
  );

  if (showAllColors) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 mt-12 sm:mt-16">
          {/* Search & Filter Card */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8 mb-8 border border-gray-100">
            <div className="flex flex-col lg:flex-row gap-4">
              {/* Search Input */}
              <div className="flex gap-5">
                <div>
                  <button
                    onClick={() => setShowAllColors(false)}
                    className="flex items-center gap-2 text-gray-700 transition-all duration-300 px-4 py-2.5 rounded-xl  hover:text-blue-500 hover:-translate-x-1 border-0 cursor-pointer text-sm sm:text-base font-medium  order-2 sm:order-1"
                  >
                    <i className="fas fa-arrow-left text-sm"></i>
                    <span>العودة للرئيسية</span>
                  </button>
                </div>
                <div className="flex-1 relative">
                  <input
                    type="text"
                    className="w-full py-3 sm:py-4 px-4 sm:px-5 pr-10 sm:pr-12 border-2 border-gray-200 rounded-xl text-sm sm:text-base text-right transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    placeholder="ابحث عن عائلة لون أو رمز..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <i className="fas fa-search absolute right-3 sm:right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-base"></i>
                </div>
              </div>

              {/* Category Select */}
              <select
                className="w-full lg:w-64 py-3 sm:py-4 px-4 sm:px-5 border-2 border-gray-200 rounded-xl text-sm sm:text-base text-right bg-white transition-all duration-300 focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100 cursor-pointer"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="all">جميع الفئات اللونية</option>
                <option value="blues">الأزرق وتدرجاته</option>
                <option value="reds">الأحمر وتدرجاته</option>
                <option value="greens">الأخضر وتدرجاته</option>
                <option value="yellows">الأصفر وتدرجاته</option>
                <option value="purples">البنفسجي وتدرجاته</option>
                <option value="oranges">البرتقالي وتدرجاته</option>
              </select>
            </div>

            {/* Results Counter */}
            <div className="mt-4 sm:mt-5 flex items-center justify-between sm:justify-end gap-4 text-xs sm:text-sm text-gray-600 font-medium">
              <div className="flex items-center gap-2 bg-blue-50 px-3 sm:px-4 py-2 rounded-lg">
                <i className="fas fa-layer-group text-blue-600"></i>
                <span>{filteredFamilies.length} عائلة</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-50 px-3 sm:px-4 py-2 rounded-lg">
                <i className="fas fa-droplet text-purple-600"></i>
                <span>{filteredFamilies.length * 5} لون</span>
              </div>
            </div>
          </div>

          {/* Color Families Grid */}
          {filteredFamilies.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pb-10 sm:pb-20">
              {filteredFamilies.map((family) => (
                <ColorFamilyCard key={family.id} family={family} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 sm:py-20 bg-white rounded-2xl shadow-lg border border-gray-100">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <i className="fas fa-palette text-3xl sm:text-5xl text-gray-400"></i>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 px-4">
                لم يتم العثور على عائلات ألوان مطابقة
              </h3>
              <p className="text-sm sm:text-base text-gray-600 px-4">
                جرب تغيير مصطلح البحث أو اختيار فئة لونية مختلفة
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white mt-[70px]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-6 leading-[1.15]">
            <span className="inline-block pb-[0.15em] bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              الجديدة BONDMAXX - 2025 تناغم مجموعة ألوان
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            تحتفي مجموعة ألوان BONDMAXX لموسم 2025، المسماة "تناغم"، بتأثير
            الظلال الخفية والانسجام المثالي. تضم المجموعة أكثر من 360 لونًا
            موزعة على ست فئات لونية رئيسية، كل منها مصممة بعناية لتلبي أرقى
            المعايير الجمالية والوظيفية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {colorFamilies.map((family) => (
            <ColorFamilyCard key={family.id} family={family} />
          ))}
        </div>

        <div className="text-center mt-16" style={{ marginTop: "60px" }}>
          <button
            onClick={() => setShowAllColors(true)}
            className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold border-0 cursor-pointer"
          >
            <i className="fas fa-palette" style={{ marginLeft: "8px" }}></i>
            استكشف جميع الألوان (360+ لون)
          </button>
        </div>
      </div>
    </section>
  );
};

export default ColorCollection;
