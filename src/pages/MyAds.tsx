import React from "react";
import { RiFunctionAddLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import NavigationTabs from "../components/NavigationTabs";
import Footer from "../components/Footer";
import Image from "../components/Image";
import { noMessageActivate } from "../assets/images";

const MyAds = () => {
  return (
    <>
      <NavigationTabs />
      <div className="flex flex-grow min-h-screen lg:-mb-[1.5%] md:-mt-[9.5%] -mt-[15%] items-center justify-center">
        <div className="w-3/4 mx-auto flex flex-col items-center justify-center">
          {/* Placeholder Content */}
          <div className="text-center">
            <Image
              src={noMessageActivate}
              alt="Illustration"
              width={250}
              className="mx-auto mb-8 mt-[35%]"
              loading="lazy"
            />
            <p className="text-xl text-gray-700">
              Do you have something to sell?
            </p>
            <p className="text-gray-500 mb-2">Create your ad for free today</p>
            <Link
              to="/create-ad"
              className="inline-flex items-center mt-2 shrink-0 rounded-md border border-skyline-blue-600 bg-sky-blue px-12 py-2 text-md font-bold text-white transition hover:bg-transparent hover:text-skyline-blue focus:outline-none focus:ring active:text-skyline-blue"
            >
              <RiFunctionAddLine className="mr-2" size={19} />
              Post Ad
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default MyAds;
