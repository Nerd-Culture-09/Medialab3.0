'use client'

import { Blog } from "./Blog"
import { Carousel } from "./Carousel"
import Carousel from "./Carousel"
import FAQ from "./FAQ"
import Featured from "./Featured"
import { ModeToggle } from "./ModeToggle"
import Partner from "./Partner"

export default function Hero() {

  return (
    <div className="">
      <Carousel/>
      <Featured/>
      <Blog/>
      <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="lg:px-72">
      <Carousel />
      </div>
      <Featured />
      <Partner />
      <FAQ />
        <div
          aria-hidden="true"
          className=" absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem] dark:bg-gradient-to-r dark:from-slate-500 dark:to-slate-300 dark:opacity-20 dark:sm:left-[calc(50%-30rem)] dark:sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-center">
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
              fugiat veniam occaecat fugiat aliqua.
            </p> */}
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-50 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem] dark:bg-gradient-to-r dark:from-slate-500 dark:to-slate-300 dark:opacity-30 dark:sm:left-[calc(50%-30rem)] dark:sm:w-[72.1875rem]"
          />
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}