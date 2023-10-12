"use client";
import { useEffect, useState } from "react";

import AboutScreen from "./AboutScreen";
import RationaleSection from "./AboutRationaleSection";
import AboutMissionSection from "./AboutMissionSection";
import GovernanceSection from "@/components/sections/about/GovernanceSection";

export default function About() {
  return (
    <section id="about">
      <AboutScreen />
      <div className="bg-white md:h-full md:pb-0 mt-24">
        <div className="flex">
          <main className="min-w-0">
            <RationaleSection />
            <AboutMissionSection />
            <GovernanceSection />
          </main>
        </div>
      </div>
    </section>
  );
}
