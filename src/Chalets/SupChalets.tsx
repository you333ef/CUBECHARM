import { useNavigate, useLocation } from "react-router-dom";
import { FaMountain, FaUmbrellaBeach, FaTree, FaSnowflake } from "react-icons/fa";
import { GiDesert, GiWoodCabin, GiCampingTent, GiIsland } from "react-icons/gi";

interface Category {
  name: string;
  path: string;
  icon: JSX.Element;
}

const BASE_PATH = "/HomeList/ChaletContainer";

const SupChalets: React.FC = () => {
  const navi = useNavigate();
  const location = useLocation();

  const categories: Category[] = [
    { name: "Mountain", path: `${BASE_PATH}/Mountain`, icon: <FaMountain size={26}/> },
    { name: "Alpine", path: `${BASE_PATH}/Alpine`, icon: <FaSnowflake size={26}/> },
    { name: "Beach", path: `${BASE_PATH}/Beach`, icon: <FaUmbrellaBeach size={26}/> },
    { name: "Desert", path: `${BASE_PATH}/Desert`, icon: <GiDesert size={26}/> },
    { name: "Forest", path: `${BASE_PATH}/Forest`, icon: <FaTree size={26}/> },
    { name: "Lakeview", path: `${BASE_PATH}/Lakeview`, icon: <GiIsland size={26}/> },
    { name: "Wooden", path: `${BASE_PATH}/Wooden`, icon: <GiWoodCabin size={26}/> },
    { name: "Eco", path: `${BASE_PATH}/Eco`, icon: <GiCampingTent size={26}/> },
  ];

  const renderCategory = (cat: Category) => {
    const isActive = location.pathname === cat.path;

    return (
      <div
        key={cat.name}
        onClick={() => navi(cat.path)}
        className="flex flex-col items-center text-center cursor-pointer 
                   transition-transform duration-200 hover:scale-105 min-w-[80px]"
      >
        <div
          className={`w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 
            ${isActive ? "border-2 border-sky-500" : ""}`}
        >
          <div className="text-gray-700">{cat.icon}</div>
        </div>
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

export default SupChalets;
