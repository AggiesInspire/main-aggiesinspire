"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import LargeHeading from "@/components/text-formatting/LargeHeading";

import { partners } from "@/data/images/sections/home/partners";

const Partners = () => {
  const router = useRouter();
  const handleNavigation = (link: string) => {
    router.push(link);
  };
  return (
    <div className="py-8 w-full ">
      <div className="mx-auto w-39/40 border border-white"></div>
      <div className="container pt-5">
        <LargeHeading className="w-39/40 mx-auto">Partners</LargeHeading>
        <div className="mx-auto mt-10 h-[450px] w-[97.5vw] overflow-x-auto  overflow-y-hidden no-scrollbar">
          <ul className="whitespace-nowrap ">
            {partners.map((partner, index) => (
              <li
                key={"Partner " + index}
                className="relative mx-5 inline-block h-[400px] w-[350px]"
              >
                <Image
                  alt={`${partner.image}`}
                  src={partner.image}
                  width={350}
                  height={350}
                  onClick={() => handleNavigation(partner.websiteUrl)}
                  className="cursor-pointer hover:animate-pulse "
                />
                <div className="text-primary-500 font-medium text-xl py-1">
                  {partner.name}
                </div>
                <div className="text-primary-100">{partner.mission}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Partners;
