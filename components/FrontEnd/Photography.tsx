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

            <div className="flex justify-between items-center p-4">

              <div>

                <motion.h3

                  layoutId={`title-${active.title}-${id}`}

                  className="font-medium text-white text-center text-base"

                >

                  {active.title}

                </motion.h3>

                

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

                className="text-gray-400 text-xs md:text-sm lg:text-base h-full pb-10 flex flex-col items-start gap-4 overflow-auto"

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

description: "We specialise in commercial, editorial, Lifestyle and product photography, from large scale advertising &amp; social media campaigns to behind-the-scenes photos on set.",

src: "/photography2.jpg",

ctaText: "Let&apos;s Chat",

ctaLink: "https://wa.me/26651910760",

content: () => {

  return (

    <div>

      <h1>Capture Life&apos;s Best Moments with Our Professional Photography Services.</h1>

      <br></br>

      

      <p> At Media Lab, we believe every moment is worth remembering. Whether you need stunning portraits, vibrant event photography, or captivating commercial images, our experienced photographers are here to bring your vision to life. We specialise in a wide range of photography services, including:</p>

      

      <br></br>

      

      <p>

        <strong>Potrait Photography:</strong> Beautifully crafted portraits that capture the essence of your personality or brand.

      </p>

      <p>

        <strong>Event Photography:</strong> From weddings to corporate events, we document your special occasions with an artistic eye and attention to detail.

      </p>

      <p>

        <strong>Commercial Photography:</strong> Elevate your business with high-quality images that highlight your products, services, or team.

      </p>

      <br></br>

      <p>

        Our commitment to quality and creativity ensures that you receive images that not only meet but exceed your expectations. We take pride in offering a personalized experience, tailoring our approach to suit your unique needs and style.

      </p>

      

    </div>

  );

},

},

{

icon: <Video className="w-8 h-8" />,

title: "Video Production",

description: "We&apos;re here to build everything you ned to bring an idea to life - from direction, set design &amp; cinematography to aerial videography, sound recording &amp; more.",

src: "/videographer.png",

ctaText: "Let&apos;s Chat",

ctaLink: "https://wa.me/26651910760",

content: () => {

  return (

    <div>

      <p>

        Bring your vision to life with our top-tier video production services. At Media Lab, we specialize in creating compelling and high-quality video content that captures your brand&apos;s essence and engages your audience. Whether you need promotional videos, corporate films, or event coverage, our experienced team is here to deliver exceptional results.

      </p>

      <br></br>

      <p>

        From concept development and scriptwriting to filming and post-production, we handle every aspect of the video production process. Our services include:</p>

      <br></br>

      

      <p><strong>Corporate Videos:</strong> Professional and polished videos that showcase your brand, products, and services.</p>

      <p><strong>Promotional Videos:</strong> Eye-catching videos that highlight your offerings and attract potential customers.</p>

      <p><strong>Event Coverage:</strong> Capture the energy and excitement of your events with dynamic video footage.</p>

      <p><strong>Drone Videography:</strong> Stunning aerial shots that add a unique perspective to your projects.</p>

      <br></br>

      <p>At Media Lab, we understand the power of visual storytelling. Let us help you create videos that not only convey your message but also leave a lasting impact on your audience.</p>

    </div>

  );

},

},

];