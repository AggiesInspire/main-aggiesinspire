"use client";

import React from "react";

import useMediaQuery from "@/hooks/useMediaQuery";

import LargeHeading from "@/components/text-formatting/LargeHeading";
import Carousel from "@/components/widgets/Carousel";
import mediaSeries from "@/data/images/sections/home/mediaSeries";

const MediaContent = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");

  return (
    <section id="home-media:content" className="w-full">
      <div className={`mx-auto sm:pb-28 pb-10`}>
        <div className="pt-5">
          <div className="mx-auto w-39/40 border border-white"></div>
          <LargeHeading className="py-10 w-39/40 mx-auto">
            Inspiring Media
          </LargeHeading>
          <div>
            <div className="shadow-lg rounded-sm w-39/40 mx-auto">
              <Carousel
                slides={mediaSeries}
                autoSlide={isAboveSmallScreens ? true : false}
                autoSlideInterval={3000}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaContent;
