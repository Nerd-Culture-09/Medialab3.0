"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

export function Typewriter() {
  const words = [
    {
      text: "READY.",
    },
    {
      text: "SET.",
    },
    {
      text: "WOW!",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center lg:h-[20rem] sm:h-[10rem]  ">
      <TypewriterEffectSmooth words={words} />
      </div>
  );
}
