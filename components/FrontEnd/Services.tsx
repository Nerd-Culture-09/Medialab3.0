"use client";

import { Camera, Edit, Film, Video, Briefcase } from "lucide-react";
import { HoverEffect } from "../ui/card-hover-effect";
import { Cover } from "../ui/cover";

export function Services() {
  return (
    <section className="">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative z-10">
          {/* <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-center">
            <p className="mt-3 dark:text-gray-400 font-bold text-[25px] text-center sm:text-left">
              Everything you need, from planning to post production, all under one roof.
            </p>
            <img
              src="/videoeditor.jpg"
              alt="Descriptive Image Alt Text"
              className="rounded-lg shadow-md mb-4 mx-auto"
            />
          </div> */}

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
    title: "Editing & Post-Production",
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
    icon: <Briefcase className="w-8 h-8" />,
    title: "Studio Facilities & Equipment",
    description: "Our premium  provide versatile workspaces to fit your production needs.",
    link: "#facilities",
  },
];
