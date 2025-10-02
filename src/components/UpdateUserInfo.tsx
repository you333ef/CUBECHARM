import { CgProfile } from "react-icons/cg";
import { HiOutlinePhone } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMail } from "react-icons/md";
import Input from "../components/Input";
import Button from "./Button";
import { IoMdStar } from "react-icons/io";

const UpdateUserInfo = () => {
  return (
    <div className="lg:w-3/4 mx-auto shadow-sm bg-white rounded-lg p-6">
      <div className="flex flex-col items-start mb-4">
        <h3 className="text-2xl font-semibold mt-2 text-skyline-blue">
          Yacine dev
        </h3>
        <div className="flex flex-row items-center mt-1">
          <span className="text-md font-semibold">4.8</span>
          <IoMdStar className="text-yellow-400" size={20} />
          <p className="ml-1 text-sm font-semibold">(120 Reviews)</p>
        </div>
      </div>
      {/* First Name Field */}
      <div className="mb-4 w-full">
        <div className="mt-1 relative flex items-center w-full">
          <CgProfile className="absolute left-3 text-gray-500" size={21} />
          <Input
            type="text"
            name="first-name"
            className="block w-full p-4 pl-10 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value="Yacine Dev"
          />
        </div>
      </div>

      {/* Phone Field */}
      <div className="mb-4 w-full">
        <div className="mt-1 relative flex items-center w-full">
          <HiOutlinePhone className="absolute left-3 text-gray-500" size={21} />
          <Input
            type="text"
            name="phone"
            className="block w-full p-4 pl-10 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value="0898787878"
          />
        </div>
      </div>

      {/* City Dropdown */}
      <div className="mb-4 w-full">
        <div className="mt-1 relative flex items-center w-full">
          <GrLocation className="absolute left-3 text-gray-500" size={21} />
          <Input
            type="text"
            name="location"
            className="block w-full p-4 pl-10 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value="Cairo"
          />
        </div>
      </div>

      {/* Email Field */}
      <div className="mb-4 w-full">
        <div className="mt-1 relative flex items-center w-full">
          <MdOutlineMail className="absolute left-3 text-gray-500" size={21} />
          <Input
            type="email"
            name="email"
            className="w-full p-4 pl-10 pr-10 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            value="email@example.com"
          />
        </div>
      </div>
      {/* Save Button */}
      <div className="mt-6 flex justify-start">
        <Button
          name="Save Changes"
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <h3 className="text-sm lg:text-right text-center mt-4 font-normal mb-4">
        Member since Oct 5, 2024
      </h3>
    </div>
  );
};

export default UpdateUserInfo;
