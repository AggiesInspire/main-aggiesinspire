"use client";

import React from "react";
import Link from "next/link";

import { motion } from "framer-motion";

import { ImYoutube } from "react-icons/im";

import useMediaQuery from "@/hooks/useMediaQuery";

import TypeWriter from "@/components/ui/text-formatting/TypeWriter";
import LargeHeading from "@/components/ui/text-formatting/LargeHeading";
import InViewEffect from "@/components/ui/text-formatting/InViewEffect";

const Heading = () => {
  const isAboveSmallScreens = useMediaQuery("(min-width:768px)");
  const heading = "Inspire Media";
  return (
    <div className={`${isAboveSmallScreens ? "pt-20 pb-5" : "pt-10 pb-2"}`}>
      {" "}
      <motion.div
        className="flex justify-between"
        style={{ alignItems: "center" }}
        onViewportEnter={() => {}}
      >
        <InViewEffect>
          <LargeHeading className="pr-5" size={"xl"} id="type-writer">
            <TypeWriter text={heading} interval={100} Markup={"span"} />
          </LargeHeading>
        </InViewEffect>

        <Link href="https://www.youtube.com/@aggiesinspire">
          <ImYoutube size={100} className="fill-red-600" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Heading;
