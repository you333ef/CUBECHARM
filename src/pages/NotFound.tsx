import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Image from "../components/Image";
import { notFound } from "../assets/images";

const NotFound = () => {
  return (
    <>
      <Header />

      <div className="grid h-screen place-content-center bg-white px-4 mt-[-6rem]">
        <div className="text-center">
          <Image
            src={notFound}
            alt="Not found"
            width={450}
            loading="lazy"
          />
          <h1 className="mt-8 mb-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Page not found{" "}
          </h1>
          <p className="text-gray-500 text-md mb-8">
            Sorry, the page you are looking for doesn't exist.
          </p>
          <Link
            to="/"
            className="px-5 py-3 text-md tracking-wide text-white transition-colors duration-200 bg-skyline-blue rounded-lg shrink-0 sm:w-auto hover:bg-sky-blue "
          >
            Take me home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
