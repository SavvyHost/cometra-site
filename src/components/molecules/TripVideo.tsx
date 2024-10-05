import React from "react";

const TripVideo: React.FC = () => {
  return (
    <section className="relative  lg:w-[96%] w-11/12 mx-auto lg:my-4 my-0 bg-white">
      {/* Text above the video */}
      <h2 className="text-2xl font-bold mb-4 text-[#0C1D6D]">Trip Video</h2>

      {/* Video */}
      <video
        className="w-full lg:h-[400px] h-56 object-contain" // Set a fixed height for the video
        src="/assets/vd.mp4"
        autoPlay
        loop
        muted
        controls
      ></video>
    </section>
  );
};

export default TripVideo;
