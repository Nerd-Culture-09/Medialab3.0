"use client";

import Image from "next/image";
import React from "react";

interface CardDemoProps {
  type: string;
  imageUrl: string;
}

export function CardDemo({ type, imageUrl }: CardDemoProps) {
  const isYouTubeVideo = imageUrl.includes("youtube.com") || imageUrl.includes("youtu.be");

  return (
    <div className="p-4">
      <div className="cursor-pointer overflow-hidden relative card h-80 w-80 rounded-md shadow-xl max-w-sm ml-0 sm:mx-auto flex flex-col justify-between p-4">
        <div className="relative w-full h-full">
          {isYouTubeVideo ? (
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src={imageUrl.replace("watch?v=", "embed/")}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video"
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
