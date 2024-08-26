"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function CallToAction() {
  return (
    <div className="mx-auto max-w-2xl py-20 sm:py-30 lg:py-30">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl">
          Crafting Visual Stories That Captivate and Inspire <br/>Your Vision, Our Creation
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-500">
          Everything you need, from planning to post-production, all under one roof.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="https://wa.me/26651910760"
            className="rounded-md bg-indigo-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Chat with Us
          </a>
        </div>
      </div>
    </div>
  )
}
