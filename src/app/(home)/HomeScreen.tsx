"use client";

import ButtonLink from "@/components/links/ButtonLink";
import Image from "next/image";
import HomePageText from "@/images/Home/HomePageText.png";
import Paragraph, {
  paragraphVariants,
} from "@/components/ui/text-formatting/Paragraph";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/components/types";

const HomeSection = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  /* The positioning of these items are not ideal. I would like for the text elements and button to dynamically be positioned in the middle
  however, I cannot seem to get that to work, so this current format will suffice for now. This comment is here so that in the future, the positioning
  will adjusted so that it will be in the ideal state. */

  return (
    <section id="home-screen">
      <div className="relative">
        <video className="w-full" autoPlay playsInline loop muted>
          <source src="/videos/website_home_video.mp4" type="video/mp4" />
        </video>

        <div
          className={
            isAboveMediumScreens
              ? "w-5/6 absolute top-1 mt-28 right-7"
              : "md:flex mx-auto mt-10 w-5/6 items-center justify-center md:h-5/6"
          }
        >
          <Image alt="home-page-text" src={HomePageText} />

          <div>
            <Paragraph
              className={`${
                isAboveMediumScreens
                  ? paragraphVariants({ size: "video" })
                  : paragraphVariants({ size: "default" })
              } w-3/5`}
            >
              We are a 501(c)(3) non-profit based in Texas with the focus to
              inspire, inform, and encourage the next generation to pursue
              careers that align with their best interests. Our focus is on the
              underserved, but we are open to all.
            </Paragraph>
          </div>
          <div className="pt-8 flex gap-8 pb-20">
            <ButtonLink path={SelectedPage.Contact}>Get Involved</ButtonLink>
          </div>
        </div>
      </div>

      {/* Actions */}
    </section>
  );
};

export default HomeSection;
