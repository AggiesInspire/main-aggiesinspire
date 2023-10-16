import { SelectedPage } from "@/types/pageTypes";

import TopNavbar from "@/components/navbars/TopNavbar";
import BackgroundVideo from "@/components/sections/home/BackgroundVideo";
import BackgroundDescription from "./BackgroundDescription";
import Partners from "./Partners";
import MediaContent from "./MediaContent";

import { ContactUs } from "../contact/ContactUs";

const HomeSection = () => {
  const navbarLinks = [{ title: "About", link: SelectedPage.About }];
  const miniNavbarLinks = [
    { title: "Home", link: SelectedPage.Home },
    { title: "About", link: SelectedPage.About },
  ];

  return (
    <section id="home-section">
      <TopNavbar miniNavbarLinks={miniNavbarLinks} navbarLinks={navbarLinks} />
      <section id="home-screen">
        <BackgroundVideo />
        <BackgroundDescription />
      </section>
      <div className="bg-gradient-to-b from-slate-950 to-primary-500">
        <Partners />
        <MediaContent />
        <ContactUs />
      </div>
    </section>
  );
};

export default HomeSection;
