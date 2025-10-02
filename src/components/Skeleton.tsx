import React from "react";

const Skeleton = () => {
  return (
    <div className="w-full shadow-lg rounded-lg bg-white p-4 animate-pulse">
      <div className="w-full h-40 bg-gray-300 rounded-md"></div>{" "}
      {/* Image placeholder */}
      <div className="mt-4 h-6 bg-gray-300 rounded-md"></div>{" "}
      {/* Title placeholder */}
      <div className="mt-2 h-4 bg-gray-200 rounded-md"></div>{" "}
      {/* Text placeholder */}
      <div className="mt-2 h-4 bg-gray-200 rounded-md"></div>{" "}
      {/* Text placeholder */}
    </div>
  );
};

export default Skeleton;
