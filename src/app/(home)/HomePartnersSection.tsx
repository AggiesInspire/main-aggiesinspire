"use client";
import React from "react";
import PartnerCCF from "@/images/PartnerCCF.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";

const HomeSponsorSection = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home-partners">
      {/* Sponsors */}
      <div>
        {isAboveMediumScreens && (
          <div className="h-[150px] w-full bg-primary-100 pt-10 pb-20">
            <div className="mx-auto w-11/12">
              <div className="flex w-3/5 items-center justify-between gap-5">
                <a
                  href="https://www.guidestar.org/profile/shared/c5ebdd2f-9aca-481f-9b2a-5439fc5f8318"
                  target="_blank"
                >
                  <img
                    alt="guidestar"
                    src="https://widgets.guidestar.org/TransparencySeal/10021967"
                    width="79"
                    height="79"
                  />
                </a>
                <a href="https://chicagochessfoundation.org/" target="_blank">
                  <Image alt="ccf-partner" src={PartnerCCF} height="75" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeSponsorSection;
