import { HiOutlineHomeModern } from "react-icons/hi2";
import { LuHotel } from "react-icons/lu";
import { SiOpenaigym } from "react-icons/si";
import { IoRestaurantOutline } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";

const CategoryBar = () => {
  // Navigate to different categories
  const navi = useNavigate();
  const location = useLocation();

  const TO_GYM = (): void => {
    navi("/HomeList/GYMS");
  };
  const TO_HOTELS = (): void => {
    navi("/HomeList/Hotels");
  };
  const TO_RESTURANT = (): void => {
    navi("/HomeList/Resturants");
  };
  const TO_HOME = (): void => {
    navi("/HomeList");
  };

  return (
    <div className="w-full justify-center mx-auto md:mt-10 lg:mt-10 mt-[15%] md:p-0 lg:p-0 p-3 md:gap-4 flex items-center overflow-x-auto space-x-8 py-4 scrollbar-hide">
      <div
        className="flex flex-col items-center text-center cursor-pointer"
        onClick={TO_HOME}
      >
        <HiOutlineHomeModern size={26} className="text-black" />
        <p className="text-sm font-medium text-black mt-1">Houses</p>
        {location.pathname === "/HomeList" && (
          <div className="w-full h-1 bg-sky-blue mt-1"></div>
        )}
      </div>

      <div
        className="flex flex-col items-center text-center cursor-pointer hover:text-black"
        onClick={TO_HOTELS}
      >
        <LuHotel size={26} className="text-gray-500" />
        <p className="text-sm text-gray-500 mt-1">Hotels</p>
        {location.pathname === "/HomeList/Hotels" && (
          <div className="w-full h-1 bg-sky-blue mt-1"></div>
        )}
      </div>

      <div
        className="flex flex-col items-center text-center cursor-pointer hover:text-black"
        onClick={TO_GYM}
      >
        <SiOpenaigym size={26} className="text-gray-500" />
        <p className="text-sm text-gray-500 mt-1">Gym</p>
        {location.pathname === "/HomeList/GYMS" && (
          <div className="w-full h-1 bg-sky-blue mt-1"></div>
        )}
      </div>

      <div
        className="flex flex-col items-center text-center cursor-pointer hover:text-black"
        onClick={TO_RESTURANT}
      >
        <IoRestaurantOutline size={26} className="text-gray-500" />
        <p className="text-sm text-gray-500 mt-1">Restaurants</p>
        {location.pathname === "/HomeList/Resturants" && (
          <div className="w-full h-1 bg-sky-blue mt-1"></div>
        )}
      </div>
    </div>
  );
};

export default CategoryBar;
