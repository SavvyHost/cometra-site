import React from "react";
import Image, { StaticImageData } from "next/image";

interface ImageTextProps {
  src: StaticImageData;
  alt: string;
  text: string;
  isActive?: boolean;
}

const ImageText: React.FC<ImageTextProps> = ({ src, alt, text, isActive }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center lg:m-2 m-1 lg:p-2 p-1 text-center cursor-pointer lg:bg-white ${
        isActive ? " rounded-xl border border-blue-800 " : ""
      }`}
    >
      <Image
        src={src}
        alt={alt}
        style={{
          borderRadius: "30% 10% 40% 95%",
          width: "100px", // Adjusted size
          height: "70px", // Adjusted size
        }}
        className="w-auto h-auto object-contain"
      />
      <p className={`mt-2 ${isActive ? "" : ""} text-sm`}>{text}</p>
    </div>
  );
};

export default ImageText;
