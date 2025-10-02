import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { Link } from "react-router-dom";
import MobileSearchbar from "./MobileSearchbar";

const MobileTopNavbar = () => {
  return (
    <div className="fixed top-0 w-full bg-white border-b border-gray-200 z-50 block md:hidden">
      <div className="flex justify-between items-center p-2">
        {/* Search Bar for mobile version */}
        <MobileSearchbar />

        {/* Right Icons */}
        <Link to="#" className="flex items-center space-x-3">
          <HiAdjustmentsHorizontal
            className="text-gray-600 text-xl mr-2"
            size={25}
          />
        </Link>
      </div>
    </div>
  );
};

export default MobileTopNavbar;
