import React from "react";

import type { Metadata } from "next";
import { ContactUs } from "@/components/sections/contact/ContactUs";
import navbarLinks from "@/objects/links/navbars/navbarLinks";
import TopNavbar from "@/components/navbars/TopNavbar";
import Footer from "@/components/sections/footer/Footer";

export const metadata: Metadata = {
  title: "Aggies Inspire | Contact Us",
  description: "Contact us for volunteering opportunties!",
};

export default function ContactPage() {
  return (
    <div>
      <TopNavbar transparent={false} navbarLinks={navbarLinks} />
      <section id="contact" className=" bg-gray-20 md:h-full md:pb-0">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
}
