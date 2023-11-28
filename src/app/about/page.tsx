import type { Metadata } from "next";
import AboutSection from "@/components/sections/about/AboutSection";

import Footer from "@/components/sections/footer/Footer";
import TopNavbar from "@/components/navbars/TopNavbar";
import Navbar from "@/components/navbars/Navbar";
import navbarLinks from "@/objects/links/navbars/navbarLinks";

export const metadata: Metadata = {
  title: "Aggies Inspire | About Us",
  description: "More information about Aggies Inspire.",
};

export default function AboutPage() {
  return (
    <div className="bg-blue-100">
      <TopNavbar navbarLinks={navbarLinks} />
      <Navbar
        appearScroll={200}
        navbarLinks={navbarLinks}
        textColor="text-primary-1000"
        bgColor="bg-white"
      />
      <section id="about" className="md:h-full md:pb-0">
        <AboutSection />
      </section>
      <Footer />
    </div>
  );
}
