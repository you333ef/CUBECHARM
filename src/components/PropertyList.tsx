import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import FavoriteCard from "./FavoriteCard";
import { Link } from "react-router-dom";
import Button from "./Button";
import Skeleton from "./Skeleton";
import { properties } from "../utils/properties";

const PropertyList = () => {
  const [loading] = useState(false);

  return (
    <div className="container mx-auto py-5">
      <h2 className="text-2xl ml-3 font-semibold mb-3 text-gray-700">
        Recommendations for you
      </h2>

      {/* Main grid layout for properties and favorite card */}
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-5 p-2">
        {/* Property Cards section */}
        {loading ? (
          <Skeleton />
        ) : (
          <div className="grid mb-[15%] md:mb-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {properties.map((property) => (
              <PropertyCard
                key={property.id}
                id={property.id}
                title={property.title}
                image={property.image}
                location={property.location}
                price={property.price}
                baths={property.baths}
                beds={property.beds}
                size={property.size}
                description={property.description}
                className="w-full" // Ensure full width on mobile
              />
            ))}
          </div>
        )}
        {/* Favorite Card */}

        <div className="hidden lg:block">
          <h1 className="mb-1 text-lg font-semibold">Favorite</h1>
          <FavoriteCard />
          <Link to="/account/my-favorites">
            <Button
              name="All Favorites"
              className="w-full mt-3 mx-auto bg-gray-200 p-2 rounded-lg hover:bg-gray-300"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
