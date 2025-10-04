import { useNavigate, useLocation } from "react-router-dom";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { LuHotel } from "react-icons/lu";
import { FaUmbrellaBeach, FaBuilding, FaHome, FaCrown, FaMountain, FaBed, FaStar } from "react-icons/fa"; 
import { MdOutlineHolidayVillage } from "react-icons/md";

const CategoryBar = () => {
  const navi = useNavigate();
  const location = useLocation();

  const categories = [
    { name: "Hotels", path: "/HomeList/HOTELSCONTAINER", icon: <LuHotel size={28}/> },
    { name: "Resorts", path: "/HomeList/RESORTSCONTAINER", icon: <FaUmbrellaBeach size={28}/> },
    { name: "Apartments", path: "/HomeList/Apartments", icon: <FaBuilding size={28}/> },
    { name: "Houses", path: "/HomeList/Housesz", icon: <HiOutlineHomeModern size={28}/> },
    { name: "Villas", path: "/HomeList/Villas", icon: <MdOutlineHolidayVillage size={28}/> },
    { name: "Palaces", path: "/HomeList/PalaceContainer", icon: <FaCrown size={28}/> },
    { name: "Chalets", path: "/HomeList/ChaletContainer", icon: <FaMountain size={28}/> },
    { name: "Hostels", path: "/HomeList/Hostels", icon: <FaBed size={28}/> },
    { name: "Homestays", path: "/HomeList/Homestays", icon: <FaHome size={28}/> },
    { name: "Luxury", path: "/HomeList/Luxury", icon: <FaStar size={28}/> },
  ];

  const renderCategory = (cat: any) => (
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

export default CategoryBar;
