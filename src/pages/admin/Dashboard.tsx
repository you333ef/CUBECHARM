import React from "react";
import Sidebar from "../../components/Admin/Sidebar";
import { Table } from "../../components/Admin/Table";

const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div className="p-6 mt-[7%] bg-white w-full m-8 min-h-screen">
        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {/* Categories Box */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              Categories
            </h3>
            <p className="text-4xl font-bold text-skyline-blue">5</p>
          </div>

          {/* Properties Box */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">
              Properties
            </h3>
            <p className="text-4xl font-bold text-green-500">10</p>
          </div>

          {/* Users Box */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2 text-gray-700">Users</h3>
            <p className="text-4xl font-bold text-red-500">20</p>
          </div>
        </div>

        {/* Recent Properties Table */}
        <Table />
      </div>
    </div>
  );
};

export default Dashboard;
