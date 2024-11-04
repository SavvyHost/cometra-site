// CardComponent.tsx
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RequestFormModal from "../molecules/PopUpFormRequest";
import { TourPackage } from "@/types/tour";

interface CardComponentProps {
  toursData: TourPackage[];
}

const CardComponent: React.FC<CardComponentProps> = ({ toursData }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedTour, setSelectedTour] = useState<TourPackage | null>(null);

  const filteredTours = toursData;

  const handleOpenModal = (tour: TourPackage) => {
    setSelectedTour(tour);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedTour(null);
  };

  return (
    <div className="container mx-auto">
      <RequestFormModal
        open={openModal}
        onClose={handleCloseModal}
        title={selectedTour?.title || "Details"}
        DetailTour={selectedTour}
      />

      {/* Desktop View */}
      <div className="hidden md:block">
        {filteredTours.map((tour) => (
          <div
            key={tour.id}
            className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-8"
          >
            <div className="flex flex-row-reverse items-center">
              <div className="w-1/2 h-96 relative group overflow-hidden">
                <Image
                  src={tour.main_image.url}
                  alt={tour.title}
                  width={400}
                  height={200}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  <button
                    className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors"
                    onClick={() => handleOpenModal(tour)}
                  >
                    Get Price
                  </button>
                </div>
              </div>
              <div className="w-1/2 p-8">
                <Link href={`/exclusives/${tour.id}`}>
                  <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
                    {tour.category.name}
                  </div>
                  <h2 className="mt-2 text-xl font-semibold text-gray-900">
                    {tour.title}
                  </h2>
                  <p
                    className="text-gray-700 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: tour.description }}
                  />
                  <div className="mt-4 space-y-2">
                    <div className="text-sm text-gray-600">
                      <span className="font-bold">Destination:</span>{" "}
                      {tour.destination}
                    </div>
                    <div className="text-sm text-gray-600">
                      <span className="font-bold">Duration:</span>{" "}
                      {tour.duration} Hours
                    </div>
                    <div className="text-sm text-gray-600 line-through">
                      <span className="font-bold">From:</span> $
                      {tour.tour_prices[0]?.prices[0]?.price || "N/A"}
                    </div>
                    <div className="text-lg text-blue-600">
                      <span className="font-bold">From:</span> $
                      {tour.min_price || "N/A"}
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden">
        <div className="flex flex-col items-center">
          {filteredTours.map((tour) => (
            <div key={tour.id} className="w-11/12">
              <div className="bg-white my-2 shadow-lg rounded-lg overflow-hidden">
                <div className="relative group overflow-hidden">
                  <Image
                    src={tour.main_image.url}
                    alt={tour.title}
                    width={400}
                    height={300}
                    className="w-full h-44 object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <button
                      className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition-colors"
                      onClick={() => handleOpenModal(tour)}
                    >
                      Get Price
                    </button>
                  </div>
                </div>
                <div className="p-2">
                  <Link href={`/exclusives/${tour.id}`}>
                    <div className="uppercase tracking-wide text-sm text-blue-500 font-semibold">
                      {tour.category.name}
                    </div>
                    <h2 className="mt-2 text-lg font-semibold text-gray-900">
                      {tour.title}
                    </h2>
                    <p
                      className="text-gray-700 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: tour.description }}
                    />
                    <div className="mt-3 space-y-1">
                      <div className="text-xs text-gray-600">
                        <span className="font-bold">Destination:</span>{" "}
                        {tour.destination}
                      </div>
                      <div className="text-xs text-gray-600">
                        <span className="font-bold">Duration:</span>{" "}
                        {tour.duration} Hours
                      </div>
                      <div className="text-xs text-gray-600">
                        <span className="font-bold">From:</span> $
                        {tour.tour_prices[0]?.prices[0]?.price || "N/A"}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
