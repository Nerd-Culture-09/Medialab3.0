"use client";

import Link from "next/link";
import { Camera, Edit, Film, Video, Briefcase } from "lucide-react"; 
import { Cover } from "../ui/cover";

export default function Featured() {
  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Photography",
      desc: "High-quality photography services to capture moments and create stunning visuals.",
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Production",
      desc: "Professional video production services to create compelling and engaging content.",
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Editing & Post-Production",
      desc: "Expert editing and post-production services to polish your content to perfection.",
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Animation",
      desc: "Dynamic animations to captivate your audience and enhance your brand message.",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Studio Facilities & Equipment",
      desc: "Our premium CPL facilities provide versatile workspaces to fit your production needs.",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <div className="relative z-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 flex items-center">
            <p className="mt-3 dark:text-gray-400 font-bold ">
              Everything you need, from planning to post production, all under one roof.
            </p>
          <img src="/videoeditor.jpg" alt="Descriptive Image Alt Text" className="rounded-lg shadow-md mb-4" />

          </div>
  
            <h3 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              <Cover>Our Services</Cover>
            </h3>
            
          </div>
          <div
            className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            }}
          >
          </div>
        </div>
        <div className="relative mt-12">
          <ul className="space-y-8">
          {features.map((item, idx) => (
              <Link key={idx} href="#">
                <li key={idx} className="flex items-center space-x-4">
                  <div className="text-indigo-600 pb-2">{item.icon}</div>
                  <div>
                    <h4 className="text-lg text-gray-800 dark:text-gray-50 font-semibold">
                      {item.title}
                    </h4>
                    <div className="dark:text-gray-400">
                      <p>{item.desc}</p>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}