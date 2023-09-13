import {
  CameraIcon,
  ContactIcon,
  DocumentIcon,
  PollIcon,
  StickerIcon,
} from "../../../../../svg";
import DocumentAttachment from "./DocumentAttachment";
import PhotoAttachment from "./PhotoAttachment";

export default function Menu() {
  return (
    <ul className="absolute bottom-14 openEmojiAnimation">
      <li>
        <button type="button" className="rounded-full">
          <PollIcon />
        </button>
      </li>
      <li>
        <button type="button" className="bg-[#0EABF4] rounded-full">
          <ContactIcon />
        </button>
      </li>
      <DocumentAttachment />
      <li>
        <button type="button" className="bg-[#D3396D] rounded-full">
          <CameraIcon />
        </button>
      </li>
      <li>
        <button type="button" className="rounded-full">
          <StickerIcon />
        </button>
      </li>
      <PhotoAttachment />
    </ul>
  );
}
