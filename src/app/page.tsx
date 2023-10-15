import React from "react";
import { Metadata } from "next";

import { SelectedPage } from "@/types/pageTypes";

import Navbar from "@/components/navbars/Navbar";
import HomeSection from "@/components/sections/home/HomeSection";

export const metadata: Metadata = {
  title: "Aggies Inspire | Home",
  description: "Welcome to Aggies Inspire!",
};

export default function HomePage() {
  const navbarLinks = [{ title: "About", link: SelectedPage.About }];
  const miniNavbarLinks = [
    { title: "Home", link: SelectedPage.Home },
    { title: "About", link: SelectedPage.About },
  ];

  return (
    <section id="home" className=" bg-gray-20 md:h-full md:pb-0">
      <Navbar
        appearScroll={500}
        navbarLinks={navbarLinks}
        miniNavbarLinks={miniNavbarLinks}
      />

      <div>
        {/* Taken from (sub-sections) under the home root */}
        <HomeSection />
      </div>
    </section>
  );
}
