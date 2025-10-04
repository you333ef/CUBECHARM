import React from "react";
import { Outlet } from "react-router-dom";
import SupApartments from "../Apartments/SupApartments";

const Apartments: React.FC = () => {
  return (
    <div className="container mx-auto py-5">
     
      <SupApartments />

     
      <Outlet />
    </div>
  );
};

export default Apartments;
