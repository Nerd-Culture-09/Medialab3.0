"use client";

import { CardDemo } from "./CardDemo";
import { CarouselPlugin } from "./Album";
import { Cover } from "../ui/cover";

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
  
  const data: VideoData[] = [
    { type: "Video Production", imageUrl: "https://www.youtube.com/watch?v=Zrs9J4JDdx0" },
  ];
  return (
    <div className="p-4 sm:p-6 md:p-8">
      <h3 className="text-2xl md:text-2xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        <Cover>Your Vision, Our Creation</Cover>
      </h3>

      {/* Carousel for TheFabricClub */}
      <div className="flex flex-wrap justify-center space-x-8 max-w-screen-lg mx-auto mt-8">
        <CarouselPlugin data={data1} />
        <CarouselPlugin data={data2} />
      </div>

      {/* Cards for the rest of the data */}
      <div className="flex flex-wrap items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
        {data.map((item: VideoData, index: number) => (
          <CardDemo
            key={index}
            type={item.type}
            imageUrl={item.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}
