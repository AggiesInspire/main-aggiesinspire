"use client";
import React from "react";
import PartnerCCF from "@/images/partners/CCFLogo.png";
import PartnerTheBaseChicago from "@/images/partners/TheBaseChicagoLogo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import Image from "next/image";

const HomeSponsorSection = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

  const partners = [
    {
      image: (
        <a href="https://www.thebasechi.org/" target="_blank">
          <Image alt="ccf-partner" src={PartnerTheBaseChicago} height="80" />
        </a>
      ),
    },
    {
      image: (
        <a href="https://chicagochessfoundation.org/" target="_blank">
          <Image alt="ccf-partner" src={PartnerCCF} height="75" />
        </a>
      ),
    },
  ];
  return (
    <section id="home-partners">
      {/* Sponsors */}
      <div>
        {isAboveMediumScreens && (
          <div
            className="h-[150px] w-full pt-10 pb-20 bg-gradient-to-r
          from-primary-400
          to-primary-100
          via-gray-200
          animate-gradient-x"
          >
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
                {partners.map((partner) => (
                  <div>{partner.image} </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeSponsorSection;
