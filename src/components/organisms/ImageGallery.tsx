import React from "react";
import Slider from "react-slick";
import Trip from "../../../public/assets/Ellipse 5.png";
import Trip1 from "../../../public/assets/Ellipse 5 (1).png";
import Trip2 from "../../../public/assets/Ellipse 5 (2).png";
import Trip3 from "../../../public/assets/Ellipse 5 (3).png";
import Trip4 from "../../../public/assets/Ellipse 5 (4).png";
import ImageText from "../molecules/ImageText";

// Slick carousel settings
const carouselSettings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3.4,
  slidesToScroll: 1,
  arrows: false,
};

const ImageGallery: React.FC = () => {
  const images = [
    { src: Trip, text: "Category 1" },
    { src: Trip1, text: "Category 2" },
    { src: Trip2, text: "Category 3" },
    { src: Trip3, text: "Category 4" },
    { src: Trip4, text: "Category 5" },
  ];

  return (
    <div className="lg:p-5 p-0">
      {/* Desktop View */}
      <div className="hidden md:flex flex-wrap gap-4">
        {images.map((img, index) => (
          <ImageText
            key={index}
            src={img.src}
            alt={`Image ${index + 1}`}
            text={img.text}
          />
        ))}
      </div>

      {/* Mobile View with Carousel */}
      <div className="md:hidden max-w-7xl mt-3">
        <Slider {...carouselSettings}>
          {images.map((img, index) => (
            <div key={index} className="flex justify-center items-center">
              <ImageText
                src={img.src}
                alt={`Image ${index + 1}`}
                text={img.text}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageGallery;
