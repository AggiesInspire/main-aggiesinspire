import React from "react";

import LargeHeading from "@/components/text-formatting/LargeHeading";

import Media from "./Media";
import Programs from "./Programs";

const OurWork = () => {
  return (
    <div className="pt-20 sm:w-39/40 w-11/12 mx-auto">
      <div className="border border-red-950"></div>
      <div className="pt-10">
        <LargeHeading className="text-gray-800 pb-10" size={"lg"}>
          Our Work
        </LargeHeading>
        <div className="border border-gray-400"></div>
      </div>
      <Programs />
      <Media />
    </div>
  );
};

export default OurWork;
