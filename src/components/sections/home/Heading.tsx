import React from "react";

import TypeWriter from "@/components/text-formatting/TypeWriter";
import LargeHeading from "@/components/text-formatting/LargeHeading";
import InViewEffect from "@/components/text-formatting/InViewEffect";

const Heading = () => {
  const heading = "About Us";
  return (
    <div className={`md:pt-20 md:pb-16 xs:pt-10 xs:pb-6`}>
      <div className="flex justify-between" style={{ alignItems: "center" }}>
        <InViewEffect>
          <LargeHeading className="pr-5" size={"xl"} id="type-writer">
            <TypeWriter text={heading} interval={50} Markup={"span"} />
          </LargeHeading>
        </InViewEffect>
      </div>
    </div>
  );
};

export default Heading;
