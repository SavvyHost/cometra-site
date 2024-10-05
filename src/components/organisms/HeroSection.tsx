import React from "react";
import HeroContent from "../molecules/HeroContent";

const HeroSection = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Video */}
      <video
        src="assets/vd.mp4"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>

      {/* Hero Content */}
      <div className="relative z-10">
        <HeroContent />
      </div>
    </section>
  );
};

export default HeroSection;
