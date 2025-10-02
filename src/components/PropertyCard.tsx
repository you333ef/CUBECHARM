import React from "react";
import { IoMdHeartEmpty, IoMdStar } from "react-icons/io";
import { GrLocation } from "react-icons/gr";
import { Link } from "react-router-dom";
import Image from "./Image";

const PropertyCard = ({
  image,
  price,
  beds,
  baths,
  size,
  description,
  title,
  location,
  id,
}: any) => {
  return (
    <div className="flex-1 bg-white rounded-lg shadow-xs md:shadow-xs lg:shadow-xs overflow-hidden max-w-md">
      <Link to={`/property/${id}`}>
        <Image
          src={image}
          alt="3-room apartment"
          className="w-full h-[20rem] object-cover"
          loading="lazy"
        />
      </Link>

      <div className="p-3 mb-1">
        <div className="flex justify-between items-start">
          <Link to={`/property/${id}`}>
            <h3 className="text-blue-600 font-bold text-xl">{title}</h3>
          </Link>
          <button className="p-1 bg-white rounded-full hover:bg-gray-200">
            <IoMdHeartEmpty className="text-red-500" size={24} />
          </button>
        </div>
        <p className="text-gray-900 text-lg font-semibold">{price}</p>
        <div className="flex items-center mt-2">
          <GrLocation className="mr-2" />
          <p className="text-gray-500 text-md">{location}</p>
          <div className="flex items-center ml-auto">
            <span className="text-md font-semibold">4.8</span>
            <IoMdStar className="text-yellow-400" size={21} />
          </div>
        </div>
        <p className="text-gray-400 text-sm">3 September 16:22</p>
      </div>
    </div>
  );
};

export default PropertyCard;
