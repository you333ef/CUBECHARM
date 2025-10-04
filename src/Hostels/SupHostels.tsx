import { useNavigate, useLocation } from "react-router-dom";
import { FaBed, FaHome, FaUsers, FaPrayingHands, FaBook } from "react-icons/fa";
import { GiSchoolBag, GiTwoCoins, GiSofa, GiHouse } from "react-icons/gi";

// short type for category items
interface Category {
  name: string;
  path: string;
  icon: JSX.Element;
}

// keep base path in one place
const BASE_PATH = "/HomeList/Hostels";

const SupHostels: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // main hostel categories (short names, no repeated word "Hostel")
  const categories: Category[] = [
    { name: "Hostel", path: `${BASE_PATH}/Hostel`, icon: <FaBed size={24}/> },
    { name: "Guest House", path: `${BASE_PATH}/GuestHouse`, icon: <FaHome size={24}/> },
    { name: "Dormitory", path: `${BASE_PATH}/Dormitory`, icon: <FaUsers size={24}/> },
    { name: "Youth", path: `${BASE_PATH}/YouthHostel`, icon: <GiTwoCoins size={24}/> }, // youth hostel
    { name: "Monastery", path: `${BASE_PATH}/Monastery`, icon: <FaPrayingHands size={24}/> },
    { name: "Student Housing", path: `${BASE_PATH}/StudentHousing`, icon: <GiSchoolBag size={24}/> },
    { name: "Shared Room", path: `${BASE_PATH}/SharedRoom`, icon: <GiSofa size={24}/> },
    { name: "Couchsurfing", path: `${BASE_PATH}/Couchsurfing`, icon: <GiHouse size={24}/> },
    { name: "Cultural Stay", path: `${BASE_PATH}/CulturalStay`, icon: <FaBook size={24}/> },
    { name: "Temporary", path: `${BASE_PATH}/TemporaryHousing`, icon: <GiTwoCoins size={24}/> },
  ];

  // render single item
  const renderCategory = (cat: Category) => {
    const isActive = location.pathname === cat.path;
    return (
      <div
        key={cat.name}
        onClick={() => navigate(cat.path)}
        className="flex flex-col items-center text-center cursor-pointer transition-transform duration-200 hover:scale-105 min-w-[80px]"
      >
        {/* icon circle, simple active highlight */}
        <div className={`w-14 h-14 flex items-center justify-center rounded-full bg-gray-100 ${isActive ? "border-2 border-sky-500" : ""}`}>
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

export default SupHostels;
