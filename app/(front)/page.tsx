import Hero from "@/components/FrontEnd/Hero";
import Footer from "@/components/FrontEnd/Footer";
import React from "react";

export default async function Home() {
  return (
    <section className="">
      <Hero /> {/* Rendering Hero component for homepage */}
      <Footer/>
     </section>
  );
} 