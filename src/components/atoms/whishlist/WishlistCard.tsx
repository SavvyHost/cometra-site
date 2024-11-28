import React from "react";
import Image from "next/image";
import Link from "next/link";
import { TourPackage } from "@/types/tour";
import WishlistButton from "./WishlistButton";
import { ClockIcon, CurrencyIcon, DollarSign, MapPinIcon } from "lucide-react";

interface WishlistCardProps {
  tour: TourPackage;
}

const WishlistCard: React.FC<WishlistCardProps> = ({ tour }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl">
      <div className="relative">
        <Image
          src={tour.main_image.url}
          alt={tour.title}
          width={400}
          height={250}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          <WishlistButton tour={tour} />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs rounded-full">
            {tour.category.name}
          </span>
        </div>
      </div>

      <div className="p-5">
        <Link href={`/exclusives/${tour.id}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
            {tour.title}
          </h3>
        </Link>

        <div className="space-y-3 mb-4">
          <div className="flex items-center text-gray-600">
            <MapPinIcon className="w-5 h-5 mr-2 text-blue-500" />
            <span>{tour.destination}</span>
          </div>

          <div className="flex items-center text-gray-600">
            <ClockIcon className="w-5 h-5 mr-2 text-blue-500" />
            <span>{tour.duration} Hours</span>
          </div>

          <div className="flex items-center text-gray-600">
            <DollarSign className="w-5 h-5 mr-2 text-blue-500" />
            <div>
              {tour.tour_prices[0]?.prices[0]?.price && (
                <span className="line-through mr-2">
                  ${tour.tour_prices[0]?.prices[0]?.price}
                </span>
              )}
              <span className="text-lg font-bold text-blue-600">
                From ${tour.min_price || "N/A"}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <Link
            href={`/exclusives/${tour.id}`}
            className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WishlistCard;
