import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaCalendarAlt,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ProfileInfo = () => {
  // Fake static data
  const userData = {
    userName: "Yousef Khaled",
    email: "yousef.khaled.frontend@gmail.com",
    country: "Egypt",
    phoneNumber: "01117254520",
    creationDate: "2025-06-27T16:25:20.119Z",
    role: "User",
    isActivated: true,
  };

//  helps display dates in a user-friendly way on the UI
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };


  const navi=useNavigate()
  const NaviTo_Update=():void=>{
    navi("/HomeList/ProfileE/UpdateProfile")

  }

  return (
    <div className="min-h-screen bg-[#f7f9fc] overflow-y-auto font-sans pt-20 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-[#0a0a0f] mb-2">
            Profile Information
          </h1>
          <p className="text-[#6b7280]">
            View and update your account information.
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 lg:p-10 animate-scale-in border border-[#e5e7eb] backdrop-blur-sm">
          <div className="space-y-6">
            {/* User Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="flex items-center gap-2 font-semibold text-[#0a0a0f] text-sm mb-3">
                  <FaUser className="w-4 h-4 text-[#3b82f6]" />
                  User Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={userData.userName}
                    readOnly
                    className="w-full px-5 py-4 border-2 border-[#e5e7eb] rounded-xl text-center bg-[#f9fafb] text-[#0a0a0f] focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 transition-all duration-300 hover:border-[#3b82f6]/50"
                  />
                </div>
              </div>

              <div className="group">
                <label className="flex items-center gap-2 font-semibold text-[#0a0a0f] text-sm mb-3">
                  <FaEnvelope className="w-4 h-4 text-[#3b82f6]" />
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={userData.email}
                    readOnly
                    className="w-full px-5 py-4 border-2 border-[#e5e7eb] rounded-xl text-center bg-[#f9fafb] text-[#0a0a0f] focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 transition-all duration-300 hover:border-[#3b82f6]/50"
                  />
                </div>
              </div>
            </div>

            {/* Country + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="flex items-center gap-2 font-semibold text-[#0a0a0f] text-sm mb-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-[#3b82f6]" />
                  Country
                </label>
                <input
                  type="text"
                  value={userData.country}
                  readOnly
                  className="w-full px-5 py-4 border-2 border-[#e5e7eb] rounded-xl text-center bg-[#f9fafb] text-[#0a0a0f] focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 transition-all duration-300 hover:border-[#3b82f6]/50"
                />
              </div>

              <div className="group">
                <label className="flex items-center gap-2 font-semibold text-[#0a0a0f] text-sm mb-3">
                  <FaPhone className="w-4 h-4 text-[#3b82f6]" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={userData.phoneNumber}
                  readOnly
                  className="w-full px-5 py-4 border-2 border-[#e5e7eb] rounded-xl text-center bg-[#f9fafb] text-[#0a0a0f] focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 transition-all duration-300 hover:border-[#3b82f6]/50"
                />
              </div>
            </div>

            {/* Join Date */}
            <div>
              <div className="group">
                <label className="flex items-center gap-2 font-semibold text-[#0a0a0f] text-sm mb-3">
                  <FaCalendarAlt className="w-4 h-4 text-[#3b82f6]" />
                  Join Date
                </label>
                <input
                  type="text"
                  value={formatDate(userData.creationDate)}
                  readOnly
                  className="w-full px-5 py-4 border-2 border-[#e5e7eb] rounded-xl text-center bg-[#f9fafb] text-[#0a0a0f] focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 transition-all duration-300 hover:border-[#3b82f6]/50"
                />
              </div>
            </div>

            {/* Role + Active Status */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="group">
                <label className="flex items-center gap-2 font-semibold text-[#0a0a0f] text-sm mb-3">
                  <FaShieldAlt className="w-4 h-4 text-[#3b82f6]" />
                  Role
                </label>
                <input
                  type="text"
                  value={userData.role}
                  readOnly
                  className="w-full px-5 py-4 border-2 border-[#e5e7eb] rounded-xl text-center bg-[#f9fafb] text-[#0a0a0f] focus:outline-none focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6]/20 transition-all duration-300 hover:border-[#3b82f6]/50"
                />
              </div>

              <div className="group">
                <label className="flex items-center gap-2 font-semibold text-[#0a0a0f] text-sm mb-3">
                  <FaCheckCircle className="w-4 h-4 text-[#3b82f6]" />
                  Account Status
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={userData.isActivated ? "Active" : "Inactive"}
                    readOnly
                    className={`w-full px-5 py-4 border-2 rounded-xl text-center font-semibold focus:outline-none transition-all duration-300 ${
                      userData.isActivated
                        ? "bg-[#dbeafe] border-[#3b82f6] text-[#3b82f6]"
                        : "bg-[#fee2e2] border-[#ef4444] text-[#ef4444]"
                    }`}
                  />
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="text-center mt-8 pt-6 border-t border-[#e5e7eb]" onClick={NaviTo_Update}>
              <button className="bg-[#3b82f6] hover:bg-[#60a5fa] text-white px-10 py-4 rounded-full font-semibold uppercase shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#3b82f6]/30">
                Change Info
              </button>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="mt-6 bg-[#f3f4f6] rounded-2xl p-6 backdrop-blur-sm border border-[#e5e7eb] animate-fade-in">
          <p className="text-center text-[#6b7280] text-sm">
            Need to update your information? Click the button above to make
            changes to your profile.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
