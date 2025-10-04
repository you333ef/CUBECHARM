import { FaCrown, FaMountain, FaUmbrellaBeach, FaBuilding, FaGem } from "react-icons/fa";
import { GiIsland, GiCastle } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

// type for categories
interface Category {
  name: string;
  path: string;
  icon: JSX.Element;
}

// base path for luxury
const BASE_PATH = "/HomeList/Luxury";

const SupLuxury: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // all subcategories (match your files)
  const categories: Category[] = [
    { name: "Luxury Villa", path: `${BASE_PATH}/LuxuryVilla`, icon: <MdOutlineVilla size={22}/> },
    { name: "Luxury Palace", path: `${BASE_PATH}/LuxuryPalace`, icon: <FaCrown size={22}/> },
    { name: "Luxury Chalet", path: `${BASE_PATH}/LuxuryChalet`, icon: <FaMountain size={22}/> },
    { name: "Private Island Villa", path: `${BASE_PATH}/PrivateIslandVilla`, icon: <GiIsland size={22}/> },
    { name: "Luxury Penthouse", path: `${BASE_PATH}/LuxuryPenthouse`, icon: <FaBuilding size={22}/> },
    { name: "Underwater House", path: `${BASE_PATH}/UnderwaterHouse`, icon: <FaUmbrellaBeach size={22}/> },
    { name: "Glass Desert House", path: `${BASE_PATH}/GlassDesertHouse`, icon: <FaGem size={22}/> },
    { name: "Luxury Castle", path: `${BASE_PATH}/LuxuryCastle`, icon: <GiCastle size={22}/> },
  ];

  // render one category
  const renderCategory = (cat: Category) => {
    const isActive = location.pathname === cat.path;

    return (
      <div
        key={cat.name}
        onClick={() => navigate(cat.path)}
        className="flex flex-col items-center text-center cursor-pointer transition-transform duration-200 hover:scale-105 min-w-[80px]"
      >
        <div
          className={`w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 
            ${isActive ? "border-2 border-sky-500" : ""}`}
        >
          {cat.icon}
        </div>
        <p className="text-xs mt-2 text-gray-700">{cat.name}</p>
      </div>
    );
  };

  return (
    <div className="w-full mt-8">
      <div className="flex flex-row gap-5 overflow-x-auto px-4 py-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        {categories.map(renderCategory)}
      </div>
    </div>
  );
};

export default SupLuxury;
