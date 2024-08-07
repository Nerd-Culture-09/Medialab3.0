import Hero from "@/components/FrontEnd/Hero";
import Footer from "@/components/FrontEnd/Footer";
import FAQ from "@/components/FrontEnd/FAQ";

import Navbar from "@/components/FrontEnd/Navbar";
import Carousel from "@/components/FrontEnd/Carousel";
import React from "react";


export default async function Home() {
  return (
    <section className="">
      <Navbar />
      <Hero /> {/* Rendering Hero component for homepage */}
      <FAQ/>
      
      <Footer/>
     </section>
  );
} 