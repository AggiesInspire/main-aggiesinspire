import React from "react";

import Heading from "./Heading";
import Rationale from "./Rationale";

const PhilosophySection = () => {
  return (
    <section id="philosophy-section">
      <Heading />
      <div className="bg-white">
        <Rationale />
      </div>
    </section>
  );
};

export default PhilosophySection;
