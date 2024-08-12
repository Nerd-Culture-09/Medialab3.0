
"use client";

import Image from "next/image";

interface CardDemoProps {
  type: string;
  imageUrl: string;
  name: string;
  time: string;
  title: string;
  description: string;
}

export function CardDemo({
  type,
  imageUrl,
  name,
  time,
  title,
  description,
}: CardDemoProps) {
  return (
    <div className="p-4">
      <div
        className="cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4"
        style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
        
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
              {name}
            </p>
            <p className="text-sm text-gray-400">{time}</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            {title}
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
