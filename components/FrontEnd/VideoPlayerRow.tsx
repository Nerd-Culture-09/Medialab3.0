"use client";

import React from "react";
import ReactPlayer from "react-player/youtube";

interface VideoPlayerProps {
  videoUrls: string[];
  aspectRatio?: string; // e.g. "16/9"
}

export function VideoPlayerRow({
  videoUrls,
  aspectRatio = "16/9",
}: VideoPlayerProps) {
  return (
    <div className="w-full">
      {/* Desktop - Horizontal Scroll */}
      <div className="hidden lg:block lg:w-[80%] lg:mx-auto lg:overflow-x-auto lg:scrollbar-hide lg:px-[10px]">
        <div className="lg:flex lg:space-x-4 lg:py-2">
          {videoUrls.map((url, index) => (
            <VideoPlayerItem
              key={index}
              url={url}
              aspectRatio={aspectRatio}
              className="lg:w-[400px]" // Fixed width for desktop
            />
          ))}
        </div>
      </div>

      {/* Mobile - Vertical Stack */}
      <div className="lg:hidden space-y-4 px-[10px]">
        {videoUrls.map((url, index) => (
          <VideoPlayerItem
            key={index}
            url={url}
            aspectRatio={aspectRatio}
            className="w-full" // Full width on mobile
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
          light={true} // Ensures thumbnails are visible
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
