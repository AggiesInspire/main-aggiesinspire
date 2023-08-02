import GovernanceSection from "./GovernanceSection";
import Navbar from "@/components/ui/navbars/Navbar";
import VideoNavbar from "@/components/ui/navbars/VideoNavbar";
import { SelectedPage } from "@/components/types";

export default function Governance() {
  const navbarLinks = [{ title: "About", link: SelectedPage.About }];
  const miniNavbarLinks = [
    { title: "Home", link: SelectedPage.Home },
    { title: "About", link: SelectedPage.About },
  ];
  return (
    <>
      <Navbar
        appearScroll={0}
        onTop={true}
        navbarLinks={navbarLinks}
        miniNavbarLinks={miniNavbarLinks}
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
