import { useState } from "react";
import UpdateUserInfo from "../components/UpdateUserInfo";
import UpdatePassword from "../components/UpdatePassword";
import Footer from "../components/Footer";
import NavigationTabs from "../components/NavigationTabs";
import Button from "../components/Button";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("info");
  return (
    <>
      <NavigationTabs />
      <div className="flex min-h-screen flex-grow md:-mt-[10%] lg:-mt-[10%] -mt-5 m-auto items-center justify-center">
        <div className="container px-4">
          <div className="flex flex-col mt-[7%] lg:flex-row mt-5">
            <div className="w-full lg:w-1/4 bg-white shadow-sm rounded-lg p-4 mb-4 lg:mb-0">
              <nav className="space-y-2">
                <Button
                  name="Update Your Profile Information"
                  className={`block w-full text-left py-2 px-3 font-medium ${
                    activeTab === "info"
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-700"
                  }`}
                  onClick={() => setActiveTab("info")}
                />
                <Button
                  name="Update Your Password"
                  className={`block w-full text-left py-2 px-3 font-medium ${
                    activeTab === "password"
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-700"
                  }`}
                  onClick={() => setActiveTab("password")}
                />
              </nav>
            </div>{" "}
            {activeTab === "info" && <UpdateUserInfo />}
            {activeTab === "password" && <UpdatePassword />}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Settings;
