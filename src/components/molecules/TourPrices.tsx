import React from "react";
import { FaBed, FaUsers, FaSuitcase } from "react-icons/fa"; // Import icons
import { LuBedDouble } from "react-icons/lu";
interface Price {
  id: number;
  title: string;
  price: number;
}

interface TourPrice {
  id: number;
  title: string;
  from_month: string;
  to_month: string;
  prices: Price[];
}

interface TourPricesProps {
  tourPrices: TourPrice[];
}

// Mapping price titles to icons
const priceIcons: { [key: string]: JSX.Element } = {
  SGL: <FaBed className="text-gray-800" />,
  DBL: <LuBedDouble className="text-gray-800" />,
  TPL: <FaUsers className="text-gray-800" />, // You could choose different icons for different titles if needed
  Suite: <FaSuitcase className="text-gray-800" />,
};

const TourPrices: React.FC<TourPricesProps> = ({ tourPrices }) => {
  return (
    <div className="flex flex-col items-start lg:p-0 p-3">
      <h2 className="text-3xl font-bold mb-6 text-[#0C1D6D]">Tour Prices</h2>
      <div className="lg:w-full w-full px-4 lg:px-0">
        {tourPrices.map((tour) => (
          <div
            key={tour.id}
            className="border-b border-gray-200 mb-4 pb-4 last:border-b-0"
          >
            <h3 className="text-xl font-semibold">{tour.title}</h3>
            <p className="text-gray-600">
              From {tour.from_month} to {tour.to_month}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {tour.prices.map((price) => (
                <div
                  key={price.id}
                  className="flex items-center p-4 border border-gray-300 rounded-lg"
                >
                  <div className="mr-2">{priceIcons[price.title]}</div>
                  <div className="flex justify-between w-full">
                    <span className="text-gray-800">{price.title}</span>
                    <span className="text-gray-800">
                      ${price.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TourPrices;
