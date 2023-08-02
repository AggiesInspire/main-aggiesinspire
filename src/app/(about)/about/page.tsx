import type { Metadata } from "next";

import Navbar from "@/components/ui/navbars/Navbar";
import About from "@/app/(about)/about/(sub-sections)/About";
import { SelectedPage } from "@/components/types";
import AboutScreen from "./(sub-sections)/AboutScreen";

export const metadata: Metadata = {
  title: "Aggies Inspire | About Us",
  description: "",
};

export default function AboutPage() {
  const navbarLinks = [{ title: "About", link: SelectedPage.About }];
  const miniNavbarLinks = [
    { title: "Home", link: SelectedPage.Home },
    { title: "About", link: SelectedPage.About },
  ];

  return (
    <div>
      <Navbar
        appearScroll={200}
        navbarLinks={navbarLinks}
        miniNavbarLinks={miniNavbarLinks}
      />
      <section id="about" className="md:h-full md:pb-0">
        <div>
          <About />
        </div>
      </section>
    </div>
  );
}
