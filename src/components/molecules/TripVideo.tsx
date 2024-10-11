import React from "react";

const TripVideo: React.FC = () => {
  return (
    <section className="relative lg:p-0 p-3 ">
      {/* Text above the video */}
      <h2 className="text-3xl font-bold mb-6 text-[#0C1D6D]">Trip Video</h2>

      {/* Video */}
      <video
        className="w-full lg:h-[400px] h-56 object-contain" // Set a fixed height for the video
        src="/assets/vd.mp4"
        autoPlay
        loop
        muted
      ></video>
    </section>
  );
};

export default TripVideo;
