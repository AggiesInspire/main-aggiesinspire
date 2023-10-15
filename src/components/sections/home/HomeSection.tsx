import { SelectedPage } from "@/types/pageTypes";

import TopNavbar from "@/components/navbars/TopNavbar";
import BackgroundVideo from "@/components/sections/home/BackgroundVideo";
import BackgroundDescription from "./BackgroundDescription";

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
      <ContactUs />
    </section>
  );
};

export default HomeSection;
