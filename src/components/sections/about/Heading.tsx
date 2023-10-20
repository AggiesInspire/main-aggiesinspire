"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

import LargeHeading from "@/components/text-formatting/LargeHeading";

const Heading = () => {
  return (
    <section id="about-heading" className="mt-60 sm:w-39/40 w-11/12 mx-auto">
      <div className="grid sm:grid-cols-2 grid-cols-1">
        <LargeHeading size={"lg"} className="text-primary-1000">
          About
        </LargeHeading>
        <LargeHeading size={"xs"} className="text-red-950 sm-pt-0 pt-5">
          Aggies Inspire Inc. is a 501c3 domestic nonprofit based in the United
          States. Our mission is to inspire to pursue greater.
        </LargeHeading>
      </div>
      <CldImage
        src="/home/cindy-liu-toinspire_ph1lp0"
        alt="to-inspire-cindy-liu"
        width={3000}
        height={1000}
        className="pt-20"
        sizes="100w"
        priority={true}
      />
    </section>
  );
};

export default Heading;
