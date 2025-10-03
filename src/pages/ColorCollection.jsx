import React, { useState } from "react";

const ColorCollection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [showAllColors, setShowAllColors] = useState(false);
  const [favorites, setFavorites] = useState({});

  // Color data structure
  const colorFamilies = [
    {
      id: "royal-blue",
      category: "blues",
      nameAr: "الأزرق الملكي",
      colors: [
        { id: "blue-1", hex: "#E8F2FF", nameAr: "أزرق فاتح جداً" },
        { id: "blue-2", hex: "#B8D9FF", nameAr: "أزرق فاتح" },
        { id: "blue-3", hex: "#7FB8FF", nameAr: "أزرق متوسط" },
        { id: "blue-4", hex: "#2450A5", nameAr: "أزرق غامق" },
        { id: "blue-5", hex: "#1A3D7A", nameAr: "أزرق داكن" },
      ],
    },
    {
      id: "golden-orange",
      category: "oranges",
      nameAr: "البرتقالي الذهبي",
      colors: [
        { id: "orange-1", hex: "#FFF4E6", nameAr: "برتقالي فاتح جداً" },
        { id: "orange-2", hex: "#FFE4B3", nameAr: "برتقالي فاتح" },
        { id: "orange-3", hex: "#FFD080", nameAr: "برتقالي متوسط" },
        { id: "orange-4", hex: "#F39200", nameAr: "برتقالي غامق" },
        { id: "orange-5", hex: "#E6732A", nameAr: "برتقالي داكن" },
      ],
    },
    {
      id: "royal-red",
      category: "reds",
      nameAr: "الأحمر الملكي",
      colors: [
        { id: "red-1", hex: "#FFE6E6", nameAr: "أحمر فاتح جداً" },
        { id: "red-2", hex: "#FFB3B3", nameAr: "أحمر فاتح" },
        { id: "red-3", hex: "#FF8080", nameAr: "أحمر متوسط" },
        { id: "red-4", hex: "#E00025", nameAr: "أحمر غامق" },
        { id: "red-5", hex: "#B8001D", nameAr: "أحمر داكن" },
      ],
    },
    {
      id: "sunny-yellow",
      category: "yellows",
      nameAr: "الأصفر الشمسي",
      colors: [
        { id: "yellow-1", hex: "#FFFACD", nameAr: "أصفر فاتح جداً" },
        { id: "yellow-2", hex: "#FFF68F", nameAr: "أصفر فاتح" },
        { id: "yellow-3", hex: "#FFE135", nameAr: "أصفر متوسط" },
        { id: "yellow-4", hex: "#FEE880", nameAr: "أصفر غامق" },
        { id: "yellow-5", hex: "#DAA520", nameAr: "أصفر داكن" },
      ],
    },
    {
      id: "crystal-cyan",
      category: "blues",
      nameAr: "السماوي الكريستالي",
      colors: [
        { id: "cyan-1", hex: "#E6F9FF", nameAr: "سماوي فاتح جداً" },
        { id: "cyan-2", hex: "#B3F0FF", nameAr: "سماوي فاتح" },
        { id: "cyan-3", hex: "#80E7FF", nameAr: "سماوي متوسط" },
        { id: "cyan-4", hex: "#00AEEF", nameAr: "سماوي غامق" },
        { id: "cyan-5", hex: "#0088CC", nameAr: "سماوي داكن" },
      ],
    },
    {
      id: "natural-green",
      category: "greens",
      nameAr: "الأخضر الطبيعي",
      colors: [
        { id: "green-1", hex: "#F0F8E8", nameAr: "أخضر فاتح جداً" },
        { id: "green-2", hex: "#C8E6C9", nameAr: "أخضر فاتح" },
        { id: "green-3", hex: "#A5D6A7", nameAr: "أخضر متوسط" },
        { id: "green-4", hex: "#66BB6A", nameAr: "أخضر غامق" },
        { id: "green-5", hex: "#388E3C", nameAr: "أخضر داكن" },
      ],
    },
  ];

  const toggleFavorite = (colorId, hex, nameAr) => {
    setFavorites((prev) => ({
      ...prev,
      [colorId]: prev[colorId] ? null : { hex, nameAr },
    }));
  };

  const filteredFamilies = colorFamilies.filter((family) => {
    const matchesCategory =
      selectedCategory === "all" || family.category === selectedCategory;
    const matchesSearch =
      searchTerm === "" ||
      family.nameAr.includes(searchTerm) ||
      family.colors.some(
        (color) =>
          color.nameAr.includes(searchTerm) ||
          color.hex.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const ColorCard = ({ color, familyId }) => (
    <div
      className="aspect-square rounded-xl border-2 border-gray-200 cursor-pointer hover:scale-110 hover:shadow-lg hover:border-blue-400 transition-all duration-300 relative overflow-hidden group"
      style={{ backgroundColor: color.hex }}
      title={`${color.nameAr} - ${color.hex}`}
    >
      <button
        type="button"
        className="absolute top-1 right-1 bg-white/90 border-0 rounded-full w-7 h-7 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm"
        onClick={() => toggleFavorite(color.id, color.hex, color.nameAr)}
      >
        <i
          className={
            favorites[color.id] ? "fas fa-heart text-red-500" : "far fa-heart"
          }
        ></i>
      </button>
    </div>
  );

  const ColorFamilyCard = ({ family }) => (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-8 border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
        {family.nameAr}
      </h3>
      <div className="grid grid-cols-5 gap-3 mb-6">
        {family.colors.map((color) => (
          <ColorCard key={color.id} color={color} familyId={family.id} />
        ))}
      </div>
      {/* <div className="text-center">
        <button className="text-blue-600 bg-transparent border-0 font-semibold cursor-pointer transition-all duration-300 p-2 rounded-lg hover:text-blue-800 hover:bg-blue-50">
          <i className="fas fa-arrow-left mr-2"></i>استكشف المزيد
        </button>
      </div> */}
    </div>
  );

  //   if (showAllColors) {
  //     return (
  //       <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white mt-16">
  //         <div className="bg-white shadow-lg border-b border-gray-200">
  //           <div className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center">
  //             <button
  //               onClick={() => setShowAllColors(false)}
  //               className="flex items-center gap-3 text-gray-600 no-underline transition-all duration-300 px-5 py-3 rounded-xl bg-gray-100 hover:text-blue-600 hover:bg-blue-50 hover:-translate-x-1 border-0 cursor-pointer"
  //             >
  //               <i className="fas fa-arrow-left"></i>
  //               <span>العودة للرئيسية</span>
  //             </button>
  //             <div className="flex items-center gap-4">
  //               <i className="fas fa-palette text-blue-600 text-4xl"></i>
  //               <h1 className="text-4xl font-bold text-gray-900">
  //                 مجموعة ألوان BONDMAXX الكاملة
  //               </h1>
  //             </div>
  //           </div>
  //         </div>

  //         <div className="max-w-7xl mx-auto px-6 pt-10">
  //           <div className="bg-white rounded-2xl shadow-lg p-8 mb-10">
  //             <div className="flex flex-col md:flex-row gap-6">
  //               <div className="flex-1 relative">
  //                 <input
  //                   type="text"
  //                   className="w-full py-4 px-5 pr-12 border-2 border-gray-200 rounded-xl text-base text-right transition-all duration-300 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
  //                   placeholder="ابحث عن عائلة لون أو رمز..."
  //                   value={searchTerm}
  //                   onChange={(e) => setSearchTerm(e.target.value)}
  //                 />
  //                 <i className="fas fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg"></i>
  //               </div>
  //               <select
  //                 className="w-full md:w-72 py-4 px-5 border-2 border-gray-200 rounded-xl text-base text-right bg-white transition-all duration-300 focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100"
  //                 value={selectedCategory}
  //                 onChange={(e) => setSelectedCategory(e.target.value)}
  //               >
  //                 <option value="all">جميع الفئات اللونية</option>
  //                 <option value="blues">الأزرق وتدرجاته</option>
  //                 <option value="reds">الأحمر وتدرجاته</option>
  //                 <option value="greens">الأخضر وتدرجاته</option>
  //                 <option value="yellows">الأصفر وتدرجاته</option>
  //                 <option value="purples">البنفسجي وتدرجاته</option>
  //                 <option value="oranges">البرتقالي وتدرجاته</option>
  //               </select>
  //             </div>
  //             <div className="mt-5 text-gray-600 text-right font-medium">
  //               عدد عائلات الألوان: {filteredFamilies.length} عائلة (
  //               {filteredFamilies.length * 5} لون إجمالي)
  //             </div>
  //           </div>

  //           {filteredFamilies.length > 0 ? (
  //             <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 pb-20">
  //               {filteredFamilies.map((family) => (
  //                 <ColorFamilyCard key={family.id} family={family} />
  //               ))}
  //             </div>
  //           ) : (
  //             <div className="text-center py-20">
  //               <i className="fas fa-palette text-6xl text-gray-300 mb-4"></i>
  //               <h3 className="text-xl font-semibold text-gray-900 mb-3">
  //                 لم يتم العثور على عائلات ألوان مطابقة
  //               </h3>
  //               <p className="text-gray-600">
  //                 جرب تغيير مصطلح البحث أو اختيار فئة لونية مختلفة
  //               </p>
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //     );
  //   }

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
