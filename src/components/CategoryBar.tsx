import { HiOutlineHomeModern } from "react-icons/hi2";
import { LuHotel } from "react-icons/lu";
import { SiOpenaigym } from "react-icons/si";
import { IoRestaurantOutline } from "react-icons/io5";

const CategoryBar = () => {
  return (
    <div className="w-full justify-center mx-auto md:mt-10 lg:mt-10 mt-[15%] md:p-0 lg:p-0 p-3 md:gap-4 flex items-center overflow-x-auto space-x-8 py-4 scrollbar-hide">
      {/* Category Item */}
      <div className="flex flex-col items-center text-center cursor-pointer">
        <HiOutlineHomeModern size={26} className="text-black" />
        <p className="text-sm font-medium text-black mt-1">Houses</p>
        <div className="w-full h-1 bg-sky-blue mt-1"></div>{" "}
      </div>

      {/* Inactive Category Items */}
      <div className="flex flex-col items-center text-center cursor-pointer hover:text-black">
        <LuHotel size={26} className="text-gray-500" />
        <p className="text-sm text-gray-500 mt-1">Hotels</p>
      </div>

      <div className="flex flex-col items-center text-center cursor-pointer hover:text-black">
        <SiOpenaigym size={26} className="text-gray-500" />
        <p className="text-sm text-gray-500 mt-1">Gym</p>
      </div>

      <div className="flex flex-col items-center text-center cursor-pointer hover:text-black">
        <IoRestaurantOutline size={26} className="text-gray-500" />
        <p className="text-sm text-gray-500 mt-1">Restaurants</p>
      </div>
    </div>
  );
};

export default CategoryBar;
