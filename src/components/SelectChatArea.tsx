import { messageIcon } from "../assets/images";
import Image from "./Image";

const SelectChatArea = () => {
  return (
    <>
      <div className="w-full hidden md:block lg:block md:w-3/4 m-auto bg-white flex flex-col md:p-6">
        <Image
          src={messageIcon}
          alt="message-image"
          loading="lazy"
          width={160}
          className="mb-1 mx-auto"
        />
        <p className="text-semibold text-center md:text-xl">
          Select a conversation to start messaging
        </p>
      </div>
    </>
  );
};

export default SelectChatArea;
