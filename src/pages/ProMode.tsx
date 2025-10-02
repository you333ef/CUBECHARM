import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const ProMode = () => {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-5xl text-gray-500 font-bold mb-8 animate-pulse">
          Coming Soon
        </h1>
        <p className="text-gray-400 text-lg text-center mb-8">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default ProMode;
