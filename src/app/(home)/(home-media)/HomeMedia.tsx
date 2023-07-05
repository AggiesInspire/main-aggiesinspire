import React from "react";

import Heading from "./Heading";
import OurContent from "./OurContent";
import Youtube from "./Youtube";

const HomeMedia = () => {
  return (
    <section
      id="home-media"
      className="w-full bg-gradient-to-l from-primary-300 to-primary-400"
    >
      <div className="mx-auto w-11/12">
        <Heading />
        <Youtube />
        <OurContent />
      </div>
    </section>
  );
};

export default HomeMedia;
