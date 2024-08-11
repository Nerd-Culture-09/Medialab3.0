"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Cover } from "../ui/cover";

export default function Featured() {
  const features = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 20.25c4.556 0 8.25-3.694 8.25-8.25S16.556 3.75 12 3.75 3.75 7.444 3.75 12s3.694 8.25 8.25 8.25z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12l-3-3-3 3m0 0l3 3m-3-3h6"
          />
        </svg>
      ),
      title: "Global Summits",
      desc: "Connect with global leaders and innovators at our annual summits, designed to inspire and empower young entrepreneurs.",
      href: "/"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 13.5l3-3-3-3m-6 0l-3 3 3 3m6 0l-3 3-3-3"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 4.5h6M9 19.5h6"
          />
        </svg>
      ),
      title: "Innovative Cohorts",
      desc: "Join our dynamic cohorts to gain practical skills and insights, preparing you for the world of business and investment.",
      href: "/"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z"
          />
        </svg>
      ),
      title: "Mentorship Programs",
      desc: "Benefit from personalized mentorship programs that connect you with experienced professionals to guide your entrepreneurial journey.",
      href: "/"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v18m9-9H3"
          />
        </svg>
      ),
      title: "Investment Opportunities",
      desc: "Unlock a world of investment opportunities and connect with investors who are ready to support innovative projects.",
      href: "/"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 10l4.586-4.586a2 2 0 00-2.828-2.828L10 7.172M14 4l6 6m0 0v5.5a3.5 3.5 0 01-3.5 3.5H8A2.5 2.5 0 015.5 18v-5a2.5 2.5 0 012.5-2.5h7.5z"
          />
        </svg>
      ),
      title: "Networking Events",
      desc: "Expand your network and build valuable connections at our exclusive networking events with industry leaders.",
      href: "/"
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6l3 3m5-8a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      title: "Skill Development Workshops",
      desc: "Participate in our workshops designed to hone your skills and prepare you for the challenges of entrepreneurship.",
      href: "/"
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
