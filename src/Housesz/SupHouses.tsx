import { useNavigate, useLocation } from "react-router-dom";
import { FaHome, FaTree, FaMountain, FaCouch } from "react-icons/fa";
import { MdFamilyRestroom, MdOutlineVilla } from "react-icons/md";
import { GiDiamondRing, GiLeak, GiSmartphone, GiHouse } from "react-icons/gi";

// Category type
interface Category {
  name: string;
  path: string;
  icon: JSX.Element;
}

// Base route for all houses
const BASE_PATH = "/HomeList/Housesz";

const SupHouses: React.FC = () => {
  const navi = useNavigate();
  const location = useLocation();

  // All house categories
  const categories: Category[] = [
    { name: "Private Homes", path: `${BASE_PATH}/PrivateHomes`, icon: <GiHouse size={26}/> },
    { name: "Family House", path: `${BASE_PATH}/FamilyHouse`, icon: <MdFamilyRestroom size={26}/> },
    { name: "Independent Villa", path: `${BASE_PATH}/IndependentVilla`, icon: <MdOutlineVilla size={26}/> },
    { name: "Luxury Palace", path: `${BASE_PATH}/LuxuryPalace`, icon: <GiDiamondRing size={26}/> },
    { name: "Country Cottage", path: `${BASE_PATH}/CountryCottage`, icon: <FaTree size={26}/> },
    { name: "Mountain Chalet", path: `${BASE_PATH}/MountainChalet`, icon: <FaMountain size={26}/> },
    { name: "Heritage House", path: `${BASE_PATH}/HeritageHouse`, icon: <FaHome size={26}/> },
    { name: "Smart Home", path: `${BASE_PATH}/SmartHome`, icon: <GiSmartphone size={26}/> },
    { name: "Eco-Friendly House", path: `${BASE_PATH}/EcoHouse`, icon: <GiLeak size={26}/> },
        { name: "Heritage House", path: "/HomeList/Housesz/HeritageHouse", icon: <FaHome size={26}/> },

    { name: "Homestay", path: `${BASE_PATH}/Homestay`, icon: <FaCouch size={26}/> },
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

export default SupHouses;
