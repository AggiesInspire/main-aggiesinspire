import React from "react";

import type { Metadata } from "next";
import ContactSection from "@/app/contact/ContactSection";
import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Aggies Inspire | Contact Us",
  description: "",
};

export default function Contact() {
  return (
    <section id="contact" className="mt-20 bg-gray-20 md:h-full md:pb-0">
      <PageWrapper>
        <ContactSection />
      </PageWrapper>
    </section>
  );
}
