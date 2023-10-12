const BackgroundVideo = () => {
  return (
    <div className="overflow-hidden aspect-video pointer-events-none">
      <video autoPlay playsInline loop muted>
        <source src="/videos/backgroundVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default BackgroundVideo;
