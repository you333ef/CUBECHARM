import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 w-full py-4  border-t border-gray-300 hidden md:block lg:block bottom-0 left-0">
      <div className="container mx-auto text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} Occili. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
