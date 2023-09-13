import moment from "moment";
import TraingleIcon from "../../../../svg/triangle";
import FileImageVideo from "./FileImageVideo";
import FileOthers from "./FileOthers";

export default function FileMessage({ FileMessage, message, me }) {
  const { file, type } = FileMessage;
  return (
    <div
      className={`w-full flex mt-2 space-x-3 max-w-xs z-10 ${
        me ? "ml-auto justify-end " : ""
      }`}
    >
      {/*Message Container*/}
      <div className="relative">
        {/* sender user message */}
        {!me && message.conversation.isGroup && (
          <div className="absolute top-0.5 left-[-37px]">
            <img
              src={message.sender.picture}
              alt=""
              className="w-8 h-8 rounded-full"
            />
          </div>
        )}

        <div
          className={`relative h-full dark:text-dark_text_1 rounded-lg
        ${me ? " border border-green_3" : "dark:bg-dark_bg_2"}
        ${
          me && file.public_id.split(".")[1] === "png"
            ? "bg-white"
            : "bg-green_3 p-1"
        }
        `}
        >
          {/*Message*/}
          <p
            className={`h-full text-sm ${
              type !== "IMAGE" && type !== "VIDEO" ? "pb-5" : ""
            }`}
          >
            {type === "IMAGE" || type === "VIDEO" ? (
              <FileImageVideo url={file.secure_url} type={type} />
            ) : (
              <FileOthers file={file} type={type} me={me} />
            )}
          </p>
          {/*Message Date*/}
          <span className="absolute right-1.5 bottom-1.5 text-xs text-dark_text_5 leading-none">
            {moment(message.createdAt).format("HH:mm")}
          </span>
          {/*Traingle*/}
          {!me ? (
            <span>
              <TraingleIcon className="dark:fill-dark_bg_2 rotate-[60deg] absolute top-[-5px] -left-1.5" />
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}
