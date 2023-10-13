import React from "react";
import styles from "@/styles/BackgroundVideo.module.css";

const BackgroundVideo = () => {
  return (
    <div className={`${styles.videoContainer}`}>
      <video autoPlay playsInline loop muted className={`${styles.video}`}>
        <source src="/videos/backgroundVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
