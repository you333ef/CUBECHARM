import ChatSidebar from "../components/ChatSidebar";
import Header from "../components/Header";
import SelectChatArea from "../components/SelectChatArea";

const Chat = () => {
  return (
    <>
      <Header />
      <div className="flex mt-10 px-10 mb-10 flex-col md:flex-row h-screen">
        <ChatSidebar />
        <SelectChatArea />
      </div>
    </>
  );
};

export default Chat;
