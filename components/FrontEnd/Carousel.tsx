"use client";

import React from "react";

export function Carousel() {
  const imageUrl = "/videoeditor.jpg"; 

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center p-4">
          
          <h2 className="text-white text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Media Lab
          </h2>
          
          <p className="text-white text-center text-base sm:text-lg md:text-xl lg:text-2xl">
            Passionate about creating engaging and impactful multimedia experiences.
          </p>
        </div>
      </div>
    </div>
  );
}