"use client";
import VideoPlayer from "./VideoPlayer";
import VideoPlayerRow from "./VideoPlayerRow";

export default function Projects() {
  interface VideoData {
    videoUrl: string;
  }

  const data: VideoData[] = [
    { videoUrl: "https://youtu.be/Zrs9J4JDdx0" },
    { videoUrl: "https://youtu.be/6N5eZf7vXQo?si=OQNTrNmPk5UaL-VD" },
    { videoUrl: "https://youtu.be/6cvghjGrakU?si=joNJi9a7Gzgm1X7F" },
    { videoUrl: "https://youtu.be/4v43Mk4IrCo?si=2z6uqddtEmKLKtcZ" },
  ];
  return (
    <div className="">
      <div className="py-14 flex w-full justify-center">
        <h2 className="max-w-7xl mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Groove Galaxy
        </h2>
      </div>
      <div className="flex justify-center">
        <VideoPlayerRow
          videoUrls={[
            "https://youtu.be/Zrs9J4JDdx0",
            "https://youtu.be/6N5eZf7vXQo?si=OQNTrNmPk5UaL-VD",
            "https://youtu.be/6cvghjGrakU?si=joNJi9a7Gzgm1X7F",
            "https://youtu.be/4v43Mk4IrCo?si=2z6uqddtEmKLKtcZ",
          ]}
        />
      </div>
    </div>
  );
}
