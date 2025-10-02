import React, { useState } from "react";

import { CgProfile } from "react-icons/cg";
import { RiFunctionAddLine, RiWechatLine } from "react-icons/ri";
import { MdOutlineLogin } from "react-icons/md";
import { IoCaretDownSharp } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

function Dropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="relative ml-3">
      <button
        className="flex items-center bg-gray-100 text-gray-800 px-3 py-3 rounded-3xl"
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <CgProfile className="mr-2" size={22} />
        Yassine Dev
        <IoCaretDownSharp className="mr-2" />
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <ul className="py-1">
            <Link
              to="/account/my-ads"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              <RiFunctionAddLine className="mr-2" size={19} />
              My Ads
            </Link>
            <Link
              to="/account/my-favorites"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              <IoMdHeartEmpty className="mr-2" size={19} />
              My Favorites
            </Link>
            <Link
              to="/account/settings"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              <IoSettingsOutline className="mr-2" size={19} />
              Settings
            </Link>
            <Link
              to="/chat"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              <RiWechatLine className="mr-2" size={19} />
              Chat
            </Link>

            <li className="flex items-center px-4 py-2 text-red-400 hover:bg-gray-100 cursor-pointer">
              <MdOutlineLogin className="mr-2" size={19} />
              Log Out
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
