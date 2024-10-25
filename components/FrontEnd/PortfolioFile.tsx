"use client";

import { CardDemo } from "./CardDemo";
import { CarouselPlugin } from "./Album";
import { Cover } from "../ui/cover";
import VideoPlayer from './VideoPlayer';

export default function PortfolioFile() {

  interface VideoData {
    videoUrl: string;
  }

  interface TheFabricClub {
    type: string;
    imageUrl: string;
  }

  interface Waves {
    type: string;
    imageUrl: string;
  }

  const data1: TheFabricClub[] = [
    { type: "Photography", imageUrl: "/tfc1.jpg" },
    { type: "Photography", imageUrl: "/tfc2.jpg" },
    { type: "Photography", imageUrl: "/tfc3.jpg" },
    { type: "Photography", imageUrl: "/tfc4.jpg" },
    { type: "Photography", imageUrl: "/tfc5.jpg" },
    { type: "Photography", imageUrl: "/tfc6.jpg" },
  ];

  const data2: Waves[] = [
    { type: "Photography", imageUrl: "/waves1.jpg" },
    { type: "Photography", imageUrl: "/waves2.jpg" },
    { type: "Photography", imageUrl: "/waves3.jpg" },
  ];

  const data: VideoData[] = [
    { videoUrl: "https://www.youtube.com/watch?v=kUfO5y7ONmA&t=1s" },
    { videoUrl: "https://www.youtube.com/watch?v=7NTRcYbExv8" },
    { videoUrl: "https://www.youtube.com/watch?v=HEwGCDGIA1o" },
    { videoUrl: "https://www.youtube.com/watch?v=Zrs9J4JDdx0" },
  ];

  return (
    <div className="p-4 sm:p-6 md:p-8">
      {/* Main Heading */}
      <div className="py-5 flex w-full justify-center">
        <h2 className="max-w-7xl mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Your Vision, Our Creation
        </h2>
      </div>

      {/* Carousel for TheFabricClub and Waves */}
      <div className="flex flex-wrap justify-center max-w-screen-lg mx-auto mt-8">
        <CarouselPlugin data={data1} />
        <CarouselPlugin data={data2} />
      </div>

      {/* Video Section Heading */}
      <div className="w-full py-5 pb-10 flex justify-center">
        <h2 className="max-w-7xl mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Some of our Videos
        </h2>
      </div>

      {/* Video Players */}
      <div className="w-full flex flex-wrap text-center justify-center items-center gap-6 px-2 md:px-8">
        {data.map((item, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 mr-4">
            <VideoPlayer videoUrl={item.videoUrl} />
          </div>
        ))}
      </div>
    </div>
  );
}
