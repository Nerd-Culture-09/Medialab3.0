"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Cover } from "../ui/cover";
import { Briefcase, Clock, Globe, Link2, Network, User } from "lucide-react";

export default function Featured() {
  const features = [
    {
      icon: <Globe />,
      title: "Global Summits",
      desc: "Connect with global leaders and innovators at our annual summits, designed to inspire and empower young entrepreneurs.",
      href: "/"
    },
    {
      icon: <User/>,
      title: "Innovative Cohorts",
      desc: "Join our dynamic cohorts to gain practical skills and insights, preparing you for the world of business and investment.",
      href: "/"
    },
    {
      icon: <Briefcase />, 
      itle: "Mentorship Programs",
      desc: "Benefit from personalized mentorship programs that connect you with experienced professionals to guide your entrepreneurial journey.",
      href: "/"
    },
    {
      icon: <Link2 />,
      title: "Investment Opportunities",
      desc: "Unlock a world of investment opportunities and connect with investors who are ready to support innovative projects.",
      href: "/"
    },
    {
      icon: <Network />,
      title: "Networking Events",
      desc: "Expand your network and build valuable connections at our exclusive networking events with industry leaders.",
      href: "/"
    },
    {
      icon: <Clock />,
      title: "Skill Development Workshops",
      desc: "Participate in our workshops designed to hone your skills and prepare you for the challenges of entrepreneurship.",
      href: "/cont"
    },
  ];

  return (
    <section className="py-52">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="relative max-w-2xl mx-auto sm:text-center">
          <div className="relative z-10">
            <h3 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              <Cover>Empowering Young Innovators</Cover>
            </h3>
            <p className="mt-3 dark:text-gray-400">
              Sebabatso is committed to nurturing the next generation of
              entrepreneurs through comprehensive programs and resources.
            </p>
          </div>
          <div
            className="absolute inset-0 max-w-xs mx-auto h-44 blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
            }}
          ></div>
        </div>
        <div className="relative mt-12">
          <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <Link key={idx} href={item.href}>
              <li
                key={idx}
                className="bg-white dark:bg-slate-950 space-y-3 p-4 border dark:border-gray-500 rounded-lg"
              >
                <div className="text-indigo-600 pb-3">{item.icon}</div>
                <h4 className="text-lg text-gray-800 dark:text-gray-50 font-semibold">
                  {item.title}
                </h4>
                <div className="dark:text-gray-400">
                <p>{item.desc}</p>
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
