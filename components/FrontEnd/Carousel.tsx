"use client";

import React from "react";

export function Carousel() {
  const imageUrl = "/cover.jpg"; 

  return (
    <div className="relative w-full h-[20vh] overflow-hidden flex justify-center items-center">
      
      <div 
        className="bg-no-repeat bg-center bg-cover w-full h-full"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        
        
        
      </div>
    </div>
  );
}
