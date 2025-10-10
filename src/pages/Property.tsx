import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { FiPhone } from "react-icons/fi";
import { GrLocation } from "react-icons/gr";
import { IoShareSocialOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa6";
import { AiOutlineMessage } from "react-icons/ai";
import { FaFontAwesomeFlag } from "react-icons/fa";
import { properties } from "../utils/properties";
import { IoMdStar } from "react-icons/io";
import MediaGallery from "../components/MediaGallery";
import { person } from "../assets/images";

const Property = () => {
 
  return (
    <>
      <Header />
      <div className="container min-h-screen mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 mt-[12%] gap-6 md:mb-[10%] md:mt-[3%]">
        {/* Left Section: Image & Gallery */}
        <div className="bg-white rounded-lg">
          <div className="flex flex-col justify-between items-start mb-1">
            <h1 className="text-4xl mb-4 font-bold text-skyline-blue md:text-gray-800 lg:text-gray-800">
              Luxury Appartment
            </h1>
          </div>
          {/* showing price in mobile view */}
          <div className="flex block md:hidden lg:hidden justify-between items-center mb-[5%]">
            <h1 className="text-2xl font-bold ">60000 EGP</h1>
          </div>
          {/* Image Gallery */}
          <MediaGallery />
          {/* Action Buttons for mobile view */}
          <div className="bg-white p-4 rounded-md block md:hidden lg:hidden">
            <div className="flex justify-around items-center mb-4">
              {/* Location Icon */}
              <div>
                <GrLocation className="w-6 h-6 text-skyline-blue" />
              </div>
              {/* Share Icon */}
              <div>
                <IoShareSocialOutline className="w-6 h-6 text-skyline-blue" />
              </div>

              {/* Heart Icon */}
              <div>
                <FaRegHeart className="w-6 h-6 text-skyline-blue" />
              </div>

              {/* Message Icon */}
              <div>
                <AiOutlineMessage className="w-6 h-6 text-skyline-blue" />
              </div>

              {/* Call Icon */}
              <div>
                <FiPhone className="w-6 h-6 text-skyline-blue" />
              </div>
            </div>
            <div className="rounded-md p-2 text-center shadow-[0_9px_14px_rgba(0,0,0,0.1),0_9px_28px_rgba(0,0,0,0.05)]">
              <Link
                to="/pro-mode"
                className="text-skyline-blue text-xl font-bold tracking-wider"
              >
                PRO - MODE
              </Link>
            </div>
      
          </div>
          <div className="mt-4">
            <h2 className="text-xl font-semibold mb-2">Characteristics</h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                <strong>Size:</strong> 150m²
              </li>
              <li>
                <strong>Bathrooms:</strong> 2
              </li>
              <li>
                <strong>Rooms:</strong> 5
              </li>
              <li>
                <strong>Location:</strong> Cairo
              </li>
            </ul>
          </div>
          <div className="mt-7">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-600 leading-relaxed">
              Brand New Fully Furnished 1BR Brand New Fully Furnished 1BR Brand
              New Fully Furnished 1BR Brand New Fully Furnished 1BRBrand New
              Fully Furnished 1BRBrand New Fully Furnished 1BRBrand New Fully
              Furnished 1BRBrand New Fully Furnished 1BRBrand New Fully
              Furnished 1BRBrand New Fully Furnished 1BRBrand New Fully
              Furnished 1BR
            </p>
          </div>
          <div className="flex lg:hidden flex-col items-start mt-4">
            <Link className="text-lg font-semibold mt-2 text-skyline-blue" to="/account/user-profile">
              Yacine dev
            </Link>
            <div className="flex flex-row items-center mt-1">
              <span className="text-md font-semibold">4.8</span>
              <IoMdStar className="text-yellow-400" size={20} />
              <p className="ml-1 text-sm font-semibold">(120 Reviews)</p>
            </div>
            <h3 className="text-sm font-normal mt-1">
              Member since Oct 5, 2024
            </h3>
          </div>
          <div className="flex cursor-pointer flex-row items-center py-2 mt-8 md:-mb-10 justify-center rounded-md space-x-2 bg-gray-100  shadow-md hover:bg-gray-200 transition duration-200 ease-in-out">
            <FaFontAwesomeFlag className="text-red-600" size={17} />
            <Button
              name="Report this Ad"
              className=" text-red-600 font-medium"
            />
          </div>

          {/* Related ads section */}
          <h1 className="mt-[8%] text-xl font-semibold p-1">Related Ads</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-1 mb-2 lg:-mb-20 md:-mb-20">
            {properties.slice(0, 3).map((ad) => (
              <div
                key={ad.id}
                className="border rounded-lg shadow-md overflow-hidden flex flex-col justify-between"
              >
                <img
                  src={ad.image}
                  alt={ad.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-blue-600 font-semibold text-lg">
                    {ad.title}
                  </h2>
                  <p className="text-lg font-bold text-black">{ad.price}</p>
                  <p className="text-gray-600">{ad.location}</p>
                  <p className="text-gray-400 text-sm">3 September 16:22</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section: Product Details for desktop view */}
        <div className="bg-white rounded-lg p-6">
          <div className="flex hidden md:block lg:block justify-between items-center mb-[5%]">
            <h1 className="text-4xl font-bold">60000 EGP</h1>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col space-y-4 ml-auto">
        
            <Button
              name="Write a message"
              className="bg-skyline-blue hidden md:block lg:block text-white text-lg py-3 px-6 rounded-lg w-2/4 hover:bg-sky-blue"
            />

            <Link
              to="/pro-mode"
              className="px-8 text-center hidden md:block lg:block w-2/4 py-2 bg-white text-blue-500 font-bold rounded-md text-xl tracking-wide hover:shadow-lg shadow-[0_9px_14px_rgba(0,0,0,0.1),0_9px_28px_rgba(0,0,0,0.05)] hover:bg-gray-100 transition-all"
            >
              PRO - MODE
            </Link>
                  <Link
              to="/PaymentContainer/Pay_FirstStep"
              className="px-8 text-center hidden md:block lg:block w-2/4 py-2 bg-green-500 text-white font-bold rounded-md text-xl tracking-wide hover:shadow-lg shadow-[0_9px_14px_rgba(0,0,0,0.1),0_9px_28px_rgba(0,0,0,0.05)] transition-all"
            >
            Pay Now
            </Link>
            
            <div className="md:flex lg:flex hidden md:flex-col md:items-start md:mt-10 lg:flex-col lg:items-start lg:mt-10">
              <Link className="flex gap-4 items-center text-lg font-semibold mt-2 text-skyline-blue" to="/account/user-profile">
                <span>Yacine dev</span> <img src={person} alt="profile" className="h-8 w-8 rounded-full object-cover border border-skyline-blue"/>
              </Link>
              <div className="flex flex-row items-center mt-1">
                <span className="text-md font-semibold">4.8</span>
                <IoMdStar className="text-yellow-400" size={20} />
                <p className="ml-1 text-sm font-semibold">(120 Reviews)</p>
              </div>
              <h3 className="text-sm font-normal mt-1">
                Member since Oct 5, 2024
              </h3>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Property;
