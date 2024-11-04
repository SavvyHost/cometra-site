import React from "react";

type TripTitleProps = {
  title: string;
  destination: string;
  description: any; // <-- Add description to the props
  duration: number;
  ageRange: string;
  price: number;
};

const TripTitle: React.FC<TripTitleProps> = ({
  title,
  destination,
  description, // <-- Destructure description here
  duration,
  ageRange,
  price,
}) => {
  return (
    <div className="bg-white p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-700">{title}</h2>
      <p className="text-gray-600 mb-6">
        Explore {destination}, a beautiful location perfect for your next trip.
      </p>
      {/* Render the dynamic description */}
      <div
        className="text-xl font-base mb-4 text-gray-700"
        dangerouslySetInnerHTML={{
          __html: description ?? "No description available.",
        }}
      />{" "}
      {/* <-- Add description here */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h3 className="text-lg font-medium mb-2">Details</h3>
          <ul className="space-y-2">
            <li>
              <span className="font-medium">Price:</span> {price} $
            </li>
            <li>
              <span className="font-medium">Destination:</span> {destination}
            </li>
            <li>
              <span className="font-medium">Duration:</span> {duration} days
            </li>
            <li>
              <span className="font-medium">Age range:</span> {ageRange}
            </li>
            <li>
              <span className="font-medium">Operated in:</span> English
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-4">
          <button className="bg-blue-700 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded">
            Send Request
          </button>
          <button className="bg-blue-200 hover:bg-blue-300 text-blue-700 font-medium py-2 px-4 rounded">
            Download Brochure
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripTitle;
