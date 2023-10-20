import React from "react";
import classNames from "classnames";
import styles from "@/styles/BackgroundVideo.module.css";

const BackgroundVideo = () => {
  return (
    <section>
      <div className={`${styles.videoContainer}`}>
        <video
          autoPlay
          playsInline
          loop
          muted
          preload="metadata"
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
      ></div>
    </section>
  );
};

export default BackgroundVideo;
