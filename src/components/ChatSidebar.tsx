import { useNavigate, useLocation } from "react-router-dom";
import MobileChatSidebar from "./MobileChatSidebar";
import Image from "./Image";

const ChatSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleConversationClick = (conversationId: number) => {
    navigate(`/chat/messages/${conversationId}`);
  };

  const activeConversationId = location.pathname.split("/").pop();

  return (
    <>
      <div className="w-full md:w-1/4 flex hidden md:block lg:block bg-white h-screen p-0">
        {/* Conversations List */}
        <div className="bg-gray-100 h-full w-full overflow-y-auto">
          {/* Header */}
          <div className="md:bg-gray-50 lg:bg-gray-50 py-4 px-4 sticky top-0">
            <h2 className="text-2xl font-semibold text-gray-800">Chats</h2>
          </div>

          {/* Conversation Item */}
          <div
            onClick={() => handleConversationClick(1)}
            className={`flex items-center py-4 px-4 cursor-pointer hover:bg-gray-200 transition-colors ${
              activeConversationId === "1" ? "bg-gray-300" : ""
            }`}
          >
            <Image
              src="https://via.placeholder.com/50"
              alt="Avatar"
              className="w-14 h-14 rounded-full"
              loading="lazy"
            />
            <div className="flex-1 pl-3">
              <div className="flex justify-between">
                <p className="font-medium text-base text-gray-900">
                  Conversation 1
                </p>
                <span className="text-xs text-gray-500">Sep 03</span>
              </div>
              <p className="text-sm text-gray-600 truncate">
                Hello, I would like to rent this apartment.
              </p>
            </div>
          </div>

          {/* Another Conversation Item */}
          <div
            onClick={() => handleConversationClick(2)}
            className={`flex items-center py-4 px-4 cursor-pointer hover:bg-gray-200 transition-colors ${
              activeConversationId === "2" ? "bg-gray-300" : ""
            }`}
          >
            <img
              src="https://via.placeholder.com/50"
              alt="Avatar"
              className="w-14 h-14 rounded-full"
              loading="lazy"
            />
            <div className="flex-1 pl-3">
              <div className="flex justify-between">
                <p className="font-medium text-base text-gray-900">
                  Conversation 2
                </p>
                <span className="text-xs text-gray-500">Sep 03</span>
              </div>
              <p className="text-sm text-gray-600 truncate">
                Hello, I would like to rent this apartment.
              </p>
            </div>
          </div>

          {/* Add more conversation items as needed */}
        </div>
      </div>
      <MobileChatSidebar />
    </>
  );
};

export default ChatSidebar;
