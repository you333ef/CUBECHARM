import React from "react";

export const Table = () => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4 text-gray-700">
        Recent Properties
      </h3>
      <table className="w-full text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-3 px-4 text-gray-600">Property Name</th>
            <th className="py-3 px-4 text-gray-600">Location</th>
            <th className="py-3 px-4 text-gray-600">Price</th>
            <th className="py-3 px-4 text-gray-600">Status</th>
          </tr>
        </thead>
        <tbody>
          {/* Example Property 1 */}
          <tr className="border-t">
            <td className="py-3 px-4">Property 1</td>
            <td className="py-3 px-4">New York</td>
            <td className="py-3 px-4">$1,200,000</td>
            <td className="py-3 px-4 text-green-500">Available</td>
          </tr>
          {/* Example Property 2 */}
          <tr className="border-t">
            <td className="py-3 px-4">Property 2</td>
            <td className="py-3 px-4">Los Angeles</td>
            <td className="py-3 px-4">$850,000</td>
            <td className="py-3 px-4 text-green-500">Available</td>
          </tr>
          {/* Example Property 3 */}
          <tr className="border-t">
            <td className="py-3 px-4">Property 3</td>
            <td className="py-3 px-4">Chicago</td>
            <td className="py-3 px-4">$950,000</td>
            <td className="py-3 px-4 text-red-500">Sold</td>
          </tr>
          {/* Example Property 4 */}
          <tr className="border-t">
            <td className="py-3 px-4">Property 4</td>
            <td className="py-3 px-4">Miami</td>
            <td className="py-3 px-4">$750,000</td>
            <td className="py-3 px-4 text-green-500">Available</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
