import React from "react";
import Button from "./Button";
import Input from "./Input";
import { IoMdAttach } from "react-icons/io";
import { MdKeyboardVoice } from "react-icons/md";
import Image from "./Image";

const MobileChatConversation = () => {
  return (
    <>
      <div className="flex flex-col py-[14%] block md:hidden lg:hidden h-screen max-w-full bg-white shadow-lg rounded-lg">
        {/* Header Section */}
        <div className="border-b p-2 bg-white flex items-center justify-between text-gray-700">
          <div className="flex items-center">
            <Image
              src="https://via.placeholder.com/50"
              alt="Chat"
              className="w-12 h-12 rounded-full mr-3 border-2 border-white"
              loading="lazy"
            />
            <h2 className="text-lg font-semibold">Yacine Agent</h2>
          </div>
        </div>

        {/* Messages Section */}
        <div className="flex-grow p-4 overflow-y-auto bg-gray-100">
          {/* Sender Messages */}
          <div className="space-y-1">
            <div className="flex justify-end">
              <div className="bg-skyline-blue text-white rounded-lg px-4 py-2 max-w-[80%] sm:max-w-xs shadow">
                <p className="text-base">Hello Yacine Agent</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-skyline-blue text-white rounded-lg px-4 py-2 max-w-[80%] sm:max-w-xs shadow">
                <p className="text-base">I just seen your ad</p>
              </div>
            </div>
            <div className="flex justify-end">
              <div className="bg-skyline-blue text-white rounded-lg px-4 py-2 max-w-[80%] sm:max-w-xs shadow">
                <p className="text-base">
                  I was wondering if this property is for rent or for sale
                  because you didn’t mention that.
                </p>
              </div>
            </div>
          </div>

          {/* Receiver Messages */}
          <div className="space-y-1 mt-4">
            <div className="flex justify-start">
              <div className="bg-white text-gray-700 rounded-lg px-4 py-2 max-w-[80%] sm:max-w-xs shadow">
                <p className="text-base">Hello</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white text-gray-700 rounded-lg px-4 py-2 max-w-[80%] sm:max-w-xs shadow">
                <p className="text-base">Yeah, this property is for sale</p>
              </div>
            </div>
            <div className="flex justify-start">
              <div className="bg-white text-gray-700 rounded-lg px-4 py-2 max-w-[80%] sm:max-w-xs shadow">
                <p className="text-base">for 100,000 EGP</p>
              </div>
            </div>
          </div>
        </div>

        {/* Input Section */}
        <div className="p-4 bg-white border-t flex items-center shadow-inner">
          <div className="flex flex-row bg-white rounded-md p-1.5 gap-1">
            <IoMdAttach className="text-skyline-blue" size={26} />
            <MdKeyboardVoice className="text-skyline-blue mr-1" size={27} />
          </div>
          <Input
            type="text"
            name="message"
            className="flex-grow w-full py-3.5 outline-none p-3 border border-gray-300 rounded-lg outline-none focus:ring focus:ring-blue-500"
            placeholder="Type your message..."
          />
          <Button
            name="Send"
            className="ml-2 bg-skyline-blue text-white px-4 py-3.5 rounded-lg shadow hover:bg-sky-blue transition"
          />
        </div>
      </div>
    </>
  );
};

export default MobileChatConversation;
