import { useNavigate, useLocation } from "react-router-dom";
import { 
  FaHotel, FaUmbrellaBeach, FaUserGraduate, FaVideo, FaCouch, FaUsers,FaBriefcase
} from "react-icons/fa";
import { MdFamilyRestroom } from "react-icons/md";

import { GiMoneyStack, GiDiamondRing } from "react-icons/gi";

interface Category {
  name: string;
  path: string;
  icon: JSX.Element;
}

const SupApartments = () => {
  const navi = useNavigate();
  const location = useLocation();

  const categories: Category[] = [
  { name: "Aparthotel", path: "/HomeList/Apartments/Aparthotel", icon: <FaHotel size={26}/> },
  { name: "Vacation", path: "/HomeList/Apartments/Vacation", icon: <FaUmbrellaBeach size={26}/> },
  { name: "Family", path: "/HomeList/Apartments/Family", icon: <MdFamilyRestroom size={26}/> },
  { name: "Student", path: "/HomeList/Apartments/Student", icon: <FaUserGraduate size={26}/> },
  { name: "Executive", path: "/HomeList/Apartments/Executive", icon: <FaBriefcase size={26}/> },
  { name: "Studio", path: "/HomeList/Apartments/Studio", icon: <FaVideo size={26}/> },
  { name: "Furnished", path: "/HomeList/Apartments/Furnished", icon: <FaCouch size={26}/> },
  { name: "Budget", path: "/HomeList/Apartments/Budget", icon: <GiMoneyStack size={26}/> },
  { name: "Luxury", path: "/HomeList/Apartments/LUX", icon: <GiDiamondRing size={26}/> },
  { name: "Coliving", path: "/HomeList/Apartments/Coliving", icon: <FaUsers size={26}/> },
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

export default SupApartments;
