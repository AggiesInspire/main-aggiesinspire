"use client";
import BackgroundVideo from "@/sections/home/BackgroundVideo";

import ButtonLink from "@/components/links/ButtonLink";
import HomePageText from "@/images/Home/HomePageText.png";
import Paragraph, {
  paragraphVariants,
} from "@/components/text-formatting/Paragraph";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/types/pageTypes";
import TopNavbar from "@/components/navbars/TopNavbar";

const HomeSection = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const navbarLinks = [{ title: "About", link: SelectedPage.About }];
  const miniNavbarLinks = [
    { title: "Home", link: SelectedPage.Home },
    { title: "About", link: SelectedPage.About },
  ];

  /* The positioning of these items are not ideal. I would like for the text elements and button to dynamically be positioned in the middle
  however, I cannot seem to get that to work, so this current format will suffice for now. This comment is here so that in the future, the positioning
  will adjusted so that it will be in the ideal state. */

  return (
    <>
      <TopNavbar miniNavbarLinks={miniNavbarLinks} navbarLinks={navbarLinks} />
      <BackgroundVideo />
    </>
  );
};

export default HomeSection;
