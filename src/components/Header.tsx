import { Link } from "react-router-dom";
import Searchbox from "./Searchbox";
import MobileNavBottom from "./MobileNavBottom";
import MobileTopNavbar from "./MobileTopNavbar";
import Dropdown from "./Dropdown";
import { RiFunctionAddLine } from "react-icons/ri";
import { useState } from "react";
import LoginModal from "./LoginModal";
import Image from "./Image";
import { logo } from "../assets/images";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAuth] = useState(true);
  return (
    <>
      <header className="bg-white shadow-sm w-full hidden md:block">
        <div className="container mx-auto flex justify-between items-center py-2 px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-[-28px]">
            <div className="w-[6.5rem] flex items-center justify-center">
              <Image
                src={logo}
                alt="Occili Logo"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <span className="text-2xl font-bold text-gray-700 ml-2">
              Occili
            </span>
          </Link>

          {/* Searchbox */}
          <div className="flex-grow hidden md:block px-6">
            <Searchbox />
          </div>

          {/* Dropdown and Post Ad Button */}
          <div className="flex items-center space-x-3">
            {isAuth ? (
              <Dropdown />
            ) : (
              <Link to="#" onClick={() => setIsModalOpen(!isModalOpen)}>
                Login & Registration
              </Link>
            )}

            <Link
              to="/create-ad"
              className="flex items-center text-sm md:text-base bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white transition-all duration-300 ease-in-out"
            >
              <RiFunctionAddLine className="mr-2" size={20} />
              Post Ad
            </Link>
          </div>
        </div>
      </header>
      <LoginModal isModalOpen={isModalOpen} setIsmodalOpen={setIsModalOpen} />
      <MobileTopNavbar />
      <MobileNavBottom />
    </>
  );
};

export default Header;
