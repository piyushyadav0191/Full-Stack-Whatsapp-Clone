export default function FileImageVideo({ url, type }) {
  return (
    <div className="z-20">
      {type === "IMAGE" ? (
        <img src={url} alt="" className="cursor-pointer" />
      ) : (
        <video src={url} controls className="cursor-pointer"></video>
      )}
    </div>
  );
}
