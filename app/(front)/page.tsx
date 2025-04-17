"use client";

import Hero from "@/components/FrontEnd/Hero";
import React, { useEffect, Suspense } from "react";
import ReactGA from "react-ga4";
import { usePathname, useSearchParams } from "next/navigation";

function PageViewTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const search = searchParams.toString();
    const page = `${pathname}${search ? `?${search}` : ""}`;
    console.log("Sending pageview:", page);
    ReactGA.send({ hitType: "pageview", page });
  }, [pathname, searchParams]);

  return null; // no UI
}

export default function Home() {
  return (
    <section>
      <Suspense fallback={null}>
        <PageViewTracker />
      </Suspense>
      <Hero />
    </section>
  );
}
