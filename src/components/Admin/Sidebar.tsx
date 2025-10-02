import React from "react";
import { RxDashboard } from "react-icons/rx";
import { LuTableProperties } from "react-icons/lu";
import { MdOutlineCategory, MdOutlineLogin } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import Image from "../Image";
import { logo } from "../../assets/images";

const Sidebar = () => {
  return (
    <>
      <div className="h-min-screen w-64 bg-gray-50 text-gray-600 flex flex-col">
        <Link to="/" className="flex items-center space-x-[-28px]">
          <div className="w-[6.5rem] mt-2 flex items-center justify-center">
            <Image
              src={logo}
              alt="Occili Logo"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <span className="text-2xl font-bold text-gray-700 ml-2">Occili</span>
        </Link>

        <ul className="mt-2 ml-1 flex-grow">
          <li className="p-4 hover:bg-gray-200 text-lg cursor-pointer">
            <Link to="#" className="flex items-center">
              <RxDashboard />
              <span className="ml-2">Dashboard</span>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-200 text-lg cursor-pointer">
            <Link to="#" className="flex items-center">
              <LuTableProperties />
              <span className="ml-2">Properties</span>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-200 text-lg cursor-pointer">
            <Link to="#" className="flex items-center">
              <MdOutlineCategory />
              <span className="ml-2">Categories</span>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-200 text-lg cursor-pointer">
            <Link to="#" className="flex items-center">
              <FiUsers />
              <span className="ml-2">Users</span>
            </Link>
          </li>
          <li className="p-4 hover:bg-gray-200 text-lg cursor-pointer">
            <Link to="#" className="flex items-center">
              <IoSettingsOutline />
              <span className="ml-2">Settings</span>
            </Link>
          </li>
        </ul>

        <div>
          <ul className=" mb-5">
            <li className="p-4 text-lg text-red-500 hover:bg-gray-200 cursor-pointer">
              <Link to="#" className="flex items-center px-12">
                <MdOutlineLogin />
                <span className="ml-2">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
