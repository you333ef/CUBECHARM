import { FaHome, FaLeaf, FaCrown, FaMountain, FaUmbrellaBeach } from "react-icons/fa";
import { MdOutlineCottage } from "react-icons/md";
import { GiFamilyHouse, GiSmartphone } from "react-icons/gi";
import { useLocation, useNavigate } from "react-router-dom";

// type for categories
interface Category {
  name: string;
  path: string;
  icon: JSX.Element;
}

// base path for homestays
const BASE_PATH = "/HomeList/Homestays";

const SupHomestays: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // all subcategories (match your files)
  const categories: Category[] = [
    { name: "Beach House", path: `${BASE_PATH}/BeachHouse`, icon: <FaUmbrellaBeach size={22}/> },
    { name: "Country Cottage", path: `${BASE_PATH}/CountryCottage`, icon: <MdOutlineCottage size={22}/> },
    { name: "Eco-Friendly House", path: `${BASE_PATH}/EcoFriendlyHouse`, icon: <FaLeaf size={22}/> },
    { name: "Family House", path: `${BASE_PATH}/FamilyHouse`, icon: <GiFamilyHouse size={22}/> },
    { name: "Independent Villa", path: `${BASE_PATH}/IndependentVilla`, icon: <FaHome size={22}/> },
    { name: "Luxury Villa", path: `${BASE_PATH}/LuxuryVilla`, icon: <FaCrown size={22}/> },
    { name: "Mountain Chalet", path: `${BASE_PATH}/MountainChalet`, icon: <FaMountain size={22}/> },
    { name: "Smart Home", path: `${BASE_PATH}/SmartHome`, icon: <GiSmartphone size={22}/> },
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

export default SupHomestays;
