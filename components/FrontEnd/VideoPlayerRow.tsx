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
    <div className="w-[80%]  overflow-x-auto scrollbar-hide">
      {" "}
      <div className="flex space-x-4">
        {" "}
        {/* Horizontal video row */}
        {videoUrls.map((url, index) => {
          const isYouTube =
            url.includes("youtube.com") || url.includes("youtu.be");

          const getValidUrl = (url: string) => {
            if (url.includes("embed"))
              return url.replace("/embed/", "/watch?v=");
            return url;
          };

          return (
            <div
              key={index}
              className="flex-shrink-0 relative"
              style={{
                width: `calc(100vw / ${
                  videoUrls.length > 2 ? videoUrls.length : 2
                } - 40px)`,
                aspectRatio: aspectRatio,
              }}
            >
              {isYouTube ? (
                <ReactPlayer
                  url={getValidUrl(url)}
                  controls={true}
                  width="100%"
                  height="100%"
                  className="absolute inset-0 rounded-lg"
                  style={{ borderRadius: "10px" }}
                />
              ) : (
                <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                  <p className="text-gray-500">Invalid URL</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VideoPlayerRow;
