import { useNavigate, useLocation } from "react-router-dom";
import { FaMountain, FaUmbrellaBeach, FaLeaf, FaChurch } from "react-icons/fa";
import { GiDesert, GiFlowers, GiSoccerField, GiDiamondRing, GiIsland } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";

interface Category {
  name: string;
  path: string;
  icon: JSX.Element;
}

const SupResorts = () => {
  const navi = useNavigate();
  const location = useLocation();

  const categories: Category[] = [
    { name: "Beach Resort", path: "/HomeList/RESORTSCONTAINER/Beach", icon: <FaUmbrellaBeach size={26}/> },
    { name: "Mountain Resort", path: "/HomeList/RESORTSCONTAINER/Mountain", icon: <FaMountain size={26}/> },
    { name: "Desert Resort", path: "/HomeList/RESORTSCONTAINER/Desert", icon: <GiDesert size={26}/> },
    { name: "Spa/Wellness Resort", path: "/HomeList/RESORTSCONTAINER/Spa", icon: <GiFlowers size={26}/> },
   
    { name: "Sports Resort", path: "/HomeList/RESORTSCONTAINER/Sports", icon: <GiSoccerField size={26}/> },
    { name: "Eco-Resort", path: "/HomeList/RESORTSCONTAINER/Eco", icon: <FaLeaf size={26}/> },
    { name: "Wedding Resort", path: "/HomeList/RESORTSCONTAINER/Wedding", icon: <GiDiamondRing size={26}/> },
    { name: "All-Inclusive Luxury Resort", path: "/HomeList/RESORTSCONTAINER/LuxuryAll", icon: <GiIsland size={26}/> },
    { name: "Cultural Resort", path: "/HomeList/RESORTSCONTAINER/Cultural", icon: <FaChurch size={26}/> },
  ];

  const renderCategory = (cat: Category) => (
    <div
      key={cat.name}
      onClick={() => navi(cat.path)}
      className="flex flex-col items-center text-center cursor-pointer transition-transform duration-200 hover:scale-105 min-w-[80px]"
    >
      <div
        className={`w-16 h-16 flex items-center justify-center rounded-full bg-gray-100
          ${location.pathname === cat.path ? "border-2 border-sky-500" : ""}`}
      >
        <div className="text-gray-700">{cat.icon}</div>
      </div>
      <p className="text-xs mt-2 text-gray-700">{cat.name}</p>
    </div>
  );

  return (
    <div className="w-full mt-10 sm:mt-10">
      <div className="flex flex-row gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 px-4 py-2">
        {categories.map(renderCategory)}
      </div>
    </div>
  );
};

export default SupResorts;
