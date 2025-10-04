import { useNavigate, useLocation } from "react-router-dom";
import { 
  FaCity,       
  FaBriefcase, 
  FaLandmark,   
  FaHeartbeat  
} from "react-icons/fa"; 

import { 
  MdFamilyRestroom, 
  MdOutlineLocalAirport 
} from "react-icons/md";

import { 
  GiMoneyStack,   
  GiDiamondRing,  
  GiMicrophone    
} from "react-icons/gi";

const SupHotels = () => {
  const navi = useNavigate(); 
  const location = useLocation();

  const categories = [
    { name: "Budget Hotel", path: "/HomeList/HOTELSCONTAINER/Budget", icon: <GiMoneyStack size={26}/> }, // budget
    { name: "Luxury Hotel", path: "/HomeList/HOTELSCONTAINER/Luxury", icon: <GiDiamondRing size={26}/> }, // luxury
    { name: "Airport Hotel", path: "/HomeList/HOTELSCONTAINER/Airport", icon: <MdOutlineLocalAirport size={26}/> }, // airport
    { name: "City Hotel", path: "/HomeList/HOTELSCONTAINER/City", icon: <FaCity size={26}/> }, // city
    { name: "Family Hotel", path: "/HomeList/HOTELSCONTAINER/Family", icon: <MdFamilyRestroom size={26}/> }, // family
    { name: "Business Hotel", path: "/HomeList/HOTELSCONTAINER/Business", icon: <FaBriefcase size={26}/> }, // business
    { name: "Heritage Hotel", path: "/HomeList/HOTELSCONTAINER/Heritage", icon: <FaLandmark size={26}/> }, // heritage
    { name: "Wellness/Medical Hotel", path: "/HomeList/HOTELSCONTAINER/Wellness", icon: <FaHeartbeat size={26}/> }, // wellness
    { name: "Conference Hotel", path: "/HomeList/HOTELSCONTAINER/Conference", icon: <GiMicrophone size={26}/> }, // conference
  ];

  const renderCategory = (cat: any) => (
    <div
      key={cat.name} // unique key
      onClick={() => navi(cat.path)} // navigate on click
      className="flex flex-col items-center text-center cursor-pointer transition-transform duration-200 hover:scale-105 min-w-[80px]"
    >
      <div
        className={`w-16 h-16 flex items-center justify-center rounded-full bg-gray-100
          ${location.pathname === cat.path ? "border-2 border-sky-500" : ""}`}
      >
        <div className="text-gray-700">{cat.icon}</div> {/* category icon */}
      </div>
      <p className="text-xs mt-2 text-gray-700">{cat.name}</p> {/* category name */}
    </div>
  );

  return (
    <div className="w-full mt-10 sm:mt-10">
      <div className="flex flex-row gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 px-4 py-2">
        {categories.map(renderCategory)} {/* render categories */}
      </div>
    </div>
  );
};

export default SupHotels; 
