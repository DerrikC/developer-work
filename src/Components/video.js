import Video from "../assets/video.mp4";

export default function MediaCard() {
  return (
    <div className="videoContain">
      <video src={Video} autoPlay loop muted />
    </div>
  );
}
