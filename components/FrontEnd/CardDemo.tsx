"use client";

import Image from "next/image";
import React from "react";
import ReactPlayer from 'react-player/youtube'; // Import ReactPlayer

interface CardDemoProps {
  type: string;
  imageUrl: string;
}

export function CardDemo({ type,dDemoProps) {
  const isYouTubeVideo = imageUrl.includes("youtube.com") || imageUrl.includes("youtu.be") || imageUrl.includes("youtube.com/embed");

  return (
    <div className="p-4">
      <div className="cursor-pointer overflow-hidden relative card h-80 w-80 rounded-md shadow-xl max-w-sm ml-0 sm:mx-auto flex flex-col justify-between p-4">
        <div className="relative w-full h-full">
          {isYouTubeVideo ? (
            <ReactPlayer
              className="absolute top-0 left-0 w-full h-full"
              url={imageUrl}  // ReactPlayer will handle both standard and embed URLs
              controls={true}  // Show player controls (play, pause, etc.)
              width="100%"
              height="100%"
            />
          ) : (
            <Image
              className="absolute top-0 left-0 w-full h-full sm:object-cover rounded-md"
              src={imageUrl}
              alt={type}
              layout="fill"
            />
          )}
        </div>
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
      </div>
    </div>
  );
}
