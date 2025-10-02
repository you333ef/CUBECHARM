import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const MobileChatNavTabs = () => {
  const [activeTab, setActiveTab] = useState("all"); // Default active tab
  const navigate = useNavigate();

  const handleTabClick = (tab: string, url: string) => {
    setActiveTab(tab);
    navigate(url); // Change the URL
  };

  return (
    <div className="w-full block md:hidden lg:hidden bg-gray-100 rounded-full p-1 mt-7">
    <div className="flex flex-wrap justify-between items-center">
      <Button
        name="ALL"
        onClick={() => handleTabClick("all", "/chat")}
        className={`flex-1 py-1 text-sm text-center rounded-full ${
          activeTab === "all" ? "bg-sky-blue text-white" : "text-gray-600"
        } transition-all duration-300 ease-in-out`}
      />
  
      <Button
        name="Archived"
        onClick={() => handleTabClick("archived", "/chat/archived")}
        className={`flex-1 py-1 text-sm text-center rounded-full ${
          activeTab === "archived" ? "bg-sky-blue text-white" : "text-gray-600"
        } transition-all duration-300 ease-in-out`}
      />
  
      <Button
        name="Not Reading"
        onClick={() => handleTabClick("not-reading", "/messages/not-reading")}
        className={`flex-1 py-1 text-sm text-center rounded-full ${
          activeTab === "not-reading" ? "bg-sky-blue text-white" : "text-gray-600"
        } transition-all duration-300 ease-in-out`}
      />
  
      <Button
        name="Reading"
        onClick={() => handleTabClick("reading", "/messages/reading")}
        className={`flex-1 py-1 text-sm text-center rounded-full ${
          activeTab === "reading" ? "bg-sky-blue text-white" : "text-gray-600"
        } transition-all duration-300 ease-in-out`}
      />
    </div>
  </div>
  
  );
};

export default MobileChatNavTabs;
