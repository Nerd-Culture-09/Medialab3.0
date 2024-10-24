"use client";

import { CardDemo } from "./CardDemo";
import { CarouselPlugin } from "./Album";
import { Cover } from "../ui/cover";
import VideoPlayer from './VideoPlayer';

export default function PortfolioFile() {
  
  interface VideoData {
    type: string;
    imageUrl: string;
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
  
  // const data: VideoData[] = [
  //   { type: "Video Production", imageUrl: "https://www.youtube.com/embed/Zrs9J4JDdx0" },
  // ];
  const data: { videoUrl: string }[] = [
    { videoUrl: "https://www.youtube.com/watch?v=kUfO5y7ONmA&t=1s" },
    { videoUrl: "https://www.youtube.com/watch?v=7NTRcYbExv8" },
    { videoUrl: "https://www.youtube.com/watch?v=HEwGCDGIA1o" },
    { videoUrl: "https://www.youtube.com/watch?v=Zrs9J4JDdx0" },

  ];
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="py-5 flex w-full justify-center" >
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Your Vision, Our Creation
        </h2>
      </div>
      {/* Carousel for TheFabricClub */}
      <div className="flex flex-wrap justify-center space-x-8 max-w-screen-lg mx-auto mt-8">
        <CarouselPlugin data={data1} />
        <CarouselPlugin data={data2} />
      </div>
      <div className="w-full py-5 pb-10 flex justify-center">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Some of our Videos
        </h2>
      </div>
      
      <div className="w-screen flex flex-wrap text-center justify-content items-center px-4 md:flex md:px-8 gap-6"> 
        {data.map((item, index) => (
          <div key={index} > 
            <VideoPlayer videoUrl={item.videoUrl} />
          </div>
        ))}
    </div>
    </div>  
  );
}
