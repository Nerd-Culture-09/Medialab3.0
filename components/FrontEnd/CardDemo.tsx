"use client";

import Image from "next/image";
import React from "react";

interface CardDemoProps {
  type: string;
  imageUrl: string;
}

export function CardDemo({ type, imageUrl }: CardDemoProps) {
  const isVideo = imageUrl.endsWith(".mp4");

  return (
    <div className="p-4">
      <div
        className="cursor-pointer overflow-hidden relative card h-80 w-80 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
      >
        {isVideo ? (
          <video
            className="w-full h-full object-cover rounded-md"
            controls
            src={imageUrl}
          >
            Your browser does not support the video tag.
          </video>
        ) : (
          <div
            className="w-full h-full bg-cover bg-center rounded-md"
            style={{
              backgroundImage: `url(${imageUrl})`,
            }}
          />
        )}

        {/* Overlay effect */}
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>

        {/* Content over the media */}
        <div className="flex flex-row items-center space-x-4 z-10">
          <h3 className="text-white font-bold">{type}</h3>
        </div>
      </div>
    </div>
  );
}
