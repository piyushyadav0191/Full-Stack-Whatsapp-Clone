import EmojiPicker from "emoji-picker-react";
import { useEffect, useState } from "react";
import { CloseIcon, EmojiIcon } from "../../../svg";

export default function EmojiPickerApp({
  textRef,
  message,
  setMessage,
  showPicker,
  setShowPicker,
  setShowAttachments,
}) {
  const [cursorPosition, setCursorPosition] = useState();
  useEffect(() => {
    textRef.current.selectionEnd = cursorPosition;
  }, [cursorPosition]);
  const handleEmoji = (emojiData, e) => {
    const { emoji } = emojiData;
    const ref = textRef.current;
    ref.focus();
    const start = message.substring(0, ref.selectionStart);
    const end = message.substring(ref.selectionStart);
    const newText = start + emoji + end;
    setMessage(newText);
    setCursorPosition(start.length + emoji.length);
  };
  return (
    <li className="w-full">
      <button
        className="btn"
        type="button"
        onClick={() => {
          setShowAttachments(false);
          setShowPicker((prev) => !prev);
        }}
      >
        {showPicker ? (
          <CloseIcon className="dark:fill-dark_svg_1" />
        ) : (
          <EmojiIcon className="dark:fill-dark_svg_1" />
        )}
      </button>
      {/*Emoji picker*/}
      {showPicker ? (
        <div className="openEmojiAnimation absolute bottom-[60px] left-[-0.5px] w-full">
          <EmojiPicker theme="dark" onEmojiClick={handleEmoji} />
        </div>
      ) : null}
    </li>
  );
}
