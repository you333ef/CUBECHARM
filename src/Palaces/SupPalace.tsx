import { useNavigate, useLocation } from "react-router-dom";
import { FaCrown, FaMountain, FaUmbrellaBeach, FaLandmark } from "react-icons/fa";
import { GiDiamondRing, GiDesert, GiGlassCelebration, GiFloatingCrystal, GiSmartphone } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";

// Category type
interface Category {
  name: string;
  path: string;
  icon: JSX.Element;
}

// Base route for all palaces
const BASE_PATH = "/HomeList/PalaceContainer";

const SupPalace: React.FC = () => {
  const navi = useNavigate();
  const location = useLocation();

  // All palace categories
  const categories: Category[] = [
    { name: "Royal Palace", path: `${BASE_PATH}/RoyalPalace`, icon: <FaCrown size={26}/> },
    { name: "Luxury Palace", path: `${BASE_PATH}/LuxuryPalace`, icon: <GiDiamondRing size={26}/> },
    { name: "Historic Palace", path: `${BASE_PATH}/HistoricPalace`, icon: <FaLandmark size={26}/> },
    { name: "Glass Palace", path: `${BASE_PATH}/GlassPalace`, icon: <GiGlassCelebration size={26}/> },
    { name: "Desert Palace", path: `${BASE_PATH}/DesertPalace`, icon: <GiDesert size={26}/> },
    { name: "Mountain Palace", path: `${BASE_PATH}/MountainPalace`, icon: <FaMountain size={26}/> },
    { name: "Beach Palace", path: `${BASE_PATH}/BeachPalace`, icon: <FaUmbrellaBeach size={26}/> },
    { name: "Floating Palace", path: `${BASE_PATH}/FloatingPalace`, icon: <GiFloatingCrystal size={26}/> },
    { name: "Smart Palace", path: `${BASE_PATH}/SmartPalace`, icon: <GiSmartphone size={26}/> },
    { name: "Private Estate Palace", path: `${BASE_PATH}/PrivateEstatePalace`, icon: <MdOutlineVilla size={26}/> },
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

export default SupPalace;
