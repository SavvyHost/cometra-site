import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomPrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute top-1/2 left-0 transform -translate-y-1/2 z-20 bg-cyan-600 text-white rounded-full p-2"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 19l-7-7 7-7"
      />
    </svg>
  </button>
);

const CustomNextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    className="absolute top-1/2 right-0 transform -translate-y-1/2 z-20 bg-cyan-600 text-white rounded-full p-2"
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  </button>
);

const ImageSliderComponent: React.FC<{ images: { url: string }[] }> = ({
  images,
}) => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  useEffect(() => {
    Fancybox.bind('[data-fancybox="gallery"]', {});
  }, []);

  return (
    <div className="relative w-full h-[384px] md:h-[379px] flex items-center lg:mt-5">
      <div className="absolute inset-0 z-10 flex items-center justify-center max-w-7xl mx-auto px-4">
        <Slider ref={sliderRef} {...settings} className="w-full">
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <a href={image.url} data-fancybox="gallery">
                <Image
                  src={image.url}
                  alt={`Slide ${index + 1}`}
                  width={400}
                  height={300}
                  className="rounded-lg object-cover h-[300px] md:h-[384px]"
                />
              </a>
            </div>
          ))}
        </Slider>

        <CustomPrevArrow onClick={() => sliderRef.current?.slickPrev()} />
        <CustomNextArrow onClick={() => sliderRef.current?.slickNext()} />
      </div>
    </div>
  );
};

export default ImageSliderComponent;
