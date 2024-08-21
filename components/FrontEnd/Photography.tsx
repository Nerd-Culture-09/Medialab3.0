"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../ui/use-outsideClick";
import { Camera, Edit, Palette, Film, Video, Briefcase } from "lucide-react";
import { Cover } from "../ui/cover";

export function Photography() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <div className="relative z-10">
        <h3 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          <Cover>Our Services</Cover>
        </h3>
      </div>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-black border border-white sm:rounded-3xl overflow-auto"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-white text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-white text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-lg font-bold bg-indigo-500 text-white whitespace-nowrap"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-white text-xs md:text-sm lg:text-base h-full pb-10 flex flex-col items-start gap-4 overflow-auto"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="rounded-2xl h-full w-full p-4 overflow-hidden flex flex-col bg-black border border-white rounded-xl cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-800"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="text-white text-3xl">{card.icon}</div>
              <motion.h3
                layoutId={`title-${card.title}-${id}`}
                className="font-medium text-white text-center text-base"
              >
                {card.title}
              </motion.h3>
              <motion.p
                layoutId={`description-${card.description}-${id}`}
                className="text-white text-center text-base"
              >
                {card.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}







export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    icon: <Camera className="flex items-center w-8 h-8 justify-center text-xl font-bold "/>,
    title: "Photography",
    description: "High-quality photography services to capture moments and create stunning visuals.",
    src: "/photography.jpg",
    ctaText: "Let's Chat",
    ctaLink: "https://wa.me/26651910760",
    content: () => {
      return (
        <div>
          <h4 className="font-semibold">Photography Types:</h4>
          <p>
            <strong>Editorial Photography:</strong> Photography for magazines,
            newspapers, or online publications, often telling a story or
            conveying a message.
          </p>
          <p>
            <strong>Product Photography:</strong> Capturing images of products
            for marketing and advertising purposes.
          </p>
          <p>
            <strong>Lifestyle Photography:</strong> Capturing images that
            portray everyday life and real-life situations.
          </p>
          <p>
            <strong>Aerial and Drone Photography:</strong> Capturing images or
            video from an elevated perspective using drones.
          </p>
          
        </div>
      );
    },
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Video Production",
    description: "Professional video production services to create compelling and engaging content.",
    src: "/videoproduction2.jpg",
    ctaText: "Let's Chat",
    ctaLink: "https://wa.me/26651910760",
    content: () => {
      return (
        <div>
          <p>
            <strong>Pre-production:</strong> Planning the video, including
            scriptwriting, storyboarding, and location scouting.
          </p>
          <p>
            <strong>Production:</strong> Filming the video with cameras,
            lighting, and sound equipment. This is where actors or presenters
            perform.
          </p>
          <p>
            <strong>Post-production:</strong> Editing the footage, adding
            effects, and finalizing the video for distribution.
          </p>
        </div>
      );
    },
  },
  {
    icon: <Film className="w-8 h-8" />,
    title: "Animation",
    description: "High-quality animation services to bring your ideas to life with motion graphics.",
    src: "/animation.jpg",
    ctaText: "Let's Chat",
    ctaLink: "https://wa.me/26651910760",
    content: () => {
      return (
        <div>
          <p>
            <strong>Concept Development:</strong> Creating the storyline,
            characters, and visual style for the animation.
          </p>
          <p>
            <strong>Storyboarding:</strong> Sketching out the scenes to plan the
            flow and composition of the animation.
          </p>
          <p>
            <strong>Animation Production:</strong> Using software to create the
            animated sequences, whether 2D or 3D.
          </p>
          <p>
            <strong>Postproduction:</strong> Adding sound effects, music, and
            final touches to complete the animation.
          </p>
        </div>
      );
    },
  },
  {
    icon: <Edit className="w-8 h-8" />,
    title: "Postproduction",
    description: "Expert postproduction services to refine and enhance your audio, video, and images.",
    src: "/camera.jpg",
    ctaText: "Let's Chat",
    ctaLink: "https://wa.me/26651910760",
    content: () => {
      return (
        <div>
         <p>
            <strong>Audio Editing:</strong> Cleaning up audio tracks by removing
            noise, adjusting levels, and adding effects like compression and
            EQ.
          </p>
          <p>
            <strong>Video Editing:</strong> Cutting and arranging clips, color
            grading, adding transitions, and syncing audio with video.
          </p>
          <p>
            <strong>Photo Editing:</strong> Retouching images, adjusting
            exposure, color correction, and applying filters using software like
            Adobe Photoshop or Lightroom.
          </p>
          <p>
            <strong>Rendering and Exporting:</strong> Finalizing the edited
            content by exporting it in the desired format for distribution.
          </p>
        </div>
      );
    },
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: "Creative Development",
    description: "Innovative creative development to bring your ideas to life with visual and thematic concepts.",
    src: "/camera.jpg",
    ctaText: "Let's Chat",
    ctaLink: "https://wa.me/26651910760",
    content: () => {
      return (
        <div>
          <p>
            <strong>Brainstorming:</strong> Collaborating with a team to
            generate ideas for campaigns, projects, or content.
          </p>
          <p>
            <strong>Conceptualization:</strong> Developing a clear and
            actionable plan for the creative idea, including visual and thematic
            elements.
          </p>
          <p>
            <strong>Prototyping:</strong> Creating mockups, storyboards, or
            sample content to visualize the concept.
          </p>
          <p>
            <strong>Execution:</strong> Bringing the concept to life through
            production, whether it’s video, photography, graphic design, or
            another medium.
          </p>
          <p>
            <strong>Review and Iteration:</strong> Refining the creative work
            based on feedback and making adjustments to improve the final
            product.
          </p>
        </div>
      );
    },
  },
  {
    icon: <Briefcase className="w-8 h-8" />,
    title: "Studio Facilities & Equipment",
    description: "Premium facilities and equipment to support your creative projects.",
    src: "/camera.jpg",
    ctaText: "Let's Chat",
    ctaLink: "https://wa.me/26651910760",
    content: () => {
      return (
        <div>
          <p>
            <strong>Equipment Selection:</strong> Choose microphones, audio
            interfaces, headphones, and recording software.
          </p>
          <p>
            <strong>Acoustic Treatment:</strong> Enhance the recording space by
            reducing echo and background noise using foam panels or portable
            sound booths.
          </p>
          <p>
            <strong>Microphone Placement:</strong> Position the microphone
            correctly to capture clear and consistent audio.
          </p>
          <p>
            <strong>Recording Setup:</strong> Use software like Audacity, Adobe
            Audition, or GarageBand to record and monitor audio levels in
            real-time.
          </p>
        </div>
      );
    },
  },
];
