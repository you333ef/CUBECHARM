import React, { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import FavoriteCard from "../components/FavoriteCard";
import Button from "../components/Button";
import Skeleton from "../components/Skeleton";
import { resorts } from "../utils/Resorts";
import SupResorts from "../categoryResorts/SupResorts";


// DATA TYPES Restore
interface Gym {
  id: number;
  title: string;
  image: string;
  price: string;
  location: string;
  description: string;
  category: string;
}

const Resorts: React.FC = () => {
  const [loading] = useState<boolean>(false);

  return (
    <div className="container mx-auto py-5">
     <SupResorts/>
      <h2 className="text-2xl ml-3 font-semibold mb-3 text-gray-700">
        Resorts<br />recommended for you
      </h2>

      {/* Main grid layout for Restore */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-5 p-2">
        {loading ? (
          <Skeleton />
        ) : (
          <div className="grid mb-[15%] md:mb-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {resorts.map((resort) => (
              <PropertyCard
                key={resort.id}
                id={resort.id}
                title={resort.title}
                image={resort.image}
                location={resort.location}
                price={resort.price}
                description={resort.description}
                className="w-full"
              />
            ))}
          </div>
        )}

        {/* Favorite Restore list */}
        <div className="hidden lg:block">
          <h1 className="mb-1 text-lg font-semibold">Gyms List</h1>
          <FavoriteCard />
          <Button
            name="See More"
            className="w-full mt-3 mx-auto bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
          />
        </div>
      </div>
    </div>
  );
};

export default Resorts;
