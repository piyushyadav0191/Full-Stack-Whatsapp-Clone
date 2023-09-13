import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import Message from "./Message";
import Typing from "./Typing";
import FileMessage from "./files/FileMessage";

export default function ChatMessages({ typing }) {
  const { messages, activeConversation } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.user);
  const endRef = useRef();
  useEffect(() => {
    scrollToBottom();
  }, [messages, typing]);
  const scrollToBottom = () => {
    endRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className="mb-[60px] bg-[url('https://res.cloudinary.com/dmhcnhtng/image/upload/v1677358270/Untitled-1_copy_rpx8yb.jpg')]
    bg-cover bg-no-repeat
    "
    >
      {/*Container*/}
      <div className="scrollbar overflow_scrollbar overflow-auto py-2 px-[5%]">
        {/*Messages*/}
        {messages &&
          messages.map((message) => (
            <>
              {/*Message files */}
              {message.files.length > 0
                ? message.files.map((file) => (
                    <FileMessage
                      FileMessage={file}
                      message={message}
                      key={message._id}
                      me={user._id === message.sender._id}
                    />
                  ))
                : null}
              {/*Message text*/}
              {message.message.length > 0 ? (
                <Message
                  message={message}
                  key={message._id}
                  me={user._id === message.sender._id}
                />
              ) : null}
            </>
          ))}
        {typing === activeConversation._id ? <Typing /> : null}
        <div className="mt-2" ref={endRef}></div>
      </div>
    </div>
  );
}
