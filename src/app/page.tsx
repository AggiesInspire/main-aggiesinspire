import React from "react";

import { SelectedPage } from "@/components/types";
import { ContactUs } from "@/components/ui/sections/ContactUs";
import Home from "./(home)/Home";
import { PageWrapper } from "@/components/PageWrapper";
import Navbar from "@/components/ui/navbars/Navbar";

export default function HomePage() {
  const navbarLinks = [{ title: "About", link: SelectedPage.About }];
  const miniNavbarLinks = [
    { title: "Home", link: SelectedPage.Home },
    { title: "About", link: SelectedPage.About },
  ];

  return (
    <PageWrapper>
      <section id="home" className=" bg-gray-20 md:h-full md:pb-0">
        <Navbar
          appearScroll={500}
          navbarLinks={navbarLinks}
          miniNavbarLinks={miniNavbarLinks}
        />
        <div>
          {/* Taken from (sub-sections) under the home root */}
          <Home />
          <ContactUs />
        </div>
      </section>
    </PageWrapper>
  );
}
