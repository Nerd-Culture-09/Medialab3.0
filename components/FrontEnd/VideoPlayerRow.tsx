"use client";

import React, { useRef } from "react";
import ReactPlayer from "react-player/youtube";

interface VideoPlayerProps {
  videoUrls: string[];
  aspectRatio?: string; // e.g. "16/9"
}

export function VideoPlayerRow({
  videoUrls,
  aspectRatio = "16/9",
}: VideoPlayerProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full relative">
      {/* Desktop - Horizontal Scroll with buttons */}
      <div className="hidden lg:block lg:w-[80%] lg:mx-auto lg:relative">
        <button
          onClick={scrollLeft}
          className="absolute -left-5 top-1/2 -translate-y-1/2 -translate-x-10 z-10 bg-white bg-opacity-70 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-100 transition-all shadow-md"
          aria-label="Scroll left"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        <div
          ref={scrollContainerRef}
          className="lg:overflow-x-auto lg:px-[10px] scrollbar-hide"
        >
          <div className="lg:flex lg:space-x-4 lg:py-2">
            {videoUrls.map((url, index) => (
              <VideoPlayerItem
                key={index}
                url={url}
                aspectRatio={aspectRatio}
                className="lg:w-[400px]"
              />
            ))}
          </div>
        </div>

        <button
          onClick={scrollRight}
          className="absolute -right-5 top-1/2 -translate-y-1/2 translate-x-10 z-10 bg-white bg-opacity-70 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-100 transition-all shadow-md"
          aria-label="Scroll right"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Mobile - Vertical Stack */}
      <div className="lg:hidden space-y-4 px-[10px]">
        {videoUrls.map((url, index) => (
          <VideoPlayerItem
            key={index}
            url={url}
            aspectRatio={aspectRatio}
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
}

// Extracted player component for reusability
const VideoPlayerItem = ({
  url,
  aspectRatio,
  className,
}: {
  url: string;
  aspectRatio: string;
  className?: string;
}) => {
  const isYouTube = url.includes("youtube.com") || url.includes("youtu.be");

  const getValidUrl = (url: string) => {
    if (url.includes("embed")) return url.replace("/embed/", "/watch?v=");
    return url;
  };

  return (
    <div
      className={`flex-shrink-0 relative ${className}`}
      style={{ aspectRatio }}
    >
      {isYouTube ? (
        <ReactPlayer
          url={getValidUrl(url)}
          controls={true}
          width="100%"
          height="100%"
          className="absolute inset-0 rounded-lg"
          light={true}
        />
      ) : (
        <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded-lg">
          <p className="text-gray-500">Invalid URL</p>
        </div>
      )}
    </div>
  );
};

export default VideoPlayerRow;
