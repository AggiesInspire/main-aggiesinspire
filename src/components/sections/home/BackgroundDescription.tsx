import React from "react";
import classNames from "classnames";

import LargeHeading from "@/components/text-formatting/LargeHeading";
import { Button } from "@/components/widgets/Button";

const BackgroundDescription = () => {
  return (
    <div
      className={classNames(
        "absolute",
        "bottom-0 xs:h-[45%] h-[35%] md:w-3/5 w-11/12 left-1/2 transform p-4 -translate-x-1/2 center ",
        "text-white",
      )}
    >
      <LargeHeading size={"lg"} className="pb-5 text-white">
        Inspiring the Next Generation To Pursue Greater
      </LargeHeading>
      <Button variant={"background"} className="pb-5">
        Learn about us
      </Button>
    </div>
  );
};

export default BackgroundDescription;
