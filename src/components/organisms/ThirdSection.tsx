import React, { useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import RequestFormModal from "../molecules/PopUpFormRequest";
import Product from "../../../public/assets/product card photo.png";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Types
interface TourPackage {
  id: number;
  title: string;
  description: string;
  imageUrl: StaticImageData;
}

interface ArrowProps {
  onClick?: () => void;
}

// Components
const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden lg:block absolute -left-[100px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md"
  >
    <ChevronLeft className="w-6 h-6 text-blue-600" />
  </button>
);

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className="hidden lg:block absolute -right-[100px] top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-1 shadow-md"
  >
    <ChevronRight className="w-6 h-6 text-blue-600" />
  </button>
);

const ThirdSection: React.FC<{ toursData?: TourPackage[] }> = ({
  toursData,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<TourPackage | null>(
    null
  );

  const handleModalOpen = (pkg: TourPackage) => {
    setSelectedPackage(pkg);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
  };

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  if (!toursData || !Array.isArray(toursData) || toursData.length === 0) {
    return (
      <div className="max-w-screen-lg mx-auto lg:py-20 py-8 flex flex-col items-center">
        <h2 className="text-2xl lg:text-3xl lg:mb-16 mb-6 text-center">
          <span className="text-cyan-400 font-dinCondensed">Our</span> <br />
          <span className="text-[#0C1D6D] font-semibold">Exclusives</span>
        </h2>
        <p className="text-gray-600">
          No tour packages available at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-screen-lg mx-auto lg:py-20 py-8 flex flex-col items-center">
      <h2 className="text-2xl lg:text-3xl lg:mb-16 mb-6 text-center">
        <span className="text-cyan-400 font-dinCondensed">Our</span> <br />
        <span className="text-[#0C1D6D] font-semibold">Exclusives</span>
      </h2>
      <Slider {...settings} className="w-full">
        {toursData.map((pkg) => (
          <div key={pkg.id} className="px-4 lg:px-8">
            <div className="md:flex cursor-pointer">
              <div className="md:flex-shrink-0">
                <Image
                  className="w-full h-64 object-cover md:w-[475px] md:h-72 rounded-md"
                  src={pkg.main_image.url}
                  alt={pkg.title}
                  width={200}
                  height={200}
                />
              </div>
              <div className="p-4 md:p-8 md:flex-grow">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-800 mb-2">
                  {pkg.title}
                </h3>

                <p
                  className="text-gray-600 mb-4 w-full md:w-full h-auto lg:w-[450px] line-clamp-4"
                  dangerouslySetInnerHTML={{ __html: pkg.description }}
                />
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                  <button
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                    onClick={() => handleModalOpen(pkg)}
                  >
                    Get Price
                  </button>
                  <Link href={`/exclusives/${pkg.id}`} passHref>
                    <button className="bg-cyan-100 w-full md:w-fit text-blue-800 px-4 py-2 rounded hover:bg-cyan-200 transition">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {selectedPackage && (
        <RequestFormModal
          open={isModalOpen}
          onClose={handleModalClose}
          title={`Request Price for ${selectedPackage.title}`}
        />
      )}
    </div>
  );
};

export default ThirdSection;
