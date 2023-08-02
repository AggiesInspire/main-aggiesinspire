"use client";
import { useEffect, useState } from "react";
import useMediaQuery from "@/hooks/useMediaQuery";

import AboutScreen from "./AboutScreen";
import RationaleSection from "./AboutRationaleSection";
import AboutMissionSection from "./AboutMissionSection";
import { AboutSelectedPage } from "@/components/types";
import AboutGovernanceSection from "./AboutGovernanceSection";

export default function About() {
  const [selectedPage, setSelectedPage] = useState<AboutSelectedPage>(
    AboutSelectedPage.Rationale,
  );

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedPage(AboutSelectedPage.Rationale);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section id="about">
      <AboutScreen />
      <div className="bg-white md:h-full md:pb-0 mt-24">
        <div className="flex">
          <main className="min-w-0">
            <RationaleSection setSelectedPage={setSelectedPage} />
            <AboutMissionSection setSelectedPage={setSelectedPage} />
            <AboutGovernanceSection setSelectedPage={setSelectedPage} />
          </main>
        </div>
      </div>
    </section>
  );
}
