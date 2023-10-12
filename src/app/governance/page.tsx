import { Metadata } from "next";
import GovernanceSection from "@/components/sections/governance/GovernanceSection";
import { SelectedPage } from "@/types/pageTypes";

import TopNavbar from "@/components/navbars/TopNavbar";
import Navbar from "@/components/navbars/Navbar";

export const metadata: Metadata = {
  title: "Aggies Inspire | Governance",
  description: "Current board of directors for Aggies Inspire Inc.",
};

export default function GovernancePage() {
  const navbarLinks = [{ title: "About", link: SelectedPage.About }];
  const miniNavbarLinks = [
    { title: "Home", link: SelectedPage.Home },
    { title: "About", link: SelectedPage.About },
  ];

  return (
    <>
      <Navbar
        appearScroll={250}
        navbarLinks={navbarLinks}
        miniNavbarLinks={miniNavbarLinks}
      />
      <TopNavbar
        navbarLinks={navbarLinks}
        miniNavbarLinks={miniNavbarLinks}
        transparent={false}
      />
      <section
        id="governance"
        className="mt-20 gap-16 bg-gray-20 md:h-full md:pb-0"
      >
        <GovernanceSection />
      </section>
    </>
  );
}
