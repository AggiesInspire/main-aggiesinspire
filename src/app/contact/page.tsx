import React from "react";

import type { Metadata } from "next";
import ContactSection from "@/app/contact/ContactSection";
import { PageWrapper } from "@/components/transitions/PageWrapper";
import { SelectedPage } from "@/components/types";
import Navbar from "@/components/ui/navbars/Navbar";

export const metadata: Metadata = {
  title: "Aggies Inspire | Contact Us",
  description: "",
};

export default function Contact() {
  const navbarLinks = [{ title: "About", link: SelectedPage.About }];
  const miniNavbarLinks = [
    { title: "Home", link: SelectedPage.Home },
    { title: "About", link: SelectedPage.About },
  ];

  return (
    <div>
      <PageWrapper>
        <Navbar
          appearScroll={0}
          onTop={true}
          navbarLinks={navbarLinks}
          miniNavbarLinks={miniNavbarLinks}
        />
        <section id="contact" className=" bg-gray-20 md:h-full md:pb-0">
          <ContactSection />
        </section>
      </PageWrapper>
    </div>
  );
}
