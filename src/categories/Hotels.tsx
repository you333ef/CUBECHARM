import React, { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import FavoriteCard from "../components/FavoriteCard";
import Button from "../components/Button";
import Skeleton from "../components/Skeleton";
import { hotels } from "../utils/hotel_json";
import SupHotels from "../categoryHotels/supHotels";

// DATA TYPES HOTELS
interface Hotel {
  id: number;
  title: string;
  image: string;
  price: string;
  location: string;
  description: string;
  category: string;
}

const Hotels: React.FC = () => {
  const [loading] = useState<boolean>(false);

  return (
    <div className="container mx-auto py-5">
     <SupHotels/>
      <h2 className="text-2xl ml-3 font-semibold mb-3 text-gray-700">
        Hotels<br />recommended for you
      </h2>

      {/* Main grid layout for hotels */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-5 p-2">
        {loading ? (
          <Skeleton />
        ) : (
          <div className="grid mb-[15%] md:mb-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {hotels.map((hotel) => (
              <PropertyCard
                key={hotel.id}
                id={hotel.id}
                title={hotel.title}
                image={hotel.image}
                location={hotel.location}
                price={hotel.price}
                description={hotel.description}
                className="w-full"
              />
            ))}
          </div>
        )}

        {/* Favorite hotels list */}
        <div className="hidden lg:block">
          <h1 className="mb-1 text-lg font-semibold">Hotels List</h1>
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

export default Hotels;
