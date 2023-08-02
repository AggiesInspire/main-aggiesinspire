"use client";

import React from "react";

import useMediaQuery from "@/hooks/useMediaQuery";

import { MediaSectionsType, SelectedPage } from "@/components/types";
import LargeHeading from "@/components/ui/text-formatting/LargeHeading";
import Carousel from "@/components/ui/Carousel";
import InViewEffect from "@/components/ui/text-formatting/InViewEffect";

import inspiringSeries from "@/images/InspiringSeriesGraphic.jpeg";
import collegeAdviceSeries from "@/images/CollegeAdviceSeries.jpeg";
import professionInsightsSeries from "@/images/ProfessionalInsightsSeries.jpeg";

const OurContent = () => {
  const slides: Array<MediaSectionsType> = [
    {
      name: "Inspiring Series",
      description:
        "Current college students and professionals give an overview of their personal backgrounds and field of choice. The videos are generally between 2-5 minutes long",
      selectedpage: SelectedPage.InspiringSeries,
      url: "https://www.youtube.com/watch?v=F5MFewOymjo&list=PLws4wxg02B74Ux98f7g8LSnL__V-EZkZY",
      image: inspiringSeries,
    },
    {
      name: "Professional Insights Series",
      description:
        "Current professionals give an overview of their specialty, what they enjoy and not not enjoy about it, and their analysis of the direction of the field or current unique problems that needs to be solved.",
      selectedpage: SelectedPage.ProfessionalInsightsSeries,
      url: "https://www.youtube.com/watch?v=w7MMKakAOiM&list=PLws4wxg02B77u0uOoyyxQ5DusOiV82vAB",
      image: professionInsightsSeries,
    },
    {
      name: "College Advice - Major Specific Series",
      description:
        "Senior or Junior designated college students give specific advice to those who have similar career aspirations.",
      selectedpage: SelectedPage.CollegeAdviceSeries,
      url: "https://www.youtube.com/watch?v=vKfUwQRP298&list=PLws4wxg02B74QnsopI9H5mJdQCUWJPC5A",
      image: collegeAdviceSeries,
    },
  ];
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");

  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home-media:content" className="w-full">
      <div className={`mx-auto ${isAboveSmallScreens ? "pb-28" : "pb-10"}`}>
        <div>
          <div
            className="flex justify-between"
            style={{ alignItems: "center" }}
          >
            <div
              style={{
                flex: 1,
                backgroundColor: "#FF9595",
                height: "3px",
              }}
            />
            <LargeHeading size={"xs"} className="py-20 pl-2">
              OUR CONTENT
            </LargeHeading>
          </div>
          <div
            className={` ${isAboveMediumScreens ? "" : "h-[815] xs:h-[390px]"}`}
          >
            <div className="shadow-lg rounded-sm">
              <Carousel
                slides={slides}
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

export default OurContent;
