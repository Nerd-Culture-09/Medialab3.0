"use client";

import React from "react";

export function Carousel() {
  const videobg = "/animated.mp4"; 

  return (
    <div className="relative w-full h-[30vh] overflow-hidden flex justify-center items-center rounded-md">
      
      <video src={videobg}  autoPlay loop muted/>
 
    </div>
  );
}
