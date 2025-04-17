"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import ReactGA from "react-ga4";

const GA_TRACKING_ID = "G-FEX5TMVSQR";

const GoogleAnalytics = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    console.log("Initializing GA");
    ReactGA.initialize(GA_TRACKING_ID);
    console.log("Is GA initialized?", ReactGA.isInitialized);
  }, []);

  useEffect(() => {
    const page = `${pathname}${
      searchParams.toString() ? "?" + searchParams.toString() : ""
    }`;
    ReactGA.send({ hitType: "pageview", page });
  }, [pathname, searchParams]);

  return null;
};

export default GoogleAnalytics;
