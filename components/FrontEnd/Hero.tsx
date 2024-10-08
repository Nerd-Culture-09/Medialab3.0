'use client'

import { Blog } from "./Blog"
import Cards from "./Cards"
import { Carousel } from "./Carousel"
import FAQ from "./FAQ"
import Partner from "./Partner"
import Projects from "./Projects"
import { Services } from "./Services"
import CallToAction from "./CallToAction"
import {Photography} from "./Photography"

export default function Hero() {

  
  return (
    <div className="">
      <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="lg:px-72 py-10">
      <Carousel /> 
      
      <CallToAction/>
      {/* <Services/> */}
      <Photography />
      <Cards />
      <Projects/>
      </div>
      {/* <Cards />
      <Blog />
      <Partner />
      <FAQ /> */}
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
        </div>
      </div>
    </div>
  )
}