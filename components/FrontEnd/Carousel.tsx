"use client";

import React from "react";

export function Carousel() {
  const imageUrl = "/cover.jpg"; 

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        
        
        
      </div>
    </div>
  );
}