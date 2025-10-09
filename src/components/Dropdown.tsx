import React, { useState } from "react";

import { CgProfile } from "react-icons/cg";
import { MdOutlineLogin } from "react-icons/md";
import { RiFunctionLine, RiWechatLine } from "react-icons/ri";

import { IoCaretDownSharp } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserCircle, FaLock, FaEdit } from "react-icons/fa";  //New Icons To Dropdown 
import { AiOutlineUser } from "react-icons/ai";
import { FaCubes, FaUser, FaShieldAlt, FaEnvelope } from "react-icons/fa";
import { SiHelpdesk } from "react-icons/si";



import { Link } from "react-router-dom";

function Dropdown() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownSetting, setIsDropdownSetting] = useState(false);
    const [isCUBECHARM, setCUBECHARM] = useState(false);


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
        <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <ul className="py-1">
                      <Link
                  to="/HomeList/ProfileE/Account"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  <AiOutlineUser className="mr-2" size={18} />
                  Account
                </Link>
            <Link
              to="/account/my-ads"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              <RiFunctionLine className="mr-2" size={19} />
              My Ads
            </Link>
            <Link
              to="/account/my-favorites"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              <IoMdHeartEmpty className="mr-2" size={19} />
              My Favorites
            </Link>
                 

            {/* Profile Settings Dropdown */}
            <li
              className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
              onClick={() => setIsDropdownSetting(!isDropdownSetting)}
            >
              <span className="flex items-center">
                <IoSettingsOutline className="mr-2" size={19} />
                Profile Settings
              </span>
              <IoCaretDownSharp
                className={`transform transition-transform ${
                  isDropdownSetting ? "rotate-180" : ""
                }`}
              />
            </li>
            {isDropdownSetting && (
              <ul className="ml-6">
           
                <Link
                  to="/HomeList/ProfileE/ProfileInfo"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  <FaUserCircle className="mr-2" size={18} />
                  Profile Info
                </Link>
                <Link
                  to="/auth/ChangePass"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  <FaLock className="mr-2" size={18} />
                  Change Password
                </Link>
                <Link
                  to="/HomeList/ProfileE/UpdateProfile"
                  className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                >
                  <FaEdit className="mr-2" size={18} />
                  Update Profile
                </Link>
           
              </ul>
            )}

            <Link
              to="/chat"
              className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
              <RiWechatLine className="mr-2" size={19} />
              Chat
            </Link>
  <li
  className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
  onClick={() => setCUBECHARM(!isCUBECHARM)}
>
  <span className="flex items-center">
    <FaCubes className="mr-2" size={18} /> 
    CUBECHARM
  </span>
  <IoCaretDownSharp
    className={`transform transition-transform ${
      isCUBECHARM ? "rotate-180" : ""
    }`}
  />
</li>

{isCUBECHARM && (
  <ul className="ml-6">
    <Link
      to="/HomeList/ProfileE/About"
      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
    >
      <FaUser className="mr-2" size={18} /> 
      About
    </Link>
    <Link
      to="/HomeList/ProfileE/Privacy"
      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
    >
      <FaShieldAlt className="mr-2" size={18} /> 
      Privacy Policy
    </Link>
    <Link
      to="/HomeList/ProfileE/Contact"
      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
    >
      <FaEnvelope className="mr-2" size={18} /> 
      Contact
    </Link>
      <Link
      to="/HomeList/ProfileE/Help"
      className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
    >
      <SiHelpdesk  className="mr-2" size={18} /> 
     Help
    </Link>
  </ul>
)}



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
