import React from "react";
import { Metadata } from "next";

import navbarLinks from "@/objects/links/navbars/navbarLinks";

import Navbar from "@/components/navbars/Navbar";
import HomeSection from "@/components/sections/home/HomeSection";
import TopNavbar from "@/components/navbars/TopNavbar";

export const metadata: Metadata = {
  title: "Aggies Inspire | Home",
  description: "Welcome to Aggies Inspire!",
};

export default function HomePage() {
  return (
    <section id="home" className=" bg-gray-20 md:h-full md:pb-0">
      <TopNavbar navbarLinks={navbarLinks} />
      <Navbar
        appearScroll={500}
        navbarLinks={navbarLinks}
        bgColor="bg-primary-1000"
        textColor="text-primary-500"
      />

      <div>
        {/* Taken from (sub-sections) under the home root */}
        <HomeSection />
      </div>
    </section>
  );
}
