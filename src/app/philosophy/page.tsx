import React from "react";
import type { Metadata } from "next";

import PhilosophySection from "@/components/sections/philosophy/PhilosophySection";
import Footer from "@/components/sections/footer/Footer";
import TopNavbar from "@/components/navbars/TopNavbar";
import Navbar from "@/components/navbars/Navbar";
import { SelectedPage } from "@/types/pageTypes";
import navbarLinks from "@/objects/links/navbars/navbarLinks";

export const metadata: Metadata = {
  title: "Aggies Inspire | Philosophy",
  description: "The philosophy that governs us.",
};

export default function AboutPage() {
  const miniNavbarLinks = [
    { title: "Home", link: SelectedPage.Home },
    { title: "About", link: SelectedPage.About },
  ];

  return (
    <div className="bg-gray-75">
      <TopNavbar navbarLinks={navbarLinks} miniNavbarLinks={miniNavbarLinks} />
      <Navbar
        appearScroll={200}
        navbarLinks={navbarLinks}
        miniNavbarLinks={miniNavbarLinks}
        textColor="text-primary-1000"
        bgColor="bg-white"
      />
      <section id="philosophy" className="md:h-full md:pb-0">
        <PhilosophySection />
      </section>
      <Footer />
    </div>
  );
}
