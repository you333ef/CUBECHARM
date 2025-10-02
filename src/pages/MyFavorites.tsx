import React, { useState } from "react";
import { RiFunctionAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import FavoriteCard from "../components/FavoriteCard";
import NavigationTabs from "../components/NavigationTabs";
import Footer from "../components/Footer";
import Image from "../components/Image";
import { noResultFavorites } from "../assets/images";

const MyFavorites = () => {
  const [isFavorite] = useState(true);

  return (
    <>
      <NavigationTabs />
      {!isFavorite ? (
        <div className="flex flex-grow min-h-screen md:-mt-[10%] lg:-mt-[10%] -mt-[10rem] -mb-5 m-auto items-center justify-center">
          <div className="text-center">
            <Image
              src={noResultFavorites}
              alt="Illustration"
              width={320}
              className="mx-auto mt-[35%]"
              loading="lazy"
            />
            <p className="text-xl text-gray-700 mt-8">
              You don't have any saved Ad
            </p>
            <Link
              to="/create-ad"
              className="inline-flex items-center shrink-0 rounded-md border border-skyline-blue-600 bg-sky-blue px-12 py-2 text-md font-bold text-white transition hover:bg-transparent hover:text-skyline-blue focus:outline-none focus:ring active:text-skyline-blue mt-2"
            >
              <RiFunctionAddLine className="mr-2" size={19} />
              Post Ad
            </Link>
          </div>
        </div>
      ) : (
        <div className="min-h-screen -mb-10 md:mt-10 lg:mt-10 mt-[17%]">
          <div className="grid grid-cols-1 md:grid-cols-3 p-2 md:p-11 lg:p-11 lg:grid-cols-4">
            <Link
              to={`/property/1`}
              className="w-full rounded-lg overflow-hidden"
            >
              <FavoriteCard />
            </Link>
            <Link
              to={`/property/1`}
              className="w-full rounded-lg overflow-hidden"
            >
              <FavoriteCard />
            </Link>
            <Link
              to={`/property/1`}
              className="w-full rounded-lg overflow-hidden"
            >
              <FavoriteCard />
            </Link>
            <Link
              to={`/property/1`}
              className="w-full rounded-lg overflow-hidden"
            >
              <FavoriteCard />
            </Link>
            <Link
              to={`/property/1`}
              className="w-full rounded-lg overflow-hidden"
            >
              <FavoriteCard />
            </Link>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default MyFavorites;
