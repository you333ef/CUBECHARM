import React from "react";
import Input from "./Input";
import Button from "./Button";
import ChatSidebar from "./ChatSidebar";
import Header from "./Header";
import MobileChatConversation from "./MobileChatConversation";
import { MdKeyboardVoice } from "react-icons/md";
import { IoMdAttach } from "react-icons/io";
import Image from "./Image";

const ChatConversation = () => {
  return (
    <>
      <Header />

      <div className="hidden md:flex lg:flex mt-10 px-10 mb-10 flex-row h-screen">
        {/* Chat Sidebar */}
        <ChatSidebar />

        {/* Chat Content */}
        <div className="w-3/4 flex flex-col bg-white">
          {/* Header Section */}
          <div className="border-b p-4 bg-gray-50 flex items-center justify-between">
            <div className="flex items-center">
              <Image
                src="https://via.placeholder.com/50"
                alt="Chat"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mr-3"
                loading="lazy"
              />
              <div>
                <h2 className="text-gray-500 text-base sm:text-lg font-semibold">
                  Yacine Agent
                </h2>
              </div>
            </div>
          </div>

          {/* Messages Section */}
          <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-gray-50">
            {/* Sender Section */}
            <div className="space-y-0.5 mt-4">
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white rounded-xl p-3 max-w-[80%] sm:max-w-xs">
                  <p className="text-base">Hello Yacine Agent</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white rounded-xl p-3 max-w-[80%] sm:max-w-xs">
                  <p className="text-base">I just seen your ad</p>
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-blue-500 text-white rounded-xl p-3 max-w-[80%] sm:max-w-xs">
                  <p className="text-base">
                    I was wondering if this property is for rent or for sale
                    because you didn’t mention that.
                  </p>
                </div>
              </div>
            </div>

            {/* Receiver Section */}
            <div className="space-y-1 mt-4">
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-600 rounded-xl p-3 max-w-[80%] sm:max-w-xs">
                  <p className="text-base">Hello</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-600 rounded-xl p-3 max-w-[80%] sm:max-w-xs">
                  <p className="text-base">Yeah, this property is for sale</p>
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-600 rounded-xl p-3 max-w-[80%] sm:max-w-xs">
                  <p className="text-base">for 100,000 EGP</p>
                </div>
              </div>
            </div>
          </div>

          {/* Input Section */}
          <div className="p-4 bg-gray-50 border-t flex items-center">
            <div className="flex flex-row bg-gray-50 rounded-md ml-1 p-1.5 gap-1">
              <IoMdAttach
                className="text-skyline-blue ml-1 cursor-pointer"
                size={26}
              />
              <MdKeyboardVoice
                className="text-skyline-blue mr-1 cursor-pointer"
                size={28}
              />
            </div>
            <Input
              type="text"
              name="message"
              className="flex-grow p-3 mr-2 w-full border border-gray-300 rounded-xl outline-none focus:ring focus:ring-blue-500"
              placeholder="Type your message..."
            />
            <Button
              name="Send"
              className="ml-2 mr-1 bg-blue-500 text-white px-4 py-2.5 rounded-xl shadow hover:bg-blue-600 transition"
            />
          </div>
        </div>
      </div>

      <MobileChatConversation />
    </>
  );
};

export default ChatConversation;
