import React, { useState } from "react";
import PropertyCard from "../components/PropertyCard";
import FavoriteCard from "../components/FavoriteCard";
import Button from "../components/Button";
import Skeleton from "../components/Skeleton";
import { restaurants } from "../utils/restaurants";

// DATA TYPES RESTAURANTS
interface Restaurant {
  id: number;
  title: string;
  image: string;
  price: string;
  location: string;
  description: string;
  category: string;
}

const RestaurantList: React.FC = () => {
  const [loading] = useState<boolean>(false);

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-2xl ml-3 font-semibold mb-3 text-gray-700">
        Restaurants<br /> recommended for you
      </h2>

      {/* Main grid layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-5 p-2">
        {loading ? (
          <Skeleton />
        ) : (
          <div className="grid mb-[15%] md:mb-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {restaurants.map((restaurant) => (
              <PropertyCard
                key={restaurant.id}
                id={restaurant.id}
                title={restaurant.title}
                image={restaurant.image}
                location={restaurant.location}
                price={restaurant.price}
                description={restaurant.description}
                className="w-full"
              />
            ))}
          </div>
        )}

        {/* Favorite Card */}
        <div className="hidden lg:block">
          <h1 className="mb-1 text-lg font-semibold">Restaurants List</h1>
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

export default RestaurantList;
