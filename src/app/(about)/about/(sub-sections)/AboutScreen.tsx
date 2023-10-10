"use client";
import React from "react";

import Image from "next/image";

import VideoNavbar from "@/components/ui/navbars/VideoNavbar";
import backgroundImage from "@/images/Backgrounds/cindy-liu-toinspire.jpg";
import { SelectedPage } from "@/components/types";
import LargeHeading from "@/components/ui/text-formatting/LargeHeading";

const AboutScreen = () => {
  const navbarLinks = [{ title: "About", link: SelectedPage.About }];
  const miniNavbarLinks = [
    { title: "Home", link: SelectedPage.Home },
    { title: "About", link: SelectedPage.About },
  ];
  return (
    <>
      <VideoNavbar
        miniNavbarLinks={miniNavbarLinks}
        navbarLinks={navbarLinks}
      />
      <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
        <Image
          src={backgroundImage}
          alt="about-backgroundimage"
          layout="fill"
          placeholder="blur"
          objectFit="cover"
          sizes="(min-width: 60em) 24vw,
                    (min-width: 28em) 45vw,
                    100vw"
        />
        <div className="absolute transform -rotate-90 bottom-0 -translate-y-full ">
          {" "}
          <LargeHeading size={"lg"} className="text-white py-2">
            About{" "}
          </LargeHeading>
        </div>
      </div>{" "}
    </>
  );
};

export default AboutScreen;
