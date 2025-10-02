import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="p-6 bg-gray-100 min-h-screen">
        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Categories Box */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              Categories
            </h3>
            <p className="text-4xl font-bold text-blue-500">5</p>
          </div>

          {/* Properties Box */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              Properties
            </h3>
            <p className="text-4xl font-bold text-green-500">10</p>
          </div>

          {/* Users Box */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Users</h3>
            <p className="text-4xl font-bold text-red-500">20</p>
          </div>
        </div>

        {/* Recent Properties Table */}
        <div className="bg-white p-6 rounded-lg shadow-md">
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
      </div>
    </>
  );
};

export default Dashboard;
