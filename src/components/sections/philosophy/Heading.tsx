"use client";
import React from "react";
import { CldImage } from "next-cloudinary";

import LargeHeading from "@/components/text-formatting/LargeHeading";
import TypeWriter from "@/components/text-formatting/TypeWriter";

const Heading = () => {
  return (
    <section
      id="about-heading"
      className="bg-gradient-to-r from-primary-300
          to-primary-100
          via-gray-200
          animate-gradient-x"
    >
      <div className="min-h-screen grid sm:grid-cols-2 grid-cols-1 pb-32 md:gap-10">
        <div className="mx-auto w-39/40">
          <LargeHeading
            size={"lg"}
            className="text-primary-1000 sm:mt-60 mt-48 sm:w-39/40 w-11/12 "
          >
            <TypeWriter
              text="Our Philosophy"
              interval={70}
              Markup={"span"}
            ></TypeWriter>
          </LargeHeading>
          <LargeHeading size={"sm"} className="pt-10 text-primary-1000">
            Below describes the governing principles and edifices to our
            approach.
          </LargeHeading>
        </div>
        <CldImage
          alt="lorenz-butterfly"
          src="https://res.cloudinary.com/main-aggiesinspire/image/upload/v1697774778/home/1545252098_qqdqo9"
          height={781}
          width={1328}
          className="md:ml-20 pt-32"
          crop="thumb"
          gravity="auto"
          sizes="100w"
          priority={true}
        />
      </div>
    </section>
  );
};

export default Heading;
