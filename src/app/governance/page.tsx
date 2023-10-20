import { Metadata } from "next";
import GovernanceSection from "@/components/sections/governance/GovernanceSection";
import { SelectedPage } from "@/types/pageTypes";
import navbarLinks from "@/objects/links/navbars/navbarLinks";

import TopNavbar from "@/components/navbars/TopNavbar";
import Navbar from "@/components/navbars/Navbar";

export const metadata: Metadata = {
  title: "Aggies Inspire | Governance",
  description: "Current board of directors for Aggies Inspire Inc.",
};

export default function GovernancePage() {
  const miniNavbarLinks = [
    { title: "Home", link: SelectedPage.Home },
    { title: "About", link: SelectedPage.About },
  ];

  return (
    <div className="bg-gray-20">
      <Navbar
        appearScroll={250}
        navbarLinks={navbarLinks}
        miniNavbarLinks={miniNavbarLinks}
      />
      <TopNavbar
        navbarLinks={navbarLinks}
        miniNavbarLinks={miniNavbarLinks}
        transparent={true}
      />
      <section
        id="governance"
        className="mt-20 gap-16 bg-gray-20 md:h-full md:pb-0"
      >
        <GovernanceSection />
      </section>
    </div>
  );
}
