import React from "react";
import classNames from "classnames";
import styles from "@/styles/BackgroundVideo.module.css";

import LargeHeading from "@/components/text-formatting/LargeHeading";
import { Button } from "@/components/widgets/Button";

const BackgroundVideo = () => {
  return (
    <section>
      <div className={`${styles.videoContainer}`}>
        <video
          autoPlay
          playsInline
          loop
          muted
          className={`${styles.video}  brightness-65`}
        >
          <source src="/videos/backgroundVideo.mp4" type="video/mp4" />
        </video>
      </div>
      <div
        className={classNames(
          "absolute",
          "bottom-0 h-[45%] md:w-3/5 w-11/12 left-1/2 transform p-4 -translate-x-1/2 center ",
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
    </section>
  );
};

export default BackgroundVideo;
