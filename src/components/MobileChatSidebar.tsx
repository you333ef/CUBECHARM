// components/MobileChatSidebar.js
import React from "react";
import { useNavigate } from "react-router-dom";
import MobileChatNavTabs from "./MobileChatNavTabs";
import Image from "./Image";

const MobileChatSidebar = () => {
  const navigate = useNavigate();

  const handleConversationClick = (conversationId: number) => {
    navigate(`/chat/messages/${conversationId}`);
  };

  return (
    <>
      <div className="fixed inset-0 bg-white py-6 mt-4 block md:hidden lg:hidden z-5">
        <MobileChatNavTabs />
        <div className="p-1 space-y-1.5 mt-2">
          {[1, 2].map((id) => (
            <div
              key={id}
              onClick={() => handleConversationClick(id)}
              className="flex items-center p-1 w-full rounded-xl cursor-pointer transition-colors transform hover:scale-[1.02] hover:shadow-lg"
            >
              <Image
                src="https://via.placeholder.com/50"
                alt="Avatar"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover"
                loading="lazy"
              />
              <div className="flex-1 pl-3 sm:pl-4">
                <p className="font-semibold text-base sm:text-lg text-gray-800 truncate">
                  Conversation {id}
                </p>
                <p className="text-xs sm:text-sm text-gray-500 truncate">
                  Hello, I would like to rent this apartment.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MobileChatSidebar;
