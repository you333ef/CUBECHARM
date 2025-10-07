import {
  FaComments,
  FaHeart,
  FaSearch,
  FaUserAlt,
} from "react-icons/fa";
import { RiAddLine } from "react-icons/ri"
import { Link } from "react-router-dom";

const MobileNavBottom = () => {
  return (
    <nav className="fixed z-[50] bottom-0 md:hidden left-0 right-0 bg-white shadow-inner p-3 flex justify-between items-center border-t">
      <Link to="/" className="flex flex-col items-center">
        <FaSearch className="text-xl text-gray-400" />
        <span className="text-xs text-gray-600">Search</span>
      </Link>

      <Link to="/account/my-favorites" className="flex flex-col items-center">
        <FaHeart className="text-xl text-gray-400" />
        <span className="text-xs text-gray-600">Favorites</span>
      </Link>

      <Link to="/account/my-ads" className="flex flex-col items-center">
        <RiAddLine size={23} className="text-xl text-gray-400" />
        <span className="text-xs text-gray-600">Announcements</span>
      </Link>

      <Link to="/chat" className="flex flex-col items-center">
        <FaComments className="text-xl text-gray-400" />
        <span className="text-xs text-gray-600">Messages</span>
      </Link>

      <Link to="/HomeList/ProfileE/Account" className="flex flex-col items-center">
        <FaUserAlt className="text-xl text-gray-400" />
        <span className="text-xs text-gray-600">Profile</span>
      </Link>
    </nav>
  );
};

export default MobileNavBottom;
