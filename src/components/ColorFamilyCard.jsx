import React from "react";
import ColorSwatch from "./ColorSwatch";

const ColorFamilyCard = ({ family }) => {
  if (!family || !family.colors) return null;
  return (
    <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 p-8 border border-gray-100">
      <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">{family.name}</h3>
      <div className="grid grid-cols-5 gap-3 mb-6">
        {family.colors.map((color) => (
          <ColorSwatch key={color.id} color={color} />
        ))}
      </div>
    </div>
  );
};

export default ColorFamilyCard;
