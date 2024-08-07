"use client";

import { useState, useEffect } from "react";

type Slide = {
  id: number;
  src: string;
};

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const slides: Slide[] = [
    { id: 0, src: "/S-Blue.png"},
    { id: 1, src: "/S-Brown.png" },
    { id: 2, src: "/S-Red.png" },
    { id: 3, src: "/S-Yellow.png" },
    { id: 4, src: "/S-Green.png" },
  ];

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  // Autoplay effect
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNext();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [activeIndex]);

  return (
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`duration-700 ease-in-out absolute w-full h-full transition-opacity flex items-center justify-center ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            data-carousel-item
            style={{
              backgroundImage: `url(${slide.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
           
          </div>
        ))}
      </div>
    </div>
  );
}
