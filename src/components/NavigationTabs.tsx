import { useEffect, useState } from "react";
import Header from "./Header";

import { IoSettingsOutline } from "react-icons/io5";
import { MdFavoriteBorder } from "react-icons/md";

import { useLocation, useNavigate } from "react-router-dom";
import { RiAddLine  } from "react-icons/ri";

const NavigationTabs = () => {
  const location = useLocation(); // Detects current path
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("");

  // Update active tab based on the current URL
  useEffect(() => {
    const path = location.pathname;
    if (path.includes("my-ads")) {
      setActiveTab("my-ads");
    } else if (path.includes("my-favorites")) {
      setActiveTab("my-favorites");
    } else if (path.includes("settings")) {
      setActiveTab("settings");
    }
  }, [location.pathname]);

  return (
    <>
      <Header />
      <div className="hidden md:block lg:block">
        <div className="container mt-[13%] md:mt-0 lg:mt-0 mx-auto flex flex-row sm:flex-row items-center sm:space-x-6 border-b py-4 px-6">
          <div
            onClick={() => navigate("/account/my-ads")}
            className={`cursor-pointer ${
              activeTab === "my-ads"
                ? "text-blue-600 border-b-2 border-blue-600 pb-2"
                : "text-gray-600 hover:text-black"
            } w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0`}
          >
            <div className="flex justify-center sm:justify-start items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <RiAddLine  className="mr-2" size={19} />
              Ads
            </div>
          </div>
          <div
            onClick={() => navigate("/account/my-favorites")}
            className={`cursor-pointer ${
              activeTab === "my-favorites"
                ? "text-blue-600 border-b-2 border-blue-600 pb-2"
                : "text-gray-600 hover:text-black"
            } w-full sm:w-auto text-center sm:text-left mb-2 sm:mb-0`}
          >
            <div className="flex justify-center sm:justify-start items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <MdFavoriteBorder className="mr-2" size={19} />
              Favorites
            </div>
          </div>
          <div
            onClick={() => navigate("/account/settings")}
            className={`cursor-pointer ${
              activeTab === "settings"
                ? "text-blue-600 border-b-2 border-blue-600 pb-2"
                : "text-gray-600 hover:text-black"
            } w-full sm:w-auto text-center sm:text-left`}
          >
            <div className="flex justify-center sm:justify-start items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <IoSettingsOutline className="mr-2" size={19} />
              Settings
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationTabs;
