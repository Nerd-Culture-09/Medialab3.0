
"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CardDemo } from "./CardDemo";

export default function Cards() {
  interface CardData {
    type: string;
    imageUrl: string;
    
  }

  const data: CardData[] = [
    { type: "Post Production", imageUrl: "/postproduction.jpg" },
    { type: "Creative Development", imageUrl: "/creativedevelopment.jpg" },
    { type: "Video production", imageUrl: "/videoproduction.jpg" },
    { type: "Photography", imageUrl: "/morephotography.jpg" },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === data.length ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? data.length - 1 : prevIndex - 1
    );
  };

  // Scroll to the current card
  const scrollToCurrent = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: (cardWidth + 24) * currentIndex,
        behavior: "smooth",
      });
    }
  };

  // Update scroll position when currentIndex changes
  useEffect(() => {
    scrollToCurrent();
  }, [currentIndex]);

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4">
       <div className="flex flex-col lg:flex-row text-gray-600 dark:text-gray-300 gap-x-12 md:px-8 relative">
          <div className="lg:max-w-xl flex-shrink-0 flex flex-col justify-center items-center text-center">
            <div className="mt-6 gap-12 sm:mt-0 md:flex lg:block">
              <div className="max-w-2xl">
                <h3 className="text-gray-900 dark:text-gray-200 text-3xl font-semibold sm:text-4xl">
                  What are you waiting for?
                </h3>
                <p className="mt-3 max-w-xl">
                  Checkout what we have for you!
                </p>
              </div>
            </div>
          </div>

          <div className="relative flex flex-grow overflow-x-hidden items-center">
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white dark:bg-slate-800 rounded-full shadow-lg z-10"
              onClick={handlePrevious}
            >
              <ArrowLeft className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
            <div
              ref={scrollRef}
              className="relative flex items-center overflow-x-hidden space-x-6 py-4 lg:py-0"
            >
              {data.map((item: CardData, index: number) => (
                <div
                  key={index}
                  className={`flex w-full transition-transform duration-300 ease-in-out ${
                    index === currentIndex ? "transform scale-90" : "transform scale-90"
                  }`}
                >
                  <CardDemo
                    type={item.type}
                    imageUrl={item.imageUrl}
                    
                  />
                </div>
              ))}
            </div>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white dark:bg-slate-800 rounded-full shadow-lg z-10"
              onClick={handleNext}
            >
              <ArrowRight className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}