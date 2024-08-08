import Hero from "@/components/FrontEnd/Hero";
import Footer from "@/components/FrontEnd/Footer";
import Navbar from "@/components/FrontEnd/Navbar";

import React from "react";

export default async function Home() {
  return (
    <section className="">
      <Navbar />
      <Hero /> {/* Rendering Hero component for homepage */}
      <Footer/>
     </section>
  );
} 