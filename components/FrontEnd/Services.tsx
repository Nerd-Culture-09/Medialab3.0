"use client";

import { Camera, Edit,  Palette ,Film, Video, Briefcase } from "lucide-react";
import { HoverEffect } from "../ui/card-hover-effect";
import { Cover } from "../ui/cover";

export function Services() {
  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative z-10">
          

          <h3 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
            <Cover>Our Services</Cover>
          </h3>
        </div>
        <div className="">
          <HoverEffect items={services} />
        </div>
      </div>
    </section>
  );
}

// Updated services array to include 'description' and 'link'
export const services = [
  {
    icon: <Camera className="flex items-center w-8 h-8 justify-center text-xl font-bold "/>,
    title: "Photography",
    description: "High-quality photography services to capture moments and create stunning visuals.",
    link: "#photography",
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Production",
    description: "Professional video production services to create compelling and engaging content.",
    link: "#video-production",
  },
  {
    icon: <Edit className="w-8 h-8" />,
    title: "Post-Production",
    description: "Expert editing and post-production services to polish your content to perfection.",
    link: "#editing",
  },
  {
    icon: <Film className="w-8 h-8" />,
    title: "Animation",
    description: "Dynamic animations to captivate your audience and enhance your brand message.",
    link: "#animation",
  },
  {
    icon: < Palette  className="w-8 h-8" />,
    title: "Creative Development",
    description: "We provide innovative solutions to bring your creative ideas to life, from concept to execution.",
    link: "#creative-development",
  },
  
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Studio Facilities & Equipment",
    description: "Our premium  provide versatile workspaces to fit your production needs.",
    link: "#facilities",
  },
];
