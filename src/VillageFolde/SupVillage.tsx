import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaUmbrellaBeach, FaTree, FaMountain, FaHotel } from "react-icons/fa";
import { GiIsland, GiButter, GiSmartphone, GiLeak, GiVillage } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";

// Category type
interface Category {
  name: string;
  path: string;
  icon: JSX.Element;
}
// Base route for all villages
const BASE_PATH = "/HomeList/Villas";
const SupVillage: React.FC = () => {
  const navi = useNavigate();
  const location = useLocation();
  // All village categories
  const categories: Category[] = [
    { name: "Independent", path: `${BASE_PATH}/Independent`, icon: <MdOutlineVilla size={26}/> },
    { name: "Luxury", path: `${BASE_PATH}/Luxury`, icon: <FaHotel size={26}/> },
    { name: "Beachfront", path: `${BASE_PATH}/Beachfront`, icon: <FaUmbrellaBeach size={26}/> },
    { name: "Mountain", path: `${BASE_PATH}/Mountain`, icon: <FaMountain size={26}/> },
    { name: "Countryside", path: `${BASE_PATH}/Countryside`, icon: <FaTree size={26}/> },
    { name: "Island", path: `${BASE_PATH}/Island`, icon: <GiIsland size={26}/> },
    { name: "Butler Service", path: `${BASE_PATH}/ButlerService`, icon: <GiButter size={26}/> },
    { name: "Eco-Friendly", path: `${BASE_PATH}/EcoFriendly`, icon: <GiLeak size={26}/> },
    { name: "Smart", path: `${BASE_PATH}/Smart`, icon: <GiSmartphone size={26}/> },
  ];
  // Render one category item
  const renderCategory = (cat: Category) => {
    const isActive = location.pathname === cat.path;
    return (
      <div
        key={cat.name}
        onClick={() => navi(cat.path)}
        className="flex flex-col items-center text-center cursor-pointer 
                   transition-transform duration-200 hover:scale-105 min-w-[80px]"
      >
        {/* Icon circle + highlight if active */}
        <div
          className={`w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 
            ${isActive ? "border-2 border-sky-500" : ""}`}
        >
          <div className="text-gray-700">{cat.icon}</div>
        </div>

        {/* Category name */}
        <p className="text-xs mt-2 text-gray-700">{cat.name}</p>
      </div>
    );
  };

  return (
    <div className="w-full mt-10 sm:mt-10">
      <div className="flex flex-row gap-6 overflow-x-auto 
                      scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 
                      px-4 py-2">
        {categories.map(renderCategory)}
      </div>
    </div>
  );
};

export default SupVillage;
