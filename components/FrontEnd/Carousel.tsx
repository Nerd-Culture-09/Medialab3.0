"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../ui/images-slider";

export function Carousel() {
  const images = [
    "S-Blue.png",
    "S-Red.png",
    "S-Brown.png",
    "S-Green.png",
    "S-Yellow.png",
  ];
  return (
          <ImagesSlider className="h-[40rem]" images={images}>
        <motion.div
          initial={{
            
            y: -80,
          }}
          animate={{
            
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center"
        >
          
        </motion.div>
      </ImagesSlider>
    );
}
